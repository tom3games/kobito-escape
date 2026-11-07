// 結果の前のおかんの大写しの確認。単体: node tools/reveal.mjs（無音。verify.mjs からも呼ぶ）
import '../mute-auto.mjs'  // テスト中は絶対に音を出さない（playwright を無音に差し替え）
import { chromium, webkit } from 'playwright'
import { spawn } from 'node:child_process'
import { pathToFileURL } from 'node:url'
import { MUTE_LAUNCH, muteContext } from '../mute.mjs'
const SIZES = [[360, 640, 'small'], [390, 844, 'phone'], [430, 932, 'big']]
const BY = { vac: 'win', slipper: 'win', cat: 'phone', roomba: 'spot', win: 'angry' }
const expect = (c, msg) => { if (!c) throw new Error(msg) }
// 実際の終わり方を飛ばして、指定の相手で大写しを始める
const begin = ([by, seed]) => { window.__stamped = false; kob.start(seed); const m = kob.run; m.over = true; if (by === 'win') m.won = true; else m.by = by; m.t = 40; window.__snd0 = Object.values(Snd.played).reduce((a, b) => a + b, 0); kob.startReveal(); window.__revT0 = performance.now() }
const settled = () => Promise.all(document.getElementById('revFrame').getAnimations().map(a => a.finished.catch(() => {})))
const waitResult = () => new Promise(ok => { const f = () => kob.mode === 'result' ? ok(Math.round(performance.now() - window.__revT0)) : setTimeout(f, 10); f() })
const look = () => {
  const box = id => { const r = document.getElementById(id).getBoundingClientRect(); return { l: r.left, r: r.right, t: r.top, b: r.bottom, w: r.width } }
  const W = innerWidth, H = innerHeight, f = box('revFrame'), l = box('revLine'), im = document.querySelector('#revFrame img')
  const texts = [...document.querySelectorAll('#reveal *')].filter(e => e.children.length === 0 && e.textContent.trim()).length
  return { mode: kob.mode, ...window.__revealLast, shown: !document.getElementById('reveal').classList.contains('hidden'), paper: !document.getElementById('result').classList.contains('hidden'), hud: !document.getElementById('hud').classList.contains('hidden'), texts, inside: f.l >= -1 && f.r <= W + 1 && f.t >= -1 && f.b <= H + 1 && l.l >= -1 && l.r <= W + 1 && l.b <= H + 1, frameW: Math.round(f.w), frac: +(f.w / W).toFixed(2), src: im && im.src.match(/(big|face)_\w+/)[0], imgOk: im && im.complete && im.naturalWidth > 0, sw: document.documentElement.scrollWidth, W, snd: Object.values(Snd.played).reduce((a, b) => a + b, 0) - window.__snd0 }
}
export async function revealTests({ browser, bName, URL0, ROOT, t, opts = {} }) {
  const open = async extra => {
    const ctx = await browser.newContext({ locale: 'ja-JP', viewport: { width: 390, height: 844 }, ...opts, ...extra }); await muteContext(ctx)
    const p = await ctx.newPage(); p.errs = []; p.on('pageerror', e => p.errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') p.errs.push(m.text()) })
    await p.goto(URL0); await p.waitForFunction(() => window.__kobReady && Object.keys(kob.momArt.big).length === 4 && document.getElementById('boot').classList.contains('hidden'), null, { timeout: 30000 }); return p
  }
  for (const [w, h, name] of SIZES) {
    const p = await open({ viewport: { width: w, height: h } })
    for (const by of Object.keys(BY)) await t(`${bName} ${name} 大写し ${by}: 顔が合う・はみ出さない・文字1つ12字以内・録音が鳴る・紙はまだ・後で紙とハンコ`, async () => {
      await p.evaluate(begin, [by, 8 + by.length])
      await p.evaluate(settled)   // 動きが止まった所（ソフト描画は動きの開始が遅い）
      const r = await p.evaluate(look)
      expect(r.mode === 'reveal' && r.shown && !r.paper && !r.hud && r.face === BY[by] && r.big && r.src === 'big_' + BY[by] && r.imgOk, JSON.stringify(r))
      expect(r.inside && r.sw <= r.W && r.texts <= 2 && [...r.line].length <= 12 && r.frac >= 0.75 && r.snd >= 2, JSON.stringify(r))
      await p.screenshot({ path: `${ROOT}/shots/reveal-${bName}-${name}-${by}.png` })
      const dur = await p.evaluate(waitResult)
      expect(dur >= 1000 && dur < 1900, 'dur ' + dur)   // 途中でスクショを撮るので長めに見る。撮らなければ約1.38秒（2026-11-06 実測）
      const after = await p.evaluate(() => ({ shown: !document.getElementById('reveal').classList.contains('hidden'), paperW: document.getElementById('paper').getBoundingClientRect().width, again: !!document.getElementById('btnAgain').getBoundingClientRect().width, last: window.__lastResult, stamped0: window.__stamped }))
      expect(!after.shown && after.paperW > 180 && after.again && !after.stamped0, JSON.stringify(after))
      expect(by === 'win' ? after.last.won : after.last.by === by, JSON.stringify(after.last))
      await p.waitForFunction(() => window.__stamped, null, { timeout: 8000 })
      return { line: r.line, 秒: dur / 1000, 枠: r.frameW }
    })
    await t(`${bName} ${name} 大写し: 全部の台詞（日英）が12字以内で画面に収まる`, async () => {
      await p.evaluate(begin, ['vac', 8]); await p.evaluate(settled)
      const r = await p.evaluate(() => { const T = kob.revealTexts, el = document.getElementById('revLine'), bad = []; let n = 0; for (const l of ['ja', 'en']) for (const by in T[l]) for (const s of T[l][by]) { n++; el.textContent = s; const b = el.getBoundingClientRect(); if ([...s].length > 12 || b.left < -1 || b.right > innerWidth + 1 || b.bottom > innerHeight + 1 || el.scrollWidth > el.clientWidth + 1) bad.push(s + ':' + Math.round(b.left) + '-' + Math.round(b.right)) } return { n, bad } })
      expect(r.n === 20 && !r.bad.length, JSON.stringify(r)); await p.evaluate(waitResult); return r.n
    })
    await t(`${bName} ${name}: エラーなし・無音`, async () => { const m = await p.evaluate(() => window.__muteOk()); expect(m && !p.errs.length, m + p.errs.join('|')) })
    await p.context().close()
  }
  const p = await open({})
  await t(`${bName} 大写し: 実際に終わった時（何もしない負け・ゴール）にも出る`, async () => {
    const seen = []
    for (const setup of [() => { kob.start(5); kob.dbg.pause(true); while (!kob.run.over && kob.run.t < 120) kob.dbg.step(30); kob.dbg.pause(false) }, () => { kob.start(9); kob.dbg.teleport(kob.GOAL.x, kob.GOAL.y + 0.2, kob.GOAL.z) }]) {
      await p.evaluate(setup); await p.waitForFunction(() => kob.mode === 'reveal', null, { timeout: 12000, polling: 30 }); seen.push(await p.evaluate(() => window.__revealLast.by)); await p.waitForFunction(() => kob.mode === 'result', null, { timeout: 4000 })
    }
    expect(seen[0] !== 'win' && seen[1] === 'win', JSON.stringify(seen)); return seen
  })
  await t(`${bName} 大写し: タップで飛ばす（出た直後は飛ばない）。ハンコの遅れは同じ`, async () => {
    await p.evaluate(begin, ['cat', 11])
    const early = await p.evaluate(() => { document.getElementById('reveal').click(); return kob.mode })
    expect(early === 'reveal', 'early ' + early)
    await p.waitForTimeout(300)
    await p.touchscreen.tap(195, 300)   // 実際のタッチ。click だと操作待ちの間に時間切れになる
    const r = await p.evaluate(() => ({ mode: kob.mode, ms: Math.round(performance.now() - window.__revT0), stamped: window.__stamped, at: performance.now() }))
    expect(r.mode === 'result' && r.ms < 1000 && !r.stamped, JSON.stringify(r))
    const stampMs = await p.evaluate(() => new Promise(ok => { const t0 = performance.now(), f = () => window.__stamped ? ok(Math.round(performance.now() - t0)) : setTimeout(f, 10); f() }))
    expect(stampMs > 500 && stampMs < 1500, 'stamp ' + stampMs)
    await p.waitForTimeout(1500); const stay = await p.evaluate(() => kob.mode); expect(stay === 'result', stay)   // 飛ばした後で遅れて紙を出し直さない
    return { 飛ばした: r.ms, ハンコ: stampMs }
  })
  await t(`${bName} 大写し: 連打の続きで「もう一回」が押されない。少し後なら押せる`, async () => {
    await p.evaluate(begin, ['vac', 12]); await p.waitForTimeout(300)
    const r = await p.evaluate(() => new Promise(ok => { document.getElementById('reveal').click(); const b = document.getElementById('btnAgain').getBoundingClientRect(), hit = document.elementFromPoint(b.left + b.width / 2, b.top + b.height / 2), soon = hit && hit.id === 'btnAgain'; setTimeout(() => { const later = document.elementFromPoint(b.left + b.width / 2, b.top + b.height / 2); ok({ soon, later: later && later.id, visible: b.width > 0 }) }, 500) }))
    expect(!r.soon && r.later === 'btnAgain' && r.visible, JSON.stringify(r))
    await p.click('#btnAgain'); const m = await p.evaluate(() => kob.mode); expect(m === 'play', m); return r
  })
  await t(`${bName} 大写し: 途中でタイトルへ行っても紙が割り込まない`, async () => {
    await p.evaluate(begin, ['roomba', 13]); await p.evaluate(() => kob.toTitle()); await p.waitForTimeout(1500)
    const r = await p.evaluate(() => ({ m: kob.mode, rev: document.getElementById('reveal').classList.contains('hidden'), res: document.getElementById('result').classList.contains('hidden') })); expect(r.m === 'title' && r.rev && r.res, JSON.stringify(r))
  })
  await t(`${bName} 大写しの後も 画像保存 と Xでポスト が動く`, async () => {
    await p.evaluate(begin, ['slipper', 14]); await p.evaluate(waitResult); await p.waitForFunction(() => window.__stamped, null, { timeout: 8000 })
    const r = await p.evaluate(() => new Promise(ok => { const c = document.getElementById('paper'); const orig = HTMLAnchorElement.prototype.click; let dl = null; HTMLAnchorElement.prototype.click = function () { dl = this.download }; document.getElementById('btnSave').click(); c.toBlob(b => setTimeout(() => { HTMLAnchorElement.prototype.click = orig; ok({ size: b.size, dl, post: document.getElementById('btnPost').href }) }, 200)) }))
    expect(r.size > 20000 && r.dl === 'kobito-escape.png' && /x\.com\/intent\/post/.test(r.post) && /%E5%AE%B3%E8%99%AB/.test(r.post), JSON.stringify(r).slice(0, 300)); return r.size
  })
  await p.context().close()
  const q = await open({ reducedMotion: 'reduce' })
  await t(`${bName} 大写し: 動きを減らす設定では止まった絵を短く出す`, async () => {
    await q.evaluate(begin, ['win', 15]); await q.waitForTimeout(80)
    const r = await q.evaluate(() => { const s = id => getComputedStyle(document.querySelector(id)).animationName; return { f: s('#revFrame'), i: s('#revFrame img'), l: s('#revLine'), mode: kob.mode, shake: 0, op: getComputedStyle(document.getElementById('revLine')).opacity, tr: getComputedStyle(document.getElementById('revFrame')).transform } })
    expect(r.f === 'none' && r.i === 'none' && r.l === 'none' && r.mode === 'reveal' && r.op === '1', JSON.stringify(r))
    await q.screenshot({ path: `${ROOT}/shots/reveal-${bName}-reduced.png` })
    const dur = await q.evaluate(waitResult); expect(dur >= 1000 && dur < 1900, 'dur ' + dur); return dur
  })
  await q.context().close()
  const ctx = await browser.newContext({ locale: 'ja-JP', viewport: { width: 390, height: 844 }, ...opts }); await muteContext(ctx); await ctx.route('**/img/*.webp*', r => r.abort())
  const n = await ctx.newPage(); const errs = []; n.on('pageerror', e => errs.push(e.message))
  await n.goto(URL0); await n.waitForFunction(() => window.__kobReady, null, { timeout: 25000 })
  await t(`${bName} 大写し: 絵が読めない時は飛ばして紙を出す`, async () => {
    await n.waitForFunction(() => kob.momArt.done, null, { timeout: 15000 })   // 読み込みを諦めるまでは待つ仕様
    await n.evaluate(begin, ['vac', 16]); const r = await n.evaluate(() => ({ m: kob.mode, rev: document.getElementById('reveal').classList.contains('hidden') })); expect(r.m === 'result' && r.rev && !errs.length, JSON.stringify(r) + errs.join('|'))
  })
  await ctx.close()
}
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, ''), PORT = 5779
  const server = spawn(process.execPath, ['server.mjs'], { cwd: ROOT, env: { ...process.env, PORT: String(PORT) } }); await new Promise(r => setTimeout(r, 400))
  let pass = 0, fail = 0
  const t = async (name, fn) => { try { const r = await fn(); pass++; console.log(`ok   ${name}${r && r !== true ? '  ' + JSON.stringify(r) : ''}`) } catch (e) { fail++; console.log(`FAIL ${name}  ${e.message.split('\n')[0]}`) } }
  const touch = { hasTouch: true, isMobile: true, deviceScaleFactor: 2 }
  for (const [bName, bt, launch] of [['chromium', chromium, MUTE_LAUNCH], ['webkit', webkit, {}]]) { const browser = await bt.launch(launch); await revealTests({ browser, bName, URL0: `http://localhost:${PORT}/`, ROOT, t, opts: touch }); await browser.close() }
  server.kill(); console.log(`\n${pass} passed, ${fail} failed`); process.exit(fail ? 1 : 0)
}
