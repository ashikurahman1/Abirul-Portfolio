import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const app = new URL('../src/app/', import.meta.url);
const artwork = await readFile(new URL('icon.svg', app));
const sizes = [16, 32, 48, 64];
const images = await Promise.all(sizes.map(size => sharp(artwork).resize(size, size).png().toBuffer()));
const directory = Buffer.alloc(6 + sizes.length * 16);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(sizes.length, 4);
let offset = directory.length;
images.forEach((image, index) => {
  const entry = 6 + index * 16;
  directory[entry] = sizes[index];
  directory[entry + 1] = sizes[index];
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(image.length, entry + 8);
  directory.writeUInt32LE(offset, entry + 12);
  offset += image.length;
});
await writeFile(new URL('favicon.ico', app), Buffer.concat([directory, ...images]));
await sharp(artwork).resize(180, 180).png().toFile(fileURLToPath(new URL('apple-icon.png', app)));
console.log('Generated A monogram favicon (16/32/48/64px) and 180px Apple icon.');
