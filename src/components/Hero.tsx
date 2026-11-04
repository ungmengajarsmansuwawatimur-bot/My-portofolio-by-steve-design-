import React from 'react';
import { motion } from 'motion/react';
import { candidateProfile } from '../data/portfolioData';
import { MarqueeTicker } from './MarqueeTicker';
import { EditableImage } from './EditableImage';
import { portfolioImages } from '../assets/images';
import { CircularOrbitBackdrop } from './CircularOrbitBackdrop';
import { downloadCv } from '../utils/downloadCv';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const [isWorkActive, setIsWorkActive] = React.useState(false);

  // Clean up any legacy custom portrait cache
  React.useEffect(() => {
    try {
      localStorage.removeItem('custom_hero_portrait');
    } catch {}
  }, []);

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

  return (
    <section id="home" className="pt-24 sm:pt-28 md:pt-32 bg-white dark:bg-[#121212] transition-colors duration-200 overflow-x-clip overflow-y-visible relative z-20">
      {/* Full-Bleed Rectangular Banner Photo */}
      <div className="w-full mb-5 sm:mb-10 lg:mb-14 relative">
        <EditableImage
          storageKey="hero_banner_theme_v2"
          defaultSrc={portfolioImages.creativeDeskBanner}
          darkSrc={portfolioImages.retailBannerDark}
          alt="Banner Pelayanan &amp; Operasional Retail Taufik Hidayat"
          containerClassName="w-full h-44 sm:h-72 md:h-96 lg:h-[420px] relative overflow-hidden border-y-2 border-[#171717]/10 dark:border-white/10"
          imgClassName="w-full h-full object-cover object-center"
          buttonPosition="top-right"
        />
      </div>

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 pt-1 sm:pt-2 pb-4 sm:pb-8 lg:pb-0">
        {/* Modern Split-Screen Layout: Balanced Left Content + Right Corner Portrait on Mobile & Desktop */}
        <div className="grid grid-cols-12 gap-2 sm:gap-6 lg:gap-8 items-center">
          
          {/* AREA KIRI — CONTENT (Col 1-7 on mobile, Col 1-6 on desktop) Posisi Seimbang & Terpusat */}
          <div className="col-span-7 lg:col-span-6 flex flex-col justify-center items-start text-left space-y-3 sm:space-y-6 lg:space-y-7 z-10 py-1 sm:py-4 lg:py-8 pr-1 sm:pr-0">
            {/* Small Official Label */}
            <div>
              <div className="font-display inline-flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-xs md:text-sm font-bold tracking-[0.06em] sm:tracking-[0.1em] uppercase text-[#DD9B08] transition-colors">
                <span aria-hidden="true">✦</span>
                <span>MY PORTFOLIO • PROFIL RESMI</span>
                <span aria-hidden="true">✦</span>
              </div>
            </div>

            {/* Main Headline: Focal Point 1 */}
            <div>
              <h1 className="font-display text-xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[4rem] font-bold tracking-[-0.025em] leading-[1.12] sm:leading-[1.08] break-words">
                <span className="block text-[#171717]">
                  Taufik Hidayat Malii
                </span>
                <span className="block text-[#A2680A] mt-0.5 sm:mt-1.5 text-xs sm:text-2xl md:text-3xl lg:text-[2.6rem] xl:text-[3.2rem]">
                  Operasional &amp; Pelayanan
                  <br className="hidden sm:inline" />
                  {' '}Retail Professional.
                </span>
              </h1>
            </div>

            {/* Deskripsi Profil Ringkas (Posisi Tepat di Bawah Headline) */}
            <div className="max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="font-body text-[11px] sm:text-sm md:text-base text-[#555555] dark:text-[#CCCCCC] leading-relaxed font-normal line-clamp-3 sm:line-clamp-none"
              >
                {candidateProfile.summary}
              </motion.p>
            </div>

            {/* Two Action Buttons: VIEW MY WORK & UNDUH CV RESMI */}
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 sm:gap-3.5 pt-0.5 sm:pt-1 w-full">
              <motion.a
                href="#work"
                onClick={handleWorkClick}
                layout
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                className={`group inline-flex items-center gap-1 sm:gap-2 p-1 sm:p-2 rounded-full cursor-pointer select-none transition-colors duration-300 shadow-md hover:shadow-lg active:scale-95 ${
                  isWorkActive
                    ? 'flex-row-reverse bg-[#2B4734] dark:bg-[#31543A]'
                    : 'flex-row bg-[#F9B51B] dark:bg-[#d1fe17]'
                }`}
                title="Klik untuk menganimasikan perpindahan panah dan perubahan warna"
                aria-label="View My Work Button"
              >
                {/* Span 1: Lingkaran berisi panah */}
                <motion.span
                  layout
                  transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                  className={`w-7 h-7 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-colors duration-300 ${
                    isWorkActive
                      ? 'bg-[#F9B51B] dark:bg-[#d1fe17] text-[#171717]'
                      : 'bg-white text-[#171717]'
                  }`}
                >
                  <motion.svg
                    layout
                    className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#171717]"
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

                {/* Span 2: Komponen pembungkus teks VIEW MY WORK */}
                <motion.span
                  layout
                  transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                  className={`font-display px-3 sm:px-7 py-1.5 sm:py-3 rounded-full text-[10px] sm:text-sm font-semibold tracking-wider uppercase flex items-center justify-center transition-colors duration-300 ${
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
                className="font-display group inline-flex items-center gap-2 sm:gap-3 pl-3.5 sm:pl-6 pr-1.5 sm:pr-2.5 py-1.5 sm:py-2.5 rounded-full text-[10px] sm:text-sm font-semibold tracking-wider uppercase bg-white dark:bg-[#1E1E1E] text-[#171717] dark:text-white hover:bg-[#171717] hover:text-white dark:hover:bg-white dark:hover:text-[#171717] border-2 border-[#171717] dark:border-white transition-all duration-200 active:scale-95 cursor-pointer shadow-sm"
              >
                <span>UNDUH CV RESMI</span>
                <span className="w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-[#171717] dark:bg-white text-white dark:text-[#171717] group-hover:bg-[#F9B51B] dark:group-hover:bg-[#d1fe17] group-hover:text-[#171717] dark:group-hover:text-[#171717] flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 transition-transform group-hover:translate-y-0.5">
                  ↓
                </span>
              </button>
            </div>
          </div>

          {/* AREA KANAN — MOCKUP BACKGROUND (Col 8-12 on mobile, Col 7-12 on desktop) */}
          <div className="col-span-5 lg:col-span-6 flex justify-end items-center relative select-none pt-0 overflow-visible">
            {/* Visual Container: Mockup Background Versi 2 Circular Orbit */}
            <div className="relative w-full max-w-[280px] sm:max-w-[440px] md:max-w-[520px] lg:max-w-[600px] xl:max-w-[670px] 2xl:max-w-[720px] h-[260px] sm:h-[440px] md:h-[540px] lg:h-[700px] xl:h-[740px] flex items-center justify-end transition-all duration-300 overflow-visible translate-x-3 sm:translate-x-5 lg:translate-x-6 xl:translate-x-10 2xl:translate-x-12">
              
              {/* Circular Orbit Composition (Versi 2) */}
              <CircularOrbitBackdrop />
            </div>
          </div>

        </div>
      </div>

      {/* Signature Horizontal Marquee Ticker Strip without diagonal green frame */}
      <MarqueeTicker hasDiagonalFrame={false} />
    </section>
  );
};
