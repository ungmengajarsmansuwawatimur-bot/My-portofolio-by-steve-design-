const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processImage(inputPath, outputBase, options) {
  if (!fs.existsSync(inputPath)) {
    console.warn(`File not found: ${inputPath}`);
    return;
  }

  const { maxWidth, maxHeight, avifQuality = 68, webpQuality = 80, png = true } = options;

  let pipeline = sharp(inputPath);
  const metadata = await pipeline.metadata();

  if (maxWidth && metadata.width > maxWidth) {
    pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  } else if (maxHeight && metadata.height > maxHeight) {
    pipeline = pipeline.resize({ height: maxHeight, withoutEnlargement: true });
  }

  const buffer = await pipeline.toBuffer();

  // 1. AVIF
  const avifPath = `${outputBase}.avif`;
  await sharp(buffer)
    .avif({ quality: avifQuality, effort: 3 })
    .toFile(avifPath);
  const avifSize = fs.statSync(avifPath).size;

  // 2. WebP
  const webpPath = `${outputBase}.webp`;
  await sharp(buffer)
    .webp({ quality: webpQuality, effort: 4 })
    .toFile(webpPath);
  const webpSize = fs.statSync(webpPath).size;

  // 3. Fallback (PNG or JPG depending on original)
  let fallbackPath = `${outputBase}.png`;
  if (png) {
    await sharp(buffer)
      .png({ compressionLevel: 9, effort: 7 })
      .toFile(fallbackPath);
  }

  console.log(`Processed: ${path.basename(outputBase)}`);
  console.log(`  AVIF: ${(avifSize / 1024).toFixed(1)} KB`);
  console.log(`  WebP: ${(webpSize / 1024).toFixed(1)} KB`);
  if (png) {
    const pngSize = fs.statSync(fallbackPath).size;
    console.log(`  PNG:  ${(pngSize / 1024).toFixed(1)} KB`);
  }
}

async function main() {
  console.log('--- Starting Asset Optimization ---');

  // 1. Hero Portrait
  await processImage(
    'public/assets/taufik_official_portrait.png',
    'public/assets/taufik_official_portrait',
    { maxWidth: 800, avifQuality: 68, webpQuality: 80, png: true }
  );

  // 2. Hero Banners
  await processImage(
    'src/assets/images/banner_make_this_real_16x9.webp',
    'src/assets/images/banner_make_this_real_16x9',
    { maxWidth: 1600, avifQuality: 68, webpQuality: 80, png: false }
  );
  // Also copy to public
  if (fs.existsSync('public/assets/images/banner_make_this_real_16x9.webp')) {
    fs.copyFileSync('src/assets/images/banner_make_this_real_16x9.avif', 'public/assets/images/banner_make_this_real_16x9.avif');
    fs.copyFileSync('src/assets/images/banner_make_this_real_16x9.webp', 'public/assets/images/banner_make_this_real_16x9.webp');
  }

  await processImage(
    'src/assets/images/retail_banner_dark_1791097677864.webp',
    'src/assets/images/retail_banner_dark_1791097677864',
    { maxWidth: 1600, avifQuality: 68, webpQuality: 80, png: false }
  );
  // Also copy to public
  if (fs.existsSync('public/retail_banner_dark.webp')) {
    fs.copyFileSync('src/assets/images/retail_banner_dark_1791097677864.avif', 'public/retail_banner_dark.avif');
    fs.copyFileSync('src/assets/images/retail_banner_dark_1791097677864.webp', 'public/retail_banner_dark.webp');
  }

  // 3. Project Mockups
  const mockups = [
    { in: 'public/assets/mockups/mockup_01_jasa_digital.png', out: 'public/assets/mockups/mockup_01_jasa_digital' },
    { in: 'public/assets/mockups/mockup_02_padds_smansat.png', out: 'public/assets/mockups/mockup_02_padds_smansat' },
    { in: 'public/assets/mockups/mockup_03_usaha_keluarga.png', out: 'public/assets/mockups/mockup_03_usaha_keluarga' },
    { in: 'public/assets/mockups/mockup_04_pembelajaran_retail.png', out: 'public/assets/mockups/mockup_04_pembelajaran_retail' },
  ];

  for (const m of mockups) {
    await processImage(m.in, m.out, {
      maxWidth: 1000,
      avifQuality: 68, // Keeps small text crisp while slashing file size
      webpQuality: 82,
      png: true
    });
  }

  // 4. Icons
  const icons = [
    { in: 'public/assets/icons/education_degree_cap.png', out: 'public/assets/icons/education_degree_cap', max: 128 },
    { in: 'public/assets/icons/education_open_book.png', out: 'public/assets/icons/education_open_book', max: 128 },
    { in: 'public/assets/icons/experience_digital_megaphone.png', out: 'public/assets/icons/experience_digital_megaphone', max: 128 },
    { in: 'public/assets/icons/experience_storefront.png', out: 'public/assets/icons/experience_storefront', max: 128 },
    { in: 'public/assets/icons/experience_retail_cart.png', out: 'public/assets/icons/experience_retail_cart', max: 128 },
    { in: 'public/assets/icons/google_studio.png', out: 'public/assets/icons/google_studio', max: 128 },
    { in: 'public/assets/icons/antigravity_clean.png', out: 'public/assets/icons/antigravity_clean', max: 128 },
    { in: 'public/assets/icons/firebase_logo.png', out: 'public/assets/icons/firebase_logo', max: 128 },
    { in: 'public/assets/icons/google_stitch_logo.jpeg', out: 'public/assets/icons/google_stitch_logo', max: 128 },
    { in: 'public/assets/icons/supabase_logo.jpeg', out: 'public/assets/icons/supabase_logo', max: 128 },
    { in: 'public/assets/icons/exabytes_logo.png', out: 'public/assets/icons/exabytes_logo', max: 128 },
    { in: 'public/assets/icons/lonex_logo.png', out: 'public/assets/icons/lonex_logo', max: 128 },
    { in: 'public/assets/icons/replit_logo.png', out: 'public/assets/icons/replit_logo', max: 128 },
  ];

  for (const icon of icons) {
    await processImage(icon.in, icon.out, {
      maxWidth: icon.max,
      maxHeight: icon.max,
      avifQuality: 70,
      webpQuality: 85,
      png: true
    });
  }

  console.log('--- Asset Optimization Finished ---');
}

main().catch(err => {
  console.error('Optimization error:', err);
  process.exit(1);
});
