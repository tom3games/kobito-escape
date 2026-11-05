// 全部の確認。node verify.mjs（テスト中は無音）
import { chromium, webkit } from 'playwright'
import { spawn } from 'node:child_process'
import { mkdirSync } from 'node:fs'
import { MUTE_LAUNCH, muteContext } from './mute.mjs'
import { play } from './tools/sim.mjs'
import { sweep } from './tools/reach.mjs'
import { START } from './shared/house.js'
const ROOT = import.meta.dirname
mkdirSync(ROOT + '/shots', { recursive: true })
const PORT = 5776
const server = spawn(process.execPath, ['server.mjs'], { cwd: ROOT, env: { ...process.env, PORT: String(PORT) } })
await new Promise(r => setTimeout(r, 400))
const URL0 = `http://localhost:${PORT}/`
let pass = 0, fail = 0
const results = []
async function t(name, fn) {
  try { const r = await fn(); if (r === false) throw new Error('false'); pass++; results.push(`ok   ${name}${r && r !== true ? '  ' + JSON.stringify(r) : ''}`) }
  catch (e) { fail++; results.push(`FAIL ${name}  ${e.message.split('\n')[0]}`) }
}
const expect = (c, msg) => { if (!c) throw new Error(msg) }
async function open(browser, opts = {}) {
  const ctx = await browser.newContext({ locale: 'ja-JP', viewport: { width: 390, height: 844 }, ...opts })
  await muteContext(ctx)
  await ctx.addInitScript(() => { try { localStorage.clear() } catch (e) {} })
  const p = await ctx.newPage(); p.errs = []
  p.on('pageerror', e => p.errs.push('pageerror ' + e.message))
  p.on('console', m => { if (m.type() === 'error') p.errs.push('console ' + m.text()) })
  p.on('requestfailed', r => { if (!/fonts\.(googleapis|gstatic)/.test(r.url())) p.errs.push('reqfail ' + r.url()) })
  await p.goto(URL0); await p.waitForFunction(() => window.__kobReady, null, { timeout: 30000 })
  return p
}
const overflow = p => p.evaluate(() => {
  const W = document.documentElement.clientWidth, bad = []
  for (const el of document.querySelectorAll('section:not(.hidden) *')) {
    if (el.closest('.hidden') || el.closest('svg') || (el.checkVisibility && !el.checkVisibility({ visibilityProperty: true }))) continue
    const r = el.getBoundingClientRect(); if (r.width && (r.right > W + 1 || r.left < -1)) bad.push((el.id || el.className || el.tagName) + ':' + Math.round(r.left) + '-' + Math.round(r.right))
  }
  return { sw: document.documentElement.scrollWidth, W, bad: bad.slice(0, 5) }
})
const fit = p => p.evaluate(() => {
  const H = innerHeight, de = document.documentElement, over = []
  if (de.scrollHeight > H + 1) over.push('page:' + de.scrollHeight)
  for (const el of document.querySelectorAll('section:not(.hidden) button, section:not(.hidden) canvas, section:not(.hidden) a, section:not(.hidden) .memo')) { if (el.closest('.hidden')) continue; const r = el.getBoundingClientRect(); if (!r.width) continue; if (r.bottom > H + 1 || r.top < -1) over.push((el.id || el.className) + ':' + Math.round(r.top) + '-' + Math.round(r.bottom)) }
  // メモの中身がはみ出して切れていないか
  for (const el of document.querySelectorAll('section:not(.hidden) .memo ol')) if (el.scrollHeight > el.clientHeight + 1) over.push('ol:' + el.scrollHeight + '>' + el.clientHeight)
  return { H, over: over.slice(0, 6) }
})
// WebGL の描画の輝度の散らばり（ほぼ単色＝何も描けていない）
const glVar = p => p.evaluate(() => { const g = kob.renderer.domElement, c = document.createElement('canvas'); c.width = 64; c.height = 128; const x = c.getContext('2d'); x.drawImage(g, 0, 0, 64, 128); const d = x.getImageData(0, 0, 64, 128).data; let s = 0, s2 = 0, n = 0; for (let i = 0; i < d.length; i += 4) { const v = d[i] * .3 + d[i + 1] * .59 + d[i + 2] * .11; s += v; s2 += v * v; n++ } return Math.round(s2 / n - (s / n) ** 2) })
const SIZES = [[360, 640, 'small'], [390, 844, 'phone'], [430, 932, 'big']]
const touch = { hasTouch: true, isMobile: true, deviceScaleFactor: 2 }

