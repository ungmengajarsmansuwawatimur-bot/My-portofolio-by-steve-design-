import React from 'react';
import { portfolioImages } from '../assets/images';

interface CapabilitiesProps {
  className?: string;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ className = '' }) => {
  const services = [
    {
      id: 'srv-1',
      title: 'Customer Service & Pelayanan Toko',
      description:
        'Melayani konsumen dengan ramah dan komunikatif, mengidentifikasi kebutuhan pembeli, memberikan rekomendasi barang, serta menangani keluhan pelanggan dengan tenang dan solutif.',
      icon: (
        <svg className="w-6 h-6 text-[#171717] dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      hasFloatingImage: false,
    },
    {
      id: 'srv-2',
      title: 'Operasional Retail & Penataan Produk',
      description:
        'Mendukung operasional harian area penjualan, penataan rak display sesuai prinsip planogram, rotasi stok sistem FIFO (First-In First-Out), serta menjaga kerapian dan kebersihan lingkungan toko.',
      icon: (
        <svg className="w-6 h-6 text-[#171717] dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.614A2.993 2.993 0 009 9.35c.704 0 1.365-.24 1.89-.646a3.002 3.002 0 004.22 0c.525.406 1.186.646 1.89.646a2.993 2.993 0 002.36-.964 3.001 3.001 0 003.75.614m-16.5 0a3 3 0 01-.62-1.928L3.75 4.5A2.25 2.25 0 016 2.25h12A2.25 2.25 0 0120.25 4.5l.87 2.922a3 3 0 01-.62 1.928" />
        </svg>
      ),
      hasFloatingImage: true,
      imageUrl: portfolioImages.cashierHero,
    },
    {
      id: 'srv-3',
      title: 'Kasir & Transaksi POS',
      description:
        'Mengoperasikan mesin kasir dan sistem Point of Sale (POS), mencatat pembelian barang, melayani transaksi tunai dan non-tunai (QRIS & Transfer), serta melakukan penghitungan kas harian secara akurat.',
      icon: (
        <svg className="w-6 h-6 text-[#171717] dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      ),
      hasFloatingImage: false,
    },
    {
      id: 'srv-4',
      title: 'Manajemen Stok & Administrasi Dokumen',
      description:
        'Pencatatan inventaris barang masuk dan keluar, stock opname berkala, verifikasi berkas terstruktur (pengalaman perancangan aplikasi administrasi sekolah), serta penguasaan aplikasi komputer operasional.',
      icon: (
        <svg className="w-6 h-6 text-[#171717] dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      hasFloatingImage: false,
    },
  ];

  return (
    <section id="services" className={`py-16 md:py-24 bg-white dark:bg-[#121212] transition-colors duration-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Steve Mengelkoch Signature Layout) */}
        <div className="text-center space-y-2 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-black tracking-widest uppercase text-[#F9B51B] dark:text-[#d1fe17] transition-colors">
            <span aria-hidden="true">✦</span>
            <span>WHAT I DO</span>
            <span aria-hidden="true">✦</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#171717] dark:text-white">
            Services &amp; Specialties
          </h2>
        </div>

        {/* Steve Mengelkoch Clean Service List Rows with Divider Lines */}
        <div className="divide-y divide-[#E9E9E9] dark:divide-[#2A2A2A] border-y border-[#E9E9E9] dark:border-[#2A2A2A]">
          {services.map((item, idx) => (
            <div
              key={item.id}
              className="group py-8 sm:py-10 transition-colors hover:bg-[#F5F5F5]/60 dark:hover:bg-[#1E1E1E]/50 px-4 sm:px-6 rounded-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Col 1-5: Icon + Title */}
                <div className="md:col-span-5 flex items-center gap-4 sm:gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#F5F5F5] dark:bg-[#1E1E1E] border-2 border-[#171717] dark:border-[#333333] flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#F9B51B] dark:bg-[#d1fe17] transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#F9B51B] dark:text-[#d1fe17] block">0{idx + 1}</span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#171717] dark:text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Col 6-10: Description + Optional Floating Preview */}
                <div className="md:col-span-6 relative">
                  <p className="text-sm sm:text-base text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
                    {item.description}
                  </p>
                  {item.hasFloatingImage && item.imageUrl && (
                    <div className="hidden lg:block absolute -top-8 right-0 w-32 h-20 rounded-xl overflow-hidden border-2 border-[#171717] shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform">
                      <img
                        src={item.imageUrl}
                        alt="Display preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Col 11-12: Steve's Circular Arrow Action Button */}
                <div className="md:col-span-1 flex justify-end">
                  <a
                    href="#work"
                    className="w-12 h-12 rounded-full border-2 border-[#171717] dark:border-white bg-white dark:bg-[#1E1E1E] group-hover:bg-[#F9B51B] dark:bg-[#d1fe17] dark:group-hover:bg-[#F9B51B] dark:bg-[#d1fe17] group-hover:text-[#171717] text-[#171717] dark:text-white flex items-center justify-center transition-all shadow-sm active:scale-90"
                    aria-label={`Lihat karya terkait ${item.title}`}
                  >
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

