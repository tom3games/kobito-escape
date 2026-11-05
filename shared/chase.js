// 追ってくる物（ルンバ・猫・おかんの掃除機）と勝ち負けのきまり。three.js に依存しない
// 同じ seed なら同じ展開。レアな出来事は seed のくじで決まる
import { discHits, surfaceBelow, GOAL, ITEMS, TOYS, ROOM, MOM_X, PERCHES, WAYS, START } from './house.js?v=3'
import { RUN } from './runner.js?v=3'

export const CH = {
  lives: 3, immune: 3,
  roomba: { R: 12.5, h: 6, wake: 2, speed: [10.5, 12.5], sight: 150, second: 70 },
  cat: { wake: 8, crouch: 1.0, rest: 2.6, afterHit: 5, ringR: 10, bodyR: 7, leapMax: 125, jumpUp: 92, speed: 78, swipeR: 15, swipeUp: 26, swipeSec: 0.65 },
  mom: { enter: 12, walk: [13, 21], reach: 150, reachY: 150, reachYLate: 200, lateAt: 170, nozV: [16, 26], suckR: 34, suckAcc: 34, catchR: 4.8, cool: 3.6, ramp: 150 },
  slipper: { warn: 1.25, R: 15 },
  // ネズミのおもちゃ: uses 回まで。lure 秒だけ猫（レアでは猫を乗せたルンバ）が追う。飽きたら bored 秒だけ呆ける
  toy: { uses: 3, lure: 6.5, touchR: 6.5, touchY: 6, speed: 46, kick: 34, friction: 0.85, crouch: 0.45, pounceRest: 0.3, bored: 1.4 },
  old: { x: -146, y: 135, z: 290, r: 12 }
}
const clamp = (v, a, b) => v < a ? a : v > b ? b : v
const rng = seed => { let s = (((seed >>> 0) * 2654435761) >>> 0) % 2147483646 + 1; const f = () => (s = (s * 16807) % 2147483647) / 2147483647; for (let i = 0; i < 6; i++) f(); return f }

export function createRun(world, me, seed = 1) {
  const rnd = rng(seed * 31 + 7)
  // レア（どれも低い確率。seed で決まる）
  const lots = rnd(), lot2 = rnd(), lot3 = rnd(), lot4 = rnd()
  const rare = { catBox: lots < 0.11, catOnRoomba: lots >= 0.11 && lots < 0.23, phone: lot2 < 0.3, cockroach: lot3 < 0.3, oldMan: lot4 < 0.22 }
  const m = {
    world, me, seed, rnd, t: 0, over: false, won: false, lives: CH.lives, immune: 0, by: null, catches: [], events: [],
    rare, way: 0, best: 0, items: {}, itemsGot: [], airT: 0,
    roombas: [mkRoomba(-30, 165, 0, rnd)],
    cat: { state: rare.catBox ? 'box' : 'nap', x: 105, y: 0, z: 150, yaw: -2.2, T: 0, from: null, to: null, ring: null, ringT: 0, seen: false },
    mom: { in: false, z: -70, x: MOM_X, yaw: 0, noz: { x: MOM_X + 18, y: 30, z: -40, vx: 0, vy: 0, vz: 0 }, cool: 0, phoneAt: 45 + rnd() * 40, phoneT: 0, slipT: 0, slip: null, slipAt: 40 + rnd() * 50, spoke: 0, sucked: false, aim: false, spotT: 0, spotAt: -99, winT: 0 },
    oldSeen: false, spokeT: 0,
    toys: TOYS.map(t => ({ ...t, state: 'idle', vx: 0, vy: 0, vz: 0, spin: 0, sq: 0 })), toyUses: CH.toy.uses, toysUsed: 0, lure: 0, lureToy: null, catBored: 0, toyEmptySaid: false
  }
  return m
}
function mkRoomba(x, z, wakeAt, rnd) { return { x, z, yaw: rnd() * 6.28, on: false, wakeAt, wait: 0, turnT: 0, chase: false, gx: x, gz: z, bump: 0 } }

export const chest = r => ({ x: r.x, y: r.y + 1.1, z: r.z })

