import {
  ExperienceItem,
  WorkflowEvidenceItem,
  SchoolFeature,
  SchoolScreenshot,
  LearningItem,
  SkillGroupData,
  ToolItem,
  ContactChannel,
  CvConfig,
  TestimonialItem,
} from '../types';
import { portfolioImages } from '../assets/images';

export const candidateProfile = {
  fullName: 'TAUFIK HIDAYAT MALII',
  splitName: {
    first: 'Taufik',
    middle: 'Hidayat Malii',
    last: '',
  },
  brandMark: 'TH',
  eyebrow: 'SIAP BERKONTRIBUSI DI DUNIA RETAIL',
  role: 'Operasional & Pelayanan Retail',
  location: 'Gorontalo, Indonesia',
  lastEducation: 'SMA Negeri 1 Kabila (2020 s.d. 2022)',
  currentFocus: 'Operasional retail, pelayanan pelanggan, & pengembangan profesional',
  summary:
    'Berpengalaman dalam pelayanan pelanggan, pengelolaan usaha, serta memiliki kemampuan digital yang dapat mendukung pekerjaan di lingkungan retail.',
  aboutIntro:
    'Saya adalah individu yang memiliki minat besar dalam pelayanan pelanggan dan lingkungan retail. Terbiasa berkomunikasi dengan berbagai jenis pelanggan, disiplin, bertanggung jawab, dan selalu siap untuk belajar hal baru.',
  aboutPreviewQuote: 'Lebih dari Sekadar Pekerjaan, Ini Tentang Pelayanan.',
  mindsetQuote:
    'Saya percaya bahwa kerja yang baik dimulai dari sikap yang baik. Dengan niat belajar, disiplin, dan bertanggung jawab, setiap pekerjaan bisa menjadi pengalaman berharga.',
  learningBannerQuote: 'Knowledge today, better service tomorrow.',
  learningBannerSubtitle:
    'Saya percaya bahwa pembelajaran adalah investasi terbaik untuk menjadi pribadi yang lebih siap, lebih baik, dan lebih bermanfaat di masa depan.',
  values: ['Disiplin', 'Bertanggung Jawab', 'Komunikatif', 'Mudah Beradaptasi'],
  myGoal:
    'Berkembang di lingkungan retail, memberikan pelayanan terbaik, dan terus mempelajari hal baru.',
  footerQuote1: 'Terus belajar, terus berkembang.',
  footerQuote2: 'Setiap pengalaman adalah pelajaran, setiap pelanggan adalah kesempatan.',
  footerQuote3: 'Setiap pekerjaan adalah proses belajar untuk menjadi lebih baik.',
  footerQuote4: 'Belajar tidak pernah berhenti.',
};

export const capabilityColumns = [
  {
    number: '01',
    title: 'Customer Service',
    description: 'Melayani dengan baik, memahami kebutuhan pelanggan.',
    icon: 'users',
  },
  {
    number: '02',
    title: 'Retail',
    description: 'Mendukung operasional toko dan penataan produk.',
    icon: 'bag',
  },
  {
    number: '03',
    title: 'Real Work',
    description: 'Pengalaman nyata dalam pelayanan dan proyek digital.',
    icon: 'laptop',
  },
  {
    number: '04',
    title: 'Digital Skill',
    description: 'Menggunakan teknologi untuk bekerja lebih efektif.',
    icon: 'chart',
  },
];

