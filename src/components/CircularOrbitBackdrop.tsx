import React from 'react';
import { motion } from 'motion/react';

interface CircularOrbitBackdropProps {
  photoSrc?: string;
  altText?: string;
  className?: string;
}

export const CircularOrbitBackdrop: React.FC<CircularOrbitBackdropProps> = ({
  photoSrc = '/assets/taufik_official_portrait.webp',
  altText = 'Taufik Hidayat Malii - Operasional & Pelayanan Retail',
  className = '',
}) => {
  const activePhotoSrc = photoSrc || '/assets/taufik_official_portrait.webp';

  return (
    <div className={`relative w-full h-full flex items-center justify-center md:justify-end select-none overflow-visible ${className}`}>

      {/* Main Clean Circular Composition with Mockup Pill Badges */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        viewBox="0 0 680 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[380px] sm:max-h-[500px] md:max-h-[620px] lg:max-h-[760px] object-contain origin-center md:origin-right transition-all duration-300 overflow-visible scale-[1.03] sm:scale-[1.06] lg:scale-[1.08] xl:scale-[1.10]"
        aria-label="Mockup Background Bersih dengan Badge Mockup Website Creator dan Digital Maker"
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

          {/* Soft natural drop shadow for Mockup Pill Cards */}
          <filter id="pillMockupShadow" x="-15%" y="-25%" width="130%" height="160%">
            <feDropShadow dx="0" dy="5" stdDeviation="7" floodColor="#000000" floodOpacity="0.09" />
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000000" floodOpacity="0.04" />
          </filter>
        </defs>

        {/* 1. LAYER UTAMA: Vibrant Sunny Yellow Circle (Center cx=300, cy=310, r=175) */}
        <circle
          cx="300"
          cy="310"
          r="175"
          className="fill-[#F5A623] dark:fill-[#F5A623] transition-colors duration-300"
        />

        {/* 2. LAYER SUBJEK: Foto Resmi Permanen Taufik Hidayat Malii (Cutout Pop-Out Effect) */}
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

        {/* ========================================================================= */}
        {/* 3. MOCKUP BADGE 1 (ATAS): "Website Creator" (Desktop Screen Icon)        */}
        {/* ========================================================================= */}
        <motion.g
          initial={{ opacity: 0, x: 26 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          filter="url(#pillMockupShadow)"
          className="cursor-default select-none"
        >
          {/* Pill Capsule Body */}
          <rect
            x="375"
            y="222"
            width="280"
            height="68"
            rx="34"
            className="fill-white dark:fill-[#1E1E1E] stroke-[#EBE5DC] dark:stroke-[#333333] transition-colors duration-300"
            strokeWidth="1.6"
          />

          {/* Text: Website Creator (Nicely balanced inside the capsule body) */}
          <text
            x="456"
            y="256"
            dominantBaseline="central"
            className="fill-[#171717] dark:fill-[#F5F5F5] font-display font-bold transition-colors duration-300"
            fontSize="14.5"
            letterSpacing="-0.01em"
          >
            Website Creator
          </text>

          {/* Left Circle Badge (Dark Green with Thick White Outer Stroke) */}
          <circle
            cx="409"
            cy="256"
            r="34"
            className="fill-[#1F4734] dark:fill-[#1F4734] stroke-white dark:stroke-[#121212] transition-colors duration-300"
            strokeWidth="5"
          />

          {/* Clean Desktop Monitor Screen Icon */}
          <g stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <rect x="393" y="243" width="32" height="21" rx="3" />
            <line x1="409" y1="264" x2="409" y2="269" />
            <line x1="402" y1="269" x2="416" y2="269" />
          </g>
        </motion.g>

        {/* ========================================================================= */}
        {/* 4. MOCKUP BADGE 2 (BAWAH): "Digital Maker" (Vector Pen Nib Tool Icon)    */}
        {/* ========================================================================= */}
        <motion.g
          initial={{ opacity: 0, x: 26 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
          filter="url(#pillMockupShadow)"
          className="cursor-default select-none"
        >
          {/* Pill Capsule Body */}
          <rect
            x="375"
            y="304"
            width="280"
            height="68"
            rx="34"
            className="fill-white dark:fill-[#1E1E1E] stroke-[#EBE5DC] dark:stroke-[#333333] transition-colors duration-300"
            strokeWidth="1.6"
          />

          {/* Text: Digital Maker (Nicely balanced inside the capsule body) */}
          <text
            x="456"
            y="338"
            dominantBaseline="central"
            className="fill-[#171717] dark:fill-[#F5F5F5] font-display font-bold transition-colors duration-300"
            fontSize="14.5"
            letterSpacing="-0.01em"
          >
            Digital Maker
          </text>

          {/* Left Circle Badge (Warm Golden Yellow with Thick White Outer Stroke) */}
          <circle
            cx="409"
            cy="338"
            r="34"
            className="fill-[#F9B51B] dark:fill-[#F9B51B] stroke-white dark:stroke-[#121212] transition-colors duration-300"
            strokeWidth="5"
          />

          {/* Vector Pen Nib Tool Icon with Bezier Curve & Anchor Points */}
          <g>
            {/* Bezier Guide Line */}
            <path
              d="M 394 330 C 400 323, 405 323, 409 328 C 413 333, 419 333, 424 325"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Control handle anchor squares */}
            <rect x="391.5" y="328" width="4" height="4" fill="#FFFFFF" rx="0.8" />
            <circle cx="409" cy="328" r="2.4" fill="#FFFFFF" />
            <rect x="422.5" y="323" width="4" height="4" fill="#FFFFFF" rx="0.8" />
            {/* Pen Nib Body */}
            <path
              d="M 409 331 L 417 346 L 413 349 L 409 343.5 L 405 349 L 401 346 Z"
              fill="#FFFFFF"
            />
            <circle cx="409" cy="339" r="1.6" fill="#F9B51B" />
            <line x1="409" y1="331" x2="409" y2="339" stroke="#F9B51B" strokeWidth="1.5" />
            <rect x="405" y="350" width="8" height="2.5" rx="1" fill="#FFFFFF" />
          </g>
        </motion.g>

      </motion.svg>
    </div>
  );
};
