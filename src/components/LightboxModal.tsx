import React, { useEffect, useRef } from 'react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  badge?: string;
  children: React.ReactNode;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  badge,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/60 dark:bg-black/80 backdrop-blur-[2px] transition-opacity animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-white dark:bg-[#1E1E1E] border-2 border-[#171717] dark:border-[#333333] rounded-3xl shadow-[8px_8px_0px_#171717] overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="flex items-start justify-between p-5 md:p-6 border-b border-[#171717]/15 dark:border-[#2A2A2A] bg-[#F5F5F5] dark:bg-[#1E1E1E]">
          <div>
            {badge && (
              <span className="text-[11px] font-black tracking-widest text-[#F9B51B] dark:text-[#d1fe17] uppercase mb-1 block">
                ✦ {badge} ✦
              </span>
            )}
            <h3
              id="modal-headline"
              className="text-lg sm:text-xl font-black text-[#171717] dark:text-white tracking-tight"
            >
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] mt-0.5">
                {subtitle}
              </p>
            )}
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Tutup jendela rincian"
            className="p-2 -mr-2 -mt-2 text-[#171717] dark:text-white hover:bg-white dark:hover:bg-[#2A2A2A] rounded-full border-2 border-transparent hover:border-[#171717] transition-all cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content body */}
        <div className="p-5 md:p-6 overflow-y-auto space-y-5 text-sm text-[#111827] dark:text-white">
          {children}
        </div>

        {/* Footer actions */}
        <div className="p-4 md:p-5 border-t border-[#E5E7EB] dark:border-[#27272A] bg-white dark:bg-[#18181B] flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs sm:text-sm font-semibold text-[#111827] dark:text-white bg-[#F8F9FA] dark:bg-[#27272A] border border-[#E5E7EB] dark:border-[#27272A] rounded-full hover:bg-[#E5E7EB] dark:hover:bg-[#3F3F46] transition-colors focus-visible:outline-2 focus-visible:outline-[#10B981] cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
