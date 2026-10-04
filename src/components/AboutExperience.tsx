import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  candidateProfile,
  experienceData,
  coreValues,
} from '../data/portfolioData';

interface AboutExperienceProps {
  onOpenStoreModal?: () => void;
}

const AnimatedCounter: React.FC<{
  target: number;
  suffix?: string;
  duration?: number;
}> = ({ target, suffix = '', duration = 2200 }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic for a silky smooth finish
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(easeOut * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

export const AboutExperience: React.FC<AboutExperienceProps> = () => {
  const [activeCredential, setActiveCredential] = React.useState<'university' | 'major'>('major');

  const backgroundItems = [
    {
      id: 'bg-1',
      type: 'experience' as const,
      category: 'Pengalaman Kerja',
      period: '2016 – Sekarang (± 8 Tahun)',
      periodBadge: 'Paruh Waktu',
      title: 'Pengelolaan Usaha Keluarga',
      subtitle: 'Operasional Usaha Mandiri',
      description:
        'Membantu operasional toko fisik keluarga sejak 2016, menangani interaksi langsung dengan konsumen, penjelasan produk, penerimaan pembayaran tunai, serta menjaga kerapian stok barang secara konsisten.',
      tags: ['Pelayanan Langsung', 'Kasir POS', 'Penataan Barang', 'Manajemen Stok'],
      isFeatured: false,
      icon: (
        <svg className="w-10 h-10 sm:w-11 sm:h-11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.25A2.25 2.25 0 010 18.75V10.5m13.5 10.5h7.5A2.25 2.25 0 0023.25 18.75V10.5M3 10.5l9-7.5 9 7.5M3 10.5v8.25A2.25 2.25 0 005.25 21h3" />
        </svg>
      ),
    },
    {
      id: 'bg-2',
      type: 'experience' as const,
      category: 'Pengalaman Kerja',
      period: 'Desember 2024 – Sekarang',
      periodBadge: 'Layanan Mandiri',
      title: 'Pelayanan & Pengelolaan Jasa Digital',
      subtitle: 'Komunikasi Klien & Publikasi Naskah',
      description:
        'Memberikan layanan langsung kepada pelanggan melalui WhatsApp dalam memahami kebutuhan publikasi naskah/berita tugas, koordinasi pengerjaan, transparansi tarif, penanganan revisi, hingga follow-up kepuasan klien.',
      tags: ['Komunikasi Konsumen', 'Publikasi Media', 'Manajemen Revisi', 'Pelayanan Cepat'],
      isFeatured: true, // Yellow circular arrow matching row 2 of the example screenshot
      icon: (
        <svg className="w-10 h-10 sm:w-11 sm:h-11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      ),
    },
    {
      id: 'bg-3',
      type: 'experience' as const,
      category: 'Pengalaman Kerja & Pembelajaran',
      period: 'Februari 2025 – Sekarang',
      periodBadge: 'Pengembangan Mandiri',
      title: 'Pembelajaran Retail & Operasional Toko',
      subtitle: 'Standar Ritel Modern & Penataan Rak',
      description:
        'Mendalami prinsip operasional ritel modern secara intensif, mencakup pelayanan ramah konsumen, display barang metode FIFO, pemahaman planogram rak, sistem kasir POS, dan komunikasi pelayanan pembeli.',
      tags: ['Customer Service', 'Display FIFO', 'Planogram Rak', 'Kasir POS'],
      isFeatured: false,
      icon: (
        <svg className="w-10 h-10 sm:w-11 sm:h-11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      ),
    },
  ];

  const filteredItems = backgroundItems;

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F5F5F5] dark:bg-[#18181B] border-t border-[#171717]/15 dark:border-white/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* ========================================================================= */}
        {/* PART 1: ABOUT TAUFIK HIDAYAT MALII (Steve Mengelkoch Screenshots 2 & 3)   */}
        {/* ========================================================================= */}
        <div className="space-y-12">
          {/* Section Kicker & Title */}
          <div className="space-y-3">
            <div className="font-display inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.08em] uppercase text-[#F9B51B] dark:text-[#d1fe17] transition-colors">
              <span aria-hidden="true">✦</span>
              <span>ABOUT</span>
              <span aria-hidden="true">✦</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-[#171717] dark:text-white leading-[1.12]">
              About Taufik Hidayat Malii
            </h2>
          </div>

          {/* Narrative Bio & 3 Key Metric Columns */}
          <div className="max-w-4xl space-y-8">
            <div className="font-body space-y-4 text-base sm:text-lg text-[#666666] dark:text-[#A3A3A3] leading-[1.65] font-normal text-justify">
              <p className="text-justify">
                Saya memiliki ketertarikan tinggi pada industri pelayanan retail dan operasional toko modern. Melalui pengalaman lebih dari 8 tahun membantu usaha keluarga, saya terlatih melayani berbagai karakter pembeli, mengelola transaksi kasir, menjaga stok barang, serta memastikan area penjualan selalu tertata rapi.
              </p>
              <p className="text-justify">
                Selain pengalaman di toko fisik, saya juga menguasai keterampilan digital dan pengarsipan data yang dibuktikan melalui perancangan aplikasi berbasis website yang dikhususkan untuk membantu staf administrasi di sekolah—sebuah proyek milik mahasiswa yang seluruh perancangan dan pengembangannya saya garap secara mandiri—serta pelayanan puluhan mahasiswa di jasa digital. Bagi saya, pelayanan prima bukan sekadar menjual barang, melainkan menciptakan kepercayaan dan kepuasan bagi pelanggan.
              </p>
            </div>

            {/* 3 Steve Mengelkoch Signature Stat Columns - Centered & Animated */}
            <div className="grid grid-cols-3 divide-x divide-[#171717]/10 dark:divide-white/10 py-6 sm:py-8 border-y border-[#171717]/15 dark:border-white/10 text-center">
              <div className="flex flex-col items-center justify-center text-center px-2 sm:px-4">
                <span className="font-info text-xs sm:text-sm font-normal text-[#666666] dark:text-[#A3A3A3] block uppercase tracking-wide text-center">
                  Pelanggan &amp; Transaksi
                </span>
                <span className="font-info text-3xl sm:text-4xl md:text-5xl font-normal text-[#171717] dark:text-white tracking-tight mt-1.5 block text-center tabular-nums">
                  <AnimatedCounter target={250} suffix="+" duration={2400} />
                </span>
              </div>

              <div className="flex flex-col items-center justify-center text-center px-2 sm:px-4">
                <span className="font-info text-xs sm:text-sm font-normal text-[#666666] dark:text-[#A3A3A3] block uppercase tracking-wide text-center">
                  Modul Web Administrasi
                </span>
                <span className="font-info text-3xl sm:text-4xl md:text-5xl font-normal text-[#171717] dark:text-white tracking-tight mt-1.5 block text-center tabular-nums">
                  <AnimatedCounter target={24} duration={2000} />
                </span>
              </div>

              <div className="flex flex-col items-center justify-center text-center px-2 sm:px-4">
                <span className="font-info text-xs sm:text-sm font-normal text-[#666666] dark:text-[#A3A3A3] block uppercase tracking-wide text-center">
                  Kesiapan Kerja
                </span>
                <span className="font-info text-3xl sm:text-4xl md:text-5xl font-normal text-[#171717] dark:text-white tracking-tight mt-1.5 block text-center tabular-nums">
                  <AnimatedCounter target={100} suffix="%" duration={2200} />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CREDENTIALS: CERTIFICATIONS & RECOGNITION (Steve Mengelkoch Screenshot)   */}
        {/* ========================================================================= */}
        <div id="credentials" className="space-y-8 pt-8 sm:pt-12 border-t border-[#171717]/15 dark:border-white/10">
          {/* Section Kicker & Title */}
          <div className="space-y-3 max-w-3xl">
            <div className="font-display inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.08em] uppercase text-[#F9B51B] dark:text-[#d1fe17] transition-colors">
              <span aria-hidden="true">✦</span>
              <span>CREDENTIALS</span>
              <span aria-hidden="true">✦</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-[#171717] dark:text-white leading-[1.12]">
              Academic Background
            </h2>
            <p className="font-body text-sm sm:text-base text-[#666666] dark:text-[#A3A3A3] leading-[1.6] font-normal">
              Certifications across web development, design and paid media — including Google Ads and a Google Partners badge.
            </p>
          </div>

          {/* Credential Rows */}
          <div className="border-t border-[#171717]/15 dark:border-white/10 divide-y divide-[#171717]/15 dark:divide-white/10">
            {/* Row 1: Universitas Negeri Gorontalo */}
            <div className="py-7 sm:py-9 md:py-10 grid grid-cols-[1fr_auto_56px] sm:grid-cols-[1fr_180px_1fr] md:grid-cols-[1fr_210px_1fr] items-center gap-4 sm:gap-6 group transition-colors">
              {/* Left Column: Title & Subtitle */}
              <div className="space-y-1 min-w-0 pr-2">
                <h3 className="font-display text-xl sm:text-3xl md:text-4xl font-semibold text-[#171717] dark:text-white tracking-[-0.015em] leading-tight group-hover:text-[#F9B51B] dark:group-hover:text-[#F9B51B] dark:text-[#d1fe17] transition-colors">
                  Universitas Negeri Gorontalo
                </h3>
                <p className="font-info text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] font-normal">
                  Angkatan 2022
                </p>
              </div>

              {/* Center Column: Official UNG (Universitas Negeri Gorontalo) Logo Icon with Smooth Zoom Motion */}
              <div className="relative w-24 sm:w-32 md:w-36 h-20 sm:h-28 md:h-32 flex items-center justify-center mx-auto">
                <AnimatePresence mode="wait">
                  {activeCredential === 'university' && (
                    <motion.div
                      key="ung-logo"
                      initial={{ scale: 0, opacity: 0, filter: 'blur(8px)' }}
                      animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                      exit={{ scale: 0, opacity: 0, filter: 'blur(8px)' }}
                      transition={{
                        type: 'spring',
                        stiffness: 240,
                        damping: 18,
                        mass: 0.7,
                      }}
                      whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
                      className="absolute inset-0 m-auto w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center select-none"
                    >
                      <img
                        src="/assets/ung-logo.webp"
                        alt="Logo Universitas Negeri Gorontalo"
                        className="w-full h-full object-contain drop-shadow-md select-none pointer-events-none"
                        loading="lazy"
                        decoding="async"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Arrow Button (Dark / White circle with click interaction) */}
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setActiveCredential('university')}
                  onDoubleClick={(e) => e.stopPropagation()}
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-bold text-xl sm:text-2xl shadow-sm shrink-0 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#F9B51B] dark:ring-[#d1fe17] ${
                    activeCredential === 'university'
                      ? 'bg-[#171717] dark:bg-white text-white dark:text-[#171717] ring-2 ring-black/20 dark:ring-white/40 scale-105'
                      : 'bg-[#171717]/80 dark:bg-white/80 text-white dark:text-[#171717] opacity-80 hover:opacity-100'
                  }`}
                  title="Klik untuk memunculkan icon Universitas (dan menyembunyikan icon Jurusan)"
                  aria-label="Tampilkan icon Universitas Negeri Gorontalo"
                >
                  <motion.span
                    animate={{ rotate: activeCredential === 'university' ? 90 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="inline-block"
                  >
                    &rarr;
                  </motion.span>
                </button>
              </div>
            </div>

            {/* Row 2: Google Ads Certificate with AdWords Badge */}
            <div className="py-7 sm:py-9 md:py-10 grid grid-cols-[1fr_auto_56px] sm:grid-cols-[1fr_180px_1fr] md:grid-cols-[1fr_210px_1fr] items-center gap-4 sm:gap-6 group transition-colors">
              {/* Left Column: Title & Subtitle */}
              <div className="space-y-1 min-w-0 pr-2">
                <h3 className="font-display text-xl sm:text-3xl md:text-4xl font-semibold text-[#171717] dark:text-white tracking-[-0.015em] leading-tight group-hover:text-[#F9B51B] dark:group-hover:text-[#F9B51B] dark:text-[#d1fe17] transition-colors">
                  Program Studi
                </h3>
                <p className="font-info text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] font-normal">
                  Bimbingan dan Konseling
                </p>
              </div>

              {/* Center Column: Konselor / Bimbingan dan Konseling Official Emblem Icon with Smooth Zoom Motion */}
              <div className="relative w-24 sm:w-32 md:w-36 h-20 sm:h-28 md:h-32 flex items-center justify-center mx-auto">
                <AnimatePresence mode="wait">
                  {activeCredential === 'major' && (
                    <motion.div
                      key="major-logo"
                      initial={{ scale: 0, opacity: 0, filter: 'blur(8px)' }}
                      animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                      exit={{ scale: 0, opacity: 0, filter: 'blur(8px)' }}
                      transition={{
                        type: 'spring',
                        stiffness: 240,
                        damping: 18,
                        mass: 0.7,
                      }}
                      whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
                      className="absolute inset-0 m-auto w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center select-none"
                    >
                      <svg
                        viewBox="0 0 512 512"
                        fill="none"
                        className="w-full h-full drop-shadow-md select-none pointer-events-none"
                        aria-label="Logo Resmi Konselor Bimbingan dan Konseling"
                      >
                        {/* Outer Yellow Ring (smooth circle) */}
                        <circle cx="252" cy="256" r="218" fill="#DFAD24" />

                        {/* Offset Blue Disc */}
                        <circle cx="260" cy="256" r="188" fill="#3276AC" />

                        {/* Inner Head Ring */}
                        <circle cx="290" cy="140" r="66" stroke="#DFAD24" strokeWidth="22" fill="none" />

                        {/* Vertical Stem */}
                        <rect x="279" y="68" width="22" height="378" fill="#DFAD24" />

                        {/* Horizontal KONSELOR Box */}
                        <rect x="279" y="398" width="204" height="48" fill="#DFAD24" />

                        {/* Text KONSELOR in exact bold font & blue color */}
                        <text
                          x="381"
                          y="433"
                          fill="#3276AC"
                          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
                          fontSize="27"
                          fontWeight="800"
                          letterSpacing="1.5"
                          textAnchor="middle"
                        >
                          KONSELOR
                        </text>
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Column: Yellow/Green Arrow Button (Diagonal arrow with click interaction) */}
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setActiveCredential('major')}
                  onDoubleClick={(e) => e.stopPropagation()}
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-bold text-xl sm:text-2xl shadow-sm shrink-0 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#F9B51B] dark:focus:ring-[#F9B51B] dark:ring-[#d1fe17] ${
                    activeCredential === 'major'
                      ? 'bg-[#F9B51B] dark:bg-[#d1fe17] text-[#171717] ring-2 ring-[#F9B51B]/50 dark:ring-[#d1fe17]/50 scale-105'
                      : 'bg-[#F9B51B]/80 dark:bg-[#d1fe17]/75 text-[#171717] opacity-80 hover:opacity-100'
                  }`}
                  title="Klik untuk memunculkan icon Jurusan (dan menyembunyikan icon Universitas)"
                  aria-label="Tampilkan icon Program Studi Bimbingan dan Konseling"
                >
                  <motion.span
                    animate={{ rotate: activeCredential === 'major' ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="inline-block"
                  >
                    &#x2197;
                  </motion.span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 2: EXPERIENCE & EDUCATION (Steve Mengelkoch Editorial Row Layout)    */}
        {/* ========================================================================= */}
        <div id="background" className="space-y-8 pt-10 border-t border-[#171717]/15 dark:border-white/10">
          {/* Section Kicker & Title */}
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="font-display inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.08em] uppercase text-[#F9B51B] dark:text-[#d1fe17] transition-colors">
              <span aria-hidden="true">✦</span>
              <span>BACKGROUND</span>
              <span aria-hidden="true">✦</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#171717] dark:text-white leading-[1.12]">
              Experience &amp; Education
            </h2>
          </div>

          {/* 3 Columns Vertical Cards Layout matching 01, 02, 03 positions below */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 items-stretch pt-2">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="border-t-2 border-[#171717]/15 dark:border-white/10 pt-6 sm:pt-8 flex flex-col justify-between group transition-all duration-300 hover:border-[#F9B51B] dark:hover:border-[#F9B51B] dark:border-[#d1fe17]"
              >
                <div className="space-y-4">
                  {/* Top: Icon & Category */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center shrink-0 text-[#171717] dark:text-white transition-transform group-hover:scale-110">
                      {item.icon}
                    </div>
                    <span className="font-info text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-[#171717] text-[#FFE500] dark:bg-[#d1fe17] dark:text-black px-2.5 py-1 rounded-full transition-colors duration-200">
                      {item.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#171717] dark:text-white tracking-tight leading-snug group-hover:text-[#F9B51B] dark:group-hover:text-[#F9B51B] dark:text-[#d1fe17] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-info text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] font-medium">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="font-body text-xs sm:text-sm text-[#555555] dark:text-[#A3A3A3] leading-relaxed font-normal text-justify">
                    {item.description}
                  </p>
                </div>

                {/* Bottom: Period & Tags */}
                <div className="pt-4 mt-6 border-t border-[#171717]/10 dark:border-white/10 space-y-2">
                  <div className="font-info text-xs font-semibold text-[#F9B51B] dark:text-[#d1fe17]">
                    {item.period}
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                    {item.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="font-info text-[11px] bg-black/[0.04] dark:bg-white/[0.06] px-2 py-0.5 rounded text-[#555555] dark:text-[#A3A3A3]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 3: 3 CORE VALUES (Clean Open Layout - Center Aligned)                */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center">
          {coreValues.map((val) => (
            <div
              key={val.number}
              className="border-t border-[#171717]/15 dark:border-white/10 pt-4 flex flex-col items-center text-center justify-between space-y-3"
            >
              <div className="flex flex-col items-center text-center">
                <div className="font-display text-3xl sm:text-4xl font-semibold text-[#F9B51B] dark:text-[#d1fe17] transition-colors leading-none mb-2 tracking-tight text-center">
                  {val.number}
                </div>
                <h4 className="font-display text-base sm:text-lg font-semibold text-[#171717] dark:text-white text-center">
                  {val.title}
                </h4>
              </div>
              <p className="font-body text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] leading-[1.6] font-normal text-center">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