// 捕まった。by: roomba / cat / vac / slipper
function caught(m, by, ax, ay, az) {
  const r = m.me
  if (m.immune > 0 || m.over) return false
  m.lives--; m.catches.push({ by, at: m.t, way: m.way }); m.immune = CH.immune; m.by = by
  r.rope = null; r.climbing = null; r.grounded = false; r.y += 0.2
  const dx = r.x - ax, dz = r.z - az, d = Math.hypot(dx, dz) || 1
  const away = by === 'vac' ? 24 : 15
  r.vx = dx / d * away; r.vz = dz / d * away; r.vy = by === 'vac' ? 15 : 13; r.stun = by === 'vac' ? 0.8 : 0.55
  m.events.push({ t: 'caught', by, lives: m.lives, x: r.x, y: r.y + 1, z: r.z })
  if (m.lives <= 0) { m.over = true; m.events.push({ t: 'end', won: false, by }) }
  return true
}

function stepRoomba(m, b, dt) {
  const me = m.me, C = CH.roomba
  if (!b.on) { if (m.t >= b.wakeAt + C.wake) { b.on = true; m.events.push({ t: 'roombaOn' }) } return }
  if (b.wait > 0) { b.wait -= dt; return }
  const sp = (C.speed[0] + (C.speed[1] - C.speed[0]) * Math.min(1, m.t / 120))
  const onFloor = me.y < 7
  const d = Math.hypot(me.x - b.x, me.z - b.z)
  b.chase = onFloor && d < C.sight
  // レア: 猫を乗せたルンバは、おもちゃの間だけ猫の言いなりになる
  const ridden = m.rare.catOnRoomba && b === m.roombas[0] && m.lure > 0 && m.lureToy
  if (ridden) { const y = m.lureToy; b.chase = true; b.gx = y.x; b.gz = y.z; if (Math.hypot(y.x - b.x, y.z - b.z) < C.R + 5 && y.state !== 'roll') kickToy(m, y) }
  else if (b.chase) { b.gx = me.x; b.gz = me.z }
  else {
    // 床を見回る。自分の真下の方へじわじわ寄る
    b.turnT -= dt
    if (b.turnT <= 0 || Math.hypot(b.gx - b.x, b.gz - b.z) < 10) { b.turnT = 3 + m.rnd() * 3; b.gx = clamp(me.x + (m.rnd() - 0.5) * 120, -150, 150); b.gz = clamp(me.z + (m.rnd() - 0.5) * 120, 20, 470) }
  }
  const want = Math.atan2(b.gx - b.x, b.gz - b.z)
  let da = want - b.yaw; while (da > Math.PI) da -= Math.PI * 2; while (da < -Math.PI) da += Math.PI * 2
  // 回避中は横へ進む
  if (b.bump > 0) { b.bump -= dt } else b.yaw += clamp(da, -3.4 * dt, 3.4 * dt)
  const v = sp * (ridden ? 1.5 : b.chase ? 1 : 0.75), nx = b.x + Math.sin(b.yaw) * v * dt, nz = b.z + Math.cos(b.yaw) * v * dt
  if (!discHits(m.world, nx, nz, C.R)) { b.x = nx; b.z = nz }
  else if (!discHits(m.world, nx, b.z, C.R)) b.x = nx
  else if (!discHits(m.world, b.x, nz, C.R)) b.z = nz
  else { b.yaw += (m.rnd() < 0.5 ? 1 : -1) * (0.9 + m.rnd()); b.bump = 0.55 }
  if (me.y < C.h && d < C.R + 0.9 && caught(m, 'roomba', b.x, 0, b.z)) b.wait = 1.8
}

