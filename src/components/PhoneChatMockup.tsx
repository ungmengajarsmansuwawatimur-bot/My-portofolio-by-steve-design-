import React, { useState, useEffect, useRef, useCallback } from 'react';
import { WorkflowEvidenceItem } from '../types';
import { OptimizedPicture } from './OptimizedPicture';

interface PhoneChatMockupProps {
  item: WorkflowEvidenceItem;
  onClick?: (activeScreenshot?: string) => void;
  onOpenEvidence?: (item: WorkflowEvidenceItem, activeScreenshot?: string) => void;
}

const PhoneChatMockupComponent: React.FC<PhoneChatMockupProps> = ({ item, onClick, onOpenEvidence }) => {
  const screenshots = item.screenshots && item.screenshots.length > 0
    ? item.screenshots
    : [item.screenshotUrl || '/assets/chat/chat_real_evidence_01.svg'];

  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleTriggerOpen = useCallback((src: string) => {
    onClick?.(src);
    onOpenEvidence?.(item, src);
  }, [item, onClick, onOpenEvidence]);

  // Track viewport visibility to pause auto-slideshow when offscreen
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '100px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-switch screenshots every 4s while actively visible
  useEffect(() => {
    if (!isVisible || isPaused || screenshots.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isVisible, isPaused, screenshots.length]);

  const activeSrc = screenshots[currentIndex % screenshots.length];

  const handlePrev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  const handleNext = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  }, [screenshots.length]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center text-center w-full max-w-[320px] mx-auto group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* SMARTPHONE FRAME */}
      <div className="relative w-full aspect-[9/19.5] max-h-[620px] rounded-[42px] p-[10px] bg-[#181818] dark:bg-[#181818] border-2 border-[#242424] dark:border-[#242424] shadow-xl hover:shadow-2xl transition-all duration-300">
        {/* Outer Metal Edge Highlights */}
        <div className="absolute inset-0 rounded-[40px] pointer-events-none border border-white/10" />

        {/* Side Hardware Buttons */}
        <div className="absolute -left-[3px] top-[100px] w-[3px] h-[30px] bg-[#242424] rounded-l-xs" />
        <div className="absolute -left-[3px] top-[140px] w-[3px] h-[45px] bg-[#242424] rounded-l-xs" />
        <div className="absolute -left-[3px] top-[195px] w-[3px] h-[45px] bg-[#242424] rounded-l-xs" />
        <div className="absolute -right-[3px] top-[130px] w-[3px] h-[55px] bg-[#242424] rounded-r-xs" />

        {/* INNER SCREEN CONTAINER */}
        <div
          onClick={() => handleTriggerOpen(activeSrc)}
          className="relative w-full h-full rounded-[34px] overflow-hidden bg-[#0B141A] cursor-pointer flex flex-col justify-between select-none shadow-inner"
        >
          {/* Top Speaker / Dynamic Camera Notch */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 w-24 h-4 bg-[#05080A] rounded-full flex items-center justify-between px-3 shadow-xs pointer-events-none">
            <div className="w-2 h-2 rounded-full bg-[#1A2229] border border-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#111111] flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#242424]" />
            </div>
          </div>

          {/* SCREEN CONTENT: WhatsApp Chat Image Direct Reliable Render */}
          <div className="relative w-full h-full flex flex-col overflow-hidden bg-[#0B141A]">
            <OptimizedPicture
              key={activeSrc}
              src={activeSrc}
              alt={`${item.sequence} - ${item.title}`}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-top select-none transition-opacity duration-300 ease-in-out"
            />

            {/* Subtle Screen Gloss / Glare */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/10" />

            {/* Navigation Arrows: Selalu aktif di perangkat sentuh/hp dan tampil saat hover di desktop */}
            {screenshots.length > 1 && (
              <div className="absolute inset-y-0 left-1 right-1 flex items-center justify-between z-20 pointer-events-none opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full bg-black/80 hover:bg-black text-white backdrop-blur-md flex items-center justify-center border border-white/25 shadow-md pointer-events-auto cursor-pointer transition-transform active:scale-95"
                  title="Lihat screenshot sebelumnya"
                  aria-label="Screenshot sebelumnya"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full bg-black/80 hover:bg-black text-white backdrop-blur-md flex items-center justify-center border border-white/25 shadow-md pointer-events-auto cursor-pointer transition-transform active:scale-95"
                  title="Lihat screenshot berikutnya"
                  aria-label="Screenshot berikutnya"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}

            {/* Bottom Dots / Counter Indicator Bar */}
            {screenshots.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 shadow-md">
                {screenshots.length <= 6 ? (
                  screenshots.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(idx);
                      }}
                      className={`transition-all rounded-full cursor-pointer ${
                        (currentIndex % screenshots.length) === idx
                          ? 'w-4 h-1.5 bg-[#10B981]'
                          : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Buka slide bukti ${idx + 1}`}
                      title={`Buka bukti ${idx + 1}`}
                    />
                  ))
                ) : (
                  <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-white px-1 select-none">
                    <span className="text-[#10B981]">{(currentIndex % screenshots.length) + 1}</span>
                    <span className="text-white/40">/</span>
                    <span className="text-white/80">{screenshots.length}</span>
                    <span className="text-[10px] font-sans font-normal text-white/60 ml-0.5">Bukti</span>
                  </div>
                )}
              </div>
            )}

            {/* Bottom Home Bar */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 w-28 h-1 bg-white/30 rounded-full backdrop-blur-xs pointer-events-none" />
          </div>

          {/* Hover Zoom Prompt Badge */}
          <div className="absolute inset-0 bg-[#0B141A]/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-25 pointer-events-none">
            <span className="px-3.5 py-1.5 rounded-full bg-black/85 text-white text-[11px] font-bold shadow-lg tracking-tight flex items-center gap-1.5 border border-white/30">
              <span>Perbesar Chat Asli</span>
              <span>&rarr;</span>
            </span>
          </div>
        </div>
      </div>

      {/* CAPTION BELOW SMARTPHONE */}
      <div className="mt-5 space-y-1.5 w-full px-2">
        {/* Number & Sequence */}
        <div className="flex items-center justify-center gap-2">
          <span className="font-mono text-base font-black text-[#10B981]">
            {item.sequence}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5E7EB] dark:bg-[#27272A]" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280] dark:text-[#9CA3AF]">
            {item.subtitle}
          </span>
        </div>

        {/* Title */}
        <h4 className="text-base font-extrabold text-[#111827] dark:text-[#F9FAFB] group-hover:text-[#10B981] dark:group-hover:text-[#10B981] transition-colors leading-snug">
          {item.title}
        </h4>

        {/* Short Description */}
        <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed line-clamp-3">
          {item.shortDescription}
        </p>

        {/* Tombol Perbesar Screenshot */}
        <div className="pt-1.5 flex justify-center">
          <button
            type="button"
            onClick={() => handleTriggerOpen(activeSrc)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-[#1E1E1E] border-2 border-[#171717] dark:border-[#333333] hover:border-[#F9B51B] dark:border-[#d1fe17] text-[11px] font-bold text-[#171717] dark:text-white transition-colors cursor-pointer shadow-[2px_2px_0px_#171717]"
          >
            <svg className="w-3.5 h-3.5 text-[#F9B51B] dark:text-[#d1fe17]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
            </svg>
            <span>Perbesar Bukti ({currentIndex + 1}/{screenshots.length})</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export const PhoneChatMockup = React.memo(PhoneChatMockupComponent);
