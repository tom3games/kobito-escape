// 家（LDK）の寸法と当たり判定。three.js に依存しない（画面と bot で同じものを使う）
// 体 2cm。見た目は体の高さ 1.8 を 2cm とし、家具は 1cm = 0.75 で置く（実寸どおりだと冷蔵庫が遠すぎるので少し詰めた）
// 北（z=0）のドアからおかんが入る。南東の角に冷蔵庫。冷蔵庫の上に非常口
export const ROOM = { x0: -170, x1: 170, z0: 0, z1: 540, ceil: 180 }
export const MOM_X = 15   // おかんが歩く通路の x（家具を置かない）
export const START = { x: 26, y: 0, z: 42, yaw: 0 }
export const GOAL = { x: 128, y: 135, z: 516, r: 15 }   // 冷蔵庫の上の非常口の前

// 名前つきの家具。{x0,x1,y0,y1,z0,z1} ＋ 性質。見た目は js/house3d.js がこの数字を読む
export const F = {
  sofaBase: { x0: -170, x1: -100, y0: 0, y1: 32, z0: 70, z1: 220 },
  sofaBack: { x0: -170, x1: -148, y0: 32, y1: 68, z0: 70, z1: 220 },
  sofaArmN: { x0: -148, x1: -100, y0: 32, y1: 50, z0: 70, z1: 88 },
  sofaArmS: { x0: -148, x1: -100, y0: 32, y1: 50, z0: 202, z1: 220 },
  table: { x0: -70, x1: -10, y0: 24, y1: 28, z0: 100, z1: 170 },
  chips: { x0: -56, x1: -34, y0: 28, y1: 52, z0: 112, z1: 130 },
  amazon: { x0: -60, x1: -18, y0: 0, y1: 30, z0: 18, z1: 58 },
  yogurt: { x0: 48, x1: 62, y0: 0, y1: 13, z0: 30, z1: 44 },
  tvStand: { x0: 125, x1: 170, y0: 0, y1: 36, z0: 80, z1: 210 },
  tv: { x0: 150, x1: 156, y0: 36, y1: 96, z0: 100, z1: 190 },
  shelf: { x0: -170, x1: -132, y0: 0, y1: 135, z0: 226, z1: 306 },
  curtain: { x0: 160, x1: 170, y0: 4, y1: 170, z0: 320, z1: 450 },
  dining: { x0: -120, x1: -20, y0: 50, y1: 54, z0: 310, z1: 380 },
  tissue: { x0: -82, x1: -56, y0: 54, y1: 68, z0: 330, z1: 346 },
  chairSeat: { x0: -62, x1: -30, y0: 33, y1: 36, z0: 386, z1: 416 },
  chairBack: { x0: -62, x1: -30, y0: 36, y1: 72, z0: 413, z1: 416 },
  pendantA: { x0: -82, x1: -58, y0: 100, y1: 118, z0: 333, z1: 357 },
  pendantB: { x0: 52, x1: 72, y0: 96, y1: 112, z0: 292, z1: 312 },
  server: { x0: -166, x1: -136, y0: 0, y1: 100, z0: 430, z1: 462 },
  counter: { x0: -170, x1: 104, y0: 0, y1: 64, z0: 490, z1: 540 },
  upper: { x0: -170, x1: 104, y0: 106, y1: 150, z0: 516, z1: 540 },
  cooker: { x0: -34, x1: -8, y0: 64, y1: 84, z0: 496, z1: 518 },
  micro: { x0: 40, x1: 86, y0: 64, y1: 92, z0: 494, z1: 528 },
  fridge: { x0: 104, x1: 170, y0: 0, y1: 135, z0: 474, z1: 540, slip: 0.34 },
  lampShade: { x0: -52, x1: -28, y0: 104, y1: 124, z0: 228, z1: 252 },
  hangBar: { x0: 72, x1: 112, y0: 146, y1: 150, z0: 118, z1: 122 },
  hangL: { x0: 70, x1: 74, y0: 0, y1: 146, z0: 116, z1: 124 },
  hangR: { x0: 110, x1: 114, y0: 0, y1: 146, z0: 116, z1: 124 },
  rackRail: { x0: 78, x1: 130, y0: 98, y1: 102, z0: 262, z1: 278 },
  rackL: { x0: 78, x1: 81, y0: 0, y1: 98, z0: 268, z1: 272 },
  rackR: { x0: 127, x1: 130, y0: 0, y1: 98, z0: 268, z1: 272 },
  ladderTop: { x0: 62, x1: 92, y0: 104, y1: 110, z0: 404, z1: 426 },
  ladderA: { x0: 62, x1: 66, y0: 0, y1: 104, z0: 396, z1: 434 },
  ladderB: { x0: 88, x1: 92, y0: 0, y1: 104, z0: 396, z1: 434 },
  pot: { x0: 112, x1: 136, y0: 0, y1: 22, z0: 20, z1: 44 },
  dumbbell: { x0: -96, x1: -66, y0: 0, y1: 9, z0: 268, z1: 284 },
  // 部屋の真ん中が空くと床で何も掛からないので、実家にありそうな物で埋めた（tools/reach.mjs で測った）
  golf: { x0: 60, x1: 74, y0: 0, y1: 66, z0: 72, z1: 86 },
  towerBase: { x0: 38, x1: 64, y0: 0, y1: 4, z0: 192, z1: 218 },
  towerPost: { x0: 47, x1: 55, y0: 4, y1: 108, z0: 201, z1: 209 },
  towerMid: { x0: 40, x1: 62, y0: 58, y1: 62, z0: 194, z1: 216 },
  towerTop: { x0: 38, x1: 64, y0: 108, y1: 112, z0: 192, z1: 218 },
  ironBoard: { x0: 36, x1: 80, y0: 56, y1: 59, z0: 334, z1: 350 },
  ironLegA: { x0: 44, x1: 47, y0: 0, y1: 56, z0: 336, z1: 348 },
  ironLegB: { x0: 69, x1: 72, y0: 0, y1: 56, z0: 336, z1: 348 },
  fridgeBox: { x0: 146, x1: 170, y0: 135, y1: 166, z0: 478, z1: 506 }
}
// 棚の縁（上からだけ乗れる）と、細くてタップで掛けやすい点
export const SHELF_Y = [27, 54, 81, 108]
const LEDGE = { x0: -132, x1: -125, z0: 226, z1: 306 }
export const SIGNS = [
  { x: -128, y: 74, z: 72, ry: -Math.PI / 2 },
  { x: -131, y: 142, z: 300, ry: Math.PI / 2 },
  { x: 158, y: 175, z: 400, ry: -Math.PI / 2 }
]
// 案内の順番（ソファ→本棚→カーテン→非常口）。矢印が順に指す。飛ばしても進める
export const WAYS = [
  { key: 'sofa', x: -158, y: 68, z: 150, r: 34 },
  { key: 'shelf', x: -150, y: 135, z: 268, r: 34 },
  { key: 'curtain', x: 165, y: 170, z: 390, r: 40 },
  { key: 'exit', x: GOAL.x, y: GOAL.y, z: GOAL.z, r: GOAL.r }
]
// 落ちている物（止まっている。取ると紙に書かれる）
export const ITEMS = [
  { id: 'coin', x: 42, y: 0, z: 182, r: 7 },
  { id: 'glasses', x: -124, y: 50, z: 211, r: 7 },
  { id: 'hesokuri', x: -128, y: 81, z: 266, r: 6 },
  { id: 'dvd', x: 138, y: 36, z: 140, r: 7 },
  { id: 'ring', x: -60, y: 54, z: 370, r: 6 },
  { id: 'chip', x: -24, y: 28, z: 150, r: 7, heal: true }
]
// 猫が飛び移れる面（x,y,z は面の真ん中あたり）
export const PERCHES = [
  { x: -124, y: 32, z: 145, w: 16, l: 50 }, { x: -159, y: 68, z: 145, w: 6, l: 66 }, { x: -40, y: 28, z: 135, w: 20, l: 25 },
  { x: 147, y: 36, z: 95, w: 14, l: 10 }, { x: -151, y: 135, z: 266, w: 12, l: 32 }, { x: -70, y: 54, z: 360, w: 40, l: 14 },
  { x: -46, y: 36, z: 400, w: 10, l: 10 }, { x: 51, y: 112, z: 205, w: 10, l: 10 }, { x: 58, y: 59, z: 342, w: 14, l: 4 }, { x: 0, y: 64, z: 505, w: 90, l: 10 }, { x: 77, y: 110, z: 415, w: 10, l: 6 }, { x: -151, y: 100, z: 446, w: 10, l: 10 }, { x: -40, y: 150, z: 528, w: 90, l: 7 }
]
export const LINE = { y: 160, z: 305 }           // 室内物干しのワイヤー
export const LIGHT_L = { x: -30, y: 172, z: 165 }  // 居間のシーリングライト
export const LIGHT_K = { x: 60, y: 172, z: 440 }   // 台所のシーリングライト
// 細い柱の、ワイヤーが掛かる高さ（ボタンの自動の狙いとタップ）
const POLE_POINTS = [
  [72, 120, [40, 70, 100, 130, 148]], [112, 120, [40, 70, 100, 130, 148]], [92, 120, [148]],
  [-40, 240, [40, 70, 100, 122]],
  [80, 270, [40, 70, 98]], [128, 270, [40, 70, 98]], [104, 270, [98]],
  [62, 302, [96]], [-70, 345, [100]],
  [124, 32, [36, 60, 80]], [100, 62, [24, 50]],
  [64, 415, [40, 70, 104]], [90, 415, [40, 70, 104]],
  [-40, 20, [36, 60]], [-120, 10, [45]],
  [67, 79, [40, 64]], [51, 205, [40, 75, 108]], [58, 342, [56]], [14, 480, [40]],
  // 室内物干しのワイヤー（部屋を東西に渡る）。洗濯物の留め具ごとに掛かる
  ...[-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150].map(x => [x, LINE.z, [LINE.y]]),
  // 天井の照明
  [LIGHT_L.x, LIGHT_L.z, [LIGHT_L.y]], [LIGHT_K.x, LIGHT_K.z, [LIGHT_K.y]]
]

