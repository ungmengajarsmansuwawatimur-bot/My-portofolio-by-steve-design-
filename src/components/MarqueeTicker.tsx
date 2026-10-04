import React from 'react';

interface MarqueeTickerProps {
  items?: string[];
  className?: string;
  speed?: 'normal' | 'slow';
  durationSeconds?: number;
  hasDiagonalFrame?: boolean;
}

const DEFAULT_ITEMS = [
  'PRAMUNIAGA',
  'OPERASIONAL TOKO',
  'KASIR & SISTEM POS',
  'PENATAAN DISPLAY PRODUK',
  'PELAYANAN KONSUMEN PRIMA',
  'MANAJEMEN STOK & INVENTARIS',
  'ADMINISTRASI DOKUMEN DIGITAL',
  'KOMUNIKASI EFEKTIF',
  'DISIPLIN & TANGGUNG JAWAB',
];

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  items = DEFAULT_ITEMS,
  className = '',
  speed = 'slow',
  durationSeconds,
  hasDiagonalFrame = false,
}) => {
  // Comfortable reading pace: calculate smooth duration based on number of items
  const animationDuration =
    durationSeconds ?? (speed === 'slow' ? Math.max(65, items.length * 2.4) : 40);

  if (hasDiagonalFrame) {
    return (
      <div
        className={`w-full relative z-20 select-none pt-1.5 sm:pt-2 pb-2.5 sm:pb-3.5 overflow-x-clip overflow-y-visible ${className}`}
        aria-label="Keterampilan & Layanan Berjalan"
      >
        <div className="relative w-full">
          {/* Green Diagonal Ribbon/Band behind the marquee - perfectly balanced & symmetrical left and right */}
          <svg
            className="absolute -top-4 sm:-top-5.5 -bottom-4 sm:-bottom-5.5 inset-x-0 w-full h-[calc(100%+32px)] sm:h-[calc(100%+44px)] pointer-events-none z-0 overflow-visible"
            viewBox="0 0 1000 120"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon
              points="0,42 1000,6 1000,78 0,114"
              fill="#26492F"
              stroke="#1A3320"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Marquee Strip with running text - slightly larger size */}
          <div className="w-full overflow-hidden bg-[#F9B51B] dark:bg-[#d1fe17] py-4.5 sm:py-5 select-none relative z-10 border-y-2 border-[#171717] shadow-sm">
            <div
              className="animate-ticker flex items-center"
              style={{ animationDuration: `${animationDuration}s` }}
            >
              {[...Array(4)].map((_, loopIdx) => (
                <div key={loopIdx} className="flex items-center shrink-0">
                  {items.map((item, idx) => (
                    <div key={idx} className="flex items-center shrink-0">
                      <span className="font-display text-sm sm:text-base font-semibold tracking-wider text-[#171717] px-4 sm:px-5 uppercase whitespace-nowrap">
                        {item}
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-[#171717] shrink-0 inline-flex items-center justify-center leading-none" aria-hidden="true">
                        ✦
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full overflow-hidden bg-[#F9B51B] dark:bg-[#d1fe17] py-4.5 sm:py-5 select-none border-y-2 border-[#171717] relative z-20 ${className}`}
      aria-label="Keterampilan & Layanan Berjalan"
    >
      <div
        className="animate-ticker flex items-center"
        style={{ animationDuration: `${animationDuration}s` }}
      >
        {/* Repeating segments for seamless loop */}
        {[...Array(4)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center shrink-0">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center shrink-0">
                <span className="font-display text-sm sm:text-base font-semibold tracking-wider text-[#171717] px-4 sm:px-5 uppercase whitespace-nowrap">
                  {item}
                </span>
                <span className="text-xl sm:text-2xl font-black text-[#171717] shrink-0 inline-flex items-center justify-center leading-none" aria-hidden="true">
                  ✦
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
