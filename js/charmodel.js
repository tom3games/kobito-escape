// 人物の見た目
// 自分: 画像生成の切り絵（img/hero_atlas.webp）。カメラの方を向く紙で、見る向きと動きで絵を替える。当たり判定は shared/ のままで絵には関係しない
// 先住のおじさん: Kenney Mini Characters（CC0）。最初の画面に要らないので裏で読む
import * as THREE from 'three'
import { GLTFLoader } from '../vendor/jsm/loaders/GLTFLoader.js?v=3'
import { clone as skClone } from '../vendor/jsm/utils/SkeletonUtils.js?v=3'
import { HERO_ART } from './heroart.js?v=6'

const BASE = 'assets/chars/'
const V = new URL(import.meta.url).search
const A = { ready: false, failed: false, tex: null, kenney: {} }
const KENNEY = ['male-f']
export const charAssets = A

export function loadCharAssets() {
  if (A.loading) return A.loading
  A.loading = new Promise(ok => new THREE.TextureLoader().load(`img/hero_atlas.webp${V}`, t => {
    t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; A.tex = t; A.ready = true; ok(A)
  }, undefined, e => { A.failed = true; console.warn('hero load failed', e); ok(A) }))
  return A.loading
}
export function loadKenney() {
  if (A.kenneyLoading) return A.kenneyLoading
  const L = new GLTFLoader()
  A.kenneyLoading = Promise.all(KENNEY.map(n => new Promise((ok, ng) => L.load(`${BASE}character-${n}.glb`, ok, undefined, ng))))
    .then(ks => ks.forEach((c, i) => { A.kenney[KENNEY[i]] = { scene: c.scene, clips: c.animations }; c.scene.traverse(o => { if (o.isMesh) { o.castShadow = true; o.frustumCulled = false } }) }))
    .catch(e => console.warn('kenney load failed', e))
  return A.kenneyLoading
}

const H = 1.9, HIP = 0.85
const ART = HERO_ART, HAND = ART.hand, PS = ART.poses
const clamp = (v, a, b) => Math.max(a, Math.min(b, v))
let blobTex = null
function blobMat() {
  if (!blobTex) { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'), g = x.createRadialGradient(32, 32, 4, 32, 32, 32); g.addColorStop(0, 'rgba(30,20,10,.55)'); g.addColorStop(1, 'rgba(30,20,10,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); blobTex = new THREE.CanvasTexture(c) }
  return new THREE.MeshBasicMaterial({ map: blobTex, transparent: true, depthWrite: false })
}

