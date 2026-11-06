# 猫とルンバのシート（緑背景）を切り抜き、1枚にまとめて img/chaser_atlas.webp と js/chaserart.js を作る
# ~/tools/pyimg/bin/python art/chaser_key.py  切り方は key.py と同じ（紙の白い縁つき）
import numpy as np, os, json
from PIL import Image, ImageFilter
D = os.path.dirname(os.path.abspath(__file__)); OUT = D + '/../'
RIM, SCALE, PAD, SHEET_W = 7, 0.62, 10, 1500
CAN_U, NOZ_U, SLP_U = 30 / 458, 18 / 555, 44 / 543
CAT_U, ROM_U = 38 / 480, 27.5 / 450   # 生成画像 1px あたりのゲーム内の長さ（座った猫の高さ 38、ルンバの幅 27.5）

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

# 名前: シート, 切る箱, 消す箱, 1px の長さ
P = {
  'cat_side_rest': ('cat_a', (10, 270, 392, 790), None, CAT_U), 'cat_side_crouch': ('cat_a', (395, 310, 914, 780), None, CAT_U), 'cat_side_leap': ('cat_a', (915, 320, 1536, 712), None, CAT_U),
  'cat_side_swipe': ('cat_b', (10, 210, 560, 830), (528, 440, 560, 830), CAT_U), 'cat_nap': ('cat_b', (525, 440, 1040, 830), None, CAT_U), 'cat_front_rest': ('cat_b', (1070, 220, 1510, 850), None, CAT_U),
  'cat_front_crouch': ('cat_c', (20, 240, 458, 850), None, CAT_U), 'cat_front_leap': ('cat_c', (490, 210, 1045, 810), None, CAT_U), 'cat_back_crouch': ('cat_c', (1060, 230, 1500, 850), None, CAT_U),
  'cat_box': ('cat_d', (10, 280, 515, 790), None, CAT_U), 'cat_loaf': ('cat_d', (515, 330, 1015, 790), None, CAT_U), 'cat_back_rest': ('cat_d', (1060, 270, 1530, 790), None, CAT_U),
  'can_front': ('vac_a', (20, 290, 505, 770), None, CAN_U), 'can_side': ('vac_a', (525, 290, 1000, 785), None, CAN_U), 'can_back': ('vac_a', (1025, 290, 1515, 770), None, CAN_U),
  'noz_front': ('vac_b', (10, 340, 595, 760), None, NOZ_U), 'noz_side': ('vac_b', (605, 340, 935, 755), None, NOZ_U), 'noz_back': ('vac_b', (945, 340, 1525, 755), None, NOZ_U),
  'slip_sole': ('vac_c', (40, 200, 400, 830), None, SLP_U), 'slip_side': ('vac_c', (415, 370, 985, 665), None, SLP_U), 'slip_tilt': ('vac_c', (1010, 300, 1510, 750), None, SLP_U),
  'rom_front': ('rom_a', (25, 395, 505, 705), None, ROM_U), 'rom_side': ('rom_a', (525, 395, 1020, 720), None, ROM_U), 'rom_back': ('rom_a', (1035, 395, 1515, 705), None, ROM_U),
  'rom_front_chase': ('rom_b', (5, 405, 495, 770), None, ROM_U), 'rom_side_chase': ('rom_b', (495, 405, 1000, 770), None, ROM_U), 'rom_back_chase': ('rom_b', (1000, 405, 1530, 770), (1000, 405, 1040, 660), ROM_U),
}
sheets, parts, poses = {}, {}, {}
for name, (src, box, erase, U) in P.items():
    base = sheets.setdefault(src, load(src))
    c = base.crop(box)
    if erase:
        ex = (erase[0] - box[0], erase[1] - box[1], erase[2] - box[0], erase[3] - box[1]); c.paste((0, 0, 0, 0), ex)
    pad = Image.new('RGBA', (c.width + 24, c.height + 24), (0, 0, 0, 0)); pad.paste(c, (12, 12)); pad = paper(pad)
    bb = pad.split()[3].point(lambda v: 255 if v > 24 else 0).getbbox(); pc = pad.crop(bb)
    parts[name] = pc.resize((round(pc.width * SCALE), round(pc.height * SCALE)), Image.LANCZOS)
    poses[name] = {'uw': round(pc.width * U, 2), 'uh': round(pc.height * U, 2)}
x = y = PAD; shelf = 0
for name in sorted(parts, key=lambda n: -parts[n].height):
    im = parts[name]
    if x + im.width + PAD > SHEET_W: x = PAD; y += shelf + PAD; shelf = 0
    poses[name].update(x=x, y=y, w=im.width, h=im.height); x += im.width + PAD; shelf = max(shelf, im.height)
H = y + shelf + PAD
A = Image.new('RGBA', (SHEET_W, H), (255, 253, 246, 0))
for n, im in parts.items(): A.paste(im, (poses[n]['x'], poses[n]['y']))
A.save(OUT + 'img/chaser_atlas.webp', quality=84, method=6, alpha_quality=88)
bg = Image.new('RGBA', A.size, (90, 120, 160, 255)); bg.alpha_composite(A); bg.convert('RGB').save(D + '/raw/_chaser_check.png')
print('atlas', A.size, os.path.getsize(OUT + 'img/chaser_atlas.webp') // 1024, 'KB')
open(OUT + 'js/chaserart.js', 'w').write('// art/chaser_key.py が作る。x,y,w,h は chaser_atlas.webp の中の位置、uw,uh はゲーム内の大きさ\nexport const CHASER_ART = ' + json.dumps({'W': SHEET_W, 'H': H, 'poses': poses}, separators=(',', ':')) + '\n')
