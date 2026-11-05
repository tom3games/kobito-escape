// 台本で撮る。node tools/shot.mjs <名前> [幅x高さ]
import { chromium, webkit } from 'playwright'
import { spawn } from 'node:child_process'
import { MUTE_LAUNCH, muteContext } from '../mute.mjs'
const ROOT = new URL('..', import.meta.url).pathname
const PORT = 5777
const server = spawn(process.execPath, ['server.mjs'], { cwd: ROOT, env: { ...process.env, PORT: String(PORT) } })
await new Promise(r => setTimeout(r, 400))
const b = await chromium.launch({ ...MUTE_LAUNCH, channel: 'chromium', args: [...(MUTE_LAUNCH.args || []), '--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] })
const ctx = await b.newContext({ locale: 'ja-JP', viewport: { width: 390, height: 844 }, hasTouch: true, deviceScaleFactor: 2 })
await muteContext(ctx)
const p = await ctx.newPage(); const errs = []
p.on('pageerror', e => errs.push('pageerror ' + e.message)); p.on('console', m => { if (m.type() === 'error') errs.push('console ' + m.text()) }); p.on('requestfailed', r => { if (!/fonts\./.test(r.url())) errs.push('fail ' + r.url()) })
await p.goto(`http://localhost:${PORT}/`)
try { await p.waitForFunction(() => window.__kobReady, null, { timeout: 25000 }) } catch (e) { errs.push('not ready') }
await p.waitForTimeout(800)
const shot = async n => { await p.screenshot({ path: `${ROOT}shots/${n}.png` }); console.log('shot', n) }
await shot('s-title')
const scenes = {
  start: async () => { await p.evaluate(() => { kob.start(1); kob.dbg.pause(true); kob.dbg.step(5); kob.dbg.render(30) }) },
  sofa: async () => { await p.evaluate(() => { kob.start(2); kob.dbg.pause(true); kob.dbg.teleport(-60, 0, 150, -1.57); kob.dbg.step(3); kob.dbg.render(30) }) },
  shelf: async () => { await p.evaluate(() => { kob.start(3); kob.dbg.pause(true); kob.dbg.teleport(-90, 40, 266, -1.57); kob.dbg.render(30) }) },
  fridge: async () => { await p.evaluate(() => { kob.start(4); kob.dbg.pause(true); kob.dbg.teleport(70, 66, 480, 1.3); kob.dbg.render(30) }) },
  top: async () => { await p.evaluate(() => { kob.start(5); kob.dbg.pause(true); kob.dbg.teleport(110, 135.2, 490, 0.7); kob.dbg.render(30) }) },
  mom: async () => { await p.evaluate(() => { kob.start(6); kob.dbg.pause(true); const r = kob.run; r.t = 60; r.lives = 99; const M = r.mom; M.in = true; M.z = 150; M.noz.x = 60; M.noz.y = 8; M.noz.z = 228; kob.dbg.teleport(92, 0.1, 262, 3.5); kob.dbg.step(3); kob.dbg.render(40) }) },
  door: async () => { await p.evaluate(() => { kob.start(6); kob.dbg.pause(true); const r = kob.run; r.t = 13; r.lives = 99; r.mom.z = -10; kob.dbg.teleport(20, 0.1, 90, 3.14); kob.dbg.step(3); kob.dbg.render(40) }) },
  curtain: async () => { await p.evaluate(() => { kob.start(6); kob.dbg.pause(true); kob.dbg.teleport(100, 90, 370, 1.57); kob.dbg.render(30) }) },
  dining: async () => { await p.evaluate(() => { kob.start(6); kob.dbg.pause(true); kob.dbg.teleport(-10, 2, 300, -0.5); kob.dbg.render(30) }) },
  cat: async () => { await p.evaluate(() => { kob.start(9); kob.dbg.pause(true); const r = kob.run; r.t = 20; r.cat.state = 'crouch'; r.cat.T = 99; r.cat.x = 40; r.cat.z = 150; r.cat.yaw = 3.1; r.cat.to = { x: 40, y: 0, z: 110 }; r.cat.ring = { x: 40, y: 0, z: 110, r: 11 }; kob.dbg.teleport(40, 0.1, 100, 0); kob.dbg.render(30) }) },
  roomba: async () => { await p.evaluate(() => { kob.start(9); kob.dbg.pause(true); const r = kob.run; r.t = 20; const b = r.roombas[0]; b.on = true; b.chase = true; b.x = 40; b.z = 135; b.yaw = 3.14; kob.dbg.teleport(40, 0.1, 100, 0); kob.dbg.render(30) }) }
}
const want = process.argv.slice(2)
for (const n of want.length ? want : Object.keys(scenes)) { await scenes[n](); await p.waitForTimeout(150); await shot('s-' + n) }
console.log('draw', await p.evaluate(() => [kob.dbg.drawCount(), kob.dbg.tris()]))
console.log('errors', errs.length ? errs.slice(0, 12).join('\n') : 'none')
await b.close(); server.kill(); process.exit(0)
