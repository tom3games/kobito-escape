// 追ってくる物の見た目: ルンバ・猫・おかん（巨大）・掃除機。動きは shared/chase.js の状態を読むだけ
import * as THREE from 'three'
import { charAssets, skClone } from './charmodel.js?v=3'
import { canvasTex } from './house3d.js?v=3'
import { ITEMS, TOYS } from '../shared/house.js?v=3'
import { MOM_ART } from './momart.js?v=3'
import { CH } from '../shared/chase.js?v=3'

const std = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.6, ...o })
const shadow = m => { m.castShadow = true; return m }

// ---------------------------------------------------------------- ルンバ
// おかんが目玉シールを貼っている（光る緑の目ではなく、ぎょろぎょろの目で追ってくる）
export class Roomba3d {
  constructor(scene) {
    const g = this.g = new THREE.Group(), R = CH.roomba.R
    const body = shadow(new THREE.Mesh(new THREE.CylinderGeometry(R * 0.97, R, 5.6, 40), std(0x24262b, { roughness: 0.28, metalness: 0.25 }))); body.position.y = 3.6
    const top = new THREE.Mesh(new THREE.CylinderGeometry(R * 0.72, R * 0.76, 0.5, 36), std(0x3a3d44, { roughness: 0.16, metalness: 0.5 })); top.position.y = 6.5
    const ring = new THREE.Mesh(new THREE.TorusGeometry(3.3, 0.35, 8, 26), std(0xb9bec3, { metalness: 0.8, roughness: 0.25 })); ring.rotation.x = Math.PI / 2; ring.position.set(0, 6.85, -1)
    this.led = new THREE.Mesh(new THREE.CircleGeometry(2.6, 20), new THREE.MeshBasicMaterial({ color: 0x4fd67a })); this.led.rotation.x = -Math.PI / 2; this.led.position.set(0, 6.9, -1)
    const bumper = new THREE.Mesh(new THREE.TorusGeometry(R * 0.98, 0.7, 6, 36, Math.PI * 0.9), std(0x4b4d52)); bumper.rotation.x = Math.PI / 2; bumper.rotation.z = Math.PI / 2 - Math.PI * 0.45; bumper.position.y = 2.2
    g.add(body, top, ring, this.led, bumper)
    // ブラシ
    this.brushes = []
    for (const sx of [-1, 1]) {
      const b = new THREE.Group(); b.position.set(sx * R * 0.72, 0.5, R * 0.72)
      for (let i = 0; i < 3; i++) { const h = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.1, 7.5).translate(0, 0, 3.75), std(0x111111)); h.rotation.y = i * 2.09; b.add(h) }
      g.add(b); this.brushes.push(b)
    }
    // 目玉シール
    this.pupils = []
    for (const sx of [-1, 1]) {
      const w = new THREE.Mesh(new THREE.SphereGeometry(2.9, 18, 10).scale(1, 1, 0.45), std(0xf8f8f4, { roughness: 0.2 })); w.position.set(sx * 3.5, 5.6, R * 0.68); w.rotation.x = -0.72
      const pu = new THREE.Mesh(new THREE.SphereGeometry(1.25, 12, 8), std(0x111111, { roughness: 0.2 })); pu.position.set(0, 0, 1.2); w.add(pu)
      g.add(w); this.pupils.push(pu)
    }
    this.t = 0; g.visible = false; scene.add(g)
  }
  update(b, dt, me) {
    const g = this.g; g.visible = true; g.position.set(b.x, 0, b.z); g.rotation.y = b.yaw
    this.t += dt
    for (const br of this.brushes) br.rotation.y += dt * 11
    this.led.material.color.setHex(b.chase ? 0xff4630 : 0x4fd67a)
    g.position.y = b.chase ? Math.abs(Math.sin(this.t * 30)) * 0.08 : 0
    for (let i = 0; i < 2; i++) { const p = this.pupils[i]; const a = this.t * (b.chase ? 13 : 3) + i * 2.1; p.position.x = Math.sin(a) * 0.85; p.position.y = Math.cos(a * 1.4) * 0.85 }
  }
}