export const coreValues = [
  {
    number: '01',
    title: 'Disiplin',
    description: 'Menjaga komitmen dalam setiap pekerjaan.',
  },
  {
    number: '02',
    title: 'Bertanggung Jawab',
    description: 'Menyelesaikan tugas dengan baik dan tepat waktu.',
  },
  {
    number: '03',
    title: 'Terbuka untuk Belajar',
    description: 'Selalu siap mempelajari hal baru dan menerima masukan.',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    orderNumber: '01',
    title: 'Pengelolaan Usaha Keluarga',
    period: '2016 s.d. Sekarang (Paruh Waktu)',
    durationLabel: '± 8 Tahun',
    type: 'Operasional Usaha Mandiri',
    responsibilities: [
      'Membantu operasional usaha keluarga, melayani pelanggan, memberikan informasi produk, menjaga kepuasan pelanggan, serta mempelajari dasar-dasar penjualan dan pengelolaan toko.',
    ],
    learningBullets: [
      'Interaksi dengan pelanggan',
      'Pelayanan dan komunikasi',
      'Informasi produk',
      'Pengelolaan stok sederhana',
      'Tanggung jawab dan konsistensi',
    ],
  },
  {
    id: 'exp-2',
    orderNumber: '02',
    title: 'Pelayanan & Pengelolaan Jasa Digital',
    period: 'Januari 2025 s.d. Sekarang',
    durationLabel: 'Aktif',
    type: 'Layanan Mandiri',
    responsibilities: [
      'Memberikan layanan secara langsung kepada pelanggan dengan memahami kebutuhan, menjelaskan informasi, melakukan koordinasi selama proses, menangani revisi, dan menindaklanjuti hingga pekerjaan selesai.',
    ],
    learningBullets: [
      'Komunikasi dengan pelanggan',
      'Memahami kebutuhan',
      'Menjelaskan solusi/informasi',
      'Koordinasi dan revisi',
      'Manajemen beberapa permintaan',
      'Follow-up hingga selesai',
    ],
  },
  {
    id: 'exp-3',
    orderNumber: '03',
    title: 'Pembelajaran Retail',
    period: 'Februari 2025 s.d. Sekarang',
    durationLabel: 'Pengembangan Mandiri',
    type: 'Persiapan Karir Retail',
    isLearningFocus: true,
    responsibilities: [
      'Secara aktif mempelajari berbagai materi terkait customer service, operasional toko, product display, planogram, dan stock management sebagai persiapan untuk bekerja di lingkungan retail.',
    ],
    learningBullets: [
      'Customer service fundamentals',
      'Operasional retail',
      'Penataan produk & display',
      'Planogram',
      'Stock management',
      'Komunikasi dan pelayanan pelanggan',
    ],
  },
];

