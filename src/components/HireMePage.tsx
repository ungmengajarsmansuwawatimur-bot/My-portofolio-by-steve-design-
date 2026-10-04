import React, { useState } from 'react';
import { portfolioImages } from '../assets/images';
import { contactData, testimonialsData } from '../data/portfolioData';
import { MarqueeTicker } from './MarqueeTicker';
import { downloadCv } from '../utils/downloadCv';
import { EditableImage } from './EditableImage';

interface HireMePageProps {
  onBackToHome: () => void;
  onOpenCvModal: () => void;
}

const SERVICES_LIST = [
  {
    number: '01',
    title: 'Pelayanan Kasir POS & Transaksi',
    category: 'RETAIL FRONT-LINE',
    desc: 'Melayani transaksi kasir harian dengan cermat, teliti dalam perhitungan uang tunai dan pembayaran digital (QRIS), serta menyambut setiap pembeli dengan budaya salam, senyum, dan sapa.',
    capabilities: ['Transaksi Kasir POS', 'Rekonsiliasi Kas Harian', 'Pelayanan Ramah & Komunikatif'],
  },
  {
    number: '02',
    title: 'Penataan Display Produk & Prinsip FIFO',
    category: 'STORE MERCHANDISING',
    desc: 'Menata produk di rak etalase sesuai planogram standar toko, menerapkan rotasi FIFO (First In First Out) secara ketat untuk mencegah barang expired, serta menjaga kebersihan lorong belanja.',
    capabilities: ['Penerapan Rotasi FIFO', 'Penataan Rak Planogram', 'Kebersihan & Kerapian Toko'],
  },
  {
    number: '03',
    title: 'Pengelolaan Stok & Pengecekan Fisik',
    category: 'INVENTORY & WAREHOUSE',
    desc: 'Melakukan stock opname berkala, mencocokkan data stok sistem dengan fisik barang, membantu proses penerimaan pasokan barang datang, serta menandai produk yang mendekati batas minimum.',
    capabilities: ['Stock Opname Fisik', 'Pencatatan Masuk/Keluar Barang', 'Deteksi Stok Kritis'],
  },
  {
    number: '04',
    title: 'Layanan Jasa Digital & Pengetikan Dokumen',
    category: 'DIGITAL & ADMINISTRATIVE',
    desc: 'Berpengalaman mendampingi klien mahasiswa dalam pengurusan publikasi naskah artikel ilmiah, pengelolaan dokumen kesiswaan, pengetikan rapi, serta pengoperasian spreadsheet Google Sheets.',
    capabilities: ['Asistensi Publikasi Naskah', 'Google Sheets & Workspace', 'Komunikasi Follow-up Cepat'],
  },
] as const;

const TICKER_ITEMS_1 = [
  'OPERASIONAL TOKO RETAIL',
  'DISPLAY PRODUK FIFO',
  'KASIR POS & TRANSAKSI TUNAI/QRIS',
  'PELAYANAN KONSUMEN RAMAH',
  'PENGARSIPAN DIGITAL',
  'DISIPLIN KERJA TINGGI',
  'SIAP SISTEM SHIFT',
  'DOMISILI GORONTALO',
];

const TICKER_ITEMS_2 = [
  'KONSISTEN MEMBANTU USAHA SEJAK 2016',
  'ORIENTASI KEPUASAN PELANGGAN',
  'KOMUNIKATIF & TANGGAP TERHADAP MASALAH',
  'CEPAT BELAJAR SISTEM BARU',
  'ETOS KERJA BERTANGGUNG JAWAB',
];

