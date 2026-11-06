import React from 'react';

interface MarqueeTickerProps {
  items?: string[];
  className?: string;
  speed?: 'normal' | 'slow';
  durationSeconds?: number;
  hasDiagonalFrame?: boolean;
}

const DEFAULT_ITEMS = [
  'Web Creator',
  'UI/UX Design',
  'Graphic Design',
  'Video Editing',
  'Digital Admin',
  'Web Development',
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
    durationSeconds ?? (speed === 'slow' ? Math.max(70, items.length * 3.2) : 45);

  if (hasDiagonalFrame) {
    return (
      <div
        className={`w-full relative z-20 select-none py-5 sm:py-6 md:py-7 overflow-x-clip overflow-y-visible ${className}`}
        aria-label="Keterampilan & Layanan Berjalan"
      >
        <div className="relative w-full">
          {/* Dark Green Diagonal Ribbon Band behind the yellow marquee (visible and well-proportioned) */}
          <svg
            className="absolute -top-5 sm:-top-6 md:-top-7 -bottom-5 sm:-bottom-6 md:-bottom-7 inset-x-0 w-full h-[calc(100%+40px)] sm:h-[calc(100%+48px)] md:h-[calc(100%+56px)] pointer-events-none z-0 overflow-visible"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon
              points="0,0 1000,35 1000,100 0,65"
              fill="#31543A"
              stroke="#171717"
              strokeWidth="2.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Foreground Horizontal Yellow Marquee Strip (Seamless borderless) */}
          <div className="w-full overflow-hidden bg-[#F9B51B] py-4.5 sm:py-5 md:py-6 select-none relative z-10">
            <div
              className="animate-ticker flex items-center"
              style={{ animationDuration: `${animationDuration}s` }}
            >
              {[...Array(4)].map((_, loopIdx) => (
                <div key={loopIdx} className="flex items-center shrink-0">
                  {items.map((item, idx) => (
                    <div key={idx} className="flex items-center shrink-0">
                      <span className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-bold tracking-tight text-[#171717] px-4 sm:px-6 md:px-8 whitespace-nowrap">
                        {item}
                      </span>
                      <span
                        className="text-xl sm:text-2xl md:text-3xl font-black text-[#171717] shrink-0 inline-flex items-center justify-center leading-none"
                        aria-hidden="true"
                      >
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
      className={`w-full overflow-hidden bg-[#F9B51B] py-4.5 sm:py-5 md:py-6 select-none relative z-20 ${className}`}
      aria-label="Keterampilan & Layanan Berjalan"
    >
      <div
        className="animate-ticker flex items-center"
        style={{ animationDuration: `${animationDuration}s` }}
      >
        {[...Array(4)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center shrink-0">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center shrink-0">
                <span className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-bold tracking-tight text-[#171717] px-4 sm:px-6 md:px-8 whitespace-nowrap">
                  {item}
                </span>
                <span
                  className="text-xl sm:text-2xl md:text-3xl font-black text-[#171717] shrink-0 inline-flex items-center justify-center leading-none"
                  aria-hidden="true"
                >
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