// ---- 釣り合い（bot）。node だけで回す
const N = 16
const stats = {}
for (const k of ['skilled', 'normal', 'clumsy', 'ground', 'idle']) { const rs = []; for (let i = 1; i <= N; i++) rs.push(play(k, i, 300)); stats[k] = rs }
const med = a => { const s = [...a].sort((p, q) => p - q); return s[s.length >> 1] }
const wins = k => stats[k].filter(r => r.won).length
await t('何もしない: 全部負けで一番低い判定（回収）', () => { expect(stats.idle.every(r => !r.won && r.rank === 0), JSON.stringify(stats.idle[0])); return { 秒: med(stats.idle.map(r => r.t)) } })
await t('地面を走るだけでは脱出できない', () => { expect(wins('ground') === 0, wins('ground')); return { 脱出: wins('ground'), 秒: med(stats.ground.map(r => r.t)) } })
await t('上手い > ふつう > 初めて の順に脱出できる', () => { expect(wins('skilled') > wins('normal') && wins('normal') > wins('clumsy'), [wins('skilled'), wins('normal'), wins('clumsy')].join()); return { 上手い: wins('skilled'), ふつう: wins('normal'), 初めて: wins('clumsy'), 回数: N } })
await t('初めての人が全滅でも楽勝でもない', () => { expect(wins('clumsy') >= 1 && wins('clumsy') <= N * 0.6, wins('clumsy')); return wins('clumsy') })
await t('1回の長さが1分前後（上手い）で秒殺ではない', () => { const m = med(stats.skilled.map(r => r.t)); expect(m >= 40 && m <= 150, m); return m })
await t('追手が3種類とも実際に捕まえる', () => { const by = new Set(['roomba', 'cat', 'vac'].filter(b => Object.values(stats).flat().some(r => r.catches.includes(b)))); expect(by.size === 3, [...by].join()); return [...by] })
await t('部屋の端や高い所に隠れ続けても終わる（延長ホース）', async () => {
  const { createHouse, F } = await import('./shared/house.js'), { createRunner, stepRunner } = await import('./shared/runner.js'), { createRun, stepRun, rankOf } = await import('./shared/chase.js')
  const w = createHouse(), out = []
  for (const [x, y, z] of [[165, 170.05, 390], [-150, 135.05, 266], [-40, 150.05, 528], [158, 166.05, 490]]) {
    const me = createRunner({ id: 'm', spawn: { x, y, z } }); me.y = y; const m = createRun(w, me, 2)
    while (!m.over && m.t < 400) { me.events.length = 0; stepRunner(me, {}, 1 / 60, w); stepRun(m, 1 / 60); m.events.length = 0 }
    out.push(Math.round(m.t)); expect(m.over && !m.won, JSON.stringify([x, y, z, m.t]))
  }
  return out
})
await t('同じ seed なら同じ展開', () => { const a = play('normal', 5, 200), b = play('normal', 5, 200); expect(JSON.stringify(a) === JSON.stringify(b), JSON.stringify([a, b])) })
await t('ワイヤー: 開始地点の72向き全部ボタンで掛かる', () => { const rows = sweep(START.x, 0, START.z); const n = rows.filter(r => r.btn).length; expect(n === 72, n); return n })