// 猫: 伏せて（お尻を振って）飛ぶ。着地点の輪が出るので、そこから離れれば当たらない。動く物に当てる必要はない
function stepCat(m, dt) {
  const c = m.cat, me = m.me, C = CH.cat
  if (m.rare.catOnRoomba) { const b = m.roombas[0]; c.x = b.x; c.y = 6; c.z = b.z; c.yaw = b.yaw; c.state = 'ride'; return }
  if (c.state === 'box') return
  const toy = m.lure > 0 ? m.lureToy : null
  if (toy && c.state === 'nap') { c.state = 'rest'; c.T = 0.3; m.events.push({ t: 'catWake', quiet: true }) }
  if (c.state === 'nap') { if (m.t >= C.wake) { c.state = 'rest'; c.T = 0.4; m.events.push({ t: 'catWake' }) } return }
  c.T -= dt
  const dh = Math.hypot(me.x - c.x, me.z - c.z), dy = me.y - c.y
  if (c.state === 'swipe') {
    if (c.T <= 0) {
      m.events.push({ t: 'swipe', x: c.x, y: c.y, z: c.z })
      const hit = Math.hypot(me.x - c.x, me.z - c.z) < C.swipeR + 2 && me.y - c.y < C.swipeUp + 2 && me.y - c.y > -4 && caught(m, 'cat', c.x, c.y, c.z)
      c.state = 'rest'; c.T = hit ? C.afterHit : C.rest
    }
    return
  }
  if (c.state === 'rest' && toy) {
    c.yaw = Math.atan2(toy.x - c.x, toy.z - c.z)
    if (c.T > 0) return
    const tx = clamp(toy.x + toy.vx * 0.35, ROOM.x0 + 8, ROOM.x1 - 8), tz = clamp(toy.z + toy.vz * 0.35, ROOM.z0 + 8, ROOM.z1 - 8)
    const to = { x: tx, y: surfaceBelow(m.world, tx, tz, toy.y + 1), z: tz }
    c.state = 'crouch'; c.T = CH.toy.crouch; c.to = to; c.ring = null; c.forToy = true   // おもちゃしか見ていない。輪は出さず、当たらない
    m.events.push({ t: 'crouch', quiet: true })
    return
  }
  if (c.state === 'rest') {
    c.yaw = Math.atan2(me.x - c.x, me.z - c.z)
    if (c.T > 0) return
    if (m.catBored > 0) { c.T = m.catBored; m.catBored = 0; return }   // 飽きて呆けている
    // 壁・カーテンにいて上にいる: 手が届けば前足
    if (dh < C.swipeR && dy > 2 && dy < C.swipeUp) { c.state = 'swipe'; c.T = C.swipeSec; m.events.push({ t: 'swipeWarn' }); return }
    // 飛ぶ先を決める: 自分の少し先。届かない時は自分に近い面へ
    const lead = me.grounded ? 0.45 : 0.75
    const tx = me.x + me.vx * lead, tz = me.z + me.vz * lead
    let to = null
    const sy = surfaceBelow(m.world, tx, tz, Math.max(me.y, 0) + 1)
    // 冷蔵庫の上には飛ばない（段ボールと非常口でふさがっている）。最後の勝負は掃除機とだけ
    if (Math.hypot(tx - GOAL.x, tz - GOAL.z) < 75 && me.y > 110) { c.T = 0.6; return }
    if (Math.hypot(tx - c.x, tz - c.z) <= C.leapMax && sy - c.y <= C.jumpUp && Math.abs(me.y - sy) < 40) to = { x: tx, y: sy, z: tz }
    else {
      let bs = 1e9
      for (const p of PERCHES) {
        if (p.y - c.y > C.jumpUp || Math.hypot(p.x - c.x, p.z - c.z) > C.leapMax * 1.6) continue
        const s = Math.hypot(p.x - me.x, (p.y - me.y) * 0.6, p.z - me.z)
        if (s < bs) { bs = s; to = { x: clamp(me.x, p.x - p.w, p.x + p.w), y: p.y, z: clamp(me.z, p.z - p.l, p.z + p.l) } }
      }
      if (to && c.y === 0 && to.y === 0) to = null
      if (!to || Math.hypot(to.x - c.x, to.z - c.z) < 6) { to = sy <= c.y + C.jumpUp ? { x: clamp(tx, c.x - C.leapMax, c.x + C.leapMax), y: 0, z: clamp(tz, c.z - C.leapMax, c.z + C.leapMax) } : null }
    }
    if (!to) { c.T = 0.5; return }
    // 壁や箱の中に降りないよう、面の高さを取り直す
    to.y = surfaceBelow(m.world, to.x, to.z, to.y + 1)
    c.state = 'crouch'; c.T = C.crouch; c.to = to; c.ring = { x: to.x, y: to.y, z: to.z, r: C.ringR }
    m.events.push({ t: 'crouch' })
    return
  }
  if (c.state === 'crouch') {
    c.yaw = Math.atan2(c.to.x - c.x, c.to.z - c.z)
    if (c.T <= 0) { c.state = 'leap'; c.from = { x: c.x, y: c.y, z: c.z }; const D = Math.hypot(c.to.x - c.x, c.to.y - c.y, c.to.z - c.z); c.dur = Math.max(0.5, D / C.speed); c.T = c.dur; c.apex = Math.max(c.y, c.to.y) + 10 + D * 0.12; m.events.push({ t: 'leap' }) }
    return
  }
  if (c.state === 'leap') {
    const k = 1 - Math.max(0, c.T) / c.dur, f = c.from, to = c.to
    c.x = f.x + (to.x - f.x) * k; c.z = f.z + (to.z - f.z) * k
    const y0 = f.y, y1 = to.y, ap = c.apex   // 放物線（頂点 ap を通る）
    c.y = (1 - k) * (1 - k) * y0 + 2 * (1 - k) * k * (2 * ap - (y0 + y1) / 2) + k * k * y1
    if (!c.forToy && Math.hypot(me.x - c.x, me.y + 1 - (c.y + 6), me.z - c.z) < C.bodyR && caught(m, 'cat', c.x, c.y, c.z)) c.hitT = 1
    if (c.T <= 0) {
      c.x = to.x; c.y = to.y; c.z = to.z; c.ring = null; c.state = 'rest'; c.T = c.hitT ? C.afterHit : C.rest; c.hitT = 0
      if (m.lure > 0 && m.lureToy) { const y = m.lureToy; if (!(c.T === C.afterHit)) c.T = CH.toy.pounceRest; if (Math.hypot(y.x - c.x, y.z - c.z) < 18) kickToy(m, y) }
      m.events.push({ t: 'catLand', x: c.x, y: c.y, z: c.z, near: Math.hypot(me.x - c.x, me.z - c.z) })
      if (!c.forToy && Math.hypot(me.x - c.x, me.z - c.z) < C.ringR && Math.abs(me.y - c.y) < 11 && caught(m, 'cat', c.x, c.y, c.z)) c.T = C.afterHit
      c.forToy = false
    }
  }
}

