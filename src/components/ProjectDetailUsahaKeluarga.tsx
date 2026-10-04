import React, { useEffect } from 'react';
import { portfolioImages } from '../assets/images';
import { EditableImage } from './EditableImage';

interface ProjectDetailUsahaKeluargaProps {
  onBack: () => void;
}

export const ProjectDetailUsahaKeluarga: React.FC<ProjectDetailUsahaKeluargaProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const keyRoles = [
    {
      title: 'Pelayanan Pelanggan Langsung',
      desc: 'Menyapa pelanggan dengan ramah, mendengarkan kebutuhan barang harian, dan memberikan rekomendasi produk yang tepat.',
      icon: (
        <svg className="w-5 h-5 text-[#F9B51B] dark:text-[#d1fe17]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
    },
    {
      title: 'Pengelolaan Stok & Cek Fisik',
      desc: 'Mencatat ketersediaan barang di etalase, memantau tanggal kadaluarsa, menyortir barang retur, dan mendata barang yang perlu diisi ulang.',
      icon: (
        <svg className="w-5 h-5 text-[#F9B51B] dark:text-[#d1fe17]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      ),
    },
    {
      title: 'Penataan Display & Kerapian Toko',
      desc: 'Menjaga kebersihan rak dan etalase, menyusun barang sesuai kategori agar mudah dijangkau pelanggan, dan mengelompokkan label harga.',
      icon: (
        <svg className="w-5 h-5 text-[#F9B51B] dark:text-[#d1fe17]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      ),
    },
    {
      title: 'Transaksi Tunai & Pembukuan Sederhana',
      desc: 'Melayani pembayaran tunai, menghitung uang kembalian secara teliti, serta mencatat rekap pemasukan kas harian keluarga.',
      icon: (
        <svg className="w-5 h-5 text-[#F9B51B] dark:text-[#d1fe17]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const competencies = [
    { label: 'Ketelitian Transaksi', value: 'Terbiasa menghitung uang tunai & cek fisik barang' },
    { label: 'Kedisiplinan Operasional', value: 'Konsisten membuka dan menjaga toko tepat waktu sejak 2016' },
    { label: 'Orientasi Pelanggan', value: 'Memahami karakter dan kebutuhan pembeli langganan di lingkungan sekitar' },
    { label: 'Komunikasi Ramah', value: 'Menjaga hubungan baik sehingga pelanggan nyaman kembali berbelanja' },
  ];

  return (
    <article className="min-h-screen py-10 md:py-16 bg-[#FFFFFF] dark:bg-[#121212] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Main Header Information */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl sm:text-5xl font-semibold text-[#F9B51B] dark:text-[#d1fe17]">03</span>
            <span className="font-info text-xs font-normal tracking-wider text-[#666666] dark:text-[#A3A3A3] uppercase">
              2016 — Sekarang (±8 Tahun)
            </span>
          </div>
          <div className="font-info text-xs font-normal tracking-widest text-[#F9B51B] dark:text-[#d1fe17] uppercase">
            OPERASIONAL &amp; PELAYANAN LANGSUNG
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#171717] dark:text-white tracking-tight leading-[1.08]">
            Pengelolaan Usaha Keluarga &amp; Ritel Fisik
          </h1>
          <p className="font-body text-base sm:text-lg text-[#666666] dark:text-[#A3A3A3] leading-[1.65] pt-1 font-normal text-justify">
            Membantu operasional usaha keluarga sejak 2016 secara konsisten. Pengalaman ini membentuk fondasi etos kerja nyata dalam melayani pembeli, penataan display toko, pengecekan stok fisik, hingga ketelitian transaksi kasir tunai.
          </p>
        </div>

        {/* PERAN & AKTIVITAS HARIAN TOKO (LINEAR WORKFLOW LIST) */}
        <div className="space-y-4 pt-6 border-t border-[#171717]/15 dark:border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#F9B51B] dark:bg-[#d1fe17]" />
            <h3 className="font-display text-xs sm:text-sm font-semibold text-[#171717] dark:text-white uppercase tracking-wider">
              Peran &amp; Aktivitas Harian Toko
            </h3>
          </div>

          <div className="divide-y divide-[#171717]/10 dark:divide-white/10 rounded-3xl border-2 border-[#171717] dark:border-[#333333] overflow-hidden bg-[#F5F5F5] dark:bg-[#1E1E1E] shadow-[4px_4px_0px_#171717]">
            {keyRoles.map((role, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-4 hover:bg-white dark:hover:bg-[#252528] transition-colors"
              >
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-display text-sm font-semibold text-[#F9B51B] dark:text-[#d1fe17]">
                    0{idx + 1}.
                  </span>
                  <div className="p-2 rounded-xl bg-white dark:bg-[#121212] border border-[#171717]/20 dark:border-white/10">
                    {role.icon}
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="font-display text-sm sm:text-base font-semibold text-[#171717] dark:text-white">
                    {role.title}
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] leading-relaxed font-normal">
                    {role.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EDITORIAL VISUAL TOKO & RELEVANSI DUNIA RETAIL */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch pt-6 border-t border-[#171717]/15 dark:border-white/10">
          {/* Visual Store Box */}
          <div className="w-full lg:w-5/12 rounded-3xl overflow-hidden border-2 border-[#171717] dark:border-[#333333] bg-[#F5F5F5] dark:bg-[#1E1E1E] p-5 flex flex-col justify-between space-y-4 shadow-[4px_4px_0px_#171717]">
            <EditableImage
              storageKey="family_business_visual_v2"
              defaultSrc={portfolioImages.retailStoreInterior}
              alt="Operasional Depot Air Minum Isi Ulang Keluarga"
              aspectRatioClass="aspect-4/3"
              containerClassName="rounded-2xl overflow-hidden bg-white dark:bg-black border border-[#171717]/10"
              imgClassName="w-full h-full object-cover"
              buttonPosition="top-right"
            />
            <div className="p-4 bg-white dark:bg-[#121212] border-2 border-[#171717] dark:border-[#333333] rounded-2xl text-xs space-y-1">
              <span className="font-display font-semibold text-[#171717] dark:text-white block">
                Operasional Depot Air Minum &amp; Pengisian Galon
              </span>
              <p className="font-body text-[#666666] dark:text-[#A3A3A3] text-xs leading-relaxed font-normal">
                Praktik langsung pengisian air minum isi ulang higienis, pengoperasian mesin dispenser reverse osmosis, pengecekan galon, dan kesigapan melayani saat pelanggan membutuhkan bantuan.
              </p>
            </div>
          </div>

          {/* Relevansi & Hasil Pembelajaran Toko */}
          <div className="w-full lg:w-7/12 bg-[#F5F5F5] dark:bg-[#1E1E1E] rounded-3xl border-2 border-[#171717] dark:border-[#333333] p-6 sm:p-8 flex flex-col justify-between space-y-5 shadow-[4px_4px_0px_#171717]">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#31543A]" />
                <h3 className="font-display text-xs sm:text-sm font-semibold text-[#171717] dark:text-white uppercase tracking-wider">
                  Relevansi Kompetensi untuk Dunia Retail Modern
                </h3>
              </div>
              <p className="font-body text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] leading-relaxed font-normal">
                Pengalaman nyata mengelola usaha keluarga memberikan keunggulan kesiapan mental dan ketangkasan kerja. Hal ini memudahkan adaptasi langsung pada peran Pramuniaga, Kasir, maupun Stocker di minimarket modern (seperti Alfamart, Indomaret, dsb.).
              </p>
            </div>

            {/* List Kompetensi Nyata */}
            <div className="space-y-2.5 pt-2 border-t border-[#171717]/15 dark:border-[#2A2A2A]">
              {competencies.map((c, i) => (
                <div
                  key={i}
                  className="p-4 bg-white dark:bg-[#121212] border-2 border-[#171717] dark:border-[#333333] rounded-2xl flex items-start gap-3 text-xs"
                >
                  <span className="text-[#31543A] font-semibold text-sm leading-none mt-0.5">✓</span>
                  <div>
                    <span className="font-display font-semibold text-[#171717] dark:text-white block">
                      {c.label}
                    </span>
                    <span className="font-body text-[#666666] dark:text-[#A3A3A3] text-xs leading-relaxed font-normal">
                      {c.value}
                    </span>
                  </div>
                </div>
              ))}
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
    </article>
  );
};
