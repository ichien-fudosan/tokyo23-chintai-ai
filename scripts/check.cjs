// 公開する前の点検。1つでも落ちたら終了コード 1。
// 使い方: node scripts/check.cjs [賃貸サイトの作業フォルダ]
//   作業フォルダを渡すと、サイトで配っている前提文と1字も違わないことも確かめる。
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const site = process.argv[2];
const results = [];
const ok = (name, pass, detail) => results.push({ name, pass: !!pass, detail: detail || '' });
const read = p => fs.readFileSync(path.join(root, p), 'utf8');

const wards = JSON.parse(read('wards.json'));
const files = fs.readdirSync(path.join(root, 'premise')).filter(f => f.endsWith('.txt')).sort();

// 1. 23区そろっている
ok('前提文が23区ぶんある', wards.length === 23 && files.length === 23, `一覧 ${wards.length}・ファイル ${files.length}`);
ok('一覧とファイルの名前が合っている', wards.every(w => files.includes(`${w.slug}.txt`)));

// 2. 版がそろっている（1行目・奥付・直しの記録のいちばん上）
const versions = new Set();
const badColophon = [];
for (const w of wards) {
  const t = read(`premise/${w.slug}.txt`);
  const head = /前提文（(v[\d.]+)）/.exec(t.split('\n')[0]);
  const tail = /／(v[\d.]+)／作成日/.exec(t);
  if (!head || !tail || head[1] !== tail[1]) badColophon.push(w.slug);
  if (head) versions.add(head[1]);
  if (!t.split('\n')[0].includes(w.name)) badColophon.push(w.slug + '(区の名前)');
}
ok('1行目と奥付の版が、どの区でも同じ', badColophon.length === 0, badColophon.join(' '));
ok('23区の版が1つにそろっている', versions.size === 1, [...versions].join(' '));
const version = [...versions][0];
const top = /^## (v[\d.]+)/m.exec(read('CHANGELOG.md'));
ok('直しの記録のいちばん上が、今の版と同じ', top && top[1] === version, `記録 ${top && top[1]}・前提文 ${version}`);
ok('説明（README）に今の版が書いてある', read('README.md').includes(version));

// 3. サイトで配っている物と同じ
if (site) {
  const diff = wards.filter(w => read(`premise/${w.slug}.txt`) !== fs.readFileSync(path.join(site, 'public', 'ai', w.slug, 'premise.txt'), 'utf8')).map(w => w.slug);
  ok('サイトで配っている前提文と1字も違わない', diff.length === 0, diff.join(' '));
}

// 4. 説明から、23区ぶんの前提文へ行ける
const readme = read('README.md');
const missing = wards.filter(w => !readme.includes(`premise/${w.slug}.txt`)).map(w => w.slug);
ok('説明に23区ぶんのリンクがある', missing.length === 0, missing.join(' '));

// 5. 書いてはいけない言葉・入れてはいけない物
const all = [];
const walk = d => { for (const f of fs.readdirSync(path.join(root, d), { withFileTypes: true })) { if (f.name === '.git' || f.name === 'node_modules') continue; const p = path.join(d, f.name); if (f.isDirectory()) walk(p); else all.push(p); } };
walk('.');
const texts = all.filter(p => /\.(md|txt|json|cjs)$/.test(p) || p === 'LICENSE');
const ngWords = ['無料プ' + 'ラン', '無料' + '枠', '日本' + '初', '最先' + '端', '冨' + '永', '大' + '輔'];
const hits = [];
for (const p of texts) { const t = read(p); for (const w of ngWords) if (t.includes(w)) hits.push(`${p}:${w}`); }
ok('書かないと決めた言葉が無い', hits.length === 0, hits.join(' '));

const leak = [];
const patterns = [
  ['メールアドレス', /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g],
  ['電話番号', /0\d{1,4}-\d{1,4}-\d{3,4}/g],
  ['鍵らしい文字', /(eyJ[A-Za-z0-9_-]{20,}|sb_(secret|publishable)_[A-Za-z0-9_-]+|vcp_[A-Za-z0-9]+|sk-[A-Za-z0-9_-]{20,}|ghp_[A-Za-z0-9]{20,})/g],
];
for (const p of texts) {
  if (p === 'LICENSE') continue;
  const t = read(p);
  for (const [name, re] of patterns) for (const m of t.match(re) || []) leak.push(`${p}:${name}:${m.slice(0, 24)}`);
}
ok('メールアドレス・電話番号・鍵が入っていない', leak.length === 0, leak.join(' '));
const extra = all.filter(p => !/^(README\.md|CHANGELOG\.md|DISCLAIMER\.md|CONTRIBUTING\.md|LICENSE|wards\.json|\.gitattributes|premise[\\/][a-z]+\.txt|scripts[\\/](sync|check)\.cjs)$/.test(p));
ok('決めたファイルのほかに何も入っていない', extra.length === 0, extra.join(' '));

// 6. ライセンス
ok('ライセンスの本文がある（CC BY-SA 4.0）', read('LICENSE').includes('Attribution-ShareAlike 4.0 International'));

let fail = 0;
for (const r of results) { if (!r.pass) fail++; console.log(`${r.pass ? '合格' : '不合格'}  ${r.name}${r.detail ? '  ［' + r.detail + '］' : ''}`); }
console.log(`\n${results.length} 項目のうち ${results.length - fail} 合格`);
process.exit(fail ? 1 : 0);