export const workflowEvidenceData: WorkflowEvidenceItem[] = [
  {
    id: 'wf-1',
    sequence: '01',
    title: 'Tanya Jasa & Penawaran Tarif',
    subtitle: 'Alur Chat Nyata',
    shortDescription:
      'Menerima pesan awal dari pelanggan mengenai biaya publikasi berita kegiatan sosialisasi di media portal, dilayani secara cepat dengan transparansi tarif Rp 50.000 s.d. Rp 100.000.',
    privacyNote:
      'Identitas dan nomor telepon disamarkan demi privasi pelanggan sesuai etika profesional.',
    replacementGuide:
      'Tangkapan layar WhatsApp asli alur negosiasi dan respons awal.',
    screenshotUrl: '/assets/chat/chat_real_evidence_01.svg',
    screenshots: [
      '/assets/chat/chat_real_evidence_01.svg',
      '/assets/chat/chat_real_evidence_02.svg',
      '/assets/chat/chat_real_evidence_05.svg',
      '/assets/chat/chat_real_evidence_03.svg',
      '/assets/chat/chat_real_evidence_04.svg',
    ],
    chats: [
      {
        sender: 'client',
        text: 'assalamualaikum kak, untuk upload kegiatan di berita atau portal begitu kira-kira berapa ya?',
        time: '08.58',
      },
      {
        sender: 'taufik',
        text: 'Walaikumsalam, 50-100k ka tergantung isi teks dalam naskah',
        time: '09.01',
      },
      {
        sender: 'client',
        text: 'isi teks dalam naskah dari kita yang sediakan kak?',
        time: '09.02',
      },
    ],
  },
  {
    id: 'wf-2',
    sequence: '02',
    title: 'Memahami Kebutuhan',
    subtitle: 'Alur Chat Nyata',
    shortDescription:
      'Mendengarkan rincian kebutuhan naskah dan artikel dari pelanggan secara cermat, memastikan keakuratan berkas yang dikirim, serta mengonfirmasi kesiapan penulisan dan publikasi sesuai instruksi.',
    privacyNote:
      'Identitas dan nomor telepon disamarkan demi privasi pelanggan sesuai etika profesional.',
    replacementGuide:
      'Tangkapan layar WhatsApp asli alur identifikasi kebutuhan naskah dan penyesuaian berkas.',
    screenshotUrl: '/assets/chat/chat_kebutuhan_01.svg',
    screenshots: [
      '/assets/chat/chat_kebutuhan_01.svg',
      '/assets/chat/chat_kebutuhan_02.svg',
      '/assets/chat/chat_kebutuhan_03.svg',
      '/assets/chat/chat_kebutuhan_04.svg',
      '/assets/chat/chat_kebutuhan_05.svg',
    ],
    chats: [
      {
        sender: 'client',
        text: 'Judul Artikel: MENDOBRAK SIKLUS STRES DAN INSOMNIA: SOLUSI UNTUK TIDUR BERKUALITAS (1. Rahma Ramadhani Mooduto, 2. Moh. Ammar Farid, 3. Fatma Ismail, 4. Murhima A. Kau)',
        time: '20.12',
      },
      {
        sender: 'taufik',
        text: 'Okey siap ka 🙏',
        time: '20.13',
      },
      {
        sender: 'client',
        text: 'kak maaf yang ini slah file, ini kak yang baru: ARTIKEL psikologi.docx',
        time: '20.19',
      },
      {
        sender: 'taufik',
        text: 'Okey siap kak 🙏',
        time: '20.39',
      },
    ],
  },
  {
    id: 'wf-3',
    sequence: '03',
    title: 'Koordinasi & Revisi',
    subtitle: 'Alur Chat Nyata',
    shortDescription:
      'Menerima permintaan penyesuaian/revisi urutan nama dosen pembimbing dari pelanggan, melakukan pembaruan pada naskah artikel, dan menjelaskan estimasi sinkronisasi pembaruan sistem (~5 menit) hingga terbit sempurna.',
    privacyNote:
      'Identitas dan nomor telepon disamarkan demi privasi pelanggan sesuai etika profesional.',
    replacementGuide:
      'Tangkapan layar WhatsApp asli alur koordinasi revisi urutan nama dan konfirmasi pembaruan sistem.',
    screenshotUrl: '/assets/chat/chat_revisi_01.svg',
    screenshots: [
      '/assets/chat/chat_revisi_01.svg',
      '/assets/chat/chat_revisi_02.svg',
    ],
    chats: [
      {
        sender: 'client',
        text: 'Kak bisa di edit nama dosen in jadi di paling terakhir ka? Di bagian belakng namanya torang, Soalnya nilai ada kurang kalo nama dosen di depan 🙏🙏',
        time: '15.59',
      },
      {
        sender: 'taufik',
        text: 'Sudah ka, coba dicek ulang ka',
        time: '16.06',
      },
      {
        sender: 'taufik',
        text: 'Sudah ka tunggu 5 menit, baru bisa ka t update di sistem',
        time: '16.09',
      },
      {
        sender: 'client',
        text: 'Ohiyaa kak mksihh bnyak ka 🙏',
        time: '16.10',
      },
    ],
  },
  {
    id: 'wf-4',
    sequence: '04',
    title: 'Pekerjaan Selesai',
    subtitle: 'Alur Chat Nyata',
    shortDescription:
      'Melakukan serah terima hasil akhir publikasi, memastikan kepuasan pelanggan, menerima dan memvalidasi 19 bukti transfer serta transaksi dari berbagai mahasiswa (DANA, Seabank, Bank Muamalat, BTN, BRI), dan saling bertukar apresiasi secara ramah dan profesional.',
    privacyNote:
      'Nama kontak diseragamkan menjadi Customer Mahasiswa dan nomor telepon disensor demi privasi pelanggan sesuai etika profesional.',
    replacementGuide:
      'Tangkapan layar WhatsApp asli alur penyelesaian pekerjaan, 19 konfirmasi bukti transfer dan penyelesaian transaksi, serta apresiasi pelanggan.',
    screenshotUrl: '/assets/chat/chat_selesai_01.svg',
    screenshots: [
      '/assets/chat/chat_selesai_01.svg',
      '/assets/chat/chat_selesai_02.svg',
      '/assets/chat/chat_selesai_03.svg',
      '/assets/chat/chat_selesai_04.svg',
      '/assets/chat/chat_selesai_05.svg',
      '/assets/chat/chat_selesai_06.svg',
      '/assets/chat/chat_selesai_07.svg',
      '/assets/chat/chat_selesai_08.svg',
      '/assets/chat/chat_selesai_09.svg',
      '/assets/chat/chat_selesai_10.svg',
      '/assets/chat/chat_selesai_11.svg',
      '/assets/chat/chat_selesai_12.svg',
      '/assets/chat/chat_selesai_13.svg',
      '/assets/chat/chat_selesai_14.svg',
      '/assets/chat/chat_selesai_15.svg',
      '/assets/chat/chat_selesai_16.svg',
      '/assets/chat/chat_selesai_17.svg',
      '/assets/chat/chat_selesai_18.svg',
      '/assets/chat/chat_selesai_19.svg',
    ],
    chats: [
      {
        sender: 'client',
        text: 'sudah di transfer kak 🙏 mhon dicek',
        time: '15.08',
      },
      {
        sender: 'taufik',
        text: 'Iyaaa sudah so masuk, makasih banyak yaa 🙏🙏',
        time: '15.10',
      },
      {
        sender: 'client',
        text: 'terimakasih kembali kak sngat membantu 😇',
        time: '15.11',
      },
    ],
  },
];