const browser = await chromium.launch(MUTE_LAUNCH)
const p = await open(browser, touch)
await t('起動時にエラーが出ない', async () => { expect(p.errs.length === 0, p.errs.join('|')) })
await t('ロード画面が消える', async () => { await p.waitForTimeout(600); const c = await p.evaluate(() => document.getElementById('boot').classList.contains('hidden')); expect(c, c) })
await t('ブラウザの拡大が起きない', async () => {
  const r = await p.evaluate(() => {
    const vp = document.querySelector('meta[name=viewport]').content
    const g = new Event('gesturestart', { cancelable: true }); document.dispatchEvent(g)
    const w = new WheelEvent('wheel', { ctrlKey: true, deltaY: -10, bubbles: true, cancelable: true }); window.dispatchEvent(w)
    const k = new KeyboardEvent('keydown', { key: '+', ctrlKey: true, bubbles: true, cancelable: true }); window.dispatchEvent(k)
    return { vp, gesture: g.defaultPrevented, wheel: w.defaultPrevented, key: k.defaultPrevented, ta: getComputedStyle(document.documentElement).touchAction, us: getComputedStyle(document.body).userSelect }
  })
  expect(/user-scalable=no/.test(r.vp) && r.gesture && r.wheel && r.key && r.ta === 'manipulation' && r.us === 'none', JSON.stringify(r))
})
await t('OGP 一式がある', async () => { const r = await p.evaluate(() => ['og:title', 'og:description', 'og:image', 'og:url', 'og:type'].map(k => !!document.querySelector(`meta[property="${k}"]`)).concat(!!document.querySelector('meta[name="twitter:card"]'))); expect(r.every(Boolean), JSON.stringify(r)) })
await t('3Dが描けている（輝度の散らばり）', async () => { const v = await glVar(p); expect(v > 200, v); return v })

