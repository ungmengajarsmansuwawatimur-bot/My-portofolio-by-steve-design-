import React from 'react';
import { portfolioImages } from '../assets/images';
import { EditableImage } from './EditableImage';

export interface RealWorkProps {
  onSelectProject?: (projectId: 'jasa-digital' | 'padds-smansat' | 'usaha-keluarga') => void;
}

export const RealWork: React.FC<RealWorkProps> = ({ onSelectProject }) => {
  const projectEntries = [
    {
      id: 'jasa-digital' as const,
      number: '01',
      period: 'Desember 2024 — Sekarang',
      category: 'PELAYANAN & PENGELOLAAN',
      title: 'Jasa Digital & Publikasi',
      teaser: 'Layanan koordinasi naskah publikasi artikel tugas mahasiswa via WhatsApp, transparansi tarif, dan penanganan revisi cepat.',
      badge: '5 Studi Alur Nyata',
      mockupSrc: '/assets/mockups/exoticcarpartsus.webp?v=clean2',
      ctaText: 'Buka Detail & Galeri Chat',
    },
    {
      id: 'padds-smansat' as const,
      number: '02',
      period: 'PADDS SMANSAT · 6 Modul Video Asli',
      category: 'PENGEMBANGAN SISTEM ARSIP',
      title: 'Pusat Arsip Digital Sekolah',
      teaser: 'Platform arsip digital SMAN 1 Suwawa Timur dengan pemusatan pencatatan surat, retensi, QR code, dan rekaman demo 6 modul video asli.',
      badge: '6 Video Demo Sistem',
      mockupSrc: '/assets/mockups/creategroupllc.webp?v=clean2',
      ctaText: 'Buka Detail & 6 Modul Video',
    },
    {
      id: 'usaha-keluarga' as const,
      number: '03',
      period: '2016 — Sekarang (±8 Tahun)',
      category: 'OPERASIONAL & PELAYANAN LANGSUNG',
      title: 'Pengelolaan Usaha Keluarga',
      teaser: 'Praktik nyata melayani pembeli toko, penataan rak metode FIFO, pengecekan stok fisik, hingga ketelitian transaksi kasir tunai.',
      badge: 'Praktik Operasional Nyata',
      mockupSrc: '/assets/mockups/finalwebdesign.webp?v=clean2',
      ctaText: 'Buka Detail Pengelolaan Usaha',
    },
  ];

  const handleCardClick = (id: 'jasa-digital' | 'padds-smansat' | 'usaha-keluarga') => {
    if (onSelectProject) {
      onSelectProject(id);
    } else {
      window.location.hash = `#/project/${id}`;
    }
  };

  return (
    <section id="work" className="py-20 md:py-28 bg-[#FFFFFF] dark:bg-[#121212] transition-colors duration-200">
      {/* Top Header Typography (Editorial Center-Aligned Hierarchy matching reference) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="font-display inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase text-[#F9B51B] dark:text-[#d1fe17] transition-colors">
            <span aria-hidden="true">✦</span>
            <span>PORTFOLIO</span>
            <span aria-hidden="true">✦</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-[#171717] dark:text-white tracking-tight leading-[1.12]">
            Selected Projects &amp; <span className="text-[#F9B51B] dark:text-[#d1fe17] transition-colors">Real Evidence</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[#666666] dark:text-[#A3A3A3] leading-relaxed max-w-2xl mx-auto font-normal">
            Representasi visual dari 3 bidang portofolio utama: Layanan Jasa Digital, Pusat Arsip Sekolah (PADDS), dan Pengelolaan Usaha Keluarga. Klik pada setiap proyek untuk membuka dokumentasi dan studi kasus lengkap.
          </p>
        </div>
      </div>

      {/* Full-Width Image Banner (Tersambung langsung dengan sisi kiri dan kanan section website) */}
      <div className="w-full mb-16 sm:mb-24 relative">
        <EditableImage
          storageKey="work_retail_service_counter_v2"
          defaultSrc={portfolioImages.retailServiceCounter}
          darkSrc={portfolioImages.retailBannerDark}
          alt="Pelayanan Kerja Nyata"
          containerClassName="w-full h-64 sm:h-80 md:h-96 lg:h-[440px] relative overflow-hidden"
          imgClassName="w-full h-full object-cover object-center"
          buttonPosition="top-right"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* ASYMMETRIC EDITORIAL GRID (2 + 1 Centered Composition)                     */}
        {/* Row 1: Project 1 & Project 2 in two columns                               */}
        {/* Row 2: Project 3 centered with identical column width & visual weight     */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12 lg:gap-y-16 items-start">
          {projectEntries.slice(0, 2).map((entry) => (
            <article
              key={entry.id}
              onClick={() => handleCardClick(entry.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(entry.id);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Buka detail dan dokumentasi ${entry.title}`}
              className="group flex flex-col items-center text-center cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F9B51B] dark:ring-[#d1fe17] rounded-xs transition-all duration-200"
            >
              {/* [ 1. LARGE RESPONSIVE DEVICE MOCKUP - Primary Visual Hero ] */}
              <div className="w-full aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center p-0 sm:p-1 overflow-visible">
                <img
                  src={entry.mockupSrc}
                  alt={`Mockup visual ${entry.title}`}
                  className="w-full h-full object-contain scale-[1.06] sm:scale-[1.08] filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_16px_32px_rgba(0,0,0,0.45)] transition-all duration-500 ease-out group-hover:scale-[1.12] group-hover:-translate-y-1.5 will-change-transform"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* [ 2. PROJECT TITLE & 3. PROJECT CATEGORY / TYPE ] */}
              <div className="mt-2.5 sm:mt-3.5 space-y-1 text-center w-full">
                <h3 className="font-display text-xl sm:text-2xl lg:text-[28px] font-bold text-[#171717] dark:text-white tracking-tight leading-snug group-hover:text-[#F9B51B] dark:text-[#d1fe17] transition-colors duration-200 text-center">
                  {entry.title}
                </h3>

                <p className="font-info text-xs sm:text-sm font-bold tracking-[0.08em] text-[#F9B51B] dark:text-[#d1fe17] uppercase text-center transition-colors">
                  {entry.category}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Row 2: Centered Asymmetric Placement for Project 3 */}
        {projectEntries[2] && (
          <div className="mt-12 lg:mt-16 flex justify-center">
            <div className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(50%-2rem)]">
              <article
                key={projectEntries[2].id}
                onClick={() => handleCardClick(projectEntries[2].id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(projectEntries[2].id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Buka detail dan dokumentasi ${projectEntries[2].title}`}
                className="group flex flex-col items-center text-center cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F9B51B] dark:ring-[#d1fe17] rounded-xs transition-all duration-200"
              >
                {/* [ 1. LARGE RESPONSIVE DEVICE MOCKUP - Primary Visual Hero ] */}
                <div className="w-full aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center p-0 sm:p-1 overflow-visible">
                  <img
                    src={projectEntries[2].mockupSrc}
                    alt={`Mockup visual ${projectEntries[2].title}`}
                    className="w-full h-full object-contain scale-[1.06] sm:scale-[1.08] filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_16px_32px_rgba(0,0,0,0.45)] transition-all duration-500 ease-out group-hover:scale-[1.12] group-hover:-translate-y-1.5 will-change-transform"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* [ 2. PROJECT TITLE & 3. PROJECT CATEGORY / TYPE ] */}
                <div className="mt-2.5 sm:mt-3.5 space-y-1 text-center w-full">
                  <h3 className="font-display text-xl sm:text-2xl lg:text-[28px] font-bold text-[#171717] dark:text-white tracking-tight leading-snug group-hover:text-[#F9B51B] dark:text-[#d1fe17] transition-colors duration-200 text-center">
                    {projectEntries[2].title}
                  </h3>

                  <p className="font-info text-xs sm:text-sm font-bold tracking-[0.08em] text-[#F9B51B] dark:text-[#d1fe17] uppercase text-center transition-colors">
                    {projectEntries[2].category}
                  </p>
                </div>
              </article>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
