import { useEffect } from 'react';

/**
 * Hook IntersectionObserver untuk animasi scroll fadeInUp.
 * Mengamati elemen dengan kelas `.fade-in-up` dan menambahkan `.is-visible` saat masuk layar (threshold 0.15, rootMargin: '0px 0px -50px 0px').
 * Setelah tampil sekali, observasi dihentikan (unobserve) dan will-change dihapus via `.anim-done`.
 * Menghormati prefers-reduced-motion: reduce secara penuh.
 */
export function useScrollAnimation(isActive: boolean = true) {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    // Tandai bahwa JavaScript aktif agar CSS fade-in-up diaktifkan secara aman
    document.documentElement.classList.add('js-anim');

    if (!isActive) return;

    // Hormati prefers-reduced-motion: matikan animasi & tampilkan elemen langsung
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      const allElements = document.querySelectorAll<HTMLElement>('.fade-in-up');
      allElements.forEach((el) => {
        el.classList.add('is-visible', 'anim-done');
      });
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      const allElements = document.querySelectorAll<HTMLElement>('.fade-in-up');
      allElements.forEach((el) => {
        el.classList.add('is-visible', 'anim-done');
      });
      return;
    }

    // Buat IntersectionObserver sesuai spesifikasi
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add('is-visible');
            // Berhenti diamati setelah muncul sekali (tidak diulang saat scroll balik)
            observer.unobserve(target);

            // Hapus will-change setelah animasi selesai
            const handleTransitionEnd = (e: Event) => {
              if (e.target === target) {
                target.classList.add('anim-done');
                target.removeEventListener('transitionend', handleTransitionEnd);
              }
            };
            target.addEventListener('transitionend', handleTransitionEnd);

            // Fallback timer jika transitionend tidak terpanggil
            setTimeout(() => {
              target.classList.add('anim-done');
              target.removeEventListener('transitionend', handleTransitionEnd);
            }, 1800);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Amati semua elemen .fade-in-up yang belum tampil
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll<HTMLElement>('.fade-in-up:not(.is-visible)');
      elements.forEach((el) => observer.observe(el));
    }, 40);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [isActive]);
}