// ---- 遊びの通し（実際の指で）
await p.tap('#btnStart')
await p.waitForTimeout(300)
await t('音は実際には無音（Chromium）', async () => { const r = await p.evaluate(() => window.__muteOk()); expect(r, r) })
await t('はじめに誘導の文字は1つだけ', async () => { const r = await p.evaluate(() => [...document.querySelectorAll('.say:not(.hidden)')].length); expect(r === 1, r) })
await t('フロスのケースを押すと糸が掛かる（実タップ）', async () => {
  await p.tap('#btnWire'); await p.waitForTimeout(400)
  const r = await p.evaluate(() => ({ wire: kob.log.filter(e => e.t === 'wire').length, snd: Snd.played.wire })); expect(r.wire >= 1 && r.snd >= 1, JSON.stringify(r)); return r
})
await t('もう一度押すと離れる', async () => {
  await p.evaluate(() => kob.me.rope || 0); await p.waitForTimeout(100)
  const on = await p.evaluate(() => !!kob.me.rope)
  await p.tap('#btnWire'); await p.waitForTimeout(200)
  const r = await p.evaluate(() => !!kob.me.rope); expect(!on || !r, JSON.stringify({ on, r }))
})
await t('スティックで走る（指で倒した向き）', async () => {
  await p.evaluate(() => { kob.start(77); kob.run.lives = 99; kob.run.roombas[0].wakeAt = 999 }); await p.waitForTimeout(150)
  const a0 = await p.evaluate(() => ({ x: kob.me.x, z: kob.me.z }))
  const c = await p.evaluate(() => { const r = document.getElementById('stick').getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2, h: r.height } })
  await p.evaluate(({ x, y }) => { const el = document.getElementById('stick'); el.dispatchEvent(new PointerEvent('pointerdown', { pointerId: 5, clientX: x, clientY: y, bubbles: true })); window.dispatchEvent(new PointerEvent('pointermove', { pointerId: 5, clientX: x, clientY: y - 50, bubbles: true })) }, c)
  await p.waitForTimeout(700)
  const a1 = await p.evaluate(() => ({ x: kob.me.x, z: kob.me.z }))
  await p.evaluate(() => window.dispatchEvent(new PointerEvent('pointerup', { pointerId: 5, bubbles: true })))
  expect(a1.z - a0.z > 2, JSON.stringify([a0, a1])); return { 進んだ: +(a1.z - a0.z).toFixed(1) }
})
await t('なぞると見回す（感度 0.00792）', async () => {
  const r = await p.evaluate(() => {
    const cv = kob.renderer.domElement, h0 = kob.cam.hd, p0 = kob.cam.pitch
    cv.dispatchEvent(new PointerEvent('pointerdown', { pointerId: 9, clientX: 200, clientY: 300, bubbles: true }))
    window.dispatchEvent(new PointerEvent('pointermove', { pointerId: 9, clientX: 300, clientY: 300, bubbles: true }))
    window.dispatchEvent(new PointerEvent('pointermove', { pointerId: 9, clientX: 300, clientY: 320, bubbles: true }))
    window.dispatchEvent(new PointerEvent('pointerup', { pointerId: 9, clientX: 300, clientY: 320, bubbles: true }))
    return { dh: kob.cam.hd - h0, dp: kob.cam.pitch - p0 }
  })
  expect(Math.abs(r.dh + 100 * 0.00792) < 1e-6 && Math.abs(r.dp - 20 * 0.00528) < 1e-6, JSON.stringify(r)); return r
})
await t('家具を軽くタッチすると掛かる（画面の点から）', async () => {
  const r = await p.evaluate(async () => {
    kob.start(78); kob.dbg.pause(true); kob.run.lives = 99; kob.dbg.teleport(0, 0, 215, -1.57); kob.dbg.render(20); kob.dbg.pause(true); kob.camera.updateMatrixWorld()
    const v = new (kob.camera.position.constructor)(-100, 30, 215).project(kob.camera)
    const sx = (v.x + 1) / 2 * innerWidth, sy = (1 - v.y) / 2 * innerHeight
    kob.dbg.tap(sx, sy); const pend = !!kob.dbg.pending; kob.dbg.step(2); kob.dbg.pause(false)
    return { sx, sy, pend, rope: !!kob.me.rope, ev: kob.log.slice(-3).map(e => e.t) }
  })
  expect(r.pend, JSON.stringify(r)); return r
})
await t('空中で床をタップすると地面ワイヤーで加速（ボタンでは掛からない）', async () => {
  const r = await p.evaluate(() => {
    kob.start(79); kob.dbg.pause(true); kob.run.lives = 99; kob.dbg.teleport(0, 40, 240, 0); kob.me.grounded = false; kob.dbg.step(2); kob.camera.updateMatrixWorld()
    const v0 = Math.hypot(kob.me.vx, kob.me.vy, kob.me.vz)
    const q = new (kob.camera.position.constructor)(0, 0, 268).project(kob.camera)
    kob.dbg.tap((q.x + 1) / 2 * innerWidth, (1 - q.y) / 2 * innerHeight); kob.dbg.step(4)
    const g = kob.me.rope && kob.me.rope.ground, v1 = Math.hypot(kob.me.vx, kob.me.vy, kob.me.vz); kob.dbg.pause(false)
    return { g, v0, v1 }
  })
  expect(r.g && r.v1 > r.v0 + 3, JSON.stringify(r)); return { 加速: +(r.v1 - r.v0).toFixed(1) }
})
// ---- 結果（何もしない通しの様式・勝ち）
const finish = async (q, setup, arg) => { await q.evaluate(setup, arg); await q.waitForFunction(() => window.kob.mode === 'result', null, { timeout: 12000 }); await q.waitForFunction(() => window.__stamped, null, { timeout: 8000 }); return q.evaluate(() => window.__lastResult) }
await t('何もしない通し（実画面）: ハンコは最低の「回収」', async () => {
  const r = await finish(p, () => { window.__stamped = false; kob.start(5); kob.dbg.pause(true); while (!kob.run.over && kob.run.t < 120) kob.dbg.step(30); kob.dbg.pause(false) })
  expect(!r.won && r.rank === 0 && r.stamp === '回収', JSON.stringify(r)); await p.screenshot({ path: ROOT + '/shots/result-idle.png' }); return r
})
const byShot = { vac: '掃除機', cat: '猫', slipper: 'スリッパ', roomba: 'ルンバ' }
for (const by of Object.keys(byShot)) await t(`負けの紙: ${byShot[by]}（様式が変わる・ハンコが遅れて押される）`, async () => {
  const before = await p.evaluate(by => { window.__stamped = false; kob.start(5 + by.length); kob.run.lives = 1; kob.run.by = by; return by }, by)
  const r = await finish(p, by => { const m = kob.run; if (by === 'vac') { m.t = 30; m.immune = 0; m.mom.in = true; m.mom.cool = 0; m.mom.noz.x = kob.me.x; m.mom.noz.y = kob.me.y + 1; m.mom.noz.z = kob.me.z } else if (by === 'cat') { m.cat.state = 'leap'; m.cat.x = kob.me.x; m.cat.y = kob.me.y - 5; m.cat.z = kob.me.z; m.cat.from = { x: m.cat.x, y: m.cat.y, z: m.cat.z }; m.cat.to = { x: m.cat.x, y: m.cat.y, z: m.cat.z }; m.cat.T = 1; m.cat.dur = 1; m.cat.apex = m.cat.y } else if (by === 'slipper') { m.t = 30; m.mom.in = true; m.mom.slip = { x: kob.me.x, z: kob.me.z, y: 0, T: 0.05, r: 15 } } else { const b = m.roombas[0]; b.on = true; b.x = kob.me.x; b.z = kob.me.z + 2 } }, by)
  expect(!r.won && r.by === by, JSON.stringify(r)); await p.screenshot({ path: `${ROOT}/shots/result-${by}.png` }); return r.stamp
})
await t('非常口に着くと勝ち（捕まっていない＝無傷で脱出）', async () => {
  const r = await finish(p, () => { window.__stamped = false; kob.start(21); kob.dbg.teleport(kob.GOAL.x, kob.GOAL.y + 0.2, kob.GOAL.z) })
  expect(r.won && r.rank === 3 && r.stamp === '無傷で脱出', JSON.stringify(r)); await p.screenshot({ path: ROOT + '/shots/result-win.png' }); return r
})
await t('捕まっていたら「脱出」止まり・拾った物が紙に載る', async () => {
  const r = await finish(p, () => { window.__stamped = false; kob.start(22); const m = kob.run; m.catches.push({ by: 'cat', at: 1, way: 0 }); m.items.ring = true; m.itemsGot.push('ring', 'hesokuri'); kob.dbg.teleport(kob.GOAL.x, kob.GOAL.y + 0.2, kob.GOAL.z) })
  expect(r.won && r.rank === 2 && r.items === 2, JSON.stringify(r)); await p.screenshot({ path: ROOT + '/shots/result-win2.png' })
})
await t('落ちている物を拾える。元気な時のポテチは残る・減っていれば回復', async () => {
  const r = await p.evaluate(() => {
    kob.start(23); kob.dbg.pause(true); const m = kob.run; const out = {}
    kob.dbg.teleport(42, 0.1, 182); kob.dbg.step(2); out.coin = m.itemsGot.includes('coin')
    kob.dbg.teleport(-24, 28.1, 150); kob.dbg.step(2); out.chipFull = !!m.items.chip
    m.lives = 2; kob.dbg.step(2); out.chipHurt = !!m.items.chip && m.lives === 3
    kob.dbg.pause(false); return out
  })
  expect(r.coin && !r.chipFull && r.chipHurt, JSON.stringify(r)); return r
})
await t('Xでポストのリンクがある', async () => { await finish(p, () => { window.__stamped = false; kob.start(24); kob.dbg.teleport(kob.GOAL.x, kob.GOAL.y + 0.2, kob.GOAL.z) }); const h = await p.evaluate(() => document.getElementById('btnPost').href); expect(/x\.com\/intent\/post/.test(h) && /kobito-escape/.test(h), h) })
await t('自動の bot が実画面で最後まで通る（ゲームの流れ・エラーなし）', async () => {
  const r = await p.evaluate(() => { window.__stamped = false; kob.start(3); kob.dbg.pause(true); kob.dbg.auto('skilled'); let n = 0; while (!kob.run.over && n++ < 120) kob.dbg.step(60); const o = { over: kob.run.over, won: kob.run.won, t: Math.round(kob.run.t), way: kob.run.way }; kob.dbg.auto(null); kob.dbg.pause(false); return o })
  expect(r.over, JSON.stringify(r)); return r
})
await t('通しの間に効果音が呼ばれている', async () => { const r = await p.evaluate(() => Snd.played); expect(r.wire > 2 && r.grunt > 0 && r.ding > 0 && r.slam > 0, JSON.stringify(r)); return { wire: r.wire, grunt: r.grunt, slam: r.slam, loopVac: r['loop:vac'] || 0 } })
await t('英語に切り替わる（紙も英語）', async () => {
  await p.evaluate(() => { kob.toTitle(); kob.setLang('en') })
  const tx = await p.evaluate(() => document.getElementById('btnStart').textContent); expect(/exit/.test(tx), tx)
  await p.screenshot({ path: ROOT + '/shots/en-title.png' })
  const r = await finish(p, () => { window.__stamped = false; kob.start(5); kob.dbg.pause(true); while (!kob.run.over && kob.run.t < 120) kob.dbg.step(30); kob.dbg.pause(false) })
  expect(r.stamp === 'COLLECTED', JSON.stringify(r)); await p.screenshot({ path: ROOT + '/shots/en-result.png' })
  await p.evaluate(() => { kob.toTitle(); kob.setLang('ja') })
})
await t('画面を離れると一時停止', async () => {
  const r = await p.evaluate(() => { kob.start(30); Object.defineProperty(document, 'hidden', { configurable: true, get: () => true }); document.dispatchEvent(new Event('visibilitychange')); delete document.hidden; const v = !document.getElementById('pause').classList.contains('hidden'); kob.setPause(false); return v })
  expect(r, r)
})
await t('エラーなし（ここまで全部）', async () => { expect(p.errs.length === 0, p.errs.slice(0, 3).join('|')) })
await p.close()

