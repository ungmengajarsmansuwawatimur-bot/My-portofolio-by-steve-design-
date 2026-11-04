export interface PaddsModuleInfo {
  id: string;
  number: string;
  name: string;
  categoryTag: string;
  mainFunction: string;
  userActions: string[];
  adminValue: string;
  exploredContext?: string;
  screenshots: {
    id: string;
    filename: string;
    avif?: string;
    webp?: string;
    png?: string;
    title: string;
    caption: string;
  }[];
}

export const paddsModulesData: PaddsModuleInfo[] = [
  {
    id: 'dashboard',
    number: '01',
    name: 'Dashboard',
    categoryTag: 'PUSAT INFORMASI OPERASIONAL',
    mainFunction:
      'Memberikan ringkasan kondisi arsip dan akses cepat ke pekerjaan utama dalam satu tampilan terpusat.',
    userActions: [
      'Melihat total arsip, arsip aktif, kategori yang terpakai, dan QR aktif.',
      'Memantau status retensi (semua arsip aman / mendekati retensi).',
      'Mengamati grafik pertumbuhan arsip serta daftar arsip dan aktivitas terkini.',
      'Mengakses tautan cepat ke modul Upload, Manajemen Arsip, Cari Arsip, QR Code, Statistik, dan Retensi.',
    ],
    adminValue:
      'Memusatkan orientasi kerja harian sehingga staf atau pengguna dapat menentukan tindak lanjut operasional tanpa perlu membuka banyak halaman terlebih dahulu.',
    exploredContext:
      'Saat eksplorasi terlihat 80 total arsip, 80 arsip aktif, 13 kategori unik terpakai, 80 QR aktif, dan status retensi aman.',
    screenshots: [
      {
        id: 'sc-01-dashboard',
        filename: '/assets/padds/21-dashboard-kembali.avif',
        title: 'Dashboard Utama : Ringkasan Sistem Arsip Digital',
        caption:
          'Tampilan beranda utama yang menyajikan banner selamat datang peran Viewer, status retensi, metrik 80 arsip aktif & 80 QR aktif, serta 6 tombol pintasan akses cepat.',
      },
    ],
  },
  {
    id: 'manajemen-arsip',
    number: '02',
    name: 'Manajemen Arsip',
    categoryTag: 'PROSES INTI',
    mainFunction:
      'Menjadi daftar pusat untuk meninjau, mengelola, dan menginspeksi seluruh dokumen arsip sekolah secara terstruktur.',
    userActions: [
      'Melihat tabel daftar dokumen arsip dengan kolom nomor surat, judul, kategori, jenis, tahun, lokasi fisik, tanggal upload, dan status.',
      'Mencari berkas berdasarkan judul, kode, atau nomor surat.',
      'Memfilter data berdasarkan tahun, kategori, jenis (Internal/Surat Keluar), dan status arsip.',
      'Mengurutkan daftar berkas, berpindah halaman (pagination), serta membuka detail arsip read-only.',
      'Meninjau pop-up detail berkas, tautan public link, serta trigger modal pratinjau QR Code.',
    ],
    adminValue:
      'Mengubah arsip sekolah yang sebelumnya berpotensi tersebar di berbagai buku catatan fisik atau file terpisah menjadi inventaris terstruktur yang mudah ditelusuri, dikontrol, dan ditinjau.',
    exploredContext:
      'Pada eksplorasi tercatat 80 dokumen arsip yang tersusun rapi dalam daftar tabel dengan pagination aktif.',
    screenshots: [
      {
        id: 'sc-03-manajemen-arsip',
        filename: '/assets/padds/03-manajemen-arsip.avif',
        title: 'Manajemen Arsip : Daftar Dokumen Terstruktur',
        caption:
          'Tabel inventaris pusat yang menampilkan 80 dokumen arsip dengan kontrol pencarian nomor surat/judul, dropdown filter kategori, tahun, jenis surat, serta status aktif.',
      },
      {
        id: 'sc-16-detail-arsip',
        filename: '/assets/padds/16-detail-arsip-read-only.avif',
        title: 'Detail Dokumen Arsip (Modal Read-Only)',
        caption:
          'Modal detail dokumen menampilkan informasi lengkap nomor surat, kategori Surat Tugas, tahun, tanggal upload, deskripsi kegiatan, tombol Preview PDF, dan tautan public link.',
      },
      {
        id: 'sc-17-qr-preview',
        filename: '/assets/padds/17-qr-arsip-preview.avif',
        title: 'Pratinjau QR Code Arsip',
        caption:
          'Pop-up pratinjau QR Code dokumen arsip spesifik dengan tombol unduh file QR untuk dicetak atau ditempelkan pada fisik berkas.',
      },
    ],
  },
  {
    id: 'upload-arsip',
    number: '03',
    name: 'Upload Arsip',
    categoryTag: 'INTAKE BERBANTUAN AI',
    mainFunction:
      'Memasukkan dokumen baru ke dalam sistem melalui alur intake, analisis metadata, pemeriksaan nomor surat, lalu proses unggah terstruktur.',
    userActions: [
      'Memilih atau menarik file (drag-and-drop) dari perangkat, atau mengambil foto dokumen langsung melalui kamera.',
      'Menjalankan fitur AI Analisis Dokumen untuk membaca isi dan mengisi kolom metadata otomatis.',
      'Menjalankan AI Pengecekan Nomor Surat terhadap database sebelum berkas disimpan.',
      'Meninjau antrian dokumen, status review, kelengkapan berkas, dan mengunggah seluruh dokumen yang telah siap.',
    ],
    adminValue:
      'Mengurangi beban input metadata berulang secara manual serta menempatkan validasi dan pemeriksaan dokumen sebagai tahap wajib sebelum arsip resmi disimpan.',
    exploredContext:
      'Tampilan antarmuka menyebutkan batas hingga 50 file per sesi dan ukuran maksimal 5 MB per file dokumen (PDF, DOC/DOCX, XLS/XLSX, CSV, TXT, PNG, JPG).',
    screenshots: [
      {
        id: 'sc-04-upload-arsip',
        filename: '/assets/padds/04-upload-arsip.avif',
        title: 'Upload Arsip : Intake Dokumen & Analisis Metadata',
        caption:
          'Antarmuka unggah dokumen dengan 4 panduan tahapan: Intake, AI Analisis Metadata, AI Pengecekan Nomor Surat, dan Upload, dilengkapi kartu ringkasan status antrian.',
      },
    ],
  },
  {
    id: 'import-arsip',
    number: '04',
    name: 'Import Arsip',
    categoryTag: 'EFISIENSI MIGRASI',
    mainFunction:
      'Mendukung migrasi berkas dokumen dalam jumlah banyak secara massal ke dalam sistem PADDS SMANSAT.',
    userActions: [
      'Memilih mode import Multi PDF atau File ZIP untuk arsip massal.',
      'Menyeret (drag-and-drop) berkas ke area dropzone yang disediakan.',
      'Melihat area Preview Metadata untuk memeriksa dan menyesuaikan metadata dokumen sebelum proses import dieksekusi.',
    ],
    adminValue:
      'Mempercepat perpindahan arsip digital lama secara sekaligus tanpa harus menginput dokumen satu per satu secara manual.',
    exploredContext:
      'Disediakan tombol pemilih Multi PDF dan File ZIP serta panel pratinjau metadata sebelum migrasi diproses.',
    screenshots: [
      {
        id: 'sc-05-import-arsip',
        filename: '/assets/padds/05-import-arsip.avif',
        title: 'Import Arsip : Migrasi Massal Multi PDF & ZIP',
        caption:
          'Halaman import arsip massal dengan tab opsi Multi PDF atau File ZIP serta area preview metadata untuk verifikasi data sebelum penyimpanan.',
      },
    ],
  },
  {
    id: 'cari-arsip',
    number: '05',
    name: 'Cari Arsip',
    categoryTag: 'RETRIEVAL & INVESTIGASI',
    mainFunction:
      'Membantu menemukan dokumen arsip sekolah secara cepat dan presisi menggunakan pencarian metadata standar maupun pencarian konteks berbasis bahasa alami.',
    userActions: [
      'Pencarian Standar: memasukkan kata kunci berbasis ILIKE pada nomor surat, judul, kategori, tahun, lokasi, serta menyaring dengan filter status dan urutan.',
      'Tab AI Document Search: mencari dokumen menggunakan bahasa alami dengan mengetikkan konteks isi pembahasan, nama instansi pengirim, kegiatan, atau topik dokumen.',
      'Tab Tindak Lanjut: meminta pemeriksaan investigasi database arsip secara terarah untuk mengidentifikasi potensi duplikasi penyimpanan dokumen.',
    ],
    adminValue:
      'Memperpendek waktu temu kembali arsip penting saat dibutuhkan untuk kebutuhan dinas atau akreditasi sekolah, serta mencegah penumpukan arsip ganda.',
    exploredContext:
      'Terdapat 3 tab navigasi pencarian yang terintegrasi: Pencarian Standar, AI Document Search, dan Tindak Lanjut Investigasi Database.',
    screenshots: [
      {
        id: 'sc-06-cari-standar',
        filename: '/assets/padds/06-cari-arsip.avif',
        title: 'Cari Arsip : Mode Pencarian Standar',
        caption:
          'Formulir pencarian berbasis kata kunci dan filter terperinci (Kategori, Tahun, Status, Lokasi, dan Pengurutan) dengan panel riwayat pencarian populer.',
      },
      {
        id: 'sc-06b-ai-search',
        filename: '/assets/padds/06b-ai-document-search.avif',
        title: 'Cari Arsip : AI Document Search (Bahasa Alami)',
        caption:
          'Tab pencarian cerdas berbasis konteks bahasa alami di mana pengguna dapat mencari berkas cukup dengan mengingat inti kegiatan atau nama instansi terkait.',
      },
      {
        id: 'sc-06c-tindak-lanjut',
        filename: '/assets/padds/06c-tindak-lanjut.avif',
        title: 'Cari Arsip : Tindak Lanjut & Investigasi Database',
        caption:
          'Fitur pemeriksaan database arsip untuk mendeteksi kemungkinan penyimpanan ganda berdasarkan fokus kata kunci instansi atau topik tahunan.',
      },
    ],
  },
  {
    id: 'master-data',
    number: '06',
    name: 'Master Data Arsip',
    categoryTag: 'STANDARDISASI DATA',
    mainFunction:
      'Mengelola standardisasi klasifikasi dokumen melalui Kategori Arsip serta memetakan tempat penyimpanan berkas melalui Lokasi Fisik.',
    userActions: [
      'Kategori Arsip: meninjau daftar klasifikasi (nama kategori, kode seperti PST-HSL, deskripsi, jumlah arsip terhubung, dan status aktif).',
      'Lokasi Fisik: meninjau kode lokasi (misal TU-A1), nama ruangan (Ruangan Tata Usaha), rak/lemari penyimpanan, kapasitas berkas tersimpan, dan status aktif.',
      'Menelusuri, mencari dengan kata kunci kode/nama, dan memfilter status data master.',
    ],
    adminValue:
      'Menjaga konsistensi metadata pengarsipan digital serta menghubungkan keberadaan arsip digital dengan lokasi fisik berkas aslinya di ruangan tata usaha sekolah.',
    exploredContext:
      'Tercatat 53 kategori arsip tersedia dan 1 lokasi fisik utama (Ruang Tata Usaha - Lemari Arsip TU-A1 menyimpan 79 arsip fisik saat dieksplorasi).',
    screenshots: [
      {
        id: 'sc-07-kategori',
        filename: '/assets/padds/07-kategori-arsip.avif',
        title: 'Master Data : Daftar Kategori Arsip',
        caption:
          'Tabel 53 kategori arsip terdaftar dengan kode klasifikasi resmi (Hasil Verifikasi, Konfirmasi, Pengajuan Proposal, dsb.) untuk memastikan konsistensi penamaan.',
      },
      {
        id: 'sc-08-lokasi',
        filename: '/assets/padds/08-lokasi-fisik.avif',
        title: 'Master Data : Pemetaan Lokasi Fisik Berkas',
        caption:
          'Halaman pemetaan lokasi fisik dokumen (Ruang Tata Usaha, Kode TU-A1, Lemari Arsip) yang mencatat 79 berkas fisik tersimpan untuk mempermudah audit fisik.',
      },
    ],
  },
  {
    id: 'retensi-dokumen',
    number: '07',
    name: 'Retensi Dokumen',
    categoryTag: 'LIFECYCLE CONTROL',
    mainFunction:
      'Memantau siklus masa simpan dokumen sekolah dan membedakan status berkas antara aman, mendekati masa retensi, atau telah kadaluarsa.',
    userActions: [
      'Melihat ringkasan indikator: Total Arsip, Mendekati Retensi, Kadaluarsa, dan Arsip Aktif.',
      'Meninjau tabel jadwal retensi yang memuat nomor surat, judul berkas, kategori, tahun, tanggal jatuh tempo retensi (misal 1 Jul 2031), dan label status (Aman).',
      'Memfilter daftar retensi berdasarkan tahun surat, kategori, serta status retensi dokumen.',
      'Membuka tautan detail arsip untuk menindaklanjuti berkas yang mendekati masa habis retensi.',
    ],
    adminValue:
      'Membantu tata kelola kepatuhan administrasi sekolah sehingga pemusnahan atau pemindahan arsip inaktif terkendali berdasarkan aturan waktu tanpa bergantung pada catatan ingatan staf.',
    exploredContext:
      'Saat eksplorasi, seluruh 80 arsip terdata dalam kategori aman dengan tanggal retensi terencana hingga 2031.',
    screenshots: [
      {
        id: 'sc-10-retensi',
        filename: '/assets/padds/10-retensi-dokumen.avif',
        title: 'Retensi Dokumen : Monitoring Siklus Masa Simpan',
        caption:
          'Tampilan monitoring siklus simpan dokumen dengan 4 kartu status (Total Arsip, Mendekati Retensi, Kadaluarsa, Arsip Aktif) dan jadwal retensi berjangka panjang.',
      },
    ],
  },
  {
    id: 'statistik-laporan',
    number: '08',
    name: 'Statistik & Laporan',
    categoryTag: 'MONITORING & PELAPORAN',
    mainFunction:
      'Menyajikan visualisasi analitik data arsip sekolah berdasarkan tren waktu, kategori, status, dan lokasi fisik serta menyediakan fitur ekspor laporan.',
    userActions: [
      'Menyaring analitik berdasarkan filter Tahun, Bulan, dan Kategori dokumen.',
      'Melihat grafik pertumbuhan arsip dalam tiga mode tab: Harian, Bulanan, dan Tahunan.',
      'Memeriksa distribusi kategori arsip dan proporsi status dokumen.',
      'Mengunduh dokumen rekapitulasi data menggunakan tombol Export PDF dan Export Excel yang tersedia pada antarmuka.',
    ],
    adminValue:
      'Mengubah tumpukan data arsip mentah menjadi bahan visual evaluasi dan laporan akuntabilitas yang mudah dipahami oleh pimpinan sekolah dan pengawas.',
    exploredContext:
      'Tersedia grafik tren pertumbuhan arsip interaktif dengan toggle mode Harian, Bulanan, dan Tahunan serta tombol Export PDF dan Export Excel.',
    screenshots: [
      {
        id: 'sc-09-statistik-bulanan',
        filename: '/assets/padds/09-statistik-laporan.avif',
        title: 'Statistik & Laporan : Grafik Pertumbuhan Bulanan',
        caption:
          'Visualisasi tren arsip mode Bulanan dengan 5 kartu ringkasan (Total, Aktif, Retensi, Kategori, Lokasi Fisik) dan kontrol ekspor laporan PDF/Excel.',
      },
      {
        id: 'sc-09b-statistik-harian',
        filename: '/assets/padds/09b-statistik-harian.avif',
        title: 'Statistik & Laporan : Grafik Mode Harian',
        caption:
          'Tampilan tren pertumbuhan dokumen dalam skala tanggal harian (1 sampai 30) untuk memantau intensitas pencatatan arsip oleh staf tata usaha.',
      },
      {
        id: 'sc-09c-statistik-tahunan',
        filename: '/assets/padds/09c-statistik-tahunan.avif',
        title: 'Statistik & Laporan : Grafik Mode Tahunan',
        caption:
          'Tampilan grafik pertumbuhan jangka panjang antar-tahun (2024 sampai 2026) untuk analisis akumulasi arsip sekolah per tahun ajaran.',
      },
    ],
  },
  {
    id: 'qr-management',
    number: '09',
    name: 'QR Code Management',
    categoryTag: 'AKSES CEPAT DOKUMEN',
    mainFunction:
      'Mengelola QR Code dan tautan publik (public link) yang terhubung langsung dengan dokumen arsip sekolah dalam satu panel sentral.',
    userActions: [
      'Melihat ringkasan metrik: QR Aktif, QR Nonaktif, Total Scan, dan Dibuat Bulan Ini.',
      'Meninjau tabel inventaris QR berisi nomor surat, nama arsip, thumbnail kode QR, public link, jumlah scan, status aktif, dan tombol aksi.',
      'Memfilter daftar QR berdasarkan status: Semua, Aktif, Nonaktif, Banyak Scan, atau Belum Discan.',
      'Menyalin tautan publik (Copy Link), membuka dokumen langsung di peramban, serta mengunduh kode QR untuk keperluan cetak label berkas.',
    ],
    adminValue:
      'Menjembatani dokumen fisik dan digital sehingga verifikasi keaslian surat atau berkas dapat dilakukan secara instan hanya dengan memindai label QR pada map fisik.',
    exploredContext:
      'Tercatat 80 QR aktif terhubung ke masing-masing dokumen arsip saat eksplorasi dijalankan.',
    screenshots: [
      {
        id: 'sc-11-qr-code',
        filename: '/assets/padds/11-qr-code.avif',
        title: 'QR Code Management : Pengelolaan Label & Link Publik',
        caption:
          'Tabel sentral pengelolaan 80 QR Code aktif lengkap dengan tautan publik, penghitung scan, opsi filter status, serta tombol salin link dan unduh label QR.',
      },
    ],
  },
  {
    id: 'log-aktivitas',
    number: '10',
    name: 'Log Aktivitas',
    categoryTag: 'AUDIT OPERASIONAL',
    mainFunction:
      'Mencatat seluruh rekam jejak aktivitas operasional pengguna di dalam sistem arsip digital demi menjaga akuntabilitas kerja.',
    userActions: [
      'Melihat ringkasan penghitung aktivitas sistem: Total Aktivitas, Login, Upload, Edit, dan Hapus.',
      'Meninjau timeline Aktivitas Terkini (misal riwayat login via Google, interaksi percakapan asisten, dsb.).',
      'Menyaring tabel detail log berdasarkan nama User, Modul yang diakses, jenis Aktivitas, serta rentang Tanggal.',
      'Mencari jejak rekaman spesifik berdasarkan nama user atau kata kunci peristiwa.',
    ],
    adminValue:
      'Memberikan transparansi penuh atas setiap perubahan dokumen dan akses sistem tanpa perlu mengandalkan buku catatan manual terpisah yang rawan hilang.',
    exploredContext:
      'Menampilkan 4 ringkasan kartu operasional dan riwayat login beserta waktu presisi stempel aktivitas pengguna.',
    screenshots: [
      {
        id: 'sc-12-log-aktivitas',
        filename: '/assets/padds/12-log-aktivitas.avif',
        title: 'Log Aktivitas : Audit Trail & Jejak Operasional',
        caption:
          'Panel jejak audit sistem dengan kartu ringkasan (Total Aktivitas, Login, Upload, Edit, Hapus), timeline interaksi terkini, dan formulir filter audit.',
      },
    ],
  },
  {
    id: 'ai-assistant',
    number: '11',
    name: 'AI Assistant',
    categoryTag: 'SELF-SERVICE KNOWLEDGE',
    mainFunction:
      'Menjadi asisten cerdas interaktif untuk membantu pengguna memahami fungsi modul, panduan penggunaan fitur, alur kerja pengarsipan, dan FAQ.',
    userActions: [
      'Melihat rekomendasi saran pertanyaan cepat seputar pengoperasian PADDS SMANSAT.',
      'Meninjau materi panduan modul, alur pengarsipan surat masuk/keluar, glosarium istilah, dan FAQ aplikasi.',
      'Mengirimkan pertanyaan operasional melalui kolom input teks percakapan.',
      'Melihat daftar riwayat sesi percakapan bantuan yang pernah dilakukan.',
    ],
    adminValue:
      'Mendukung proses orientasi mandiri (self-service onboarding) bagi staf atau guru baru tanpa harus terus-menerus bergantung pada pelatihan atau instruksi manual berulang.',
    exploredContext:
      'Tersedia tombol topik saran pertanyaan: "Apa itu PADDS SMANSAT", "Bagaimana cara mengunggah arsip", "Apa fungsi modul Retensi", dsb.',
    screenshots: [
      {
        id: 'sc-13-ai-assistant',
        filename: '/assets/padds/13-ai-assistant.avif',
        title: 'AI Assistant : Pusat Bantuan & Panduan Interaktif',
        caption:
          'Antarmuka asisten virtual dengan panel riwayat percakapan, rekomendasi pertanyaan cepat seputar alur arsip sekolah, serta kotak percakapan interaktif.',
      },
    ],
  },
];

