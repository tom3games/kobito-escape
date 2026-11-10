// 追ってくる物の見た目: ルンバ・猫・おかん（巨大）・掃除機・スリッパは切り絵。動きは shared/chase.js の状態を読むだけ
import * as THREE from 'three'
import { charAssets, skClone } from './charmodel.js?v=3'
import { canvasTex } from './house3d.js?v=3'
import { ITEMS, TOYS } from '../shared/house.js?v=3'
import { MOM_ART } from './momart.js?v=3'
import { CH } from '../shared/chase.js?v=3'
import { CHASER_ART } from './chaserart.js?v=7'

const std = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.6, ...o })
const shadow = m => { m.castShadow = true; return m }

// ---------------------------------------------------------------- 切り絵の紙（猫とルンバ。img/chaser_atlas.webp）
// カメラの方を向く紙で、見る向きと動きで絵を替える。当たり判定は shared/chase.js のままで絵には関係しない
let chaserTex = null; const chaserWait = []
function loadChaserArt(V) {
  return new Promise(ok => new THREE.TextureLoader().load(`img/chaser_atlas.webp${V}`, t => { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; chaserTex = t; for (const f of chaserWait) f(t); chaserWait.length = 0; ok() }, undefined, () => { console.warn('chaser art failed'); ok() }))
}
let blobTex = null
const getBlobTex = () => blobTex || (blobTex = canvasTex(128, 128, (x, w) => { const g = x.createRadialGradient(64, 64, 8, 64, 64, 64); g.addColorStop(0, 'rgba(30,20,10,.5)'); g.addColorStop(1, 'rgba(30,20,10,0)'); x.fillStyle = g; x.fillRect(0, 0, w, w) }))
class ChaserPaper {
  constructor(scene, stub) {
    const g = this.g = new THREE.Group(); this.tilt = new THREE.Group(); g.add(this.tilt)
    this.mat = new THREE.MeshBasicMaterial({ transparent: true, alphaTest: 0.35, side: THREE.DoubleSide, toneMapped: false, color: 0xfff6e8 })
    this.paper = new THREE.Mesh(new THREE.PlaneGeometry(1, 1).translate(0, 0.5, 0), this.mat); this.paper.castShadow = true; this.paper.frustumCulled = false; this.paper.visible = false; this.tilt.add(this.paper)
    this.stub = stub; g.add(stub)   // 絵が届くまでの代わり（見えない敵にしない）
    this.blob = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: getBlobTex(), transparent: true, depthWrite: false })); this.blob.rotation.x = -Math.PI / 2; this.blob.renderOrder = 1; scene.add(this.blob)
    this.key = null; this.view = 'side'; this.side = 1; this.sx = 1; this.t = 0; this.pop = 0
    const set = t => { this.mat.map = t; this.mat.needsUpdate = true; this.paper.visible = true; stub.visible = false }
    if (chaserTex) set(chaserTex); else chaserWait.push(set)
    g.visible = false; scene.add(g)
  }
  setPose(k) {
    if (k === this.key) return
    this.key = k; this.pop = 1
    const A = CHASER_ART, p = A.poses[k], uv = this.paper.geometry.attributes.uv, u0 = p.x / A.W, u1 = (p.x + p.w) / A.W, v1 = 1 - p.y / A.H, v0 = 1 - (p.y + p.h) / A.H
    uv.setXY(0, u0, v1); uv.setXY(1, u1, v1); uv.setXY(2, u0, v0); uv.setXY(3, u1, v0); uv.needsUpdate = true
  }
  // 体の向き yaw とカメラの関係（back / side / front）を決める。境目でちらつかないよう幅を持たせる
  face(x, y, z, yaw, camera) {
    const cx = camera ? camera.position.x : x, cy = camera ? camera.position.y : y + 30, cz = camera ? camera.position.z : z + 60
    const b = Math.atan2(cx - x, cz - z); this.g.rotation.y = b
    this.tilt.rotation.x = -Math.max(-0.5, Math.min(1.2, Math.atan2(cy - (y + 8), Math.hypot(cx - x, cz - z)))) * 0.6
    const fx = Math.sin(yaw), fz = Math.cos(yaw), d = fx * Math.sin(b) + fz * Math.cos(b), r = fx * Math.cos(b) - fz * Math.sin(b)
    if (this.view === 'back' ? d > -0.3 : this.view === 'front' ? d < 0.3 : Math.abs(d) > 0.58) this.view = d < -0.45 ? 'back' : d > 0.45 ? 'front' : 'side'
    if (Math.abs(r) > 0.12) this.side = r > 0 ? 1 : -1
  }
  draw(k, flip, dt, { k2 = 1, bob = 0, rot = 0, shakeX = 0, snap = false } = {}) {
    this.setPose(k); this.pop = Math.max(0, this.pop - dt * 7)
    this.sx = snap ? flip : this.sx + (flip - this.sx) * Math.min(1, dt * 16)
    const p = CHASER_ART.poses[k], P = this.paper, sx = Math.abs(this.sx) < 0.05 ? 0.05 * (flip || 1) : this.sx, q = 1 + this.pop * 0.06
    P.scale.set(p.uw * k2 * sx * (2 - q), p.uh * k2 * q, 1); P.position.set(shakeX, bob, 0); P.rotation.z = rot
  }
}

