import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';

const root = resolve('dist');
const pages = readdirSync(root).filter(file => file.endsWith('.html'));
assert.equal(pages.length, 3, 'As três páginas devem estar presentes');
for (const page of pages) {
  const file = resolve(root, page);
  const html = readFileSync(file, 'utf8');
  assert.match(html, /<html lang="pt-BR">/);
  assert.match(html, /<title>[^<]+<\/title>/);
  assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1, `${page}: um título principal`);
  for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|data:)/.test(url)) continue;
    const [path, anchor] = url.split('#');
    const target = path ? resolve(dirname(file), path) : file;
    assert.ok(target.startsWith(root), `Caminho fora do site: ${url}`);
    assert.ok(existsSync(target), `${page}: link local inexistente ${url}`);
    if (anchor && target.endsWith('.html')) {
      assert.ok(readFileSync(target, 'utf8').includes(`id="${anchor}"`), `Âncora inexistente: ${url}`);
    }
  }
}
console.log('3 páginas verificadas: títulos, idioma, arquivos e âncoras locais.');
