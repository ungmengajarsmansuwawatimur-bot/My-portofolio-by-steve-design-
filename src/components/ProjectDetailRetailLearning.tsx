import React, { useState, useEffect } from 'react';
import { learningMaterialsData } from '../data/portfolioData';
import { LearningItem } from '../types';
import { EditableImage } from './EditableImage';
import { LightboxModal } from './LightboxModal';

interface ProjectDetailRetailLearningProps {
  onBack: () => void;
}

export const ProjectDetailRetailLearning: React.FC<ProjectDetailRetailLearningProps> = ({ onBack }) => {
  const [selectedItem, setSelectedItem] = useState<LearningItem | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const retailCompetencies = [
    { label: 'Customer Orientation', value: 'Pelayanan ramah, aktif mendengar keluhan pelanggan, dan solusi cepat.' },
    { label: 'Store Operations', value: 'Penataan display rapi, pemahaman alur barang FIFO, dan kebersihan rak toko.' },
    { label: 'Stock Accuracy', value: 'Pencatatan mutasi stok fisik, pemantauan tanggal kadaluarsa, dan pencegahan selisih.' },
    { label: 'Team Communication', value: 'Koordinasi efektif antar shift kerja dan kepatuhan pada SOP toko modern.' },
  ];

  // Status penutupan sementara: dibuka kembali untuk Pembelajaran Retail sesuai instruksi ("kecuali halaman pembelajaran retail")
  const isUnderDevelopment = false;

  if (isUnderDevelopment) {
    return (
      <article className="min-h-screen py-10 md:py-16 bg-[#FFFFFF] dark:bg-[#121212] transition-colors duration-200 flex flex-col justify-between">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
          {/* Under Development Screen Content matching user's image */}
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

                  {/* Animated Rotating Gear */}
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
                      <path
                        d="M 34.0 0.0 L 33.3 6.6 L 23.1 9.6 L 20.8 13.9 L 24.0 24.0 L 18.9 28.3 L 9.6 23.1 L 4.9 24.5 L 0.0 34.0 L -6.6 33.3 L -9.6 23.1 L -13.9 20.8 L -24.0 24.0 L -28.3 18.9 L -23.1 9.6 L -24.5 4.9 L -34.0 0.0 L -33.3 -6.6 L -23.1 -9.6 L -20.8 -13.9 L -24.0 -24.0 L -18.9 -28.3 L -9.6 -23.1 L -4.9 -24.5 L -0.0 -34.0 L 6.6 -33.3 L 9.6 -23.1 L 13.9 -20.8 L 24.0 -24.0 L 28.3 -18.9 L 23.1 -9.6 L 24.5 -4.9 Z M 9.5 0 A 9.5 9.5 0 1 0 -9.5 0 A 9.5 9.5 0 1 0 9.5 0 Z"
                        fill="#F9B51B"
                        stroke="#171717"
                        strokeWidth="5"
                        strokeLinejoin="round"
                        fillRule="evenodd"
                      />
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
  }

  // =========================================================================
  // KONTEN ASLI (Tersimpan utuh & tidak dihapus):
  // Rincian lengkap 6 modul retail, highlight kompetensi, dan modal lightbox
  // =========================================================================
  return (
    <article className="min-h-screen py-10 md:py-16 bg-[#FFFFFF] dark:bg-[#121212] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Top Back Navigation Button */}
        <div>
          <button
            type="button"
            onClick={onBack}
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#666666] dark:text-[#A3A3A3] hover:text-[#E11D48] dark:hover:text-[#FB7185] transition-colors cursor-pointer"
          >
            <span className="transition-transform group-hover:-translate-x-1">&larr;</span>
            <span>Kembali ke Portofolio</span>
          </button>
        </div>

        {/* Main Header Information */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl sm:text-5xl font-semibold text-[#E11D48] dark:text-[#FB7185] tracking-tight">04</span>
            <span className="font-info text-xs font-normal tracking-wider text-[#666666] dark:text-[#A3A3A3] uppercase">
              6 Modul Kesiapan Retail &bull; Pelatihan Mandiri
            </span>
          </div>
          <div className="font-info text-xs font-semibold tracking-widest text-[#E11D48] dark:text-[#FB7185] uppercase">
            LEARNING &amp; DEVELOPMENT
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#171717] dark:text-white tracking-tight leading-[1.08]">
            Pembelajaran Retail &amp; Customer Service
          </h1>
          <p className="font-body text-base sm:text-lg text-[#666666] dark:text-[#A3A3A3] leading-[1.65] pt-1 font-normal text-justify">
            Modul dan keterampilan operasional ritel yang saya pelajari secara mandiri untuk kesiapan kerja di lingkungan retail modern. Pembelajaran ini mencakup standar pelayanan konsumen prima, penataan visual merchandising (planogram), pengelolaan stok akurat, hingga etika komunikasi di tempat kerja.
          </p>
        </div>

        {/* Highlight Kompetensi Kunci */}
        <div className="space-y-4 pt-6 border-t border-[#171717]/15 dark:border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#E11D48] dark:bg-[#FB7185]" />
            <h3 className="font-display text-xs sm:text-sm font-semibold text-[#171717] dark:text-white uppercase tracking-wider">
              Kompetensi Kesiapan Kerja Retail
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {retailCompetencies.map((comp, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl border-2 border-[#171717] dark:border-[#333333] bg-[#F5F5F5] dark:bg-[#1E1E1E] shadow-[3px_3px_0px_#171717] dark:shadow-none space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#E11D48] dark:text-[#FB7185] text-sm">✓</span>
                  <span className="font-display text-xs sm:text-sm font-semibold text-[#171717] dark:text-white">
                    {comp.label}
                  </span>
                </div>
                <p className="font-body text-xs text-[#666666] dark:text-[#A3A3A3] leading-relaxed font-normal">
                  {comp.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Daftar Materi Pembelajaran */}
        <div className="space-y-6 pt-6 border-t border-[#171717]/15 dark:border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48] dark:bg-[#FB7185]" />
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#171717] dark:text-white tracking-tight">
              Daftar Modul Pembelajaran
            </h3>
          </div>

          {/* 6 Material Modules in Clean Minimalist Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {learningMaterialsData.map((item) => (
              <article
                key={item.id}
                className="flex flex-col justify-between space-y-4 group cursor-pointer p-4 rounded-2xl border-2 border-[#171717]/10 dark:border-white/10 hover:border-[#E11D48] dark:hover:border-[#FB7185] bg-white dark:bg-[#1A1A1E] transition-all duration-200 shadow-sm hover:shadow-md"
                onClick={() => setSelectedItem(item)}
              >
                <div className="space-y-3.5">
                  {/* Thumbnail Image */}
                  <div className="rounded-xl overflow-hidden shadow-xs transition-transform duration-200 group-hover:scale-[1.015]">
                    <EditableImage
                      storageKey={`learning_material_v8_${item.id}`}
                      defaultSrc={item.image}
                      alt={item.title}
                      aspectRatioClass="aspect-16/9"
                      containerClassName="w-full overflow-hidden"
                      imgClassName="w-full h-full object-cover"
                      compact={true}
                      buttonPosition="top-right"
                    />
                  </div>

                  {/* Kicker & Platform */}
                  <div className="flex items-center justify-between text-[11px] pt-1">
                    <span className="font-info font-semibold tracking-wider text-[#E11D48] dark:text-[#FB7185] uppercase">
                      {item.code} &bull; {item.category}
                    </span>
                    <span className="font-info text-[#888888] dark:text-[#A3A3A3] font-normal">
                      {item.platform}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-display text-base sm:text-lg font-semibold text-[#171717] dark:text-white leading-snug group-hover:text-[#E11D48] dark:group-hover:text-[#FB7185] transition-colors">
                    {item.title}
                  </h4>

                  {/* Concise Overview */}
                  <p className="font-body text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] leading-[1.6] line-clamp-2 font-normal">
                    {item.overview}
                  </p>
                </div>

                {/* Minimalist Action CTA */}
                <div className="pt-2 flex items-center justify-between gap-2 border-t border-[#171717]/10 dark:border-white/10">
                  <span className="font-display inline-flex items-center gap-1.5 text-xs font-semibold text-[#E11D48] dark:text-[#FB7185] group-hover:translate-x-1 transition-transform">
                    <span>Lihat Rincian Modul</span>
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                  {item.sourceUrl && (
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="font-display inline-flex items-center gap-1 text-xs font-semibold text-[#666666] dark:text-[#A3A3A3] hover:text-[#E11D48] dark:hover:text-[#FB7185] transition-colors"
                      title="Pelajari materi di tautan sumber asli"
                    >
                      <span>Sumber Asli</span>
                      <span aria-hidden="true">&#x2197;</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="pt-8 border-t border-[#171717]/15 dark:border-white/10 flex justify-center">
          <button
            type="button"
            onClick={onBack}
            className="font-display group inline-flex items-center gap-3 px-8 py-3 rounded-full text-sm font-semibold bg-[#E11D48] text-white hover:bg-[#BE123C] border-2 border-[#171717] transition-all shadow-md active:scale-95 cursor-pointer uppercase tracking-wider"
          >
            <span>&larr; KEMBALI KE PORTOFOLIO</span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal for module detail */}
      {selectedItem && (
        <LightboxModal
          isOpen={Boolean(selectedItem)}
          onClose={() => setSelectedItem(null)}
          title={selectedItem.title}
          subtitle={`Sumber: ${selectedItem.platform}`}
          badge={selectedItem.category}
        >
          <div className="space-y-4 text-xs sm:text-sm text-[#171717] dark:text-white leading-relaxed">
            <div>
              <span className="font-semibold text-[#171717] dark:text-white block mb-1">
                Tentang Materi:
              </span>
              <p className="text-[#666666] dark:text-[#A3A3A3] font-normal">{selectedItem.overview}</p>
            </div>

            <div>
              <span className="font-semibold text-[#171717] dark:text-white block mb-1">
                Hal yang Dipelajari:
              </span>
              <ul className="space-y-1.5">
                {selectedItem.whatILearnedBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#E11D48] dark:text-[#FB7185] font-semibold">✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <a
                href={selectedItem.sourceUrl || '#'}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full text-xs font-semibold bg-[#E11D48] text-white hover:bg-[#BE123C] border-2 border-[#171717] transition-all duration-150 shadow-[3px_3px_0px_#171717] active:scale-95"
              >
                <span>Pelajari Materi (Sumber Asli)</span>
                <span className="w-6 h-6 rounded-full bg-white text-[#E11D48] flex items-center justify-center font-bold text-xs shrink-0">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </LightboxModal>
      )}
    </article>
  );
};