function stepMom(m, dt) {
  const M = m.mom, me = m.me, C = CH.mom, k = Math.min(1, m.t / C.ramp)
  if (m.t < C.enter) return
  if (!M.in) { M.in = true; m.events.push({ t: 'momIn' }) }
  M.cool = Math.max(0, M.cool - dt)
  // 電話（レア）: しばらく止まって世間話
  if (m.rare.phone && M.phoneAt > 0 && m.t >= M.phoneAt) { M.phoneAt = 0; M.phoneT = 9; m.events.push({ t: 'phone' }) }
  if (M.phoneT > 0) { M.phoneT -= dt; if (M.phoneT <= 0) m.events.push({ t: 'phoneEnd' }) }
  // ゴキブリと間違える（レア）: 輪の所へスリッパが落ちる
  if (m.rare.cockroach && M.slipAt > 0 && m.t >= M.slipAt && !M.phoneT && me.y < 110) { M.slipAt = 0; M.slip = { x: me.x + me.vx * 0.4, z: me.z + me.vz * 0.4, y: surfaceBelow(m.world, me.x, me.z, me.y + 1), T: CH.slipper.warn, r: CH.slipper.R }; m.events.push({ t: 'roach' }) }
  if (M.slip) {
    M.slip.T -= dt
    if (M.slip.T <= 0) {
      const s = M.slip; M.slip = null; m.events.push({ t: 'slap', x: s.x, y: s.y, z: s.z })
      if (Math.hypot(me.x - s.x, me.z - s.z) < s.r && Math.abs(me.y - s.y) < 8) { if (caught(m, 'slipper', s.x, s.y, s.z)) M.winT = 3 }
    }
  }
  // 体: 通路を自分の方へ歩く（自分の少し手前で止まる）
  const wantZ = clamp(me.z - 55, -40, 470), v = (C.walk[0] + (C.walk[1] - C.walk[0]) * k) * (M.phoneT > 0 ? 0 : 1)
  const dz = wantZ - M.z; M.walking = Math.abs(dz) > 2 && v > 0
  if (M.walking) M.z += clamp(dz, -v * dt, v * dt)
  // 吸い口
  M.spotT = Math.max(0, M.spotT - dt); M.winT = Math.max(0, M.winT - dt)
  if (M.cool > 0 || M.phoneT > 0) M.aim = false
  const N = M.noz, hx = M.x + 22, hy = 48, hz = M.z + 30
  const reachY = m.t >= C.lateAt ? C.reachYLate : C.reachY
  if (m.t >= C.lateAt && !M.late) { M.late = true; m.events.push({ t: 'late' }) }
  let gx = hx, gy = hy, gz = hz, sp = 26
  if (M.cool <= 0 && M.phoneT <= 0) {
    const dBody = Math.hypot(me.x - M.x, me.y - 60, me.z - M.z)
    const reach = M.late ? 500 : C.reach   // 延長ホース: 部屋の端のカーテンに張り付いていても届く。隠れ続けられない
    M.aim = dBody < reach && me.y < reachY
    if (M.aim && !M.wasAim && m.t - M.spotAt > 7 && m.t > C.enter + 1.5) { M.spotAt = m.t; M.spotT = 1.5; m.events.push({ t: 'momSpot' }) }
    M.wasAim = M.aim
    if (M.aim) { gx = me.x + me.vx * 0.25; gy = me.y + 1.1 + me.vy * 0.2; gz = me.z + me.vz * 0.25 }
    else { const a = Math.atan2(me.x - M.x, me.z - M.z); gx = M.x + Math.sin(a) * C.reach * 0.75; gz = M.z + Math.cos(a) * C.reach * 0.75; gy = Math.min(reachY - 10, me.y) }
    sp = C.nozV[0] + (C.nozV[1] - C.nozV[0]) * k
  }
  const ndx = gx - N.x, ndy = gy - N.y, ndz = gz - N.z, nd = Math.hypot(ndx, ndy, ndz) || 1
  const step = Math.min(nd, sp * dt)
  N.x += ndx / nd * step; N.y += ndy / nd * step; N.z += ndz / nd * step
  const floor = surfaceBelow(m.world, N.x, N.z, N.y + 1)
  if (N.y < floor + 1.5) N.y = floor + 1.5
  N.active = M.cool <= 0 && M.phoneT <= 0
  // 吸う力
  const c0 = chest(me), dx = N.x - c0.x, dy = N.y - c0.y, dz2 = N.z - c0.z, d = Math.hypot(dx, dy, dz2) || 1
  M.dist = d
  M.sucking = false
  if (N.active && d < C.suckR && m.immune <= 0) {
    M.sucking = true
    const a = C.suckAcc * (1 - d / C.suckR) * (me.rope ? 0.55 : 1) * dt / d
    me.vx += dx * a; me.vy += dy * a; me.vz += dz2 * a
    if (me.climbing && d < 14) { me.climbing = null; m.events.push({ t: 'peeled' }) }
  }
  if (N.active && d < C.catchR && caught(m, 'vac', N.x, N.y, N.z)) { M.cool = C.cool; M.winT = C.cool; m.events.push({ t: 'momWin' }) }
}

