import React from 'react';

interface OfficialAppIconProps {
  name: string;
  className?: string;
}

export const OfficialAppIcon: React.FC<OfficialAppIconProps> = ({ name, className = 'w-9 h-9' }) => {
  switch (name.toLowerCase()) {
    // 1. OFFICIAL MICROSOFT WORD (Matching uploaded 2013-2016 icon)
    case 'word':
    case 'microsoft word':
      return (
        <svg
          className={className}
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Right Page Document (Bright Blue) */}
          <rect
            x="290"
            y="106"
            width="194"
            height="300"
            rx="12"
            fill="#2A79D6"
          />

          {/* 5 Horizontal Document Text Stripes */}
          <rect x="290" y="156" width="158" height="22" rx="3" fill="#FFFFFF" />
          <rect x="290" y="200" width="158" height="22" rx="3" fill="#FFFFFF" />
          <rect x="290" y="244" width="158" height="22" rx="3" fill="#FFFFFF" />
          <rect x="290" y="288" width="158" height="22" rx="3" fill="#FFFFFF" />
          <rect x="290" y="332" width="158" height="22" rx="3" fill="#FFFFFF" />

          {/* Left Flap: 3D Perspective Folder Cover (Royal Word Blue) */}
          <path
            d="M26 68 L293 25 V487 L26 444 Z"
            fill="#185ABD"
          />

          {/* Authentic Bold White Letter "W" */}
          <path
            d="M77 162 H107 L129 285 L148 162 H172 L191 285 L213 162 H243 L216 350 H184 L160 220 L136 350 H104 Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    // 2. OFFICIAL MICROSOFT EXCEL (Matching uploaded 2013-2016 icon)
    case 'excel':
    case 'microsoft excel':
      return (
        <svg
          className={className}
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Right Sheet Background (Office Excel Green) */}
          <rect x="290" y="73" width="194" height="366" fill="#217346" />

          {/* Outer White Sheet Border */}
          <rect x="290" y="73" width="194" height="26" fill="#FFFFFF" />
          <rect x="458" y="73" width="26" height="366" fill="#FFFFFF" />
          <rect x="290" y="413" width="194" height="26" fill="#FFFFFF" />

          {/* Vertical Grid Column Divider */}
          <rect x="354" y="99" width="18" height="314" fill="#FFFFFF" />

          {/* 5 Horizontal Grid Lines (Creating 6 spreadsheet rows) */}
          <rect x="290" y="151" width="168" height="15" fill="#FFFFFF" />
          <rect x="290" y="204" width="168" height="15" fill="#FFFFFF" />
          <rect x="290" y="257" width="168" height="15" fill="#FFFFFF" />
          <rect x="290" y="310" width="168" height="15" fill="#FFFFFF" />
          <rect x="290" y="363" width="168" height="15" fill="#FFFFFF" />

          {/* Left Flap: 3D Perspective Folder Cover (Rich Excel Green) */}
          <path
            d="M26 68 L293 25 V487 L26 444 Z"
            fill="#217346"
          />

          {/* Authentic Bold White Letter "X" */}
          <path
            d="M94 164 H128 L160 214 L192 164 H226 L180 256 L226 348 H192 L160 298 L128 348 H94 L140 256 Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    // 3. OFFICIAL GOOGLE SHEETS
    case 'sheets':
    case 'google sheets':
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Document Sheet */}
          <path
            d="M12 6C10.8954 6 10 6.89543 10 8V40C10 41.1046 10.8954 42 12 42H36C37.1046 42 38 41.1046 38 40V16L28 6H12Z"
            fill="#0F9D58"
          />
          {/* Dog-eared Fold Top-Right Corner */}
          <path d="M28 6V16H38L28 6Z" fill="#87CEAC" />
          <path d="M28 16H38L28 6V16Z" fill="#57C28E" />
          {/* Table Grid (2 cols x 3 rows) */}
          <rect x="17" y="21" width="16" height="14" rx="1.5" fill="#FFFFFF" />
          {/* Grid Dividing Lines in Green */}
          <line x1="24.5" y1="21" x2="24.5" y2="35" stroke="#0F9D58" strokeWidth="1.5" />
          <line x1="17" y1="25.5" x2="33" y2="25.5" stroke="#0F9D58" strokeWidth="1.5" />
          <line x1="17" y1="30" x2="33" y2="30" stroke="#0F9D58" strokeWidth="1.5" />
        </svg>
      );

    // 4. OFFICIAL GOOGLE DRIVE (Modern Official Brand Vector)
    case 'drive':
    case 'google drive':
      return (
        <svg
          className={className}
          viewBox="0 0 87.3 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top Apex Intersection */}
          <path
            d="M43.65 25L57.4 1.2C56.05 0.4 54.5 0 52.95 0H34.35C32.8 0 31.25 0.4 29.9 1.2L43.65 25Z"
            fill="#00832D"
          />
          {/* Left Green Slanted Side */}
          <path
            d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C0.4 49.9 0 51.45 0 53H27.5L43.65 25Z"
            fill="#00AC47"
          />
          {/* Right Yellow Slanted Side */}
          <path
            d="M73.4 26.5L60.7 4.5C59.9 3.1 58.75 2 57.4 1.2L43.65 25L59.8 53H87.25C87.25 51.45 86.85 49.9 86.05 48.5L73.4 26.5Z"
            fill="#FFBA00"
          />
          {/* Bottom Right Red Corner Accent */}
          <path
            d="M73.55 76.8C74.9 76 76.05 74.9 76.85 73.5L86.1 57.5C86.9 56.1 87.3 54.55 87.3 53H59.8L73.55 76.8Z"
            fill="#EA4335"
          />
          {/* Bottom Left Dark Blue Junction */}
          <path
            d="M6.6 66.85L10.45 73.5C11.25 74.9 12.4 76 13.75 76.8L27.5 53H0C0 54.55 0.4 56.1 1.2 57.5L6.6 66.85Z"
            fill="#0066DA"
          />
          {/* Bottom Blue Horizontal Bar */}
          <path
            d="M59.8 53H27.5L13.75 76.8C15.1 77.6 16.65 78 18.2 78H69.1C70.65 78 72.2 77.6 73.55 76.8L59.8 53Z"
            fill="#2684FC"
          />
        </svg>
      );

    // 5. OFFICIAL WHATSAPP
    case 'whatsapp':
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waGradientOfficial" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3EE079" />
              <stop offset="100%" stopColor="#1EBD5D" />
            </linearGradient>
          </defs>
          {/* iOS / Modern App Squircle Background */}
          <rect x="2" y="2" width="44" height="44" rx="11" fill="url(#waGradientOfficial)" />

          {/* White Outlined Speech Bubble Ring with Tail */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 11C16.8 11 11 16.8 11 24c0 2.5.7 4.9 2 7L11 37l6.3-1.6c2 1.1 4.2 1.6 6.7 1.6 7.2 0 13-5.8 13-13S31.2 11 24 11zm0 2.8c5.6 0 10.2 4.6 10.2 10.2S29.6 34.2 24 34.2c-2 0-3.9-.6-5.5-1.7l-.4-.2-3.8 1 1-3.7-.3-.4c-1.3-1.6-2-3.4-2-5.2 0-5.6 4.6-10.2 10.2-10.2z"
            fill="#FFFFFF"
          />

          {/* White Telephone Receiver inside Speech Bubble */}
          <path
            d="M28.8 27.5c-.3.8-1.4 1.5-2.2 1.7-.6.1-1.3.2-3.8-.8-3.1-1.3-5.2-4.5-5.3-4.7-.2-.2-1.3-1.7-1.3-3.2 0-1.5.8-2.2 1.1-2.5.3-.3.7-.4 1-.4.2 0 .4 0 .5 0 .3 0 .5.1.7.5.3.6.9 2.2 1 2.3.1.2.1.3 0 .5-.1.2-.2.3-.3.5-.2.2-.3.3-.4.5-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.7-.1.2-.2.9-1 1.1-1.4.2-.3.4-.3.7-.2.2.1 1.7.8 2 1 .3.2.5.2.6.4.1.4.1 1.2-.2 1.9z"
            fill="#FFFFFF"
          />
        </svg>
      );

    // 6. OFFICIAL GOOGLE CHROME
    case 'chrome':
    case 'google chrome':
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="chromeOuterClip">
              <circle cx="24" cy="24" r="24" />
            </clipPath>
          </defs>
          <g clipPath="url(#chromeOuterClip)">
            {/* Top Red Section */}
            <path
              d="M24 12H44.78A24 24 0 0 0 3.22 12L13.61 30A12 12 0 0 1 24 12Z"
              fill="#EA4335"
              stroke="#FFFFFF"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            {/* Right Yellow Section */}
            <path
              d="M34.39 30L24 48A24 24 0 0 0 44.78 12H24A12 12 0 0 1 34.39 30Z"
              fill="#FBBC05"
              stroke="#FFFFFF"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            {/* Left Green Section */}
            <path
              d="M13.61 30L3.22 12A24 24 0 0 0 24 48L34.39 30A12 12 0 0 1 13.61 30Z"
              fill="#34A853"
              stroke="#FFFFFF"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            {/* White Circular Separator */}
            <circle cx="24" cy="24" r="12" fill="#FFFFFF" />
            {/* Blue Center Core */}
            <circle cx="24" cy="24" r="9.5" fill="#1A73E8" />
          </g>
        </svg>
      );

    // 7. OFFICIAL NOTION
    case 'notion':
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Notion Outer Rounded Box */}
          <rect x="6" y="6" width="36" height="36" rx="8" fill="#FFFFFF" stroke="#111111" strokeWidth="2.5" />
          {/* Isometric Shadow / Border line */}
          <path
            d="M13 13.5C13.5 12.8 14.5 12 16 12H34C35.2 12 36 12.8 36 14V33.5C36 34.5 35 35.5 34 35.8L15 36C13.8 36 13 35.2 13 34V13.5Z"
            fill="#FFFFFF"
          />
          {/* Notion's Signature Isometric 'N' */}
          <path
            d="M17.5 15.5H21.2L28.2 27.2V15.5H31.5V32.5H27.8L20.8 20.8V32.5H17.5V15.5Z"
            fill="#111111"
          />
          <path
            d="M16 14.5L14.5 16V33.5L16 35H33.5L35 33.5V16L33.5 14.5H16ZM17.5 16.5H33V33H17.5V16.5Z"
            fill="#111111"
            fillOpacity="0.15"
          />
        </svg>
      );

    // 8. OFFICIAL GOOGLE STUDIO (Replacing previous web platform SVG permanently)
    case 'googlestudio':
    case 'google studio':
    case 'google-studio':
    case 'google ai studio':
    case 'google-ai-studio':
    case 'aistudio':
    case 'ai studio':
    case 'web':
    case 'website platform':
      return (
        <img
          src="/assets/icons/google_studio.png"
          alt="Google AI Studio"
          className={`${className} object-contain select-none`}
        />
      );

    // 9. OFFICIAL CANVA (Latest Brand Mark from provided image)
    case 'canva':
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="canvaLatestGrad" x1="0.15" y1="0.1" x2="0.85" y2="0.9">
              <stop offset="0%" stopColor="#00C4CC" />
              <stop offset="45%" stopColor="#0075FF" />
              <stop offset="100%" stopColor="#7D2AE8" />
            </linearGradient>
          </defs>
          {/* Authentic Canva Circular Badge from user provided image */}
          <circle cx="24" cy="24" r="22" fill="url(#canvaLatestGrad)" />
          {/* Authentic Canva Script 'C' Mark */}
          <path
            d="M 27.2 20.2 C 27.8 20.6 28.6 19.8 28.8 18.8 C 29.8 15.2 29.6 12.8 27.6 11.2 C 25.6 9.6 22.4 9.2 19.6 11.4 C 15.6 14.4 14.4 19.8 15.0 25.4 C 15.8 32.2 20.0 38.4 25.2 38.4 C 28.6 38.4 31.0 35.2 32.2 29.6 C 32.3 29.1 31.8 28.8 31.4 29.2 C 30.0 33.2 27.8 35.6 25.0 35.6 C 21.0 35.6 18.2 30.8 18.0 25.2 C 17.8 19.6 20.0 13.8 23.4 12.2 C 25.2 11.4 26.8 12.2 27.2 13.8 C 27.8 15.8 26.8 18.6 27.2 20.2 Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    // 10. OFFICIAL CAPCUT
    case 'capcut':
      return (
        <svg className={className} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(0.9, 1)" fill="#111111">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.189 6.442V2.671l-4.535 2.383V4.91c.002-1.505-1.078-2.411-2.638-2.411H2.64C.993 2.5 0 3.407 0 4.91V8.72L6.354 12 0 15.316v3.8C0 20.595 1 21.5 2.64 21.5h14.373c1.56 0 2.639-.907 2.639-2.382v-.197l4.536 2.409v-3.828L13.64 12 24.19 6.443zM9.982 13.873l7.797 4.083H2.157l7.825-4.083zm7.741-7.828l-7.742 4.057-7.825-4.057h15.567z"
            />
          </g>
        </svg>
      );

    // 11. OFFICIAL HIGGSFIELD AI (Authentic Rebrand Logo from user image)
    case 'higgsfield':
      return (
        <svg
          className={className}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Authentic Electric Lime Rounded Squircle */}
          <rect width="100" height="100" rx="26" fill="#CCFF00" />
          {/* Authentic Black Flowing Ribbon Ribbon Knot Mark */}
          <path
            d="M 15.5 30.5 C 23 30.5, 29 17.5, 38.5 17.5 C 48 17.5, 47 31, 38 41 C 29 51, 20.5 53, 20.5 61 C 20.5 70, 29 72, 38 64 C 47 56, 56 37, 65.5 33 C 74.5 29, 78.5 38, 78.5 48 C 78.5 59, 71 73, 62 81.5 C 55 88, 51 81, 53 74 C 55 64, 63 56, 73 53.5 L 84.5 53.5"
            fill="none"
            stroke="#000000"
            strokeWidth="10.8"
            strokeLinecap="butt"
            strokeLinejoin="round"
          />
        </svg>
      );

    // 12. OFFICIAL BASE44 TOOLS / LUMA - Sunset Striped Disk (Restored previous authentic logo)
    case 'base44':
    case 'base44 tools':
    case 'luma':
    case 'luma ai':
    case 'luma dream machine':
      return (
        <svg
          className={className}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <mask id="lumaSunsetStripesMask">
              <rect width="100" height="100" fill="#FFFFFF" />
              {/* 3 Authentic Horizontal Slit Cutouts */}
              <rect x="0" y="53.6" width="100" height="4.4" fill="#000000" />
              <rect x="0" y="68.6" width="100" height="4.4" fill="#000000" />
              <rect x="0" y="83.6" width="100" height="4.4" fill="#000000" />
            </mask>
          </defs>
          {/* Authentic Vibrant Sunset Orange Circular Badge */}
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="#FF5B14"
            mask="url(#lumaSunsetStripesMask)"
          />
        </svg>
      );

    // 11. OFFICIAL ANTIGRAVITY
    case 'antigravity':
      return (
        <img
          src="/assets/icons/antigravity_clean.png"
          alt="Antigravity"
          className={`${className} object-contain select-none`}
        />
      );

    // 12. OFFICIAL REPLIT
    case 'replit':
      return (
        <img
          src="/assets/icons/replit_logo.png"
          alt="Replit"
          className={`${className} object-contain select-none`}
        />
      );

    // 13. OFFICIAL GOOGLE STITCH
    case 'stitch':
    case 'google stitch':
    case 'google-stitch':
      return (
        <img
          src="/assets/icons/google_stitch_logo.jpeg"
          alt="Google Stitch"
          className={`${className} object-contain rounded-md select-none`}
        />
      );

    // 14. OFFICIAL FIREBASE
    case 'firebase':
      return (
        <img
          src="/assets/icons/firebase_logo.png"
          alt="Firebase"
          className={`${className} object-contain select-none`}
        />
      );

    // 15. OFFICIAL SUPABASE
    case 'supabase':
      return (
        <img
          src="/assets/icons/supabase_logo.jpeg"
          alt="Supabase"
          className={`${className} object-contain rounded-md select-none`}
        />
      );

    // 16. OFFICIAL EXABYTES
    case 'exabytes':
      return (
        <img
          src="/assets/icons/exabytes_logo.png"
          alt="Exabytes"
          className={`${className} object-contain select-none`}
        />
      );

    // 17. OFFICIAL LONEX
    case 'lonex':
      return (
        <img
          src="/assets/icons/lonex_logo.png"
          alt="Lonex"
          className={`${className} object-contain select-none`}
        />
      );

    // 11. OFFICIAL LOVABLE (AI App Builder)
    case 'lovable':
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lovableGradient" x1="0.85" y1="0.1" x2="0.15" y2="0.95">
              <stop offset="0%" stopColor="#FF7A00" />
              <stop offset="28%" stopColor="#FF4A2A" />
              <stop offset="55%" stopColor="#ED1B78" />
              <stop offset="78%" stopColor="#9C27F0" />
              <stop offset="100%" stopColor="#4361EE" />
            </linearGradient>
          </defs>
          {/* Authentic Lovable Black Squircle Container */}
          <rect x="4" y="4" width="40" height="40" rx="10" fill="#000000" />
          {/* Authentic Lovable Heart Logo */}
          <path
            d="M 11.5 37.5 L 11.5 19.5 A 8 8 0 0 1 27.5 19.5 L 27.5 21.5 A 8 8 0 0 1 27.5 37.5 L 11.5 37.5 Z"
            fill="url(#lovableGradient)"
          />
        </svg>
      );

    // 12. OFFICIAL BASE44 (AI / No-Code App Platform)
    case 'base44':
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Authentic Base44 Light Squircle Background */}
          <rect x="4" y="4" width="40" height="40" rx="10" fill="#ECE9E2" />
          {/* Upper Cut Circle Segment with Chamfers */}
          <path
            d="M 10.8 22.5 C 11.5 15.5 17.1 9.8 24 9.8 C 30.9 9.8 36.5 15.5 37.2 22.5 L 35.2 25.5 L 12.8 25.5 Z"
            fill="#FF5E00"
          />
          {/* Lower Cut Circle Segment with Chamfers */}
          <path
            d="M 14.5 28.5 L 33.5 28.5 L 35.8 31 C 34.1 35.2 29.5 38.2 24 38.2 C 18.5 38.2 13.9 35.2 12.2 31 Z"
            fill="#FF5E00"
          />
        </svg>
      );

    // 13. OFFICIAL 3D FOLDED MAP WITH RED LOCATION PIN (AUTHENTIC GOOGLE MAPS STYLE)
    case 'maps':
    case 'google maps':
    case 'location':
    case 'peta':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Map Base Outline / Border (Pale Blue) with center vertical fold */}
          {/* Left half outer border */}
          <path
            d="M256 272 L96 272 C88 272 81 277 77 285 L8 463 C4 473 11 484 22 484 L256 484 Z"
            fill="#D5E8FA"
          />
          {/* Right half outer border (slightly deeper tone) */}
          <path
            d="M256 272 L416 272 C424 272 431 277 435 285 L504 463 C508 473 501 484 490 484 L256 484 Z"
            fill="#BED9F7"
          />

          {/* Clip path for inner map contents */}
          <defs>
            <clipPath id="mapInnerLeftClip">
              <path d="M256 288 L114 288 C108 288 103 292 100 297 L42 466 C39 473 44 480 52 480 L256 480 Z" />
            </clipPath>
            <clipPath id="mapInnerRightClip">
              <path d="M256 288 L398 288 C404 288 409 292 412 297 L470 466 C473 473 468 480 460 480 L256 480 Z" />
            </clipPath>
          </defs>

          {/* Inner Left Map Surface */}
          <g clipPath="url(#mapInnerLeftClip)">
            {/* Green Terrain Background */}
            <rect x="0" y="272" width="256" height="220" fill="#2CB574" />
            {/* Blue Water Corner */}
            <polygon points="30,480 92,394 176,480" fill="#1396EB" />
            {/* Yellow Roads Left Side */}
            <polygon points="172,332 76,462 110,480 206,350" fill="#FFC425" />
            <polygon points="180,344 112,284 140,284 200,336" fill="#FFC425" />
            <polygon points="170,332 256,380 256,412 195,350" fill="#FFC425" />
          </g>

          {/* Inner Right Map Surface */}
          <g clipPath="url(#mapInnerRightClip)">
            {/* Green Terrain Background (Shaded) */}
            <rect x="256" y="272" width="256" height="220" fill="#21A062" />
            {/* Blue Water Corner on Right */}
            <polygon points="412,480 475,480 475,420 440,412" fill="#0C7BC7" />
            {/* Yellow Roads Right Side */}
            <polygon points="256,380 452,480 418,480 256,412" fill="#EEA20B" />
          </g>

          {/* Center Location Pin Standing on the Map */}
          {/* Left half of 3D Pin (Bright Red #EA3323) */}
          <path
            d="M256 2 C182 2 122 62 122 136 C122 232 236 360 256 390 L256 2 Z"
            fill="#EA3323"
          />
          {/* Right half of 3D Pin (Crimson Shadow Red #B80008) */}
          <path
            d="M256 2 C330 2 390 62 390 136 C390 232 276 360 256 390 L256 2 Z"
            fill="#B80008"
          />
          {/* Center Circular Hole (Pure White) */}
          <circle cx="256" cy="136" r="45" fill="#FFFFFF" />
        </svg>
      );

    // 14. OFFICIAL GOOGLE GMAIL WORKSPACE LOGO
    case 'gmail':
    case 'email':
    case 'google mail':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Central Red Chevron */}
          <path
            d="M5.455 4.636L12 9.545l6.545-4.909v6.545L12 16.091 5.455 11.182V4.636z"
            fill="#EA4335"
          />
          {/* Left Blue Pillar with bottom-left rounded corner */}
          <path
            d="M0 7.2v12.166c0 .904.732 1.634 1.636 1.634h3.819V11.73L0 7.2z"
            fill="#4285F4"
          />
          {/* Right Green Pillar with bottom-right rounded corner */}
          <path
            d="M24 7.2v12.166c0 .904-.732 1.634-1.636 1.634h-3.819V11.73L24 7.2z"
            fill="#34A853"
          />
          {/* Top-Left Dark Red Corner */}
          <path
            d="M5.455 4.636L3.927 3.49C2.31 2.28 0 3.434 0 5.457V7.2l5.455 4.09V4.636z"
            fill="#C5221F"
          />
          {/* Top-Right Yellow Corner */}
          <path
            d="M18.545 4.636l1.528-1.145C21.69 2.28 24 3.434 24 5.457V7.2l-5.455 4.09V4.636z"
            fill="#FBBC04"
          />
        </svg>
      );

    default:
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Sleek Modern Application Window */}
          <rect x="6" y="8" width="36" height="32" rx="7" fill="#1E293B" />
          {/* Title Bar */}
          <path
            d="M6 15C6 11.134 9.13401 8 13 8H35C38.866 8 42 11.134 42 15V16H6V15Z"
            fill="#0F172A"
          />
          {/* 3 Window Controls (Red, Yellow, Green) */}
          <circle cx="11.5" cy="12" r="1.8" fill="#EF4444" />
          <circle cx="16.5" cy="12" r="1.8" fill="#F59E0B" />
          <circle cx="21.5" cy="12" r="1.8" fill="#10B981" />
          {/* Address Bar */}
          <rect x="26" y="10.5" width="13" height="3" rx="1.5" fill="#334155" />
          {/* Window Body: Modern Dashboard layout */}
          <rect x="10" y="20" width="7" height="16" rx="2" fill="#3B82F6" fillOpacity="0.4" />
          <rect x="19" y="20" width="19" height="7" rx="2" fill="#3B82F6" />
          <rect x="19" y="29" width="9" height="7" rx="2" fill="#64748B" fillOpacity="0.5" />
          <rect x="29.5" y="29" width="8.5" height="7" rx="2" fill="#10B981" fillOpacity="0.5" />
        </svg>
      );
  }
};
