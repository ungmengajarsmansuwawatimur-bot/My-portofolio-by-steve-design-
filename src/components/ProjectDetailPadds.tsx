import React, { useState, useEffect, useCallback } from 'react';
import { padds6VideoModules } from '../data/padds11Data';

const FOCUS_CONTRIBUTIONS = [
  {
    title: 'Arsitektur Metadata Arsip',
    desc: 'Menyusun struktur tabel arsip kesiswaan dan tata usaha agar dokumen mudah dicari berdasarkan nomor surat dan kategori.',
  },
  {
    title: 'Alur Kerja & Lokasi Fisik',
    desc: 'Memetakan keterhubungan dokumen digital dengan lemari/boks arsip fisik sekolah dan penentuan jadwal retensi.',
  },
  {
    title: 'Navigasi Ramah Operator',
    desc: 'Memastikan tata letak tombol, filter pencarian, dan formulir input nyaman dioperasikan oleh staf administrasi sekolah.',
  },
  {
    title: 'Privasi & Keamanan Data',
    desc: 'Menerapkan penyamaran identitas kependidikan pada seluruh portofolio publik guna menjaga etika kerahasiaan institusi.',
  },
] as const;

interface ProjectDetailPaddsProps {
  onBack: () => void;
}

export const ProjectDetailPadds: React.FC<ProjectDetailPaddsProps> = ({ onBack }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const total = padds6VideoModules.length;
  const current = padds6VideoModules[activeIndex];

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handlePrev, handleNext]);

  return (
    <article className="min-h-screen py-10 md:py-16 bg-[#FFFFFF] dark:bg-[#121212] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Main Header Information */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl sm:text-5xl font-semibold text-[#F9B51B] dark:text-[#d1fe17] tracking-[-0.03em]">02</span>
            <span className="font-info text-xs font-normal tracking-wider text-[#666666] dark:text-[#A3A3A3] uppercase">
              PADDS SMANSAT · 6 Modul Video Asli
            </span>
          </div>
          <div className="font-info text-xs font-normal tracking-[0.08em] text-[#F9B51B] dark:text-[#d1fe17] uppercase">
            PENGEMBANGAN SISTEM ARSIP
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#171717] dark:text-white tracking-[-0.025em] leading-[1.08]">
            Pusat Arsip dan Dokumen Digital Sekolah
          </h1>
          <p className="font-body text-base sm:text-lg text-[#666666] dark:text-[#A3A3A3] leading-[1.65] pt-1 font-normal text-justify">
            Platform pengelolaan arsip digital SMAN 1 Suwawa Timur yang memusatkan pencatatan surat dan dokumen, pencarian, pengelolaan metadata, lokasi fisik, retensi, QR/public link, pelaporan, dan jejak aktivitas. Rekaman video langsung memperlihatkan demo interaksi nyata di setiap modul sistem.
          </p>
        </div>

        {/* PEMUTAR VIDEO EMBED ASLI (6 MODUL RESMI) */}
        <div className="space-y-6 pt-6 border-t border-[#171717]/15 dark:border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-display text-xs font-semibold tracking-[0.08em] text-[#171717] dark:text-white uppercase block">
                Pemutar Dokumentasi Video Modul Sistem
              </span>
              <p className="font-body text-xs text-[#666666] dark:text-[#A3A3A3] mt-0.5 font-normal">
                Demonstrasi video interaksi layar untuk 6 modul operasional PADDS SMANSAT.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-info text-xs font-normal text-[#F9B51B] dark:text-[#d1fe17]">
                Modul {activeIndex + 1} dari {total}
              </span>
            </div>
          </div>

          {/* Video Container */}
          <div className="relative w-full aspect-video max-h-[640px] bg-black rounded-3xl overflow-hidden shadow-[6px_6px_0px_#171717] border-2 border-[#171717] dark:border-[#333333]">
            <iframe
              key={current.youtubeId}
              src={`https://www.youtube-nocookie.com/embed/${current.youtubeId}?rel=0&modestbranding=1&playsinline=1`}
              title={`Video dokumentasi rekaman layar ${current.name}`}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Bar Informasi Modul */}
          <div className="flex items-center justify-between text-xs text-[#666666] dark:text-[#A3A3A3] px-1 flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <span className="font-display font-semibold text-[#171717] dark:text-white text-sm">
                Modul {current.number}: {current.name}
              </span>
              <span className="font-info text-[#666666] dark:text-[#A3A3A3] hidden sm:inline font-normal">— {current.tag}</span>
            </div>
          </div>

          {/* Module Selector Horizontal Tabs Strip */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 pt-1 no-scrollbar">
            {padds6VideoModules.map((mod, idx) => (
              <button
                key={mod.number}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`px-4 py-2.5 rounded-full border-2 text-left transition-all cursor-pointer shrink-0 flex items-center gap-2 ${
                  activeIndex === idx
                    ? 'bg-[#31543A] text-white border-[#171717] shadow-[3px_3px_0px_#171717]'
                    : 'bg-[#F5F5F5] dark:bg-[#1E1E1E] text-[#171717] dark:text-white border-[#171717]/15 dark:border-[#333333] hover:border-[#171717]'
                }`}
              >
                <span className={`font-display text-[11px] font-semibold ${activeIndex === idx ? 'text-[#F9B51B] dark:text-[#d1fe17]' : 'text-[#F9B51B] dark:text-[#d1fe17]'}`}>
                  {mod.number}
                </span>
                <span className="font-display text-xs font-semibold whitespace-nowrap">
                  {mod.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* FOKUS & KONTRIBUSI PENGEMBANGAN (LINEAR FEATURE LIST) */}
        <div className="space-y-4 pt-6 border-t border-[#171717]/15 dark:border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#F9B51B] dark:bg-[#d1fe17]" />
            <h3 className="font-display text-xs sm:text-sm font-semibold text-[#171717] dark:text-white uppercase tracking-wider">
              Fokus &amp; Kontribusi Pengembangan
            </h3>
          </div>

          <div className="divide-y divide-[#171717]/10 dark:divide-white/10 rounded-3xl border-2 border-[#171717] dark:border-[#333333] overflow-hidden bg-[#F5F5F5] dark:bg-[#1E1E1E] shadow-[4px_4px_0px_#171717]">
            {FOCUS_CONTRIBUTIONS.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-4 hover:bg-white dark:hover:bg-[#252528] transition-colors"
              >
                <span className="font-display text-sm font-semibold text-[#F9B51B] dark:text-[#d1fe17] shrink-0 pt-0.5">
                  0{idx + 1}.
                </span>
                <div className="space-y-1">
                  <h4 className="font-display text-sm sm:text-base font-semibold text-[#171717] dark:text-white">
                    {item.title}
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="pt-8 border-t border-[#171717]/15 dark:border-white/10 flex justify-center">
          <button
            type="button"
            onClick={onBack}
            className="font-display group inline-flex items-center gap-3 px-8 py-3 rounded-full text-sm font-semibold bg-[#31543A] text-white hover:bg-[#26432E] border-2 border-[#171717] transition-all shadow-md active:scale-95 cursor-pointer uppercase tracking-wider"
          >
            <span>&larr; KEMBALI KE BERANDA</span>
          </button>
        </div>
      </div>
    </article>
  );
};
