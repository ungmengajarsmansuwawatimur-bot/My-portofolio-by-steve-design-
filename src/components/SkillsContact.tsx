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
  // Interactive state: single active comment box (switches mutually on clicking other boxes, toggles off on re-click)
  const [activeCommentId, setActiveCommentId] = React.useState<string | null>(null);

  const toggleComment = (id: string) => {
    setActiveCommentId((prev) => (prev === id ? null : id));
  };

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
        className="pt-20 md:pt-28 pb-0 bg-[#31543A] text-white transition-colors duration-200 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 pb-16 md:pb-20">
          {/* Section Kicker & Title - Centered matching screenshot */}
          <div className="space-y-3 max-w-3xl mx-auto text-center flex flex-col items-center">
            <span className="font-display inline-flex items-center justify-center text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-[#F9B51B] dark:text-[#d1fe17]">
              SKILLS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.025em] text-white leading-tight text-center">
              Skills &amp; Technical Experience
            </h2>
          </div>

          {/* 12 Digital Tools & Applications in 2x6 Format matching screenshot */}
          <InteractiveToolIndex />
        </div>

        {/* Marquee Ticker at the bottom of section#skills */}
        <MarqueeTicker items={skillsTickerItems} speed="slow" durationSeconds={85} />
      </section>

      {/* ========================================================================= */}
      {/* 2. TESTIMONIALS SECTION (Steve Mengelkoch Screenshots 6 & 7)               */}
      {/* ========================================================================= */}
      <section
        id="testimonials"
        className="py-20 md:py-28 bg-[#F5F5F5] dark:bg-[#18181B] text-[#171717] dark:text-white transition-colors duration-200 border-t border-[#171717]/15 dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Section Kicker & Title */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="font-display inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.08em] uppercase text-[#F9B51B] dark:text-[#d1fe17] transition-colors">
              <span aria-hidden="true">✦</span>
              <span>TESTIMONIALS</span>
              <span aria-hidden="true">✦</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#171717] dark:text-white leading-[1.12]">
              What Clients &amp; Colleagues Say
            </h2>
          </div>

          {/* 4 Testimonials dalam bentuk bubble komentar 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-stretch">
            {testimonialsData.map((testi) => {
              const isSelected = activeCommentId === testi.id;

              return (
                <div
                  key={testi.id}
                  className="flex flex-col justify-between h-full group"
                >
                  {/* Speech / Comment Bubble Card with Mutual Click Animation */}
                  <div
                    role="button"
                    tabIndex={0}
                    aria-pressed={isSelected}
                    onClick={() => toggleComment(testi.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleComment(testi.id);
                      }
                    }}
                    title={isSelected ? 'Klik untuk melepas sorotan komentar' : 'Klik untuk menyorot komentar ini'}
                    className={`testimonial-bubble relative rounded-3xl p-6 sm:p-7 border-2 sm:border-[2.5px] flex-1 flex flex-col justify-between cursor-pointer select-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.985] ${
                      isSelected
                        ? 'is-selected shadow-[0_10px_30px_-4px_rgba(23,23,23,0.18)] dark:shadow-[0_10px_30px_-4px_rgba(255,255,255,0.18)] scale-[1.015]'
                        : 'shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] hover:shadow-md'
                    }`}
                  >
                    {/* Bubble Pointer / Ekor Balon Komentar */}
                    <div
                      aria-hidden="true"
                      className={`testimonial-bubble-tail absolute -bottom-2.5 left-9 w-5 h-5 rotate-45 transform transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] border-r-2 border-b-2 sm:border-r-[2.5px] sm:border-b-[2.5px] ${
                        isSelected ? 'is-selected' : ''
                      }`}
                    />

                    <div className="space-y-4">
                      {/* Header inside Bubble: Rating + Category Pill */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-1 text-[#F9B51B] dark:text-[#d1fe17] text-base select-none transition-colors">
                          {'★'.repeat(testi.stars)}
                        </div>
                        <span className="testimonial-category-pill font-info text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full transition-colors duration-200">
                          {testi.category}
                        </span>
                      </div>

                      {/* Quote / Isi Komentar */}
                      <p className="testimonial-quote-text font-body text-sm sm:text-base leading-[1.65] italic font-normal text-refined-justify">
                        &ldquo;{testi.quote}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Author Meta connected to bubble tail */}
                  <div className="mt-5 pl-5 flex items-center gap-3.5">
                    <div className="font-display w-10 h-10 rounded-full bg-[#F9B51B] dark:bg-[#d1fe17] text-[#171717] flex items-center justify-center font-bold text-xs shrink-0 shadow-sm ring-2 ring-white dark:ring-[#18181B]">
                      {testi.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-semibold text-[#171717] dark:text-white leading-snug">
                        {testi.name}
                      </h4>
                      <p className="font-info text-xs text-[#666666] dark:text-[#A3A3A3] font-normal">
                        {testi.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. LET'S WORK TOGETHER & CONTACT CHANNELS (Steve Mengelkoch style)        */}
      {/* ========================================================================= */}
      <section
        id="contact"
        className="py-20 md:py-28 bg-[#171717] text-white transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Top Banner Headline */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="font-display inline-flex items-center gap-2 text-xs font-semibold tracking-[0.08em] uppercase text-[#F9B51B] dark:text-[#d1fe17]">
                <span aria-hidden="true">✦</span>
                <span>LET'S WORK TOGETHER</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-[1.12]">
                Tertarik Bekerja Sama atau Rekrutmen?
              </h2>
            </div>

            {/* Button for direct WhatsApp */}
            <div className="shrink-0">
              <a
                href="https://api.whatsapp.com/send?phone=6285656381485"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display group inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#F9B51B] dark:bg-[#d1fe17] text-[#171717] hover:bg-[#E5A417] transition-all duration-150 shadow-md active:scale-95 cursor-pointer"
              >
                <span>HUBUNGI VIA WHATSAPP</span>
                <span className="w-9 h-9 rounded-full bg-[#171717] text-white flex items-center justify-center font-bold text-sm shrink-0 transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          </div>

          {/* 4 Contact Channels (Clean Open Editorial Columns, Zero Lines) */}
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
                  <span className="font-display text-xs font-semibold tracking-[0.08em] text-[#F9B51B] dark:text-[#d1fe17] uppercase">
                    {contact.label}
                  </span>
                  <span className="text-white/60 group-hover:text-[#F9B51B] dark:text-[#d1fe17] text-sm font-bold transition-colors">
                    &rarr;
                  </span>
                </div>

                <div>
                  <h4 className="font-display text-base sm:text-lg font-semibold text-white group-hover:text-[#F9B51B] dark:text-[#d1fe17] transition-colors break-words">
                    {contact.value}
                  </h4>
                  <p className="font-info text-xs text-white/60 mt-1 font-normal">
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