export const realWorkBadges = {
  myRoles: [
    'Komunikasi dengan pelanggan',
    'Memahami kebutuhan pelanggan',
    'Pengelolaan permintaan',
    'Penentuan tarif berdasarkan kebutuhan',
    'Pelayanan pelanggan',
    'Tindak lanjut layanan',
    'Promosi organik',
    'Rekomendasi pelanggan',
  ],
  outcomesAndImpact: [
    'Periode layanan aktif: Desember 2024 s.d. Sekarang',
    'Total pelanggan terlayani: ±48 mahasiswa selama periode 2024 sampai 2025',
    '2024: Melayani sekitar ±30 mahasiswa dengan total pendapatan Rp2,3 juta, dengan tarif Rp50.000 s.d. Rp100.000 per artikel sesuai isi dan kebutuhan.',
    '2025: Melayani 18 mahasiswa dari 5 jurusan di Fakultas Ilmu Pendidikan Universitas Negeri Gorontalo, dengan tarif Rp100.000 per artikel dan total pendapatan Rp1,8 juta.',
    'Total pendapatan: Rp4,1 juta selama periode 2024 sampai 2025.',
    'Akuisisi pelanggan: Mengembangkan layanan melalui promosi organik dan rekomendasi pelanggan (word of mouth).',
    'Pelayanan pelanggan: Memahami kebutuhan, berkomunikasi selama proses, dan menindaklanjuti permintaan hingga layanan selesai.',
    'Pengelolaan layanan: Menyesuaikan tarif dan proses pengerjaan berdasarkan kebutuhan masing-masing pelanggan.',
    'Pengalaman yang diperoleh: Mengembangkan kemampuan pelayanan pelanggan, koordinasi, komunikasi, dan manajemen waktu melalui pengelolaan layanan secara mandiri.',
  ],
  whatILearned: [
    'Cara berkomunikasi dengan pelanggan',
    'Memahami kebutuhan pelanggan secara detail',
    'Menjelaskan solusi dengan jelas',
    'Menangani revisi dan perubahan permintaan',
    'Menjaga kepuasan pelanggan',
    'Pengelolaan permintaan dan penentuan tarif berdasarkan kebutuhan',
    'Pelayanan pelanggan dan tindak lanjut layanan hingga tuntas',
    'Membangun reputasi melalui promosi organik dan rekomendasi pelanggan',
  ],
};

