const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const INPUT_FILES = {
  'jasa-digital': {
    src: path.join(__dirname, '..', 'public', 'assets', 'aistudio', 'mockup-jasa-digital_48a6123e.png'),
    outName: 'mockup_01_jasa_digital',
    // Steve Yellow / Warm Golden Amber: #F9B51B -> (249, 181, 27)
    tintR: 249,
    tintG: 181,
    tintB: 27,
    tintStrength: 0.65,
    accentName: 'Steve Yellow / Warm Amber',
  },
  'padds-smansat': {
    src: path.join(__dirname, '..', 'public', 'assets', 'aistudio', 'mockup-arsip-sekolah_8404160f.png'),
    outName: 'mockup_02_padds_smansat',
    // High-Tech Digital Blue / Electric Cyan: #0284C7 -> (2, 132, 199)
    tintR: 2,
    tintG: 132,
    tintB: 199,
    tintStrength: 0.65,
    accentName: 'Digital Blue / Electric Cyan',
  },
  'usaha-keluarga': {
    src: path.join(__dirname, '..', 'public', 'assets', 'aistudio', 'mockup-usaha-keluarga_296eede2.png'),
    outName: 'mockup_03_usaha_keluarga',
    // Steve Dark Green / Retail Emerald: #31543A -> (49, 84, 58) or vibrant #10B981 / #059669
    tintR: 38,
    tintG: 166,
    tintB: 91, // Fresh retail emerald
    tintStrength: 0.65,
    accentName: 'Steve Green / Retail Emerald',
  },
  'pembelajaran-retail': {
    src: path.join(__dirname, '..', 'public', 'assets', 'aistudio', 'mockup-pembelajaran-retail_70261c42.png'),
    outName: 'mockup_04_pembelajaran_retail',
    // Merah Muda / Vibrant Coral Rose Pink: (236, 72, 135)
    tintR: 236,
    tintG: 72,
    tintB: 135,
    tintStrength: 0.65,
    accentName: 'Rose Pink / Merah Muda',
  },
};

const MOCKUP_DIR = path.join(__dirname, '..', 'public', 'assets', 'mockups');
if (!fs.existsSync(MOCKUP_DIR)) {
  fs.mkdirSync(MOCKUP_DIR, { recursive: true });
}

