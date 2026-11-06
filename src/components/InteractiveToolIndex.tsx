import React from 'react';
import { OfficialAppIcon } from './OfficialAppIcon';
import { toolsData } from '../data/portfolioData';

export const InteractiveToolIndex: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Grid Formasi (4 baris x 4 kolom = 16 aplikasi seimbang) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3.5 xs:gap-4 sm:gap-5 md:gap-6 items-stretch">
        {toolsData.map((tool) => (
          <div
            key={tool.name}
            className="group flex flex-col items-center justify-between transition-all duration-300"
          >
            {/* Kartu Persegi Putih dengan Sudut Membulat */}
            <div className="w-full bg-white rounded-xl xs:rounded-2xl sm:rounded-3xl p-3 xs:p-3.5 sm:p-5 flex flex-col items-center justify-between shadow-md transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-2xl cursor-pointer">
              {/* Ikon Aplikasi Resmi */}
              <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                <OfficialAppIcon
                  name={tool.iconName}
                  className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Garis Pemisah & Angka Persentase Kemampuan */}
              <div className="w-full border-t border-black/10 pt-2 xs:pt-2.5 sm:pt-3 mt-1.5 sm:mt-2.5 text-center">
                <span className="font-display text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-[#171717] tracking-tight tabular-nums block text-center">
                  {tool.percentage}
                </span>
              </div>
            </div>

            {/* Nama Aplikasi di Luar Kartu (Teks Putih) */}
            <span className="font-display text-[11px] xs:text-xs sm:text-sm md:text-base font-semibold text-white text-center mt-2 sm:mt-3 leading-snug px-1">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
