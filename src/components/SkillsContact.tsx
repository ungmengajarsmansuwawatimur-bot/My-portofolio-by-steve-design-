import React, { useMemo } from 'react';
import {
  candidateProfile,
  skillGroupsData,
  toolsData,
  contactData,
  testimonialsData,
} from '../data/portfolioData';
import { InteractiveToolIndex } from './InteractiveToolIndex';
import { MarqueeTicker } from './MarqueeTicker';
import { downloadCv } from '../utils/downloadCv';
import { portfolioImages } from '../assets/images';

interface SkillsContactProps {
  onOpenCvModal?: () => void;
}

export const SkillsContact: React.FC<SkillsContactProps> = ({ onOpenCvModal }) => {
  // Skill card data matching reference screenshot
  const skillCards = [
    {
      title: 'Customer Service & Pelayanan Toko',
      desc: 'Komunikasi ramah, memahami kebutuhan pembeli, mendengarkan aktif, dan penyelesaian masalah pelanggan secara cepat.',
      tags: [
        'Pelayanan ramah',
        'Penanganan keluhan',
        'Komunikasi interpersonal',
        'Loyalitas pembeli',
      ],
    },
    {
      title: 'Operasional Retail & Penataan Barang',
      desc: 'Penataan display produk estetik, penerapan metode FIFO, rotasi barang, dan pemeliharaan kerapian rak toko harian.',
      tags: [
        'Display produk metode FIFO',
        'Pengecekan tanggal kedaluwarsa',
        'Penyesuaian label harga',
        'Kebersihan area',
      ],
    },
    {
      title: 'Sistem Kasir & Transaksi Tunai',
      desc: 'Ketelitian tinggi dalam input transaksi, penghitungan uang tunai dan kembalian, serta rekapitulasi kas harian.',
      tags: [
        'Input transaksi kasir',
        'Penghitungan uang tunai',
        'Pencatatan pembukuan',
        'Konfirmasi pembayaran',
      ],
    },
    {
      title: 'Administrasi Digital & Arsip Data',
      desc: 'Pengoperasian Microsoft Excel, Google Sheets, pengarsipan dokumen digital, dan pembuatan materi grafis Canva.',
      tags: [
        'Microsoft Office & Workspace',
        'Data entry & inventarisasi',
        'Desain promosi Canva',
      ],
    },
  ];

  // Generate running text items automatically matching section content
  const skillsTickerItems = useMemo(() => {
    const titles = skillCards.map((card) => card.title.toUpperCase());
    const tags = skillCards.flatMap((card) => card.tags.map((t) => t.toUpperCase()));
    const tools = toolsData.map((tool) => tool.name.toUpperCase());
    return [...titles, ...tags, ...tools];
  }, []);

  return (
    <div className="space-y-0">
      {/* ========================================================================= */}
      {/* 1. SKILLS & TECHNICAL EXPERIENCE                                          */}
      {/* Steve Dark Green Canvas (#31543A) matching CV button                      */}
      {/* ========================================================================= */}
      <section
        id="skills"
        className="pt-20 md:pt-28 pb-0 bg-[#31543A] text-white transition-colors duration-200 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 pb-16 md:pb-20">
          {/* Section Kicker & Title - Centered */}
          <div className="space-y-3 max-w-3xl mx-auto text-center flex flex-col items-center">
            <div className="font-display inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase text-[#F9B51B] dark:text-[#d1fe17]">
              <span aria-hidden="true">✦</span>
              <span>SKILLS</span>
              <span aria-hidden="true">✦</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-white leading-tight text-center">
              Skills &amp; Technical Experience
            </h2>
          </div>

          {/* 4 Skill Cards: Clean Open Layout without Bento Box Wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {skillCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white leading-snug">
                    {card.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm md:text-base text-white/80 leading-relaxed font-normal text-justify">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tools yang Saya Gunakan inside Skills Section */}
          <div className="pt-4 sm:pt-8 space-y-6 sm:space-y-8">
            <div className="text-center space-y-2.5 max-w-2xl mx-auto">
              <div className="font-display inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase text-[#F9B51B] dark:text-[#d1fe17]">
                <span aria-hidden="true">✦</span>
                <span>DIGITAL TOOLS &amp; PLATFORMS</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
                Aplikasi &amp; Perangkat Lunak Kerja
              </h3>
            </div>

            {/* Grid of 12 application cards in 4 columns matching reference screenshot */}
            <InteractiveToolIndex />
          </div>
        </div>

        {/* Marquee Ticker at the bottom of section#skills */}
        <MarqueeTicker items={skillsTickerItems} speed="slow" durationSeconds={85} />
      </section>

      {/* ========================================================================= */}
      {/* 2. TESTIMONIALS SECTION (Steve Mengelkoch Screenshots 6 & 7)               */}
      {/* ========================================================================= */}
      <section
        id="testimonials"
        className="py-20 md:py-28 bg-[#F5F5F5] dark:bg-[#18181B] text-[#171717] dark:text-white transition-colors duration-200 border-t border-[#171717]/15 dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Section Kicker & Title */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="font-display inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.08em] uppercase text-[#F9B51B] dark:text-[#d1fe17] transition-colors">
              <span aria-hidden="true">✦</span>
              <span>TESTIMONIALS</span>
              <span aria-hidden="true">✦</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#171717] dark:text-white leading-[1.12]">
              What Clients &amp; Colleagues Say
            </h2>
          </div>

          {/* 4 Testimonials dalam bentuk bubble komentar 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-stretch">
            {testimonialsData.map((testi) => (
              <div
                key={testi.id}
                className="flex flex-col justify-between h-full group"
              >
                {/* Speech / Comment Bubble Card */}
                <div className="relative bg-white dark:bg-[#1E1E22] rounded-3xl p-6 sm:p-7 border border-[#171717]/12 dark:border-white/10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] hover:shadow-md transition-all duration-300 flex-1 flex flex-col justify-between">
                  {/* Bubble Pointer / Ekor Balon Komentar */}
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-2.5 left-9 w-5 h-5 bg-white dark:bg-[#1E1E22] border-r border-b border-[#171717]/12 dark:border-white/10 rotate-45 transform"
                  />

                  <div className="space-y-4">
                    {/* Header inside Bubble: Rating + Category Pill */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-1 text-[#F9B51B] dark:text-[#d1fe17] text-base select-none transition-colors">
                        {'★'.repeat(testi.stars)}
                      </div>
                      <span className="font-info text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F5F5F5] dark:bg-[#2A2A2E] text-[#F9B51B] dark:text-[#d1fe17] border border-[#171717]/5 dark:border-white/5">
                        {testi.category}
                      </span>
                    </div>

                    {/* Quote / Isi Komentar */}
                    <p className="font-body text-sm sm:text-base text-[#262626] dark:text-[#E5E5E5] leading-[1.65] italic font-normal text-justify">
                      &ldquo;{testi.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Author Meta connected to bubble tail */}
                <div className="mt-5 pl-5 flex items-center gap-3.5">
                  <div className="font-display w-10 h-10 rounded-full bg-[#F9B51B] dark:bg-[#d1fe17] text-[#171717] flex items-center justify-center font-bold text-xs shrink-0 shadow-sm ring-2 ring-white dark:ring-[#18181B]">
                    {testi.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-[#171717] dark:text-white leading-snug">
                      {testi.name}
                    </h4>
                    <p className="font-info text-xs text-[#666666] dark:text-[#A3A3A3] font-normal">
                      {testi.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CURRICULUM VITAE & OFFICIAL DOCUMENTATION                               */}
      {/* ========================================================================= */}
      <section
        id="cv"
        className="py-20 md:py-24 bg-white dark:bg-[#121212] text-[#171717] dark:text-white transition-colors duration-200 border-t border-[#171717]/15 dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Kicker */}
          <div className="space-y-3">
            <div className="font-display inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.08em] uppercase text-[#F9B51B] dark:text-[#d1fe17] transition-colors">
              <span aria-hidden="true">✦</span>
              <span>CURRICULUM VITAE</span>
              <span aria-hidden="true">✦</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#171717] dark:text-white leading-[1.12]">
              Official Resume &amp; Documentation
            </h2>
          </div>

          {/* Document Preview & Download Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Col 1-7: Editorial Document Mockup */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full max-w-[500px] h-[350px] sm:h-[380px]">
                {/* Back Page */}
                <div className="absolute right-3 top-0 w-[85%] h-full bg-[#F5F5F5] dark:bg-[#1E1E1E] border border-[#171717]/10 dark:border-white/10 rounded-2xl p-6 text-[11px] text-[#666666] space-y-3 pointer-events-none">
                  <div className="font-display h-6 bg-[#31543A] rounded-xl text-white px-3 flex items-center justify-between font-semibold text-[10px]">
                    <span>TAUFIK HIDAYAT MALII</span>
                    <span className="text-[#F9B51B] dark:text-[#d1fe17]">PRAMUNIAGA</span>
                  </div>
                  <div className="space-y-1.5 pt-2">
                    <div className="w-20 h-2 bg-[#F9B51B] dark:bg-[#d1fe17] rounded-full" />
                    <div className="w-full h-1.5 bg-[#E9E9E9] dark:bg-[#333333] rounded-full" />
                    <div className="w-5/6 h-1.5 bg-[#E9E9E9] dark:bg-[#333333] rounded-full" />
                  </div>
                  <div className="space-y-1.5 pt-2">
                    <div className="w-16 h-2 bg-[#31543A] rounded-full" />
                    <div className="w-full h-1.5 bg-[#E9E9E9] dark:bg-[#333333] rounded-full" />
                    <div className="w-4/5 h-1.5 bg-[#E9E9E9] dark:bg-[#333333] rounded-full" />
                  </div>
                </div>

                {/* Front Page — Authentic Resume Card with Real Portrait */}
                <div className="absolute left-0 bottom-0 w-[88%] sm:w-[90%] h-[92%] bg-white dark:bg-[#1E1E1E] border-2 border-[#171717] dark:border-white/20 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-[6px_6px_0px_#171717] dark:shadow-[6px_6px_0px_#d1fe17] select-none transition-transform hover:-translate-y-1 duration-200">
                  {/* Top Header: Candidate Name, Title & Authentic Photo */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="font-info text-[11px] sm:text-xs font-bold tracking-[0.1em] text-[#F9B51B] dark:text-[#d1fe17] uppercase transition-colors">
                        CURRICULUM VITAE
                      </div>
                      <div className="font-display text-lg sm:text-2xl font-bold text-[#171717] dark:text-white tracking-tight leading-snug">
                        Taufik Hidayat Malii
                      </div>
                      <div className="font-info text-[10px] sm:text-[11px] font-semibold text-[#31543A] dark:text-[#d1fe17] tracking-wider uppercase">
                        Pramuniaga &amp; Kasir Retail
                      </div>
                      <div className="w-12 h-1 bg-[#31543A] dark:bg-[#d1fe17] mt-1.5 rounded-full" />
                    </div>

                    {/* Authentic Photo of Taufik (Real Portrait Cutout) */}
                    <div className="relative shrink-0">
                      <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-xl border-2 border-[#171717] dark:border-white/30 bg-gradient-to-b from-[#F9B51B]/25 to-[#31543A]/20 dark:from-[#d1fe17]/25 dark:to-[#31543A]/40 overflow-hidden shadow-[3px_3px_0px_#171717] dark:shadow-[3px_3px_0px_#d1fe17] flex items-end justify-center">
                        <img
                          src={portfolioImages.heroPortrait}
                          alt="Foto Asli Taufik Hidayat Malii"
                          className="w-full h-full object-cover object-top scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div
                        className="absolute -bottom-1 -right-1 bg-[#31543A] dark:bg-[#d1fe17] text-white dark:text-[#171717] w-5 h-5 rounded-full border-2 border-white dark:border-[#171717] text-[10px] flex items-center justify-center font-black shadow-xs"
                        title="Foto Terverifikasi Resmi"
                      >
                        ✓
                      </div>
                    </div>
                  </div>

                  {/* Body Qualifications */}
                  <div className="font-info space-y-1.5 text-xs text-[#555555] dark:text-[#D1D5DB] font-normal pt-1">
                    <p className="flex items-center gap-1.5">
                      <span className="text-[#31543A] dark:text-[#d1fe17] font-bold text-xs" aria-hidden="true">■</span>
                      <span><strong>Pendidikan:</strong> SMA Negeri 1 Kabila</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <span className="text-[#31543A] dark:text-[#d1fe17] font-bold text-xs" aria-hidden="true">■</span>
                      <span><strong>Pengalaman:</strong> Operasional Retail Usaha (8 Thn)</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <span className="text-[#31543A] dark:text-[#d1fe17] font-bold text-xs" aria-hidden="true">■</span>
                      <span><strong>Portofolio:</strong> Jasa Digital &amp; Modul PADDS</span>
                    </p>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="font-info flex items-center justify-between text-xs font-semibold text-[#171717] dark:text-white border-t border-[#171717]/15 dark:border-white/10 pt-2.5">
                    <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                      <span className="w-2 h-2 rounded-full bg-[#31543A] dark:bg-[#d1fe17] animate-pulse" />
                      <span>Gorontalo, Indonesia</span>
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold bg-[#171717]/5 dark:bg-white/10 border border-[#171717]/10 dark:border-white/20 px-2 py-0.5 rounded-full text-[#171717] dark:text-[#F3F4F6]">
                      RESMI • 2025
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 8-12: Description & Action */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#171717] dark:text-white tracking-[-0.015em]">
                  Curriculum Vitae Siap Tinjau
                </h3>
                <p className="font-body text-base sm:text-lg text-[#666666] dark:text-[#A3A3A3] leading-[1.65] font-normal text-justify">
                  Dokumen lengkap berisi riwayat pendidikan, pengalaman operasional nyata, matriks kompetensi retail, serta kontak resmi. Tersedia untuk kebutuhan evaluasi rekrutmen dan kolaborasi kerja.
                </p>
              </div>

              {/* Direct Download Button */}
              <div>
                <button
                  type="button"
                  onClick={onOpenCvModal || downloadCv}
                  title="Unduh CV Resmi Taufik Hidayat Malii (PDF)"
                  aria-label="Unduh CV Resmi PDF"
                  className="font-display group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#31543A] text-white hover:bg-[#26432E] border-2 border-[#171717] dark:border-white/20 transition-all duration-150 shadow-md active:scale-95 cursor-pointer"
                >
                  <span>UNDUH DOKUMEN CV (PDF)</span>
                  <span className="w-9 h-9 rounded-full bg-[#F9B51B] dark:bg-[#d1fe17] text-[#171717] flex items-center justify-center font-bold text-sm shrink-0 transition-transform group-hover:translate-y-0.5">
                    ↓
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. LET'S WORK TOGETHER & CONTACT CHANNELS (Steve Mengelkoch style)        */}
      {/* ========================================================================= */}
      <section
        id="contact"
        className="py-20 md:py-28 bg-[#171717] text-white transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Top Banner Headline */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="font-display inline-flex items-center gap-2 text-xs font-semibold tracking-[0.08em] uppercase text-[#F9B51B] dark:text-[#d1fe17]">
                <span aria-hidden="true">✦</span>
                <span>LET'S WORK TOGETHER</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white leading-[1.12]">
                Tertarik Bekerja Sama atau Rekrutmen?
              </h2>
            </div>

            {/* Button for direct WhatsApp */}
            <div className="shrink-0">
              <a
                href="https://api.whatsapp.com/send?phone=6285656381485"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display group inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#F9B51B] dark:bg-[#d1fe17] text-[#171717] hover:bg-[#E5A417] transition-all duration-150 shadow-md active:scale-95 cursor-pointer"
              >
                <span>HUBUNGI VIA WHATSAPP</span>
                <span className="w-9 h-9 rounded-full bg-[#171717] text-white flex items-center justify-center font-bold text-sm shrink-0 transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          </div>

          {/* 4 Contact Channels (Clean Open Editorial Columns, Zero Lines) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactData.map((contact) => (
              <a
                key={contact.platform}
                href={contact.actionUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="space-y-2 group cursor-pointer block"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-semibold tracking-[0.08em] text-[#F9B51B] dark:text-[#d1fe17] uppercase">
                    {contact.label}
                  </span>
                  <span className="text-white/60 group-hover:text-[#F9B51B] dark:text-[#d1fe17] text-sm font-bold transition-colors">
                    &rarr;
                  </span>
                </div>

                <div>
                  <h4 className="font-display text-base sm:text-lg font-semibold text-white group-hover:text-[#F9B51B] dark:text-[#d1fe17] transition-colors break-words">
                    {contact.value}
                  </h4>
                  <p className="font-info text-xs text-white/60 mt-1 font-normal">
                    {contact.placeholderText}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
