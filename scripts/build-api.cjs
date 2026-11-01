// Build the static, read-only API and the online skill served by GitHub Pages.
//   docs/api/index.json            all patterns (summary) + endpoint map
//   docs/api/patterns/<id>.json    one pattern with image and source URLs
//   docs/api/rules.json            device facts + core rules
//   docs/skill/SKILL.md (+ references/) online copy of the agent skill
//   docs/llms.txt                  plain-text index for LLMs
// Usage: node scripts/build-api.cjs
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(root, 'data/patterns.json'), 'utf8'));

const OWNER = 'tgchtggn29-bit', REPO = 'iphone-duo-design-kit';
const SITE = `https://${OWNER}.github.io/${REPO}/`;
const RAW = `https://raw.githubusercontent.com/${OWNER}/${REPO}/main/`;
const BLOB = `https://github.com/${OWNER}/${REPO}/blob/main/`;

const api = path.join(root, 'docs/api');
fs.mkdirSync(path.join(api, 'patterns'), { recursive: true });
const write = (p, o) => fs.writeFileSync(p, JSON.stringify(o, null, 2) + '\n');

const full = c => ({
  id: c.id, part: c.part, title: c.title, poses: c.poses || [], ref: c.ref || null,
  summary: c.summary || null, swiftui: c.swiftui || null,
  urls: {
    api: `${SITE}api/patterns/${c.id}.json`,
    preview: `${SITE}assets/cards/${c.id}.jpg`,
    png2x: `${RAW}exports/png/${c.id}.png`,
    html: `${RAW}cards/${c.id}.html`,
    source: `${BLOB}cards/${c.id}.html`
  }
});

for (const c of data.cards) write(path.join(api, 'patterns', c.id + '.json'), full(c));

write(path.join(api, 'rules.json'), { device: data.device, rules: data.rules, updated: data.updated });

write(path.join(api, 'index.json'), {
  name: data.name, version: data.version, updated: data.updated,
  license: { content: 'CC BY 4.0', code: 'MIT' },
  attribution: `iPhone Duo Design Kit · https://github.com/${OWNER}/${REPO} · CC BY 4.0`,
  endpoints: {
    index: `${SITE}api/index.json`,
    rules: `${SITE}api/rules.json`,
    pattern: `${SITE}api/patterns/{id}.json`,
    all: `${SITE}patterns.json`,
    skill: `${SITE}skill/SKILL.md`,
    llms: `${SITE}llms.txt`
  },
  count: data.cards.length,
  patterns: data.cards.map(c => ({ id: c.id, part: c.part, title: c.title, poses: c.poses || [], url: `${SITE}api/patterns/${c.id}.json` }))
});

// Online skill
const skillSrc = path.join(root, 'skills/iphone-duo-layout-patterns');
const skillDst = path.join(root, 'docs/skill');
fs.mkdirSync(path.join(skillDst, 'references'), { recursive: true });
fs.copyFileSync(path.join(skillSrc, 'SKILL.md'), path.join(skillDst, 'SKILL.md'));
fs.copyFileSync(path.join(skillSrc, 'references/patterns.md'), path.join(skillDst, 'references/patterns.md'));

// Full data for the site itself
fs.copyFileSync(path.join(root, 'data/patterns.json'), path.join(root, 'docs/patterns.json'));

// llms.txt
const lines = [
  '# iPhone Duo Design Kit', '',
  '> 29 layout patterns for iPhone Duo (Apple\'s foldable iPhone): outer and inner display, book and tabletop poses, vertical bars, hinge avoidance. Content CC BY 4.0.', '',
  '## Machine-readable', '',
  `- [Index of all patterns](${SITE}api/index.json): ids, titles, poses, per-pattern URLs`,
  `- [Device facts and core rules](${SITE}api/rules.json)`,
  `- [Full data](${SITE}patterns.json): every pattern in one file`,
  `- [Agent skill](${SITE}skill/SKILL.md): instructions for adapting or reviewing a screen`, '',
  '## Patterns', '',
  ...data.cards.filter(c => c.part !== 'cover').map(c => `- [${c.id} ${c.title.en}](${SITE}api/patterns/${c.id}.json): ${c.summary.en}`), ''
];
fs.writeFileSync(path.join(root, 'docs/llms.txt'), lines.join('\n'));
console.log('api:', data.cards.length, 'patterns · skill · llms.txt');
