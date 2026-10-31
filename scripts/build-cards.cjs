// Convert Design-canvas sources (.dc.html) into standalone, editable HTML cards.
// Usage: node scripts/build-cards.cjs <dir-with-dc-files> [repoSlug]
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const [,, srcDir, repo = 'github.com/tgchtggn29-bit/iphone-duo-design-kit'] = process.argv;
const data = JSON.parse(fs.readFileSync(path.join(root, 'data/patterns.json'), 'utf8'));
const outDir = path.join(root, 'cards');
fs.mkdirSync(outDir, { recursive: true });

const FONT_LINK = '<link rel="preconnect" href="https://fonts.googleapis.com">\n<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700;900&display=swap" rel="stylesheet">';
const FONT_FALLBACK = '<style>\n' + [[400,'Regular',''],[500,'Medium',' Medium'],[700,'Bold',' Bold'],[900,'Black',' Black']]
  .map(([w,ps,full]) => `@font-face{font-family:'Noto Sans SC';font-weight:${w};src:local('Noto Sans SC'),local('Noto Sans CJK SC${full}'),local('NotoSansCJKsc-${ps}'),local('Source Han Sans SC${full}');}`).join('\n') + '\n</style>';
const CREDIT = `<div style="position:absolute;bottom:26px;right:64px;font:500 14px/1 'Noto Sans SC',sans-serif;color:#8A8781;letter-spacing:0.02em">${repo}</div>`;
const CREDIT_SPAN = `<span style="font-size:14px;color:#8A8781">${repo}</span>`;

const get = (o, p) => p.split('.').reduce((a, k) => a == null ? undefined : a[k], o);
const fill = (tpl, scope) => tpl.replace(/\{\{\s*([\w.$]+)\s*\}\}/g, (m, p) => { const v = get(scope, p); return v == null ? '' : String(v); });

for (const card of data.cards) {
  const s = fs.readFileSync(path.join(srcDir, card.file), 'utf8');
  const title = (s.match(/<title>([\s\S]*?)<\/title>/) || [, card.title.zh])[1];
  const helmet = (s.match(/<helmet>([\s\S]*?)<\/helmet>/) || [, ''])[1].replace(/<link[^>]*>\s*/g, '').trim();
  let body = (s.match(/<x-dc>([\s\S]*?)<\/x-dc>/) || [, ''])[1].replace(/<helmet>[\s\S]*?<\/helmet>/, '');
  const code = (s.match(/<script type="text\/x-dc"[^>]*>([\s\S]*?)<\/script>/) || [, ''])[1];
  const vals = new Function(`class DCLogic{constructor(p){this.props=p||{};this.state={};}setState(){}forceUpdate(){}}\n${code}\nreturn new Component({}).renderVals();`)() || {};
  body = body.replace(/<sc-for\s+list="\{\{\s*([\w.]+)\s*\}\}"\s+as="(\w+)"[^>]*>([\s\S]*?)<\/sc-for>/g,
    (m, list, as, inner) => (get(vals, list) || []).map((it, i) => fill(inner, Object.assign({}, vals, { [as]: it, $index: i }))).join(''));
  body = fill(body, vals).trim();
  if (/\{\{|<sc-|<dc-/.test(body)) throw new Error('Unresolved template in ' + card.file);
  // Bilingual eyebrow: append the English title to the first eyebrow line.
  body = body.replace(/(letter-spacing:0\.08em;color:#66655E">)([^<]*)(<\/div>)/, (m, a, t, b) => `${a}${t} · ${card.title.en.toUpperCase()}${b}`);
  // Root becomes the positioning context for the credit line.
  body = body.replace(/^<div style="width:1080px;height:1440px;/, '<div style="position:relative;width:1080px;height:1440px;');
  // Credit line: cards with their own footer get it inside the footer, the rest at the bottom right.
  if (card.id === 'cover-basics' || card.id === 'cover-scenes') {
    body = body.replace(/<span>#[^<]*<\/span>(\s*<\/div>\s*<\/div>\s*)$/, `${CREDIT_SPAN}$1`)
               .replace('案例来自 Apple Newsroom、TechCrunch 及 GitHub 开源项目，界面均为示意占位', '案例来自公开资料 · 界面均为示意占位');
  } else if (card.id === '00-spec') {
    body = body.replace(/(margin-top:auto;height:64px;display:flex;align-items:center;)(font-size:14px;color:#66655E">)[^<]*(<\/div>)/,
      `$1justify-content:space-between;$2<span>参考 Apple《Design for iPhone Duo》· iOS 27.1</span>${CREDIT_SPAN}$3`);
  } else if (card.id === '15-vertical-bars') {
    body = body.replace(/(margin-top:auto;height:56px;display:flex;align-items:center;)(font-size:14px;color:#66655E">)([^<]*)(<\/div>)/,
      `$1justify-content:space-between;$2<span>$3</span>${CREDIT_SPAN}$4`);
  } else {
    body = body.replace(/<\/div>\s*$/, `  ${CREDIT}\n</div>`);
  }
  if (!body.includes(repo)) throw new Error('Credit not placed in ' + card.id);
  const html = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=1080">
<title>${title}</title>
<!-- ${card.id} · iPhone Duo Design Kit · CC BY 4.0 · ${repo} -->
${FONT_LINK}
${FONT_FALLBACK}
${helmet}
</head>
<body style="margin:0">
${body}
</body>
</html>
`;
  fs.writeFileSync(path.join(outDir, card.id + '.html'), html);
  console.log('cards/' + card.id + '.html');
}
