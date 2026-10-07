/**
 * Generates real PNG stand-ins under /assets/client/ so the CLIENT media
 * mode can be exercised end-to-end without shipping photography.
 *
 * Usage:  node scripts/generate-client-media.mjs
 * The generated files are test fixtures — replace them with real photos
 * in a client project. Safe to delete and regenerate at any time.
 */

import { deflateSync } from 'node:zlib';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = (p) => join(root, 'public', 'assets', 'client', p);

/* ---------- minimal PNG encoder (RGB, no interlace) ---------- */

const crcTable = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

function encodePng(width, height, pixelAt) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type RGB
  const raw = Buffer.alloc(height * (1 + width * 3));
  let o = 0;
  for (let y = 0; y < height; y++) {
    raw[o++] = 0; // filter: none
    for (let x = 0; x < width; x++) {
      const [r, g, b] = pixelAt(x, y);
      raw[o++] = r; raw[o++] = g; raw[o++] = b;
    }
  }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw)),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

/* ---------- procedural stand-ins ---------- */

const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));

const INK = hex('#20262b');
const PAPER = hex('#efece5');
const TEAL = hex('#2e7d6b');
const WARM = hex('#d8d2c6');

/** Studio-style backdrop with a diagonal light sweep and a product silhouette block. */
function productShot(w, h, tone) {
  return encodePng(w, h, (x, y) => {
    const sweep = (x / w) * 0.5 + (y / h) * 0.5;
    let c = mix(PAPER, WARM, sweep);
    // centered product block
    const mx = w * 0.28, Mx = w * 0.72, my = h * 0.3, My = h * 0.72;
    if (x > mx && x < Mx && y > my && y < My) c = mix(INK, tone, 0.25);
    // thin copper footline
    if (y > h * 0.78 && y < h * 0.795 && x > w * 0.3 && x < w * 0.7) c = TEAL;
    return c;
  });
}

/** Editorial factory band: horizontal stripes like a production line. */
function factoryShot(w, h) {
  return encodePng(w, h, (x, y) => {
    const band = Math.floor(y / (h / 6));
    const base = band % 2 === 0 ? PAPER : WARM;
    let c = mix(base, INK, (x / w) * 0.18);
    if (y > h * 0.42 && y < h * 0.46) c = TEAL;
    return c;
  });
}

const files = [
  ['brand/logo.png', encodePng(96, 96, (x, y) => (x * y) % 7 === 0 ? TEAL : INK)],
  ['brand/favicon.png', encodePng(64, 64, (x, y) => (x + y) % 9 === 0 ? PAPER : INK)],
  ['factory/production.png', factoryShot(1200, 800)],
  ['factory/quality.png', productShot(1200, 800, TEAL)],
  ['products/schuko-socket-16a/hero.png', productShot(1000, 1000, TEAL)],
  ['products/schuko-socket-16a/gallery-1.png', productShot(1000, 750, INK)],
];

for (const [rel, buf] of files) {
  const p = out(rel);
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, buf);
  console.log('wrote', rel, Math.round(buf.length / 1024) + ' KB');
}