// ---------------------------------------------------------------- ルンバ
// おかんが目玉シールを貼っている（追う時は目が暴れて赤く光る）
export class Roomba3d extends ChaserPaper {
  constructor(scene) {
    const R = CH.roomba.R, stub = new THREE.Mesh(new THREE.CylinderGeometry(R * 0.97, R, 5.6, 28).translate(0, 3.6, 0), std(0x24262b, { roughness: 0.3 })); stub.castShadow = true
    super(scene, stub)
    this.blob.scale.set(R * 2.5, R * 2.2, 1)
  }
  update(b, dt, me, camera) {
    const g = this.g; g.visible = this.blob.visible = true; this.t += dt
    g.position.set(b.x, 0, b.z); this.blob.position.set(b.x, 0.09, b.z); this.face(b.x, 0, b.z, b.yaw, camera)
    const ch = b.chase ? '_chase' : '', base = this.view === 'side' ? 'rom_side' : this.view === 'front' ? 'rom_front' : 'rom_back'
    // 正面と後ろは小刻みに裏返してブラシと目を動かす
    const tick = Math.floor(this.t * (b.chase ? 9 : 4)) % 2 ? 1 : -1, flip = this.view === 'side' ? this.side : tick
    this.draw(base + ch, flip, dt, { snap: this.view !== 'side', k2: 1, bob: b.chase ? Math.abs(Math.sin(this.t * 30)) * 0.25 : 0, rot: b.chase ? Math.sin(this.t * 22) * 0.012 : 0 })
  }
}

// ---------------------------------------------------------------- 猫（トラ猫）
export class Cat3d extends ChaserPaper {
  constructor(scene) {
    const stub = new THREE.Mesh(new THREE.CapsuleGeometry(10, 12, 4, 12).translate(0, 18, 0), std(0xd98a3d, { roughness: 1 })); stub.castShadow = true
    super(scene, stub)
    this.blob.scale.set(46, 34, 1)
    // 着地の輪
    this.ring = new THREE.Mesh(new THREE.RingGeometry(0.82, 1, 44), new THREE.MeshBasicMaterial({ color: 0xff5f3a, transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthWrite: false, fog: false })); this.ring.rotation.x = -Math.PI / 2; this.ring.renderOrder = 4; this.ring.visible = false; scene.add(this.ring)
    this.fill = new THREE.Mesh(new THREE.CircleGeometry(1, 44), new THREE.MeshBasicMaterial({ color: 0xff5f3a, transparent: true, opacity: 0.22, side: THREE.DoubleSide, depthWrite: false, fog: false })); this.fill.rotation.x = -Math.PI / 2; this.fill.renderOrder = 4; this.fill.visible = false; scene.add(this.fill)
  }
  update(c, dt, me, camera) {
    const g = this.g; this.t += dt; const T = this.t, st = c.state; g.visible = true
    g.position.set(c.x, c.y, c.z)
    this.face(c.x, c.y, c.z, c.yaw, camera)
    const V = this.view, sd = this.side
    let k, flip = 1, o = {}
    if (st === 'nap') { k = 'cat_nap'; flip = sd; o.k2 = 1 + Math.sin(T * 1.6) * 0.012 }
    else if (st === 'box') k = 'cat_box'
    else if (st === 'ride') { k = 'cat_loaf'; o.k2 = 0.7; o.bob = 3.5 }
    else if (st === 'crouch') {   // おしりを振る。これが飛ぶ合図
      k = V === 'side' ? 'cat_side_crouch' : V === 'front' ? 'cat_front_crouch' : 'cat_back_crouch'; flip = V === 'side' ? sd : 1
      o.shakeX = Math.sin(T * 17) * 1.3; o.rot = Math.sin(T * 17) * 0.05
    }
    else if (st === 'leap') { k = V === 'front' ? 'cat_front_leap' : 'cat_side_leap'; flip = V === 'front' ? 1 : sd }   // 後ろから見ても横の絵で飛ぶ姿を見せる
    else if (st === 'swipe') { k = 'cat_side_swipe'; flip = V === 'side' ? sd : (me && me.x !== undefined && ((me.x - c.x) * Math.cos(g.rotation.y) - (me.z - c.z) * Math.sin(g.rotation.y)) < 0 ? -1 : 1); o.rot = Math.sin(T * 26) * 0.06 * flip }
    else { k = V === 'side' ? 'cat_side_rest' : V === 'front' ? 'cat_front_rest' : 'cat_back_rest'; flip = V === 'side' ? sd : 1; o.rot = Math.sin(T * 1.4) * 0.012 }
    // ルンバに乗る時はルンバより手前に出して重ならないようにする
    if (st === 'ride') { const b = g.rotation.y; g.position.x += Math.sin(b) * 1.5; g.position.z += Math.cos(b) * 1.5 }
    this.draw(k, flip, dt, o)
    this.blob.visible = st !== 'leap' && st !== 'ride' && c.y < 1; if (this.blob.visible) this.blob.position.set(c.x, c.y + 0.09, c.z)
    // 輪
    const R = c.ring
    this.ring.visible = this.fill.visible = !!R
    if (R) {
      const pulse = 1 + Math.sin(T * 14) * 0.03
      this.ring.position.set(R.x, R.y + 0.6, R.z); this.ring.scale.setScalar(R.r * pulse)
      this.fill.position.set(R.x, R.y + 0.55, R.z); this.fill.scale.setScalar(R.r)
    }
  }
}

