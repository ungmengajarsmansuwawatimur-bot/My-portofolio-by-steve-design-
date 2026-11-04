import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  candidateProfile,
  experienceData,
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
    <span className="tabular-nums font-bold">
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
      period: '2016 s.d. Sekarang (± 8 Tahun)',
      periodBadge: 'Paruh Waktu',
      title: 'Pengelolaan Usaha Keluarga',
      subtitle: 'Operasional Usaha Mandiri',
      description:
        'Membantu operasional toko fisik keluarga sejak 2016, melayani pembeli secara langsung, menjelaskan informasi produk, mengelola transaksi kasir tunai, serta menjaga ketersediaan barang.',
      tags: ['Pelayanan Langsung', 'Kasir POS', 'Penataan Barang', 'Manajemen Stok'],
      isFeatured: false,
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 fill-[#26492F] dark:fill-[#d1fe17] transition-colors" viewBox="0 0 24 24">
          <path d="M4 4h16l1 4v12a1 1 0 01-1 1H4a1 1 0 01-1-1V8l1-4zm1 5v10h14V9H5zm2-3l-.5 2h15l-.5-2H7zm2 6h2v3H9v-3zm4 0h2v3h-2v-3z" />
        </svg>
      ),
    },
    {
      id: 'bg-2',
      type: 'experience' as const,
      category: 'Pengalaman Kerja',
      period: 'Desember 2024 s.d. Sekarang',
      periodBadge: 'Layanan Mandiri',
      title: 'Pelayanan & Pengelolaan Jasa Digital',
      subtitle: 'Komunikasi Klien & Publikasi Naskah',
      description:
        'Melayani pelanggan melalui komunikasi WhatsApp untuk pemenuhan kebutuhan naskah tugas kuliah, koordinasi proses pengerjaan, transparansi tarif, serta penanganan revisi hingga tuntas.',
      tags: ['Komunikasi Konsumen', 'Publikasi Media', 'Manajemen Revisi', 'Pelayanan Cepat'],
      isFeatured: true,
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 fill-[#26492F] dark:fill-[#d1fe17] transition-colors" viewBox="0 0 24 24">
          <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6zm5.5 2.5l-2.5 2.5 2.5 2.5 1.41-1.41L9.33 11l1.58-1.09L9.5 8.5zm5 0l-1.41 1.41L14.67 11l-1.58 1.09L14.5 13.5l2.5-2.5-2.5-2.5z" />
        </svg>
      ),
    },
    {
      id: 'bg-3',
      type: 'experience' as const,
      category: 'Pengalaman Kerja & Pembelajaran',
      period: 'Februari 2025 s.d. Sekarang',
      periodBadge: 'Pengembangan Mandiri',
      title: 'Pembelajaran Retail & Operasional Toko',
      subtitle: 'Standar Ritel Modern & Penataan Rak',
      description:
        'Mendalami operasional ritel modern secara terarah, meliputi pelayanan ramah pembeli, penataan display produk sistem FIFO, pemahaman planogram rak, dan pengoperasian mesin kasir POS.',
      tags: ['Customer Service', 'Display FIFO', 'Planogram Rak', 'Kasir POS'],
      isFeatured: false,
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 fill-[#26492F] dark:fill-[#d1fe17] transition-colors" viewBox="0 0 24 24">
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
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
            <div className="font-body space-y-4 text-base sm:text-lg text-[#666666] dark:text-[#A3A3A3] leading-[1.65] font-normal text-refined-justify">
              <p className="text-refined-justify">
                Saya memiliki ketertarikan tinggi pada industri pelayanan ritel dan operasional toko modern. Melalui pengalaman lebih dari 8 tahun membantu usaha keluarga, saya terlatih melayani berbagai karakter pembeli, mengelola transaksi kasir, menjaga stok barang, serta memastikan area penjualan selalu tertata rapi.
              </p>
              <p className="text-refined-justify">
                Selain pengalaman di toko fisik, saya juga menguasai keterampilan digital dan pengarsipan data yang dibuktikan melalui perancangan aplikasi website untuk membantu staf administrasi sekolah, yakni sebuah sistem informasi arsip yang seluruh tahapannya saya rancang secara mandiri, serta pelayanan puluhan mahasiswa pada jasa digital. Bagi saya, pelayanan prima bukan sekadar menjual barang, melainkan menciptakan kepercayaan dan kepuasan bagi pelanggan.
              </p>
            </div>

            {/* 3 Steve Mengelkoch Signature Stat Columns - Centered & Animated */}
            <div className="grid grid-cols-3 divide-x divide-[#171717]/10 dark:divide-white/10 py-6 sm:py-8 border-y border-[#171717]/15 dark:border-white/10 text-center">
              <div className="flex flex-col items-center justify-center text-center px-2 sm:px-4">
                <span className="font-info text-xs sm:text-sm font-bold text-[#666666] dark:text-[#A3A3A3] block uppercase tracking-wide text-center">
                  Pelanggan &amp; Transaksi
                </span>
                <span className="font-info text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] dark:text-white tracking-tight mt-1.5 block text-center tabular-nums">
                  <AnimatedCounter target={250} suffix="+" duration={2400} />
                </span>
              </div>

              <div className="flex flex-col items-center justify-center text-center px-2 sm:px-4">
                <span className="font-info text-xs sm:text-sm font-bold text-[#666666] dark:text-[#A3A3A3] block uppercase tracking-wide text-center">
                  Modul Web Administrasi
                </span>
                <span className="font-info text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] dark:text-white tracking-tight mt-1.5 block text-center tabular-nums">
                  <AnimatedCounter target={24} duration={2000} />
                </span>
              </div>

              <div className="flex flex-col items-center justify-center text-center px-2 sm:px-4">
                <span className="font-info text-xs sm:text-sm font-bold text-[#666666] dark:text-[#A3A3A3] block uppercase tracking-wide text-center">
                  Kesiapan Kerja
                </span>
                <span className="font-info text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] dark:text-white tracking-tight mt-1.5 block text-center tabular-nums">
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
              Riwayat pendidikan dan pengembangan kompetensi di bidang administrasi data, perancangan antarmuka digital, dan operasional layanan.
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
        {/* PART 2: EXPERIENCE & EDUCATION (Rebranded Editorial Row Layout matching screenshot) */}
        {/* ========================================================================= */}
        <div id="background" className="space-y-10 sm:space-y-14 pt-10 sm:pt-14 border-t border-[#171717]/15 dark:border-white/10">
          {/* Section Kicker & Title - Centered matching screenshot */}
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="font-display text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-[#B48220] dark:text-[#d1fe17] block">
              WHAT I DO
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.025em] text-[#171717] dark:text-white leading-[1.12]">
              Experience &amp; Education
            </h2>
          </div>

          {/* Editorial Row-Based Layout matching screenshot */}
          <div className="border-t border-b border-[#171717]/15 dark:border-white/10 divide-y divide-[#171717]/15 dark:divide-white/10">
            {filteredItems.map((item) => (
              <a
                key={item.id}
                href={item.id === 'bg-3' ? '#skills' : '#work'}
                className="group py-8 sm:py-10 md:py-12 px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 lg:gap-10 transition-all duration-300 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] cursor-pointer block"
              >
                {/* Left Part: Solid Icon + Bold Title */}
                <div className="flex items-start md:items-center gap-5 sm:gap-6 md:w-[280px] lg:w-[340px] xl:w-[380px] shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center text-[#26492F] dark:text-[#d1fe17] transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div className="space-y-1.5 min-w-0">
                    <h3 className="font-display text-xl sm:text-2xl lg:text-[1.65rem] font-bold tracking-tight text-[#171717] dark:text-white leading-[1.15] group-hover:text-[#F9B51B] dark:group-hover:text-[#d1fe17] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-info text-xs sm:text-sm font-medium text-[#666666] dark:text-[#A3A3A3] pt-0.5">
                      {item.period}
                    </p>
                  </div>
                </div>

                {/* Middle Part: Descriptive Paragraph */}
                <div className="flex-1 min-w-0 md:px-2 lg:px-4">
                  <p className="font-body text-sm sm:text-[0.95rem] md:text-base text-[#555555] dark:text-[#A3A3A3] leading-[1.65] font-normal text-refined-justify">
                    {item.description}
                  </p>
                </div>

                {/* Right Part: Circular Arrow Button */}
                <div className="flex items-center justify-end md:justify-center shrink-0">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border border-[#171717]/70 dark:border-white/40 flex items-center justify-center text-[#171717] dark:text-white transition-all duration-300 group-hover:bg-[#171717] group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black group-hover:scale-110 active:scale-95 shadow-xs">
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

