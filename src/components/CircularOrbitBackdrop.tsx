import React from 'react';
import { motion } from 'motion/react';

interface CircularOrbitBackdropProps {
  photoSrc?: string;
  altText?: string;
  className?: string;
}

export const CircularOrbitBackdrop: React.FC<CircularOrbitBackdropProps> = ({
  photoSrc = '/assets/taufik_official_portrait.png',
  altText = 'Taufik Hidayat Malii - Operasional & Pelayanan Retail',
  className = '',
}) => {
  const activePhotoSrc = photoSrc || '/assets/taufik_official_portrait.png';

  return (
    <div className={`relative w-full h-full flex items-center justify-end select-none overflow-visible ${className}`}>

      {/* Main Circular Orbit SVG Composition */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[380px] sm:max-h-[500px] md:max-h-[620px] lg:max-h-[760px] object-contain origin-right transition-all duration-300 overflow-visible scale-[1.08] sm:scale-[1.08] lg:scale-[1.08] xl:scale-[1.10]"
        aria-label="Mockup Background Versi 2 Circular Orbit"
      >
        <defs>
          {/* Pop-Out Mask: Bottom is clipped precisely to the circle curve, top allows head/hair to pop out freely */}
          <clipPath id="popOutCircleClip" clipPathUnits="userSpaceOnUse">
            <path
              d="
                M 125 310
                A 175 175 0 0 0 475 310
                L 540 20
                L 60 20
                Z
              "
            />
          </clipPath>

          {/* Subtle drop shadow for satellite ring */}
          <filter id="satelliteShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.12" />
          </filter>
        </defs>

        {/* 1. LAYER BACKGROUND: 4x3 Dot Matrix Grid (Upper Right) */}
        <g className="fill-[#234B36] dark:fill-[#3E8A56] transition-colors duration-300">
          {/* Row 1 */}
          <circle cx="458" cy="158" r="3.7" />
          <circle cx="480" cy="158" r="3.7" />
          <circle cx="502" cy="158" r="3.7" />
          <circle cx="524" cy="158" r="3.7" />

          {/* Row 2 */}
          <circle cx="458" cy="180" r="3.7" />
          <circle cx="480" cy="180" r="3.7" />
          <circle cx="502" cy="180" r="3.7" />
          <circle cx="524" cy="180" r="3.7" />

          {/* Row 3 */}
          <circle cx="458" cy="202" r="3.7" />
          <circle cx="480" cy="202" r="3.7" />
          <circle cx="502" cy="202" r="3.7" />
          <circle cx="524" cy="202" r="3.7" />
        </g>

        {/* 2. LAYER UTAMA: Vibrant Sunny Yellow Circle (Center cx=300, cy=310, r=175) */}
        <circle
          cx="300"
          cy="310"
          r="175"
          className="fill-[#F5A623] dark:fill-[#F5A623] transition-colors duration-300"
        />

        {/* 3. LAYER ACCENT: Thick Warm Beige / Off-White Crescent Strip (Bottom-Right) */}
        <path
          d="M 488 348 A 191 191 0 0 1 370 488"
          stroke="#F2EBE3"
          strokeWidth="28"
          strokeLinecap="round"
          className="stroke-[#F2EBE3] dark:stroke-[#34302C] transition-colors duration-300"
        />

        {/* 4. LAYER SUBJEK: Foto Resmi Permanen Taufik Hidayat Malii (Cutout Pop-Out Effect) */}
        <g clipPath="url(#popOutCircleClip)">
          <image
            href={activePhotoSrc}
            x="115"
            y="42"
            width="372"
            height="446"
            preserveAspectRatio="xMidYMax meet"
            className="transition-transform duration-300 hover:scale-[1.015] origin-bottom pointer-events-none select-none"
            aria-label={altText}
          />
        </g>

        {/* 5. LAYER ORBIT: Dark Green Orbit Arc on Left with Terminus Node */}
        <path
          d="M 160 155 A 206 206 0 0 0 128 426"
          stroke="#234B36"
          strokeWidth="3.6"
          strokeLinecap="round"
          fill="none"
          className="stroke-[#234B36] dark:stroke-[#3E8A56] transition-colors duration-300"
        />
        {/* Terminal dot at the end of orbit arc */}
        <circle
          cx="128"
          cy="426"
          r="5.5"
          className="fill-[#234B36] dark:fill-[#3E8A56] transition-colors duration-300"
        />

        {/* 6. LAYER SATELLITE: Concentric Ring Marker (Bottom Left) */}
        <g filter="url(#satelliteShadow)">
          {/* Outer Ring with white fill */}
          <circle
            cx="138"
            cy="488"
            r="17.5"
            stroke="#234B36"
            strokeWidth="3.4"
            className="fill-white dark:fill-[#1E1E1E] stroke-[#234B36] dark:stroke-[#3E8A56] transition-colors duration-300"
          />
          {/* Inner Solid Yellow Dot */}
          <circle
            cx="138"
            cy="488"
            r="7.5"
            className="fill-[#F5A623] dark:fill-[#F5A623] transition-colors duration-300"
          />
        </g>
      </motion.svg>
    </div>
  );
};
