// 結果の紙だけ撮る。node tools/results.mjs
import '../mute-auto.mjs'  // テスト中は絶対に音を出さない（playwright を無音に差し替え）
import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
import { MUTE_LAUNCH, muteContext } from '../mute.mjs'
const ROOT = new URL('..', import.meta.url).pathname, PORT = 5778
const server = spawn(process.execPath, ['server.mjs'], { cwd: ROOT, env: { ...process.env, PORT: String(PORT) } })
await new Promise(r => setTimeout(r, 400))
const b = await chromium.launch(MUTE_LAUNCH), ctx = await b.newContext({ locale: 'ja-JP', viewport: { width: 390, height: 844 }, hasTouch: true, deviceScaleFactor: 2 })
await muteContext(ctx); const p = await ctx.newPage(); await p.goto(`http://localhost:${PORT}/`); await p.waitForFunction(() => window.__kobReady, null, { timeout: 30000 })
for (const by of ['vac', 'roomba', 'cat', 'slipper', 'win', 'winItems']) {
  await p.evaluate(by => {
    window.__stamped = false; kob.start(by.length + 3); const m = kob.run; m.t = 70; if (by.startsWith('win')) { if (by === 'winItems') { m.catches.push({ by: 'cat', at: 1, way: 0 }); m.itemsGot.push('ring', 'hesokuri', 'dvd') } kob.dbg.teleport(kob.GOAL.x, kob.GOAL.y + 0.2, kob.GOAL.z) }
    else { m.lives = 1; m.way = 2; m.itemsGot.push('coin', 'glasses'); m.over = true; m.by = by; m.catches.push({ by, at: 1, way: 2 }, { by, at: 2, way: 2 }); kob.showResult() }
  }, by)
  await p.waitForFunction(() => window.__stamped, null, { timeout: 15000 }); await p.waitForTimeout(200)
  await p.screenshot({ path: `${ROOT}shots/paper-${by}.png` })
}
await b.close(); server.kill(); process.exit(0)
