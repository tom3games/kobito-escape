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
await p.waitForFunction(() => kob.momArt.done, null, { timeout: 25000 }).catch(() => errs.push('art not done'))
await p.waitForTimeout(800)
const shot = async n => { await p.screenshot({ path: `${ROOT}shots/${n}.png` }); console.log('shot', n) }
await shot('s-title')
const scenes = {
  heroBack: async () => { await p.evaluate(() => { kob.start(1); kob.dbg.pause(true); kob.dbg.teleport(0, 0, 60, 0); kob.dbg.render(30) }) },
  heroRun: async () => { await p.evaluate(() => { kob.start(1); kob.dbg.pause(true); kob.dbg.teleport(0, 0, 60, 0); const m = kob.me; m.grounded = true; m.vx = 0; m.vz = 9; kob.dbg.render(9) }) },
  heroSwing: async () => { await p.evaluate(() => { kob.start(1); kob.dbg.pause(true); kob.dbg.teleport(0, 18, 60, 0); const m = kob.me; m.grounded = false; m.rope = { x: 22, y: 60, z: 90, len: 50, t: 1 }; kob.dbg.render(25) }) },
  heroSwingL: async () => { await p.evaluate(() => { kob.start(1); kob.dbg.pause(true); kob.dbg.teleport(0, 18, 60, 0); const m = kob.me; m.grounded = false; m.rope = { x: -20, y: 40, z: 90, len: 40, t: 1 }; kob.dbg.render(25) }) },
  heroAir: async () => { await p.evaluate(() => { kob.start(1); kob.dbg.pause(true); kob.dbg.teleport(0, 12, 60, 0); const m = kob.me; m.grounded = false; m.rope = null; kob.dbg.render(25) }) },
  heroClimb: async () => { await p.evaluate(() => { kob.start(1); kob.dbg.pause(true); kob.dbg.teleport(0, 10, 60, 0); const m = kob.me; m.grounded = false; m.climbing = { nx: 0, nz: -1 }; kob.dbg.render(25) }) },
  heroDown: async () => { await p.evaluate(() => { kob.start(1); kob.dbg.pause(true); kob.dbg.teleport(0, 0, 60, 0); const m = kob.me; m.grounded = true; m.wreck = 5; kob.dbg.render(25) }) },
  heroSide: async () => { await p.evaluate(() => { kob.start(1); kob.dbg.pause(true); kob.dbg.teleport(0, 0, 60, 0); kob.dbg.render(25); kob.me.yaw = 1.57; kob.me.vx = 7; kob.me.vz = 0; kob.dbg.render(2) }) },
  heroFront: async () => { await p.evaluate(() => { kob.start(1); kob.dbg.pause(true); kob.dbg.teleport(0, 0, 60, 0); kob.dbg.render(25); kob.me.yaw = 3.14; kob.dbg.render(2) }) },
  catRest: async () => { await p.evaluate(() => { kob.start(1); kob.dbg.pause(true); const r = kob.run; r.t = 20; r.lives = 99; kob.dbg.teleport(0, 0, 60, 0); kob.dbg.render(30); const c = r.cat, b = r.roombas[0]; c.state = 'rest'; c.T = 99; c.x = 12; c.y = 0; c.z = 125; c.yaw = 3.14; c.dur = 99; c.from = { x: 12, y: 25, z: 125 }; c.to = { x: 12, y: 25, z: 125 }; kob.dbg.render(3) }) },
  catRestS: async () => { await p.evaluate(() => { kob.start(1); kob.dbg.pause(true); const r = kob.run; r.t = 20; r.lives = 99; kob.dbg.teleport(0, 0, 60, 0); kob.dbg.render(30); const c = r.cat, b = r.roombas[0]; c.state = 'rest'; c.T = 99; c.x = 12; c.y = 0; c.z = 125; c.yaw = 1.57; c.dur = 99; c.from = { x: 12, y: 25, z: 125 }; c.to = { x: 12, y: 25, z: 125 }; kob.dbg.render(3) }) },
  catRestB: async () => { await p.evaluate(() => { kob.start(1); kob.dbg.pause(true); const r = kob.run; r.t = 20; r.lives = 99; kob.dbg.teleport(0, 0, 60, 0); kob.dbg.render(30); const c = r.cat, b = r.roombas[0]; c.state = 'rest'; c.T = 99; c.x = 12; c.y = 0; c.z = 125; c.yaw = 0; c.dur = 99; c.from = { x: 12, y: 25, z: 125 }; c.to = { x: 12, y: 25, z: 125 }; kob.dbg.render(3) }) },
  catCrouch: async () => { await p.evaluate(() => { kob.start(1); kob.dbg.pause(true); const r = kob.run; r.t = 20; r.lives = 99; kob.dbg.teleport(0, 0, 60, 0); kob.dbg.render(30); const c = r.cat, b = r.roombas[0]; c.state = 'crouch'; c.T = 99; c.x = 12; c.y = 0; c.z = 125; c.yaw = 3.14; c.dur = 99; c.from = { x: 12, y: 25, z: 125 }; c.to = { x: 12, y: 25, z: 125 }; kob.dbg.render(3) }) },
  catCrouchS: async () => { await p.evaluate(() => { kob.start(1); kob.dbg.pause(true); const r = kob.run; r.t = 20; r.lives = 99; kob.dbg.teleport(0, 0, 60, 0); kob.dbg.render(30); const c = r.cat, b = r.roombas[0]; c.state = 'crouch'; c.T = 99; c.x = 12; c.y = 0; c.z = 125; c.yaw = -1.57; c.dur = 99; c.from = { x: 12, y: 25, z: 125 }; c.to = { x: 12, y: 25, z: 125 }; kob.dbg.render(3) }) },
  catLeap: async () => { await p.evaluate(() => { kob.start(1); kob.dbg.pause(true); const r = kob.run; r.t = 20; r.lives = 99; kob.dbg.teleport(0, 0, 60, 0); kob.dbg.render(30); const c = r.cat, b = r.roombas[0]; c.state = 'leap'; c.T = 99; c.x = 12; c.y = 25; c.z = 125; c.yaw = 3.14; c.dur = 99; c.from = { x: 12, y: 25, z: 125 }; c.to = { x: 12, y: 25, z: 125 }; kob.dbg.render(3) }) },
  catLeapS: async () => { await p.evaluate(() => { kob.start(1); kob.dbg.pause(true); const r = kob.run; r.t = 20; r.lives = 99; kob.dbg.teleport(0, 0, 60, 0); kob.dbg.render(30); const c = r.cat, b = r.roombas[0]; c.state = 'leap'; c.T = 99; c.x = 12; c.y = 25; c.z = 125; c.yaw = 1.57; c.dur = 99; c.from = { x: 12, y: 25, z: 125 }; c.to = { x: 12, y: 25, z: 125 }; kob.dbg.render(3) }) },
  catSwipe: async () => { await p.evaluate(() => { kob.start(1); kob.dbg.pause(true); const r = kob.run; r.t = 20; r.lives = 99; kob.dbg.teleport(0, 0, 60, 0); kob.dbg.render(30); const c = r.cat, b = r.roombas[0]; c.state = 'swipe'; c.T = 99; c.x = 12; c.y = 0; c.z = 125; c.yaw = 3.14; c.dur = 99; c.from = { x: 12, y: 25, z: 125 }; c.to = { x: 12, y: 25, z: 125 }; kob.dbg.render(3) }) },
  catNap: async () => { await p.evaluate(() => { kob.start(1); kob.dbg.pause(true); const r = kob.run; r.t = 20; r.lives = 99; kob.dbg.teleport(0, 0, 60, 0); kob.dbg.render(30); const c = r.cat, b = r.roombas[0]; c.state = 'nap'; c.T = 99; c.x = 12; c.y = 0; c.z = 125; c.yaw = 1.57; c.dur = 99; c.from = { x: 12, y: 25, z: 125 }; c.to = { x: 12, y: 25, z: 125 }; kob.dbg.render(3) }) },
  catBox: async () => { await p.evaluate(() => { kob.start(1); kob.dbg.pause(true); const r = kob.run; r.t = 20; r.lives = 99; kob.dbg.teleport(0, 0, 60, 0); kob.dbg.render(30); const c = r.cat, b = r.roombas[0]; c.state = 'box'; c.T = 99; c.x = 12; c.y = 0; c.z = 125; c.yaw = 3.14; c.dur = 99; c.from = { x: 12, y: 25, z: 125 }; c.to = { x: 12, y: 25, z: 125 }; kob.dbg.render(3) }) },
  romF: async () => { await p.evaluate(() => { kob.start(1); kob.dbg.pause(true); const r = kob.run; r.t = 20; r.lives = 99; kob.dbg.teleport(0, 0, 60, 0); kob.dbg.render(30); const c = r.cat, b = r.roombas[0]; b.on = true; b.wait = 99; b.x = 3; b.z = 88; b.yaw = 3.14; b.chase = false; kob.dbg.render(3) }) },
  romFC: async () => { await p.evaluate(() => { kob.start(1); kob.dbg.pause(true); const r = kob.run; r.t = 20; r.lives = 99; kob.dbg.teleport(0, 0, 60, 0); kob.dbg.render(30); const c = r.cat, b = r.roombas[0]; b.on = true; b.wait = 99; b.x = 3; b.z = 88; b.yaw = 3.14; b.chase = true; kob.dbg.render(3) }) },
  romS: async () => { await p.evaluate(() => { kob.start(1); kob.dbg.pause(true); const r = kob.run; r.t = 20; r.lives = 99; kob.dbg.teleport(0, 0, 60, 0); kob.dbg.render(30); const c = r.cat, b = r.roombas[0]; b.on = true; b.wait = 99; b.x = 3; b.z = 88; b.yaw = 1.57; b.chase = true; kob.dbg.render(3) }) },
  romB: async () => { await p.evaluate(() => { kob.start(1); kob.dbg.pause(true); const r = kob.run; r.t = 20; r.lives = 99; kob.dbg.teleport(0, 0, 60, 0); kob.dbg.render(30); const c = r.cat, b = r.roombas[0]; b.on = true; b.wait = 99; b.x = 3; b.z = 88; b.yaw = 0; b.chase = true; kob.dbg.render(3) }) },
  romRide: async () => { await p.evaluate(() => { kob.start(1); kob.dbg.pause(true); const r = kob.run; r.t = 20; r.lives = 99; kob.dbg.teleport(0, 0, 60, 0); kob.dbg.render(30); const c = r.cat, b = r.roombas[0]; b.on = true; b.x = 3; b.z = 88; b.yaw = 3.14; b.chase = true; r.rare.catOnRoomba = true; c.state = 'ride'; c.x = 3; c.y = 6; c.z = 88; c.yaw = 3.14; kob.dbg.render(3) }) },
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
  momfar: async () => { await p.evaluate(() => { kob.start(2); kob.dbg.pause(true); const r = kob.run; r.t = 60; r.lives = 99; const M = r.mom; M.in = true; M.z = 150; M.noz.x = 60; M.noz.y = 8; M.noz.z = 228; kob.dbg.teleport(40, 0.1, 290, 3.14); kob.dbg.step(3); kob.dbg.render(40) }) },
  momclose: async () => { await p.evaluate(() => { kob.start(2); kob.dbg.pause(true); const r = kob.run; r.t = 60; r.lives = 99; const M = r.mom; M.in = true; M.z = 220; M.noz.x = 40; M.noz.y = 8; M.noz.z = 260; kob.dbg.teleport(26, 0.1, 275, 3.14); kob.dbg.step(3); kob.dbg.render(40) }) },
  momsofa: async () => { await p.evaluate(() => { kob.start(2); kob.dbg.pause(true); const r = kob.run; r.t = 70; r.lives = 99; const M = r.mom; M.in = true; M.z = 130; M.noz.x = -40; M.noz.y = 40; M.noz.z = 160; M.spotT = 9; kob.dbg.teleport(-112, 32.1, 190, 2.1); kob.cam.pitch = -0.3; kob.dbg.step(3); kob.dbg.render(40) }) },
  toys: async () => { await p.evaluate(() => { kob.start(4); kob.dbg.pause(true); kob.run.t = 20; kob.run.mom.in = false; kob.dbg.teleport(96, 0.1, 50, 0); kob.dbg.render(30) }) },
  lure: async () => { await p.evaluate(() => { kob.start(4); kob.dbg.pause(true); const r = kob.run; r.t = 14; r.cat.state = 'rest'; r.cat.T = 0; r.cat.x = 60; r.cat.z = 130; kob.dbg.teleport(96, 0.1, 58, 0); kob.me.vz = 12; kob.dbg.step(40); kob.dbg.render(20) }) },
  cut: async () => { await p.evaluate(() => { kob.start(2); kob.dbg.pause(true); const r = kob.run; r.t = 60; r.lives = 99; const M = r.mom; M.in = true; M.z = 150; M.spotAt = -99; M.wasAim = false; kob.dbg.teleport(40, 0.1, 200, 0); kob.dbg.step(3); kob.dbg.render(12) }) },
  faces: async () => { for (const k of ['search', 'spot', 'angry', 'win']) { await p.evaluate(k => { kob.start(2); kob.dbg.pause(true); const r = kob.run; r.t = 60; r.lives = 99; const M = r.mom; M.in = true; M.z = 205; M.noz.x = 60; M.noz.y = 8; M.noz.z = 280; if (k === 'spot') { M.spotT = 99 } if (k === 'win') M.winT = 99; if (k === 'search') kob.me.y = 170; kob.dbg.teleport(26, k === 'search' ? 160 : 0.1, 330, 3.14); kob.cam.pitch = -0.33; kob.dbg.step(1); if (k === 'angry') { M.spotT = 0; M.dist = 20; M.sucking = true; M.noz.active = true } kob.dbg.render(30) }, k); await p.waitForTimeout(150); await shot('s-face-' + k) } },
  roomba: async () => { await p.evaluate(() => { kob.start(9); kob.dbg.pause(true); const r = kob.run; r.t = 20; const b = r.roombas[0]; b.on = true; b.chase = true; b.x = 40; b.z = 135; b.yaw = 3.14; kob.dbg.teleport(40, 0.1, 100, 0); kob.dbg.render(30) }) }
}
const want = process.argv.slice(2)
for (const n of want.length ? want : Object.keys(scenes)) { await scenes[n](); await p.waitForTimeout(150); await shot('s-' + n) }
console.log('draw', await p.evaluate(() => [kob.dbg.drawCount(), kob.dbg.tris()]))
console.log('errors', errs.length ? errs.slice(0, 12).join('\n') : 'none')
await b.close(); server.kill(); process.exit(0)