export const schoolPlatformData = {
  title: 'PADDS SMANSAT',
  fullTitle: 'PADDS SMANSAT',
  summary:
    'Platform PADDS SMANSAT yang dikembangkan untuk membantu pengelolaan data administrasi sekolah dengan lebih mudah dan terstruktur.',
  status: 'Selesai (Demo Prototipe)',
  technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  note: 'Jika website sudah tidak aktif, bukti berupa 3 screenshot asli prototipe PADDS SMANSAT tetap digunakan sebagai dokumentasi resmi.',
  features: [
    {
      name: 'Manajemen Data Siswa & Arsip',
      description: 'Mengelola data siswa dan arsip dokumen sekolah secara terstruktur.',
    },
    {
      name: 'Manajemen Guru & Staf',
      description: 'Menyimpan dan mengelola data guru serta hak akses staf.',
    },
    {
      name: 'Absensi & Presensi',
      description: 'Pencatatan kehadiran siswa dan log aktivitas sistem.',
    },
    {
      name: 'Laporan & Retensi',
      description: 'Rekap data, laporan berkas, dan pemantauan retensi dokumen.',
    },
    {
      name: 'Pengumuman & Notifikasi',
      description: 'Informasi digital untuk siswa, guru, dan staf tata usaha.',
    },
  ] as SchoolFeature[],
  screenshots: [
    {
      id: 'sc-desktop',
      title: 'Dashboard Prototipe PADDS SMANSAT',
      caption: 'Tampilan antarmuka desktop untuk ringkasan metrik arsip dan status retensi.',
      placeholderLabel: 'Screenshot Desktop Dashboard',
      imageUrl: '/assets/padds/padds_desktop_dashboard.svg',
    },
    {
      id: 'sc-tablet',
      title: 'Manajemen Arsip Prototipe PADDS SMANSAT',
      caption: 'Tampilan antarmuka tablet untuk tabel berkas arsip dan kontrol filter data.',
      placeholderLabel: 'Screenshot Tablet Manajemen Arsip',
      imageUrl: '/assets/padds/padds_tablet_manajemen.svg',
    },
    {
      id: 'sc-mobile',
      title: 'Navigasi Menu Prototipe PADDS SMANSAT',
      caption: 'Tampilan antarmuka smartphone untuk drawer menu navigasi terintegrasi.',
      placeholderLabel: 'Screenshot Smartphone Navigasi',
      imageUrl: '/assets/padds/padds_mobile_drawer.svg',
    },
  ] as SchoolScreenshot[],
};

