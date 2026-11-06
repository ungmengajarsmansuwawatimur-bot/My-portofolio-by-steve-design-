import React from 'react';
import { motion } from 'motion/react';
import {
  candidateProfile,
  experienceData,
} from '../data/portfolioData';

interface AboutExperienceProps {
  onOpenStoreModal?: () => void;
}

const AnimatedCounter: React.FC<{
  target: number;
  suffix?: string;
  duration?: number;
}> = ({ target, suffix = '', duration = 3800 }) => {
  const [count, setCount] = React.useState(0);
  const containerRef = React.useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = React.useState(false);

  React.useEffect(() => {
    // Only start counting when user scrolls to this section
    const el = containerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasStarted) {
            setHasStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    } else {
      setHasStarted(true);
    }
  }, [hasStarted]);

  React.useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      
      // Gentle quadratic ease-out so counting numbers remain clearly visible and unhurried
      const ease = 1 - Math.pow(1 - progress, 2);
      setCount(Math.round(ease * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, target, duration]);

  return (
    <span ref={containerRef} className="tabular-nums font-bold">
      {count}
      {suffix}
    </span>
  );
};

const backgroundItems = [
  {
    id: 'bg-1',
    type: 'experience' as const,
    category: 'Pengalaman Kerja',
    period: 'Desember 2024 s.d. Sekarang',
    periodBadge: 'Layanan Mandiri',
    title: 'Pelayanan & Pengelolaan Jasa Digital',
    subtitle: 'Komunikasi Klien & Publikasi Naskah',
    description:
      'Melayani klien dan mahasiswa melalui WhatsApp untuk kebutuhan naskah, publikasi artikel, dan pembuatan website, mulai dari koordinasi pengerjaan, transparansi tarif, hingga revisi tuntas.',
    tags: ['Komunikasi Konsumen', 'Publikasi Media', 'Manajemen Revisi', 'Pelayanan Cepat'],
    isFeatured: true,
    icon: (
      <svg className="w-10 h-10 sm:w-12 sm:h-12 fill-[#26492F] dark:fill-[#d1fe17] transition-colors" viewBox="0 0 24 24">
        <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6zm5.5 2.5l-2.5 2.5 2.5 2.5 1.41-1.41L9.33 11l1.58-1.09L9.5 8.5zm5 0l-1.41 1.41L14.67 11l-1.58 1.09L14.5 13.5l2.5-2.5-2.5-2.5z" />
      </svg>
    ),
  },
  {
    id: 'bg-2',
    type: 'experience' as const,
    category: 'Pengalaman Kerja',
    period: '2016 s.d. Sekarang (± 10 Tahun)',
    periodBadge: 'Operasional',
    title: 'Pelayanan & Operasional Harian',
    subtitle: 'Pelayanan Langsung & Operasional',
    description:
      'Terlibat dalam operasional harian sejak 2016, melayani banyak orang secara langsung, memberikan informasi yang jelas, mengelola administrasi harian, serta menjaga kerapian kerja.',
    tags: ['Pelayanan Langsung', 'Administrasi Harian', 'Operasional', 'Komunikasi Ramah'],
    isFeatured: false,
    icon: (
      <svg className="w-10 h-10 sm:w-12 sm:h-12 fill-[#26492F] dark:fill-[#d1fe17] transition-colors" viewBox="0 0 24 24">
        <path d="M4 4h16l1 4v12a1 1 0 01-1 1H4a1 1 0 01-1-1V8l1-4zm1 5v10h14V9H5zm2-3l-.5 2h15l-.5-2H7zm2 6h2v3H9v-3zm4 0h2v3h-2v-3z" />
      </svg>
    ),
  },
  {
    id: 'bg-3',
    type: 'experience' as const,
    category: 'Pengalaman Kerja & Pembelajaran',
    period: 'Februari 2025 s.d. Sekarang',
    periodBadge: 'Pengembangan Mandiri',
    title: 'Pengembangan Standar Pelayanan',
    subtitle: 'Etika Layanan & Tata Kelola Kerja',
    description:
      'Mempelajari tata kelola pelayanan secara terarah, meliputi sikap ramah, ketertiban kerja, ketelitian dalam pencatatan, dan pemanfaatan sistem digital.',
    tags: ['Customer Service', 'Etika Layanan', 'Ketelitian Data', 'Sistem Digital'],
    isFeatured: false,
    icon: (
      <svg className="w-10 h-10 sm:w-12 sm:h-12 fill-[#26492F] dark:fill-[#d1fe17] transition-colors" viewBox="0 0 24 24">
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
      </svg>
    ),
  },
];

