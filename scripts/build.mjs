import assert from 'node:assert/strict';
import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { resolve, dirname } from 'node:path';

const output = resolve('dist');
assert.equal(dirname(output), process.cwd(), 'A saída deve ficar dentro do projeto');
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
cpSync('src', 'dist', { recursive: true });
for (const directory of ['fonts', 'icons', 'images']) {
  cpSync(`assets/${directory}`, `dist/assets/${directory}`, { recursive: true });
}
console.log('Site gerado em dist/');