export class CharRunnerModel {
  constructor() {
    this.group = new THREE.Group()
    this.tilt = new THREE.Group(); this.group.add(this.tilt)     // 上から見る時に紙を少し寝かせる（足元が軸）
    this.pivot = new THREE.Group(); this.pivot.position.y = HIP; this.tilt.add(this.pivot)   // 腰を軸に傾ける
    const geo = new THREE.PlaneGeometry(1, 1).translate(0, 0.5, 0)
    this.mat = new THREE.MeshBasicMaterial({ map: A.tex, transparent: true, alphaTest: 0.35, side: THREE.DoubleSide, toneMapped: false, color: 0xfff6e8 })
    const paper = this.paper = new THREE.Mesh(geo, this.mat); paper.position.y = -HIP; paper.castShadow = true; paper.frustumCulled = false; this.pivot.add(paper)
    this.blob = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.1), blobMat()); this.blob.rotation.x = -Math.PI / 2; this.blob.position.y = 0.03; this.blob.renderOrder = 1; this.group.add(this.blob)
    this.handWorld = new THREE.Vector3(); this._h = new THREE.Vector3()
    this.key = null; this.view = 'back'; this.side = 1; this.flip = 1; this.sx = 1; this.phase = 0; this.pop = 0; this.rot = 0; this.state = 'idle'; this.t = 0
    this.setPose('back_stand')
  }
  setPose(k) {
    if (k === this.key) return
    this.key = k
    const p = PS[k], uv = this.paper.geometry.attributes.uv, u0 = p.x / ART.W, u1 = (p.x + p.w) / ART.W, v1 = 1 - p.y / ART.H, v0 = 1 - (p.y + p.h) / ART.H
    uv.setXY(0, u0, v1); uv.setXY(1, u1, v1); uv.setXY(2, u0, v0); uv.setXY(3, u1, v0); uv.needsUpdate = true
  }
  update(s, dt, camera) {
    const g = this.group; this.t += dt
    g.position.set(s.x, s.y, s.z)
    const cx = camera ? camera.position.x : s.x - Math.sin(s.yaw) * 6, cy = camera ? camera.position.y : s.y + 3, cz = camera ? camera.position.z : s.z - Math.cos(s.yaw) * 6
    const yaw0 = Math.atan2(cx - s.x, cz - s.z); g.rotation.y = yaw0
    const elev = Math.atan2(cy - (s.y + 0.9), Math.hypot(cx - s.x, cz - s.z)); this.tilt.rotation.x = -clamp(elev, -0.5, 1.2) * 0.6
    const v = Math.hypot(s.vx, s.vz)
    let st
    if (s.wreck > 0) st = 'down'
    else if (s.climbing) st = 'climb'
    else if (s.rope) st = 'swing'
    else if (!s.grounded) st = 'air'
    else if (v > 0.6) st = 'run'
    else st = 'idle'
    if (this.state === 'air' && (st === 'run' || st === 'idle')) this.pop = 1
    this.state = st
    // 体の向きとカメラの関係: 後ろ姿・横・正面（境目でちらつかないよう幅を持たせる）
    let yaw = s.yaw; if (st === 'climb') yaw = Math.atan2(-s.climbing.nx, -s.climbing.nz)
    const fx = Math.sin(yaw), fz = Math.cos(yaw), rx = Math.cos(yaw0), rz = -Math.sin(yaw0)
    const d = fx * Math.sin(yaw0) + fz * Math.cos(yaw0), r = fx * rx + fz * rz
    if (this.view === 'back' ? d > -0.3 : this.view === 'front' ? d < 0.3 : Math.abs(d) > 0.58) this.view = d < -0.45 ? 'back' : d > 0.45 ? 'front' : 'side'
    if (Math.abs(r) > 0.12) this.side = r > 0 ? 1 : -1
    let key, flip = 1, bob = 0, rot = 0
    this.pop = Math.max(0, this.pop - dt * 6)
    if (st === 'down') { key = 'flat_down'; flip = this.side }
    else if (st === 'climb') { this.phase += dt * (v > 0.2 || Math.abs(s.vy) > 0.2 ? 8 : 0); key = 'back_climb'; flip = Math.sin(this.phase) > 0 ? 1 : -1 }
    else if (st === 'swing') {
      key = 'back_reach'
      // 手がフロスの方へ来る向きに裏返し、紙ごと腰を軸に回して手と糸をつなぐ
      const dx = s.rope.x - s.x, dy = s.rope.y - (s.y + HIP), dz = s.rope.z - s.z, lat = dx * rx + dz * rz
      if (Math.abs(lat) > 0.4) this.reachSide = lat > 0 ? 1 : -1
      flip = this.reachSide || 1
      const p = PS.back_reach, ax = (HAND[0] - 0.5) * p.uw * H, ay = HAND[1] * p.uh * H - HIP, arm = Math.atan2(ax, ay)
      rot = -flip * clamp(Math.atan2(lat * flip, Math.max(0.3, dy)) - arm, -1.1, 1.1)
    } else if (st === 'air') {
      if (s.stun > 0) { this.phase += dt * 14; key = 'front_hit'; rot = Math.sin(this.phase) * 0.9 }
      else if (this.view === 'side') { key = 'side_jump'; flip = this.side }
      else if (this.view === 'front') { key = 'front_run' }
      else key = 'back_fall'
    } else if (st === 'run') {
      this.phase += dt * Math.min(20, 8 + v * 0.8); const f = Math.sin(this.phase) > 0
      bob = Math.abs(Math.sin(this.phase)) * 0.1
      if (this.view === 'side') { key = f ? 'side_run_a' : 'side_run_b'; flip = this.side; rot = -this.side * Math.min(0.14, v * 0.012) }
      else { key = this.view === 'front' ? 'front_run' : 'back_run'; flip = f ? 1 : -1; rot = Math.sin(this.phase) * 0.05 }
    } else {
      key = this.view === 'side' ? 'side_stand' : this.view === 'front' ? 'front_stand' : 'back_stand'; flip = this.view === 'side' ? this.side : 1
      rot = Math.sin(this.t * 1.6) * 0.012
    }
    this.setPose(key)
    // 走りの足の入れ替えは一瞬で、向きを変える時だけ紙がくるっと回る
    if (st === 'run' && this.view !== 'side') this.sx = flip
    else if (st === 'climb') this.sx = flip
    else this.sx += (flip - this.sx) * Math.min(1, dt * 18)
    this.flip = flip
    const kk = 1 - Math.exp(-dt * (st === 'swing' ? 16 : 10)); this.rot += (rot - this.rot) * kk; this.pivot.rotation.z = this.rot
    const p = PS[key], P = this.paper, sq = 1 - this.pop * 0.14, breathe = st === 'idle' ? 1 + Math.sin(this.t * 2.2) * 0.012 : 1
    const sx = Math.abs(this.sx) < 0.05 ? 0.05 * (flip || 1) : this.sx
    P.scale.set(p.uw * H * sx * (2 - sq), p.uh * H * sq * breathe, 1)
    P.position.y = -HIP + bob
    const onFloor = st === 'run' || st === 'idle' || st === 'down'
    this.blob.visible = onFloor; this.blob.scale.setScalar(st === 'down' ? 1.5 : 1)
    g.updateMatrixWorld(true)
    if (st === 'swing') this.handWorld.copy(this._h.set(HAND[0] - 0.5, HAND[1], 0)).applyMatrix4(P.matrixWorld)
    else this.handWorld.set(s.x, s.y + H * 0.7, s.z)
  }
  dispose() { this.paper.geometry.dispose(); this.mat.dispose(); this.blob.geometry.dispose(); this.blob.material.dispose() }
}

export { skClone }
