# 生成したシート（緑背景）を切り抜いて img/mom_*.webp・img/face_*.webp・js/momart.js を作る
# ~/tools/pyimg/bin/python key.py（Pillow と numpy が要る）。切り方は night-mosquito/art/key.py と同じ
# 切り絵に見せるため、輪郭の外に紙の白い縁を足す
import numpy as np, os, json
from PIL import Image, ImageFilter
D = os.path.dirname(os.path.abspath(__file__)); OUT = D + '/../img/'
os.makedirs(OUT, exist_ok=True)
RIM = 7                 # 白い縁の太さ（生成画像の px）
UNIT = 128 / 653        # 生成画像 1px あたりのゲーム内の長さ（normal の高さ 653px が 128）
BASE = 878              # 足元の y

def alpha(a):
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    k = g - np.maximum(r, b)
    al = 1 - np.clip((k - 22) / (90 - 22), 0, 1)
    lim = np.maximum(r, b); g2 = np.where(g > lim, lim, g)   # 緑かぶりを消す
    return np.dstack([r, g2, b, al * 255]).clip(0, 255).astype(np.uint8)

def load(src):
    im = Image.fromarray(alpha(np.asarray(Image.open(D + '/raw/' + src + '.png').convert('RGB')).astype(np.float32)), 'RGBA')
    a = im.split()[3].filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(0.7)); im.putalpha(a)
    # 紙の縁: 太らせたアルファの所を白で敷き、その上に絵を載せる
    rim = a.point(lambda v: 255 if v > 60 else 0).filter(ImageFilter.MaxFilter(RIM * 2 + 1)).filter(ImageFilter.GaussianBlur(1.1))
    paper = Image.new('RGBA', im.size, (255, 253, 246, 0)); paper.putalpha(rim)
    return Image.alpha_composite(paper, im)

# 名前: シート, 切る箱, パイプの先（生成画像の座標）, 顔の箱（正方形）
P = {
  'normal': ('mom_a', (5, 210, 479, 890), (462, 778), (45, 205, 405, 565)),
  'search': ('mom_a', (480, 255, 1030, 890), (1007, 778), (525, 262, 905, 642)),
  'spot':   ('mom_a', (1050, 135, 1534, 890), (1512, 778), (1040, 140, 1470, 570)),
  'angry':  ('mom_b', (10, 150, 502, 890), (484, 778), (15, 150, 475, 610)),
  'win':    ('mom_b', (510, 212, 996, 890), (983, 778), (530, 215, 905, 590)),
  'phone':  ('mom_b', (1000, 218, 1530, 890), (1508, 778), (1040, 222, 1410, 592))
}
sheets = {}
poses = {}
for name, (src, box, hand, fb) in P.items():
    im = sheets.setdefault(src, load(src))
    # アルファのある範囲に詰める（下は足元の線にそろえる）
    c = im.crop(box); bb = c.split()[3].point(lambda v: 255 if v > 24 else 0).getbbox()
    x0, y0, x1, y1 = box[0] + bb[0], box[1] + bb[1], box[0] + bb[2], box[1] + bb[3]
    c = im.crop((x0, y0, x1, y1)); w, h = c.size
    c.save(OUT + f'mom_{name}.webp', quality=84, method=6, alpha_quality=85)
    # 足元（BASE）を原点にしたいが、影の分は下端に合わせるだけで足りる
    poses[name] = {'w': round(w * UNIT, 2), 'h': round(h * UNIT, 2), 'hand': [round((hand[0] - x0) / w, 4), round(1 - (hand[1] - y0) / h, 4)]}
    f = im.crop(fb).resize((256, 256), Image.LANCZOS)
    f.save(OUT + f'face_{name}.webp', quality=82, method=6)
    print(name, c.size, os.path.getsize(OUT + f'mom_{name}.webp') // 1024, 'KB face', os.path.getsize(OUT + f'face_{name}.webp') // 1024, 'KB', poses[name])
open(D + '/../js/momart.js', 'w').write('// art/key.py が作る。w,h はゲーム内の大きさ、hand は絵の中の金属パイプの先（0〜1。下から）\nexport const MOM_ART = ' + json.dumps({'poses': poses}, separators=(',', ':')) + '\n')