export const learningMaterialsData: LearningItem[] = [
  {
    id: 'learn-01',
    code: '01',
    categoryLabel: 'CUSTOMER SERVICE',
    title: 'Customer Service Fundamentals',
    category: 'Customer Service',
    platform: 'e-Training Kemnaker RI',
    formats: ['E-Learning', 'Video', 'Handout PBK'],
    image: portfolioImages.thumbnails.customerService,
    sourceUrl: 'https://e-training.kemnaker.go.id/belajarmandiri/modul/431/3067',
    overview:
      'Unit kompetensi standar Kemnaker RI mengenai pengetahuan, keterampilan, dan sikap kerja dalam berinteraksi serta berkomunikasi dengan beragam pelanggan ritel guna meningkatkan pengalaman berbelanja dan kepuasan konsumen.',
    whatILearnedBullets: [
      'Menyapa pelanggan sesuai kebiasaan dan kebudayaan setempat',
      'Membantu dan memandu pelanggan secara cermat selama proses transaksi belanja',
      'Membangun budaya pelayanan prima (service excellence) dan empati untuk menjaga kenyamanan toko',
      'Pemahaman istilah kunci: Customer (pelanggan) dan Service Excellent (pelayanan prima)',
    ],
  },
  {
    id: 'learn-02',
    code: '02',
    categoryLabel: 'RETAIL OPERATIONS',
    title: 'Operasional Toko Retail',
    category: 'Retail',
    platform: 'WIZAPE (Dasar-Dasar Manajemen Ritel)',
    formats: ['Modul Daring', 'Studi Kasus Ritel'],
    image: portfolioImages.thumbnails.retailOperations,
    sourceUrl: 'https://wizape.com/Bahasa%2BIndonesia/Dasar-Dasar-Manajemen-Ritel',
    overview:
      'Konsep operasional toko ritel berdasarkan kurikulum WIZAPE, mencakup pembagian kerja front-of-house dan back-of-house, alur lalu lintas pelanggan, sistem POS, serta pengukuran efisiensi toko.',
    whatILearnedBullets: [
      'Struktur operasional front-of-house (area penjualan, kasir) dan back-of-house (gudang, penerimaan)',
      'Manajemen arus lalu lintas pelanggan (traffic flow) dan pemilihan perlengkapan toko (fixtures)',
      'Pengendalian stok, pengisian ulang barang (replenishment), dan pencegahan kehilangan (loss prevention)',
      'Pengukuran kinerja toko melalui KPI ritel, operasional kasir POS, dan audit operasional berkala',
    ],
  },
  {
    id: 'learn-03',
    code: '03',
    categoryLabel: 'PRODUCT DISPLAY',
    title: 'Product Display & Store Layout',
    category: 'Display',
    platform: 'WIZAPE (Visual Merchandising)',
    formats: ['Modul Daring', 'Panduan Visual'],
    image: portfolioImages.thumbnails.visualMerchandising,
    sourceUrl: 'https://wizape.com/Bahasa%2BIndonesia/Visual-Merchandising-dan-Desain-Toko',
    overview:
      'Prinsip visual merchandising dan desain tata letak toko dari WIZAPE untuk menata tampilan dalam toko (in-store displays), pengelompokan produk, papan nama (signage), dan menciptakan atmosfer belanja yang menarik.',
    whatILearnedBullets: [
      'Prinsip visual merchandising: keseimbangan (balance), kontras, penekanan (emphasis), dan harmoni',
      'Teknik penataan dalam toko melalui pengelompokan produk (product grouping) dan pemilihan rak display',
      'Penerapan strategi papan nama (signage strategy) untuk kejelasan informasi harga dan promosi',
      'Pemanfaatan teori warna ritel, tata pencahayaan (lighting design), dan rotasi display berkala',
    ],
  },
  {
    id: 'learn-04',
    code: '04',
    categoryLabel: 'PLANOGRAM',
    title: 'Planogram di Retail',
    category: 'Planogram',
    platform: 'Tutorialbar / Akaaro (Retail Management)',
    formats: ['Silabus Sertifikasi', 'Diagram Visual'],
    image: portfolioImages.thumbnails.planogram,
    sourceUrl: 'https://www.tutorialbar.com/course/akaaro-retail-management',
    overview:
      'Materi khusus planogram dari silabus Akaaro Retail Management mengenai diagram penataan produk di rak, alokasi ruang pajang per meter persegi, dan teknik visual merchandising pendorong penjualan.',
    whatILearnedBullets: [
      'Pengertian diagram visual planogram dan fungsinya dalam standardisasi display rak toko',
      'Penataan susunan barang dagangan (merchandise arrangement) untuk mengurangi pemborosan dan kerusakan',
      'Penerapan teknik color blocking dan penataan produk unggulan di rak ujung lorong (endcaps)',
      'Prinsip penataan piramida (pyramid principle) dan optimalisasi perlengkapan rak (fixtures)',
    ],
  },
  {
    id: 'learn-05',
    code: '05',
    categoryLabel: 'STOCK MANAGEMENT',
    title: 'Manajemen Stok',
    category: 'Stock',
    platform: 'WIZAPE (Manajemen Inventaris Ritel)',
    formats: ['Modul Daring', 'Metode Inventaris'],
    image: portfolioImages.thumbnails.stockManagement,
    sourceUrl: 'https://wizape.com/Bahasa%2BIndonesia/Manajemen-Inventaris-dalam-Operasi-Ritel',
    overview:
      'Dasar manajemen persediaan ritel dari WIZAPE, mencakup penghitungan stok fisik, perputaran barang, pencegahan kehabisan atau penumpukan stok, serta teknik pengendalian inventaris.',
    whatILearnedBullets: [
      'Menjaga tingkat inventaris optimal guna meminimalkan kehabisan stok (stockout) dan kelebihan stok (overstock)',
      'Klasifikasi dan prioritas barang melalui analisis ABC serta metode perputaran persediaan',
      'Pelaksanaan stock counting (stock opname) dan cycle counting berkala untuk validasi akurasi data fisik vs sistem',
      'Pengendalian biaya persediaan (holding & ordering costs) dan pemanfaatan sistem kontrol otomatis',
    ],
  },
  {
    id: 'learn-06',
    code: '06',
    categoryLabel: 'KOMUNIKASI',
    title: 'Komunikasi di Tempat Kerja',
    category: 'Komunikasi',
    platform: 'e-Training Kemnaker RI',
    formats: ['E-Learning', 'Video', 'Buku Materi PBK'],
    image: portfolioImages.thumbnails.communication,
    sourceUrl: 'https://e-training.kemnaker.go.id/belajarmandiri/modul/447/3288',
    overview:
      'Unit kompetensi resmi Kementerian Ketenagakerjaan RI mengenai komunikasi profesional, penerapan nilai dan aturan kerja, teknik menyimak aktif, kerja kelompok, serta penyelesaian keluhan pelanggan.',
    whatILearnedBullets: [
      'Identifikasi nilai dan peraturan di tempat kerja untuk membangun kebiasaan dan budaya kerja positif',
      'Penerapan teknik menyimak aktif (active listening) tanpa memotong pembicaraan demi ketepatan informasi',
      'Kerja sama kelompok: mendiskusikan tanggapan, merespons pandangan orang lain, dan menyampaikan tujuan dengan tepat',
      'Penanganan keluhan pelanggan dengan langkah solutif guna mengubah keluhan menjadi peluang pelayanan',
    ],
  },
];

