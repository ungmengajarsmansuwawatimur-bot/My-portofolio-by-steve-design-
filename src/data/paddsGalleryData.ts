export interface PaddsGalleryItem {
  id: string;
  orderNumber: string;
  filename: string;
  moduleName: string;
  categoryTag: string;
  title: string;
  caption: string;
  description: string;
}

export const all24PaddsScreenshots: PaddsGalleryItem[] = [
  {
    id: 'padds-01',
    orderNumber: '01 / 24',
    filename: '/assets/padds/21-dashboard-kembali.svg',
    moduleName: 'Dashboard',
    categoryTag: 'PUSAT INFORMASI OPERASIONAL',
    title: 'Dashboard Utama : Ringkasan Sistem Arsip Digital',
    caption:
      'Beranda utama sistem yang menyajikan ringkasan 80 total arsip aktif, 80 QR aktif, status keamanan retensi dokumen, serta pintasan akses cepat.',
    description:
      'Pusat informasi operasional yang memberikan orientasi cepat kepada pengguna, grafik pertumbuhan, dan akses langsung ke seluruh modul harian.',
  },
  {
    id: 'padds-02',
    orderNumber: '02 / 24',
    filename: '/assets/padds/03-manajemen-arsip.svg',
    moduleName: 'Manajemen Arsip',
    categoryTag: 'PROSES INTI',
    title: 'Manajemen Arsip : Daftar Dokumen Terstruktur',
    caption:
      'Daftar tabel inventaris pusat memuat 80 dokumen dengan filter tahun, kategori, jenis surat, status, pengurutan, pencarian, dan tombol aksi.',
    description:
      'Mengubah arsip sekolah yang tersebar menjadi daftar tertata rapi dengan pagination aktif dan penelusuran nomor surat yang mudah dioperasikan.',
  },
  {
    id: 'padds-03',
    orderNumber: '03 / 24',
    filename: '/assets/padds/16-detail-arsip-read-only.svg',
    moduleName: 'Manajemen Arsip',
    categoryTag: 'PROSES INTI',
    title: 'Detail Dokumen Arsip (Modal Read-Only)',
    caption:
      'Tampilan pop-up detail berkas mencakup nomor surat, tahun, tanggal upload, deskripsi kegiatan, tombol Preview PDF, dan tautan public link.',
    description:
      'Memungkinkan peninjauan rincian metadata secara menyeluruh dan verifikasi berkas tanpa mengubah integritas data dalam mode Viewer.',
  },
  {
    id: 'padds-04',
    orderNumber: '04 / 24',
    filename: '/assets/padds/17-qr-arsip-preview.svg',
    moduleName: 'Manajemen Arsip',
    categoryTag: 'PROSES INTI',
    title: 'Pratinjau QR Code Arsip',
    caption:
      'Modal pratinjau kode QR spesifik per dokumen dengan tombol Download QR untuk dicetak atau ditempelkan pada berkas fisik.',
    description:
      'Jalur akses instan untuk menghubungkan lembaran berkas fisik dengan catatan arsip digitalnya secara langsung melalui pemindaian kamera.',
  },
  {
    id: 'padds-05',
    orderNumber: '05 / 24',
    filename: '/assets/padds/04-upload-arsip.svg',
    moduleName: 'Upload Arsip',
    categoryTag: 'INTAKE BERBANTUAN AI',
    title: 'Upload Arsip : Intake Dokumen & Analisis Metadata',
    caption:
      'Alur unggah berkas (drag-and-drop / kamera) dilengkapi tahapan AI Analisis Metadata, AI Pengecekan Nomor Surat, dan antrian dokumen.',
    description:
      'Mengurangi pekerjaan input berulang dengan otomatisasi pembacaan dokumen dan validasi nomor surat terhadap database sebelum disimpan.',
  },
  {
    id: 'padds-06',
    orderNumber: '06 / 24',
    filename: '/assets/padds/05-import-arsip.svg',
    moduleName: 'Import Arsip',
    categoryTag: 'EFISIENSI MIGRASI',
    title: 'Import Arsip : Migrasi Massal Multi PDF & ZIP',
    caption:
      'Fasilitas migrasi massal berkas lama menggunakan opsi Multi PDF atau File ZIP dengan panel preview metadata sebelum proses import.',
    description:
      'Mendukung perpindahan puluhan hingga ratusan arsip digital sekolah secara cepat dalam satu alur kerja terstruktur.',
  },
  {
    id: 'padds-07',
    orderNumber: '07 / 24',
    filename: '/assets/padds/06-cari-arsip.svg',
    moduleName: 'Cari Arsip',
    categoryTag: 'RETRIEVAL & INVESTIGASI',
    title: 'Cari Arsip : Mode Pencarian Standar',
    caption:
      'Formulir pencarian berbasis kata kunci nomor surat, judul, lokasi, serta filter komprehensif (Kategori, Tahun, Status, Urutan).',
    description:
      'Menyediakan pencarian cepat berbasis ILIKE untuk menemukan dokumen secara presisi berdasarkan atribut metadata utama.',
  },
  {
    id: 'padds-08',
    orderNumber: '08 / 24',
    filename: '/assets/padds/06b-ai-document-search.svg',
    moduleName: 'Cari Arsip',
    categoryTag: 'RETRIEVAL & INVESTIGASI',
    title: 'Cari Arsip : AI Document Search (Bahasa Alami)',
    caption:
      'Pencarian cerdas berbasis pemahaman bahasa alami : pengguna dapat menemukan dokumen cukup dengan mengingat konteks atau topik kegiatan.',
    description:
      'Memudahkan staf menemukan dokumen penting ketika nomor surat atau judul resmi berkas tidak diingat secara persis.',
  },
  {
    id: 'padds-09',
    orderNumber: '09 / 24',
    filename: '/assets/padds/06c-tindak-lanjut.svg',
    moduleName: 'Cari Arsip',
    categoryTag: 'RETRIEVAL & INVESTIGASI',
    title: 'Cari Arsip : Tindak Lanjut & Investigasi Database',
    caption:
      'Fitur investigasi cerdas untuk menelusuri database dan mengidentifikasi potensi duplikasi penyimpanan berkas arsip.',
    description:
      'Membantu pemeriksaan dan penertiban arsip ganda berdasarkan instansi pengirim, topik, atau periode tahun surat.',
  },
  {
    id: 'padds-10',
    orderNumber: '10 / 24',
    filename: '/assets/padds/07-kategori-arsip.svg',
    moduleName: 'Master Data Arsip',
    categoryTag: 'STANDARDISASI DATA',
    title: 'Master Data : Daftar Kategori Arsip',
    caption:
      'Tabel klasifikasi 53 kategori arsip resmi (Surat Tugas, Hasil Verifikasi, Proposal, Legalitas, dsb.) dengan kode penomoran standar.',
    description:
      'Menjaga standardisasi metadata agar pengelompokan jenis berkas di seluruh lingkungan sekolah tetap tertib dan konsisten.',
  },
  {
    id: 'padds-11',
    orderNumber: '11 / 24',
    filename: '/assets/padds/08-lokasi-fisik.svg',
    moduleName: 'Master Data Arsip',
    categoryTag: 'STANDARDISASI DATA',
    title: 'Master Data : Pemetaan Lokasi Fisik Berkas',
    caption:
      'Pemetaan tempat penyimpanan fisik (Ruang Tata Usaha, Kode TU-A1, Lemari Arsip) yang mencatat 79 dokumen tersimpan.',
    description:
      'Menghubungkan data digital di platform dengan lemari penyimpanan fisik nyata guna mempercepat audit berkas asli.',
  },
  {
    id: 'padds-12',
    orderNumber: '12 / 24',
    filename: '/assets/padds/10-retensi-dokumen.svg',
    moduleName: 'Retensi Dokumen',
    categoryTag: 'LIFECYCLE CONTROL',
    title: 'Retensi Dokumen : Monitoring Siklus Simpan',
    caption:
      'Pemantauan masa aktif dokumen dengan 4 kartu metrik (Total, Mendekati Retensi, Kadaluarsa, Aktif) dan jadwal retensi berjangka.',
    description:
      'Memastikan tata kelola pemusnahan atau penyimpanan arsip sekolah terkontrol secara sistematis berdasarkan ketentuan waktu.',
  },
  {
    id: 'padds-13',
    orderNumber: '13 / 24',
    filename: '/assets/padds/09-statistik-laporan.svg',
    moduleName: 'Statistik & Laporan',
    categoryTag: 'MONITORING & PELAPORAN',
    title: 'Statistik & Laporan : Tren Pertumbuhan Bulanan',
    caption:
      'Grafik analitik arsip mode Bulanan dengan 5 kartu ringkasan serta tombol unduh laporan Export PDF dan Export Excel.',
    description:
      'Mengubah data operasional menjadi grafik visual yang mudah dievaluasi oleh kepala sekolah dan pengawas kependidikan.',
  },
  {
    id: 'padds-14',
    orderNumber: '14 / 24',
    filename: '/assets/padds/09b-statistik-harian.svg',
    moduleName: 'Statistik & Laporan',
    categoryTag: 'MONITORING & PELAPORAN',
    title: 'Statistik & Laporan : Tren Mode Harian',
    caption:
      'Visualisasi tren pengarsipan dalam skala tanggal harian (1 sampai 30) untuk memonitor intensitas pengunggahan berkas harian staf.',
    description:
      'Menyajikan transparansi data aktivitas pengarsipan harian sekolah guna mendukung evaluasi ritme kerja administrasi.',
  },
  {
    id: 'padds-15',
    orderNumber: '15 / 24',
    filename: '/assets/padds/09c-statistik-tahunan.svg',
    moduleName: 'Statistik & Laporan',
    categoryTag: 'MONITORING & PELAPORAN',
    title: 'Statistik & Laporan : Tren Skala Tahunan',
    caption:
      'Grafik pertumbuhan arsip lintas tahun (2024 sampai 2026) untuk memetakan akumulasi volume dokumen per tahun ajaran sekolah.',
    description:
      'Membantu perencanaan kebutuhan kapasitas penyimpanan dan rekapitulasi data tahunan secara historis.',
  },
  {
    id: 'padds-16',
    orderNumber: '16 / 24',
    filename: '/assets/padds/11-qr-code.svg',
    moduleName: 'QR Code Management',
    categoryTag: 'AKSES CEPAT DOKUMEN',
    title: 'QR Code Management : Pengelolaan QR & Link Publik',
    caption:
      'Panel pengelolaan 80 QR Code aktif, status scan, filter aktif/nonaktif, serta tombol salin public link dan unduh label QR.',
    description:
      'Memudahkan siapa pun yang memegang lembar fisik surat untuk memverifikasi keaslian dokumen secara cepat lewat pemindaian QR.',
  },
  {
    id: 'padds-17',
    orderNumber: '17 / 24',
    filename: '/assets/padds/12-log-aktivitas.svg',
    moduleName: 'Log Aktivitas',
    categoryTag: 'AUDIT OPERASIONAL',
    title: 'Log Aktivitas : Audit Trail & Jejak Sistem',
    caption:
      'Riwayat audit pengguna dengan penghitung aktivitas (Total, Login, Upload, Edit, Hapus), timeline terkini, dan filter tanggal.',
    description:
      'Menjamin akuntabilitas dan transparansi seluruh tindakan staf di dalam aplikasi tanpa bergantung pada buku catatan manual.',
  },
  {
    id: 'padds-18',
    orderNumber: '18 / 24',
    filename: '/assets/padds/13-ai-assistant.svg',
    moduleName: 'AI Assistant',
    categoryTag: 'SELF-SERVICE KNOWLEDGE',
    title: 'AI Assistant : Panduan & Bantuan Interaktif',
    caption:
      'Asisten virtual interaktif penyedia panduan modul, cara penggunaan fitur, alur kerja pengarsipan, dan FAQ operasional.',
    description:
      'Mendukung orientasi mandiri staf baru di sekolah sehingga proses adaptasi sistem berjalan lancar tanpa kendala.',
  },
  {
    id: 'padds-19',
    orderNumber: '19 / 24',
    filename: '/assets/padds/18-pengaturan.svg',
    moduleName: 'Pengaturan Sistem',
    categoryTag: 'GOVERNANCE PENDUKUNG',
    title: 'Pengaturan Sistem : Profil Sekolah & Konfigurasi',
    caption:
      'Konfigurasi identitas sekolah, NPSN, kontak, alamat, logo, serta identitas aplikasi versi 2.0.0 dengan pembatasan hak khusus Admin.',
    description:
      'Pengaturan sentral identitas sekolah dan sistem yang hanya dapat diubah oleh peran Administrator (mode Viewer read-only).',
  },
  {
    id: 'padds-20',
    orderNumber: '20 / 24',
    filename: '/assets/padds/19-backup-restore.svg',
    moduleName: 'Backup & Restore',
    categoryTag: 'GOVERNANCE PENDUKUNG',
    title: 'Backup & Restore : Perlindungan Data & Storage',
    caption:
      'Pemantauan snapshot database cadangan ke Cloudflare R2, jadwal auto backup (Harian/Mingguan/Bulanan), dan monitoring storage.',
    description:
      'Menjaga ketahanan data arsip sekolah dari risiko kerusakan berkas dengan mekanisme cadangan snapshot berbasis cloud.',
  },
  {
    id: 'padds-21',
    orderNumber: '21 / 24',
    filename: '/assets/padds/20-manajemen-user.svg',
    moduleName: 'Manajemen User',
    categoryTag: 'GOVERNANCE PENDUKUNG',
    title: 'Manajemen User : Pembagian Peran & Hak Akses',
    caption:
      'Pengelolaan daftar akun pengguna, peran akses (Admin, Staff TU, Viewer), status keaktifan, dan stempel waktu login terakhir.',
    description:
      'Menerapkan kontrol peran berbasis wewenang sehingga akses dokumen rahasia sekolah hanya dapat dibuka oleh personel yang sah.',
  },
  {
    id: 'padds-22',
    orderNumber: '22 / 24',
    filename: '/assets/padds/14-ai-statistics.svg',
    moduleName: 'AI Statistics',
    categoryTag: 'DOKUMENTASI PENDUKUNG',
    title: 'AI Statistics : Monitoring Pemanggilan AI',
    caption:
      'Panel teknis pemantauan utilisasi kapabilitas AI (analisis metadata & cek nomor surat) selama rentang waktu 30 hari.',
    description:
      'Menyajikan metrik teknis frekuensi pemanggilan kecerdasan buatan sebagai modul pelengkap evaluasi sistem.',
  },
  {
    id: 'padds-23',
    orderNumber: '23 / 24',
    filename: '/assets/padds/15-pusat-informasi.svg',
    moduleName: 'Pusat Informasi',
    categoryTag: 'DOKUMENTASI PENDUKUNG',
    title: 'Pusat Informasi : Dokumentasi Resmi Platform',
    caption:
      'Halaman profil platform PADDS SMANSAT, daftar fitur utama terintegrasi, glosarium, changelog versi 2.0.0, dan kontak narahubung.',
    description:
      'Menjadi rujukan informasi resmi mengenai spesifikasi platform dan sejarah pembaruan aplikasi bagi seluruh warga sekolah.',
  },
  {
    id: 'padds-24',
    orderNumber: '24 / 24',
    filename: '/assets/padds/padds_tablet_manajemen.svg',
    moduleName: 'Tampilan Responsif',
    categoryTag: 'ARSITEKTUR ANTARMUKA',
    title: 'Tampilan Responsif : Antarmuka Tablet & Portabel',
    caption:
      'Tangkapan layar antarmuka manajemen arsip pada perangkat portabel/tablet dengan penyesuaian layout tabel dan bilah navigasi.',
    description:
      'Menunjukkan fleksibilitas sistem saat diakses melalui perangkat tablet oleh petugas arsip langsung di ruang penyimpanan.',
  },
];