// ---- レア（seed のくじ）
const pr = await open(browser, touch)
await t('レアの出方（1000 seed で 5〜40% の間）', async () => {
  const r = await pr.evaluate(async () => {
    const out = {}; const { createRun } = await import('./shared/chase.js'); const c = { catBox: 0, catOnRoomba: 0, phone: 0, cockroach: 0, oldMan: 0 }
    for (let s = 1; s <= 1000; s++) { const m = createRun(kob.world, { x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0 }, s); for (const k in c) if (m.rare[k]) c[k]++ }
    return c
  })
  for (const k in r) expect(r[k] >= 50 && r[k] <= 400, k + r[k]); return r
})
await t('素材（人物）が読めなくても遊べる', async () => {
  const ctx = await browser.newContext({ locale: 'ja-JP', viewport: { width: 390, height: 844 } }); await muteContext(ctx); await ctx.route('**/*.glb', r => r.abort())
  const q = await ctx.newPage(); const errs = []; q.on('pageerror', e => errs.push(e.message))
  await q.goto(URL0); await q.waitForFunction(() => window.__kobReady, null, { timeout: 20000 })
  await q.click('#btnStart'); await q.waitForTimeout(300); const ok = await q.evaluate(() => kob.mode === 'play'); expect(ok && !errs.length, errs.join('|')); await ctx.close()
})
await pr.close()
// ---- 3サイズ × 全画面（Chromium と WebKit）
for (const [bName, launch, opts] of [['chromium', () => browser, touch], ['webkit', () => webkit.launch(), touch]]) {
  const bb = await launch()
  for (const [w, h, name] of SIZES) {
    const q = await open(bb, { viewport: { width: w, height: h }, ...opts })
    const views = {}
    await q.waitForTimeout(500)
    views.title = await fit(q); views.titleO = await overflow(q); await q.screenshot({ path: `${ROOT}/shots/${bName}-${name}-title.png` })
    await q.tap('#btnHow'); views.how = await fit(q); views.howO = await overflow(q); await q.screenshot({ path: `${ROOT}/shots/${bName}-${name}-how.png` }); await q.tap('[data-close]')
    await q.tap('#btnStart'); await q.waitForTimeout(250)
    views.play = await fit(q); views.playO = await overflow(q)
    await t(`${bName} ${name}: 音を鳴らす操作のあと無音`, async () => { const r = await q.evaluate(() => window.__muteOk()); expect(r, r) })
    await t(`${bName} ${name}: 描けている`, async () => { const v = await glVar(q); expect(v > 200, v); return v })
    await q.screenshot({ path: `${ROOT}/shots/${bName}-${name}-play.png` })
    await q.tap('#btnPause'); views.pause = await fit(q); await q.screenshot({ path: `${ROOT}/shots/${bName}-${name}-pause.png` }); await q.tap('#btnResume')
    await q.evaluate(() => { window.__stamped = false; kob.dbg.pause(true); kob.run.lives = 1; const b = kob.run.roombas[0]; b.on = true; b.x = kob.me.x; b.z = kob.me.z + 3; kob.dbg.step(2); kob.dbg.pause(false) })
    await q.waitForFunction(() => window.kob.mode === 'result' && window.__stamped, null, { timeout: 15000 })
    await t(`${bName} ${name}: 紙が見える大きさで出ている`, async () => { const r = await q.evaluate(() => { const b = document.getElementById('paper').getBoundingClientRect(); return { w: b.width, h: b.height } }); expect(r.w > 180 && r.h > 260, JSON.stringify(r)); return r })
    views.lose = await fit(q); views.loseO = await overflow(q); await q.screenshot({ path: `${ROOT}/shots/${bName}-${name}-lose.png` })
    await q.evaluate(() => { window.__stamped = false; kob.start(9); kob.dbg.teleport(kob.GOAL.x, kob.GOAL.y + 0.2, kob.GOAL.z) })
    await q.waitForFunction(() => window.kob.mode === 'result' && window.__stamped, null, { timeout: 15000 })
    views.win = await fit(q); views.winO = await overflow(q); await q.screenshot({ path: `${ROOT}/shots/${bName}-${name}-win.png` })
    for (const [v, r] of Object.entries(views)) {
      if (v.endsWith('O')) await t(`${bName} ${name} ${v}: 横にはみ出さない`, async () => { expect(r.sw <= r.W && !r.bad.length, JSON.stringify(r)) })
      else await t(`${bName} ${name} ${v}: 一画面に収まる`, async () => { expect(!r.over.length, JSON.stringify(r)) })
    }
    await t(`${bName} ${name}: エラーなし`, async () => { expect(!q.errs.length, q.errs.slice(0, 3).join('|')) })
    await q.context().close()
  }
  if (bName === 'webkit') {
    const wp = await open(bb, opts)
    await t('WebKit: 2本指の touchmove を止める', async () => { const r = await wp.evaluate(() => { const e = new Event('touchmove', { cancelable: true, bubbles: true }); Object.defineProperty(e, 'touches', { value: [{}, {}] }); document.body.dispatchEvent(e); return e.defaultPrevented }); expect(r, r) })
    await wp.context().close(); await bb.close()
  }
}
await browser.close()
server.kill()
console.log(results.join('\n'))
console.log(`\n${pass} passed, ${fail} failed`)
process.exit(fail ? 1 : 0)
