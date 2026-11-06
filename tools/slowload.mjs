// 最初のロードの確認（無音）。verify.mjs から呼ぶ
import { muteContext } from '../mute.mjs'
const expect = (c, msg) => { if (!c) throw new Error(msg) }
// 主人公の素材まで揃えば始められ、おかんと音は裏で読む。遅い素材は route で止めて再現する
export async function slowTests({ browser, bName, URL0, t, opts }) {
  const open = async hold => {
    const ctx = await browser.newContext({ locale: 'ja-JP', viewport: { width: 390, height: 844 }, ...opts })
    await muteContext(ctx)
    const p = await ctx.newPage(); p.errs = []; p.reqs = []; p.ctxx = ctx
    p.on('pageerror', e => p.errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') p.errs.push(m.text()) })
    p.on('request', r => p.reqs.push(r.url()))
    if (hold) await ctx.route(hold.pat, async r => { await hold.until; r.continue().catch(() => {}) })
    return p
  }
  await t(`${bName}: 開く時のファイルが少なく外部へ行かない`, async () => {
    const p = await open()
    await p.goto(URL0); await p.waitForFunction(() => window.__kobReady, null, { timeout: 30000 })
    // blob: は 3D モデルの中の絵で通信しない。おかんの絵は準備完了の後に読み始めるので数えない
    const real = p.reqs.filter(u => !u.startsWith('blob:') && !/\/img\//.test(u))
    const n = real.length, outside = real.filter(u => !u.startsWith(URL0)), mod = real.filter(u => /\/(js|shared|vendor)\//.test(u))
    await p.ctxx.close()
    expect(n <= 20 && !outside.length && !mod.length, JSON.stringify({ n, outside, mod })); return n + '件'
  })
  await t(`${bName}: おかんと音が届く前に始めても遊べて、掃除機が見えないことがない`, async () => {
    let free; const until = new Promise(r => { free = r })
    const p = await open({ pat: u => /\/(img\/|snd\/)/.test(u.pathname) && !/hero_atlas/.test(u.pathname), until })
    await p.goto(URL0); await p.waitForFunction(() => window.__kobReady, null, { timeout: 30000 })
    const boot = await p.evaluate(() => ({ done: kob.momArt.done, hidden: document.getElementById('boot').classList.contains('out') }))
    await p.tap('#btnStart'); await p.waitForTimeout(200)
    const r = await p.evaluate(() => { kob.dbg.pause(true); kob.run.t = 20; kob.run.lives = 99; kob.dbg.step(3); return { mode: kob.mode, mom: kob.mom3d.g.visible, stub: kob.mom3d.stub.visible, paper: kob.mom3d.paper.visible, snd: Snd.played.click } })
    free()
    await p.waitForFunction(() => kob.momArt.done, null, { timeout: 15000 })
    const after = await p.evaluate(() => { kob.dbg.step(3); return { stub: kob.mom3d.stub.visible, paper: kob.mom3d.paper.visible } })
    const muteOk = await p.evaluate(() => window.__muteOk ? window.__muteOk() : true)
    const errs = p.errs.slice(); await p.ctxx.close()
    expect(!boot.done && boot.hidden, 'ロード画面がおかんを待っている ' + JSON.stringify(boot))
    expect(r.mode === 'play' && r.snd >= 1, JSON.stringify(r))
    expect(!r.mom || r.stub, '絵が無いのに代わりが出ない ' + JSON.stringify(r))
    expect(after.paper || !r.mom, '絵が届いた後に切り替わらない ' + JSON.stringify(after))
    expect(muteOk && !errs.length, errs.join('|') + ' mute=' + muteOk)
  })
  await t(`${bName}: 顔が遅れても大写しを待って出す`, async () => {
    let free; const until = new Promise(r => { free = r })
    const p = await open({ pat: u => /\/img\//.test(u.pathname) && !/hero_atlas/.test(u.pathname), until })
    await p.goto(URL0); await p.waitForFunction(() => window.__kobReady, null, { timeout: 30000 })
    await p.tap('#btnStart'); await p.waitForTimeout(150)
    await p.evaluate(() => { window.__revealLast = null; const m = kob.run; m.over = true; m.by = 'vac'; kob.startReveal() })
    await p.waitForTimeout(600)
    const during = await p.evaluate(() => ({ mode: kob.mode, last: window.__revealLast }))
    free()
    await p.waitForFunction(() => window.__revealLast, null, { timeout: 8000 })
    const r = await p.evaluate(() => ({ mode: kob.mode, last: window.__revealLast, img: !!document.querySelector('#revFrame img') }))
    const errs = p.errs.slice(); await p.ctxx.close()
    expect(!during.last, '待たずに進んだ ' + JSON.stringify(during))
    expect(r.last && r.img && !errs.length, JSON.stringify(r) + errs.join('|'))
  })
  await t(`${bName}: 音は効果音から順に読み、題の BGM を無駄に読まない`, async () => {
    const p = await open()
    await p.goto(URL0); await p.waitForFunction(() => window.__kobReady, null, { timeout: 30000 })
    await p.tap('#btnStart')
    await p.waitForFunction(() => Snd.bufs['snd/vacuum_loop.wav'] instanceof AudioBuffer, null, { timeout: 20000 })
    const snd = p.reqs.filter(u => /\/snd\//.test(u)).map(u => u.split('/snd/')[1]), title = snd.includes('bgm_title.mp3')
    const firstBig = snd.findIndex(u => /loop|bgm/.test(u)), smallAfter = snd.slice(firstBig).filter(u => !/loop|bgm/.test(u))
    const r = await p.evaluate(() => ({ decoded: Object.values(Snd.bufs).filter(b => b instanceof AudioBuffer).length, slam: Snd.bufs['snd/slam.mp3'] instanceof AudioBuffer }))
    const errs = p.errs.slice(); await p.ctxx.close()
    expect(!title, 'bgm_title を読んだ'); expect(smallAfter.length <= 2, 'ループの後に効果音 ' + smallAfter.join(',')); expect(r.slam && !errs.length, JSON.stringify(r) + errs.join('|'))
  })
}
