import React from 'react';

interface TiltedCardsBackdropProps {
  className?: string;
}

export const TiltedCardsBackdrop: React.FC<TiltedCardsBackdropProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full flex items-center justify-center select-none pointer-events-none overflow-visible ${className}`}>
      <svg
        viewBox="-170 -30 980 820"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full scale-[1.08] sm:scale-[1.14] md:scale-[1.20] lg:scale-[1.30] xl:scale-[1.36] object-contain origin-bottom transition-transform duration-300 overflow-visible"
        aria-hidden="true"
      >
        {/* ============================================================
            LAYER 1 (Paling Belakang): Black Wireframe Outline Card
            Bingkai garis luar hitam tebal membingkai puncak tumpukan
            ============================================================ */}
        <g transform="rotate(-4 320 370) translate(28, -28)">
          <rect
            x="90"
            y="50"
            width="460"
            height="640"
            rx="50"
            ry="50"
            fill="none"
            stroke="#171717"
            strokeWidth="4.2"
            className="stroke-[#171717] dark:stroke-white/85"
          />
        </g>

        {/* ============================================================
            LAYER 2 (KARTU SISI KIRI TERLUAR):
            Light Mode: Light Yellow (#FEF08A) | Dark Mode: Emerald Green (#3E8A56)
            Kemiringan ke kiri -29° (geser -124px)
            ============================================================ */}
        <g transform="rotate(-29 320 370) translate(-124, -8)">
          <rect
            x="90"
            y="50"
            width="460"
            height="640"
            rx="50"
            ry="50"
            className="fill-[#FEF08A] dark:fill-[#3E8A56] transition-colors duration-300"
          />
        </g>

        {/* ============================================================
            LAYER 3 (SISI KIRI TENGAH):
            Light Mode: Deep Golden Amber (#F3A615) | Dark Mode: Deep Forest Green (#31543A)
            Mekar di sisi kiri (-16°, geser -65px)
            ============================================================ */}
        <g transform="rotate(-16 320 370) translate(-65, -16)">
          <rect
            x="90"
            y="50"
            width="460"
            height="640"
            rx="50"
            ry="50"
            className="fill-[#F3A615] dark:fill-[#31543A] transition-colors duration-300"
          />
        </g>

        {/* ============================================================
            LAYER 4 (KARTU SISI KANAN TERLUAR):
            Light Mode: Warm Golden Sand (#FED34D) | Dark Mode: Deep Forest Green (#31543A)
            Kemiringan ke kanan (+24°, geser +120px)
            ============================================================ */}
        <g transform="rotate(24 320 370) translate(120, 24)">
          <rect
            x="90"
            y="50"
            width="460"
            height="640"
            rx="50"
            ry="50"
            className="fill-[#FED34D] dark:fill-[#31543A] transition-colors duration-300"
          />
        </g>

        {/* ============================================================
            LAYER 5 (SISI KANAN TENGAH):
            Light Mode: Pale Buttery Cream (#FFF1D2) | Dark Mode: Emerald Green (#3E8A56)
            Mekar di sisi kanan (+11°, geser +60px)
            ============================================================ */}
        <g transform="rotate(11 320 370) translate(60, 24)">
          <rect
            x="90"
            y="50"
            width="460"
            height="640"
            rx="50"
            ry="50"
            className="fill-[#FFF1D2] dark:fill-[#3E8A56] transition-colors duration-300"
          />
        </g>

        {/* ============================================================
            LAYER 6 (KARTU UTAMA SENTRAL / PALING DEPAN):
            Light Mode: Sunny Yellow (#FFCA00) | Dark Mode: Electric Lime (#d1fe17)
            Kartu utama di posisi sentral (-3°, tepat di balik bahu & foto)
            ============================================================ */}
        <g transform="rotate(-3 320 370) translate(0, 0)">
          <rect
            x="90"
            y="50"
            width="460"
            height="640"
            rx="50"
            ry="50"
            className="fill-[#FFCA00] dark:fill-[#d1fe17] transition-colors duration-300"
          />
        </g>
      </svg>
    </div>
  );
};
