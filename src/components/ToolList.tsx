import React from 'react';
import { toolsData } from '../data/portfolioData';
import { OfficialAppIcon } from './OfficialAppIcon';

export const ToolList: React.FC = () => {
  // SVG Icon mapping for clean editorial display
  const getToolIcon = (name: string, iconName?: string) => {
    return <OfficialAppIcon name={iconName || name} className="w-8 h-8" />;
  };

  return (
    <div className="bg-white dark:bg-[#18181B] border border-[#E5E7EB] dark:border-[#27272A] rounded-2xl p-6 sm:p-8 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-[#E5E7EB] dark:border-[#27272A]">
        <div>
          <span className="text-xs font-bold tracking-wider text-[#10B981] uppercase block mb-1">
            Alat Kerja & Aplikasi
          </span>
          <h4 className="text-lg sm:text-xl font-bold text-[#111827] dark:text-[#F9FAFB]">
            Perangkat Lunak Pendukung Operasional
          </h4>
        </div>
        <span className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">
          Tanpa tautan eksternal artifisial
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {toolsData.map((tool) => (
          <div
            key={tool.name}
            className="p-4 rounded-xl bg-[#F8F9FA] dark:bg-[#202024] border border-[#E5E7EB] dark:border-[#27272A] flex items-center gap-3.5 hover:border-[#10B981] transition-colors"
          >
            {getToolIcon(tool.name, tool.iconName)}
            <div className="min-w-0">
              <h5 className="font-bold text-xs sm:text-sm text-[#111827] dark:text-[#F9FAFB] truncate">
                {tool.name}
              </h5>
              <p className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF] truncate">
                {tool.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