function rect(o, extra = {}) {
  return { cx: (o.x0 + o.x1) / 2, cz: (o.z0 + o.z1) / 2, hw: (o.x1 - o.x0) / 2, hl: (o.z1 - o.z0) / 2, yaw: 0, y0: o.y0, y1: o.y1, kind: 'building', small: true, slip: o.slip, ...extra }
}
function grid() {
  const S = 40, cells = new Map(), key = (i, j) => i * 4096 + j
  return {
    add(o, x0, z0, x1, z1) { for (let i = Math.floor(x0 / S); i <= Math.floor(x1 / S); i++) for (let j = Math.floor(z0 / S); j <= Math.floor(z1 / S); j++) { const k = key(i, j); if (!cells.has(k)) cells.set(k, []); cells.get(k).push(o) } },
    at(x, z) { return cells.get(key(Math.floor(x / S), Math.floor(z / S))) || EMPTY }
  }
}
const EMPTY = []

export function createHouse() {
  const col = [], g = grid()
  const add = o => { col.push(o); g.add(o, o.cx - o.hw - 1, o.cz - o.hl - 1, o.cx + o.hw + 1, o.cz + o.hl + 1) }
  for (const k in F) add(rect(F[k], { name: k, ...(k === 'dumbbell' || k === 'yogurt' ? { noAnchor: true } : {}) }))
  for (const y of SHELF_Y) add(rect({ ...LEDGE, y0: y - 2, y1: y }, { name: 'ledge', oneWay: true, noAnchor: true }))
  // 壁は登れない（ワイヤーだけ掛かる）。天井にはワイヤーが掛からない（全部掛かると天井を這うだけで着いてしまった）
  const R = ROOM, T = 30, H = R.ceil
  for (const w of [{ x0: R.x0 - T, x1: R.x0, z0: R.z0 - T, z1: R.z1 + T }, { x0: R.x1, x1: R.x1 + T, z0: R.z0 - T, z1: R.z1 + T }, { x0: R.x0 - T, x1: R.x1 + T, z0: R.z0 - T, z1: R.z0 }, { x0: R.x0 - T, x1: R.x1 + T, z0: R.z1, z1: R.z1 + T }])
    add(rect({ ...w, y0: 0, y1: H }, { kind: 'bound', noClimb: true, name: 'wall' }))
  const poles = []
  for (const [x, z, ys] of POLE_POINTS) for (const y of ys) poles.push({ x, z, y0: Math.max(0, y - 8), y1: y + 0.4 })
  return {
    colliders: col, poles, bounds: { x0: R.x0, x1: R.x1, z0: R.z0, z1: R.z1 }, ceilY: R.ceil,
    nearby: (x, z) => g.at(x, z),
    groundAt: () => ({ h: 0, surf: 'floor', slab: null }),
    surfaceAt: () => 'floor'
  }
}
// その点の真下の面（猫の着地点）。y より上の面は見ない
export function surfaceBelow(world, x, z, y) {
  let h = 0
  for (const o of world.nearby(x, z)) {
    if (o.noHit || o.kind === 'bound' || o.y1 > y + 0.6 || o.y1 <= h) continue
    if (Math.abs(x - o.cx) <= o.hw && Math.abs(z - o.cz) <= o.hl) h = o.y1
  }
  return h
}
// 床の丸い物（ルンバ）が箱に当たるか
export function discHits(world, x, z, r, h = 7) {
  if (x < ROOM.x0 + r || x > ROOM.x1 - r || z < ROOM.z0 + r || z > ROOM.z1 - r) return true
  for (const o of world.nearby(x, z)) {
    if (o.noHit || o.kind === 'bound' || o.oneWay || o.y0 > h) continue
    if (Math.abs(x - o.cx) < o.hw + r && Math.abs(z - o.cz) < o.hl + r) return true
  }
  return false
}