// おかんの顔（絵の切り替えだけ。当たり判定には関係しない）
export function momFace(m) {
  const M = m.mom
  if (m.over) return m.won ? 'angry' : (m.by === 'vac' || m.by === 'slipper') ? 'win' : 'search'
  if (M.phoneT > 0) return 'phone'
  if (M.winT > 0) return 'win'
  if (M.slip) return 'angry'
  if (M.spotT > 0) return 'spot'
  if (M.sucking || (M.noz.active && M.dist < 48)) return 'angry'
  return M.aim ? 'normal' : 'search'
}
// ---------------------------------------------------------------- ネズミのおもちゃ
function kickToy(m, y, ang) {
  const a = ang ?? m.rnd() * Math.PI * 2, sp = CH.toy.kick
  y.state = 'roll'; y.vx = Math.sin(a) * sp; y.vz = Math.cos(a) * sp; y.sq = 0.45
  m.events.push({ t: 'toySqueak', x: y.x, y: y.y, z: y.z })
}
function toyBlocked(w, x, y, z) {
  const r = 2.4
  if (x < ROOM.x0 + r || x > ROOM.x1 - r || z < ROOM.z0 + r || z > ROOM.z1 - r) return true
  for (const o of w.nearby(x, z)) {
    if (o.noHit || o.oneWay || o.kind === 'bound' || o.y0 > y + 2 || o.y1 <= y + 0.5) continue
    if (Math.abs(x - o.cx) < o.hw + r && Math.abs(z - o.cz) < o.hl + r) return true
  }
  return false
}
function stepToy(m, y, dt) {
  const v = Math.hypot(y.vx, y.vz)
  const nx = y.x + y.vx * dt, nz = y.z + y.vz * dt
  if (toyBlocked(m.world, nx, y.y, y.z)) { y.vx *= -0.7; m.events.push({ t: 'toySqueak', x: y.x, y: y.y, z: y.z, soft: true }) } else y.x = nx
  if (toyBlocked(m.world, y.x, y.y, nz)) { y.vz *= -0.7; m.events.push({ t: 'toySqueak', x: y.x, y: y.y, z: y.z, soft: true }) } else y.z = nz
  const f = surfaceBelow(m.world, y.x, y.z, y.y + 0.5)
  if (y.y > f + 0.01) { y.vy -= 90 * dt; y.y += y.vy * dt; if (y.y <= f) { y.y = f; y.vy = 0; m.events.push({ t: 'toySqueak', x: y.x, y: y.y, z: y.z, soft: true }) } }
  else { y.y = f; y.vy = 0; const k = Math.exp(-CH.toy.friction * dt); y.vx *= k; y.vz *= k }
  y.spin += v * dt * 0.5
  y.sq -= dt; if (y.sq <= 0 && v > 8) { y.sq = 0.75; m.events.push({ t: 'toySqueak', x: y.x, y: y.y, z: y.z, soft: true }) }
  if (v < 3 && y.y <= f + 0.01) { y.vx = y.vz = 0; y.state = m.lureToy === y ? 'stop' : 'dead' }
}
function stepToys(m, dt) {
  const me = m.me, C = CH.toy
  if (m.lure > 0) {
    m.lure -= dt
    if (m.lure <= 0) {
      const y = m.lureToy; m.lure = 0; m.lureToy = null
      if (y) { y.state = 'dead'; y.vx = y.vz = 0 }
      m.catBored = C.bored; m.events.push({ t: 'lureEnd', ride: m.rare.catOnRoomba, box: m.rare.catBox })
    }
  }
  for (const y of m.toys) {
    if (y.state === 'roll' || (y.state === 'dead' && (y.vx || y.vz))) { stepToy(m, y, dt); continue }
    if (y.state !== 'idle') continue
    if (Math.hypot(me.x - y.x, me.z - y.z) > C.touchR || Math.abs(me.y - y.y) > C.touchY) continue
    const ang = Math.hypot(me.vx, me.vz) > 2 ? Math.atan2(me.vx, me.vz) : Math.atan2(y.x - me.x, y.z - me.z)
    if (m.rare.catBox) {   // 猫は箱から出ない。転がるだけで回数は減らない
      y.state = 'dead'; y.vx = Math.sin(ang) * C.speed; y.vz = Math.cos(ang) * C.speed; y.sq = 0.5
      m.events.push({ t: 'toyHit', id: y.id, x: y.x, y: y.y, z: y.z, left: m.toyUses, mode: 'box' }, { t: 'toySqueak', x: y.x, y: y.y, z: y.z })
      continue
    }
    if (m.lure > 0) continue   // 効いている間は触っても使わない（むだにしない）
    if (m.toyUses <= 0) { if (!m.toyEmptySaid) { m.toyEmptySaid = true; m.events.push({ t: 'toyEmpty', x: y.x, y: y.y, z: y.z }) } continue }
    m.toyUses--; m.toysUsed++; m.lure = C.lure; m.lureToy = y; m.catBored = 0
    y.state = 'roll'; y.vx = Math.sin(ang) * C.speed; y.vz = Math.cos(ang) * C.speed; y.sq = 0.5
    const c = m.cat
    if (c.state === 'crouch' || c.state === 'swipe') { c.state = 'rest'; c.T = 0.15; c.ring = null; c.to = null }
    else if (c.state === 'rest') c.T = Math.min(c.T, 0.3)
    m.events.push({ t: 'toyHit', id: y.id, x: y.x, y: y.y, z: y.z, left: m.toyUses, mode: m.rare.catOnRoomba ? 'ride' : 'cat' }, { t: 'toySqueak', x: y.x, y: y.y, z: y.z })
  }
}

