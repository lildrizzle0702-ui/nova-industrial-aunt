import { copyFile, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, '..', 'dist');
const src = resolve(distDir, 'index.html');
const dest = resolve(distDir, '404.html');

try {
  await access(src);
  await copyFile(src, dest);
  console.log(`Copied ${src} -> ${dest}`);
} catch (err) {
  console.error('Failed to copy 404.html:', err.message);
  process.exit(1);
}
