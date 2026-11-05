import React from 'react';

interface UnderDevelopmentViewProps {
  onBack: () => void;
  projectName?: string;
}

export const UnderDevelopmentView: React.FC<UnderDevelopmentViewProps> = ({ onBack }) => {
  return (
    <article className="min-h-screen py-10 md:py-16 bg-[#FFFFFF] dark:bg-[#121212] transition-colors duration-200 flex flex-col justify-between">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        {/* Under Development Screen Content matching reference image */}
        <div className="max-w-2xl mx-auto text-center space-y-6 sm:space-y-8 py-6 sm:py-10">
          {/* Graphic Illustration with Animated Rotating Gear */}
          <div className="flex justify-center items-center">
            <div className="relative w-64 sm:w-80 md:w-96 max-w-full select-none">
              <svg
                viewBox="0 0 320 200"
                className="w-full h-auto drop-shadow-sm overflow-visible"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Soft Yellow Background Circle */}
                <circle cx="104" cy="98" r="74" fill="#FEE9B5" />

                {/* Burst / Spark lines above gear (top right) */}
                <line x1="216" y1="36" x2="216" y2="22" stroke="#171717" strokeWidth="4.5" strokeLinecap="round" />
                <line x1="230" y1="44" x2="246" y2="38" stroke="#171717" strokeWidth="4.5" strokeLinecap="round" />
                <line x1="236" y1="56" x2="252" y2="58" stroke="#171717" strokeWidth="4.5" strokeLinecap="round" />

                {/* Laptop Screen Body */}
                <rect
                  x="54"
                  y="40"
                  width="164"
                  height="106"
                  rx="10"
                  fill="#FFFFFF"
                  stroke="#171717"
                  strokeWidth="6"
                  strokeLinejoin="round"
                />

                {/* Laptop Header Bar Line */}
                <line x1="56" y1="60" x2="216" y2="60" stroke="#171717" strokeWidth="4" />

                {/* 3 Header Dots */}
                <circle cx="68" cy="50" r="3" fill="#171717" />
                <circle cx="78" cy="50" r="3" fill="#171717" />
                <circle cx="88" cy="50" r="3" fill="#171717" />

                {/* Center Code Symbol </> */}
                <text
                  x="136"
                  y="112"
                  textAnchor="middle"
                  fill="#171717"
                  fontSize="32"
                  fontWeight="900"
                  fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
                  letterSpacing="1"
                >
                  &lt;/&gt;
                </text>

                {/* Laptop Keyboard / Base */}
                <path
                  d="M 42 146 L 228 146 C 234 146 238 150 235 154 L 229 162 C 227 165 223 167 218 167 L 52 167 C 47 167 43 165 41 162 L 35 154 C 32 150 36 146 42 146 Z"
                  fill="#262626"
                  stroke="#171717"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
                {/* Laptop Base Opening Notch */}
                <path
                  d="M 122 146 L 148 146 C 146 151 144 153 140 153 L 130 153 C 126 153 124 151 122 146 Z"
                  fill="#D4D4D4"
                />

                {/* ========================================================================= */}
                {/* ANIMATED ROTATING GEAR (GERIGI BERGERAK BERPUTAR)                        */}
                {/* ========================================================================= */}
                <g transform="translate(214, 134)">
                  <g
                    className="animate-[spin_7s_linear_infinite]"
                    style={{
                      transformOrigin: '0px 0px',
                      animation: 'spin 7s linear infinite',
                    }}
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 0 0"
                      to="360 0 0"
                      dur="7s"
                      repeatCount="indefinite"
                    />
                    {/* Gear Outline & Body (Golden Yellow #F9B51B with thick black outline) */}
                    <path
                      d="M 34.0 0.0 L 33.3 6.6 L 23.1 9.6 L 20.8 13.9 L 24.0 24.0 L 18.9 28.3 L 9.6 23.1 L 4.9 24.5 L 0.0 34.0 L -6.6 33.3 L -9.6 23.1 L -13.9 20.8 L -24.0 24.0 L -28.3 18.9 L -23.1 9.6 L -24.5 4.9 L -34.0 0.0 L -33.3 -6.6 L -23.1 -9.6 L -20.8 -13.9 L -24.0 -24.0 L -18.9 -28.3 L -9.6 -23.1 L -4.9 -24.5 L -0.0 -34.0 L 6.6 -33.3 L 9.6 -23.1 L 13.9 -20.8 L 24.0 -24.0 L 28.3 -18.9 L 23.1 -9.6 L 24.5 -4.9 Z M 9.5 0 A 9.5 9.5 0 1 0 -9.5 0 A 9.5 9.5 0 1 0 9.5 0 Z"
                      fill="#F9B51B"
                      stroke="#171717"
                      strokeWidth="5"
                      strokeLinejoin="round"
                      fillRule="evenodd"
                    />
                    {/* Center Hole Circle */}
                    <circle cx="0" cy="0" r="9.5" fill="#FFFFFF" stroke="#171717" strokeWidth="4" />
                  </g>
                </g>
              </svg>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h1 className="font-unbounded font-semibold text-2xl sm:text-3xl md:text-4xl text-[#171717] dark:text-white tracking-tight leading-snug">
              Halaman Sedang{' '}
              <span className="text-[#F9B51B]">Dalam Pengembangan</span>
            </h1>
          </div>

          {/* Description matching user's image */}
          <p className="font-unbounded text-xs sm:text-sm md:text-base text-[#666666] dark:text-[#A3A3A3] max-w-xl mx-auto leading-relaxed font-normal">
            Halaman detail proyek ini sedang dalam tahap pengembangan dan penyempurnaan. Informasi lengkap, proses, serta hasil implementasi akan segera tersedia dalam waktu dekat.
          </p>

          {/* Action CTA Button with requested Gray Color (warna abu-abu) */}
          <div className="pt-4 flex justify-center">
            <button
              type="button"
              onClick={onBack}
              className="font-unbounded group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-[#525252] dark:bg-[#383838] hover:bg-[#3F3F46] dark:hover:bg-[#27272A] text-white border-2 border-[#171717] dark:border-[#525252] transition-all duration-200 shadow-[3px_3px_0px_#171717] dark:shadow-[3px_3px_0px_#000000] active:scale-95 cursor-pointer uppercase tracking-wider"
            >
              <span className="transition-transform group-hover:-translate-x-1">&larr;</span>
              <span>Kembali ke Portofolio</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
