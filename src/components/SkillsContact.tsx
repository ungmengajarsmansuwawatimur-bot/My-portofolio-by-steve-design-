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
          <div className="relative max-w-6xl mx-auto">
            {/* Left Chevron Button */}
            <button
              type="button"
              onClick={handlePrevTesti}
              aria-label="Previous testimonials"
              className="absolute -left-3 sm:-left-8 lg:-left-12 top-[38%] -translate-y-1/2 z-10 p-2 text-gray-300 hover:text-[#111827] transition-colors duration-200 cursor-pointer"
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
              className="absolute -right-3 sm:-right-8 lg:-right-12 top-[38%] -translate-y-1/2 z-10 p-2 text-gray-300 hover:text-[#111827] transition-colors duration-200 cursor-pointer"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Testimonials 2-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-9 lg:gap-11 items-stretch">
              {currentTestimonials.map((testi) => (
                <div
                  key={testi.id}
                  className="flex flex-col justify-between h-full transition-all duration-300 ease-out"
                >
                  {/* Speech Bubble Card Box */}
                  <div className="relative bg-[#F8F9FA] rounded-2xl p-7 sm:p-9 md:p-10 flex-1 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.03)] border border-[#EEEEEE]/70">
                    {/* Downward Triangular Speech Tail pointing directly down towards author name */}
                    <div
                      aria-hidden="true"
                      className="absolute -bottom-3 left-9 sm:left-11 w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-t-[12px] border-t-[#F8F9FA]"
                    />

                    {/* Testimonial Quote in Italic matching reference */}
                    <p className="font-body text-[15px] sm:text-[16px] md:text-[16.5px] text-[#333333] leading-[1.75] italic font-normal text-left">
                      {testi.quote}
                    </p>
                  </div>

                  {/* Author Information below the speech bubble */}
                  <div className="mt-5 sm:mt-6 pl-7 sm:pl-9 text-left">
                    <h4 className="font-heading font-bold text-base sm:text-lg text-[#111827] leading-tight tracking-[-0.01em]">
                      {testi.name}
                    </h4>
                    <p className="font-body font-semibold text-sm sm:text-base text-[#A86200] mt-1 leading-snug">
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
        className="py-20 md:py-28 bg-white dark:bg-[#121212] text-[#171717] dark:text-white transition-colors duration-200 border-t border-[#171717]/10 dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Top Banner Headline */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="font-body inline-flex items-center gap-2 text-xs font-semibold tracking-[0.08em] uppercase text-[#DD9B08] dark:text-[#F9B51B]">
                <span aria-hidden="true">✦</span>
                <span>LET'S WORK TOGETHER</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-[#171717] dark:text-white leading-[1.12]">
                Tertarik Bekerja Sama atau Rekrutmen?
              </h2>
            </div>

            {/* Button for direct WhatsApp */}
            <div className="shrink-0">
              <a
                href="https://api.whatsapp.com/send?phone=6285656381485"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body group inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#F9B51B] dark:bg-[#d1fe17] text-[#171717] hover:bg-[#E5A417] transition-all duration-150 shadow-md active:scale-95 cursor-pointer border border-[#171717]/10"
              >
                <span>HUBUNGI VIA WHATSAPP</span>
                <span className="w-9 h-9 rounded-full bg-[#171717] text-white flex items-center justify-center font-bold text-sm shrink-0 transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          </div>

          {/* 4 Contact Channels (Clean Open Editorial Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactData.map((contact) => (
              <a
                key={contact.platform}
                href={contact.actionUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="space-y-2 group cursor-pointer block"
              >
                <div className="flex items-center justify-between">
                  <span className="font-body text-xs font-semibold tracking-[0.08em] text-[#A2680A] dark:text-[#F9B51B] uppercase">
                    {contact.label}
                  </span>
                  <span className="text-[#171717]/40 group-hover:text-[#171717] dark:text-white/60 dark:group-hover:text-[#d1fe17] text-sm font-bold transition-colors">
                    &rarr;
                  </span>
                </div>

                <div>
                  <h4 className="font-heading text-base sm:text-lg font-semibold text-[#171717] dark:text-white group-hover:text-[#A2680A] dark:group-hover:text-[#F9B51B] transition-colors break-words">
                    {contact.value}
                  </h4>
                  <p className="font-info text-xs text-[#666666] dark:text-[#A3A3A3] mt-1 font-normal">
                    {contact.placeholderText}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