// ---------------------------------------------------------------- おかんと掃除機
// おかん本体は切り絵（img/mom_*.webp）。カメラの方へ縦軸だけ回す板。掃除機の本体と吸い口は別の切り絵
// 当たり判定は shared/chase.js の吸い口だけを見るので、絵を替えても届く範囲は変わらない
const V = new URL(import.meta.url).search
const momTex = {}
export const momArt = { done: false, loaded: 0, failed: 0, faces: {}, big: {} }
export function loadMomArt() {
  const loader = new THREE.TextureLoader(), keys = Object.keys(MOM_ART.poses)
  const one = k => new Promise(ok => loader.load(`img/mom_${k}.webp${V}`, t => { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; momTex[k] = t; momArt.loaded++; ok() }, undefined, () => { momArt.failed++; ok() }))
  // 顔の切り抜き（カットインと紙）
  const face = k => new Promise(ok => { const im = new Image(); im.onload = () => { momArt.faces[k] = im; ok() }; im.onerror = () => ok(); im.src = `img/face_${k}.webp${V}` })
  // 結果の前の大写し。起動を待たせない（間に合わなければ小さい方を使う）
  const big = k => { const im = new Image(); im.onload = () => { momArt.big[k] = im; if (im.decode) im.decode().catch(() => {}) }; im.src = `img/big_${k}.webp${V}` }
  return Promise.all([loadChaserArt(V), ...keys.flatMap(k => [one(k), face(k)])]).then(() => { momArt.done = true; for (const k of ['win', 'spot', 'phone', 'angry']) big(k) })
}
export class Mom3d {
  constructor(scene) {
    this.scene = scene; this.g = new THREE.Group(); this.g.visible = false; scene.add(this.g)
    this.t = 0; this.key = null; this.flip = 1; this.sx = 1; this.pop = 0
    // 切り絵の板: 足元が原点。光を計算しない（イラストのまま見せる）
    const mat = this.mat = new THREE.MeshBasicMaterial({ transparent: true, alphaTest: 0.35, side: THREE.DoubleSide, toneMapped: false, color: 0xfff6e8 })
    const paper = this.paper = new THREE.Mesh(new THREE.PlaneGeometry(1, 1).translate(0, 0.5, 0), mat); paper.castShadow = true; paper.visible = false; this.g.add(paper)
    // 絵が読めなかった時の代わり（遊べなくしない）
    this.stub = new THREE.Mesh(new THREE.CapsuleGeometry(28, 72, 4, 12).translate(0, 64, 0), std(0xb56a7c, { roughness: 1 })); this.stub.visible = false; this.g.add(this.stub)
    // 足元の影
    { const t = canvasTex(128, 128, (x, w) => { const g = x.createRadialGradient(64, 64, 8, 64, 64, 64); g.addColorStop(0, 'rgba(30,20,10,.5)'); g.addColorStop(1, 'rgba(30,20,10,0)'); x.fillStyle = g; x.fillRect(0, 0, w, w) }); this.blob = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false })); this.blob.rotation.x = -Math.PI / 2; this.blob.scale.set(100, 62, 1); this.blob.visible = false; this.blob.renderOrder = 1; scene.add(this.blob) }
    // 掃除機の本体と吸い口も切り絵（ChaserPaper）。絵が届くまでは仮の形
    { const st = new THREE.Mesh(new THREE.SphereGeometry(15, 20, 12).scale(1.05, 0.72, 1.2).translate(0, 13, 0), std(0xb5362b, { roughness: 0.4 })); st.castShadow = true; this.canP = new ChaserPaper(scene, st); this.canP.blob.scale.set(46, 32, 1); this.can = this.canP.g }
    { const st = new THREE.Mesh(new THREE.BoxGeometry(22, 4.4, 9).translate(0, 2.2, 0), std(0x2b2d31, { roughness: 0.4 })); st.castShadow = true; this.nozP = new ChaserPaper(scene, st); this.nozP.blob.scale.set(30, 16, 1); this.noz = this.nozP.g }
    // ホース: カメラの方を向く帯を3枚重ねる（紙の白い縁、黒い線、じゃばら）。線がなめらかにつながって切り絵に見える
    this.segN = 36; this.path = Array.from({ length: this.segN + 1 }, () => new THREE.Vector3())
    this.hose = new THREE.Group(); this.hose.visible = false; scene.add(this.hose)
    const strip = (color, vc) => {
      const g = new THREE.BufferGeometry(), n = this.segN * 4, idx = []
      for (let i = 0; i < this.segN; i++) { const a = i * 4; idx.push(a, a + 1, a + 2, a + 2, a + 1, a + 3) }
      g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3)); g.setIndex(idx)
      if (vc) { const col = new Float32Array(n * 3), c1 = new THREE.Color(0xb7babc), c2 = new THREE.Color(0x777b80); for (let i = 0; i < this.segN; i++) { const c = i % 2 ? c1 : c2; for (let k = 0; k < 4; k++) c.toArray(col, (i * 4 + k) * 3) } g.setAttribute('color', new THREE.BufferAttribute(col, 3)) }
      const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color, vertexColors: !!vc, side: THREE.DoubleSide, toneMapped: false })); m.frustumCulled = false; this.hose.add(m); return m
    }
    this.strips = [[strip(0xfffdf6), 3.7, 0], [strip(0x15130f), 3.0, 0.06], [strip(0xffffff, true), 2.3, 0.12]]
    this._sock = new THREE.Vector3(); this.neck = new THREE.Vector3()
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._a = new THREE.Vector3(); this._b = new THREE.Vector3(); this._c = new THREE.Vector3(); this._d = new THREE.Vector3(); this._h = new THREE.Vector3(); this._e = new THREE.Vector3(); this._s = new THREE.Vector3(); this._p = new THREE.Vector3(); this._t1 = new THREE.Vector3(); this._t2 = new THREE.Vector3(); this._up = new THREE.Vector3(0, 1, 0)
  }
  setPose(k) {
    if (k === this.key) return
    const tx = momTex[k]; if (!tx) { if (!this.key) this.stub.visible = true; return }   // 絵がまだ読めていない間も姿は見せる（見えない掃除機にしない）
    this.key = k; this.mat.map = tx; this.mat.needsUpdate = true; this.paper.visible = true; this.stub.visible = false; this.pop = 1
  }
  update(M, dt, camera, face) {
    this.t += dt
    if (!M.in) { this.g.visible = false; this.can.visible = this.noz.visible = this.hose.visible = this.blob.visible = this.canP.blob.visible = this.nozP.blob.visible = false; return }
    this.g.visible = true; this.can.visible = this.noz.visible = this.hose.visible = this.blob.visible = this.canP.blob.visible = this.nozP.blob.visible = true
    this.setPose(face)
    this.g.position.set(M.x, 0, M.z); this.blob.position.set(M.x, 0.08, M.z)
    // 板はカメラの方を向く（縦軸だけ）
    const yaw = Math.atan2(camera.position.x - M.x, camera.position.z - M.z); this.g.rotation.y = yaw
    // パイプは絵の右手。吸い口が反対側へ回ったら紙を裏返す
    const N = M.noz, side = (N.x - M.x) * Math.cos(yaw) - (N.z - M.z) * Math.sin(yaw)
    if (side * this.flip < -14) this.flip = -this.flip
    this.sx += (this.flip - this.sx) * Math.min(1, dt * 12)
    const pose = MOM_ART.poses[this.key] || MOM_ART.poses.normal, P = this.paper, T = this.t
    this.pop = Math.max(0, this.pop - dt * 5)
    const hop = M.walking ? Math.abs(Math.sin(T * 4.2)) * 2.6 : 0
    const rock = face === 'phone' ? Math.sin(T * 3) * 0.05 : face === 'win' ? Math.sin(T * 9) * 0.03 : M.walking ? Math.sin(T * 4.2) * 0.035 : Math.sin(T * 1.3) * 0.012
    const shake = face === 'angry' ? Math.sin(T * 47) * 0.5 : 0
    P.position.set(shake, hop, 0); P.rotation.z = rock
    P.scale.set(pose.w * (Math.abs(this.sx) < 0.04 ? 0.04 * this.flip : this.sx), pose.h * (1 + this.pop * 0.07), 1)
    // 本体
    const ca = this.can, CP = this.canP; const cx = M.x - 26, cz = M.z - 22
    ca.position.x += (cx - ca.position.x) * Math.min(1, dt * 2); ca.position.z += (cz - ca.position.z) * Math.min(1, dt * 2)
    CP.face(ca.position.x, 0, ca.position.z, Math.atan2(M.x - ca.position.x, M.z - ca.position.z), camera)
    const cv = CP.view; CP.draw('can_' + cv, cv === 'side' ? CP.side : 1, dt, { rot: Math.sin(T * 5) * 0.01 })
    CP.blob.position.set(ca.position.x, 0.08, ca.position.z)
    // 吸い口: 自分へ向かう。絵の下端を吸い口の底に合わせる
    const nz = this.noz, NP = this.nozP, lk = this._look
    nz.position.set(N.x, N.y - 2.2, N.z)
    NP.face(N.x, N.y, N.z, lk ? Math.atan2(lk.x - N.x, lk.z - N.z) : Math.atan2(camera.position.x - N.x, camera.position.z - N.z), camera)
    const nv = NP.view; NP.draw('noz_' + nv, nv === 'side' ? NP.side : 1, dt, { shakeX: N.active ? Math.sin(T * 34) * 0.2 : 0, rot: N.active ? Math.sin(T * 41) * 0.015 : 0 })
    NP.blob.position.set(N.x, 0.09, N.z); NP.blob.visible = N.y < 40
    // ホース: 手の位置は板の行列から取る（揺れ・裏返しも一緒に動く）
    this.g.updateMatrixWorld(true); ca.updateMatrixWorld(true); nz.updateMatrixWorld(true)
    const H = this._h.set(pose.hand[0] - 0.5, pose.hand[1], 0).applyMatrix4(P.matrixWorld)
    H.x += Math.sin(yaw) * 1.5; H.z += Math.cos(yaw) * 1.5   // 紙より少し手前
    // 本体の口と吸い口の首は絵の中の位置（0〜1。下から）
    const SOCK = { front: [0.5, 0.28], side: [0.97, 0.34], back: [0.5, 0.3] }[cv], NECK = { front: [0.5, 0.97], side: [0.09, 0.97], back: [0.5, 0.97] }[nv]
    this._sock.set(SOCK[0] - 0.5, SOCK[1], 0).applyMatrix4(CP.paper.matrixWorld); this.neck.set(NECK[0] - 0.5, NECK[1], 0).applyMatrix4(NP.paper.matrixWorld)
    const a = this._a.copy(this._sock), c = this._c.copy(this.neck)
    const bA = this._b.set((a.x + H.x) / 2, Math.min(a.y, H.y) * 0.4, (a.z + H.z) / 2)
    // パイプの向きに出てから吸い口へ曲がる
    const pipe = H.distanceTo(c) * 0.3, rx = Math.cos(yaw) * this.sx, rz = -Math.sin(yaw) * this.sx
    // 手のパイプの向きに出てから、吸い口の首へは上から入る
    const ox = H.x + rx * pipe * 0.72, oz = H.z + rz * pipe * 0.72
    const bC = this._e.set(c.x + (ox - c.x) * 0.6, c.y + Math.max(3, pipe * 0.18), c.z + (oz - c.z) * 0.6)
    const n1 = 14, Q = (p0, p1, p2, u, out) => { const v = 1 - u; return out.set(v * v * p0.x + 2 * v * u * p1.x + u * u * p2.x, v * v * p0.y + 2 * v * u * p1.y + u * u * p2.y, v * v * p0.z + 2 * v * u * p1.z + u * u * p2.z) }
    const pts = this.path; Q(a, bA, H, 0, pts[0])
    for (let i = 1; i <= this.segN; i++) { if (i <= n1) Q(a, bA, H, i / n1, pts[i]); else Q(H, bC, c, (i - n1) / (this.segN - n1), pts[i]) }
    // 帯: 各点で「進む向き × カメラへの向き」を幅の向きにする
    const cam = camera.position, wv = this._s, tan = this._d, toC = this._t1, o = this._t2
    for (const [mesh, hw, lift] of this.strips) {
      const pa = mesh.geometry.attributes.position, A = pa.array
      const put = (pi, vi) => {
        const P0 = pts[pi]; tan.subVectors(pts[Math.min(this.segN, pi + 1)], pts[Math.max(0, pi - 1)]); toC.subVectors(cam, P0).normalize()
        wv.crossVectors(tan, toC); const l = wv.length() || 1; wv.multiplyScalar(hw / l); o.copy(P0).addScaledVector(toC, lift)
        A[vi * 3] = o.x + wv.x; A[vi * 3 + 1] = o.y + wv.y; A[vi * 3 + 2] = o.z + wv.z
        A[(vi + 1) * 3] = o.x - wv.x; A[(vi + 1) * 3 + 1] = o.y - wv.y; A[(vi + 1) * 3 + 2] = o.z - wv.z
      }
      for (let i = 0; i < this.segN; i++) { put(i, i * 4); put(i + 1, i * 4 + 2) }
      pa.needsUpdate = true
    }
  }
  lookNoz(x, y, z) { this._look = this._look || new THREE.Vector3(); this._look.set(x, y, z) }
}

