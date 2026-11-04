import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onOpenCvModal?: () => void;
  activeSection?: string;
  onNavigateHome?: (targetSection?: string) => void;
  onNavigateHire?: () => void;
  isHirePage?: boolean;
  isDetailPage?: boolean;
}

const NAV_LINKS = [
  { label: 'Beranda', href: '#home', id: 'home' },
  { label: 'Tentang', href: '#about', id: 'about' },
  { label: 'Portofolio', href: '#work', id: 'work' },
  { label: 'Belajar', href: '#learning', id: 'learning' },
  { label: 'Keahlian', href: '#skills', id: 'skills' },
  { label: 'Ulasan', href: '#testimonials', id: 'testimonials' },
  { label: 'Kontak', href: '#contact', id: 'contact' },
] as const;

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCvModal,
  activeSection: externalActiveSection,
  onNavigateHome,
  onNavigateHire,
  isHirePage = false,
  isDetailPage = false,
}) => {
  const [internalActiveSection, setInternalActiveSection] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHireActive, setIsHireActive] = useState(false);

  const isHireButtonActive = isHirePage || isHireActive;

  const handleHireClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateHire) {
      onNavigateHire();
    } else {
      setIsHireActive(true);
      setTimeout(() => {
        onOpenCvModal?.();
        setTimeout(() => {
          setIsHireActive(false);
        }, 500);
      }, 420);
    }
  };

  const activeSection = externalActiveSection || internalActiveSection;

  useEffect(() => {
    // High-performance section observer (0 reflow, 0 main-thread scroll blocking)
    if (typeof IntersectionObserver !== 'undefined') {
      const sectionElements = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
        (el): el is HTMLElement => Boolean(el)
      );

      if (sectionElements.length > 0) {
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                setInternalActiveSection((prev) =>
                  prev !== entry.target.id ? entry.target.id : prev
                );
              }
            }
          },
          {
            rootMargin: '-15% 0px -65% 0px',
            threshold: 0,
          }
        );

        sectionElements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
      }
    }

    // Lightweight fallback with rAF throttling if IntersectionObserver is unavailable
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPos = window.scrollY + 200;
          for (const link of NAV_LINKS) {
            const el = document.getElementById(link.id);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPos >= top && scrollPos < top + height) {
                setInternalActiveSection((prev) => (prev !== link.id ? link.id : prev));
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transform-gpu bg-white dark:bg-[#121212] border-b border-[#171717]/15 dark:border-white/10 transition-all duration-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#121212]">
        <div className="flex items-center justify-between h-20 bg-white dark:bg-[#121212]">
          {/* Brand Logo Image (Uploaded official logo asset) */}
          <a
            href="#home"
            onClick={(e) => {
              if (isDetailPage && onNavigateHome) {
                e.preventDefault();
                onNavigateHome('home');
              }
            }}
            className="group flex items-center select-none"
            aria-label="Taufik Malii - Kembali ke Beranda"
          >
            <div className="flex items-center">
              <img
                src="/assets/aistudio/d1966f85-30a4-42a2-a204-bb1333c65433_a9b1e3d4.png"
                alt="Taufik Malii"
                className="h-6 sm:h-7 lg:h-8 w-auto object-contain -ml-2 sm:-ml-3 lg:-ml-4 mr-3 sm:mr-4 lg:mr-6 transition-transform duration-200 group-hover:scale-105 dark:brightness-125"
              />
            </div>
          </a>

          {/* Desktop Navigation - Clean Unwrapped Typographic Menu */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 2xl:gap-8" aria-label="Navigasi Utama">
            {NAV_LINKS.map((link) => {
              const isActive = !isDetailPage && activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    if (isDetailPage && onNavigateHome) {
                      e.preventDefault();
                      onNavigateHome(link.id);
                    }
                  }}
                  className={`font-display relative py-2 text-[15px] xl:text-[16px] font-bold uppercase tracking-[0.05em] transition-colors duration-200 select-none ${
                    isActive
                      ? 'text-[#E59700] dark:text-[#F9B51B]'
                      : 'text-[#171717] dark:text-[#F5F5F5] hover:text-[#E59700] dark:hover:text-[#F9B51B]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="navActiveIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[3.5px] bg-[#E59700] dark:bg-[#F9B51B] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Controls: Split Pill CTA (HIRE ME) + Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            <motion.button
              type="button"
              onClick={handleHireClick}
              layout
              transition={{ type: 'spring', stiffness: 320, damping: 26 }}
              className={`font-display group inline-flex items-center gap-1.5 p-1 rounded-full cursor-pointer select-none transition-colors duration-300 shadow-sm border border-[#171717]/20 active:scale-95 ${
                isHireButtonActive
                  ? 'flex-row-reverse bg-[#F9B51B] dark:bg-[#d1fe17]'
                  : 'flex-row bg-[#31543A]'
              }`}
              title="Hire Me"
              aria-label="Hire Me Button"
            >
              {/* Lingkaran Panah: Kebalikan View My Work */}
              <motion.span
                layout
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 shadow-xs transition-colors duration-300 ${
                  isHireButtonActive
                    ? 'bg-white text-[#171717]'
                    : 'bg-[#F9B51B] dark:bg-[#d1fe17] text-[#171717]'
                }`}
              >
                <motion.svg
                  layout
                  className="w-3.5 h-3.5 text-[#171717]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="4" y1="12" x2="19" y2="12" />
                  <polyline points="13 6 19 12 13 18" />
                </motion.svg>
              </motion.span>

              {/* Teks HIRE ME */}
              <motion.span
                layout
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                className={`px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase flex items-center justify-center transition-colors duration-300 ${
                  isHireButtonActive
                    ? 'bg-[#31543A] text-white'
                    : 'bg-white text-[#171717]'
                }`}
              >
                HIRE ME
              </motion.span>
            </motion.button>
          </div>

          {/* Mobile quick controls: Split Pill + Theme Toggle + Yellow Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <motion.button
              type="button"
              onClick={handleHireClick}
              layout
              transition={{ type: 'spring', stiffness: 320, damping: 26 }}
              className={`font-display inline-flex items-center gap-1 p-0.5 rounded-full cursor-pointer select-none transition-colors duration-300 border border-[#171717]/20 active:scale-95 ${
                isHireButtonActive
                  ? 'flex-row-reverse bg-[#F9B51B] dark:bg-[#d1fe17]'
                  : 'flex-row bg-[#31543A]'
              }`}
              title="Hire Me"
              aria-label="Hire Me Button"
            >
              {/* Lingkaran Panah */}
              <motion.span
                layout
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                  isHireButtonActive
                    ? 'bg-white text-[#171717]'
                    : 'bg-[#F9B51B] dark:bg-[#d1fe17] text-[#171717]'
                }`}
              >
                <motion.svg
                  layout
                  className="w-2.5 h-2.5 text-[#171717]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="4" y1="12" x2="19" y2="12" />
                  <polyline points="13 6 19 12 13 18" />
                </motion.svg>
              </motion.span>

              {/* Teks HIRE ME */}
              <motion.span
                layout
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase flex items-center justify-center transition-colors duration-300 ${
                  isHireButtonActive
                    ? 'bg-[#31543A] text-white'
                    : 'bg-white text-[#171717]'
                }`}
              >
                HIRE ME
              </motion.span>
            </motion.button>

            {/* Steve Mengelkoch signature Yellow Circular Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 rounded-full bg-[#F9B51B] dark:bg-[#d1fe17] hover:bg-[#e0a012] dark:hover:bg-[#bce610] border-2 border-[#171717] text-[#171717] flex items-center justify-center transition-all active:scale-90 cursor-pointer shadow-xs"
              aria-expanded={isMobileMenuOpen}
              aria-label="Buka Menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-[#171717]/15 dark:border-white/10 bg-white dark:bg-[#121212] px-4 pt-3 pb-6 space-y-2 transition-colors duration-200 shadow-xl">
          {NAV_LINKS.map((link) => {
            const isActive = !isHirePage && activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  if ((isDetailPage || isHirePage) && onNavigateHome) {
                    e.preventDefault();
                    onNavigateHome(link.id);
                  }
                }}
                className={`font-display flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-[#F9B51B] dark:bg-[#d1fe17] text-[#171717] border-2 border-[#171717]'
                    : 'text-[#171717] dark:text-[#F9FAFB] hover:bg-[#F5F5F5] dark:hover:bg-[#1E1E1E]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="text-xs font-bold">✦</span>}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};

