// 自動で遊ぶ役（検証とタイトルの背景）。skilled: 上手い／clumsy: 初めての人（遅い・ぶれる）／ground: 地面を走るだけ／idle: 何もしない
// 人間と同じ入力（moveDir・throttle・wire・wallY）だけを使う
import { findAnchor } from './runner.js'
import { WAYS } from './house.js'
const P = {
  skilled: { lag: 9, wireGap: 0.3, wireProb: 1, noise: 0.08, dodge: true, relT: 1.7 },
  normal: { lag: 18, wireGap: 0.6, wireProb: 0.12, noise: 0.4, dodge: true, relT: 2.2, lost: true, lostGap: 9 },
  clumsy: { lag: 42, wireGap: 1.2, wireProb: 0.03, noise: 1.1, dodge: false, relT: 3.2, lost: true }
}
export function createBot(kind, seed = 1) {
  let s = (seed * 97 + 13) >>> 0
  return { kind, p: P[kind], rnd: () => (s = (s * 16807) % 2147483647) / 2147483647, q: [], n: 0, nT: 0, wT: 0, rT: 0, clT: 0, stuck: 0, lx: 0, lz: 0, prevW: false }
}
const ang = a => { while (a > Math.PI) a -= Math.PI * 2; while (a < -Math.PI) a += Math.PI * 2; return a }
export function botInput(b, r, m, world, dt) {
  if (b.kind === 'idle') return {}
  const w = WAYS[m.way]
  if (b.kind === 'ground') { const y = Math.atan2(w.x - r.x, w.z - r.z); return { throttle: 1, moveDir: { x: Math.sin(y), z: Math.cos(y) } } }
  const p = b.p
  // 初めての人: ときどき手が止まる（画面を見回す・どこへ行くか迷う）
  if (p.lost) {
    b.lostT = (b.lostT ?? 3 + b.rnd() * 4) - dt
    if (b.lostT <= 0) { b.pauseT = 0.8 + b.rnd() * 1.6; b.lostT = (p.lostGap || 4) + b.rnd() * 5 }
    if (b.pauseT > 0) { b.pauseT -= dt; b.prevW = false; return {} }
  }
  let gx = w.x, gy = w.y, gz = w.z
  b.q.push([gx, gy, gz]); [gx, gy, gz] = b.q.length > p.lag ? b.q.shift() : b.q[0]
  b.nT -= dt; if (b.nT <= 0) { b.n = (b.rnd() - 0.5) * p.noise * 2; b.nT = 0.5 + b.rnd() }
  let yaw = Math.atan2(gx - r.x, gz - r.z) + b.n
  // 上手い人は猫の輪・スリッパの輪・吸い口から離れる
  if (p.dodge) {
    let ax = 0, az = 0
    const c = m.cat.ring, sl = m.mom.slip
    if (c && Math.hypot(c.x - r.x, c.z - r.z) < c.r + 6) { ax += r.x - c.x; az += r.z - c.z }
    if (sl && Math.hypot(sl.x - r.x, sl.z - r.z) < sl.r + 6) { ax += r.x - sl.x; az += r.z - sl.z }
    const N = m.mom.noz; if (m.mom.in && N.active && m.mom.dist < 26) { ax += (r.x - N.x) * 0.5; az += (r.z - N.z) * 0.5 }
    if (ax || az) yaw = Math.atan2(ax, az)
  }
  const inp = { throttle: 1, moveDir: { x: Math.sin(yaw), z: Math.cos(yaw) } }
  const dh = Math.hypot(gx - r.x, gz - r.z)
  if (r.climbing) {
    inp.moveDir = null
    inp.wallY = gy > r.y - 1 ? 1 : -1; inp.wallX = 0
    inp.throttle = 0
    b.clT += dt
    // 目標が高く、もう横へ進みたい時はワイヤーで離れる
    if ((r.y > gy - 2 && r.y < gy + 4) || b.clT > (r.climbing.slip ? 40 : 18)) { inp.wire = true; inp.wireYaw = yaw; b.clT = 0 }
    return wireEdge(b, inp)
  }
  b.clT = 0
  // 真下まで来たのに低い時は目標の方へ走って壁を登る
  const below = dh < 28 && gy > r.y + 6
  // 目標の真上にいる: ワイヤーを離して降りる
  if (dh < 14 && r.y > gy - 1) { if (r.rope) inp.wire = true; return wireEdge(b, inp) }
  b.wT += dt
  if (!r.rope) {
    if (!(below && r.grounded) && b.wT > p.wireGap && (r.grounded || r.vy < -1) && b.rnd() < p.wireProb) { inp.wire = true; inp.wireYaw = yaw; b.wT = 0; b.rT = 0 }
  } else {
    b.rT += dt
    const past = (gx - r.x) * r.vx + (gz - r.z) * r.vz < 0
    if ((past && r.vy > 0 && b.rT > 0.4) || b.rT > p.relT) { inp.wire = true; b.rT = 0 }
  }
  // 詰まり
  b.stuck = Math.hypot(r.x - b.lx, r.z - b.lz) < 0.05 ? b.stuck + dt : 0
  b.lx = r.x; b.lz = r.z
  if (b.stuck > 1.2) { inp.wire = true; b.stuck = 0 }
  return wireEdge(b, inp)
}
function wireEdge(b, inp) { const w = !!inp.wire; inp.wire = w && !b.prevW; b.prevW = w; return inp }