async function processMockup(key, config) {
  console.log(`\n========================================`);
  console.log(`Processing ${key} with ${config.accentName}...`);
  
  const rawImage = await sharp(config.src).raw().toBuffer({ resolveWithObject: true });
  const w = rawImage.info.width;
  const h = rawImage.info.height;
  const data = rawImage.data;

  // 1. Flood-fill from outer perimeter to detect pure black background
  console.log(`1. Running flood fill from perimeter...`);
  const isBg = new Uint8Array(w * h);
  const queue = new Int32Array(w * h);
  let qStart = 0, qEnd = 0;

  for (let x = 0; x < w; x++) {
    const topIdx = x;
    const botIdx = (h - 1) * w + x;
    if (data[topIdx * 4] < 12 && data[topIdx * 4 + 1] < 12 && data[topIdx * 4 + 2] < 12) {
      isBg[topIdx] = 1;
      queue[qEnd++] = topIdx;
    }
    if (data[botIdx * 4] < 12 && data[botIdx * 4 + 1] < 12 && data[botIdx * 4 + 2] < 12) {
      isBg[botIdx] = 1;
      queue[qEnd++] = botIdx;
    }
  }
  for (let y = 0; y < h; y++) {
    const leftIdx = y * w;
    const rightIdx = y * w + (w - 1);
    if (!isBg[leftIdx] && data[leftIdx * 4] < 12 && data[leftIdx * 4 + 1] < 12 && data[leftIdx * 4 + 2] < 12) {
      isBg[leftIdx] = 1;
      queue[qEnd++] = leftIdx;
    }
    if (!isBg[rightIdx] && data[rightIdx * 4] < 12 && data[rightIdx * 4 + 1] < 12 && data[rightIdx * 4 + 2] < 12) {
      isBg[rightIdx] = 1;
      queue[qEnd++] = rightIdx;
    }
  }

  while (qStart < qEnd) {
    const curr = queue[qStart++];
    const cx = curr % w;
    const cy = (curr / w) | 0;

    const neighbors = [
      cx > 0 ? curr - 1 : -1,
      cx < w - 1 ? curr + 1 : -1,
      cy > 0 ? curr - w : -1,
      cy < h - 1 ? curr + w : -1,
    ];

    for (const n of neighbors) {
      if (n >= 0 && !isBg[n]) {
        const pIdx = n * 4;
        if (data[pIdx] < 12 && data[pIdx + 1] < 12 && data[pIdx + 2] < 12) {
          isBg[n] = 1;
          queue[qEnd++] = n;
        }
      }
    }
  }

  console.log(`Background pixels detected: ${qEnd}`);

  // 2. Front Screen Bounding / Exclusion Zone
  // The front iPad screen is tilted. Let's define the screen safe zone so we do NOT color the website content
  // Screen area is approximately:
  // X: 1140 to 2420, Y: 440 to 1350
  function isInsideFrontScreen(x, y) {
    // Front iPad screen quad bounds:
    // Top-left: (1165, 465), Top-right: (2375, 465)
    // Bottom-left: (1160, 1315), Bottom-right: (2450, 1335)
    return x >= 1150 && x <= 2440 && y >= 445 && y <= 1335;
  }

  // 3. Apply color touch to white & silver parts
  // White/silver parts:
  // - Magic Keyboard deck, keys, trackpad, palm rest (Y >= 1340)
  // - Magic Keyboard back cover (X >= 1700, Y < 1340, outside screen)
  // - Apple Pencil (X >= 2450, Y >= 500)
  // - Back tablet cover / edges (outside front screen)
  console.log(`2. Colorizing white and silver parts with ${config.accentName}...`);

  let coloredCount = 0;
  let minX = w, maxX = 0, minY = h, maxY = 0;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;

      if (isBg[y * w + x]) {
        // Set alpha to 0 for background
        data[idx + 3] = 0;
        continue;
      }

      // Track bounding box of the device
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;

      // Check if inside front screen (preserve original website UI content!)
      if (isInsideFrontScreen(x, y)) {
        continue;
      }

      // KEYBOARD AREA EXCLUSION:
      // The user requested: "keyboard pada ketiga mockup perangkat tersebut seharusnya sesuai dengan
      // warna keyboard pada umumnya bukan di warnai semuanya jadi keyboard sesuai warna keyboard perangkat pada umumnya"
      // Therefore, the keyboard deck, keys, trackpad, and palm rest (y >= 1340) are NOT colored with the body color.
      // They remain in their authentic, clean, standard device keyboard colors!
      if (y >= 1340) {
        continue;
      }

      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      // Check if this pixel is white or silver / light gray
      const maxVal = Math.max(r, g, b);
      const minVal = Math.min(r, g, b);
      const diff = maxVal - minVal;
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;

      // White and silver criteria for back folio case, standing plate, and Apple Pencil:
      // High luminance (> 130) and low color saturation (diff < 45)
      const isWhiteOrSilver = lum > 130 && diff < 45;

      if (isWhiteOrSilver) {
        coloredCount++;
        // Apply color tint while preserving luminance, shading, highlights, and 3D depth
        const tr = config.tintR / 255;
        const tg = config.tintG / 255;
        const tb = config.tintB / 255;

        const factor = config.tintStrength;
        
        // Boost warmth / vibrancy slightly based on luminance
        const tintedR = lum * tr * 1.15;
        const tintedG = lum * tg * 1.15;
        const tintedB = lum * tb * 1.15;

        data[idx] = Math.min(255, Math.round(r * (1 - factor) + tintedR * factor));
        data[idx + 1] = Math.min(255, Math.round(g * (1 - factor) + tintedG * factor));
        data[idx + 2] = Math.min(255, Math.round(b * (1 - factor) + tintedB * factor));
      }
    }
  }

  console.log(`Colored ${coloredCount} white/silver pixels!`);
  console.log(`Device bounds: x[${minX}..${maxX}], y[${minY}..${maxY}]`);

  // 4. Crop to device bounding box with padding so the mockup fills the card crisply
  const pad = 40;
  const cropX = Math.max(0, minX - pad);
  const cropY = Math.max(0, minY - pad);
  const cropW = Math.min(w - cropX, (maxX - minX) + pad * 2);
  const cropH = Math.min(h - cropY, (maxY - minY) + pad * 2);

  console.log(`3. Exporting cropped, transparent, colorized assets...`);
  const processedInstance = sharp(data, {
    raw: { width: w, height: h, channels: 4 }
  }).extract({ left: cropX, top: cropY, width: cropW, height: cropH });

  // Save PNG and WebP to public/assets/mockups/
  const outPngPath = path.join(MOCKUP_DIR, `${config.outName}.png`);
  const outWebpPath = path.join(MOCKUP_DIR, `${config.outName}.webp`);

  await processedInstance.clone()
    .png({ quality: 100, compressionLevel: 8 })
    .toFile(outPngPath);

  await processedInstance.clone()
    .webp({ quality: 95, effort: 6 })
    .toFile(outWebpPath);

  console.log(`Saved:`);
  console.log(`  -> ${outPngPath}`);
  console.log(`  -> ${outWebpPath}`);
}

async function main() {
  for (const [key, config] of Object.entries(INPUT_FILES)) {
    await processMockup(key, config);
  }
  console.log(`\nAll 3 mockups colorized and saved successfully!`);
}

main().catch(err => {
  console.error('Processing error:', err);
  process.exit(1);
});
