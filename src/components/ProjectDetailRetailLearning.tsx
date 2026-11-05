import React, { useState, useEffect } from 'react';
import { learningMaterialsData } from '../data/portfolioData';
import { LearningItem } from '../types';
import { EditableImage } from './EditableImage';
import { LightboxModal } from './LightboxModal';
import { UnderDevelopmentView } from './UnderDevelopmentView';

interface ProjectDetailRetailLearningProps {
  onBack: () => void;
}

export const ProjectDetailRetailLearning: React.FC<ProjectDetailRetailLearningProps> = ({ onBack }) => {
  const [selectedItem, setSelectedItem] = useState<LearningItem | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);



  // Status penutupan sementara untuk halaman proyek Pembelajaran Retail
  const isUnderDevelopment = false;

  if (isUnderDevelopment) {
    return <UnderDevelopmentView onBack={onBack} projectName="Pembelajaran Retail & Customer Service" />;
  }

  // =========================================================================
  // KONTEN ASLI (Tersimpan utuh & tidak dihapus):
  // Rincian lengkap 6 modul retail, highlight kompetensi, dan modal lightbox
  // =========================================================================
  return (
    <article className="min-h-screen py-10 md:py-16 bg-[#FFFFFF] dark:bg-[#121212] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Main Header Information */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl sm:text-5xl font-semibold text-[#737373] dark:text-[#9CA3AF] tracking-tight">04</span>
            <span className="font-info text-xs font-normal tracking-wider text-[#666666] dark:text-[#A3A3A3] uppercase">
              6 Modul Kesiapan Retail &bull; Pelatihan Mandiri
            </span>
          </div>
          <div className="font-info text-xs font-semibold tracking-widest text-[#737373] dark:text-[#9CA3AF] uppercase">
            LEARNING &amp; DEVELOPMENT
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#171717] dark:text-white tracking-tight leading-[1.08]">
            Pembelajaran Retail &amp; Customer Service
          </h1>
          <p className="font-body text-base sm:text-lg text-[#666666] dark:text-[#A3A3A3] leading-[1.65] pt-1 font-normal text-justify">
            Modul dan keterampilan operasional ritel yang saya pelajari secara mandiri untuk kesiapan kerja di lingkungan retail modern. Pembelajaran ini mencakup standar pelayanan konsumen prima, penataan visual merchandising (planogram), pengelolaan stok akurat, hingga etika komunikasi di tempat kerja.
          </p>
        </div>

        {/* Section: Daftar Materi Pembelajaran */}
        <div className="space-y-6 pt-6 border-t border-[#171717]/15 dark:border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#737373] dark:bg-[#9CA3AF]" />
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#171717] dark:text-white tracking-tight">
              Daftar Modul Pembelajaran
            </h3>
          </div>

          {/* 6 Material Modules in Clean Minimalist Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {learningMaterialsData.map((item) => (
              <article
                key={item.id}
                className="flex flex-col justify-between space-y-4 group cursor-pointer p-4 rounded-2xl border-2 border-[#171717]/10 dark:border-white/10 hover:border-[#525252] dark:hover:border-[#A3A3A3] bg-white dark:bg-[#1A1A1E] transition-all duration-200 shadow-sm hover:shadow-md"
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
                    <span className="font-info font-semibold tracking-wider text-[#737373] dark:text-[#9CA3AF] uppercase">
                      {item.code} &bull; {item.category}
                    </span>
                    <span className="font-info text-[#888888] dark:text-[#A3A3A3] font-normal">
                      {item.platform}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-display text-base sm:text-lg font-semibold text-[#171717] dark:text-white leading-snug group-hover:text-[#525252] dark:group-hover:text-[#D4D4D8] transition-colors">
                    {item.title}
                  </h4>

                  {/* Concise Overview */}
                  <p className="font-body text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] leading-[1.6] line-clamp-2 font-normal">
                    {item.overview}
                  </p>
                </div>

                {/* Minimalist Action CTA */}
                <div className="pt-2 flex items-center justify-between gap-2 border-t border-[#171717]/10 dark:border-white/10">
                  <span className="font-display inline-flex items-center gap-1.5 text-xs font-semibold text-[#525252] dark:text-[#A3A3A3] group-hover:translate-x-1 transition-transform">
                    <span>Lihat Rincian Modul</span>
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                  {item.sourceUrl && (
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="font-display inline-flex items-center gap-1 text-xs font-semibold text-[#666666] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-white transition-colors"
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
            className="font-display group inline-flex items-center gap-3 px-8 py-3 rounded-full text-sm font-semibold bg-[#525252] dark:bg-[#383838] text-white hover:bg-[#3F3F46] dark:hover:bg-[#27272A] border-2 border-[#171717] dark:border-[#525252] transition-all shadow-[3px_3px_0px_#171717] dark:shadow-[3px_3px_0px_#000000] active:scale-95 cursor-pointer uppercase tracking-wider"
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
                    <span className="text-[#737373] dark:text-[#9CA3AF] font-semibold">✓</span>
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
                className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full text-xs font-semibold bg-[#525252] dark:bg-[#383838] text-white hover:bg-[#3F3F46] dark:hover:bg-[#27272A] border-2 border-[#171717] dark:border-[#525252] transition-all duration-150 shadow-[3px_3px_0px_#171717] active:scale-95"
              >
                <span>Pelajari Materi (Sumber Asli)</span>
                <span className="w-6 h-6 rounded-full bg-white text-[#525252] flex items-center justify-center font-bold text-xs shrink-0">
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
