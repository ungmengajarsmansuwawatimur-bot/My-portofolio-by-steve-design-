import React, { useState, useMemo } from 'react';
import {
  candidateProfile,
  learningMaterialsData,
} from '../data/portfolioData';
import { LearningCategory, LearningItem } from '../types';
import { EditableImage } from './EditableImage';
import { LightboxModal } from './LightboxModal';

const CATEGORIES: readonly LearningCategory[] = [
  'Semua',
  'Customer Service',
  'Retail',
  'Display',
  'Planogram',
  'Stock',
  'Komunikasi',
] as const;

const RetailLearningComponent: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<LearningCategory>('Semua');
  const [selectedItem, setSelectedItem] = useState<LearningItem | null>(null);

  const filteredMaterials = useMemo(
    () =>
      activeCategory === 'Semua'
        ? learningMaterialsData
        : learningMaterialsData.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="learning" className="py-20 md:py-28 bg-[#FFFFFF] dark:bg-[#121212] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Header */}
        <div className="max-w-3xl space-y-4">
          <div className="font-display inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.08em] uppercase text-[#F9B51B] dark:text-[#d1fe17] transition-colors">
            <span aria-hidden="true">✦</span>
            <span>LEARNING</span>
            <span aria-hidden="true">✦</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#171717] dark:text-white tracking-[-0.02em] leading-[1.12]">
            Pembelajaran Retail<br />
            <span className="text-[#F9B51B] dark:text-[#d1fe17] transition-colors">&amp; Customer Service</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[#666666] dark:text-[#A3A3A3] leading-[1.65] max-w-2xl font-normal">
            Modul dan keterampilan operasional ritel yang saya pelajari secara mandiri untuk kesiapan kerja di lingkungan retail modern.
          </p>

          {/* Editorial Category Navigation (Minimalist Clean Tabs) */}
          <div className="flex flex-wrap items-center gap-2 pt-2" role="tablist" aria-label="Kategori Pembelajaran">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-display text-xs font-semibold tracking-wider uppercase transition-all duration-150 cursor-pointer px-3.5 py-1.5 rounded-xs border select-none ${
                    isActive
                      ? 'bg-[#171717] dark:bg-white text-white dark:text-[#171717] border-[#171717] dark:border-white shadow-xs'
                      : 'bg-transparent text-[#666666] dark:text-[#A3A3A3] border-transparent hover:border-[#171717]/20 dark:hover:border-white/20 hover:text-[#171717] dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Section: Daftar Materi Pembelajaran */}
        <div className="pt-2 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F9B51B] dark:bg-[#d1fe17]" />
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#171717] dark:text-white tracking-[-0.015em]">
              Daftar Modul Pembelajaran
            </h3>
          </div>

          {/* 6 Material Modules in Clean Minimalist Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredMaterials.map((item) => (
              <article
                key={item.id}
                className="flex flex-col justify-between space-y-4 group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="space-y-3.5">
                  {/* Thumbnail Image (Clean, Minimalist, Interactive Hover) */}
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
                    <span className="font-info font-normal tracking-[0.08em] text-[#F9B51B] dark:text-[#d1fe17] uppercase">
                      {item.code} &bull; {item.category}
                    </span>
                    <span className="font-info text-[#888888] dark:text-[#A3A3A3] font-normal">
                      {item.platform}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-display text-base sm:text-lg font-semibold text-[#171717] dark:text-white leading-snug group-hover:text-[#F9B51B] dark:group-hover:text-[#F9B51B] dark:text-[#d1fe17] transition-colors">
                    {item.title}
                  </h4>

                  {/* Concise Overview */}
                  <p className="font-body text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] leading-[1.6] line-clamp-2 font-normal">
                    {item.overview}
                  </p>
                </div>

                {/* Minimalist Action CTA */}
                <div className="pt-1 flex items-center justify-between gap-2">
                  <span className="font-display inline-flex items-center gap-1.5 text-xs font-semibold text-[#F9B51B] dark:text-[#d1fe17] group-hover:translate-x-1 transition-transform">
                    <span>Lihat Rincian Modul</span>
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                  {item.sourceUrl && (
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="font-display inline-flex items-center gap-1 text-xs font-semibold text-[#666666] dark:text-[#A3A3A3] hover:text-[#31543A] dark:hover:text-[#F9B51B] dark:text-[#d1fe17] transition-colors"
                      title="Pelajari materi di tautan sumber asli"
                    >
                      <span>Pelajari Materi</span>
                      <span aria-hidden="true">&#x2197;</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
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
              <span className="font-black text-[#171717] dark:text-white block mb-1">
                Tentang Materi:
              </span>
              <p className="text-[#666666] dark:text-[#A3A3A3]">{selectedItem.overview}</p>
            </div>

            <div>
              <span className="font-black text-[#171717] dark:text-white block mb-1">
                Hal yang Dipelajari:
              </span>
              <ul className="space-y-1.5">
                {selectedItem.whatILearnedBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#31543A] font-black">✓</span>
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
                className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full text-xs font-black bg-[#31543A] text-white hover:bg-[#26432E] border-2 border-[#171717] transition-all duration-150 shadow-[3px_3px_0px_#171717] active:scale-95"
              >
                <span>Pelajari Materi (Sumber Asli)</span>
                <span className="w-6 h-6 rounded-full bg-[#F9B51B] dark:bg-[#d1fe17] text-[#171717] flex items-center justify-center font-bold text-xs shrink-0">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </LightboxModal>
      )}
    </section>
  );
};

export const RetailLearning = React.memo(RetailLearningComponent);

