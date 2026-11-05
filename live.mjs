import { MUTE_LAUNCH, muteContext } from './mute.mjs'
// 公開URLの確認。node live.mjs（ログインしていないブラウザで見る）。SKIPGH=1 で GitHub ページの確認を省く
// kobito-escape __NS__ を置き換え、「遊びの通し」をゲームに合わせて書く
import { chromium, webkit } from 'playwright'
import { execSync } from 'node:child_process'
// 個人のアカウント名は公開リポジトリに書かない。実行時に gh から取る
const OWNER = (() => { try { return execSync('gh api user -q .login', { encoding: 'utf8' }).trim().toLowerCase() } catch { return '' } })()
const URL0 = 'https://tom3games.github.io/kobito-escape/'
const out = []
for (const [name, bt, opts] of [['chromium', chromium, {}], ['webkit', webkit, { isMobile: true, hasTouch: true, deviceScaleFactor: 2 }]]) {
  const b = await bt.launch(bt === chromium ? { ...MUTE_LAUNCH, args: [...MUTE_LAUNCH.args, '--use-angle=metal'] } : {}), ctx = await b.newContext({ locale: 'ja-JP', viewport: { width: 390, height: 844 }, ...opts })
  await muteContext(ctx)
  const p = await ctx.newPage()
  const errs = []
  p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()) })
  p.on('requestfailed', r => errs.push('fail ' + r.url()))
  await p.goto(URL0 + '?t=' + Date.now(), { waitUntil: 'networkidle' })
  await p.waitForFunction(() => window.__kobReady, null, { timeout: 20000 })
  if (opts.hasTouch) await p.tap('#btnStart'); else await p.click('#btnStart')
  await p.waitForTimeout(800)
  const flow = await p.evaluate(() => { kob.dbg.pause(true); kob.dbg.auto('skilled'); kob.dbg.step(60 * 150); if (!kob.run.over) kob.dbg.teleport(kob.GOAL.x, kob.GOAL.y + 0.2, kob.GOAL.z); kob.dbg.step(2); kob.dbg.pause(false); return { over: kob.run.over, won: kob.run.won, t: Math.round(kob.run.t) } })
  await p.waitForFunction(() => kob.mode === 'reveal', null, { timeout: 8000, polling: 30 })   // 結果の前のおかんの大写し
  const reveal = await p.evaluate(() => window.__revealLast)
  await p.waitForFunction(() => window.__stamped, null, { timeout: 8000 })
  const res = await p.evaluate(() => ({ mode: kob.mode, result: window.__lastResult, stamped: !!window.__stamped, mute: window.__muteOk(), momArt: kob.momArt.loaded, faces: Object.keys(kob.momArt.faces).length, momKey: kob.mom3d.key, toyTokens: document.querySelectorAll('#toyTokens .ty').length, v: document.querySelector('script[type=module]').src.split('?')[1] }))
  out.push(`${name}: flow=${JSON.stringify(flow)} reveal=${JSON.stringify(reveal)} result=${JSON.stringify(res)}`)
  await p.screenshot({ path: `shots/live-${name}.png` })
  const og = await p.evaluate(async () => { const r = await fetch(document.querySelector('meta[property="og:image"]').content); return r.status + ' ' + r.headers.get('content-type') })
  out.push(`${name}: og=${og} errors=${errs.length ? errs.join(' | ') : 'none'}`)
  await b.close()
}
if (process.env.SKIPGH) { console.log(out.join('\n')); process.exit(0) }
// ログアウト状態でリポジトリ・更新履歴に個人のIDが出ていないか
const b = await chromium.launch(MUTE_LAUNCH), p = await b.newPage()
for (const u of ['https://github.com/tom3games/kobito-escape', 'https://github.com/tom3games/kobito-escape/commits/main']) {
  const res = await p.goto(u, { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(2500)
  out.push(`${u} status=${res.status()} owner=${OWNER && (await p.content()).toLowerCase().includes(OWNER) ? 'FOUND' : 'none'}`)
}
await b.close()
console.log(out.join('\n'))
