# 主人公の5シート（緑背景）を切り抜き、1枚にまとめて img/hero_atlas.webp と js/heroart.js を作る
# ~/tools/pyimg/bin/python art/hero_key.py  切り方は key.py と同じ（紙の白い縁つき）
import numpy as np, os, json
from PIL import Image, ImageFilter
D = os.path.dirname(os.path.abspath(__file__)); OUT = D + '/../'
RIM, SCALE, UNIT, PAD, SHEET_W = 7, 0.55, 700, 10, 1300

def alpha(a):
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    k = g - np.maximum(r, b)
    al = 1 - np.clip((k - 22) / (90 - 22), 0, 1)
    lim = np.maximum(r, b); g2 = np.where(g > lim, lim, g)
    return np.dstack([r, g2, b, al * 255]).clip(0, 255).astype(np.uint8)

def load(src):
    im = Image.fromarray(alpha(np.asarray(Image.open(D + '/raw/' + src + '.png').convert('RGB')).astype(np.float32)), 'RGBA')
    a = im.split()[3].filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(0.7)); im.putalpha(a)
    return im

def paper(im):
    a = im.split()[3]
    rim = a.point(lambda v: 255 if v > 60 else 0).filter(ImageFilter.MaxFilter(RIM * 2 + 1)).filter(ImageFilter.GaussianBlur(1.1))
    p = Image.new('RGBA', im.size, (255, 253, 246, 0)); p.putalpha(rim)
    return Image.alpha_composite(p, im)

# 名前: シート, 切る箱, 消す箱（隣の絵が入る所）
P = {
  'back_stand': ('hero_a', (0, 180, 500, 930), None), 'back_run': ('hero_a', (530, 180, 1000, 930), None), 'back_reach': ('hero_a', (1005, 180, 1536, 930), None),
  'side_stand': ('hero_b', (40, 170, 430, 940), None), 'side_run_a': ('hero_b', (440, 170, 1000, 930), None), 'side_run_b': ('hero_b', (1060, 170, 1500, 940), None),
  'front_stand': ('hero_c', (10, 180, 470, 930), None), 'front_run': ('hero_c', (475, 180, 955, 930), None), 'front_hit': ('hero_c', (960, 200, 1536, 870), None),
  'back_fall': ('hero_d', (0, 240, 510, 840), None), 'back_climb': ('hero_d', (520, 200, 930, 900), (845, 480, 930, 900)), 'flat_down': ('hero_d', (845, 490, 1536, 810), None),
  'side_jump': ('hero_e', (0, 190, 410, 810), None), 'side_dash': ('hero_e', (405, 270, 970, 800), None), 'side_throw': ('hero_e', (970, 210, 1536, 860), None),
}
HAND = ('back_reach', (1465, 295))   # フロスを持つ手（シートの座標）
sheets, parts, poses = {}, {}, {}
for name, (src, box, erase) in P.items():
    base = sheets.setdefault(src, load(src))
    c = base.crop(box)
    if erase:
        ex = (erase[0] - box[0], erase[1] - box[1], erase[2] - box[0], erase[3] - box[1]); c.paste((0, 0, 0, 0), ex)
    # 縁の分を足して切り抜く
    pad = Image.new('RGBA', (c.width + 24, c.height + 24), (0, 0, 0, 0)); pad.paste(c, (12, 12)); pad = paper(pad)
    bb = pad.split()[3].point(lambda v: 255 if v > 24 else 0).getbbox(); pc = pad.crop(bb)
    ox, oy = box[0] - 12 + bb[0], box[1] - 12 + bb[1]
    if name == HAND[0]: hand = [round((HAND[1][0] - ox) / pc.width, 4), round(1 - (HAND[1][1] - oy) / pc.height, 4)]
    parts[name] = pc.resize((round(pc.width * SCALE), round(pc.height * SCALE)), Image.LANCZOS)
    poses[name] = {'uw': round(pc.width / UNIT, 3), 'uh': round(pc.height / UNIT, 3)}
# 棚に詰める（高い順）
x = y = PAD; shelf = 0
for name in sorted(parts, key=lambda n: -parts[n].height):
    im = parts[name]
    if x + im.width + PAD > SHEET_W: x = PAD; y += shelf + PAD; shelf = 0
    poses[name].update(x=x, y=y, w=im.width, h=im.height); x += im.width + PAD; shelf = max(shelf, im.height)
H = y + shelf + PAD
A = Image.new('RGBA', (SHEET_W, H), (255, 253, 246, 0))
for n, im in parts.items(): A.paste(im, (poses[n]['x'], poses[n]['y']))
A.save(OUT + 'img/hero_atlas.webp', quality=86, method=6, alpha_quality=90)
A.convert('RGBA').save(D + '/raw/_atlas_check.png')
print('atlas', A.size, os.path.getsize(OUT + 'img/hero_atlas.webp') // 1024, 'KB', 'hand', hand)
open(OUT + 'js/heroart.js', 'w').write('// art/hero_key.py が作る。x,y,w,h は hero_atlas.webp の中の位置、uw,uh は立ち姿の高さを1とした大きさ、hand はフロスを持つ手（0〜1。下から）\nexport const HERO_ART = ' + json.dumps({'W': SHEET_W, 'H': H, 'hand': hand, 'poses': poses}, separators=(',', ':')) + '\n')
