import React from 'react';

export interface RealWorkProps {
  onSelectProject?: (projectId: 'jasa-digital' | 'padds-smansat' | 'usaha-keluarga' | 'pembelajaran-retail') => void;
}

export const RealWork: React.FC<RealWorkProps> = ({ onSelectProject }) => {
  const projectEntries = [
    {
      id: 'jasa-digital' as const,
      number: '01',
      period: 'Desember 2024 s.d. Sekarang',
      category: 'PELAYANAN & PENGELOLAAN',
      title: 'Layanan Digital & Publikasi Artikel',
      teaser: 'Layanan koordinasi naskah publikasi artikel tugas mahasiswa via WhatsApp, transparansi tarif, dan penanganan revisi cepat.',
      badge: '5 Studi Alur Nyata',
      mockupSrc: '/assets/mockups/mockup_01_jasa_digital.webp?v=user-colorized',
      accentColor: 'text-[#D97706] dark:text-[#F9B51B]',
      hoverColor: 'group-hover:text-[#D97706] dark:group-hover:text-[#F9B51B]',
      ringColor: 'focus-visible:ring-[#F9B51B]',
    },
    {
      id: 'padds-smansat' as const,
      number: '02',
      period: 'PADDS SMANSAT · 6 Modul Video Asli',
      category: 'PENGEMBANGAN SISTEM ARSIP',
      title: 'Pusat Arsip Digital',
      teaser: 'Platform arsip digital SMAN 1 Suwawa Timur dengan pemusatan pencatatan surat, retensi, QR code, dan rekaman demo 6 modul video asli.',
      badge: '6 Video Demo Sistem',
      mockupSrc: '/assets/mockups/mockup_02_padds_smansat.webp?v=user-colorized',
      accentColor: 'text-[#0284C7] dark:text-[#38BDF8]',
      hoverColor: 'group-hover:text-[#0284C7] dark:group-hover:text-[#38BDF8]',
      ringColor: 'focus-visible:ring-[#0284C7]',
    },
    {
      id: 'usaha-keluarga' as const,
      number: '03',
      period: '2016 s.d. Sekarang (±8 Tahun)',
      category: 'OPERASIONAL & PELAYANAN LANGSUNG',
      title: 'Administrasi & Layanan Harian',
      teaser: 'Praktik nyata melayani pembeli toko, penataan rak metode FIFO, pengecekan stok fisik, hingga ketelitian transaksi kasir tunai.',
      badge: 'Praktik Operasional Nyata',
      mockupSrc: '/assets/mockups/mockup_03_usaha_keluarga.webp?v=user-colorized',
      accentColor: 'text-[#15803D] dark:text-[#34D399]',
      hoverColor: 'group-hover:text-[#15803D] dark:group-hover:text-[#34D399]',
      ringColor: 'focus-visible:ring-[#16A34A]',
    },
    {
      id: 'pembelajaran-retail' as const,
      number: '04',
      period: '6 Modul Kesiapan Retail',
      category: 'LEARNING & DEVELOPMENT',
      title: 'Standar Pelayanan & Tata Kerja',
      teaser: 'Modul dan keterampilan operasional retail yang dipelajari secara mandiri untuk kesiapan kerja di lingkungan retail modern.',
      badge: '6 Modul Kesiapan Retail',
      mockupSrc: '/assets/mockups/mockup_04_pembelajaran_retail.webp?v=user-pink',
      accentColor: 'text-[#E11D48] dark:text-[#FB7185]',
      hoverColor: 'group-hover:text-[#E11D48] dark:group-hover:text-[#FB7185]',
      ringColor: 'focus-visible:ring-[#E11D48]',
    },
  ];

  const handleCardClick = (id: 'jasa-digital' | 'padds-smansat' | 'usaha-keluarga' | 'pembelajaran-retail') => {
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
          <div className="font-body inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase text-[#F9B51B] dark:text-[#d1fe17] transition-colors">
            <span aria-hidden="true">✦</span>
            <span>PORTFOLIO</span>
            <span aria-hidden="true">✦</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-[#171717] tracking-tight leading-[1.12]">
            Selected Projects &amp; <span className="text-[#F9B51B] transition-colors">Real Evidence</span>
          </h2>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* SYMMETRIC 2x2 EDITORIAL GRID FOR 4 FEATURED PROJECTS                      */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12 lg:gap-y-16 items-start">
          {projectEntries.map((entry) => (
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
              className={`group flex flex-col items-center text-center cursor-pointer select-none focus:outline-none focus-visible:ring-2 ${entry.ringColor} rounded-xs transition-all duration-200`}
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
              <div className="mt-2.5 sm:mt-3.5 space-y-1.5 text-center w-full">
                <h3 className={`font-unbounded font-semibold text-lg sm:text-xl lg:text-2xl text-[#171717] dark:text-white tracking-tight leading-snug ${entry.hoverColor} transition-colors duration-200 text-center`}>
                  {entry.title}
                </h3>

                <p className="font-unbounded font-semibold text-[11px] sm:text-xs tracking-[0.1em] text-[#737373] dark:text-[#9CA3AF] uppercase text-center transition-colors">
                  {entry.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
