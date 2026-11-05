import React from 'react';
import { LightboxModal } from './LightboxModal';

interface PhotoGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  target?: string;
}

export const PhotoGuideModal: React.FC<PhotoGuideModalProps> = ({
  isOpen,
  onClose,
  target = 'Foto Profesional',
}) => {
  return (
    <LightboxModal
      isOpen={isOpen}
      onClose={onClose}
      title={`Panduan Aset: ${target}`}
      subtitle="Standar Visual Editorial Retail Tanpa Rekayasa AI"
      badge="Panduan Aset Pengguna"
    >
      <div className="space-y-4 text-xs sm:text-sm text-[#6B7280] dark:text-[#9CA3AF]">
        <div className="p-4 rounded-xl bg-[#F8F9FA] dark:bg-[#18181B] border border-[#E5E7EB] dark:border-[#27272A] space-y-2">
          <span className="font-bold text-xs uppercase text-[#10B981] block">
            Larangan Foto AI / Stok Palsu
          </span>
          <p className="leading-relaxed">
            Sesuai arahan integritas, situs portofolio ini secara sengaja tidak memasang foto wajah buatan model AI atau stok foto model yang bukan diri kandidat asli. Placeholder netral digunakan sampai foto asli diunggah.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-[#18181B] border border-[#E5E7EB] dark:border-[#27272A] space-y-2.5">
          <span className="font-bold text-xs uppercase text-[#111827] dark:text-white block">
            Rekomendasi Foto Portofolio Retail
          </span>
          <ul className="space-y-1.5 list-disc list-inside text-xs leading-relaxed text-[#6B7280] dark:text-[#9CA3AF]">
            <li>Pakaian kemeja berkerah rapi atau seragam kerja retail.</li>
            <li>Pencahayaan terang dan ekspresi ramah, siap melayani pelanggan.</li>
            <li>Rasio potret 3:4 atau 4:5 dengan resolusi minimal 800 &times; 1066 px.</li>
            <li>Latar belakang dinding netral atau area operasional toko.</li>
          </ul>
        </div>

        <div className="p-3 bg-[#F8F9FA] dark:bg-[#18181B] border border-[#E5E7EB] dark:border-[#27272A] rounded-xl text-xs text-[#111827] dark:text-white break-words">
          <span className="font-bold block mb-1 text-[#111827] dark:text-white">Cara Menautkan:</span>
          Simpan foto di <code className="font-mono text-[11px] bg-white dark:bg-[#27272A] text-[#111827] dark:text-white px-1 py-0.5 rounded border border-[#E5E7EB] dark:border-[#27272A] break-all">public/taufik-portrait.jpg</code> lalu gantikan pemanggilan komponen <code className="font-mono text-[11px] bg-white dark:bg-[#27272A] text-[#111827] dark:text-white px-1 py-0.5 rounded border border-[#E5E7EB] dark:border-[#27272A] break-all">ImageBlock</code> dengan tag gambar pada file <code className="font-mono text-[11px] bg-white dark:bg-[#27272A] text-[#111827] dark:text-white px-1 py-0.5 rounded border border-[#E5E7EB] dark:border-[#27272A] break-all">Hero.tsx</code>.
        </div>
      </div>
    </LightboxModal>
  );
};