export const HireMePage: React.FC<HireMePageProps> = ({ onBackToHome, onOpenCvModal }) => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Pramuniaga & Kasir Toko Retail',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitted'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMessage('Mohon cantumkan nama lengkap Anda.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Mohon tuliskan pesan atau rincian tawaran kerja.');
      return;
    }

    const targetPhone = '6285656381485';
    const textLines = [
      `Halo Taufik Hidayat Malii, saya ingin mendiskusikan peluang kerja/proyek:`,
      ``,
      `*Nama:* ${formData.name.trim()}`,
      `*Email:* ${formData.email.trim() || '-'}`,
      `*No. Telepon / WA:* ${formData.phone.trim() || '-'}`,
      `*Posisi / Kategori:* ${formData.serviceType}`,
      ``,
      `*Pesan / Rincian Tawaran:*`,
      `${formData.message.trim()}`,
    ];

    const encodedText = encodeURIComponent(textLines.join('\n'));
    const waUrl = `https://api.whatsapp.com/send?phone=${targetPhone}&text=${encodedText}`;

    setFormStatus('submitted');
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSendEmail = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      setErrorMessage('Mohon lengkapi nama dan pesan terlebih dahulu.');
      return;
    }

    const subject = encodeURIComponent(`[Tawaran Kerja] dari ${formData.name}`);
    const body = encodeURIComponent(
      `Halo Taufik Hidayat Malii,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}\n`
    );

    setFormStatus('submitted');
    window.location.href = `mailto:taufikmalii281003@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <article className="min-h-screen bg-white dark:bg-[#121212] text-[#171717] dark:text-[#F5F5F5] transition-colors duration-200">
      
      {/* ========================================================================= */}
      {/* 1. PAGE INTRODUCTION & EDITORIAL HEADER                                    */}
      {/* ========================================================================= */}
      <section className="pt-8 sm:pt-12 pb-10 sm:pb-14 border-b border-[#171717]/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          {/* Main Giant Editorial Heading */}
          <div className="max-w-4xl mx-auto space-y-3">
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-[#171717] dark:text-white leading-[1.08]">
              Hubungi &amp; Rekrut Taufik Hidayat
            </h1>
            <p className="font-body text-base sm:text-lg md:text-xl text-[#555555] dark:text-[#B0B0B0] max-w-2xl mx-auto leading-relaxed font-normal">
              Siap berkontribusi secara langsung pada operasional toko retail, pelayanan pelanggan kasir, dan penanganan tugas digital dengan etos kerja disiplin.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. VISUAL CONTEXT SECTION (LARGE WORKSPACE BANNER FROM PORTFOLIO ASSETS)  */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-12 bg-[#F9F9F9] dark:bg-[#161616] border-b border-[#171717]/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative border-2 border-[#171717] dark:border-white/20 bg-white dark:bg-[#1E1E1E] shadow-[6px_6px_0px_#171717] dark:shadow-[6px_6px_0px_#d1fe17] rounded-xs overflow-hidden">
            <div className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[460px] overflow-hidden">
              <EditableImage
                storageKey="hire_me_workspace_banner"
                defaultSrc={portfolioImages.creativeDeskBanner}
                darkSrc={portfolioImages.retailBannerDark}
                alt="Aktivitas Perencanaan & Meja Kerja Taufik Hidayat Malii"
                containerClassName="w-full h-full"
                imgClassName="w-full h-full object-cover object-center select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CONTACT & HIRE ME MAIN SECTION (EDITORIAL INTRO + FORM + CHANNELS)     */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            
            {/* LEFT COLUMN: Editorial Positioning & Direct Channels (Col 1-5) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Section Kicker & Big Subhead */}
              <div className="space-y-3">
                <div className="font-display inline-flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase text-[#F9B51B] dark:text-[#d1fe17]">
                  <span aria-hidden="true">✦</span>
                  <span>TERHUBUNG LANGSUNG</span>
                  <span aria-hidden="true">✦</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[#171717] dark:text-white tracking-tight leading-snug">
                  Mari Diskusikan Kebutuhan Toko atau Proyek Anda
                </h2>
              </div>

              {/* Editorial Copy */}
              <div className="font-body space-y-4 text-sm sm:text-base text-[#555555] dark:text-[#CCCCCC] leading-relaxed font-normal text-justify">
                <p>
                  Siap bergabung untuk mengisi posisi <strong>Pramuniaga</strong>, <strong>Kasir Toko</strong>, atau <strong>Staff Operasional Retail</strong>. Berbekal pengalaman lebih dari 8 tahun membantu operasional usaha mandiri keluarga di Gorontalo, saya terbiasa melayani beragam karakter pelanggan dengan ramah, jujur, dan bertanggung jawab.
                </p>
                <p>
                  Tersedia untuk penugasan sistem shift (pagi, siang, maupun malam), bekerja pada akhir pekan, serta siap mengikuti pelatihan prosedur kerja ritel modern secara disiplin.
                </p>
              </div>

              {/* Direct Contact Cards (Inspired by Steve Mengelkoch circular yellow icon rows) */}
              <div className="space-y-4 pt-2">
                
                {/* Telepon / WhatsApp */}
                <a
                  href="https://api.whatsapp.com/send?phone=6285656381485&text=Halo%20Taufik%20Hidayat,%20saya%20ingin%20mendiskusikan%20peluang%20kerja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-3.5 sm:p-4 rounded-xs border-2 border-[#171717] dark:border-white/20 bg-[#FBFBFB] dark:bg-[#1A1A1A] hover:bg-[#FFF8E7] dark:hover:bg-[#252525] shadow-[3px_3px_0px_#171717] dark:shadow-[3px_3px_0px_#F9B51B] dark:shadow-[3px_3px_0px_#d1fe17] transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F9B51B] dark:bg-[#d1fe17] border-2 border-[#171717] text-[#171717] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="font-info block text-xs text-[#666666] dark:text-[#A3A3A3] uppercase tracking-wider">
                      WhatsApp / Telepon:
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base text-[#171717] dark:text-white group-hover:text-[#F9B51B] dark:group-hover:text-[#F9B51B] dark:text-[#d1fe17] transition-colors truncate block">
                      +62 856 5638 1485
                    </span>
                  </div>
                  <span className="text-sm font-bold text-[#171717] dark:text-white group-hover:translate-x-1 transition-transform pr-1">
                    &rarr;
                  </span>
                </a>

                {/* Email Resmi */}
                <a
                  href="mailto:taufikmalii281003@gmail.com"
                  className="group flex items-center gap-4 p-3.5 sm:p-4 rounded-xs border-2 border-[#171717] dark:border-white/20 bg-[#FBFBFB] dark:bg-[#1A1A1A] hover:bg-[#FFF8E7] dark:hover:bg-[#252525] shadow-[3px_3px_0px_#171717] dark:shadow-[3px_3px_0px_#F9B51B] dark:shadow-[3px_3px_0px_#d1fe17] transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F9B51B] dark:bg-[#d1fe17] border-2 border-[#171717] text-[#171717] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="font-info block text-xs text-[#666666] dark:text-[#A3A3A3] uppercase tracking-wider">
                      Email Resmi:
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base text-[#171717] dark:text-white group-hover:text-[#F9B51B] dark:group-hover:text-[#F9B51B] dark:text-[#d1fe17] transition-colors truncate block">
                      taufikmalii281003@gmail.com
                    </span>
                  </div>
                  <span className="text-sm font-bold text-[#171717] dark:text-white group-hover:translate-x-1 transition-transform pr-1">
                    &rarr;
                  </span>
                </a>

              </div>
            </div>

            {/* RIGHT COLUMN: Architectural Form Container (Col 6-12) */}
            <div className="lg:col-span-7">
              <div className="bg-[#FBFBFB] dark:bg-[#1A1A1A] border-2 border-[#171717] dark:border-white/20 p-6 sm:p-8 lg:p-10 rounded-xs shadow-[6px_6px_0px_#171717] dark:shadow-[6px_6px_0px_#d1fe17] transition-colors">
                
                {/* Form Header */}
                <div className="border-b border-[#171717]/15 dark:border-white/10 pb-4 mb-6">
                  <div className="font-display inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#F9B51B] dark:text-[#d1fe17] uppercase">
                    <span>✦ FORMULIR TERTULIS ✦</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#171717] dark:text-white mt-1 tracking-tight">
                    Kirim Pesan / Kebutuhan Rekrutmen
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] mt-1 font-normal">
                    Pesan Anda dapat langsung dikirimkan melalui surat elektronik resmi.
                  </p>
                </div>

                {/* Success Feedback Banner */}
                {formStatus === 'submitted' && (
                  <div className="mb-6 p-4 rounded-xs border-2 border-[#31543A] bg-[#31543A]/10 text-[#31543A] dark:text-[#A8E6CF] text-xs sm:text-sm space-y-1">
                    <p className="font-display font-bold">
                      ✓ Pesan Anda telah siap dan diarahkan ke kontak resmi Taufik.
                    </p>
                    <p className="font-body text-xs text-[#555555] dark:text-[#CCCCCC]">
                      Jika aplikasi WhatsApp belum terbuka secara otomatis, Anda juga dapat mengirimkannya via email atau mengulang kembali.
                    </p>
                  </div>
                )}

                {/* Error Banner */}
                {errorMessage && (
                  <div className="mb-6 p-3 rounded-xs border-2 border-red-600 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 text-xs font-semibold">
                    ⚠ {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSendEmail} className="space-y-5">
                  {/* Grid 2 Columns for Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="hire-name" className="font-display text-xs font-bold text-[#171717] dark:text-white uppercase tracking-wider block">
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="hire-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nama Anda / Perusahaan"
                        className="w-full px-3.5 py-2.5 rounded-xs border-2 border-[#171717]/25 dark:border-white/20 bg-white dark:bg-[#252525] text-[#171717] dark:text-white placeholder-[#999999] text-xs sm:text-sm focus:border-[#F9B51B] dark:border-[#d1fe17] focus:ring-2 focus:ring-[#F9B51B] dark:ring-[#d1fe17]/30 outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="hire-email" className="font-display text-xs font-bold text-[#171717] dark:text-white uppercase tracking-wider block">
                        Alamat Email
                      </label>
                      <input
                        id="hire-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@perusahaan.com"
                        className="w-full px-3.5 py-2.5 rounded-xs border-2 border-[#171717]/25 dark:border-white/20 bg-white dark:bg-[#252525] text-[#171717] dark:text-white placeholder-[#999999] text-xs sm:text-sm focus:border-[#F9B51B] dark:border-[#d1fe17] focus:ring-2 focus:ring-[#F9B51B] dark:ring-[#d1fe17]/30 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="hire-message" className="font-display text-xs font-bold text-[#171717] dark:text-white uppercase tracking-wider block">
                      Pesan / Rincian Tawaran <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="hire-message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Jelaskan kebutuhan peran, jadwal shift toko, lokasi penempatan, atau lingkup proyek yang ingin didiskusikan..."
                      className="w-full p-3.5 rounded-xs border-2 border-[#171717]/25 dark:border-white/20 bg-white dark:bg-[#252525] text-[#171717] dark:text-white placeholder-[#999999] text-xs sm:text-sm focus:border-[#F9B51B] dark:border-[#d1fe17] focus:ring-2 focus:ring-[#F9B51B] dark:ring-[#d1fe17]/30 outline-none transition-all"
                    />
                  </div>

                  {/* Action Buttons Row */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    {/* Primary Button: Email */}
                    <button
                      type="submit"
                      className="font-display flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xs text-xs sm:text-sm font-bold tracking-wider uppercase bg-[#F9B51B] dark:bg-[#d1fe17] hover:bg-[#e0a012] dark:hover:bg-[#bce610] text-[#171717] border-2 border-[#171717] shadow-[3px_3px_0px_#171717] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer select-none"
                    >
                      <span>KIRIM VIA EMAIL</span>
                      <span className="text-base" aria-hidden="true">&rarr;</span>
                    </button>
                  </div>

                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FIRST HORIZONTAL TICKER / MARQUEE TRANSITION                           */}
      {/* ========================================================================= */}
      <MarqueeTicker
        items={[...TICKER_ITEMS_1]}
        speed="slow"
      />

      {/* ========================================================================= */}
      {/* 5. SERVICES / WHAT I CAN HELP WITH (STRUCTURED EDITORIAL LIST)            */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#121212] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Kicker & Title */}
          <div className="max-w-3xl space-y-2.5">
            <div className="font-display inline-flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase text-[#F9B51B] dark:text-[#d1fe17]">
              <span aria-hidden="true">✦</span>
              <span>LAYANAN &amp; KOMPETENSI KERJA</span>
              <span aria-hidden="true">✦</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-semibold text-[#171717] dark:text-white tracking-tight leading-tight">
              Kualifikasi &amp; Peran yang Siap Dijalankan
            </h2>
            <p className="font-body text-sm sm:text-base text-[#666666] dark:text-[#A3A3A3] font-normal leading-relaxed">
              Pengalaman operasional nyata yang didukung oleh kemampuan komunikasi pelanggan dan ketelitian administrasi.
            </p>
          </div>

          {/* Structured Editorial Rows (Anti-AI-Slop, Zero Candy Badges) */}
          <div className="divide-y-2 divide-[#171717]/15 dark:divide-white/10 border-y-2 border-[#171717]/15 dark:border-white/10">
            {SERVICES_LIST.map((srv) => (
              <div
                key={srv.number}
                className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start hover:bg-[#F9F9F9] dark:hover:bg-[#181818] transition-colors px-2 sm:px-4 -mx-2 sm:-mx-4"
              >
                {/* Col 1-3: Number */}
                <div className="md:col-span-3 flex items-center justify-center text-center self-center">
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#F9B51B] dark:text-[#d1fe17] tracking-tight text-center">
                    {srv.number}
                  </span>
                </div>

                {/* Col 4-8: Title & Detailed Description */}
                <div className="md:col-span-6 space-y-2">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#171717] dark:text-white tracking-tight">
                    {srv.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#555555] dark:text-[#B0B0B0] leading-relaxed font-normal text-justify">
                    {srv.desc}
                  </p>
                </div>

                {/* Col 9-12: Unboxed Clean Capabilities Checklist */}
                <div className="md:col-span-3 space-y-1.5 pt-1">
                  <span className="font-info text-[10px] font-bold text-[#888888] uppercase tracking-widest block">
                    Cakupan Tugas:
                  </span>
                  <ul className="space-y-1 text-xs font-info text-[#171717] dark:text-white">
                    {srv.capabilities.map((cap, cIdx) => (
                      <li key={cIdx} className="flex items-center gap-2">
                        <span className="text-[#F9B51B] dark:text-[#d1fe17] font-bold" aria-hidden="true">✓</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. TESTIMONIALS / WHAT CLIENTS SAY (FROM STEVE MENGELKOCH SCREENSHOT 2)  */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#F5F5F5] dark:bg-[#18181B] border-t border-[#171717]/15 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Kicker & Title */}
          <div className="text-center space-y-2.5 max-w-2xl mx-auto">
            <div className="font-display inline-flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase text-[#F9B51B] dark:text-[#d1fe17]">
              <span aria-hidden="true">✦</span>
              <span>TESTIMONI &amp; REPUTASI KERJA</span>
              <span aria-hidden="true">✦</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-semibold text-[#171717] dark:text-white tracking-tight">
              Apa Kata Klien &amp; Rekan Kerja
            </h2>
            <p className="font-body text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3]">
              Pengalaman nyata dari mereka yang telah berkolaborasi langsung bersama Taufik.
            </p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonialsData.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-[#202022] border-2 border-[#171717] dark:border-white/20 p-6 sm:p-7 rounded-xs shadow-[4px_4px_0px_#171717] dark:shadow-[4px_4px_0px_#F9B51B] dark:shadow-[4px_4px_0px_#d1fe17] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-info font-bold text-[#F9B51B] dark:text-[#d1fe17] tracking-wider uppercase">
                      {item.category}
                    </span>
                    <span className="text-[#F9B51B] dark:text-[#d1fe17] font-bold">★★★★★</span>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-[#444444] dark:text-[#CCCCCC] leading-relaxed italic text-justify">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-3 border-t border-[#171717]/10 dark:border-white/10">
                  <div className="font-display font-bold text-xs sm:text-sm text-[#171717] dark:text-white">
                    {item.name}
                  </div>
                  <div className="font-info text-[11px] text-[#777777] dark:text-[#A3A3A3]">
                    {item.role}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SECOND HORIZONTAL TICKER / MARQUEE TRANSITION                          */}
      {/* ========================================================================= */}
      <div className="w-full overflow-hidden bg-[#31543A] py-4.5 sm:py-5 select-none border-y-2 border-[#171717] relative z-20">
        <div className="animate-ticker flex items-center" style={{ animationDuration: '65s' }}>
          {[...Array(4)].map((_, loopIdx) => (
            <div key={loopIdx} className="flex items-center shrink-0">
              {TICKER_ITEMS_2.map((item, idx) => (
                <div key={idx} className="flex items-center shrink-0">
                  <span className="font-display text-sm sm:text-base font-semibold tracking-wider text-white px-4 sm:px-5 uppercase whitespace-nowrap">
                    {item}
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-[#F9B51B] dark:text-[#d1fe17] shrink-0 inline-flex items-center justify-center leading-none" aria-hidden="true">
                    ✦
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 8. FINAL CLOSING CTA SECTION (STEVE MENGELKOCH LET'S WORK TOGETHER DUAL) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#171717] text-white transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
              Siap Berkontribusi Mulai Hari Ini
            </h2>
          </div>

          {/* Two Structured Editorial Action Options (Matching Reference Screenshot 2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Card 1: Direct Job Opportunity Discussion */}
            <div className="bg-[#222222] border-2 border-[#444444] hover:border-[#F9B51B] dark:border-[#d1fe17] p-6 sm:p-8 rounded-xs shadow-[4px_4px_0px_#F9B51B] dark:shadow-[4px_4px_0px_#d1fe17] flex flex-col justify-between space-y-6 transition-all">
              <div className="space-y-2">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Tertarik Mendiskusikan Peluang Kerja?
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#CCCCCC] leading-relaxed font-normal">
                  Hubungi langsung melalui WhatsApp resmi untuk konfirmasi jadwal wawancara, tanya jawab kualifikasi, atau penawaran shift toko.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                <span className="font-display font-bold text-sm sm:text-base text-white truncate">
                  +62 856 5638 1485
                </span>
                <a
                  href="https://api.whatsapp.com/send?phone=6285656381485"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#F9B51B] dark:bg-[#d1fe17] hover:bg-[#e0a012] dark:hover:bg-[#bce610] text-[#171717] flex items-center justify-center font-bold text-base transition-transform hover:scale-110 active:scale-95 shrink-0"
                  aria-label="Kirim WhatsApp"
                >
                  &rarr;
                </a>
              </div>
            </div>

            {/* Card 2: CV Review & Official Resume */}
            <div className="bg-[#222222] border-2 border-[#444444] hover:border-[#F9B51B] dark:border-[#d1fe17] p-6 sm:p-8 rounded-xs shadow-[4px_4px_0px_#F9B51B] dark:shadow-[4px_4px_0px_#d1fe17] flex flex-col justify-between space-y-6 transition-all">
              <div className="space-y-2">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Ingin Meninjau Berkas CV Lengkap?
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#CCCCCC] leading-relaxed font-normal">
                  Tinjau lembar Curriculum Vitae resmi Taufik Hidayat Malii yang memuat riwayat pendidikan, matriks keahlian ritel, serta riwayat operasional.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                <span className="font-display font-bold text-sm sm:text-base text-white">
                  Curriculum Vitae (PDF)
                </span>
                <button
                  type="button"
                  onClick={onOpenCvModal || downloadCv}
                  className="w-10 h-10 rounded-full bg-[#F9B51B] dark:bg-[#d1fe17] hover:bg-[#e0a012] dark:hover:bg-[#bce610] text-[#171717] flex items-center justify-center font-bold text-base transition-transform hover:scale-110 active:scale-95 cursor-pointer shrink-0"
                  aria-label="Unduh CV Resmi PDF"
                  title="Unduh CV Resmi Taufik Hidayat Malii (PDF)"
                >
                  ↓
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Return To Home Button */}
          <div className="pt-8 border-t border-white/10 flex justify-center">
            <button
              type="button"
              onClick={onBackToHome}
              className="font-display inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white/80 hover:text-white border border-white/20 hover:border-white transition-colors cursor-pointer select-none"
            >
              <span>&larr;</span>
              <span>KEMBALI KE HALAMAN UTAMA BERANDA</span>
            </button>
          </div>

        </div>
      </section>

    </article>
  );
};
