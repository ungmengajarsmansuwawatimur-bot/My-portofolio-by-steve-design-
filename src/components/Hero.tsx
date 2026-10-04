import React from 'react';
import { motion } from 'motion/react';
import { candidateProfile } from '../data/portfolioData';
import { MarqueeTicker } from './MarqueeTicker';
import { EditableImage } from './EditableImage';
import { portfolioImages } from '../assets/images';
import { TiltedCardsBackdrop } from './TiltedCardsBackdrop';
import { downloadCv } from '../utils/downloadCv';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [isWorkActive, setIsWorkActive] = React.useState(false);
  const [photoSrc, setPhotoSrc] = React.useState<string>(() => {
    try {
      return localStorage.getItem('custom_hero_portrait') || portfolioImages.heroPortrait;
    } catch {
      return portfolioImages.heroPortrait;
    }
  });

  // Reset state when user scrolls back to top so animation can be played again
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 120 && isWorkActive) {
        setIsWorkActive(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isWorkActive]);

  const handleWorkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWorkActive(true);

    // Tunggu hingga animasi pegas selesai (~420ms), lalu arahkan otomatis ke section #work
    setTimeout(() => {
      const targetElement = document.getElementById('work');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = '#work';
      }
    }, 420);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setPhotoSrc(result);
          try {
            localStorage.setItem('custom_hero_portrait', result);
          } catch {}
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="pt-24 sm:pt-28 md:pt-32 bg-white dark:bg-[#121212] transition-colors duration-200 overflow-x-clip overflow-y-visible relative z-20">
      {/* Full-Bleed Rectangular Banner Photo */}
      <div className="w-full mb-10 sm:mb-14 relative">
        <EditableImage
          storageKey="hero_banner_theme_v2"
          defaultSrc={portfolioImages.creativeDeskBanner}
          darkSrc={portfolioImages.retailBannerDark}
          alt="Banner Pelayanan &amp; Operasional Retail Taufik Hidayat"
          containerClassName="w-full h-60 sm:h-76 md:h-96 lg:h-[420px] relative overflow-hidden border-y-2 border-[#171717]/10 dark:border-white/10"
          imgClassName="w-full h-full object-cover object-center"
          buttonPosition="top-right"
        />
      </div>

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-0">
        {/* Modern Split-Screen Layout: Balanced Left Content + Right Corner Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-end">
          
          {/* AREA KIRI — CONTENT (Col 1-6) Geser ke arah kiri dan ke arah bawah */}
          <div className="lg:col-span-6 flex flex-col justify-end items-start text-left space-y-6 sm:space-y-7 z-10 pb-4 sm:pb-6 lg:pb-8 pt-4 lg:pt-12 self-end lg:-translate-x-2 xl:-translate-x-4">
            {/* Small Official Label */}
            <div>
              <div className="font-display inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.08em] uppercase text-[#F9B51B] dark:text-[#d1fe17] transition-colors">
                <span aria-hidden="true">✦</span>
                <span>MY PORTFOLIO • PROFIL RESMI</span>
                <span aria-hidden="true">✦</span>
              </div>
            </div>

            {/* Main Headline: Focal Point 1 */}
            <div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4.25rem] font-semibold tracking-[-0.025em] text-[#171717] dark:text-white leading-[1.05] uppercase break-words">
                {candidateProfile.fullName}
              </h1>
            </div>

            {/* Two Action Buttons: VIEW MY WORK & UNDUH CV RESMI */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <motion.a
                href="#work"
                onClick={handleWorkClick}
                layout
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                className={`group inline-flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-full cursor-pointer select-none transition-colors duration-300 shadow-md hover:shadow-lg active:scale-95 ${
                  isWorkActive
                    ? 'flex-row-reverse bg-[#2B4734] dark:bg-[#31543A]'
                    : 'flex-row bg-[#F9B51B] dark:bg-[#d1fe17]'
                }`}
                title="Klik untuk menganimasikan perpindahan panah dan perubahan warna"
                aria-label="View My Work Button"
              >
                {/* Span 1: Lingkaran berisi panah (awal di kiri, ketika diklik bergerak ke kanan, warna kuning hitam) */}
                <motion.span
                  layout
                  transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                  className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-colors duration-300 ${
                    isWorkActive
                      ? 'bg-[#F9B51B] dark:bg-[#d1fe17] text-[#171717]'
                      : 'bg-white text-[#171717]'
                  }`}
                >
                  <motion.svg
                    layout
                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#171717]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="4" y1="12" x2="19" y2="12" />
                    <polyline points="13 6 19 12 13 18" />
                  </motion.svg>
                </motion.span>

                {/* Span 2: Komponen pembungkus teks VIEW MY WORK (awal di kanan hijau teks putih, ketika diklik putih teks hitam) */}
                <motion.span
                  layout
                  transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                  className={`font-display px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase flex items-center justify-center transition-colors duration-300 ${
                    isWorkActive
                      ? 'bg-white text-[#171717]'
                      : 'bg-[#2B4734] text-white'
                  }`}
                >
                  VIEW MY WORK
                </motion.span>
              </motion.a>

              <button
                type="button"
                onClick={onOpenCvModal || downloadCv}
                title="Unduh CV Resmi Taufik Hidayat Malii (PDF)"
                aria-label="Unduh CV Resmi PDF"
                className="font-display group inline-flex items-center gap-3 pl-6 pr-2.5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-white dark:bg-[#1E1E1E] text-[#171717] dark:text-white hover:bg-[#171717] hover:text-white dark:hover:bg-white dark:hover:text-[#171717] border-2 border-[#171717] dark:border-white transition-all duration-200 active:scale-95 cursor-pointer shadow-sm"
              >
                <span>UNDUH CV RESMI</span>
                <span className="w-9 h-9 rounded-full bg-[#171717] dark:bg-white text-white dark:text-[#171717] group-hover:bg-[#F9B51B] dark:group-hover:bg-[#d1fe17] group-hover:text-[#171717] dark:group-hover:text-[#171717] flex items-center justify-center font-bold text-sm shrink-0 transition-transform group-hover:translate-y-0.5">
                  ↓
                </span>
              </button>
            </div>

            {/* Teks Penyeimbang Sisi Kiri Tepat di Bawah Tombol Aksi */}
            <div className="pt-2 sm:pt-3 max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-body text-sm sm:text-base text-[#555555] dark:text-[#CCCCCC] leading-relaxed font-normal"
              >
                {candidateProfile.summary}
              </motion.p>
            </div>
          </div>

          {/* AREA KANAN — FOTO PORTRAIT & BACKGROUND (Col 7-12) Digeser ke sudut kanan */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-end relative select-none pt-6 lg:pt-0 self-end overflow-visible">
            {/* Visual Container: Digeser ke sudut kanan */}
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[560px] xl:max-w-[620px] 2xl:max-w-[660px] h-[480px] sm:h-[560px] md:h-[620px] lg:h-[680px] xl:h-[720px] flex items-end justify-center lg:justify-end lg:translate-x-12 xl:translate-x-20 2xl:translate-x-24 translate-y-[11px] sm:translate-y-[15px] transition-transform duration-300 overflow-visible">
              
              {/* Decorative Accent 1: Stylized Pop-Art Lightning Thunderbolt (Top Right, pointing towards the left) */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: 20 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: [0, -3, 2, 0],
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: { duration: 0.9, delay: 0.65 },
                  scale: { type: 'spring', stiffness: 140, damping: 20, delay: 0.65 },
                  rotate: { duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 },
                  y: { duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1.2 },
                }}
                className="absolute -top-2 sm:-top-4 right-2 sm:right-4 z-20 will-change-transform transform-gpu"
                aria-hidden="true"
              >
                <motion.svg
                  whileHover={{ scale: 1.12, rotate: -6 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 cursor-pointer overflow-visible"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Layer 1: Solid Black Offset Shadow Silhouette (Mirrored to face left) */}
                  <path
                    d="M 71 27 L 47 16 L 32 54 L 50 62 L 36 88 L 74 56 L 54 48 Z"
                    transform="translate(4.5, 6.5)"
                    fill="#171717"
                    stroke="#171717"
                    strokeWidth="3.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Layer 2: Main Front Thunderbolt pointing towards the left */}
                  <path
                    d="M 71 27 L 47 16 L 32 54 L 50 62 L 36 88 L 74 56 L 54 48 Z"
                    className="fill-[#F6A618] dark:fill-[#d1fe17] transition-colors"
                    stroke="#171717"
                    strokeWidth="3.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </motion.div>

              {/* Decorative Accent 2: 4-Point Star (Top Left) */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -35 }}
                animate={{
                  opacity: 1,
                  scale: [1, 1.14, 1],
                  rotate: [0, 6, -5, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.8 },
                  scale: { duration: 5.6, repeat: Infinity, ease: 'easeInOut', delay: 1.4 },
                  rotate: { duration: 7.0, repeat: Infinity, ease: 'easeInOut', delay: 1.4 },
                  y: { duration: 5.0, repeat: Infinity, ease: 'easeInOut', delay: 1.4 },
                }}
                className="absolute top-4 sm:top-6 left-0 sm:left-2 z-20 text-[#F9B51B] dark:text-[#d1fe17] text-4xl sm:text-5xl lg:text-6xl font-black drop-shadow-[3px_3px_0px_#171717] dark:drop-shadow-[3px_3px_0px_#171717] transition-colors will-change-transform transform-gpu"
                aria-hidden="true"
              >
                ✦
              </motion.div>

              {/* Tilted Stacked Neo-Brutalist Cards Backdrop (Matching user reference) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.3, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: 'bottom center' }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-visible"
                aria-hidden="true"
              >
                <TiltedCardsBackdrop />
              </motion.div>

              {/* Authentic Portrait Photo: Centered, Scaled Up, Dynamically Popping Out Above the Container */}
              <div className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none pb-0 overflow-visible">
                <motion.img
                  initial={{ opacity: 0, y: 45, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1.4, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  src={photoSrc}
                  alt={candidateProfile.fullName}
                  className="h-[105%] sm:h-[110%] lg:h-[114%] w-auto max-w-none object-contain object-bottom drop-shadow-[0_16px_28px_rgba(0,0,0,0.3)] select-none transition-transform duration-300 pointer-events-auto hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />

                {/* Instant Change / Upload Button for custom photo */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                  aria-label="Upload Foto Asli"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  title="Pilih / Ganti Foto Asli dari Perangkat"
                  className="absolute bottom-3 right-5 sm:right-9 z-30 bg-[#171717] hover:bg-[#31543A] text-white p-2.5 rounded-full border-2 border-white shadow-[2px_2px_0px_#171717] text-xs font-bold transition-all hover:scale-110 active:scale-95 cursor-pointer opacity-75 hover:opacity-100 pointer-events-auto"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Signature Horizontal Yellow Marquee Ticker Strip with Green Diagonal Frame */}
      <MarqueeTicker hasDiagonalFrame />
    </section>
  );
};