export const skillGroupsData: SkillGroupData[] = [
  {
    category: 'Customer Service',
    description: 'Kombinasi keterampilan pelayanan pelanggan.',
    iconType: 'customer',
    skills: [
      { name: 'Pelayanan pelanggan' },
      { name: 'Komunikasi interpersonal' },
      { name: 'Identifikasi kebutuhan' },
      { name: 'Problem solving' },
      { name: 'Penanganan keluhan' },
      { name: 'Membangun hubungan baik' },
    ],
  },
  {
    category: 'Retail',
    description: 'Keterampilan operasional toko fisik.',
    iconType: 'retail',
    skills: [
      { name: 'Operasional toko' },
      { name: 'Penataan produk' },
      { name: 'Display produk' },
      { name: 'Planogram' },
      { name: 'Manajemen stok' },
      { name: 'Kebersihan dan kerapian toko' },
    ],
  },
  {
    category: 'Work Skills',
    description: 'Sikap kerja, ketelitian, dan integritas.',
    iconType: 'work',
    skills: [
      { name: 'Ketelitian' },
      { name: 'Tanggung jawab' },
      { name: 'Manajemen waktu' },
      { name: 'Kerja sama tim' },
      { name: 'Adaptabilitas' },
      { name: 'Bekerja di bawah tekanan' },
    ],
  },
  {
    category: 'Digital Skills',
    description: 'Kemampuan digital dan sistem pendukung kerja.',
    iconType: 'digital',
    skills: [
      { name: 'Microsoft Word' },
      { name: 'Microsoft Excel' },
      { name: 'Google Sheets' },
      { name: 'Data entry' },
      { name: 'Manajemen informasi' },
      { name: 'Operasional platform website' },
      { name: 'Dokumentasi digital' },
    ],
  },
];

export const toolsData: ToolItem[] = [
  // 1. Office & Workspace
  {
    name: 'Microsoft Word',
    role: 'Pengolah Dokumen',
    category: 'Office & Workspace',
    iconName: 'word',
    percentage: '95%',
  },
  {
    name: 'Microsoft Excel',
    role: 'Pengolah Data & Angka',
    category: 'Office & Workspace',
    iconName: 'excel',
    percentage: '95%',
  },
  {
    name: 'Google Sheets',
    role: 'Spreadsheet Kolaboratif',
    category: 'Office & Workspace',
    iconName: 'sheets',
    percentage: '90%',
  },
  {
    name: 'Notion',
    role: 'Dokumentasi & Catatan',
    category: 'Office & Workspace',
    iconName: 'notion',
    percentage: '88%',
  },

  // 2. AI & Web Creation
  {
    name: 'Base44',
    role: 'AI Tools Platform',
    category: 'AI & Web Creation',
    iconName: 'base44',
    percentage: '88%',
  },
  {
    name: 'Google AI Studio',
    role: 'AI Engineering & Prompt',
    category: 'AI & Web Creation',
    iconName: 'google ai studio',
    percentage: '90%',
  },
  {
    name: 'Antigravity',
    role: 'AI Agent & Dev',
    category: 'AI & Web Creation',
    iconName: 'antigravity',
    percentage: '88%',
  },
  {
    name: 'Replit',
    role: 'Cloud Development',
    category: 'AI & Web Creation',
    iconName: 'replit',
    percentage: '80%',
  },
  {
    name: 'Google Stitch',
    role: 'UI & App Prototype',
    category: 'AI & Web Creation',
    iconName: 'google stitch',
    percentage: '80%',
  },

  // 3. Desain & Multimedia
  {
    name: 'Canva',
    role: 'Desain Visual & Grafis',
    category: 'Desain & Media',
    iconName: 'canva',
    percentage: '88%',
  },
  {
    name: 'CapCut',
    role: 'Penyuntingan Video',
    category: 'Desain & Media',
    iconName: 'capcut',
    percentage: '85%',
  },
  {
    name: 'Higgsfield',
    role: 'AI Video & Motion',
    category: 'Desain & Media',
    iconName: 'higgsfield',
    percentage: '80%',
  },

  // 4. Backend & Database
  {
    name: 'Firebase',
    role: 'Backend & Realtime DB',
    category: 'Backend & Database',
    iconName: 'firebase',
    percentage: '80%',
  },
  {
    name: 'Supabase',
    role: 'PostgreSQL & Cloud DB',
    category: 'Backend & Database',
    iconName: 'supabase',
    percentage: '80%',
  },

  // 5. Hosting & Publikasi
  {
    name: 'Exabytes',
    role: 'Hosting & Domain',
    category: 'Hosting & Publikasi',
    iconName: 'exabytes',
    percentage: '80%',
  },
  {
    name: 'Lonex',
    role: 'Web Server & Publikasi',
    category: 'Hosting & Publikasi',
    iconName: 'lonex',
    percentage: '80%',
  },
];

