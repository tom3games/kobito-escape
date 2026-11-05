// 開始地点と床のあちこちから、どの向きにワイヤーが掛かるかを実際の判定で数える。node tools/reach.mjs
import { createHouse, START, ROOM } from '../shared/house.js'
import { createRunner, findAnchor, rayHit, RUN } from '../shared/runner.js'
const world = createHouse()
function tapReach(x, y, z, deg, range = RUN.wireRange) {
  const a = deg * Math.PI / 180, oy = y + 1.5
  let best = null
  for (let p = -6; p <= 80; p += 1) {
    const pr = p * Math.PI / 180, dx = Math.sin(a) * Math.cos(pr), dy = Math.sin(pr), dz = Math.cos(a) * Math.cos(pr)
    const h = rayHit(world, x, oy, z, dx, dy, dz, range)
    if (!h || h.y <= y + 2) continue
    const d = Math.hypot(h.x - x, h.y - oy, h.z - z)
    if (d <= range && (best == null || d < best)) best = d
  }
  return best
}
export function sweep(x, y, z, step = 5) {
  const rows = []
  for (let deg = 0; deg < 360; deg += step) {
    const r = createRunner({ id: 'm', spawn: { x, y, z, yaw: deg * Math.PI / 180 } })
    const b = findAnchor(world, r, deg * Math.PI / 180)
    rows.push({ deg, tap: tapReach(x, y, z, deg), btn: b && Math.round(Math.hypot(b.x - x, b.y - (y + 1.5), b.z - z)) })
  }
  return rows
}
if (process.argv[1].endsWith('reach.mjs')) {
  const rows = sweep(START.x, 0, START.z)
  console.log(`開始地点: タップで掛かる向き ${rows.filter(r => r.tap).length}/72  ボタンで掛かる向き ${rows.filter(r => r.btn).length}/72  掛からない向き(ボタン) [${rows.filter(r => !r.btn).map(r => r.deg)}]`)
  let pts = 0, bad = 0, worst = 0, worstAt = null, hist = {}
  for (let x = ROOM.x0 + 12; x <= ROOM.x1 - 12; x += 20) for (let z = 12; z <= 470; z += 20) {
    if (world.colliders.some(o => o.kind === 'building' && o.y0 < 2 && Math.abs(x - o.cx) < o.hw + 0.5 && Math.abs(z - o.cz) < o.hl + 0.5)) continue
    const rr = sweep(x, 0, z, 15), n = rr.filter(r => !r.btn).length
    pts++; if (n) bad++; if (n > worst) { worst = n; worstAt = [x, z] } if (n === 24) hist[`${x},${z}`] = 1
  }
  console.log(`床 ${pts} 地点（15度刻み）: ボタンが不発の向きが残る地点 ${bad}／最悪 ${worst}/24 向き @${worstAt}／全部の向きで不発の地点 ${Object.keys(hist).length} [${Object.keys(hist).slice(0, 24).join(' ')}]`)
  for (const [n, x, y, z] of [['ソファの背', -160, 68, 145], ['本棚の上', -150, 135, 266], ['カーテンの上', 165, 170, 390], ['ワイヤーの下（真ん中）', 0, 120, 305], ['冷蔵庫の手前の高い所', 150, 140, 455]]) {
    const r = sweep(x, y, z, 15); console.log(`${n}: ボタン ${r.filter(a => a.btn).length}/24`)
  }
}
