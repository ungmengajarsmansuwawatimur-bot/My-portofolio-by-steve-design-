import React, { useMemo } from 'react';
import {
  toolsData,
  contactData,
  testimonialsData,
} from '../data/portfolioData';
import { InteractiveToolIndex } from './InteractiveToolIndex';
import { MarqueeTicker } from './MarqueeTicker';

interface SkillsContactProps {
  onOpenCvModal?: () => void;
}

export const SkillsContact: React.FC<SkillsContactProps> = ({ onOpenCvModal }) => {
  // Testimonials carousel page state (3 pages matching reference 3 pagination dots)
  const [currentTestiPage, setCurrentTestiPage] = React.useState(0);
  const totalTestiPages = 3;

  const handlePrevTesti = () => {
    setCurrentTestiPage((prev) => (prev > 0 ? prev - 1 : totalTestiPages - 1));
  };

  const handleNextTesti = () => {
    setCurrentTestiPage((prev) => (prev < totalTestiPages - 1 ? prev + 1 : 0));
  };

  const currentTestimonials = useMemo(() => {
    // Sliding window of 2 testimonials across 3 dots: [0,1], [1,2], [2,3]
    const first = testimonialsData[currentTestiPage] || testimonialsData[0];
    const second = testimonialsData[currentTestiPage + 1] || testimonialsData[1] || testimonialsData[0];
    return [first, second];
  }, [currentTestiPage]);

  // Generate running text items automatically matching section content
  const skillsTickerItems = useMemo(() => {
    const tools = toolsData.map((tool) => tool.name.toUpperCase());
    const extra = [
      'PRAMUNIAGA',
      'OPERASIONAL TOKO',
      'KASIR & SISTEM POS',
      'PENATAAN DISPLAY PRODUK',
      'CUSTOMER SERVICE',
      'MANAJEMEN STOK',
      'ADMINISTRASI DIGITAL',
    ];
    return [...tools, ...extra];
  }, []);

  return (
    <div className="space-y-0">
      {/* ========================================================================= */}
      {/* 1. SKILLS & TECHNICAL EXPERIENCE                                          */}
      {/* Steve Dark Green Canvas (#31543A) matching reference screenshot           */}
      {/* ========================================================================= */}
      <section
        id="skills"
        className="py-20 md:py-28 bg-[#31543A] text-white transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
          {/* Section Kicker & Title - Centered matching screenshot */}
          <div className="space-y-3 max-w-3xl mx-auto text-center flex flex-col items-center">
            <span className="font-body inline-flex items-center justify-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-[0.18em] uppercase text-[#F9B51B]">
              SKILLS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.025em] text-white leading-tight text-center">
              Skills &amp; Technical Experience
            </h2>
          </div>

          {/* 12 Digital Tools & Applications in 2x6 Format matching screenshot */}
          <InteractiveToolIndex />
        </div>
      </section>

      {/* Marquee Ticker: Berada di luar kotak hijau section#skills & tanpa latar belakang pita hijau */}
      <MarqueeTicker
        items={skillsTickerItems}
        speed="slow"
        durationSeconds={85}
        hasDiagonalFrame={false}
      />

      {/* ========================================================================= */}
      {/* 2. TESTIMONIALS SECTION (Matching reference image_ad79956f.png)             */}
      {/* ========================================================================= */}
      <section
        id="testimonials"
        className="py-20 md:py-28 bg-[#FFFFFF] text-[#171717] transition-colors duration-200 border-t border-[#171717]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          {/* Section Kicker & Title */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="font-body inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.08em] uppercase text-[#A86200]">
              <span aria-hidden="true">✦</span>
              <span>TESTIMONIALS</span>
              <span aria-hidden="true">✦</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#171717] leading-[1.12]">
              What Clients &amp; Colleagues Say
            </h2>
          </div>

          {/* Carousel Container matching reference image (2 cards side by side, subtle chevrons & 3 pagination dots) */}
          <div className="relative max-w-6xl mx-auto px-4 xs:px-6 sm:px-10 lg:px-12">
            {/* Left Chevron Button */}
            <button
              type="button"
              onClick={handlePrevTesti}
              aria-label="Previous testimonials"
              className="absolute left-0 sm:-left-4 lg:-left-8 top-[38%] -translate-y-1/2 z-10 p-1.5 sm:p-2 text-gray-400 hover:text-[#111827] dark:hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Chevron Button */}
            <button
              type="button"
              onClick={handleNextTesti}
              aria-label="Next testimonials"
              className="absolute right-0 sm:-right-4 lg:-right-8 top-[38%] -translate-y-1/2 z-10 p-1.5 sm:p-2 text-gray-400 hover:text-[#111827] dark:hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Testimonials 2-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch">
              {currentTestimonials.map((testi) => (
                <div
                  key={testi.id}
                  className="flex flex-col justify-between h-full transition-all duration-300 ease-out"
                >
                  {/* Speech Bubble Card Box */}
                  <div className="relative bg-[#F8F9FA] dark:bg-[#1E1E22] rounded-2xl p-5 xs:p-6 sm:p-8 md:p-9 flex-1 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.03)] border border-[#EEEEEE]/70 dark:border-white/10">
                    {/* Downward Triangular Speech Tail pointing directly down towards author name */}
                    <div
                      aria-hidden="true"
                      className="absolute -bottom-3 left-7 sm:left-9 w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-t-[12px] border-t-[#F8F9FA] dark:border-t-[#1E1E22]"
                    />

                    {/* Testimonial Quote in Italic matching reference */}
                    <p className="font-body text-sm xs:text-[15px] sm:text-[16px] md:text-[16.5px] text-[#333333] dark:text-[#E5E5E5] leading-[1.7] italic font-normal text-left">
                      {testi.quote}
                    </p>
                  </div>

                  {/* Author Information below the speech bubble */}
                  <div className="mt-4 sm:mt-5 pl-5 sm:pl-7 text-left">
                    <h4 className="font-heading font-bold text-base sm:text-lg text-[#111827] dark:text-white leading-tight tracking-[-0.01em]">
                      {testi.name}
                    </h4>
                    <p className="font-body font-semibold text-xs sm:text-sm md:text-base text-[#A86200] dark:text-[#F9B51B] mt-0.5 leading-snug">
                      {testi.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 3 Centered Pagination Dots matching reference image */}
            <div className="flex items-center justify-center gap-3 pt-10 sm:pt-12">
              {[0, 1, 2].map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentTestiPage(page)}
                  aria-label={`Pindah ke halaman testimoni ${page + 1}`}
                  className={`transition-all duration-200 rounded-full cursor-pointer ${
                    currentTestiPage === page
                      ? 'w-2.5 h-2.5 bg-[#111827] scale-110'
                      : 'w-2.5 h-2.5 bg-[#D1D5DB] hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. LET'S WORK TOGETHER & CONTACT CHANNELS (Clean White Canvas)             */}
      {/* ========================================================================= */}
      <section
        id="contact"
        className="py-16 sm:py-20 md:py-24 bg-white dark:bg-[#121212] text-[#171717] dark:text-white transition-colors duration-200 border-t border-[#171717]/10 dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          {/* Top Stacked Big Editorial Headline matching screenshot */}
          <div>
            <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#171717] dark:text-white leading-[1.08] tracking-[-0.03em]">
              Let's<br />Work<br />Together
            </h2>
            <p className="font-heading font-semibold text-xs sm:text-sm tracking-wide text-[#4B5563] dark:text-[#9CA3AF] mt-4 sm:mt-5">
              Based In Gorontalo, Indonesia &middot; Available Remote
            </p>
          </div>

          {/* Two Prominent Cards Grid matching reference */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1: Email / Ready To Start A Project */}
            <div className="bg-[#F8F9FA] dark:bg-[#1A1A1A] border border-[#E5E7EB] dark:border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-xs hover:border-[#D1D5DB] dark:hover:border-white/20 transition-all duration-200 group">
              <div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-[#171717] dark:text-white tracking-tight leading-snug">
                  Ready To Start A<br />Project?
                </h3>
              </div>

              <div className="w-full border-t border-[#E5E7EB] dark:border-white/10 my-8 sm:my-10" />

              <div className="flex items-center justify-between gap-4">
                <a
                  href="mailto:taufikmalii281003@gmail.com"
                  className="font-heading font-semibold text-xs sm:text-sm md:text-base text-[#171717] dark:text-white hover:text-[#A86200] dark:hover:text-[#F9B51B] transition-colors break-all"
                >
                  taufikmalii281003@gmail.com
                </a>
                <a
                  href="mailto:taufikmalii281003@gmail.com"
                  aria-label="Kirim Email ke taufikmalii281003@gmail.com"
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-[#F9B51B] text-[#171717] flex items-center justify-center font-bold text-base sm:text-lg hover:scale-105 active:scale-95 transition-all shadow-xs shrink-0 cursor-pointer"
                >
                  <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Card 2: WhatsApp / Prefer To Talk It Through */}
            <div className="bg-[#F8F9FA] dark:bg-[#1A1A1A] border border-[#E5E7EB] dark:border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-xs hover:border-[#D1D5DB] dark:hover:border-white/20 transition-all duration-200 group">
              <div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-[#171717] dark:text-white tracking-tight leading-snug">
                  Prefer To Talk It Through?
                </h3>
              </div>

              <div className="w-full border-t border-[#E5E7EB] dark:border-white/10 my-8 sm:my-10" />

              <div className="flex items-center justify-between gap-4">
                <a
                  href="https://api.whatsapp.com/send?phone=6285656381485"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading font-semibold text-xs sm:text-sm md:text-base text-[#171717] dark:text-white hover:text-[#A86200] dark:hover:text-[#F9B51B] transition-colors"
                >
                  +62 856 5638 1485
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=6285656381485"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hubungi WhatsApp +62 856 5638 1485"
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-[#F9B51B] text-[#171717] flex items-center justify-center font-bold text-base sm:text-lg hover:scale-105 active:scale-95 transition-all shadow-xs shrink-0 cursor-pointer"
                >
                  <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
