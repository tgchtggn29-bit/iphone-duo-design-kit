// Render every card in cards/ to images.
//   exports/png/<id>.png        2160 × 2880 (2x), for Xiaohongshu / WeChat / X
//   docs/assets/cards/<id>.jpg  1080 × 1440 (1x), for the gallery site
//   docs/assets/overview.jpg    contact sheet of all cards, for the README
// Usage: npm run render            (needs: npm i -D playwright && npx playwright install chromium)
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright');

const root = path.join(__dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(root, 'data/patterns.json'), 'utf8'));
const only = process.argv.slice(2); // optional: render just these ids
const pngDir = path.join(root, 'exports/png');
const jpgDir = path.join(root, 'docs/assets/cards');
[pngDir, jpgDir].forEach(d => fs.mkdirSync(d, { recursive: true }));

(async () => {
  const browser = await chromium.launch();
  const ctx2x = await browser.newContext({ viewport: { width: 1080, height: 1440 }, deviceScaleFactor: 2 });
  const ctx1x = await browser.newContext({ viewport: { width: 1080, height: 1440 }, deviceScaleFactor: 1 });
  const offline = process.env.OFFLINE_FONTS === '1';
  if (offline) for (const c of [ctx2x, ctx1x]) await c.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  const p2 = await ctx2x.newPage(), p1 = await ctx1x.newPage();
  const clip = { x: 0, y: 0, width: 1080, height: 1440 };

  for (const card of data.cards) {
    if (only.length && !only.includes(card.id)) continue;
    const url = 'file://' + path.join(root, 'cards', card.id + '.html');
    for (const p of [p2, p1]) {
      await p.goto(url, { waitUntil: offline ? 'load' : 'networkidle' });
      await p.evaluate(() => document.fonts.ready);
    }
    await p2.screenshot({ path: path.join(pngDir, card.id + '.png'), clip });
    await p1.screenshot({ path: path.join(jpgDir, card.id + '.jpg'), clip, type: 'jpeg', quality: 86 });
    console.log('✓', card.id);
  }

  // Contact sheet: every card in order, 8 per row.
  const cols = 8, w = 270, h = 360, gap = 16, pad = 48;
  const rows = Math.ceil(data.cards.length / cols);
  const W = pad * 2 + cols * w + (cols - 1) * gap, H = pad * 2 + rows * h + (rows - 1) * gap;
  const imgs = data.cards.map(c => `<img src="cards/${c.id}.jpg" style="width:${w}px;height:${h}px;border-radius:10px;box-shadow:0 1px 0 #DCDAD2,0 6px 18px rgba(31,31,28,.10)">`).join('');
  const sheet = await (await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 1 })).newPage();
  const tmp = path.join(root, 'docs/assets/.overview.html');
  fs.writeFileSync(tmp, `<body style="margin:0;background:#E7E5DE"><div style="padding:${pad}px;display:grid;grid-template-columns:repeat(${cols},${w}px);gap:${gap}px">${imgs}</div></body>`);
  await sheet.goto('file://' + tmp, { waitUntil: 'load' });
  await sheet.screenshot({ path: path.join(root, 'docs/assets/overview.jpg'), type: 'jpeg', quality: 84, fullPage: true });
  fs.unlinkSync(tmp);
  console.log('✓ overview');
  await browser.close();
})();