// ---------------------------------------------------------------- 猫（コードで組んだ。トラ猫）
const catFur = () => canvasTex(512, 256, (x, w, h) => {
  x.fillStyle = '#d98a3d'; x.fillRect(0, 0, w, h)
  for (let i = 0; i < 3200; i++) { x.strokeStyle = `rgba(${90 + Math.random() * 150},${50 + Math.random() * 90},${10 + Math.random() * 30},.16)`; x.lineWidth = 1; const a = Math.random() * w, b = Math.random() * h; x.beginPath(); x.moveTo(a, b); x.lineTo(a + 8 + Math.random() * 7, b + Math.random() * 3 - 1.5); x.stroke() }
  x.strokeStyle = 'rgba(120,58,14,.8)'; x.lineCap = 'round'
  for (let i = 0; i < 15; i++) { x.lineWidth = 8 + Math.random() * 7; const px = 10 + i * 34; x.beginPath(); x.moveTo(px, -4); x.quadraticCurveTo(px + 12, 62, px - 4, 96 + Math.random() * 30); x.stroke() }
  const g = x.createLinearGradient(0, h * 0.5, 0, h); g.addColorStop(0, 'rgba(247,234,212,0)'); g.addColorStop(1, 'rgba(247,234,212,1)'); x.fillStyle = g; x.fillRect(0, 0, w, h)
})
const catFace = () => canvasTex(512, 512, (x, w, h) => {
  x.fillStyle = '#d98a3d'; x.fillRect(0, 0, w, h)
  for (let i = 0; i < 2600; i++) { x.strokeStyle = `rgba(${100 + Math.random() * 130},${60 + Math.random() * 70},20,.16)`; x.lineWidth = 1; const a = Math.random() * w, b = Math.random() * h; x.beginPath(); x.moveTo(a, b); x.lineTo(a + Math.random() * 6 - 3, b + 8); x.stroke() }
  x.strokeStyle = 'rgba(120,58,14,.85)'; x.lineWidth = 11; x.lineCap = 'round'
  for (const dx of [-34, 0, 34]) { x.beginPath(); x.moveTo(256 + dx, 110); x.lineTo(256 + dx * 0.8, 186); x.stroke() }
  for (const s of [-1, 1]) { x.beginPath(); x.moveTo(256 + s * 150, 286); x.lineTo(256 + s * 198, 268); x.stroke(); x.beginPath(); x.moveTo(256 + s * 150, 318); x.lineTo(256 + s * 196, 318); x.stroke() }
  x.fillStyle = '#f7ead4'; x.beginPath(); x.ellipse(256, 358, 88, 62, 0, 0, 7); x.fill()
  x.fillStyle = '#c9575f'; x.beginPath(); x.moveTo(240, 318); x.lineTo(272, 318); x.lineTo(256, 340); x.closePath(); x.fill()
  x.strokeStyle = '#3a2413'; x.lineWidth = 6; x.beginPath(); x.moveTo(256, 340); x.lineTo(256, 360); x.moveTo(256, 360); x.quadraticCurveTo(232, 384, 212, 362); x.moveTo(256, 360); x.quadraticCurveTo(280, 384, 300, 362); x.stroke()
})
function eye() {
  const c = document.createElement('canvas'); c.width = 128; c.height = 128
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace
  const draw = slit => { const x = c.getContext('2d'); x.clearRect(0, 0, 128, 128); x.fillStyle = '#e6cd3e'; x.beginPath(); x.arc(64, 64, 60, 0, 7); x.fill(); x.fillStyle = '#7da32d'; x.beginPath(); x.arc(64, 64, 34, 0, 7); x.fill(); x.fillStyle = '#0d0d0d'; x.beginPath(); x.ellipse(64, 64, slit, 54, 0, 0, 7); x.fill(); x.fillStyle = 'rgba(255,255,255,.9)'; x.beginPath(); x.arc(84, 42, 11, 0, 7); x.fill(); x.lineWidth = 7; x.strokeStyle = '#2a1b0f'; x.beginPath(); x.arc(64, 64, 60, 0, 7); x.stroke(); t.needsUpdate = true }
  draw(12); t.setSlit = draw
  return t
}
export class Cat3d {
  constructor(scene) {
    const g = this.g = new THREE.Group(); this.inner = new THREE.Group(); g.add(this.inner)
    const fur = std(0xffffff, { map: catFur(), roughness: 0.95 }), plain = std(0xd98a3d, { roughness: 0.95 }), white = std(0xf7ead4, { roughness: 1 })
    // 体: 少し丸めた円柱に球をつなぐ
    const body = this.body = new THREE.Group(); this.inner.add(body); body.position.y = 11
    const trunk = shadow(new THREE.Mesh(new THREE.SphereGeometry(9, 24, 16).scale(1.0, 0.95, 2.05), fur)); body.add(trunk)
    const chest = shadow(new THREE.Mesh(new THREE.SphereGeometry(7.6, 20, 14), fur)); chest.position.set(0, 1.2, 12); body.add(chest)
    const head = this.head = new THREE.Group(); head.position.set(0, 7, 18); body.add(head)
    const skull = shadow(new THREE.Mesh(new THREE.SphereGeometry(8, 28, 20).scale(1.12, 0.95, 0.95), std(0xffffff, { map: catFace(), roughness: 0.95 }))); skull.rotation.y = -Math.PI / 2; head.add(skull); this.skull = skull
    const earG = new THREE.ConeGeometry(3.3, 6.4, 4).rotateY(Math.PI / 4)
    for (const s of [-1, 1]) {
      const e = shadow(new THREE.Mesh(earG, plain)); e.position.set(s * 5.2, 7.3, -0.6); e.rotation.z = -s * 0.25; e.scale.z = 0.5; head.add(e)
      const inr = new THREE.Mesh(new THREE.ConeGeometry(2.1, 4.2, 3), std(0xe8a8a0, { roughness: 1 })); inr.position.set(s * 5.2, 6.8, 0.4); inr.rotation.z = -s * 0.25; inr.scale.z = 0.3; head.add(inr)
    }
    { const mz = shadow(new THREE.Mesh(new THREE.SphereGeometry(3.4, 16, 10).scale(1.15, 0.72, 0.75), white)); mz.position.set(0, -2.6, 6.6); head.add(mz); const nose = new THREE.Mesh(new THREE.SphereGeometry(0.72, 10, 6).scale(1.2, 0.8, 0.7), std(0xc9575f)); nose.position.set(0, -1.1, 8.9); head.add(nose) }
    this.eyeT = eye(); this.eyes = []
    for (const s of [-1, 1]) { const m = new THREE.Mesh(new THREE.CircleGeometry(2.05, 22), new THREE.MeshBasicMaterial({ map: this.eyeT, transparent: true })); m.position.set(s * 3.5, 1.6, 7.45); m.rotation.y = s * 0.28; head.add(m); this.eyes.push(m) }
    // ひげ
    const wg = []; for (const s of [-1, 1]) for (let i = 0; i < 3; i++) wg.push(0, 0, 0, s * 11, -1 + i * 1.1 + s * 0, -0.8)
    const wm = new THREE.LineBasicMaterial({ color: 0xffffff }); for (const s of [-1, 1]) { const pts = []; for (let i = 0; i < 3; i++) { pts.push(new THREE.Vector3(s * 3.4, -1.6, 7)); pts.push(new THREE.Vector3(s * 12, -2.6 + i * 1.5, 5)) } const w = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(pts), wm); head.add(w) }
    // 足
    this.legs = []
    for (const [sx, z, y] of [[-1, 11, -1], [1, 11, -1], [-1, -12, -1], [1, -12, -1]]) {
      const lg = new THREE.Group(); lg.position.set(sx * 5.4, y, z); body.add(lg)
      const u = shadow(new THREE.Mesh(new THREE.CapsuleGeometry(2.5, 8, 4, 10).translate(0, -5.5, 0), plain)); lg.add(u)
      const p = shadow(new THREE.Mesh(new THREE.SphereGeometry(2.8, 12, 8).scale(1, 0.72, 1.3), white)); p.position.set(0, -10.2, 0.8); lg.add(p)
      this.legs.push(lg)
    }
    // しっぽ
    this.tail = []
    let prev = body, py = 2, pz = -17
    for (let i = 0; i < 7; i++) { const s = new THREE.Group(); s.position.set(0, py, pz); prev.add(s); const m = shadow(new THREE.Mesh(new THREE.CapsuleGeometry(1.9 - i * 0.14, 3.2, 3, 8).rotateX(Math.PI / 2).translate(0, 0, -2.3), i % 2 ? plain : std(0x8a4a1b, { roughness: 1 }))); s.add(m); this.tail.push(s); prev = s; py = 0; pz = -4.6 }
    // 箱（レア: 箱に入ってやる気ゼロ）
    this.box = new THREE.Group()
    const cm = std(0xbb8f5c, { roughness: 1, side: THREE.DoubleSide })
    for (const [w, d, x, z] of [[34, 1, 0, 20], [34, 1, 0, -20], [1, 41, -17, 0], [1, 41, 17, 0]]) { const b = shadow(new THREE.Mesh(new THREE.BoxGeometry(w, 15, d), cm)); b.position.set(x, 7.5, z); this.box.add(b) }
    this.box.visible = false; g.add(this.box)
    this.t = 0; this.k = 0; this.kWas = ''; scene.add(g)
    // 着地の輪
    this.ring = new THREE.Mesh(new THREE.RingGeometry(0.82, 1, 44), new THREE.MeshBasicMaterial({ color: 0xff5f3a, transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthWrite: false, fog: false })); this.ring.rotation.x = -Math.PI / 2; this.ring.renderOrder = 4; this.ring.visible = false; scene.add(this.ring)
    this.fill = new THREE.Mesh(new THREE.CircleGeometry(1, 44), new THREE.MeshBasicMaterial({ color: 0xff5f3a, transparent: true, opacity: 0.22, side: THREE.DoubleSide, depthWrite: false, fog: false })); this.fill.rotation.x = -Math.PI / 2; this.fill.renderOrder = 4; this.fill.visible = false; scene.add(this.fill)
  }
  update(c, dt, me) {
    const g = this.g; this.t += dt; const T = this.t
    g.position.set(c.x, c.y, c.z); g.rotation.y = c.yaw
    const st = c.state
    let wig = 0, tail = Math.sin(T * 2.2) * 0.25, headP = 0, stretch = 0, sit = 0
    const B = this.body, L = this.legs
    if (st === 'nap') { sit = 1; headP = 0.55; tail = Math.sin(T * 0.8) * 0.1 }
    else if (st === 'box') { sit = 1; tail = 0; headP = -0.05 }
    else if (st === 'ride') { sit = 0.6; headP = -0.08 }
    else if (st === 'rest') { sit = 0.35 }
    else if (st === 'crouch') { wig = 1; tail = Math.sin(T * 14) * 0.5 }
    else if (st === 'leap') { stretch = 1; tail = -0.5 }
    else if (st === 'swipe') { sit = 0.2 }
    // 伏せ（おしりを振る）
    const crouchY = wig ? -3.6 : 0
    B.position.y += ((11 + crouchY + (sit ? -2.6 * sit : 0)) - B.position.y) * Math.min(1, dt * 10)
    B.rotation.x += ((wig ? 0.16 : stretch ? -0.28 : sit ? -0.34 * sit : 0) - B.rotation.x) * Math.min(1, dt * 10)
    B.position.x = wig ? Math.sin(T * 17) * 1.3 : 0
    B.rotation.y = wig ? Math.sin(T * 17) * 0.1 : 0
    this.head.rotation.x += (headP - this.head.rotation.x) * Math.min(1, dt * 6)
    // 足
    const fold = wig ? 0.8 : sit ? 0.9 * sit : 0
    for (let i = 0; i < 4; i++) {
      const lg = L[i], front = i < 2
      let rot = front ? (stretch ? -1.2 : -0.12 * fold) : (stretch ? 1.1 : fold * 1.05)
      if (st === 'swipe' && i === 1) rot = -2.2 + Math.sin(T * 26) * 0.5
      lg.rotation.x += (rot - lg.rotation.x) * Math.min(1, dt * 14)
    }
    let tp = this.tail, bendX = st === 'leap' ? 0.1 : 0.22
    for (let i = 0; i < tp.length; i++) { tp[i].rotation.y = Math.sin(T * (wig ? 8 : 2) + i * 0.55) * (wig ? 0.3 : 0.18) + tail * 0.12; tp[i].rotation.x = -bendX * (i === 0 ? 2 : 1) }
    // 目: 飛ぶ時は丸い瞳、普段は細い
    const k = st === 'crouch' || st === 'leap' ? 'wide' : st === 'nap' ? 'nap' : 'slit'
    if (k !== this.kWas) { this.kWas = k; this.eyeT.setSlit(k === 'wide' ? 26 : 10); for (const e of this.eyes) e.scale.y = k === 'nap' ? 0.12 : 1 }
    this.box.visible = st === 'box'
    this.inner.scale.setScalar(st === 'box' ? 0.92 : st === 'ride' ? 0.7 : 1)
    // 自分の方を見る
    if (me) { const dx = me.x - c.x, dz = me.z - c.z, a = Math.atan2(dx, dz) - c.yaw; this.head.rotation.y = Math.max(-0.8, Math.min(0.8, Math.atan2(Math.sin(a), Math.cos(a)))) }
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
// おかん本体は画像生成の切り絵（img/mom_*.webp）。カメラの方へ縦軸だけ回す板。掃除機の本体・ホース・吸い口は 3D のまま
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
  return Promise.all(keys.flatMap(k => [one(k), face(k)])).then(() => { momArt.done = true; for (const k of ['win', 'spot', 'phone', 'angry']) big(k) })
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
    // 掃除機の本体（床を引きずる。赤い昭和の形）
    const can = this.can = new THREE.Group()
    const body = shadow(new THREE.Mesh(new THREE.SphereGeometry(15, 24, 14).scale(1.05, 0.72, 1.5), std(0xb5362b, { roughness: 0.3 }))); body.position.y = 13
    const lid = new THREE.Mesh(new THREE.SphereGeometry(15, 20, 10, 0, 6.3, 0, 1.2).scale(0.8, 0.5, 1.05), std(0x24262b, { roughness: 0.35 })); lid.position.y = 19
    for (const s of [-1, 1]) { const w = shadow(new THREE.Mesh(new THREE.CylinderGeometry(9, 9, 4, 18).rotateZ(Math.PI / 2), std(0x1b1c1f))); w.position.set(s * 15, 9, -6); can.add(w) }
    can.add(body, lid); can.visible = false; scene.add(can)
    // 吸い口
    const noz = this.noz = new THREE.Group()
    const head = shadow(new THREE.Mesh(new THREE.BoxGeometry(24, 4.4, 9), std(0x2b2d31, { roughness: 0.4 }))); noz.add(head)
    const mouth = new THREE.Mesh(new THREE.BoxGeometry(21, 2.4, 0.4), new THREE.MeshBasicMaterial({ color: 0x050505 })); mouth.position.set(0, -0.3, 4.6); noz.add(mouth)
    const bristle = new THREE.Mesh(new THREE.BoxGeometry(22, 0.8, 0.8), std(0xb33a2b)); bristle.position.set(0, -2, 4.3); noz.add(bristle)
    const neck = shadow(new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.8, 8, 12).rotateX(Math.PI / 2 - 0.6), std(0x8f9499, { metalness: 0.6, roughness: 0.3 }))); neck.position.set(0, 3.2, -4); noz.add(neck)
    noz.visible = false; scene.add(noz)
    // ホース（じゃばら。節を並べる）。本体 → 手の金属パイプ → 吸い口 の2本つなぎ
    this.segN = 36
    this.hose = new THREE.InstancedMesh(new THREE.CylinderGeometry(2.3, 2.3, 1, 8), std(0x777c80, { roughness: 0.6 }), this.segN); this.hose.frustumCulled = false; this.hose.visible = false; scene.add(this.hose)
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._a = new THREE.Vector3(); this._b = new THREE.Vector3(); this._c = new THREE.Vector3(); this._d = new THREE.Vector3(); this._h = new THREE.Vector3(); this._e = new THREE.Vector3(); this._s = new THREE.Vector3(); this._p = new THREE.Vector3(); this._t1 = new THREE.Vector3(); this._t2 = new THREE.Vector3(); this._up = new THREE.Vector3(0, 1, 0)
  }
  setPose(k) {
    if (k === this.key) return
    const tx = momTex[k]; if (!tx) { if (!this.key) this.stub.visible = true; return }   // 絵がまだ読めていない間も姿は見せる（見えない掃除機にしない）
    this.key = k; this.mat.map = tx; this.mat.needsUpdate = true; this.paper.visible = true; this.stub.visible = false; this.pop = 1
  }
  update(M, dt, camera, face) {
    this.t += dt
    if (!M.in) { this.g.visible = false; this.can.visible = this.noz.visible = this.hose.visible = this.blob.visible = false; return }
    this.g.visible = true; this.can.visible = this.noz.visible = this.hose.visible = this.blob.visible = true
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
    const ca = this.can; const cx = M.x - 26, cz = M.z - 22
    ca.position.x += (cx - ca.position.x) * Math.min(1, dt * 2); ca.position.z += (cz - ca.position.z) * Math.min(1, dt * 2)
    ca.rotation.y = Math.atan2(M.x - ca.position.x, M.z - ca.position.z)
    // 吸い口: 自分へ向かう
    const nz = this.noz; nz.position.set(N.x, N.y + Math.sin(T * 34) * (N.active ? 0.2 : 0), N.z)
    if (this._look) nz.lookAt(this._look)
    // ホース: 手の位置は板の行列から取る（揺れ・裏返しも一緒に動く）
    this.g.updateMatrixWorld(true)
    const H = this._h.set(pose.hand[0] - 0.5, pose.hand[1], 0).applyMatrix4(P.matrixWorld)
    H.x += Math.sin(yaw) * 1.5; H.z += Math.cos(yaw) * 1.5   // 紙より少し手前
    const a = this._a.set(ca.position.x, 22, ca.position.z), c = this._c.set(N.x, N.y + 3, N.z)
    const bA = this._b.set((a.x + H.x) / 2, Math.min(a.y, H.y) * 0.4, (a.z + H.z) / 2)
    // パイプの向きに出てから吸い口へ曲がる
    const pipe = H.distanceTo(c) * 0.3, rx = Math.cos(yaw) * this.sx, rz = -Math.sin(yaw) * this.sx
    const bC = this._e.set(H.x + rx * pipe * 0.72, H.y - pipe * 0.72, H.z + rz * pipe * 0.72)
    const n1 = 14, Q = (p0, p1, p2, u, out) => { const v = 1 - u; return out.set(v * v * p0.x + 2 * v * u * p1.x + u * u * p2.x, v * v * p0.y + 2 * v * u * p1.y + u * u * p2.y, v * v * p0.z + 2 * v * u * p1.z + u * u * p2.z) }
    const prev = this._p; Q(a, bA, H, 0, prev)
    for (let i = 1; i <= this.segN; i++) {
      const pt = i <= n1 ? Q(a, bA, H, i / n1, this._s) : Q(H, bC, c, (i - n1) / (this.segN - n1), this._s)
      const d = this._d.subVectors(pt, prev), l = d.length() || 1
      this._q.setFromUnitVectors(this._up, d.divideScalar(l))
      const r = 1 + 0.12 * (i % 2)
      this._m.compose(this._t1.set((pt.x + prev.x) / 2, (pt.y + prev.y) / 2, (pt.z + prev.z) / 2), this._q, this._t2.set(r, l + 0.3, r))
      this.hose.setMatrixAt(i - 1, this._m)
      prev.copy(pt)
    }
    this.hose.instanceMatrix.needsUpdate = true
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
export class Slipper3d {
  constructor(scene) {
    const g = this.g = new THREE.Group()
    const sole = shadow(new THREE.Mesh(new THREE.SphereGeometry(1, 18, 10).scale(11, 1.2, 24), std(0x8c6239, { roughness: 1 })))
    const top = shadow(new THREE.Mesh(new THREE.SphereGeometry(1, 18, 10, 0, 6.3, 0, 1.45).scale(10, 8, 12), std(0xd4737e, { roughness: 1 }))); top.position.set(0, 0.4, 10)
    g.add(sole, top); g.visible = false; scene.add(g)
    this.ring = new THREE.Mesh(new THREE.RingGeometry(0.82, 1, 40), new THREE.MeshBasicMaterial({ color: 0xff5f3a, transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthWrite: false, fog: false })); this.ring.rotation.x = -Math.PI / 2; this.ring.visible = false; scene.add(this.ring)
    this.after = 0
  }
  update(s, dt) {
    if (s) {
      this.g.visible = true; this.ring.visible = true; this.ring.position.set(s.x, s.y + 0.6, s.z); this.ring.scale.setScalar(s.r)
      const k = Math.max(0, s.T / CH.slipper.warn); this.g.position.set(s.x, s.y + 1 + 150 * k * k, s.z); this.g.rotation.set(k * 1.3, k * 2, 0)
      this.after = 1.1
    } else {
      this.ring.visible = false
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
