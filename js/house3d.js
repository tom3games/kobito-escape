// 家の見た目。寸法は shared/house.js の F を読む。すべてコードで作る（持ち込みの素材なし）
// 同じ材質はまとめて1つのジオメトリにする（スマホでドローコールを増やさない）
import * as THREE from 'three'
import { mergeGeometries } from '../vendor/jsm/utils/BufferGeometryUtils.js?v=3'
import { F, ROOM, LINE, LIGHT_L, LIGHT_K, SHELF_Y, SIGNS, MOM_X } from '../shared/house.js?v=3'
import { LOW } from './quality.js?v=3'

const clamp = (v, a, b) => v < a ? a : v > b ? b : v
let seed = 11
const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647

export function canvasTex(w, h, draw, opt = {}) {
  const c = document.createElement('canvas'); c.width = w; c.height = h
  draw(c.getContext('2d'), w, h)
  const t = new THREE.CanvasTexture(c); t.colorSpace = opt.linear ? THREE.NoColorSpace : THREE.SRGBColorSpace
  t.anisotropy = 4
  if (opt.repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping }
  return t
}
// 布の細かい織り目
function weave(x, w, h, base, dark, light, step = 4) {
  x.fillStyle = base; x.fillRect(0, 0, w, h)
  for (let j = 0; j < h; j += step) for (let i = 0; i < w; i += step) {
    const a = rnd(); x.fillStyle = a < 0.5 ? dark : light; x.globalAlpha = 0.06 + a * 0.14
    x.fillRect(i, j, (i + j) % (step * 2) ? step - 1 : 1, (i + j) % (step * 2) ? 1 : step - 1)
  }
  x.globalAlpha = 1
}
const TEX = {
  floor() {
    return canvasTex(1024, 1024, (x, w, h) => {
      const rows = 8, ph = h / rows
      for (let r = 0; r < rows; r++) {
        let off = -rnd() * 500
        while (off < w) {
          const len = 380 + rnd() * 340, tone = 150 + rnd() * 36
          x.fillStyle = `rgb(${tone + 34},${tone - 2},${tone - 48})`; x.fillRect(off, r * ph, len, ph)
          // 木目
          for (let i = 0; i < 16; i++) {
            x.strokeStyle = `rgba(70,40,14,${0.04 + rnd() * 0.1})`; x.lineWidth = 0.6 + rnd() * 1.6
            const y0 = r * ph + rnd() * ph
            x.beginPath(); x.moveTo(off, y0); x.bezierCurveTo(off + len * 0.3, y0 + (rnd() - 0.5) * 18, off + len * 0.7, y0 + (rnd() - 0.5) * 18, off + len, y0 + (rnd() - 0.5) * 10); x.stroke()
          }
          x.fillStyle = 'rgba(30,16,6,.85)'; x.fillRect(off + len - 1.5, r * ph, 3, ph)
          off += len
        }
        x.fillStyle = 'rgba(30,16,6,.85)'; x.fillRect(0, r * ph - 1.5, w, 3)
      }
    }, { repeat: true })
  },
  wall() { return canvasTex(512, 512, (x, w, h) => { x.fillStyle = '#e9e1cf'; x.fillRect(0, 0, w, h); for (let i = 0; i < 2600; i++) { x.fillStyle = rnd() < 0.5 ? 'rgba(120,100,70,.05)' : 'rgba(255,255,255,.1)'; x.fillRect(rnd() * w, rnd() * h, 1 + rnd() * 3, 1 + rnd() * 3) } for (let i = 0; i < 8; i++) { x.fillStyle = 'rgba(120,100,70,.035)'; x.fillRect(i * 64, 0, 2, h) } }, { repeat: true }) },
  ceil() { return canvasTex(256, 256, (x, w, h) => { x.fillStyle = '#efe9db'; x.fillRect(0, 0, w, h); for (let i = 0; i < 900; i++) { x.fillStyle = 'rgba(110,90,60,.06)'; x.fillRect(rnd() * w, rnd() * h, 2, 2) } }, { repeat: true }) },
  sofa() { return canvasTex(512, 512, (x, w, h) => weave(x, w, h, '#a98f63', '#5b4526', '#e0cfa6', 6), { repeat: true }) },
  rug() {
    return canvasTex(1024, 768, (x, w, h) => {
      x.fillStyle = '#7c2f2a'; x.fillRect(0, 0, w, h)
      x.strokeStyle = '#d9b676'; x.lineWidth = 18; x.strokeRect(40, 40, w - 80, h - 80)
      x.strokeStyle = '#1f3442'; x.lineWidth = 8; x.strokeRect(72, 72, w - 144, h - 144)
      for (let j = 0; j < 6; j++) for (let i = 0; i < 8; i++) {
        const cx = 140 + i * 106, cy = 140 + j * 98
        x.fillStyle = (i + j) % 2 ? '#d9b676' : '#1f3442'
        x.beginPath(); x.moveTo(cx, cy - 34); x.lineTo(cx + 34, cy); x.lineTo(cx, cy + 34); x.lineTo(cx - 34, cy); x.closePath(); x.fill()
        x.fillStyle = '#7c2f2a'; x.beginPath(); x.arc(cx, cy, 11, 0, 7); x.fill()
      }
      for (let i = 0; i < 16000; i++) { x.fillStyle = rnd() < 0.5 ? 'rgba(0,0,0,.09)' : 'rgba(255,240,210,.05)'; x.fillRect(rnd() * w, rnd() * h, 2, 4) }
    })
  },
  dark() { return canvasTex(512, 512, (x, w, h) => { x.fillStyle = '#50331f'; x.fillRect(0, 0, w, h); for (let i = 0; i < 90; i++) { x.strokeStyle = `rgba(22,10,4,${0.08 + rnd() * 0.2})`; x.lineWidth = 0.6 + rnd() * 1.6; const y0 = rnd() * h; x.beginPath(); x.moveTo(0, y0); x.bezierCurveTo(w * 0.3, y0 + (rnd() - 0.5) * 24, w * 0.7, y0 + (rnd() - 0.5) * 24, w, y0); x.stroke() } }, { repeat: true }) },
  light() { return canvasTex(512, 512, (x, w, h) => { x.fillStyle = '#c9a877'; x.fillRect(0, 0, w, h); for (let i = 0; i < 80; i++) { x.strokeStyle = `rgba(90,56,20,${0.06 + rnd() * 0.16})`; x.lineWidth = 0.6 + rnd() * 1.6; const y0 = rnd() * h; x.beginPath(); x.moveTo(0, y0); x.bezierCurveTo(w * 0.3, y0 + (rnd() - 0.5) * 24, w * 0.7, y0 + (rnd() - 0.5) * 24, w, y0); x.stroke() } }, { repeat: true }) },
  kitchen() { return canvasTex(512, 512, (x, w, h) => { x.fillStyle = '#e7dfca'; x.fillRect(0, 0, w, h); for (let i = 0; i < 1400; i++) { x.fillStyle = 'rgba(120,100,60,.05)'; x.fillRect(rnd() * w, rnd() * h, 2, 2) } }, { repeat: true }) },
  card() { return canvasTex(512, 512, (x, w, h) => { x.fillStyle = '#bb8f5c'; x.fillRect(0, 0, w, h); for (let i = 0; i < 90; i++) { x.fillStyle = 'rgba(96,62,28,.16)'; x.fillRect(0, i * 6 + rnd() * 2, w, 1.2) } for (let i = 0; i < 700; i++) { x.fillStyle = 'rgba(70,40,14,.1)'; x.fillRect(rnd() * w, rnd() * h, 3, 1) } }, { repeat: true }) },
  curtain() { return canvasTex(512, 512, (x, w, h) => { weave(x, w, h, '#5f7b66', '#2f4536', '#a7c2ac', 4); x.globalAlpha = 0.28; x.fillStyle = '#e4d9b7'; for (let i = 0; i < 26; i++) { const a = rnd() * w, b = rnd() * h; for (let k = 0; k < 5; k++) { x.beginPath(); x.ellipse(a + Math.cos(k * 1.26) * 12, b + Math.sin(k * 1.26) * 12, 9, 6, k * 1.26, 0, 7); x.fill() } } x.globalAlpha = 1 }, { repeat: true }) }
}
// 角を丸めた箱。uv は世界の大きさに合わせる（布目や木目の縮尺をそろえる）
function rbox(x0, x1, y0, y1, z0, z1, r = 1.2, seg = 2, uvK = 0.02) {
  const w = x1 - x0, h = y1 - y0, d = z1 - z0
  r = Math.min(r, w / 2 - 0.01, h / 2 - 0.01, d / 2 - 0.01)
  const g = new THREE.BoxGeometry(w, h, d, seg * 2 + 1, seg * 2 + 1, seg * 2 + 1)
  const p = g.attributes.position, n = g.attributes.normal, uv = g.attributes.uv
  const hx = w / 2 - r, hy = h / 2 - r, hz = d / 2 - r
  for (let i = 0; i < p.count; i++) {
    // 分割の線を角へ寄せる（真ん中の1区画が平らな面、外側の seg 区画が丸み）
    const N = seg * 2 + 1
    const snap = (v, half, hin) => { const idx = (Math.abs(v) / half * N - 1) / 2; return Math.sign(v) * (hin + (idx / seg) * (half - hin)) }
    const sx = snap(p.getX(i), w / 2, hx), sy = snap(p.getY(i), h / 2, hy), sz = snap(p.getZ(i), d / 2, hz)
    const ix = clamp(sx, -hx, hx), iy = clamp(sy, -hy, hy), iz = clamp(sz, -hz, hz)
    let nx = sx - ix, ny = sy - iy, nz = sz - iz
    const l = Math.hypot(nx, ny, nz) || 1
    nx /= l; ny /= l; nz /= l
    p.setXYZ(i, ix + nx * r, iy + ny * r, iz + nz * r)
    n.setXYZ(i, nx, ny, nz)
    const px = p.getX(i) + (x0 + x1) / 2, py = p.getY(i) + (y0 + y1) / 2, pz = p.getZ(i) + (z0 + z1) / 2
    const ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i)), az = Math.abs(n.getZ(i))
    if (ay >= ax && ay >= az) uv.setXY(i, px * uvK, pz * uvK); else if (ax >= az) uv.setXY(i, pz * uvK, py * uvK); else uv.setXY(i, px * uvK, py * uvK)
  }
  g.translate((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2)
  return g
}
const fbox = (o, r, uvK) => rbox(o.x0, o.x1, o.y0, o.y1, o.z0, o.z1, r, 2, uvK)
function cyl(rt, rb, h, x, y, z, seg = 16, rot = null) {
  const g = new THREE.CylinderGeometry(rt, rb, h, seg)
  if (rot) g.applyMatrix4(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(...rot)))
  g.translate(x, y, z)
  const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * 2, uv.getY(i))
  return g
}
function plain(g) { return g.index ? g.toNonIndexed() : g }