// ---------------------------------------------------------------- ネズミのおもちゃ（ゼンマイつき）
// 頂点色で1つの形にまとめる（1匹1描画）
function mouseGeo() {
  const parts = [], add = (g, col) => { const c = new THREE.Color(col), n = g.attributes.position.count, a = new Float32Array(n * 3); for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b } g.setAttribute('color', new THREE.BufferAttribute(a, 3)); parts.push(g.index ? g.toNonIndexed() : g) }
  add(new THREE.SphereGeometry(1, 16, 10).scale(2.3, 2, 3.8).translate(0, 2.1, 0), 0x8c8f96)
  add(new THREE.ConeGeometry(1.5, 3, 12).rotateX(Math.PI / 2).translate(0, 1.9, 4.5), 0x9b9ea5)
  add(new THREE.SphereGeometry(0.5, 8, 6).translate(0, 1.9, 6), 0xe58a9a)
  for (const s of [-1, 1]) {
    add(new THREE.SphereGeometry(1.25, 10, 8).scale(1, 1, 0.3).translate(s * 1.4, 3.9, 2.5), 0xe9a3af)
    add(new THREE.SphereGeometry(0.34, 8, 6).translate(s * 0.75, 2.7, 4.5), 0x101010)
  }
  // ゼンマイの鍵
  add(new THREE.CylinderGeometry(0.22, 0.22, 1.6, 6).translate(0, 4.6, -1), 0xc9b458)
  add(new THREE.TorusGeometry(0.7, 0.2, 6, 12).translate(0, 5.8, -1), 0xc9b458)
  // しっぽ（赤いひも）
  { const cu = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 2, -3.6), new THREE.Vector3(0.8, 1, -5.6), new THREE.Vector3(-0.8, 0.4, -7.6), new THREE.Vector3(0.6, 0.3, -9.4)]); add(new THREE.TubeGeometry(cu, 12, 0.22, 5), 0xc33a2f) }
  let n = 0; for (const g of parts) n += g.attributes.position.count
  const pos = new Float32Array(n * 3), nor = new Float32Array(n * 3), col = new Float32Array(n * 3); let o = 0
  for (const g of parts) { pos.set(g.attributes.position.array, o * 3); nor.set(g.attributes.normal.array, o * 3); col.set(g.attributes.color.array, o * 3); o += g.attributes.position.count }
  const out = new THREE.BufferGeometry(); out.setAttribute('position', new THREE.BufferAttribute(pos, 3)); out.setAttribute('normal', new THREE.BufferAttribute(nor, 3)); out.setAttribute('color', new THREE.BufferAttribute(col, 3))
  return out
}
export class Toys3d {
  constructor(scene) {
    const geo = mouseGeo()
    this.mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92 })
    this.matOff = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, color: 0x6d6a66 })
    this.items = TOYS.map(() => { const g = new THREE.Group(), m = shadow(new THREE.Mesh(geo, this.mat)); g.add(m); const sp = new THREE.Sprite(sparkleMat()); sp.position.y = 8; sp.scale.setScalar(10); g.add(sp); scene.add(g); return { g, m, sp } })
    this.t = 0
  }
  update(run, dt) {
    this.t += dt
    run.toys.forEach((y, i) => {
      const o = this.items[i]; o.g.position.set(y.x, y.y, y.z)
      const usable = y.state === 'idle' && run.toyUses > 0
      o.sp.visible = usable
      o.m.material = y.state === 'idle' && !usable ? this.matOff : this.mat
      if (y.state === 'idle') { o.m.rotation.set(0, i * 1.9 + Math.sin(this.t * 2 + i) * 0.1, usable ? Math.sin(this.t * 13 + i) * 0.03 : 0); o.m.position.y = 0 }
      else if (y.state === 'dead' && !(y.vx || y.vz)) { o.m.rotation.set(0, i * 1.9, 1.55); o.m.position.y = 2 }   // 伸びている
      else { if (Math.hypot(y.vx, y.vz) > 1) o.m.rotation.y = Math.atan2(y.vx, y.vz); o.m.rotation.x = y.spin; o.m.rotation.z = Math.sin(y.spin * 0.7) * 0.5; o.m.position.y = 2.2 + Math.abs(Math.sin(y.spin * 1.3)) * 1.2 }
    })
  }
}

