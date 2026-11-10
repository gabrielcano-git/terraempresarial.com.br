const sharp = require('sharp');
const fs = require('node:fs/promises');
(async () => {
  for (const width of [640, 1280, 1920]) {
    await sharp('dist/assets/hero.jpg').resize({ width, withoutEnlargement: true }).webp({ quality: 76 }).toFile(`dist/assets/hero-${width}.webp`);
  }
  await sharp('dist/assets/image-0.png').resize({ width: 560, withoutEnlargement: true }).webp({ quality: 85 }).toFile('dist/assets/brand.webp');
})().catch(error => { console.error(error); process.exitCode = 1; });
