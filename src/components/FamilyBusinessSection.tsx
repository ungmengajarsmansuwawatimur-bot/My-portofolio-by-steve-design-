import React, { useState } from 'react';
import { portfolioImages } from '../assets/images';
import { EditableImage } from './EditableImage';

export const FamilyBusinessSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const keyRoles = [
    {
      title: 'Pelayanan Pelanggan Langsung',
      desc: 'Menyapa pelanggan dengan ramah, mendengarkan kebutuhan barang harian, dan memberikan rekomendasi produk yang tepat.',
      icon: (
        <svg className="w-5 h-5 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
    },
    {
      title: 'Pengelolaan Stok & Cek Fisik',
      desc: 'Mencatat ketersediaan barang di etalase, memantau tanggal kadaluarsa, menyortir barang retur, dan mendata barang yang perlu diisi ulang.',
      icon: (
        <svg className="w-5 h-5 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      ),
    },
    {
      title: 'Penataan Display & Kerapian Toko',
      desc: 'Menjaga kebersihan rak dan etalase, menyusun barang sesuai kategori agar mudah dijangkau pelanggan, dan mengelompokkan label harga.',
      icon: (
        <svg className="w-5 h-5 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      ),
    },
    {
      title: 'Transaksi Tunai & Pembukuan Sederhana',
      desc: 'Melayani pembayaran tunai, menghitung uang kembalian secara teliti, serta mencatat rekap pemasukan kas harian keluarga.',
      icon: (
        <svg className="w-5 h-5 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
    <div className="space-y-8 pt-12 border-t border-[#171717]/15 dark:border-white/10">
      {/* Header & Detail Usaha Keluarga */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="text-4xl sm:text-5xl font-black text-[#F9B51B] dark:text-[#d1fe17]">03</span>
            <span className="text-xs font-bold tracking-wider text-[#666666] dark:text-[#A3A3A3] uppercase">
              2016 — Sekarang (±8 Tahun)
            </span>
          </div>
          <div className="text-xs font-black tracking-widest text-[#F9B51B] dark:text-[#d1fe17] uppercase">
            OPERASIONAL &amp; PELAYANAN LANGSUNG
          </div>
          <h3 className="text-3xl sm:text-4xl font-black text-[#171717] dark:text-white tracking-tight">
            Pengelolaan Usaha Keluarga &amp; Ritel Fisik
          </h3>
          <p className="text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
            Membantu operasional usaha keluarga sejak 2016 secara konsisten. Pengalaman ini membentuk fondasi etos kerja nyata dalam melayani pembeli, penataan display toko, pengecekan stok fisik, hingga ketelitian transaksi kasir tunai.
          </p>
        </div>

        {/* Tombol Toggle Buka/Tutup Detail Usaha */}
        <div className="shrink-0 flex items-center md:self-center">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="group inline-flex items-center gap-2.5 text-xs sm:text-sm font-black text-[#F9B51B] dark:text-[#d1fe17] hover:text-[#171717] dark:hover:text-white cursor-pointer transition-colors"
          >
            <span className="hover:underline">{isOpen ? 'Sembunyikan Detail Usaha' : 'Buka Detail Pengelolaan Usaha'}</span>
            <span className="w-7 h-7 rounded-full bg-[#F9B51B] dark:bg-[#d1fe17] text-[#171717] flex items-center justify-center font-bold text-xs shrink-0 shadow-xs transition-transform group-hover:scale-105">
              {isOpen ? '↑' : '↓'}
            </span>
          </button>
        </div>
      </div>

      {/* Konten Terbuka (4 Peran Lapangan, Visual Toko, dan Relevansi Kompetensi) */}
      {isOpen && (
        <div className="space-y-8 pt-4 border-t border-[#171717]/15 dark:border-[#2A2A2A] animate-fadeIn">
          {/* 4 Komponen Kotak Peran & Aktivitas Lapangan */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#F9B51B] dark:bg-[#d1fe17]" />
              <h4 className="text-xs sm:text-sm font-black text-[#171717] dark:text-white uppercase tracking-wider">
                Peran &amp; Aktivitas Harian Toko
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              {keyRoles.map((role, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#F5F5F5] dark:bg-[#1E1E1E] rounded-2xl border-2 border-[#171717] dark:border-[#333333] space-y-2 shadow-[3px_3px_0px_#171717]"
                >
                  <div className="flex items-center gap-2 text-[#F9B51B] dark:text-[#d1fe17]">
                    <span className="text-xs font-black text-[#F9B51B] dark:text-[#d1fe17]">0{idx + 1}.</span>
                    <h4 className="font-black text-[#171717] dark:text-white text-xs">
                      {role.title}
                    </h4>
                  </div>
                  <p className="text-[#666666] dark:text-[#A3A3A3] leading-relaxed text-[11px]">
                    {role.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Visual & Relevansi Dunia Retail */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Visual Store Box */}
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border-2 border-[#171717] dark:border-[#333333] bg-[#F5F5F5] dark:bg-[#1E1E1E] p-4 flex flex-col justify-between space-y-4 shadow-[4px_4px_0px_#171717]">
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
                <span className="font-black text-[#171717] dark:text-white block">
                  Operasional Depot Air Minum &amp; Pengisian Galon
                </span>
                <p className="text-[#666666] dark:text-[#A3A3A3] text-[11px] leading-relaxed">
                  Praktik langsung pengisian air minum isi ulang higienis, pengoperasian kran mesin dispenser air, pengecekan galon, serta melayani konsumen secara langsung dengan ramah dan cekatan.
                </p>
              </div>
            </div>

            {/* Relevansi & Hasil Pembelajaran Toko */}
            <div className="lg:col-span-7 bg-[#F5F5F5] dark:bg-[#1E1E1E] rounded-3xl border-2 border-[#171717] dark:border-[#333333] p-6 sm:p-7 flex flex-col justify-between space-y-5 shadow-[4px_4px_0px_#171717]">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#31543A]" />
                  <h4 className="text-xs sm:text-sm font-black text-[#171717] dark:text-white uppercase tracking-wider">
                    Relevansi Kompetensi untuk Dunia Retail Modern
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
                  Pengalaman nyata mengelola usaha keluarga memberikan keunggulan kesiapan mental dan ketangkasan kerja. Hal ini memudahkan adaptasi langsung pada peran Pramuniaga, Kasir, maupun Stocker di minimarket modern (seperti Alfamart, Indomaret, dsb.).
                </p>
              </div>

              {/* List Kompetensi Nyata */}
              <div className="space-y-2.5 pt-2 border-t border-[#171717]/15 dark:border-[#2A2A2A]">
                {competencies.map((c, i) => (
                  <div
                    key={i}
                    className="p-3.5 bg-white dark:bg-[#121212] border-2 border-[#171717] dark:border-[#333333] rounded-2xl flex items-start gap-3 text-xs"
                  >
                    <span className="text-[#31543A] font-black text-sm leading-none mt-0.5">✓</span>
                    <div>
                      <span className="font-black text-[#171717] dark:text-white block">
                        {c.label}
                      </span>
                      <span className="text-[#666666] dark:text-[#A3A3A3] text-[11px] leading-relaxed">
                        {c.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
