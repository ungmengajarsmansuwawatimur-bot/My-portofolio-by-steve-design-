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

  const [isCvSwapped, setIsCvSwapped] = React.useState(false);
  const [isCvDownloading, setIsCvDownloading] = React.useState(false);

  const handleCvSwap = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    if (isCvSwapped || isCvDownloading) return;

    setIsCvSwapped(true);
    setIsCvDownloading(true);

    // Animasi swap cepat dan responsif (~180ms), lalu unduh / buka CV modal resmi
    setTimeout(() => {
      if (onOpenCvModal) {
        onOpenCvModal();
      } else {
        downloadCv();
      }

      // Kembalikan posisi tombol secara halus setelah proses selesai
      setTimeout(() => {
        setIsCvSwapped(false);
        setIsCvDownloading(false);
      }, 2000);
    }, 180);
  };


  return (
    <section id="home" className="pt-24 sm:pt-28 md:pt-32 bg-white dark:bg-[#121212] transition-colors duration-200 overflow-x-clip overflow-y-visible relative z-20">
      {/* Full-Bleed Rectangular Banner Photo */}
      <div className="w-full mb-4 sm:mb-8 lg:mb-12 relative">
        <EditableImage
          storageKey="hero_banner_theme_v2"
          defaultSrc={portfolioImages.creativeDeskBanner}
          darkSrc={portfolioImages.retailBannerDark}
          alt="Banner Pelayanan &amp; Operasional Retail Taufik Hidayat"
          containerClassName="w-full h-36 xs:h-44 sm:h-60 md:h-80 lg:h-96 xl:h-[420px] relative overflow-hidden border-y-2 border-[#171717]/10 dark:border-white/10"
          imgClassName="w-full h-full object-cover object-center"
          buttonPosition="top-right"
        />
      </div>

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 pb-6 sm:pb-10 lg:pb-2">
        {/* Responsive Layout: Stacked Balanced on Mobile, 2-Column Side-by-Side on Tablet & PC */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          
          {/* AREA KONTEN UTAMA (Col-span-1 on mobile, Col-span-6 on tablet & desktop) */}
          <div className="col-span-1 md:col-span-6 flex flex-col justify-center items-start text-left space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 z-10 py-1 sm:py-4 lg:py-8">
            {/* Small Official Label */}
            <div>
              <div className="font-body inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-[0.08em] sm:tracking-[0.1em] uppercase text-[#DD9B08] transition-colors">
                <span aria-hidden="true">✦</span>
                <span>MY PORTFOLIO • PROFIL RESMI</span>
                <span aria-hidden="true">✦</span>
              </div>
            </div>

            {/* Main Headline: Focal Point 1 */}
            <div>
              <h1 className="font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[4rem] font-bold tracking-tight leading-[1.12] sm:leading-[1.08] break-words">
                <span className="block text-[#171717] dark:text-white">
                  Taufik Hidayat Malii
                </span>
                <span className="block text-[#A2680A] dark:text-[#F9B51B] mt-1 sm:mt-1.5 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[2.6rem] xl:text-[3.2rem]">
                  Operasional &amp; Pelayanan
                  <br className="hidden sm:inline" />
                  {' '}Retail Professional.
                </span>
              </h1>
            </div>

            {/* FOTO & MOCKUP UNTUK TAMPILAN MOBILE (< md) — Ukuran Seimbang & Proporsional */}
            <div className="w-full flex md:hidden justify-center items-center py-2 xs:py-3 sm:py-4 select-none overflow-visible">
              <div className="relative w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[420px] aspect-[680/600] flex items-center justify-center overflow-visible">
                <CircularOrbitBackdrop photoSrc="/assets/taufik_official_portrait.png" />
              </div>
            </div>

            {/* Deskripsi Profil Ringkas (Posisi Tepat di Bawah Foto pada Mobile, di bawah Headline pada Desktop) */}
            <div className="max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="font-body text-xs xs:text-sm sm:text-base text-[#555555] dark:text-[#CCCCCC] leading-relaxed font-normal"
              >
                {candidateProfile.summary}
              </motion.p>
            </div>

            {/* Two Action Buttons: VIEW MY WORK & UNDUH CV RESMI */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5 pt-1 w-full sm:w-auto">
              <motion.a
                href="#work"
                onClick={handleWorkClick}
                layout
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                className={`group inline-flex items-center justify-center sm:justify-start gap-2 p-1 sm:p-2 rounded-full cursor-pointer select-none transition-colors duration-300 shadow-md hover:shadow-lg active:scale-95 ${
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
                  className={`w-8 h-8 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-colors duration-300 ${
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

                {/* Span 2: Komponen pembungkus teks VIEW MY WORK */}
                <motion.span
                  layout
                  transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                  className={`font-body px-4 sm:px-7 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase flex items-center justify-center transition-colors duration-300 ${
                    isWorkActive
                      ? 'bg-white text-[#171717]'
                      : 'bg-[#2B4734] text-white'
                  }`}
                >
                  VIEW MY WORK
                </motion.span>
              </motion.a>

              <motion.button
                type="button"
                layout
                transition={{ type: 'spring', stiffness: 450, damping: 28 }}
                onClick={handleCvSwap}
                title="Klik untuk swap & unduh CV resmi"
                aria-label="Unduh CV Resmi PDF"
                className={`font-body group inline-flex items-center justify-center sm:justify-start gap-2.5 sm:gap-3 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase select-none cursor-pointer transition-colors duration-200 shadow-sm active:scale-95 overflow-hidden relative ${
                  isCvSwapped
                    ? 'flex-row bg-[#2B4734] dark:bg-[#31543A] text-white border-2 border-[#2B4734] dark:border-[#31543A] pr-2 sm:pr-2.5 pl-4 sm:pl-6'
                    : 'flex-row-reverse bg-white dark:bg-[#1E1E1E] text-[#171717] dark:text-white border-2 border-[#171717] dark:border-white hover:border-[#F9B51B] dark:hover:border-[#d1fe17] pl-2 sm:pl-2.5 pr-4 sm:pr-6'
                }`}
              >
                <motion.span
                  layout
                  transition={{ type: 'spring', stiffness: 450, damping: 28 }}
                  className="font-bold tracking-wider"
                >
                  {isCvDownloading ? 'MENGUNDUH CV...' : 'UNDUH CV RESMI'}
                </motion.span>
                <motion.span
                  layout
                  transition={{ type: 'spring', stiffness: 450, damping: 28 }}
                  className={`w-7 h-7 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 transition-colors duration-200 shadow-sm ${
                    isCvSwapped
                      ? 'bg-[#F9B51B] dark:bg-[#d1fe17] text-[#171717]'
                      : 'bg-[#171717] dark:bg-white text-white dark:text-[#171717] group-hover:bg-[#F9B51B] dark:group-hover:bg-[#d1fe17] group-hover:text-[#171717]'
                  }`}
                >
                  <motion.span
                    animate={{
                      rotate: isCvDownloading ? [0, 360] : 0,
                      scale: isCvDownloading ? [1, 1.15, 1] : 1,
                    }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center justify-center"
                  >
                    {isCvDownloading ? (
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#171717]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    )}
                  </motion.span>
                </motion.span>
              </motion.button>
            </div>
          </div>

          {/* AREA KANAN — FOTO & MOCKUP UNTUK TABLET & PC (md: dan ke atas) */}
          <div className="hidden md:flex md:col-span-6 justify-end items-center relative select-none pt-0 overflow-visible">
            {/* Visual Container: Mockup Background Versi 2 Circular Orbit with Mockup Badges */}
            <div className="relative w-full max-w-[460px] lg:max-w-[580px] xl:max-w-[660px] 2xl:max-w-[700px] aspect-[680/600] flex items-center justify-end transition-all duration-300 overflow-visible translate-x-1 lg:translate-x-3">
              {/* Circular Orbit Composition (Versi 2) dengan Foto Resmi Permanen Taufik Hidayat Malii */}
              <CircularOrbitBackdrop photoSrc="/assets/taufik_official_portrait.png" />
            </div>
          </div>

        </div>
      </div>

      {/* Signature Horizontal Marquee Ticker Strip without diagonal green frame */}
      <MarqueeTicker hasDiagonalFrame={false} />
    </section>
  );
};
