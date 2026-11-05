import React from 'react';

interface FooterProps {
  onOpenCvModal?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-white dark:bg-[#121212] border-t border-[#171717]/10 dark:border-white/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Responsive container matching CSS selector 2 */}
        <div className="space-y-6 sm:space-y-8">
          {/* Top Horizontal Navigation Links Row */}
          <nav aria-label="Footer Navigasi" className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 md:gap-x-10 gap-y-3">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="font-heading font-bold text-xs sm:text-sm tracking-wider uppercase text-[#DD9B08] dark:text-[#F9B51B] transition-colors"
            >
              HOME
            </a>
            <a
              href="#about"
              className="font-heading font-bold text-xs sm:text-sm tracking-wider uppercase text-[#171717] dark:text-white hover:text-[#DD9B08] dark:hover:text-[#F9B51B] transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#skills"
              className="font-heading font-bold text-xs sm:text-sm tracking-wider uppercase text-[#171717] dark:text-white hover:text-[#DD9B08] dark:hover:text-[#F9B51B] inline-flex items-center gap-1.5 transition-colors"
            >
              SERVICES <span className="text-[10px] leading-none" aria-hidden="true">&#9662;</span>
            </a>
            <a
              href="#portfolio"
              className="font-heading font-bold text-xs sm:text-sm tracking-wider uppercase text-[#171717] dark:text-white hover:text-[#DD9B08] dark:hover:text-[#F9B51B] transition-colors"
            >
              PORTFOLIO
            </a>
            <a
              href="#testimonials"
              className="font-heading font-bold text-xs sm:text-sm tracking-wider uppercase text-[#171717] dark:text-white hover:text-[#DD9B08] dark:hover:text-[#F9B51B] transition-colors"
            >
              BLOG
            </a>
            <a
              href="#contact"
              className="font-heading font-bold text-xs sm:text-sm tracking-wider uppercase text-[#171717] dark:text-white hover:text-[#DD9B08] dark:hover:text-[#F9B51B] transition-colors"
            >
              CONTACT
            </a>
          </nav>

          {/* Divider line matching screenshot */}
          <div className="w-full border-t border-[#171717]/10 dark:border-white/10" />

          {/* Bottom Row: Social Icons on Left, Copyright on Right */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Social Media Circular Buttons (Facebook, LinkedIn, Instagram, YouTube) */}
            <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 shrink-0">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F3F4F6] dark:bg-[#222222] text-[#171717] dark:text-white flex items-center justify-center hover:bg-[#E5E7EB] dark:hover:bg-[#2E2E2E] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/taufik-hidayat-malii-bb54bb343"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F3F4F6] dark:bg-[#222222] text-[#171717] dark:text-white flex items-center justify-center hover:bg-[#E5E7EB] dark:hover:bg-[#2E2E2E] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.64 1.64 0 0 0-1.66 1.63c0 .9.73 1.64 1.66 1.64s1.63-.74 1.63-1.64c0-.9-.73-1.63-1.63-1.63z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F3F4F6] dark:bg-[#222222] text-[#171717] dark:text-white flex items-center justify-center hover:bg-[#E5E7EB] dark:hover:bg-[#2E2E2E] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F3F4F6] dark:bg-[#222222] text-[#171717] dark:text-white flex items-center justify-center hover:bg-[#E5E7EB] dark:hover:bg-[#2E2E2E] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            {/* Copyright & Privacy Policy matching reference */}
            <div className="flex items-center gap-4">
              <span className="font-heading text-xs sm:text-sm text-[#4B5563] dark:text-[#9CA3AF] text-center sm:text-right">
                &copy; 2026 Final Web Design Inc. All rights reserved &middot;{' '}
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                  }}
                  className="hover:text-[#171717] dark:hover:text-white transition-colors underline-offset-2 hover:underline cursor-pointer"
                >
                  Privacy Policy
                </a>
              </span>

              {/* Back to top scroll button */}
              <button
                type="button"
                onClick={scrollToTop}
                title="Kembali ke atas"
                aria-label="Scroll to top"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#171717] dark:bg-white text-white dark:text-[#171717] hover:bg-[#333333] dark:hover:bg-[#E5E5E5] flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-2xs shrink-0 cursor-pointer"
              >
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

