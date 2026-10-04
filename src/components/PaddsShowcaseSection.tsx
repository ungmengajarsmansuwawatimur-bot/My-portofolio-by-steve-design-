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

const PaddsShowcaseSectionComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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
      if (!isOpen) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, handlePrev, handleNext]);

  return (
    <div className="space-y-8 pt-12 border-t border-[#171717]/15 dark:border-white/10">
      {/* Header & Detail PADDS */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="text-4xl sm:text-5xl font-black text-[#F9B51B] dark:text-[#d1fe17]">02</span>
            <span className="text-xs font-bold tracking-wider text-[#666666] dark:text-[#A3A3A3] uppercase">
              PADDS SMANSAT · 6 Modul Video Asli
            </span>
          </div>
          <div className="text-xs font-black tracking-widest text-[#F9B51B] dark:text-[#d1fe17] uppercase">
            PENGEMBANGAN SISTEM ARSIP
          </div>
          <h3 className="text-3xl sm:text-4xl font-black text-[#171717] dark:text-white tracking-tight">
            Pusat Arsip dan Dokumen Digital Sekolah
          </h3>
          <p className="text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
            Platform pengelolaan arsip digital SMAN 1 Suwawa Timur yang memusatkan pencatatan surat dan dokumen, pencarian, pengelolaan metadata, lokasi fisik, retensi, QR/public link, pelaporan, dan jejak aktivitas. Rekaman video langsung memperlihatkan demo interaksi nyata di setiap modul sistem.
          </p>
        </div>

        {/* Tombol Toggle Buka/Tutup Modul & Dokumentasi */}
        <div className="shrink-0 flex items-center md:self-center">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="group inline-flex items-center gap-2.5 text-xs sm:text-sm font-black text-[#F9B51B] dark:text-[#d1fe17] hover:text-[#171717] dark:hover:text-white cursor-pointer transition-colors"
          >
            <span className="hover:underline">{isOpen ? 'Sembunyikan Modul Video' : 'Buka 6 Video Modul & Detail'}</span>
            <span className="w-7 h-7 rounded-full bg-[#F9B51B] dark:bg-[#d1fe17] text-[#171717] flex items-center justify-center font-bold text-xs shrink-0 shadow-xs transition-transform group-hover:scale-105">
              {isOpen ? '↑' : '↓'}
            </span>
          </button>
        </div>
      </div>

      {/* Konten Terbuka (Pemutar Video YouTube Asli & 4 Kotak Fokus Kontribusi) */}
      {isOpen && (
        <div className="space-y-6 pt-4 border-t border-[#171717]/15 dark:border-[#2A2A2A] animate-fadeIn">
          {/* Pemutar Video Embed Asli */}
          <div className="relative w-full aspect-video max-h-[620px] bg-black rounded-3xl overflow-hidden shadow-[6px_6px_0px_#171717] border-2 border-[#171717] dark:border-[#333333]">
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

          {/* Bar Informasi & Navigasi Modul Ringkas */}
          <div className="flex items-center justify-between text-xs text-[#666666] dark:text-[#A3A3A3] px-1 flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <span className="font-black text-[#171717] dark:text-white">
                Modul {current.number}: {current.name}
              </span>
              <span className="text-[#666666] dark:text-[#A3A3A3] hidden sm:inline">— {current.tag}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-[#F5F5F5] dark:bg-[#1E1E1E] border-2 border-[#171717] dark:border-[#333333] rounded-full px-3 py-1 shadow-[2px_2px_0px_#171717]">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Modul Sebelumnya"
                  title="Modul Sebelumnya"
                  className="p-1 text-[#171717] dark:text-white hover:text-[#F9B51B] dark:text-[#d1fe17] transition-colors cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="font-mono text-[11px] px-1 text-[#171717] dark:text-white font-bold">
                  {activeIndex + 1} / {total}
                </span>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Modul Berikutnya"
                  title="Modul Berikutnya"
                  className="p-1 text-[#171717] dark:text-white hover:text-[#F9B51B] dark:text-[#d1fe17] transition-colors cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <a
                href={current.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-black text-[#F9B51B] dark:text-[#d1fe17] hover:underline"
              >
                <svg className="w-4 h-4 fill-current text-[#F9B51B] dark:text-[#d1fe17]" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>Buka di YouTube</span>
              </a>
            </div>
          </div>

          {/* 4 Komponen Kotak Fokus & Kontribusi */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#F9B51B] dark:bg-[#d1fe17]" />
              <h4 className="text-xs sm:text-sm font-black text-[#171717] dark:text-white uppercase tracking-wider">
                Fokus &amp; Kontribusi Pengembangan
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              {FOCUS_CONTRIBUTIONS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#F5F5F5] dark:bg-[#1E1E1E] rounded-2xl border-2 border-[#171717] dark:border-[#333333] space-y-1.5 shadow-[3px_3px_0px_#171717]"
                >
                  <div className="flex items-center gap-1.5 font-black text-xs text-[#F9B51B] dark:text-[#d1fe17]">
                    <span>0{idx + 1}.</span>
                    <span className="text-[#171717] dark:text-white font-black text-xs">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-[#666666] dark:text-[#A3A3A3] leading-relaxed text-[11px] pt-0.5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const PaddsShowcaseSection = React.memo(PaddsShowcaseSectionComponent);
