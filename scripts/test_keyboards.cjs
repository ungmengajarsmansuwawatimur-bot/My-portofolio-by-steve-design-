const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function testVersions() {
  const src = path.join(__dirname, '..', 'public', 'assets', 'aistudio', 'mockup-jasa-digital_48a6123e.png');
  const rawImage = await sharp(src).raw().toBuffer({ resolveWithObject: true });
  const w = rawImage.info.width;
  const h = rawImage.info.height;

  // Flood fill background
  const isBg = new Uint8Array(w * h);
  const queue = new Int32Array(w * h);
  let qStart = 0, qEnd = 0;

  for (let x = 0; x < w; x++) {
    const topIdx = x, botIdx = (h - 1) * w + x;
    if (rawImage.data[topIdx * 4] < 12) { isBg[topIdx] = 1; queue[qEnd++] = topIdx; }
    if (rawImage.data[botIdx * 4] < 12) { isBg[botIdx] = 1; queue[qEnd++] = botIdx; }
  }
  for (let y = 0; y < h; y++) {
    const leftIdx = y * w, rightIdx = y * w + (w - 1);
    if (!isBg[leftIdx] && rawImage.data[leftIdx * 4] < 12) { isBg[leftIdx] = 1; queue[qEnd++] = leftIdx; }
    if (!isBg[rightIdx] && rawImage.data[rightIdx * 4] < 12) { isBg[rightIdx] = 1; queue[qEnd++] = rightIdx; }
  }
  while (qStart < qEnd) {
    const curr = queue[qStart++];
    const cx = curr % w, cy = (curr / w) | 0;
    const neighbors = [cx > 0 ? curr - 1 : -1, cx < w - 1 ? curr + 1 : -1, cy > 0 ? curr - w : -1, cy < h - 1 ? curr + w : -1];
    for (const n of neighbors) {
      if (n >= 0 && !isBg[n]) {
        if (rawImage.data[n * 4] < 12 && rawImage.data[n * 4 + 1] < 12 && rawImage.data[n * 4 + 2] < 12) {
          isBg[n] = 1;
          queue[qEnd++] = n;
        }
      }
    }
  }

  // Version 1: Untinted Keyboard (Authentic original keyboard)
  // Folio case (back), Pencil, and back cover get Steve Yellow tint.
  // The keyboard area (y >= 1340) is kept in its ORIGINAL realistic colors!
  const dataV1 = Buffer.from(rawImage.data);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      if (isBg[y * w + x]) { dataV1[idx + 3] = 0; continue; }
      
      // Inside front screen: keep untouched
      if (x >= 1150 && x <= 2440 && y >= 445 && y <= 1335) continue;

      // Keyboard area (y >= 1340): DO NOT TINT (keep original keyboard color!)
      if (y >= 1340) continue;

      // Colorize the back folio case, back tablet, Apple Pencil
      const r = dataV1[idx], g = dataV1[idx+1], b = dataV1[idx+2];
      const maxVal = Math.max(r, g, b), minVal = Math.min(r, g, b), diff = maxVal - minVal;
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      if (lum > 130 && diff < 45) {
        const tr = 249 / 255, tg = 181 / 255, tb = 27 / 255;
        const factor = 0.65;
        dataV1[idx] = Math.min(255, Math.round(r * (1 - factor) + lum * tr * 1.15 * factor));
        dataV1[idx+1] = Math.min(255, Math.round(g * (1 - factor) + lum * tg * 1.15 * factor));
        dataV1[idx+2] = Math.min(255, Math.round(b * (1 - factor) + lum * tb * 1.15 * factor));
      }
    }
  }

  // Version 2: Standard Black Keyboard (Dark charcoal keys, matte black deck, white legends)
  // Like Apple's Space Black Magic Keyboard or MacBook Pro
  const dataV2 = Buffer.from(rawImage.data);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      if (isBg[y * w + x]) { dataV2[idx + 3] = 0; continue; }
      if (x >= 1150 && x <= 2440 && y >= 445 && y <= 1335) continue;

      const r = dataV2[idx], g = dataV2[idx+1], b = dataV2[idx+2];
      const maxVal = Math.max(r, g, b), minVal = Math.min(r, g, b), diff = maxVal - minVal;
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;

      // Keyboard area (y >= 1340) -> Make standard dark charcoal / black keyboard
      if (y >= 1340) {
        // Invert luminance so white keys become dark charcoal (~30..45), and dark letter engravings become light (~210..240)
        // This creates an authentic Space Black Magic Keyboard!
        const invertedLum = 255 - lum;
        // Key surface (original was high lum > 170) -> dark charcoal (32..48)
        // Key legends / borders (original was low lum < 100) -> light crisp silver/white (200..230)
        let newR, newG, newB;
        if (lum > 160) {
          // Key surface: dark matte charcoal
          const v = Math.round(28 + (lum - 160) * 0.18);
          newR = v; newG = v + 2; newB = v + 4;
        } else if (lum < 110) {
          // Legends and lines: crisp light silver/white
          const v = Math.round(210 + (110 - lum) * 0.35);
          newR = v; newG = v; newB = v;
        } else {
          // Intermediate shading / key bevels
          const v = Math.round(45 + (160 - lum) * 0.8);
          newR = v; newG = v + 2; newB = v + 4;
        }
        dataV2[idx] = newR;
        dataV2[idx+1] = newG;
        dataV2[idx+2] = newB;
        continue;
      }

      // Folio case, back cover, pencil: Steve Yellow
      if (lum > 130 && diff < 45) {
        const tr = 249 / 255, tg = 181 / 255, tb = 27 / 255;
        const factor = 0.65;
        dataV2[idx] = Math.min(255, Math.round(r * (1 - factor) + lum * tr * 1.15 * factor));
        dataV2[idx+1] = Math.min(255, Math.round(g * (1 - factor) + lum * tg * 1.15 * factor));
        dataV2[idx+2] = Math.min(255, Math.round(b * (1 - factor) + lum * tb * 1.15 * factor));
      }
    }
  }

  // Crop & save both
  const cropX = 971, cropY = 283, cropW = 2153, cropH = 1738;
  const outDir = path.join(__dirname, '..', 'public', 'assets', 'mockups');

  await sharp(dataV1, { raw: { width: w, height: h, channels: 4 } })
    .extract({ left: cropX, top: cropY, width: cropW, height: cropH })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'test_v1_untinted_white.webp'));

  await sharp(dataV2, { raw: { width: w, height: h, channels: 4 } })
    .extract({ left: cropX, top: cropY, width: cropW, height: cropH })
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'test_v2_standard_black.webp'));

  console.log('Both test versions saved successfully!');
}

testVersions().catch(err => {
  console.error(err);
  process.exit(1);
});