export function stepRun(m, dt) {
  if (m.over) return
  m.t += dt
  const me = m.me
  m.immune = Math.max(0, m.immune - dt)
  for (const b of m.roombas) stepRoomba(m, b, dt)
  if (m.over) return
  if (m.t >= CH.roomba.second && m.roombas.length < 2) { m.roombas.push(mkRoomba(150, 40, m.t - CH.roomba.wake + 2, m.rnd)); m.events.push({ t: 'roomba2' }) }
  stepToys(m, dt)
  stepCat(m, dt); if (m.over) return
  stepMom(m, dt); if (m.over) return
  // 落ちている物
  for (const it of ITEMS) {
    if (m.items[it.id]) continue
    if (Math.hypot(me.x - it.x, me.z - it.z) < it.r && Math.abs(me.y - it.y) < 7) {
      if (it.heal && m.lives >= CH.lives) continue   // 元気な時のポテチは残しておく
      m.items[it.id] = true
      if (it.heal) m.lives = Math.min(CH.lives, m.lives + 1); else m.itemsGot.push(it.id)
      m.events.push({ t: 'item', id: it.id, heal: !!it.heal, x: it.x, y: it.y, z: it.z })
    }
  }
  // 先住の小人おじさん（レア）: 近づくと絆創膏を1枚くれる
  if (m.rare.oldMan && !m.oldSeen && Math.hypot(me.x - CH.old.x, me.z - CH.old.z) < CH.old.r && Math.abs(me.y - CH.old.y) < 6) { m.oldSeen = true; m.lives = Math.min(CH.lives, m.lives + 1); m.events.push({ t: 'oldMan' }) }
  // 案内の順番
  const w = WAYS[m.way]
  if (w && m.way < WAYS.length - 1) {
    const near = Math.hypot(me.x - w.x, me.z - w.z) < w.r && me.y > w.y - 12
    let skip = false
    for (let i = m.way + 1; i < WAYS.length - 1; i++) { const w2 = WAYS[i]; if (Math.hypot(me.x - w2.x, me.z - w2.z) < w2.r && me.y > w2.y - 12) { m.way = i; skip = true } }
    if (near || me.y > w.y + 15 && me.z > w.z) { m.way++; m.events.push({ t: 'way', i: m.way }) } else if (skip) m.events.push({ t: 'way', i: m.way })
  }
  m.best = Math.max(m.best, progressOf(m))
  // 非常口
  if (Math.hypot(me.x - GOAL.x, me.z - GOAL.z) < GOAL.r && Math.abs(me.y - GOAL.y) < 6) {
    m.over = true; m.won = true; m.best = 1; m.events.push({ t: 'end', won: true })
  }
}
// どこまで進んだか（0〜1）。スタートから非常口までの直線距離と高さ
export function progressOf(m) {
  const me = m.me
  const total = Math.hypot(GOAL.x - START.x, GOAL.z - START.z) + GOAL.y
  const left = Math.hypot(GOAL.x - me.x, GOAL.z - me.z) + Math.abs(GOAL.y - me.y)
  return clamp(1 - left / total, 0, 0.99)
}
// 判定（発表まで見せない）。0: 回収 1: あと少し 2: 脱出 3: 無傷で脱出
export function rankOf(m) {
  if (m.won) return m.catches.length === 0 ? 3 : 2
  return m.best >= 0.55 ? 1 : 0
}
export function nearestThreats(m) {
  const me = m.me, out = []
  for (const b of m.roombas) if (b.on) out.push({ k: 'roomba', x: b.x, y: 3, z: b.z, d: Math.hypot(b.x - me.x, b.z - me.z) })
  const c = m.cat; if (c.state !== 'nap' && c.state !== 'box' && c.state !== 'ride' && !(m.lure > 0)) out.push({ k: 'cat', x: c.x, y: c.y + 8, z: c.z, d: Math.hypot(c.x - me.x, c.y - me.y, c.z - me.z) })
  if (m.mom.in && m.mom.noz.active) out.push({ k: 'vac', x: m.mom.noz.x, y: m.mom.noz.y, z: m.mom.noz.z, d: m.mom.dist })
  return out
}
export { RUN }
