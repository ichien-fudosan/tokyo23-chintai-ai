// 賃貸サイト（heya.ichienfudosan.jp）で配っている前提文を、この置き場の premise/ に写す。
// 使い方: node scripts/sync.cjs <賃貸サイトの作業フォルダ>
//   例: node scripts/sync.cjs C:\dev\ichien-heya-site
// 前提文はサイト側の仕組みで作る。ここでは手で直さない（直すのはサイト側。直したらこの道具で写す）。
const fs = require('fs');
const path = require('path');

const site = process.argv[2];
if (!site) { console.error('賃貸サイトの作業フォルダを指定してください'); process.exit(1); }
const root = path.join(__dirname, '..');
const wards = JSON.parse(fs.readFileSync(path.join(site, 'tools', 'ai', 'wards.json'), 'utf8')).wards.filter(w => w.ready);
const out = path.join(root, 'premise');
fs.mkdirSync(out, { recursive: true });

// 前の版にあって今の版に無い区のファイルを残さない
for (const f of fs.readdirSync(out)) if (f.endsWith('.txt')) fs.unlinkSync(path.join(out, f));

let version = null;
for (const w of wards) {
  const text = fs.readFileSync(path.join(site, 'public', 'ai', w.slug, 'premise.txt'), 'utf8');
  const m = /前提文（(v[\d.]+)）/.exec(text.split('\n')[0]);
  if (!m) { console.error(`${w.slug}: 1行目に版の番号がありません`); process.exit(1); }
  if (version && version !== m[1]) { console.error(`${w.slug}: 版がそろっていません（${version} と ${m[1]}）`); process.exit(1); }
  version = m[1];
  fs.writeFileSync(path.join(out, `${w.slug}.txt`), text);
}
fs.writeFileSync(path.join(root, 'wards.json'), JSON.stringify(wards.map(w => ({ slug: w.slug, name: w.name })), null, 2) + '\n');
console.log(`${wards.length} 区ぶんを写しました（${version}）`);