// ---------------------------------------------------------------- スリッパ（レア）
export class Slipper3d extends ChaserPaper {
  constructor(scene) {
    const st = new THREE.Mesh(new THREE.SphereGeometry(1, 14, 8).scale(11, 1.6, 24).translate(0, 2, 0), std(0xd4737e, { roughness: 1 })); st.castShadow = true
    super(scene, st)
    this.blob.visible = false
    this.ring = new THREE.Mesh(new THREE.RingGeometry(0.82, 1, 40), new THREE.MeshBasicMaterial({ color: 0xff5f3a, transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthWrite: false, fog: false })); this.ring.rotation.x = -Math.PI / 2; this.ring.visible = false; scene.add(this.ring)
    this.after = 0
  }
  update(s, dt, camera) {
    if (s) {
      this.g.visible = true; this.ring.visible = true; this.ring.position.set(s.x, s.y + 0.6, s.z); this.ring.scale.setScalar(s.r)
      const k = Math.max(0, s.T / CH.slipper.warn), y = s.y + 1 + 150 * k * k; this.g.position.set(s.x, y, s.z); this.face(s.x, y, s.z, 0, camera)
      const above = camera && camera.position.y < y - 8
      // 頭上から足の裏が迫る。近づくと回りながら横になり、落ちたら床で平たく
      this.draw(k < 0.02 ? 'slip_side' : above && k > 0.12 ? 'slip_sole' : 'slip_tilt', 1, dt, { snap: true, rot: k * 5, bob: k < 0.02 ? 0 : -8 })
      const sz = s.r * 2 * (1 - k * 0.6); this.blob.visible = true; this.blob.position.set(s.x, s.y + 0.5, s.z); this.blob.scale.set(sz, sz, 1)
      this.after = 1.1
    } else {
      this.ring.visible = false; this.blob.visible = false
      if (this.after > 0) { this.after -= dt; if (this.after <= 0) this.g.visible = false }
    }
  }
}

