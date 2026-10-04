const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');

async function createCvPdf() {
  const pdfDoc = await PDFDocument.create();
  // Standard A4: 595.28 x 841.89 points
  const page = pdfDoc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const marginX = 40;
  let currentY = height - 42;

  // Header: TAUFIK HIDAYAT MALII
  page.drawText('TAUFIK HIDAYAT MALII', {
    x: marginX,
    y: currentY,
    size: 20,
    font: fontBold,
    color: rgb(0.09, 0.09, 0.09),
  });
  currentY -= 15;

  // CREW STORE / PRAMUNIAGA
  page.drawText('CREW STORE / PRAMUNIAGA', {
    x: marginX,
    y: currentY,
    size: 10,
    font: fontBold,
    color: rgb(0.15, 0.15, 0.15),
  });
  currentY -= 14;

  // Contact info
  page.drawText('+62 856-5638-1485  |  taufikmalii281003@gmail.com  |  Kelurahan Padengo, Kecamatan Kabila, Kabupaten Bone Bolango, Gorontalo', {
    x: marginX,
    y: currentY,
    size: 7.5,
    font: fontRegular,
    color: rgb(0.2, 0.2, 0.2),
  });
  currentY -= 11;

  page.drawText('LinkedIn: linkedin.com/in/taufik-hidayat-malii-bb54bb343', {
    x: marginX,
    y: currentY,
    size: 7.5,
    font: fontRegular,
    color: rgb(0.2, 0.2, 0.2),
  });
  currentY -= 14;

  // Helper function for Section Heading
  function drawSectionHeading(text, y, fullWidth = false, customWidth = null) {
    page.drawText(text, {
      x: marginX,
      y: y,
      size: 10,
      font: fontBold,
      color: rgb(0.09, 0.09, 0.09),
    });
    const lineW = customWidth || (fullWidth ? width - 2 * marginX : 320);
    page.drawLine({
      start: { x: marginX, y: y - 4 },
      end: { x: marginX + lineW, y: y - 4 },
      thickness: 1,
      color: rgb(0.15, 0.15, 0.15),
    });
  }

  // PROFIL Section (Full Width)
  drawSectionHeading('PROFIL', currentY, true);
  currentY -= 16;

  // Helper to wrap text
  function drawWrappedText(text, x, y, maxWidth, font, size, lineHeight, color = rgb(0.15, 0.15, 0.15)) {
    const words = text.split(' ');
    let line = '';
    let curY = y;
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const testWidth = font.widthOfTextAtSize(testLine, size);
      if (testWidth > maxWidth && n > 0) {
        page.drawText(line.trim(), { x, y: curY, size, font, color });
        line = words[n] + ' ';
        curY -= lineHeight;
      } else {
        line = testLine;
      }
    }
    if (line.trim().length > 0) {
      page.drawText(line.trim(), { x, y: curY, size, font, color });
      curY -= lineHeight;
    }
    return curY;
  }

  const profileSummary = 'Lulusan SMA dengan kemampuan komunikasi, pelayanan pelanggan, kerja sama tim, koordinasi, ketelitian, tanggung jawab, dan kemampuan beradaptasi. Memiliki pengalaman dalam berinteraksi dengan pelanggan, memahami kebutuhan, memberikan informasi, menangani pertanyaan dan permintaan, serta melakukan tindak lanjut. Aktif mempelajari pelayanan pelanggan dan dasar retail secara mandiri melalui berbagai platform dan sumber pembelajaran sejak Februari 2026. Memahami dasar komunikasi pelayanan, penataan produk, display, dan lingkungan operasional toko. Siap bekerja secara aktif, teliti, mengikuti sistem dan jadwal kerja yang berlaku, serta mampu bekerja di bawah tekanan.';
  currentY = drawWrappedText(profileSummary, marginX, currentY, width - 2 * marginX, fontRegular, 8, 11);
  currentY -= 8;

  // Layout Columns
  // Left Column X: 40, width: 310
  // Vertical divider at X: 360
  // Right Column X: 375, width: 180
  const dividerX = 362;
  const colLeftX = marginX;
  const colLeftWidth = 310;
  const colRightX = 374;
  const colRightWidth = width - marginX - colRightX;

  const topTwoColsY = currentY;

  // -------------------------------------------------------------
  // LEFT COLUMN
  // -------------------------------------------------------------
  let leftY = topTwoColsY;

  // PENGALAMAN Heading
  page.drawText('PENGALAMAN', { x: colLeftX, y: leftY, size: 9.5, font: fontBold, color: rgb(0.09, 0.09, 0.09) });
  page.drawLine({ start: { x: colLeftX, y: leftY - 3 }, end: { x: colLeftX + colLeftWidth, y: leftY - 3 }, thickness: 0.8, color: rgb(0.15, 0.15, 0.15) });
  leftY -= 15;

  // Job 1: Pengelolaan Usaha Keluarga | ±8 Tahun
  page.drawText('Pengelolaan Usaha Keluarga  |  ±8 Tahun', { x: colLeftX, y: leftY, size: 8.5, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
  leftY -= 11;

  const job1Bullets = [
    'Berinteraksi langsung dengan pelanggan untuk memahami kebutuhan dan memberikan pelayanan.',
    'Memberikan informasi terkait barang sesuai kebutuhan pelanggan.',
    'Menangani pertanyaan dan permintaan pelanggan dengan komunikasi yang baik.',
    'Membantu pelanggan dalam memenuhi kebutuhan barang sesuai permintaan.',
    'Membantu kegiatan operasional usaha agar berjalan dengan tertib.',
    'Menjalankan pekerjaan dengan memperhatikan ketelitian, tanggung jawab, dan pelayanan kepada pelanggan.'
  ];

  function drawBullets(bullets, x, startY, maxWidth, font, size, lineHeight) {
    let curY = startY;
    for (const b of bullets) {
      page.drawText('•', { x: x, y: curY, size: size, font: fontBold, color: rgb(0.15, 0.15, 0.15) });
      const nextY = drawWrappedText(b, x + 8, curY, maxWidth - 8, font, size, lineHeight);
      curY = nextY - 1;
    }
    return curY;
  }

  leftY = drawBullets(job1Bullets, colLeftX, leftY, colLeftWidth, fontRegular, 7.5, 9.8);
  leftY -= 5;

  // Job 2: Pelayanan & Pengelolaan Jasa Digital | Januari 2025 – Sekarang
  page.drawText('Pelayanan & Pengelolaan Jasa Digital  |  Januari 2025 – Sekarang', { x: colLeftX, y: leftY, size: 8.5, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
  leftY -= 11;

  const job2Bullets = [
    'Berkomunikasi langsung dengan pelanggan untuk menggali kebutuhan dan memahami permintaan sebelum memberikan layanan.',
    'Menjelaskan informasi mengenai jasa, proses pengerjaan, dan hasil yang dapat diberikan dengan bahasa yang mudah dipahami.',
    'Menjawab pertanyaan pelanggan serta memberikan penjelasan ketika terdapat hal yang perlu disesuaikan.',
    'Berkoordinasi dengan pelanggan terkait detail permintaan, perubahan, dan kebutuhan selama proses pelayanan.',
    'Menindaklanjuti permintaan dan masukan pelanggan hingga kebutuhan yang disampaikan dapat terselesaikan.',
    'Mengelola beberapa permintaan pelanggan secara mandiri dengan memperhatikan ketelitian, waktu, dan tanggung jawab.'
  ];
  leftY = drawBullets(job2Bullets, colLeftX, leftY, colLeftWidth, fontRegular, 7.5, 9.8);
  leftY -= 10;

  // Section: PEMBELAJARAN RETAIL
  page.drawText('PEMBELAJARAN RETAIL', { x: colLeftX, y: leftY, size: 9.5, font: fontBold, color: rgb(0.09, 0.09, 0.09) });
  page.drawLine({ start: { x: colLeftX, y: leftY - 3 }, end: { x: colLeftX + colLeftWidth, y: leftY - 3 }, thickness: 0.8, color: rgb(0.15, 0.15, 0.15) });
  leftY -= 15;

  page.drawText('Pembelajaran Mandiri Bidang Pelayanan Pelanggan & Retail  |  Februari 2026 – Sekarang', { x: colLeftX, y: leftY, size: 8, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
  leftY -= 11;

  const retailBullets = [
    'Aktif mempelajari dasar pelayanan pelanggan melalui berbagai platform dan sumber pembelajaran mandiri.',
    'Aktif mempelajari komunikasi dengan pelanggan, termasuk cara menyampaikan informasi secara jelas, sopan, dan mudah dipahami.',
    'Aktif mempelajari cara memahami kebutuhan pelanggan dan memberikan informasi yang sesuai.',
    'Aktif mempelajari dasar penanganan pertanyaan dan kebutuhan pelanggan secara responsif.',
    'Aktif mempelajari dasar pelayanan pelanggan dalam lingkungan retail, termasuk interaksi dan pendampingan pelanggan.',
    'Mempelajari dasar operasional retail, penataan produk, dan display untuk memahami lingkungan kerja toko.',
    'Mempelajari dasar planogram sebagai pengetahuan pendukung dalam penataan produk dan kerapian area penjualan.'
  ];
  leftY = drawBullets(retailBullets, colLeftX, leftY, colLeftWidth, fontRegular, 7.5, 9.8);

  // -------------------------------------------------------------
  // RIGHT COLUMN
  // -------------------------------------------------------------
  let rightY = topTwoColsY;

  // KOMPETENSI
  page.drawText('KOMPETENSI', { x: colRightX, y: rightY, size: 9.5, font: fontBold, color: rgb(0.09, 0.09, 0.09) });
  page.drawLine({ start: { x: colRightX, y: rightY - 3 }, end: { x: colRightX + colRightWidth, y: rightY - 3 }, thickness: 0.8, color: rgb(0.15, 0.15, 0.15) });
  rightY -= 15;

  // Pelayanan & Komunikasi
  page.drawText('Pelayanan & Komunikasi', { x: colRightX, y: rightY, size: 8.5, font: fontBold, color: rgb(0.12, 0.12, 0.12) });
  rightY -= 11;
  const komp1 = [
    'Pelayanan Pelanggan • Komunikasi Interpersonal',
    'Informasi Produk & Layanan • Pemecahan Masalah',
    'Koordinasi • Ketelitian & Tanggung Jawab',
    'Kemampuan Beradaptasi • Kemampuan Bekerja di Bawah Tekanan'
  ];
  for (const k of komp1) {
    rightY = drawWrappedText(k, colRightX, rightY, colRightWidth, fontRegular, 7.5, 10);
    rightY -= 1;
  }
  rightY -= 5;

  // Operasional Retail
  page.drawText('Operasional Retail', { x: colRightX, y: rightY, size: 8.5, font: fontBold, color: rgb(0.12, 0.12, 0.12) });
  rightY -= 11;
  const komp2 = [
    'Pengelolaan & Pengecekan Stok',
    'Kerja Sama Tim • Manajemen Waktu'
  ];
  for (const k of komp2) {
    rightY = drawWrappedText(k, colRightX, rightY, colRightWidth, fontRegular, 7.5, 10);
    rightY -= 1;
  }
  rightY -= 10;

  // KETERAMPILAN TEKNIS
  page.drawText('KETERAMPILAN TEKNIS', { x: colRightX, y: rightY, size: 9.5, font: fontBold, color: rgb(0.09, 0.09, 0.09) });
  page.drawLine({ start: { x: colRightX, y: rightY - 3 }, end: { x: colRightX + colRightWidth, y: rightY - 3 }, thickness: 0.8, color: rgb(0.15, 0.15, 0.15) });
  rightY -= 15;

  const skills = [
    { title: 'Microsoft Word', level: 'Terampil' },
    { title: 'Microsoft Excel', level: 'Pemahaman Dasar' },
    { title: 'Google Sheets', level: 'Pemahaman Dasar' },
    { title: 'Entri Data', level: 'Pemahaman Dasar' },
    { title: 'Pengelolaan Informasi & Berkas', level: 'Mahir' },
    { title: 'Pengembangan Platform Website', level: 'Mampu membangun platform website sesuai kebutuhan' },
    { title: 'Pengoperasian Aplikasi', level: 'Mampu memahami dan mengikuti alur kerja aplikasi dengan cepat setelah digunakan' }
  ];

  for (const s of skills) {
    rightY = drawWrappedText(`${s.title} — ${s.level}`, colRightX, rightY, colRightWidth, fontRegular, 7.5, 10);
    rightY -= 2;
  }
  rightY -= 10;

  // PENDIDIKAN
  page.drawText('PENDIDIKAN', { x: colRightX, y: rightY, size: 9.5, font: fontBold, color: rgb(0.09, 0.09, 0.09) });
  page.drawLine({ start: { x: colRightX, y: rightY - 3 }, end: { x: colRightX + colRightWidth, y: rightY - 3 }, thickness: 0.8, color: rgb(0.15, 0.15, 0.15) });
  rightY -= 15;

  page.drawText('SMA Negeri 1 Kabila  |  2020 – 2022', { x: colRightX, y: rightY, size: 8, font: fontBold, color: rgb(0.1, 0.1, 0.1) });

  // Vertical divider between left and right column
  const dividerBottom = Math.min(leftY, rightY) - 10;
  page.drawLine({
    start: { x: dividerX, y: topTwoColsY + 2 },
    end: { x: dividerX, y: 70 },
    thickness: 0.5,
    color: rgb(0.75, 0.75, 0.75),
  });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('public/CV_Taufik_Hidayat_Malii.pdf', pdfBytes);
  fs.writeFileSync('public/assets/CV_Taufik_Hidayat_Malii.pdf', pdfBytes);
  console.log('PDF generated successfully at public/CV_Taufik_Hidayat_Malii.pdf');
}

createCvPdf().catch(console.error);