export interface PaddsGovernanceItem {
  id: string;
  name: string;
  categoryTag: string;
  roleDescription: string;
  accessBoundary: string;
  screenshot: {
    id: string;
    filename: string;
    avif?: string;
    webp?: string;
    png?: string;
    title: string;
    caption: string;
  };
}

export const paddsGovernanceData: PaddsGovernanceItem[] = [
  {
    id: 'pengaturan-sistem',
    name: 'Pengaturan Sistem',
    categoryTag: 'TATA KELOLA KONFIGURASI',
    roleDescription:
      'Mengatur konfigurasi profil sekolah (Nama Sekolah, NPSN, Kontak, Alamat, Logo Sekolah), identitas sistem aplikasi (Versi 2.0.0), preferensi tampilan, bahasa, zona waktu, penyimpanan, pengaturan QR, dan keamanan sistem.',
    accessBoundary:
      'Tampilan antarmuka menyatakan secara eksplisit bahwa hanya role Admin yang memiliki wewenang untuk menyimpan perubahan konfigurasi. Sesi eksplorasi berada dalam mode Viewer sehingga tidak ada pengaturan yang diubah.',
    screenshot: {
      id: 'sc-18-pengaturan',
      filename: '/assets/padds/18-pengaturan.avif',
      title: 'Pengaturan Sistem : Konfigurasi Identitas & Profil Sekolah',
      caption:
        'Halaman konfigurasi data sekolah dan identitas sistem dengan pembatasan akses berbasis peran khusus Administrator.',
    },
  },
  {
    id: 'backup-restore',
    name: 'Backup & Restore',
    categoryTag: 'KEAMANAN & PEMULIHAN DATA',
    roleDescription:
      'Menampilkan status cadangan data, jadwal auto backup (Harian, Mingguan, Bulanan), pemantauan ruang simpan penyimpanan awan (Cloudflare R2), dan riwayat snapshot tabel arsip untuk mitigasi kehilangan data.',
    accessBoundary:
      'Antarmuka menyatakan hanya Administrator yang dapat membuat, mengunduh, menghapus, atau merestore snapshot cadangan. Tidak ada proses eksekusi backup yang dijalankan selama observasi.',
    screenshot: {
      id: 'sc-19-backup',
      filename: '/assets/padds/19-backup-restore.avif',
      title: 'Backup & Restore : Perlindungan Data & Storage Monitoring',
      caption:
        'Panel pemantauan cadangan berkas tabel arsip ke Cloudflare R2 dengan opsi jadwal otomatis dan pembatas wewenang Admin.',
    },
  },
  {
    id: 'manajemen-user',
    name: 'Manajemen User',
    categoryTag: 'KONTROL HAK AKSES',
    roleDescription:
      'Menampilkan daftar akun pengguna terdaftar, peran akses (Admin, Staff TU, Viewer), status akun (Aktif/Nonaktif), stempel waktu login terakhir, serta kontrol penambahan dan pengaturan hak akses pengguna.',
    accessBoundary:
      'Halaman menyatakan bahwa hanya Admin yang dapat melihat dan mengelola seluruh akun pengguna. Seluruh data pribadi pengguna disamarkan dan dijaga kerahasiaannya.',
    screenshot: {
      id: 'sc-20-manajemen-user',
      filename: '/assets/padds/20-manajemen-user.avif',
      title: 'Manajemen User : Pembagian Peran & Hak Akses Akun',
      caption:
        'Tabel akun pengguna sistem dengan pembagian role (Admin, Staff TU, Viewer) untuk memastikan dokumen hanya dikelola oleh staf berwenang.',
    },
  },
];