// ---------------------------------------------------------------- 落ちている物
export function buildItems(scene) {
  const out = {}
  const lab = (w, h, draw) => new THREE.MeshStandardMaterial({ map: canvasTex(w, h, draw), roughness: 0.5 })
  for (const it of ITEMS) {
    const g = new THREE.Group(); g.position.set(it.x, it.y, it.z)
    if (it.id === 'coin') {
      const m = shadow(new THREE.Mesh(new THREE.CylinderGeometry(10, 10, 1.4, 34), [std(0xa9a48e, { metalness: 0.85, roughness: 0.35 }), lab(256, 256, (x, w, h) => { x.fillStyle = '#c9c4ab'; x.fillRect(0, 0, w, h); x.strokeStyle = '#7f7a64'; x.lineWidth = 10; x.beginPath(); x.arc(128, 128, 112, 0, 7); x.stroke(); x.fillStyle = '#6d6853'; x.font = 'bold 84px "BIZ UDPGothic",sans-serif'; x.textAlign = 'center'; x.fillText('500', 128, 156) }), std(0xa9a48e)]))
      m.position.y = 0.8; g.add(m)
    } else if (it.id === 'glasses') {
      const fm = std(0x7a4a22, { roughness: 0.3 }), lm = new THREE.MeshStandardMaterial({ color: 0xcfe5ee, transparent: true, opacity: 0.4, roughness: 0.05, metalness: 0.3 })
      for (const s of [-1, 1]) { const r = shadow(new THREE.Mesh(new THREE.TorusGeometry(4, 0.42, 8, 24), fm)); r.position.set(s * 5, 4, 0); g.add(r); const l = new THREE.Mesh(new THREE.CircleGeometry(3.8, 22), lm); l.position.set(s * 5, 4, 0); g.add(l); const t = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 11, 6).rotateX(Math.PI / 2), fm)); t.position.set(s * 9, 4.2, -5.4); g.add(t) }
      const br = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.34, 6, 10, Math.PI), fm); br.position.set(0, 4.3, 0); g.add(br)
    } else if (it.id === 'hesokuri') {
      const env = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.5, 12, 22), lab(256, 128, (x, w, h) => { x.fillStyle = '#c8a877'; x.fillRect(0, 0, w, h); x.fillStyle = '#2b1d10'; x.font = 'bold 48px "Klee One",serif'; x.textAlign = 'center'; x.fillText('ヘソクリ', w / 2, 62); x.font = 'bold 22px "Klee One",serif'; x.fillText('見るな 父', w / 2, 100) })))
      env.position.set(0, 6, 0); env.rotation.z = -0.12; g.add(env)
    } else if (it.id === 'dvd') {
      const c = shadow(new THREE.Mesh(new THREE.BoxGeometry(14, 20, 2), lab(180, 256, (x, w, h) => { x.fillStyle = '#16161b'; x.fillRect(0, 0, w, h); x.fillStyle = '#fff'; x.fillRect(12, 20, w - 24, 92); x.fillStyle = '#111'; x.font = 'bold 24px "BIZ UDPGothic",sans-serif'; x.textAlign = 'center'; x.fillText('確定申告', w / 2, 58); x.fillText('2014', w / 2, 92); x.fillStyle = '#f2d24b'; x.font = 'bold 18px "Klee One",serif'; x.fillText('※家族は', w / 2, 160); x.fillText('再生しないこと', w / 2, 188) })))
      c.position.set(0, 10, 0); c.rotation.y = -Math.PI / 2 + 0.25; g.add(c)
    } else if (it.id === 'ring') {
      const r = shadow(new THREE.Mesh(new THREE.TorusGeometry(5.6, 0.85, 10, 32), std(0xd5a944, { metalness: 0.92, roughness: 0.16 }))); r.position.y = 5.8; g.add(r)
    } else if (it.id === 'chip') {
      const geo = new THREE.SphereGeometry(10, 18, 10).scale(1, 0.1, 0.75), p = geo.attributes.position
      for (let i = 0; i < p.count; i++) p.setY(i, p.getY(i) + Math.sin(p.getX(i) * 0.3) * 1.3 + Math.cos(p.getZ(i) * 0.4) * 1.1)
      geo.computeVertexNormals()
      const c = shadow(new THREE.Mesh(geo, std(0xe3b64c, { roughness: 0.6 }))); c.position.y = 3.2; c.rotation.z = 0.15; g.add(c)
    }
    // ありかを知らせるきらめき
    const sp = new THREE.Sprite(sparkleMat()); sp.position.y = 11; sp.scale.setScalar(9); g.add(sp); g.userData.sp = sp
    scene.add(g); out[it.id] = g
  }
  return out
}
let _spm = null
function sparkleMat() {
  if (_spm) return _spm
  const t = canvasTex(64, 64, (x, w, h) => { const g = x.createRadialGradient(32, 32, 1, 32, 32, 32); g.addColorStop(0, 'rgba(255,250,210,1)'); g.addColorStop(0.2, 'rgba(255,235,150,.65)'); g.addColorStop(1, 'rgba(255,235,150,0)'); x.fillStyle = g; x.fillRect(0, 0, w, h); x.fillStyle = 'rgba(255,255,240,.95)'; x.fillRect(31, 2, 2, 60); x.fillRect(2, 31, 60, 2) })
  _spm = new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false, depthTest: true })
  return _spm
}
// 先住の小人おじさん（レア）
export function buildOldMan(scene) {
  const g = new THREE.Group(); g.visible = false; scene.add(g)
  let mixer = null, built = false
  return {
    g,
    update(dt) {
      if (!built && charAssets.ready && charAssets.kenney['male-f']) {
        built = true
        const k = charAssets.kenney['male-f'], ch = skClone(k.scene), b = new THREE.Box3().setFromObject(ch), s = 1.8 / (b.max.y - b.min.y)
        ch.scale.setScalar(s); ch.position.y = -b.min.y * s; g.add(ch)
        mixer = new THREE.AnimationMixer(ch); const a = k.clips.find(c => c.name === 'emote-yes') || k.clips[0]; mixer.clipAction(a).play()
      }
      if (mixer) mixer.update(dt)
    }
  }
}
