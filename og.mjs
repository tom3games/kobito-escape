// SNS 用の画像（1200x630）: 巨大なおかんと猫の前をフロスで飛ぶ場面。node og.mjs
import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
import { MUTE_LAUNCH, muteContext } from './mute.mjs'
const PORT = 5780, ROOT = import.meta.dirname
const server = spawn(process.execPath, ['server.mjs'], { cwd: ROOT, env: { ...process.env, PORT: String(PORT) } })
await new Promise(r => setTimeout(r, 400))
const b = await chromium.launch({ ...MUTE_LAUNCH, channel: 'chromium', args: [...(MUTE_LAUNCH.args || []), '--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] })
const ctx = await b.newContext({ locale: 'ja-JP', viewport: { width: 1200, height: 630 } })
await muteContext(ctx)
const p = await ctx.newPage()
await p.goto(`http://localhost:${PORT}/`); await p.waitForFunction(() => window.__kobReady, null, { timeout: 25000 }); await p.waitForFunction(() => kob.momArt.done, null, { timeout: 25000 }); await p.waitForTimeout(800)
await p.evaluate(() => {
  kob.start(12); kob.dbg.pause(true)
  const r = kob.run, me = kob.me
  r.t = 40; r.lives = 99; const M = r.mom; M.in = true; M.z = 455; M.noz.x = 72; M.noz.y = 30; M.noz.z = 318; M.cool = 0; M.spotT = 99; M.sucking = false
  const b = r.roombas[0]; b.on = true; b.x = 50; b.z = 262; b.yaw = 3.5; b.chase = true
  const c = r.cat; c.state = 'crouch'; c.T = 99; c.x = -3; c.y = 0; c.z = 275; c.yaw = 2.9; c.to = { x: 22, y: 0, z: 232 }; c.ring = { x: 22, y: 0, z: 232, r: 10 }
  kob.dbg.teleport(26, 12, 240, 0)
  me.rope = { x: -30, y: 96, z: 300, len: 90, t: 1 }; me.grounded = false; me.vx = -2; me.vy = 3; me.vz = 22
  kob.cam.hd = -0.08; kob.cam.pitch = -0.25
  kob.cam.off.set(1, 0.6, -10); kob.cam.lookOff.set(-3, 5, 10)
  window.__freeze = false; kob.dbg.render(12); document.getElementById('hud').classList.add('hidden')
  const o = document.createElement('div'); o.innerHTML = `<div style="position:fixed;left:34px;top:30px;background:#00a65a;color:#f6fff8;border:6px solid #f6fff8;outline:4px solid #0a5d36;padding:16px 26px 20px;font-family:'BIZ UDPGothic',sans-serif;font-weight:700;line-height:1.1;transform:rotate(-1.5deg);box-shadow:0 0 50px rgba(0,230,120,.6)"><div style="font-size:50px">小人になって</div><div style="font-size:50px">家の中を</div><div style="font-size:84px">逃げろ</div></div><div style="position:fixed;left:44px;bottom:30px;background:#f8f2e0;color:#241c12;padding:10px 18px;font:600 30px 'Klee One',serif;transform:rotate(1deg);box-shadow:0 4px 12px rgba(0,0,0,.45)">体2cm。デンタルフロスで非常口へ</div>`; document.body.appendChild(o)
})
await p.waitForTimeout(600)
await p.screenshot({ path: ROOT + '/og.png' })
await b.close(); server.kill(); process.exit(0)
