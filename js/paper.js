// 結果の紙。負け＝掃除機の紙パック点検票など（捕まった相手で様式が変わる）、勝ち＝冷蔵庫のメモ
// 判定（ハンコ）は drawStamp で後から押す
const INK = '#241c12', RED = '#b5271a', HAND = '"Klee One",serif', GOTH = '"BIZ UDPGothic",sans-serif'
function wrap(x, text, maxW) {
  const out = []; let cur = ''
  for (const ch of text) {
    if (x.measureText(cur + ch).width > maxW && cur) {
      if ('。、？！」）'.includes(ch)) { const last = cur.slice(-1); out.push(cur.slice(0, -1)); cur = last + ch }   // 句読点を行頭に置かない
      else { out.push(cur); cur = ch.trim() }
    } else cur += ch
  }
  if (cur) out.push(cur); return out
}
function wrapEn(x, text, maxW) {
  const out = []; let cur = ''
  for (const w of text.split(' ')) { const n = cur ? cur + ' ' + w : w; if (x.measureText(n).width > maxW && cur) { out.push(cur); cur = w } else cur = n }
  if (cur) out.push(cur); return out
}
const lines = (x, text, maxW, en) => en ? wrapEn(x, text, maxW) : wrap(x, text, maxW)
function grain(x, W, H) { for (let i = 0; i < 2200; i++) { x.fillStyle = Math.random() < 0.5 ? 'rgba(90,70,40,.035)' : 'rgba(255,255,255,.05)'; x.fillRect(Math.random() * W, Math.random() * H, 1 + Math.random() * 2, 1 + Math.random() * 2) } }
function photo(x, img, px, py, w, h, rot) {
  if (!img) return
  x.save(); x.translate(px + w / 2, py + h / 2); x.rotate(rot)
  x.fillStyle = '#fff'; x.shadowColor = 'rgba(0,0,0,.3)'; x.shadowBlur = 10; x.shadowOffsetY = 4; x.fillRect(-w / 2 - 9, -h / 2 - 9, w + 18, h + 18); x.shadowColor = 'transparent'
  const ir = img.width / img.height, r = w / h
  let sw = img.width, sh = img.height; if (ir > r) sw = img.height * r; else sh = img.width / r
  x.drawImage(img, (img.width - sw) / 2, (img.height - sh) / 2, sw, sh, -w / 2, -h / 2, w, h)
  x.fillStyle = 'rgba(214,194,130,.75)'; x.fillRect(-46, -h / 2 - 22, 92, 26)
  x.restore()
}
// おかんの顔（丸いシール）
function faceStamp(x, im, cx, cy, r, rot) {
  if (!im) return
  x.save(); x.translate(cx, cy); x.rotate(rot); x.beginPath(); x.arc(0, 0, r, 0, 7); x.fillStyle = '#fff'; x.fill(); x.clip(); x.drawImage(im, -r, -r, r * 2, r * 2); x.restore()
  x.save(); x.translate(cx, cy); x.strokeStyle = INK; x.lineWidth = 3; x.beginPath(); x.arc(0, 0, r, 0, 7); x.stroke(); x.restore()
}
// d: { lang, won, kind, head, sub, rows:[[label,value]], items:[...], list:[...], note, foot, photo }
export function drawPaper(cv, d) {
  const x = cv.getContext('2d'), W = cv.width, H = cv.height, en = d.lang === 'en'
  x.setTransform(1, 0, 0, 1, 0, 0); x.textAlign = 'left'; x.textBaseline = 'alphabetic'
  if (d.won) {
    // 冷蔵庫の扉の上に貼ったメモ
    const g = x.createLinearGradient(0, 0, W, H); g.addColorStop(0, '#e6eaec'); g.addColorStop(1, '#c7cdd0'); x.fillStyle = g; x.fillRect(0, 0, W, H)
    x.fillStyle = 'rgba(0,0,0,.08)'; x.fillRect(0, 700, W, 3)
    x.save(); x.translate(50, 56); x.rotate(-0.012)
    x.shadowColor = 'rgba(0,0,0,.28)'; x.shadowBlur = 16; x.shadowOffsetY = 6
    x.fillStyle = '#fbf6df'; x.fillRect(0, 0, W - 100, H - 112); x.shadowColor = 'transparent'
    x.strokeStyle = 'rgba(70,110,170,.22)'; x.lineWidth = 2; for (let y = 120; y < H - 130; y += 56) { x.beginPath(); x.moveTo(20, y); x.lineTo(W - 120, y); x.stroke() }
    faceStamp(x, d.face, W - 100 - 96, 74, 62, -0.08)
    x.fillStyle = INK; x.font = `600 ${en ? 38 : 44}px ${HAND}`; x.fillText(d.head, 34, 86)
    x.font = `600 ${en ? 31 : 33}px ${HAND}`
    let y = 160
    for (const l of lines(x, d.note, W - 170, en)) { x.fillText(l, 34, y); y += 56 }
    y = Math.max(y, 400)
    if (d.photo) { photo(x, d.photo, W - 100 - 300, y - 10, 256, 176, 0.04) }
    x.font = `400 26px ${GOTH}`
    let ry = y + 10
    for (const [a, b] of d.rows) { x.fillStyle = '#6a5c44'; x.fillText(a, 34, ry); x.fillStyle = INK; x.font = `700 28px ${GOTH}`; x.fillText(b, 34, ry + 34); x.font = `400 26px ${GOTH}`; ry += 80 }
    ry = Math.max(ry, y + 200) + 10
    if (d.items.length) { x.fillStyle = '#6a5c44'; x.fillText(d.itemsHead, 34, ry); x.fillStyle = INK; x.font = `600 27px ${HAND}`; ry += 38; for (const l of lines(x, d.items.join(en ? ', ' : '、'), W - 170, en)) { x.fillText(l, 34, ry); ry += 36 } }
    x.fillStyle = RED; x.font = `600 28px ${HAND}`; ry += 8
    for (const l of lines(x, d.gag, W - 170, en)) { if (ry < H - 150) { x.fillText(l, 34, ry); ry += 38 } }
    x.fillStyle = INK; x.font = `600 28px ${HAND}`; x.fillText(d.sign, 34, H - 134)
    x.restore()
    // 磁石
    x.fillStyle = '#c8392e'; x.beginPath(); x.arc(W / 2, 56, 26, 0, 7); x.fill(); x.fillStyle = 'rgba(255,255,255,.35)'; x.beginPath(); x.arc(W / 2 - 8, 48, 8, 0, 7); x.fill()
    grain(x, W, H)
  } else {
    // 点検票
    x.fillStyle = d.bg || '#efe7d2'; x.fillRect(0, 0, W, H); grain(x, W, H)
    x.strokeStyle = INK; x.lineWidth = 4; x.strokeRect(26, 26, W - 52, H - 52); x.lineWidth = 1.5; x.strokeRect(34, 34, W - 68, H - 68)
    x.fillStyle = INK; x.font = `700 ${en ? 36 : 42}px ${GOTH}`; x.textAlign = 'center'; x.fillText(d.head, W / 2, 96); x.font = `400 22px ${GOTH}`; x.fillText(d.sub, W / 2, 130); x.textAlign = 'left'
    x.lineWidth = 2; x.beginPath(); x.moveTo(34, 150); x.lineTo(W - 34, 150); x.stroke()
    faceStamp(x, d.face, W - 94, 92, 52, 0.1)
    let y = 150
    for (const [a, b] of d.rows) {
      x.font = `400 24px ${GOTH}`; x.fillStyle = '#5b4e38'; x.fillText(a, 52, y + 42)
      x.font = `700 27px ${GOTH}`; x.fillStyle = INK; x.fillText(b, 232, y + 42)
      y += 62; x.lineWidth = 1; x.beginPath(); x.moveTo(34, y); x.lineTo(W - 34, y); x.stroke()
    }
    y += 40; x.font = `700 24px ${GOTH}`; x.fillStyle = '#5b4e38'; x.fillText(d.listHead, 52, y); y += 40
    x.font = `400 27px ${GOTH}`; x.fillStyle = INK
    const photoOn = d.photo && y + 200 < H - 200
    for (const it of d.list) {
      const you = it.you
      x.font = you ? `700 28px ${GOTH}` : `400 26px ${GOTH}`; x.fillStyle = you ? RED : INK
      x.fillText(it.t, 58, y); x.textAlign = 'right'; x.fillText(it.n, photoOn ? 372 : W - 58, y); x.textAlign = 'left'
      y += 41
    }
    if (photoOn) photo(x, d.photo, W - 318, y - d.list.length * 41 - 26, 256, 180, -0.05)
    y += 22; x.lineWidth = 1; x.beginPath(); x.moveTo(34, y - 24); x.lineTo(W - 34, y - 24); x.stroke()
    if (d.items.length) { x.fillStyle = '#5b4e38'; x.font = `700 22px ${GOTH}`; x.fillText(d.itemsHead, 52, y + 8); x.font = `400 24px ${GOTH}`; x.fillStyle = INK; y += 40; for (const l of lines(x, d.items.join(en ? ', ' : '、'), W - 120, en).slice(0, 2)) { x.fillText(l, 52, y); y += 32 } y += 6 }
    x.fillStyle = '#5b4e38'; x.font = `700 22px ${GOTH}`; x.fillText(d.noteHead, 52, y + 8); y += 42
    x.fillStyle = INK; x.font = `600 29px ${HAND}`
    for (const l of lines(x, d.note, W - 120, en).slice(0, 3)) { x.fillText(l, 52, y); y += 38 }
    x.font = `400 18px ${GOTH}`; x.fillStyle = '#6d6251'; x.fillText(d.foot, 52, H - 52)
  }
}
export function drawStamp(cv, text, col, K = 1, won = false) {
  const x = cv.getContext('2d'), W = cv.width, H = cv.height
  x.save(); x.translate(won ? W - 200 : W - 180, won ? H - 190 : H - 150); x.rotate(-0.2); x.scale(K, K)
  x.strokeStyle = col; x.fillStyle = col; x.lineWidth = 8; x.globalAlpha = 0.86
  const L = text.length, fs = L >= 6 ? 34 : L >= 4 ? 44 : 56, en = /^[A-Za-z !]+$/.test(text), sz = en ? 28 : fs
  x.beginPath(); x.ellipse(0, 0, 124, 66, 0, 0, 7); x.stroke(); x.lineWidth = 3; x.beginPath(); x.ellipse(0, 0, 112, 56, 0, 0, 7); x.stroke()
  x.font = `700 ${sz}px ${GOTH}`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(text, 0, 2)
  x.restore()
}
