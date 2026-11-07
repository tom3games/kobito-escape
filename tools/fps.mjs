// 遊び中の fps と描画量。node tools/fps.mjs（Mac の Chromium、GPU あり。スマホの実測ではない）
import '../mute-auto.mjs'  // テスト中は絶対に音を出さない（playwright を無音に差し替え）
import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
import { MUTE_LAUNCH, muteContext } from '../mute.mjs'
const ROOT = new URL('..', import.meta.url).pathname, PORT = 5779
const server = spawn(process.execPath, ['server.mjs'], { cwd: ROOT, env: { ...process.env, PORT: String(PORT) } })
await new Promise(r => setTimeout(r, 400))
const b = await chromium.launch({ ...MUTE_LAUNCH, channel: 'chromium', args: [...(MUTE_LAUNCH.args || []), '--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] })
const ctx = await b.newContext({ locale: 'ja-JP', viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true, deviceScaleFactor: 2 })
await muteContext(ctx); const p = await ctx.newPage(); await p.goto(`http://localhost:${PORT}/`); await p.waitForFunction(() => window.__kobReady, null, { timeout: 30000 })
const r = await p.evaluate(() => new Promise(ok => { kob.start(4); kob.dbg.auto('skilled'); let n = 0, t0 = performance.now(), a = 0; const f = () => { n++; a = Math.max(a, kob.dbg.drawCount()); if (performance.now() - t0 > 12000) ok({ fps: Math.round(n / 12), draws: a, tris: kob.dbg.tris(), low: matchMedia('(pointer: coarse)').matches }); else requestAnimationFrame(f) }; requestAnimationFrame(f) }))
console.log(JSON.stringify(r)); await b.close(); server.kill(); process.exit(0)
