import React from 'react';

interface EditableImageProps {
  storageKey?: string;
  defaultSrc: string;
  darkSrc?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  containerClassName?: string;
  compact?: boolean;
  buttonPosition?: 'top-right' | 'bottom-right' | 'top-left';
  aspectRatioClass?: string;
  children?: React.ReactNode;
  loading?: 'lazy' | 'eager';
}

export const EditableImage: React.FC<EditableImageProps> = ({
  storageKey,
  defaultSrc,
  darkSrc,
  alt,
  className = '',
  imgClassName = '',
  containerClassName = '',
  aspectRatioClass = '',
  children,
  loading = 'lazy',
}) => {
  const currentSrc = React.useMemo(() => {
    if (!storageKey) return defaultSrc;
    try {
      const saved = localStorage.getItem(`custom_img_${storageKey}`);
      return saved || defaultSrc;
    } catch {
      return defaultSrc;
    }
  }, [storageKey, defaultSrc]);

  const currentDarkSrc = React.useMemo(() => {
    if (!darkSrc) return null;
    if (!storageKey) return darkSrc;
    try {
      const saved = localStorage.getItem(`custom_img_${storageKey}_dark`);
      return saved || darkSrc;
    } catch {
      return darkSrc;
    }
  }, [storageKey, darkSrc]);

  const getSources = (src: string) => {
    if (src.endsWith('.webp')) {
      const base = src.replace(/\.webp$/, '');
      return {
        avif: `${base}.avif`,
        webp: src,
      };
    }
    return null;
  };

  const lightSources = getSources(currentSrc);
  const darkSources = currentDarkSrc ? getSources(currentDarkSrc) : null;

  return (
    <div
      className={`relative overflow-hidden ${aspectRatioClass} ${containerClassName} ${className}`}
    >
      <picture className={darkSrc ? 'dark:hidden block w-full h-full' : 'block w-full h-full'}>
        {lightSources && <source srcSet={lightSources.avif} type="image/avif" />}
        {lightSources && <source srcSet={lightSources.webp} type="image/webp" />}
        <img
          src={currentSrc}
          alt={alt}
          width={1600}
          height={420}
          className={`w-full h-full ${imgClassName}`}
          referrerPolicy="no-referrer"
          loading={loading}
          decoding={loading === 'eager' ? 'sync' : 'async'}
          fetchPriority={loading === 'eager' ? 'high' : 'auto'}
          style={{
            imageRendering: '-webkit-optimize-contrast' as React.CSSProperties['imageRendering'],
          }}
        />
      </picture>
      {darkSrc && currentDarkSrc && (
        <picture className="hidden dark:block w-full h-full">
          {darkSources && <source srcSet={darkSources.avif} type="image/avif" />}
          {darkSources && <source srcSet={darkSources.webp} type="image/webp" />}
          <img
            src={currentDarkSrc}
            alt={alt}
            width={1600}
            height={420}
            className={`w-full h-full ${imgClassName}`}
            referrerPolicy="no-referrer"
            loading={loading}
            decoding={loading === 'eager' ? 'sync' : 'async'}
            fetchPriority={loading === 'eager' ? 'high' : 'auto'}
            style={{
              imageRendering: '-webkit-optimize-contrast' as React.CSSProperties['imageRendering'],
            }}
          />
        </picture>
      )}
      {children}
    </div>
  );
};