export function buildHouse(scene, renderer) {
  const parts = new Map()   // 材質 → ジオメトリの配列
  const mats = {}
  const M = (name, o) => mats[name] || (mats[name] = new THREE.MeshStandardMaterial({ roughness: 0.8, metalness: 0, ...o }))
  const add = (mat, g) => { if (!parts.has(mat)) parts.set(mat, []); parts.get(mat).push(plain(g)) }
  const flat = (w, h, x, y, z, ry, map, o = {}) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map, roughness: o.rough ?? 0.75, transparent: !!o.alpha, emissive: o.em ? 0xffffff : 0, emissiveMap: o.em ? map : null, emissiveIntensity: o.em || 0, side: o.side ?? THREE.FrontSide, depthWrite: !o.alpha }))
    m.position.set(x, y, z); m.rotation.y = ry; m.receiveShadow = !o.em; if (o.rx) m.rotation.x = o.rx
    scene.add(m); return m
  }
  const R = ROOM, H = R.ceil
  const mFloor = M('floor', { map: TEX.floor(), roughness: 0.42 }); mFloor.map.repeat.set(1 / 92, 1 / 92)
  const mWall = M('wall', { map: TEX.wall(), roughness: 0.95 })
  const mCeil = M('ceil', { map: TEX.ceil(), roughness: 1 })
  const mSofa = M('sofa', { map: TEX.sofa(), roughness: 0.98 })
  const mDark = M('dark', { map: TEX.dark(), roughness: 0.55 })
  const mLight = M('light', { map: TEX.light(), roughness: 0.58 })
  const mKit = M('kit', { map: TEX.kitchen(), roughness: 0.45 })
  const mCard = M('card', { map: TEX.card(), roughness: 0.95 })
  const mCurt = M('curt', { map: TEX.curtain(), roughness: 1, side: THREE.DoubleSide })
  const mWhite = M('white', { color: 0xf1efe8, roughness: 0.32 })
  const mSteel = M('steel', { color: 0xbcc2c6, metalness: 0.75, roughness: 0.32 })
  const mBlack = M('black', { color: 0x1b1c1f, roughness: 0.35 })
  const mPlas = M('plas', { color: 0xd8d1bf, roughness: 0.5 })
  const mGold = M('gold', { color: 0xc99a3b, metalness: 0.75, roughness: 0.3 })
  const mPot = M('pot', { color: 0x9c5a3a, roughness: 0.85 })
  const mLeaf = M('leaf', { color: 0x37663a, roughness: 0.65, side: THREE.DoubleSide })
  const mGlow = new THREE.MeshBasicMaterial({ color: 0xffe9bf, fog: false })

  // ---- 床・壁・天井
  const flo = new THREE.Mesh(new THREE.PlaneGeometry(R.x1 - R.x0, R.z1 - R.z0 + 80), mFloor); flo.rotation.x = -Math.PI / 2; flo.position.set(0, 0, (R.z0 + R.z1) / 2 - 40); flo.receiveShadow = true; scene.add(flo)
  { const uv = flo.geometry.attributes.uv; const p = flo.geometry.attributes.position; for (let i = 0; i < uv.count; i++) uv.setXY(i, p.getX(i), p.getY(i)) }
  const cei = new THREE.Mesh(new THREE.PlaneGeometry(R.x1 - R.x0, R.z1 - R.z0), mCeil); cei.rotation.x = Math.PI / 2; cei.position.set(0, H, (R.z0 + R.z1) / 2); { const uv = cei.geometry.attributes.uv; const p = cei.geometry.attributes.position; for (let i = 0; i < uv.count; i++) uv.setXY(i, p.getX(i) * 0.01, p.getY(i) * 0.01) } scene.add(cei)
  const wallK = 0.012
  const wallBox = (x0, x1, z0, z1, y0 = 0, y1 = H) => add(mWall, rbox(x0, x1, y0, y1, z0, z1, 0.01, 1, wallK))
  wallBox(R.x0 - 6, R.x0, 0, R.z1); wallBox(R.x0, R.x1, R.z1, R.z1 + 6)
  // 東の壁: 窓の穴（カーテンの奥）
  const WIN = { z0: 330, z1: 440, y0: 40, y1: 150 }
  wallBox(R.x1, R.x1 + 6, 0, WIN.z0); wallBox(R.x1, R.x1 + 6, WIN.z1, R.z1); wallBox(R.x1, R.x1 + 6, WIN.z0, WIN.z1, 0, WIN.y0); wallBox(R.x1, R.x1 + 6, WIN.z0, WIN.z1, WIN.y1, H)
  // 北の壁: ドアの穴（おかんの入口）
  const DOOR = { x0: MOM_X - 38, x1: MOM_X + 38, y1: 150 }
  wallBox(R.x0, DOOR.x0, -6, 0); wallBox(DOOR.x1, R.x1, -6, 0); wallBox(DOOR.x0, DOOR.x1, -6, 0, DOOR.y1, H)
  add(mLight, rbox(DOOR.x0 - 4, DOOR.x0, 0, DOOR.y1 + 4, -7, 1, 0.5)); add(mLight, rbox(DOOR.x1, DOOR.x1 + 4, 0, DOOR.y1 + 4, -7, 1, 0.5)); add(mLight, rbox(DOOR.x0 - 4, DOOR.x1 + 4, DOOR.y1, DOOR.y1 + 4, -7, 1, 0.5))
  // 廊下（ドアの奥。真っ暗にしない）
  const hall = new THREE.Mesh(new THREE.PlaneGeometry(140, H), new THREE.MeshBasicMaterial({ color: 0x8f7f66, fog: false })); hall.position.set(MOM_X, H / 2, -90); scene.add(hall)
  const hallF = new THREE.Mesh(new THREE.PlaneGeometry(140, 100), new THREE.MeshBasicMaterial({ color: 0x6a5238 })); hallF.rotation.x = -Math.PI / 2; hallF.position.set(MOM_X, 0.02, -45); scene.add(hallF)
  // 巾木
  for (const [a, b, c, d] of [[R.x0, R.x0 + 1.4, 0, R.z1], [R.x1 - 1.4, R.x1, 0, R.z1], [R.x0, DOOR.x0, 0, 1.4], [DOOR.x1, R.x1, 0, 1.4]]) add(mLight, rbox(a, b, 0, 7, c, d, 0.2, 1))
  // コンセント（2cm から見ると扉くらいある）
  const plug = canvasTex(128, 192, (x, w, h) => { x.fillStyle = '#ece6d4'; x.fillRect(0, 0, w, h); x.strokeStyle = '#a79e87'; x.lineWidth = 5; x.strokeRect(6, 6, w - 12, h - 12); x.fillStyle = '#26221c'; for (const yy of [52, 128]) { x.fillRect(38, yy, 11, 28); x.fillRect(79, yy, 11, 28) } })
  flat(11, 16, R.x0 + 0.2, 16, 245, Math.PI / 2, plug); flat(11, 16, -40, 16, 0.2, 0, plug); flat(11, 16, R.x1 - 0.2, 16, 60, -Math.PI / 2, plug)

  // ---- 窓とカーテン
  const skyTex = canvasTex(256, 256, (x, w, h) => { const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, '#cfe6f6'); g.addColorStop(0.75, '#fdf6df'); g.addColorStop(1, '#a8b88f'); x.fillStyle = g; x.fillRect(0, 0, w, h); x.fillStyle = 'rgba(70,84,70,.6)'; x.fillRect(0, h * 0.82, w, h); x.fillStyle = 'rgba(255,255,255,.7)'; for (let i = 0; i < 5; i++) { x.beginPath(); x.ellipse(rnd() * w, rnd() * h * 0.5, 26 + rnd() * 30, 8 + rnd() * 6, 0, 0, 7); x.fill() } })
  const winPane = new THREE.Mesh(new THREE.PlaneGeometry(WIN.z1 - WIN.z0, WIN.y1 - WIN.y0), new THREE.MeshBasicMaterial({ map: skyTex, fog: false })); winPane.rotation.y = -Math.PI / 2; winPane.position.set(R.x1 + 5, (WIN.y0 + WIN.y1) / 2, (WIN.z0 + WIN.z1) / 2); scene.add(winPane)
  add(mPlas, rbox(R.x1 - 1, R.x1 + 3, WIN.y0 - 2, WIN.y0, WIN.z0, WIN.z1, 0.3)); add(mPlas, rbox(R.x1 - 1, R.x1 + 3, WIN.y1, WIN.y1 + 2, WIN.z0, WIN.z1, 0.3))
  add(mPlas, rbox(R.x1 - 1, R.x1 + 3, WIN.y0, WIN.y1, (WIN.z0 + WIN.z1) / 2 - 1, (WIN.z0 + WIN.z1) / 2 + 1, 0.3))
  // カーテンは波打つ布（窓の真ん中を少し開ける）
  const mkCurtain = (z0, z1) => {
    const L = z1 - z0, g = new THREE.PlaneGeometry(L, F.curtain.y1 - F.curtain.y0, 72, 10)
    const p = g.attributes.position, uv = g.attributes.uv
    for (let i = 0; i < p.count; i++) {
      const u = p.getX(i), v = p.getY(i)
      const k = 3.2 + 0.7 * Math.sin(v * 0.03)
      const w = Math.sin((u / L) * Math.PI * 24 + Math.sin(v * 0.02) * 0.5) * k
      p.setXYZ(i, F.curtain.x0 + 2 + w, (F.curtain.y0 + F.curtain.y1) / 2 + v, (z0 + z1) / 2 + u)
      uv.setXY(i, u * 0.02, v * 0.02)
    }
    g.computeVertexNormals(); return g
  }
  add(mCurt, mkCurtain(F.curtain.z0, 368)); add(mCurt, mkCurtain(402, F.curtain.z1))
  add(mSteel, cyl(1.4, 1.4, F.curtain.z1 - F.curtain.z0 + 20, 164, 171, (F.curtain.z0 + F.curtain.z1) / 2, 10, [Math.PI / 2, 0, 0]))
  // カーテンの開いた所にも掛けられるよう当たりはつながっている（見た目より広い）ので、すき間にレースを下げる
  const lace = new THREE.Mesh(new THREE.PlaneGeometry(34, 166), new THREE.MeshStandardMaterial({ color: 0xf6f3e8, transparent: true, opacity: 0.55, side: THREE.DoubleSide, roughness: 1, depthWrite: false })); lace.rotation.y = -Math.PI / 2; lace.position.set(162, 87, 385); scene.add(lace)

  // ---- ソファ
  add(mSofa, fbox(F.sofaBase, 3)); add(mSofa, fbox(F.sofaBack, 5)); add(mSofa, fbox(F.sofaArmN, 5)); add(mSofa, fbox(F.sofaArmS, 5))
  for (let i = 0; i < 3; i++) {
    const a = 88 + i * 38.6, b = a + 37.4
    add(mSofa, rbox(-148, -99, 30, 37, a, b, 3.2))     // 座面のクッション
    add(mSofa, rbox(-149, -138, 36, 67, a + 0.5, b - 0.5, 4.2))   // 背のクッション
  }
  { const pip = M('sofapipe', { color: 0x7a6541, roughness: 1 }); add(pip, rbox(-100.6, -99.6, 22, 23.2, 70, 220, 0.4, 1)); add(pip, rbox(-100.6, -99.6, 3, 4.2, 70, 220, 0.4, 1)); for (const z of [88, 126.6, 165.2, 202]) add(pip, rbox(-100.6, -99.6, 4, 30, z - 0.3, z + 0.3, 0.1, 1)) }
  // 座面のすき間に落ちた物（小銭・ペン）
  add(M('pen', { color: 0x2954a5, roughness: 0.3 }), cyl(0.9, 0.9, 22, -112, 37.6, 123, 8, [Math.PI / 2 - 0.1, 0, 0]))
  // ひざ掛け
  const mBlanket = M('blanket', { map: canvasTex(256, 256, (x, w, h) => { x.fillStyle = '#b5524a'; x.fillRect(0, 0, w, h); x.strokeStyle = '#eddcae'; x.lineWidth = 7; for (let i = 0; i < 6; i++) { x.beginPath(); x.moveTo(0, i * 44 + 16); x.lineTo(w, i * 44 + 16); x.moveTo(i * 44 + 16, 0); x.lineTo(i * 44 + 16, h); x.stroke() } }, { repeat: true }), roughness: 1 })
  add(mBlanket, rbox(-137, -100, 37, 38.4, 158, 192, 0.5, 1, 0.03)); add(mBlanket, rbox(-100.8, -99.4, 12, 38, 158, 192, 0.5, 1, 0.03))

  // ---- ローテーブル
  add(mLight, fbox(F.table, 0.8))
  for (const [a, b] of [[F.table.x0 + 3, F.table.z0 + 3], [F.table.x1 - 3, F.table.z0 + 3], [F.table.x0 + 3, F.table.z1 - 3], [F.table.x1 - 3, F.table.z1 - 3]]) add(mLight, cyl(2.2, 1.6, 24, a, 12, b, 10))
  // ポテチの袋（銀の裏地を上に）
  const chipsTex = canvasTex(256, 280, (x, w, h) => { const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, '#e2b52c'); g.addColorStop(1, '#c6722a'); x.fillStyle = g; x.fillRect(0, 0, w, h); x.fillStyle = '#7a1e14'; x.font = 'bold 64px "BIZ UDPGothic",sans-serif'; x.textAlign = 'center'; x.fillText('うす塩', w / 2, 96); x.font = 'bold 26px "BIZ UDPGothic",sans-serif'; x.fillText('おとん用 食べるな', w / 2, 144); x.fillStyle = 'rgba(255,240,180,.9)'; for (let i = 0; i < 7; i++) { x.beginPath(); x.ellipse(50 + i * 30, 210 + (i % 2) * 22, 26, 16, i, 0, 7); x.fill() } })
  const mChips = M('chips', { map: chipsTex, roughness: 0.35, metalness: 0.2 })
  { const g = rbox(F.chips.x0, F.chips.x1, F.chips.y0, F.chips.y1, F.chips.z0, F.chips.z1, 3.5, 3, 0); const uv = g.attributes.uv, p = g.attributes.position, n = g.attributes.normal; for (let i = 0; i < uv.count; i++) { uv.setXY(i, (p.getX(i) - F.chips.x0) / (F.chips.x1 - F.chips.x0), (p.getY(i) - F.chips.y0) / (F.chips.y1 - F.chips.y0)); const b = 1 + 0.22 * Math.sin((p.getY(i) - F.chips.y0) / 24 * Math.PI); const cz = (F.chips.z0 + F.chips.z1) / 2; p.setZ(i, cz + (p.getZ(i) - cz) * b) } add(mChips, g) }
  // リモコン
  add(mBlack, rbox(-24, -14, 28, 30.4, 112, 136, 0.7, 1))
  for (let i = 0; i < 12; i++) add(M('btn', { color: 0xb8b8b4, roughness: 0.5 }), rbox(-23 + (i % 3) * 3, -21.6 + (i % 3) * 3, 30.3, 30.7, 115 + Math.floor(i / 3) * 4.4, 117 + Math.floor(i / 3) * 4.4, 0.2, 1))

  // ---- 段ボール（通販の）
  add(mCard, fbox(F.amazon, 0.6, 0.012))
  add(M('tape', { color: 0xc8ad78, roughness: 0.3 }), rbox(F.amazon.x0 - 0.1, F.amazon.x1 + 0.1, F.amazon.y1 - 0.05, F.amazon.y1 + 0.18, 34, 42, 0.05, 1))
  flat(26, 16, -39, 16, F.amazon.z1 + 0.15, Math.PI, canvasTex(260, 160, (x, w, h) => { x.fillStyle = '#fff'; x.fillRect(0, 0, w, h); x.fillStyle = '#222'; x.font = 'bold 22px "BIZ UDPGothic",sans-serif'; x.fillText('お届け先', 12, 30); x.font = '19px "BIZ UDPGothic",sans-serif'; x.fillText('おかん様', 12, 62); x.fillText('品名: 健康マット', 12, 90); x.fillText('4枚目', 12, 118) }))

  // ---- ヨーグルト（すべての元凶）とスプーン
  const yx = (F.yogurt.x0 + F.yogurt.x1) / 2, yz = (F.yogurt.z0 + F.yogurt.z1) / 2
  const yt = canvasTex(512, 200, (x, w, h) => { x.fillStyle = '#f7f2e6'; x.fillRect(0, 0, w, h); x.fillStyle = '#2f6d9e'; x.fillRect(0, 0, w, 44); x.fillStyle = '#fff'; x.font = 'bold 30px "BIZ UDPGothic",sans-serif'; x.fillText('プレーン ヨーグルト', 40, 33); x.fillStyle = '#b5271a'; x.font = 'bold 40px "BIZ UDPGothic",sans-serif'; x.fillText('賞味期限 2019.03', 60, 118); x.fillStyle = '#333'; x.font = '22px "BIZ UDPGothic",sans-serif'; x.fillText('おいしく食べられる期限です', 60, 158) })
  const ycup = new THREE.Mesh(new THREE.CylinderGeometry(9, 7, 13, 28, 1, true), new THREE.MeshStandardMaterial({ map: yt, side: THREE.DoubleSide, roughness: 0.45 })); ycup.position.set(yx, 6.5, yz); ycup.rotation.y = 1.2; ycup.castShadow = true; scene.add(ycup)
  const ybot = new THREE.Mesh(new THREE.CircleGeometry(7, 20), M('yb', { color: 0xf5f0e4 })); ybot.rotation.x = -Math.PI / 2; ybot.position.set(yx, 0.5, yz); scene.add(ybot)
  add(mSteel, rbox(66, 96, 0.3, 1.2, 36, 39, 0.3, 1)); { const s = new THREE.SphereGeometry(5, 14, 8).scale(1.25, 0.26, 0.85).translate(100, 1.4, 37.5); add(mSteel, s) }

  // ---- テレビ台とテレビ
  add(mDark, fbox(F.tvStand, 0.8, 0.012))
  for (let i = 0; i < 3; i++) add(M('tvdoor', { color: 0x3a2517, roughness: 0.4 }), rbox(124.4, 125.2, 4, 32, 84 + i * 41.5, 124 + i * 41.5, 0.2, 1))
  add(mBlack, fbox(F.tv, 1)); add(mBlack, rbox(146, 160, 36, 38, 130, 160, 0.5))
  const tvTex = canvasTex(512, 300, (x, w, h) => { const g = x.createLinearGradient(0, 0, w, h); g.addColorStop(0, '#2d6fa6'); g.addColorStop(1, '#8ad0dc'); x.fillStyle = g; x.fillRect(0, 0, w, h); x.fillStyle = '#c63c28'; x.fillRect(0, h - 74, w, 74); x.fillStyle = '#fff'; x.font = 'bold 34px "BIZ UDPGothic",sans-serif'; x.fillText('今日の特集 実家の冷蔵庫', 18, h - 26); x.font = 'bold 50px "BIZ UDPGothic",sans-serif'; x.fillText('賞味期限は', 24, 80); x.fillText('飾りなのか', 24, 142); x.fillStyle = 'rgba(255,255,255,.9)'; x.beginPath(); x.ellipse(404, 150, 62, 70, 0, 0, 7); x.fill(); x.fillStyle = '#23262d'; x.beginPath(); x.arc(380, 130, 7, 0, 7); x.arc(428, 130, 7, 0, 7); x.fill(); x.fillRect(388, 172, 34, 5) })
  flat(F.tv.z1 - F.tv.z0 - 4, F.tv.y1 - F.tv.y0 - 4, F.tv.x0 - 0.15, (F.tv.y0 + F.tv.y1) / 2, (F.tv.z0 + F.tv.z1) / 2, -Math.PI / 2, tvTex, { em: 0.9, rough: 0.2 })

  // ---- 本棚
  const S = F.shelf
  add(mDark, rbox(S.x0, S.x1, S.y0, S.y1, S.z0, S.z0 + 3, 0.5, 1, 0.012)); add(mDark, rbox(S.x0, S.x1, S.y0, S.y1, S.z1 - 3, S.z1, 0.5, 1, 0.012))
  add(mDark, rbox(S.x0, S.x1 - 4, S.y0, S.y1, S.z0, S.z1, 0.5, 1, 0.012))
  add(mDark, rbox(S.x0, S.x1 + 3, S.y1 - 2, S.y1, S.z0 - 1, S.z1 + 1, 0.5, 1, 0.012))
  for (const y of [0, ...SHELF_Y]) add(mDark, rbox(S.x1 - 4, S.x1 + 7, y === 0 ? 0 : y - 2, y === 0 ? 4 : y, S.z0, S.z1, 0.4, 1, 0.012))
  const TITLES = ['実家の片づけ方', '痩せる呼吸', '確定申告の本', '嫁と姑', '男の料理', '釣り入門', '家庭の医学', '毒舌占い', '腰痛を治す', '英会話三日目', '定年のあとに', '健康マット教本', '宇宙人と結婚した', '人生の棚卸し', '老眼と生きる', '電話の断り方', '世界の猫', '猫の気持ち', 'おとんの俳句', '節約大全', '町内会の掟', '聖書', '株で失敗', 'ムー', '地図帳']
  const COLS = ['#7a2e24', '#27456b', '#2f5b3c', '#b5923f', '#ddd4bd', '#3b3a3f', '#8d5a2e', '#5b2e55', '#c9c0a9', '#46708a', '#a3412f']
  const booksTex = canvasTex(1024, 256, (x, w, h) => {
    x.fillStyle = '#20140c'; x.fillRect(0, 0, w, h)
    let px = 0
    while (px < w) {
      const bw = 26 + rnd() * 26, bh = h * (0.72 + rnd() * 0.28), c = COLS[Math.floor(rnd() * COLS.length)]
      x.fillStyle = c; x.fillRect(px, h - bh, bw - 1.5, bh)
      x.fillStyle = 'rgba(0,0,0,.2)'; x.fillRect(px + bw - 5, h - bh, 3.5, bh); x.fillStyle = 'rgba(255,255,255,.1)'; x.fillRect(px, h - bh, 3, bh)
      const t = TITLES[Math.floor(rnd() * TITLES.length)]
      x.fillStyle = c === '#ddd4bd' || c === '#c9c0a9' || c === '#b5923f' ? '#1f1812' : '#f2ead7'
      x.font = `bold ${Math.min(21, bw * 0.62)}px "BIZ UDPGothic",sans-serif`; x.textAlign = 'center'
      for (let i = 0; i < t.length && (i + 1) * 21 < bh - 8; i++) x.fillText(t[i], px + bw / 2, h - bh + 26 + i * 21)
      px += bw
    }
  })
  booksTex.wrapS = THREE.RepeatWrapping
  const rows = [0, ...SHELF_Y]
  for (let i = 0; i < rows.length; i++) {
    const y0 = rows[i] + 2, y1 = (rows[i + 1] ?? S.y1 - 2) - 2
    const tx = booksTex.clone(); tx.repeat.set(1, 1); tx.offset.x = i * 0.27; tx.needsUpdate = true
    flat(S.z1 - S.z0 - 6, y1 - y0, S.x1 - 3.9, (y0 + y1) / 2, (S.z0 + S.z1) / 2, Math.PI / 2, tx, { rough: 0.7 })
  }
  // 本棚の上: こけしと古い箱
  add(mCard, rbox(-168, -146, 135, 150, 280, 304, 0.5, 1, 0.012))
  { const k = M('kokeshi', { color: 0xe1c28f, roughness: 0.6 }); add(k, cyl(4, 5.6, 14, -142, 142, 235, 12)); const hd = new THREE.SphereGeometry(5, 12, 10).translate(-142, 153, 235); add(k, hd); const hr = new THREE.SphereGeometry(5.2, 12, 8, 0, Math.PI * 2, 0, 1.6).translate(-142, 153.4, 235); add(mBlack, hr) }

  // ---- 食卓
  add(mLight, fbox(F.dining, 0.8))
  for (const [a, b] of [[F.dining.x0 + 5, F.dining.z0 + 5], [F.dining.x1 - 5, F.dining.z0 + 5], [F.dining.x0 + 5, F.dining.z1 - 5], [F.dining.x1 - 5, F.dining.z1 - 5]]) add(mLight, cyl(2.4, 1.8, 50, a, 25, b, 10))
  flat(F.tissue.x1 - F.tissue.x0, F.tissue.y1 - F.tissue.y0, (F.tissue.x0 + F.tissue.x1) / 2, (F.tissue.y0 + F.tissue.y1) / 2, F.tissue.z1 + 0.1, 0, canvasTex(256, 140, (x, w, h) => { x.fillStyle = '#e8d8cc'; x.fillRect(0, 0, w, h); x.fillStyle = '#b25f72'; for (let i = 0; i < 12; i++) { x.beginPath(); x.arc(rnd() * w, rnd() * h, 7 + rnd() * 8, 0, 7); x.fill() } x.fillStyle = '#433'; x.font = 'bold 28px "BIZ UDPGothic",sans-serif'; x.textAlign = 'center'; x.fillText('ティッシュ', w / 2, h / 2 + 10) }))
  add(M('tissuebox', { color: 0xe8d8cc, roughness: 0.75 }), fbox(F.tissue, 0.4))
  { const t = new THREE.Mesh(new THREE.ConeGeometry(4, 9, 4), M('tis', { color: 0xfafafa, roughness: 1 })); t.position.set((F.tissue.x0 + F.tissue.x1) / 2, F.tissue.y1 + 3.8, (F.tissue.z0 + F.tissue.z1) / 2); t.rotation.set(0.2, 0.6, 0.1); t.scale.set(1.7, 1, 0.3); scene.add(t) }
  // 湯のみ・急須
  const mTea = M('tea', { color: 0x3e5a55, roughness: 0.35 }); add(mTea, cyl(4, 3.2, 8, -42, 58, 326, 14)); add(mTea, cyl(4, 3.2, 8, -103, 58, 356, 14)); { const g = new THREE.SphereGeometry(9, 16, 12).scale(1, 0.85, 1).translate(-38, 61.5, 350); add(M('teapot', { color: 0x4a3226, roughness: 0.4 }), g) }
  // 椅子
  add(mLight, fbox(F.chairSeat, 0.8)); add(mLight, fbox(F.chairBack, 0.5))
  for (const [a, b] of [[F.chairSeat.x0 + 2, F.chairSeat.z0 + 2], [F.chairSeat.x1 - 2, F.chairSeat.z0 + 2], [F.chairSeat.x0 + 2, F.chairSeat.z1 - 2], [F.chairSeat.x1 - 2, F.chairSeat.z1 - 2]]) add(mLight, cyl(1.5, 1.2, 33, a, 16.5, b, 8))

  // ---- 吊り下げ照明（コード＋かさ）
  const pendant = (o) => {
    const x = (o.x0 + o.x1) / 2, z = (o.z0 + o.z1) / 2, rad = (o.x1 - o.x0) / 2
    add(mBlack, cyl(0.5, 0.5, H - o.y1, x, (H + o.y1) / 2, z, 6))
    const g = new THREE.CylinderGeometry(rad * 0.35, rad, o.y1 - o.y0, 22, 1, true).translate(x, (o.y0 + o.y1) / 2, z)
    add(M('shade', { color: 0xb46c3c, roughness: 0.55, side: THREE.DoubleSide }), g)
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(rad * 0.3, 12, 8), mGlow); bulb.position.set(x, o.y0 + 3, z); scene.add(bulb)
  }
  pendant(F.pendantA); pendant(F.pendantB)
  // シーリングライト
  for (const l of [LIGHT_L, LIGHT_K]) {
    const g = new THREE.SphereGeometry(30, 28, 8, 0, Math.PI * 2, 0, Math.PI / 2).scale(1, 0.25, 1).rotateX(Math.PI).translate(l.x, H, l.z)
    const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: 0xfff5dd, emissive: 0xfff0d0, emissiveIntensity: 0.65, roughness: 0.6 })); scene.add(m)
  }
  // 室内物干しのワイヤーと洗濯物
  add(mSteel, cyl(0.45, 0.45, R.x1 - R.x0, 0, LINE.y, LINE.z, 6, [0, 0, Math.PI / 2]))
  const cloth = (draw, w, h, x, ry) => {
    const g = new THREE.PlaneGeometry(w, h, 14, 8), p = g.attributes.position
    for (let i = 0; i < p.count; i++) p.setZ(i, Math.sin(p.getX(i) * 0.26 + p.getY(i) * 0.14) * 1.8 + Math.sin(p.getY(i) * 0.3) * 1.2)
    g.computeVertexNormals()
    const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ map: canvasTex(256, 256, draw), side: THREE.DoubleSide, roughness: 1, transparent: true, alphaTest: 0.5 }))
    m.position.set(x, LINE.y - h / 2, LINE.z); m.rotation.y = ry; m.castShadow = true; scene.add(m)
    add(M('peg', { color: 0x3b7cc2, roughness: 0.4 }), rbox(x - 1.2, x + 1.2, LINE.y - 2.2, LINE.y + 2.4, LINE.z - 0.7, LINE.z + 0.7, 0.3, 1))
  }
  const brief = (col, line) => (x, w, h) => { x.fillStyle = col; x.beginPath(); x.moveTo(8, 10); x.lineTo(w - 8, 10); x.lineTo(w - 12, 90); x.quadraticCurveTo(w - 60, 120, w / 2 + 26, 236); x.lineTo(w / 2 - 26, 236); x.quadraticCurveTo(60, 120, 12, 90); x.closePath(); x.fill(); x.fillStyle = line; x.fillRect(8, 10, w - 16, 22); x.strokeStyle = 'rgba(0,0,0,.25)'; x.lineWidth = 4; x.beginPath(); x.moveTo(w / 2 - 12, 50); x.lineTo(w / 2 - 12, 160); x.moveTo(w / 2 + 12, 50); x.lineTo(w / 2 + 12, 160); x.stroke() }
  cloth(brief('#f4f2ea', '#c7c2b2'), 44, 40, -92, 0.02)
  cloth(brief('#2a3f6b', '#121c33'), 44, 40, 96, -0.04)
  cloth((x, w, h) => { x.fillStyle = '#e8e3d4'; x.beginPath(); x.moveTo(70, 6); x.lineTo(186, 6); x.lineTo(182, 150); x.quadraticCurveTo(180, 240, 90, 246); x.quadraticCurveTo(46, 244, 50, 210); x.quadraticCurveTo(70, 180, 72, 150); x.closePath(); x.fill(); x.fillStyle = '#b13a32'; x.fillRect(70, 6, 116, 18); x.fillStyle = '#2e4d7a'; x.fillRect(70, 30, 116, 12) }, 26, 44, -30, 0)
  cloth((x, w, h) => { x.fillStyle = '#e9b8c6'; x.fillRect(40, 8, 176, 240); x.fillStyle = 'rgba(180,70,90,.4)'; for (let i = 0; i < 40; i++) { x.beginPath(); x.arc(40 + rnd() * 176, 8 + rnd() * 240, 5, 0, 7); x.fill() } x.clearRect(0, 0, 40, 30); x.clearRect(216, 0, 40, 30) }, 48, 62, 28, 0.03)

  // ---- 冷蔵庫（側面はつるつる）
  const FR = F.fridge
  add(M('fridge', { color: 0xdfe4e6, metalness: 0.25, roughness: 0.22 }), rbox(FR.x0, FR.x1, FR.y0, FR.y1, FR.z0, FR.z1, 2.6, 2))
  add(mBlack, rbox(FR.x0 - 0.2, FR.x1 + 0.2, 80, 81.2, FR.z0 - 0.2, FR.z1 - 2, 0.1, 1))
  // 扉の面（台所の側 = z0 の面）に貼り紙
  const doorTex = canvasTex(512, 1024, (x, w, h) => {
    x.clearRect(0, 0, w, h)
    x.fillStyle = '#fbf6df'; x.fillRect(70, 110, 170, 210); x.fillStyle = '#c8392e'; x.beginPath(); x.arc(155, 112, 16, 0, 7); x.fill()
    x.fillStyle = '#322'; x.font = 'bold 22px "Klee One",serif'; ['牛乳', 'たまご', 'ヨーグルト', '（賞味期限', '　みること）'].forEach((t, i) => x.fillText(t, 88, 168 + i * 32))
    x.fillStyle = '#fff'; x.fillRect(280, 170, 170, 130); x.fillStyle = '#e8ba2d'; x.beginPath(); x.arc(365, 172, 15, 0, 7); x.fill(); x.fillStyle = '#d36b2b'; x.beginPath(); x.arc(365, 235, 40, 0, 7); x.fill(); x.fillStyle = '#222'; x.beginPath(); x.arc(350, 228, 5, 0, 7); x.arc(380, 228, 5, 0, 7); x.fill()
    x.fillStyle = '#2d8c5a'; x.fillRect(90, 620, 330, 190); x.fillStyle = '#fff'; x.font = 'bold 32px "BIZ UDPGothic",sans-serif'; x.fillText('ゴミの日', 110, 672); x.font = 'bold 26px "BIZ UDPGothic",sans-serif'; x.fillText('月木 燃やす', 110, 720); x.fillText('金 ペットボトル', 110, 760)
  })
  flat(FR.x1 - FR.x0 - 6, FR.y1 - FR.y0, (FR.x0 + FR.x1) / 2, (FR.y0 + FR.y1) / 2, FR.z0 - 0.15, Math.PI, doorTex, { alpha: true, rough: 0.5 })
  add(mSteel, rbox(FR.x0 + 3, FR.x0 + 5, 84, 118, FR.z0 - 2, FR.z0, 0.4, 1)); add(mSteel, rbox(FR.x0 + 3, FR.x0 + 5, 30, 76, FR.z0 - 2, FR.z0, 0.4, 1))
  // 冷蔵庫の上: 段ボール、綿ぼこり
  add(mCard, fbox(F.fridgeBox, 0.5, 0.012))

  // ---- 台所
  const C = F.counter
  add(mKit, fbox(C, 0.8, 0.012))
  add(M('top', { color: 0x9aa0a0, metalness: 0.5, roughness: 0.3 }), rbox(C.x0, C.x1, C.y1 - 2, C.y1 + 0.2, C.z0 - 1, C.z1, 0.4, 1))
  for (let i = 0; i < 7; i++) {
    const a = C.x0 + 2 + i * 38.8
    add(M('kdoor', { color: 0xd8cdb2, roughness: 0.4 }), rbox(a, a + 37, 6, 56, C.z0 - 0.5, C.z0, 0.25, 1))
    add(mSteel, rbox(a + 15, a + 23, 48, 49.2, C.z0 - 1.6, C.z0 - 0.4, 0.2, 1))
  }
  // 流し・コンロ
  add(mBlack, rbox(-110, -60, 64.1, 64.5, 496, 532, 0.1, 1)); for (const [a, b] of [[-98, 508], [-74, 508], [-98, 524], [-74, 524]]) add(M('burner', { color: 0x4b4b4b, roughness: 0.5 }), cyl(6.5, 6.5, 0.8, a, 64.9, b, 16))
  const pot = new THREE.CylinderGeometry(9, 9, 11, 22).translate(-74, 71, 509); add(mSteel, pot)
  add(mSteel, rbox(-155, -125, 64.1, 64.6, 496, 530, 0.2, 1)); add(mSteel, cyl(0.9, 0.9, 16, -140, 72, 532, 8))
  // 炊飯器・電子レンジ
  { const k = F.cooker; const b = new THREE.CylinderGeometry(12.5, 13, k.y1 - k.y0, 24).translate((k.x0 + k.x1) / 2, (k.y0 + k.y1) / 2, (k.z0 + k.z1) / 2); add(mWhite, b); const lid = new THREE.SphereGeometry(13, 22, 8, 0, Math.PI * 2, 0, Math.PI / 2).scale(1, 0.3, 1).translate((k.x0 + k.x1) / 2, k.y1, (k.z0 + k.z1) / 2); add(mPlas, lid) }
  add(mWhite, fbox(F.micro, 1.6)); add(mBlack, rbox(F.micro.x0 + 3, F.micro.x1 - 12, 67, 89, F.micro.z0 - 0.3, F.micro.z0, 0.3, 1))
  // 上の棚
  const U = F.upper
  add(mKit, fbox(U, 0.8, 0.012))
  for (let i = 0; i < 7; i++) { const a = U.x0 + 2 + i * 38.8; add(M('kdoor', { color: 0xd8cdb2, roughness: 0.4 }), rbox(a, a + 37, U.y0 + 2, U.y1 - 2, U.z0 - 0.5, U.z0, 0.25, 1)); add(mSteel, rbox(a + 15, a + 23, U.y0 + 5, U.y0 + 6, U.z0 - 1.6, U.z0 - 0.4, 0.2, 1)) }
  // 棚の上（ほこりをかぶった物）
  add(mCard, rbox(-160, -120, 150, 165, 520, 538, 0.4, 1, 0.012)); add(M('bottle', { color: 0x2e5a3a, roughness: 0.25 }), cyl(3, 3, 18, -90, 159, 530, 10)); add(M('bottle2', { color: 0x5e2c1e, roughness: 0.25 }), cyl(3, 3, 14, -78, 157, 528, 10))
  // ウォーターサーバー
  const SV = F.server
  add(mWhite, fbox(SV, 2)); { const b = new THREE.Mesh(new THREE.CylinderGeometry(13, 13, 28, 20), new THREE.MeshStandardMaterial({ color: 0x8ec5d9, transparent: true, opacity: 0.6, roughness: 0.15 })); b.position.set((SV.x0 + SV.x1) / 2, SV.y1 + 14, (SV.z0 + SV.z1) / 2); scene.add(b) }

  // ---- ぶら下がり健康器（コート掛けになっている）
  const mTube = M('tube', { color: 0x9aa4ab, metalness: 0.75, roughness: 0.35 })
  for (const o of [F.hangL, F.hangR]) { const x = (o.x0 + o.x1) / 2, z = (o.z0 + o.z1) / 2; add(mTube, cyl(1.5, 1.5, o.y1, x, o.y1 / 2, z, 10)); add(mTube, cyl(1.5, 1.5, 40, x, 1.5, z, 10, [Math.PI / 2, 0, 0])) }
  add(mTube, cyl(1.5, 1.5, 44, 92, 148, 120, 10, [0, 0, Math.PI / 2]))
  for (const [x, c] of [[84, '#54483b'], [100, '#7c3b36']]) { const coat = rbox(x - 7, x + 7, 96, 146, 118, 122, 1.2, 1); add(M('coat' + c, { color: new THREE.Color(c).getHex(), roughness: 1 }), coat) }
  // ---- 室内物干しのスタンド
  add(mSteel, cyl(1.1, 1.1, 98, 79.5, 49, 270, 8)); add(mSteel, cyl(1.1, 1.1, 98, 128.5, 49, 270, 8)); add(mSteel, cyl(1, 1, 52, 104, 100, 264, 8, [0, 0, Math.PI / 2])); add(mSteel, cyl(1, 1, 52, 104, 100, 276, 8, [0, 0, Math.PI / 2]))
  for (const z of [262, 278]) add(mSteel, cyl(0.9, 0.9, 30, 79.5, 1, z - 0, 6, [0, 0, 0]))
  add(mSteel, rbox(76, 83, 0, 1.6, 255, 285, 0.4, 1)); add(mSteel, rbox(125, 132, 0, 1.6, 255, 285, 0.4, 1))
  // ---- 脚立
  const mLad = M('ladder', { color: 0xd3b94e, metalness: 0.2, roughness: 0.45 })
  add(mLad, fbox(F.ladderTop, 0.4))
  for (const [x, z0, z1] of [[64, 396, 408], [64, 434, 422], [90, 396, 408], [90, 434, 422]]) {
    const dz = z1 - z0, l = Math.hypot(dz, 104), a = Math.atan2(dz, 104)
    add(mLad, rbox(x - 2, x + 2, -l / 2, l / 2, -1, 1, 0.3, 1).rotateX(a).translate(0, 52, (z0 + z1) / 2))
  }
  for (let i = 1; i < 5; i++) { const y = i * 20, t = y / 104; add(mLad, rbox(64, 90, y - 1, y + 1, 396 + 12 * t - 2, 396 + 12 * t + 3, 0.3, 1)) }
  // ---- フロアランプ
  add(mBlack, cyl(10, 11, 2, -40, 1, 240, 22)); add(mBlack, cyl(0.9, 0.9, 104, -40, 54, 240, 8))
  { const o = F.lampShade; const g = new THREE.CylinderGeometry(9, 13, o.y1 - o.y0, 22, 1, true).translate(-40, (o.y0 + o.y1) / 2, 240); const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: 0xf5e7c4, emissive: 0xffd68a, emissiveIntensity: 0.65, side: THREE.DoubleSide, roughness: 1 })); scene.add(m) }
  // ---- 観葉植物
  const P = F.pot
  add(mPot, cyl(12, 9.5, 22, 124, 11, 32, 18)); add(M('soil', { color: 0x2c2118, roughness: 1 }), cyl(11, 11, 0.6, 124, 20.5, 32, 18))
  add(M('stem', { color: 0x5a4a2b, roughness: 1 }), cyl(1.1, 1.5, 62, 124, 52, 32, 8))
  for (let i = 0; i < 22; i++) {
    const a = i * 2.4, h = 40 + i * 2.4, r = 10 + (i % 5) * 3
    const g = new THREE.SphereGeometry(1, 10, 6).scale(13, 0.6, 5.5).rotateZ(-0.28 - (i % 3) * 0.12).rotateY(a).translate(124 + Math.cos(a) * r, h, 32 - Math.sin(a) * r)
    add(mLeaf, g)
  }
  // ---- ダンベル（買って使っていない）
  { const d = F.dumbbell; add(mSteel, cyl(1.6, 1.6, 30, (d.x0 + d.x1) / 2, 4.5, 276, 10, [0, 0, Math.PI / 2])); for (const x of [d.x0 + 3, d.x1 - 3]) add(mBlack, cyl(4.8, 4.8, 6, x, 4.8, 276, 14, [0, 0, Math.PI / 2])) }

  // ---- おとんのゴルフバッグ（使っていない）
  { const o = F.golf, cx = 67, cz = 79
    add(M('golfbag', { color: 0x1f3a63, roughness: 0.55 }), cyl(7, 6.4, 62, cx, 31, cz, 18)); add(M('golfband', { color: 0xc9b36b, roughness: 0.4 }), cyl(7.3, 7.3, 3, cx, 56, cz, 18)); add(M('golfband', {}), cyl(6.8, 6.8, 2, cx, 8, cz, 18))
    for (const [dx, dz, h, c] of [[-3, -2, 80, 0], [2, -3, 86, 1], [3, 2, 76, 0], [-2, 3, 82, 1]]) { add(mSteel, cyl(0.45, 0.45, h - 40, cx + dx, 40 + (h - 40) / 2, cz + dz, 6)); const hd = c ? new THREE.SphereGeometry(2.6, 10, 8).scale(1, 0.8, 1.3).translate(cx + dx, h, cz + dz) : rbox(cx + dx - 2, cx + dx + 2, h - 1.5, h + 1, cz + dz - 2.5, cz + dz + 2.5, 0.4, 1); add(c ? mBlack : mSteel, hd) }
  }
  // ---- キャットタワー
  { const mCarpet = M('carpet', { color: 0x8f8574, roughness: 1 }), mRope = M('sisal', { color: 0xb6976a, roughness: 1 })
    add(mCarpet, fbox(F.towerBase, 1)); add(mCarpet, fbox(F.towerMid, 1)); add(mCarpet, fbox(F.towerTop, 1))
    add(mRope, cyl(4, 4, 104, 51, 56, 205, 14))
    for (let y = 8; y < 106; y += 3.2) add(M('sisal2', { color: 0x98794f, roughness: 1 }), new THREE.TorusGeometry(4.1, 0.55, 5, 16).rotateX(Math.PI / 2).translate(51, y, 205))
    // 下がったねずみのおもちゃ
    add(mBlack, cyl(0.2, 0.2, 18, 41, 49, 196, 5)); { const g = new THREE.SphereGeometry(2.2, 10, 8).scale(1, 0.8, 1.5).translate(41, 39, 196); add(M('mouse', { color: 0x9a9a9a, roughness: 1 }), g) }
  }
  // ---- アイロン台（出しっぱなし）とアイロン
  { const pad = M('ironpad', { map: canvasTex(256, 128, (x, w, h) => { x.fillStyle = '#cfd7dc'; x.fillRect(0, 0, w, h); x.strokeStyle = '#8fa4b5'; x.lineWidth = 5; for (let i = 0; i < 9; i++) { x.beginPath(); x.moveTo(i * 32, 0); x.lineTo(i * 32 - 40, h); x.stroke() } }, { repeat: true }), roughness: 1 })
    add(pad, fbox(F.ironBoard, 1.2, 0.025)); add(mSteel, fbox(F.ironLegA, 0.4)); add(mSteel, fbox(F.ironLegB, 0.4))
    const iron = new THREE.SphereGeometry(1, 14, 8).scale(6, 3, 11).translate(48, 62, 342); add(mWhite, iron) }

  // ---- 壁の小物（時計・カレンダー・遺影のように並ぶ家族写真）
  const clockTex = canvasTex(256, 256, (x, w, h) => { x.fillStyle = '#f5efdf'; x.beginPath(); x.arc(w / 2, h / 2, 124, 0, 7); x.fill(); x.lineWidth = 10; x.strokeStyle = '#4b3423'; x.stroke(); x.fillStyle = '#2a2018'; x.font = 'bold 26px "BIZ UDPGothic",sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; for (let i = 1; i <= 12; i++) { const a = i / 12 * 6.283; x.fillText(i, w / 2 + Math.sin(a) * 96, h / 2 - Math.cos(a) * 96) } x.strokeStyle = '#2a2018'; x.lineWidth = 8; x.lineCap = 'round'; x.beginPath(); x.moveTo(w / 2, h / 2); x.lineTo(w / 2 + 44, h / 2 - 30); x.moveTo(w / 2, h / 2); x.lineTo(w / 2 - 20, h / 2 - 80); x.stroke() })
  const ck = flat(52, 52, 80, 125, 0.3, 0, clockTex); ck.material.transparent = true; ck.material.alphaTest = 0.5
  const calTex = canvasTex(256, 360, (x, w, h) => { x.fillStyle = '#fbf8ee'; x.fillRect(0, 0, w, h); x.fillStyle = '#b5352a'; x.fillRect(0, 0, w, 76); x.fillStyle = '#fff'; x.font = 'bold 44px "BIZ UDPGothic",sans-serif'; x.textAlign = 'center'; x.fillText('11月', w / 2, 56); x.fillStyle = '#333'; x.font = 'bold 22px "BIZ UDPGothic",sans-serif'; for (let i = 0; i < 30; i++) x.fillText(i + 1, 28 + (i % 7) * 33, 112 + Math.floor(i / 7) * 42); x.strokeStyle = '#c33'; x.lineWidth = 4; x.beginPath(); x.arc(128, 196, 18, 0, 7); x.stroke(); x.fillStyle = '#c33'; x.font = 'bold 18px "Klee One",serif'; x.fillText('息子 帰省', 128, 322) })
  flat(34, 48, R.x0 + 0.3, 112, 34, Math.PI / 2, calTex)
  const frameTex = col => canvasTex(200, 160, (x, w, h) => { x.fillStyle = '#39281a'; x.fillRect(0, 0, w, h); x.fillStyle = col; x.fillRect(14, 14, w - 28, h - 28); x.fillStyle = 'rgba(40,30,20,.75)'; for (let i = 0; i < 3; i++) { x.beginPath(); x.arc(60 + i * 40, 74, 15, 0, 7); x.fill(); x.fillRect(46 + i * 40, 88, 28, 40) } })
  flat(30, 24, R.x0 + 0.3, 112, 180, Math.PI / 2, frameTex('#9fb7b3')); flat(30, 24, R.x0 + 0.3, 118, 145, Math.PI / 2, frameTex('#c7ad8a')); flat(26, 20, R.x0 + 0.3, 104, 118, Math.PI / 2, frameTex('#a7a48a'))

  // ---- 落ちている物（髪の毛・綿ぼこり・お菓子のかす・輪ゴム）。小さくなると全部大きい
  const mHair = M('hair', { color: 0x17120e, roughness: 0.5 })
  for (let i = 0; i < 26; i++) {
    const x = R.x0 + 14 + rnd() * (R.x1 - R.x0 - 28), z = 10 + rnd() * 470
    const pts = []; let a = rnd() * 6.28, px = x, pz = z
    for (let k = 0; k < 6; k++) { pts.push(new THREE.Vector3(px, 0.25, pz)); a += (rnd() - 0.5) * 1.1; px += Math.cos(a) * 5; pz += Math.sin(a) * 5 }
    add(mHair, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 10, 0.13, 4))
  }
  const mCrumb = M('crumb', { color: 0xc99548, roughness: 0.95 })
  for (let i = 0; i < 36; i++) {
    const g = new THREE.IcosahedronGeometry(0.5 + rnd() * 1.3, 0).scale(1, 0.55 + rnd() * 0.4, 0.9).rotateY(rnd() * 6).translate(-90 + rnd() * 120, 0.5, 60 + rnd() * 170)
    add(mCrumb, g)
  }
  const mBand = M('band', { color: 0xb78d55, roughness: 0.6 })
  for (const [x, z] of [[30, 120], [-90, 300], [110, 340], [-20, 440]]) add(mBand, new THREE.TorusGeometry(6.5, 0.35, 5, 22).rotateX(Math.PI / 2).scale(1, 1, 0.72).translate(x, 0.32, z))
  // 綿ぼこり（ふわふわの粒）
  const dustTex = canvasTex(128, 128, (x, w, h) => { x.clearRect(0, 0, w, h); x.fillStyle = 'rgba(165,156,142,.0)'; const gg = x.createRadialGradient(64, 64, 6, 64, 64, 56); gg.addColorStop(0, 'rgba(170,160,146,.85)'); gg.addColorStop(0.7, 'rgba(170,160,146,.45)'); gg.addColorStop(1, 'rgba(170,160,146,0)'); x.fillStyle = gg; x.fillRect(0, 0, w, h); for (let i = 0; i < 420; i++) { const a = rnd() * 6.28, r = Math.pow(rnd(), 0.6) * 54; x.strokeStyle = `rgba(190,182,168,${0.16 + rnd() * 0.22})`; x.lineWidth = 0.7; x.beginPath(); const px = 64 + Math.cos(a) * r, py = 64 + Math.sin(a) * r; x.moveTo(px, py); x.lineTo(px + (rnd() - 0.5) * 26, py + (rnd() - 0.5) * 26); x.stroke() } })
  const dustMat = new THREE.SpriteMaterial({ map: dustTex, transparent: true, depthWrite: false })
  for (const [x, y, z, s] of [[-92, 4.5, 26, 10], [152, 4, 250, 8], [-155, 4, 325, 10], [10, 3.6, 470, 8], [110, 3.6, 462, 9], [140, 139, 492, 10], [118, 138, 500, 7], [-30, 153, 530, 10], [40, 3, 225, 6]]) { const sp = new THREE.Sprite(dustMat); sp.position.set(x, y, z); sp.scale.setScalar(s); scene.add(sp) }

  // ---- 敷物（毛足を1本ずつ。ここが「体が2cm」を一番見せる）
  const RX0 = -64, RX1 = 76, RZ0 = 60, RZ1 = 215
  const rugTex = TEX.rug()
  const rug = new THREE.Mesh(new THREE.PlaneGeometry(RX1 - RX0, RZ1 - RZ0), new THREE.MeshStandardMaterial({ map: rugTex, roughness: 1 })); rug.rotation.x = -Math.PI / 2; rug.position.set((RX0 + RX1) / 2, 0.25, (RZ0 + RZ1) / 2); rug.receiveShadow = true; scene.add(rug)
  // 毛足は細い三角形を1枚の形にまとめて描く（幅の広い三角はトゲに、板を重ねる方法はドットに見えた）
  const nBlade = LOW ? 36000 : 60000
  const bp = new Float32Array(nBlade * 9), bc = new Float32Array(nBlade * 9)
  { const cv = rugTex.image, img = cv.getContext('2d').getImageData(0, 0, cv.width, cv.height).data
    const lin = v => Math.pow(v / 255, 2.2)
    for (let i = 0; i < nBlade; i++) {
      const x = RX0 + rnd() * (RX1 - RX0), z = RZ0 + rnd() * (RZ1 - RZ0), h = 0.45 + rnd() * 0.45, a = rnd() * 6.28, w = 0.05 + rnd() * 0.035
      const ca = Math.cos(a) * w, sa = Math.sin(a) * w, lx = (rnd() - 0.5) * 0.5, lz = (rnd() - 0.5) * 0.5
      bp.set([x - ca, 0.22, z - sa, x + ca, 0.22, z + sa, x + lx, 0.22 + h, z + lz], i * 9)
      const u = Math.floor((x - RX0) / (RX1 - RX0) * (cv.width - 1)), v = Math.floor((z - RZ0) / (RZ1 - RZ0) * (cv.height - 1)), k = (v * cv.width + u) * 4, t = 0.8 + rnd() * 0.5
      const r = lin(img[k]) * t, g = lin(img[k + 1]) * t, bb = lin(img[k + 2]) * t
      bc.set([r * 0.8, g * 0.8, bb * 0.8, r * 0.8, g * 0.8, bb * 0.8, r * 1.15, g * 1.15, bb * 1.15], i * 9)
    }
  }
  const bladeG = new THREE.BufferGeometry(); bladeG.setAttribute('position', new THREE.BufferAttribute(bp, 3)); bladeG.setAttribute('color', new THREE.BufferAttribute(bc, 3)); bladeG.computeVertexNormals()
  for (let i = 0, n = bladeG.attributes.normal; i < n.count; i++) n.setXYZ(i, 0, 1, 0)   // 毛は全部上から光を受ける（向きでちらつかない）
  const bladeMat = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide })
  // カメラのすぐ前の毛は消す（画面いっぱいの大きな三角に見えて、主人公にかぶる）
  bladeMat.onBeforeCompile = sh => { sh.fragmentShader = sh.fragmentShader.replace('#include <clipping_planes_fragment>', '#include <clipping_planes_fragment>\n if (length(vViewPosition) < 4.0) discard;') }
  const blades = new THREE.Mesh(bladeG, bladeMat); blades.frustumCulled = false; scene.add(blades)

  // ---- 非常口の案内板（道しるべ。緑だけがこの家の主役の色）
  const exitSign = (arrow) => canvasTex(256, 128, (x, w, h) => {
    x.fillStyle = '#00a65a'; x.fillRect(0, 0, w, h); x.strokeStyle = '#f4fff6'; x.lineWidth = 6; x.strokeRect(5, 5, w - 10, h - 10)
    x.fillStyle = '#f4fff6'; drawRunner(x, 72, 66, 1.5)
    if (arrow) { x.beginPath(); x.moveTo(146, 42); x.lineTo(196, 42); x.lineTo(196, 24); x.lineTo(236, 64); x.lineTo(196, 104); x.lineTo(196, 86); x.lineTo(146, 86); x.closePath(); x.fill() }
  })
  const signT = exitSign(true)
  for (const s of SIGNS) { const b = flat(26, 13, s.x, s.y, s.z, s.ry, signT, { em: 1.15 }); b.material.fog = false; b.material.side = THREE.DoubleSide }
  // 非常口（冷蔵庫の上の奥。扉と看板）
  const G = { x: 128, z: 538 }
  const doorT = canvasTex(256, 400, (x, w, h) => { x.fillStyle = '#6c7178'; x.fillRect(0, 0, w, h); x.fillStyle = '#8b9199'; x.fillRect(14, 14, w - 28, h - 14); x.fillStyle = '#d9dce0'; x.fillRect(w - 62, h * 0.52, 38, 12); x.fillStyle = '#c6332b'; x.font = 'bold 36px "BIZ UDPGothic",sans-serif'; x.textAlign = 'center'; x.fillText('開けるな', w / 2, 120); x.font = 'bold 22px "BIZ UDPGothic",sans-serif'; x.fillText('（おかん）', w / 2, 158) })
  const exitDoor = flat(26, 34, G.x, 135 + 17, G.z - 0.5, Math.PI, doorT, { rough: 0.5 })
  const exitPlate = flat(36, 18, G.x, 135 + 44, G.z - 0.8, Math.PI, exitSign(false), { em: 1.5 }); exitPlate.material.fog = false; exitPlate.position.y = 135 + 40
  const exitLight = new THREE.PointLight(0x35e08a, 260, 60, 1.6); exitLight.position.set(G.x, 170, 524); scene.add(exitLight)
  // 床に光る輪（ここまで来れば勝ち）
  const goalRing = new THREE.Mesh(new THREE.RingGeometry(9, 15, 40), new THREE.MeshBasicMaterial({ color: 0x35e08a, transparent: true, opacity: 0.75, side: THREE.DoubleSide, depthWrite: false, fog: false })); goalRing.rotation.x = -Math.PI / 2; goalRing.position.set(128, 135.25, 516); scene.add(goalRing)

  // ---- 窓の光（光の筋と、舞うほこり）
  const shaft = canvasTex(64, 256, (x, w, h) => { const g = x.createLinearGradient(0, 0, 0, h); g.addColorStop(0, 'rgba(255,240,205,.17)'); g.addColorStop(1, 'rgba(255,240,205,0)'); x.fillStyle = g; x.fillRect(0, 0, w, h); x.globalCompositeOperation = 'destination-in'; const e = x.createLinearGradient(0, 0, w, 0); e.addColorStop(0, 'rgba(0,0,0,0)'); e.addColorStop(0.5, '#000'); e.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = e; x.fillRect(0, 0, w, h) })
  const shaftMat = new THREE.MeshBasicMaterial({ map: shaft, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false })
  for (const [z, w] of [[376, 26], [395, 14]]) { const s = new THREE.Mesh(new THREE.PlaneGeometry(w, 300), shaftMat); s.position.set(70, 72, z); s.rotation.z = Math.PI / 2 - 0.62; s.rotation.order = 'ZXY'; scene.add(s); const s2 = s.clone(); s2.rotation.x = Math.PI / 2; scene.add(s2) }
  const moteN = LOW ? 420 : 800
  const moteG = new THREE.BufferGeometry(), mp = new Float32Array(moteN * 3)
  for (let i = 0; i < moteN * 3; i += 3) { mp[i] = R.x0 + rnd() * (R.x1 - R.x0); mp[i + 1] = rnd() * H; mp[i + 2] = rnd() * R.z1 }
  moteG.setAttribute('position', new THREE.BufferAttribute(mp, 3))
  const motes = new THREE.Points(moteG, new THREE.PointsMaterial({ color: 0xfff1cf, size: 0.34, transparent: true, opacity: 0.55, depthWrite: false, sizeAttenuation: true }))
  motes.frustumCulled = false; scene.add(motes)

  // ---- 床の落ち影（物の足元を暗く）
  const blob = canvasTex(128, 128, (x, w, h) => { const g = x.createRadialGradient(64, 64, 18, 64, 64, 64); g.addColorStop(0, 'rgba(20,12,4,.55)'); g.addColorStop(0.6, 'rgba(20,12,4,.34)'); g.addColorStop(1, 'rgba(20,12,4,0)'); x.fillStyle = g; x.fillRect(0, 0, w, h) })
  const blobMat = new THREE.MeshBasicMaterial({ map: blob, transparent: true, depthWrite: false, fog: false })
  const blobG = []
  for (const k of ['sofaBase', 'tvStand', 'shelf', 'counter', 'fridge', 'server', 'pot', 'amazon', 'table', 'dining']) {
    const o = F[k], mg = k === 'table' || k === 'dining' ? 2 : 16
    const g = new THREE.PlaneGeometry(o.x1 - o.x0 + mg * 2, o.z1 - o.z0 + mg * 2).rotateX(-Math.PI / 2).translate((o.x0 + o.x1) / 2, 0.08, (o.z0 + o.z1) / 2)
    blobG.push(g)
  }
  const blobs = new THREE.Mesh(mergeGeometries(blobG), blobMat); scene.add(blobs)

  // ---- 材質ごとにまとめる
  let draws = 0
  for (const [mat, list] of parts) {
    for (const g of list) { for (const a of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(a)) g.deleteAttribute(a); if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2)) }
    const m = new THREE.Mesh(mergeGeometries(list), mat); m.castShadow = true; m.receiveShadow = true; scene.add(m); draws++
  }
  return { goalRing, motes, exitLight, exitDoor, draws }
}

// 非常口の走る人（ピクトグラムは形をなぞらず、走る人の骨組みで描く）
export function drawRunner(x, cx, cy, k) {
  x.save(); x.translate(cx, cy); x.scale(k, k); x.lineCap = 'round'; x.lineJoin = 'round'; x.strokeStyle = x.fillStyle; x.lineWidth = 8
  x.beginPath(); x.arc(9, -27, 7, 0, 7); x.fill()
  x.beginPath(); x.moveTo(5, -16); x.lineTo(-2, 4); x.lineTo(14, 13); x.lineTo(10, 30); x.moveTo(-2, 4); x.lineTo(-12, 16); x.lineTo(-26, 16); x.moveTo(4, -14); x.lineTo(17, -7); x.lineTo(26, -13); x.moveTo(4, -14); x.lineTo(-10, -13); x.lineTo(-17, -2); x.stroke()
  x.restore()
}
