import React, { useState, useCallback, useEffect } from 'react';
import {
  workflowEvidenceData,
  realWorkBadges,
} from '../data/portfolioData';
import { PhoneChatMockup } from './PhoneChatMockup';
import { LightboxModal } from './LightboxModal';
import { OptimizedPicture } from './OptimizedPicture';
import { WorkflowEvidenceItem } from '../types';

interface ProjectDetailJasaDigitalProps {
  onBack: () => void;
}

export const ProjectDetailJasaDigital: React.FC<ProjectDetailJasaDigitalProps> = ({ onBack }) => {
  const [selectedEvidence, setSelectedEvidence] = useState<WorkflowEvidenceItem | null>(null);
  const [modalScreenshot, setModalScreenshot] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleOpenEvidence = useCallback((item: WorkflowEvidenceItem, activeScreenshot?: string) => {
    setSelectedEvidence(item);
    setModalScreenshot(
      activeScreenshot || item.screenshotUrl || '/assets/chat/chat_real_evidence_01.avif'
    );
  }, []);

  return (
    <article className="min-h-screen py-10 md:py-16 bg-[#FFFFFF] dark:bg-[#121212] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Main Header Information */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl sm:text-5xl font-semibold text-[#F9B51B] dark:text-[#d1fe17] tracking-[-0.03em]">01</span>
            <span className="font-info text-xs font-normal tracking-wider text-[#666666] dark:text-[#A3A3A3] uppercase">
              Desember 2024 — Sekarang
            </span>
          </div>
          <div className="font-info text-xs font-normal tracking-[0.08em] text-[#F9B51B] dark:text-[#d1fe17] uppercase">
            PELAYANAN &amp; PENGELOLAAN
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#171717] dark:text-white tracking-[-0.025em] leading-[1.08]">
            Jasa Digital &amp; Publikasi Mahasiswa
          </h1>
          <p className="font-body text-base sm:text-lg text-[#666666] dark:text-[#A3A3A3] leading-[1.65] pt-1 font-normal text-justify">
            Memberikan layanan secara langsung kepada pelanggan dengan memahami kebutuhan, menjelaskan informasi, melakukan koordinasi selama proses, menangani revisi, dan menindaklanjuti hingga pekerjaan selesai. Pengalaman Jasa Digital dimulai pada Desember 2024 ketika seorang teman mahasiswa menghubungi saya karena membutuhkan bantuan untuk publikasi artikel tugas mata kuliahnya. Informasi mengenai jasa kemudian menyebar melalui promosi organik dan rekomendasi pelanggan (word of mouth) ke jaringan mahasiswa lainnya.
          </p>
        </div>

        {/* PERAN SAYA & AKTIVITAS LAYANAN */}
        <div className="space-y-4 pt-6 border-t border-[#171717]/15 dark:border-white/10">
          <span className="font-display text-xs font-semibold tracking-[0.08em] text-[#171717] dark:text-white uppercase block">
            Peran Saya &amp; Aktivitas Layanan
          </span>
          <div className="flex flex-wrap gap-2.5">
            {[
              'Komunikasi dengan pelanggan',
              'Memahami kebutuhan naskah',
              'Pengelolaan antrean pesanan',
              'Penentuan tarif transparan',
              'Pelayanan & revisi cepat',
              'Koordinasi hingga terbit',
              'Menjaga kepuasan klien',
              'Rekomendasi dari mulut ke mulut',
            ].map((role, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5F5F5] dark:bg-[#1E1E1E] rounded-full border border-[#171717]/20 dark:border-[#333333] shadow-xs"
              >
                <span className="font-display text-[11px] font-semibold text-[#F9B51B] dark:text-[#d1fe17]">
                  0{idx + 1}.
                </span>
                <span className="font-info text-xs font-normal text-[#171717] dark:text-white">
                  {role}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* BUKTI PEKERJAAN — PHONE EVIDENCE GALLERY (HORIZONTALLY SCROLLABLE SHOWCASE) */}
        <div className="space-y-6 pt-6 border-t border-[#171717]/15 dark:border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-display text-xs font-semibold tracking-wider text-[#171717] dark:text-white uppercase block">
                Galeri Bukti Tangkapan Layar Smartphone
              </span>
              <p className="font-body text-xs text-[#666666] dark:text-[#A3A3A3] mt-0.5 font-normal">
                Dokumentasi alur komunikasi WhatsApp nyata dari pemesanan hingga artikel berhasil dipublikasikan.
              </p>
            </div>
            <span className="font-info text-xs font-normal text-[#F9B51B] dark:text-[#d1fe17]">
              Total 5 Studi Alur Nyata
            </span>
          </div>

          <div className="flex items-stretch gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory">
            {workflowEvidenceData.map((item) => (
              <div key={item.id} className="min-w-[270px] sm:min-w-[300px] shrink-0 snap-start">
                <PhoneChatMockup
                  item={item}
                  onOpenEvidence={handleOpenEvidence}
                />
              </div>
            ))}
          </div>
        </div>

        {/* EVALUASI & ANALISIS LAYANAN (LINEAR SCORECARD LIST) */}
        <div className="space-y-6 pt-6 border-t border-[#171717]/15 dark:border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#F9B51B] dark:bg-[#d1fe17]" />
            <h3 className="font-display text-xs sm:text-sm font-semibold text-[#171717] dark:text-white uppercase tracking-wider">
              Evaluasi &amp; Analisis Kinerja Layanan
            </h3>
          </div>

          <div className="divide-y divide-[#171717]/10 dark:divide-white/10 border-t border-b border-[#171717]/10 dark:border-white/10 bg-transparent">
            {[
              {
                no: '01',
                title: 'Efektivitas Komunikasi',
                score: 'Tinggi',
                desc: 'Pelayanan responsif via WhatsApp, penjelasan alur sistematis, dan konfirmasi kebutuhan naskah secara transparan.',
                tag: 'Komunikasi Ramah',
              },
              {
                no: '02',
                title: 'Kualitas Publikasi',
                score: '100% Terbit',
                desc: 'Semua artikel berhasil tayang di media online mitra tanpa kendala teknis atau penolakan redaksi.',
                tag: 'Hasil Terjamin',
              },
              {
                no: '03',
                title: 'Ketepatan Waktu',
                score: 'Cepat & Tepat',
                desc: 'Rata-rata pengerjaan tuntas dalam 1–2 jam sejak naskah dan data dikonfirmasi lengkap oleh pelanggan.',
                tag: 'Kecepatan Proses',
              },
              {
                no: '04',
                title: 'Transparansi Tarif',
                score: 'Konsisten',
                desc: 'Biaya jasa (Rp 50.000 – 100.000) disampaikan di awal percakapan tanpa pungutan tersembunyi.',
                tag: 'Kejujuran Biaya',
              },
              {
                no: '05',
                title: 'Kepuasan Pelanggan',
                score: 'Tinggi',
                desc: 'Mendapat tanggapan positif, ucapan terima kasih yang tulus, dan rekomendasi organik ke mahasiswa lain.',
                tag: 'Repeat Order',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white dark:hover:bg-[#252528] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="font-display text-sm font-semibold text-[#F9B51B] dark:text-[#d1fe17] shrink-0 pt-0.5">
                    {card.no}.
                  </span>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h4 className="font-display text-sm sm:text-base font-semibold text-[#171717] dark:text-white">
                        {card.title}
                      </h4>
                      <span className="font-info text-[10px] font-normal uppercase px-2.5 py-0.5 rounded-full bg-[#31543A] text-white">
                        {card.score}
                      </span>
                    </div>
                    <p className="font-body text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>
                </div>
                <span className="font-info text-xs font-normal text-[#F9B51B] dark:text-[#d1fe17] shrink-0 self-start sm:self-center">
                  &bull; {card.tag}
                </span>
              </div>
            ))}
          </div>

          {/* Metode Layanan & Yang Saya Pelajari */}
          <div className="flex flex-col md:flex-row gap-6 pt-4">
            <div className="w-full md:w-1/2 bg-[#F5F5F5] dark:bg-[#1E1E1E] rounded-3xl border-2 border-[#171717] dark:border-[#333333] p-6 sm:p-7 space-y-4 shadow-[4px_4px_0px_#171717]">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#31543A]" />
                <h4 className="font-display text-sm font-semibold text-[#171717] dark:text-white uppercase tracking-wider">
                  Metode &amp; Etika Layanan
                </h4>
              </div>
              <ul className="font-body space-y-2.5 text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] font-normal">
                {realWorkBadges.outcomesAndImpact.map((item: string, idx: number) => {
                  const colonIndex = item.indexOf(':');
                  if (colonIndex !== -1) {
                    const label = item.slice(0, colonIndex);
                    const rest = item.slice(colonIndex + 1);
                    return (
                      <li key={idx} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                        <span className="font-display font-semibold text-[#171717] dark:text-white sm:w-36 shrink-0 leading-snug">
                          {label}
                        </span>
                        <span className="font-body leading-relaxed text-[#666666] dark:text-[#A3A3A3] font-normal text-justify">
                          {rest}
                        </span>
                      </li>
                    );
                  }
                  return (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#31543A] font-semibold mt-0.5 shrink-0">✓</span>
                      <span className="leading-relaxed text-justify">{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="w-full md:w-1/2 bg-[#F5F5F5] dark:bg-[#1E1E1E] rounded-3xl border-2 border-[#171717] dark:border-[#333333] p-6 sm:p-7 space-y-4 shadow-[4px_4px_0px_#171717]">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#31543A]" />
                <h4 className="font-display text-sm font-semibold text-[#171717] dark:text-white uppercase tracking-wider">
                  Yang Saya Pelajari
                </h4>
              </div>
              <ul className="font-body space-y-2.5 text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] font-normal">
                {realWorkBadges.whatILearned.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#31543A] font-semibold mt-0.5 shrink-0">✓</span>
                    <span className="leading-relaxed text-justify">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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

      {/* Lightbox Modal for Phone Evidence */}
      {selectedEvidence && (
        <LightboxModal
          isOpen={Boolean(selectedEvidence)}
          onClose={() => setSelectedEvidence(null)}
          title={`${selectedEvidence.sequence} — ${selectedEvidence.title}`}
          subtitle={selectedEvidence.subtitle}
          badge="Bukti Tangkapan Layar Smartphone"
        >
          <div className="space-y-4">
            {selectedEvidence.screenshots && selectedEvidence.screenshots.length > 1 && (
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar px-0.5">
                {selectedEvidence.screenshots.map((src, sIdx) => {
                  const isActive = (modalScreenshot || selectedEvidence.screenshots?.[0]) === src;
                  return (
                    <button
                      key={sIdx}
                      type="button"
                      onClick={() => setModalScreenshot(src)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all cursor-pointer shrink-0 ${
                        isActive
                          ? 'bg-[#10B981] text-white border-[#10B981] shadow-xs'
                          : 'bg-white dark:bg-[#18181B] text-[#6B7280] dark:text-[#9CA3AF] border-[#E5E7EB] dark:border-[#27272A] hover:text-[#111827] dark:hover:text-white'
                      }`}
                    >
                      Bukti {sIdx + 1}
                    </button>
                  );
                })}
              </div>
            )}

            <div className="relative flex justify-center items-center bg-[#0B141A] p-4 rounded-xl max-h-[70vh] overflow-y-auto">
              {selectedEvidence.screenshots && selectedEvidence.screenshots.length > 1 && (
                <button
                  type="button"
                  onClick={() => {
                    const list = selectedEvidence.screenshots!;
                    const cur = modalScreenshot || list[0];
                    const idx = list.indexOf(cur);
                    const prevIdx = (idx - 1 + list.length) % list.length;
                    setModalScreenshot(list[prevIdx]);
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center border border-white/25 shadow-lg cursor-pointer transition-transform active:scale-95"
                  title="Bukti sebelumnya"
                  aria-label="Bukti sebelumnya"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              <div className="w-full max-w-[340px] rounded-[24px] overflow-hidden border border-white/20 shadow-2xl">
                {modalScreenshot || selectedEvidence.screenshotUrl ? (
                  <OptimizedPicture
                    src={modalScreenshot || selectedEvidence.screenshotUrl || ''}
                    alt={selectedEvidence.title}
                    className="w-full h-auto object-contain"
                  />
                ) : (
                  <div className="p-8 text-center text-white text-xs">
                    Tangkapan layar siap diganti dengan berkas gambar asli.
                  </div>
                )}
              </div>

              {selectedEvidence.screenshots && selectedEvidence.screenshots.length > 1 && (
                <button
                  type="button"
                  onClick={() => {
                    const list = selectedEvidence.screenshots!;
                    const cur = modalScreenshot || list[0];
                    const idx = list.indexOf(cur);
                    const nextIdx = (idx + 1) % list.length;
                    setModalScreenshot(list[nextIdx]);
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center border border-white/25 shadow-lg cursor-pointer transition-transform active:scale-95"
                  title="Bukti berikutnya"
                  aria-label="Bukti berikutnya"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>

            <div className="p-4 bg-[#F8F9FA] dark:bg-[#18181B] rounded-xl text-xs sm:text-sm text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed space-y-2 border border-[#E5E7EB] dark:border-[#27272A]">
              <span className="font-display font-semibold text-[#111827] dark:text-[#F9FAFB] block">
                Ringkasan Alur Komunikasi:
              </span>
              <p className="font-body font-normal">{selectedEvidence.shortDescription}</p>
              <div className="font-info text-[11px] text-[#6B7280] dark:text-[#9CA3AF] pt-1 font-normal">
                <span className="font-display font-semibold text-[#111827] dark:text-[#F9FAFB]">Kebijakan Privasi: </span>
                {selectedEvidence.privacyNote}
              </div>
            </div>
          </div>
        </LightboxModal>
      )}
    </article>
  );
};