export interface PaddsSupportingDocItem {
  id: string;
  name: string;
  reason: string;
  screenshot: {
    id: string;
    filename: string;
    avif?: string;
    webp?: string;
    png?: string;
    title: string;
    caption: string;
  };
}

export const paddsSupportingDocsData: PaddsSupportingDocItem[] = [
  {
    id: 'ai-statistics',
    name: 'AI Statistics',
    reason:
      'Modul pendukung monitoring teknis pemanggilan AI (total panggilan, tingkat keberhasilan/kegagalan, dan tren kapabilitas). Saat observasi dilakukan belum tercatat riwayat aktivitas pemanggilan sehingga diposisikan sebagai dokumentasi pelengkap sistem.',
    screenshot: {
      id: 'sc-14-ai-stats',
      filename: '/assets/padds/14-ai-statistics.avif',
      title: 'AI Statistics : Monitoring Pemanggilan AI',
      caption:
        'Metrik pemantauan utilisasi fitur AI (AI Analisis Metadata, Pengecekan Nomor Surat) selama periode 30 hari.',
    },
  },
  {
    id: 'pusat-informasi',
    name: 'Pusat Informasi',
    reason:
      'Modul berisi rangkuman profil platform PADDS SMANSAT, daftar fitur utama, FAQ, panduan umum, changelog versi 2.0.0, dan kontak narahubung sehingga berfungsi sebagai dokumentasi sistem pendukung.',
    screenshot: {
      id: 'sc-15-pusat-informasi',
      filename: '/assets/padds/15-pusat-informasi.avif',
      title: 'Pusat Informasi : Dokumentasi Resmi Platform',
      caption:
        'Halaman profil platform PADDS SMANSAT yang memuat ringkasan kapabilitas sistem dan informasi versi 2.0.0.',
    },
  },
];