export const AboutExperience: React.FC<AboutExperienceProps> = () => {
  const filteredItems = backgroundItems;

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F5F5F5] dark:bg-[#18181B] border-t border-[#171717]/15 dark:border-white/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* ========================================================================= */}
        {/* PART 1: ABOUT TAUFIK HIDAYAT MALII (Steve Mengelkoch Screenshots 2 & 3)   */}
        {/* ========================================================================= */}
        <div className="space-y-12">
          {/* Section Kicker, Title & Narrative Bio as One Element (delay 100ms) */}
          <div
            className="space-y-6 sm:space-y-8 max-w-5xl 2xl:max-w-6xl fade-in-up"
            style={{ '--delay': '100ms' } as React.CSSProperties}
          >
            <div className="space-y-3">
              <div className="font-body inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.08em] uppercase text-[#F9B51B] dark:text-[#d1fe17] transition-colors">
                <span aria-hidden="true">✦</span>
                <span>ABOUT</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-[#171717] dark:text-white leading-[1.12]">
                About Taufik Hidayat Malii
              </h2>
            </div>

            <div className="font-body space-y-3.5 sm:space-y-4 text-sm sm:text-base md:text-lg text-[#666666] dark:text-[#A3A3A3] leading-[1.65] font-normal text-refined-justify">
              <p className="text-refined-justify">
                Digital Admin dan Web Creator yang terbiasa bekerja dengan sistem, data, dan detail. Telah merancang program informasi arsip untuk membuat administrasi lebih efisien, sekaligus membantu puluhan klien dan mahasiswa melalui layanan digital.
              </p>
              <p className="text-refined-justify">
                Lebih dari 8 tahun bekerja langsung dengan banyak orang membentuk pribadi yang komunikatif, teliti, dan bertanggung jawab. Terbiasa menghadapi beragam karakter dan menyelesaikan tugas dengan rapi, dengan keyakinan bahwa pelayanan yang baik berawal dari membangun kepercayaan dan kepuasan.
              </p>
            </div>
          </div>

          {/* 3 Steve Mengelkoch Signature Stat Columns as One Element (delay 500ms) */}
          <div className="max-w-5xl 2xl:max-w-6xl">
            <div
              className="grid grid-cols-3 divide-x divide-[#171717]/10 dark:divide-white/10 py-5 sm:py-8 border-y border-[#171717]/15 dark:border-white/10 text-center fade-in-up"
              style={{ '--delay': '500ms' } as React.CSSProperties}
            >
              <div className="flex flex-col items-center justify-center text-center px-1 xs:px-2 sm:px-4">
                <span className="font-info text-[9.5px] xs:text-xs sm:text-sm font-bold text-[#666666] dark:text-[#A3A3A3] block uppercase tracking-wide text-center">
                  Klien Dilayani
                </span>
                <span className="font-info text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] dark:text-white tracking-tight mt-1 sm:mt-1.5 block text-center tabular-nums">
                  <AnimatedCounter target={250} suffix="+" duration={4200} />
                </span>
              </div>

              <div className="flex flex-col items-center justify-center text-center px-1 xs:px-2 sm:px-4">
                <span className="font-info text-[9.5px] xs:text-xs sm:text-sm font-bold text-[#666666] dark:text-[#A3A3A3] block uppercase tracking-wide text-center">
                  Website Live
                </span>
                <span className="font-info text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] dark:text-white tracking-tight mt-1 sm:mt-1.5 block text-center tabular-nums">
                  <AnimatedCounter target={18} duration={3600} />
                </span>
              </div>

              <div className="flex flex-col items-center justify-center text-center px-1 xs:px-2 sm:px-4">
                <span className="font-info text-[9.5px] xs:text-xs sm:text-sm font-bold text-[#666666] dark:text-[#A3A3A3] block uppercase tracking-wide text-center">
                  Komitmen Kerja
                </span>
                <span className="font-info text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] dark:text-white tracking-tight mt-1 sm:mt-1.5 block text-center tabular-nums">
                  <AnimatedCounter target={100} suffix="%" duration={3800} />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* EDUCATION & EXPERIENCE SECTIONS: Balanced Responsive Grid                 */}
        {/* Mobile & Tablet: Clean Single-Column Flow                                 */}
        {/* Laptop & Desktop: Balanced 5-Col Education + 7-Col Experience Side-by-Side */}
        {/* ========================================================================= */}
        <div className="pt-8 sm:pt-12 border-t border-[#171717]/15 dark:border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* EDUCATION SECTION (lg:col-span-5) - delay 100ms */}
            <div
              id="credentials"
              className="lg:col-span-5 space-y-6 sm:space-y-8 fade-in-up"
              style={{ '--delay': '100ms' } as React.CSSProperties}
            >
              {/* Header: Yellow/Amber Circular Badge with White Mortarboard Cap + "Education" */}
              <div className="flex items-center gap-3.5 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#F59E0B] flex items-center justify-center shrink-0 shadow-sm">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                  </svg>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#9A5B00] dark:text-[#F9B51B] tracking-tight">
                  Education
                </h2>
              </div>

              {/* List of Education Cards */}
              <div className="space-y-4 sm:space-y-5">
                {/* Card 1: S1 Bimbingan & Konseling */}
                <div className="bg-white dark:bg-[#1E1E22] border border-[#171717]/12 dark:border-white/10 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs hover:shadow-md hover:border-[#F59E0B]/60 transition-all duration-200">
                  <div className="flex items-center justify-between gap-3 sm:gap-4">
                    <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                      <div className="shrink-0 flex items-center justify-center">
                        <picture className="flex items-center justify-center">
                          <source srcSet="/assets/icons/education_degree_cap.avif" type="image/avif" />
                          <source srcSet="/assets/icons/education_degree_cap.webp" type="image/webp" />
                          <img
                            src="/assets/icons/education_degree_cap.png"
                            alt="Ikon Bimbingan & Konseling"
                            width={36}
                            height={36}
                            loading="lazy"
                            decoding="async"
                            className="w-8 h-8 sm:w-9 sm:h-9 object-contain select-none dark:drop-shadow-[0_0_3px_rgba(245,158,11,0.4)]"
                          />
                        </picture>
                      </div>
                      <div className="space-y-0.5 min-w-0">
                        <h3 className="font-heading text-base sm:text-lg md:text-xl font-bold text-[#171717] dark:text-white leading-snug">
                          Bimbingan &amp; Konseling
                        </h3>
                        <p className="font-body text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] font-normal">
                          Universitas Negeri Gorontalo · 2022 – Sekarang
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 hidden xs:inline-flex font-body text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F59E0B]/10 text-[#9A5B00] dark:bg-[#F59E0B]/20 dark:text-[#F9B51B]">
                      Mahasiswa Aktif
                    </span>
                  </div>
                </div>

                {/* Card 2: SMA Negeri 1 Kabila */}
                <div className="bg-white dark:bg-[#1E1E22] border border-[#171717]/12 dark:border-white/10 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs hover:shadow-md hover:border-[#F59E0B]/60 transition-all duration-200">
                  <div className="flex items-center justify-between gap-3 sm:gap-4">
                    <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                      <div className="shrink-0 flex items-center justify-center">
                        <picture className="flex items-center justify-center">
                          <source srcSet="/assets/icons/education_open_book.avif" type="image/avif" />
                          <source srcSet="/assets/icons/education_open_book.webp" type="image/webp" />
                          <img
                            src="/assets/icons/education_open_book.png"
                            alt="Ikon Pendidikan SMA IPS"
                            width={36}
                            height={36}
                            loading="lazy"
                            decoding="async"
                            className="w-8 h-8 sm:w-9 sm:h-9 object-contain select-none dark:drop-shadow-[0_0_3px_rgba(245,158,11,0.4)]"
                          />
                        </picture>
                      </div>
                      <div className="space-y-0.5 min-w-0">
                        <h3 className="font-heading text-base sm:text-lg md:text-xl font-bold text-[#171717] dark:text-white leading-snug">
                          Ilmu Pengetahuan Sosial
                        </h3>
                        <p className="font-body text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] font-normal">
                          SMA Negeri 1 Kabila · 2020 – 2022
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 hidden xs:inline-flex font-body text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-[#666666] dark:text-[#A3A3A3]">
                      Lulus
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* EXPERIENCE SECTION (lg:col-span-7) */}
            <div id="background" className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Header: Yellow/Amber Circular Badge with White Briefcase + "Experience" (delay 250ms) */}
              <div
                className="flex items-center gap-3.5 sm:gap-4 mb-4 sm:mb-6 fade-in-up"
                style={{ '--delay': '250ms' } as React.CSSProperties}
              >
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#F59E0B] flex items-center justify-center shrink-0 shadow-sm">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                  </svg>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#9A5B00] dark:text-[#F9B51B] tracking-tight">
                  Experience
                </h2>
              </div>

              {/* List of Experience Cards (staggered delay 100ms, 200ms, 300ms) */}
              <div className="space-y-4 sm:space-y-5">
                {filteredItems.map((item, index) => {
                  // User-provided distinct icons for each experience card
                  const renderExperienceIcon = () => {
                    if (item.id === 'bg-1') {
                      // Client digital consultation / chat service (Laptop + Megaphone)
                      return (
                        <div className="shrink-0 flex items-center justify-center mt-0.5">
                          <picture className="flex items-center justify-center">
                            <source srcSet="/assets/icons/experience_digital_megaphone.avif" type="image/avif" />
                            <source srcSet="/assets/icons/experience_digital_megaphone.webp" type="image/webp" />
                            <img
                              src="/assets/icons/experience_digital_megaphone.png"
                              alt="Ikon Pelayanan Jasa Digital"
                              width={36}
                              height={36}
                              loading="lazy"
                              decoding="async"
                              className="w-8 h-8 sm:w-9 sm:h-9 object-contain select-none dark:drop-shadow-[0_0_3px_rgba(245,158,11,0.4)]"
                            />
                          </picture>
                        </div>
                      );
                    }
                    if (item.id === 'bg-2') {
                      // Physical storefront / direct daily operations
                      return (
                        <div className="shrink-0 flex items-center justify-center mt-0.5">
                          <picture className="flex items-center justify-center">
                            <source srcSet="/assets/icons/experience_storefront.avif" type="image/avif" />
                            <source srcSet="/assets/icons/experience_storefront.webp" type="image/webp" />
                            <img
                              src="/assets/icons/experience_storefront.png"
                              alt="Ikon Pelayanan &amp; Operasional Harian"
                              width={36}
                              height={36}
                              loading="lazy"
                              decoding="async"
                              className="w-8 h-8 sm:w-9 sm:h-9 object-contain select-none dark:drop-shadow-[0_0_3px_rgba(245,158,11,0.4)]"
                            />
                          </picture>
                        </div>
                      );
                    }
                    // bg-3: Modern service standard development
                    return (
                      <div className="shrink-0 flex items-center justify-center mt-0.5">
                        <picture className="flex items-center justify-center">
                          <source srcSet="/assets/icons/experience_retail_cart.avif" type="image/avif" />
                          <source srcSet="/assets/icons/experience_retail_cart.webp" type="image/webp" />
                          <img
                            src="/assets/icons/experience_retail_cart.png"
                            alt="Ikon Pengembangan Standar Pelayanan"
                            width={36}
                            height={36}
                            loading="lazy"
                            decoding="async"
                            className="w-8 h-8 sm:w-9 sm:h-9 object-contain select-none dark:drop-shadow-[0_0_3px_rgba(245,158,11,0.4)]"
                          />
                        </picture>
                      </div>
                    );
                  };

                  return (
                    <div
                      key={item.id}
                      className="bg-white dark:bg-[#1E1E22] border border-[#171717]/12 dark:border-white/10 rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs hover:shadow-md hover:border-[#F59E0B]/60 transition-all duration-200 fade-in-up"
                      style={{ '--delay': `${(index + 1) * 100}ms` } as React.CSSProperties}
                    >
                      <div className="flex items-start gap-3.5 sm:gap-4 min-w-0">
                        {renderExperienceIcon()}
                        <div className="space-y-1 min-w-0 flex-1">
                          <h3 className="font-heading text-base sm:text-lg md:text-xl font-bold text-[#171717] dark:text-white leading-snug">
                            {item.title}
                          </h3>
                          <p className="font-body text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] font-normal">
                            {item.subtitle} · {item.period}
                          </p>
                          <p className="font-body text-xs sm:text-sm text-[#555555] dark:text-[#CCCCCC] leading-relaxed pt-1 text-refined-justify">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