export const contactData: ContactChannel[] = [
  {
    platform: 'WhatsApp',
    label: 'WhatsApp',
    value: '+62 856 5638 1485',
    isAvailable: true,
    actionUrl: 'https://api.whatsapp.com/send?phone=6285656381485',
    placeholderText: 'Terhubung melalui pesan instan WhatsApp',
    iconType: 'whatsapp',
  },
  {
    platform: 'Email',
    label: 'Email',
    value: 'taufikmalii281003@gmail.com',
    isAvailable: true,
    actionUrl: 'mailto:taufikmalii281003@gmail.com',
    placeholderText: 'Kirim surat elektronik resmi',
    iconType: 'email',
  },
  {
    platform: 'LinkedIn',
    label: 'LinkedIn',
    value: 'Taufik Hidayat Malii',
    isAvailable: true,
    actionUrl: 'https://www.linkedin.com/in/taufik-hidayat-malii-bb54bb343',
    placeholderText: 'Koneksi jaringan kerja profesional',
    iconType: 'linkedin',
  },
  {
    platform: 'Lokasi',
    label: 'Lokasi',
    value: 'Gorontalo, Indonesia',
    isAvailable: true,
    actionUrl: 'https://www.google.com/maps/search/?api=1&query=Gorontalo,+Indonesia',
    placeholderText: 'Buka lokasi Gorontalo di Google Maps',
    iconType: 'location',
  },
];

export const cvConfiguration: CvConfig = {
  fileName: 'CV_Taufik_Hidayat_Malii.pdf',
  fileSize: '1.2 MB',
  lastUpdated: '2025',
  downloadUrl: '/cv.pdf',
  isAvailable: true,
};

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Klien Mahasiswa',
    role: 'Layanan Digital & Publikasi Artikel',
    category: 'LAYANAN DIGITAL & PUBLIKASI ARTIKEL',
    quote:
      'Enak diajak komunikasi, fast respon. Pas kami minta revisi nama dosen pengampu buat penilaian UAS, langsung dibenerin. Cepat sekali, hitungan menit langsung beres dan aktif tepat waktu.',
    stars: 5,
  },
  {
    id: 'testi-2',
    name: 'Klien Mahasiswa (Kelompok Artikel)',
    role: 'Publikasi Artikel',
    category: 'PUBLIKASI ARTIKEL',
    quote:
      'Orangnya ramah dan sangat membantu, apalagi pas kami lagi dikejar deadline tugas kuliah. Penjelasannya jelas, publikasinya juga cepat. Setiap ada perubahan susunan penulis, dicek lagi dengan teliti, jadi kami tenang.',
    stars: 5,
  },
  {
    id: 'testi-3',
    name: 'Staf Tata Usaha & Kesiswaan',
    role: 'Pengguna Program Arsip Digital',
    category: 'PENGGUNA PROGRAM ARSIP DIGITAL',
    quote:
      'Program ini sangat membantu untuk cari arsip dan urus dokumen administrasi. Menunya gampang dipahami, formulirnya juga jelas. Staf yang baru belajar pakai sistem digital pun bisa langsung paham cara pakainya.',
    stars: 5,
  },
  {
    id: 'testi-4',
    name: 'Rekan Kelompok Mahasiswa',
    role: 'Kolaborasi Publikasi Mandiri',
    category: 'KOLABORASI PUBLIKASI MANDIRI',
    quote:
      'Tanggung jawab dan bisa dipercaya. Dari pemeriksaan naskah, konfirmasi revisi, sampai bukti transfer dan link publikasi, semuanya disampaikan dengan jelas dan transparan. Jadi kami tenang.',
    stars: 5,
  },
];
