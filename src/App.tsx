import { useState, useEffect, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutExperience } from './components/AboutExperience';
import { RealWork } from './components/RealWork';
import { RetailLearning } from './components/RetailLearning';
import { SkillsContact } from './components/SkillsContact';
import { ThemeTransitionOverlay } from './components/ThemeTransitionOverlay';
import { downloadCv } from './utils/downloadCv';

// Code-split heavy below-the-fold detail pages and modals to slash initial bundle size
const PhotoGuideModal = lazy(() => import('./components/PhotoGuideModal').then(m => ({ default: m.PhotoGuideModal })));
const ProjectDetailJasaDigital = lazy(() => import('./components/ProjectDetailJasaDigital').then(m => ({ default: m.ProjectDetailJasaDigital })));
const ProjectDetailPadds = lazy(() => import('./components/ProjectDetailPadds').then(m => ({ default: m.ProjectDetailPadds })));
const ProjectDetailUsahaKeluarga = lazy(() => import('./components/ProjectDetailUsahaKeluarga').then(m => ({ default: m.ProjectDetailUsahaKeluarga })));
const HireMePage = lazy(() => import('./components/HireMePage').then(m => ({ default: m.HireMePage })));
import { Footer } from './components/Footer';

type AppRoute = 'home' | 'hire-me' | 'jasa-digital' | 'padds-smansat' | 'usaha-keluarga';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(() => {
    const hash = window.location.hash;
    if (hash === '#/hire-me') return 'hire-me';
    if (hash === '#/project/jasa-digital') return 'jasa-digital';
    if (hash === '#/project/padds-smansat') return 'padds-smansat';
    if (hash === '#/project/usaha-keluarga') return 'usaha-keluarga';
    return 'home';
  });

  const [photoModalTarget, setPhotoModalTarget] = useState<string | null>(null);

  // Synchronize routing with browser history and hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/hire-me') {
        setCurrentRoute('hire-me');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/project/jasa-digital') {
        setCurrentRoute('jasa-digital');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/project/padds-smansat') {
        setCurrentRoute('padds-smansat');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/project/usaha-keluarga') {
        setCurrentRoute('usaha-keluarga');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentRoute('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigateHire = () => {
    setCurrentRoute('hire-me');
    window.location.hash = '#/hire-me';
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleSelectProject = (id: 'jasa-digital' | 'padds-smansat' | 'usaha-keluarga') => {
    setCurrentRoute(id);
    window.location.hash = `#/project/${id}`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToHome = () => {
    setCurrentRoute('home');
    window.location.hash = '#home';
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 40);
  };

  const handleBackToWorkSection = () => {
    setCurrentRoute('home');
    window.location.hash = '#work';
    setTimeout(() => {
      const el = document.getElementById('work');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 40);
  };

  const handleNavigateHomeFromNav = (sectionId?: string) => {
    setCurrentRoute('home');
    window.location.hash = sectionId ? `#${sectionId}` : '#home';
    setTimeout(() => {
      const target = sectionId || 'home';
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 40);
  };

  const isDetailPage = currentRoute === 'jasa-digital' || currentRoute === 'padds-smansat' || currentRoute === 'usaha-keluarga';
  const isHirePage = currentRoute === 'hire-me';

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] text-[#171717] dark:text-[#F5F5F5] flex flex-col selection:bg-[#F9B51B] dark:selection:bg-[#F9B51B] dark:bg-[#d1fe17] selection:text-[#171717] transition-colors duration-200 relative">
      {/* Theme Transition Ambience Overlay */}
      <ThemeTransitionOverlay />

      {/* Top Accessible Skip Link */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#111111] dark:focus:bg-[#242424] focus:text-white focus:rounded-md focus:font-bold focus:shadow-lg"
      >
        Lewati ke Konten Utama
      </a>

      {/* Persistent Responsive Navbar */}
      <Navbar
        onOpenCvModal={downloadCv}
        isDetailPage={isDetailPage}
        isHirePage={isHirePage}
        onNavigateHire={handleNavigateHire}
        onNavigateHome={handleNavigateHomeFromNav}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full overflow-x-hidden pt-20">
        <Suspense fallback={null}>
          {currentRoute === 'hire-me' ? (
            <HireMePage
              onBackToHome={handleBackToHome}
              onOpenCvModal={downloadCv}
            />
          ) : currentRoute === 'jasa-digital' ? (
            <ProjectDetailJasaDigital onBack={handleBackToWorkSection} />
          ) : currentRoute === 'padds-smansat' ? (
            <ProjectDetailPadds onBack={handleBackToWorkSection} />
          ) : currentRoute === 'usaha-keluarga' ? (
            <ProjectDetailUsahaKeluarga onBack={handleBackToWorkSection} />
          ) : (
            /* Home Page View */
            <>
              {/* 01 HOME */}
              <Hero onOpenCvModal={downloadCv} />

              {/* 02 ABOUT & EXPERIENCE */}
              <AboutExperience
                onOpenStoreModal={() => setPhotoModalTarget('Visual Operasional Retail')}
              />

              {/* 03 PORTFOLIO PROJECTS (THREE FOCAL MOCKUPS AS VISUAL ENTRY POINTS) */}
              <RealWork onSelectProject={handleSelectProject} />

              {/* 04 RETAIL LEARNING */}
              <RetailLearning />

              {/* 05 SKILLS / CV / CONTACT */}
              <SkillsContact onOpenCvModal={downloadCv} />
            </>
          )}
        </Suspense>
      </main>

      {/* Global Consistent Footer */}
      <Footer onOpenCvModal={downloadCv} />

      {/* Interactive Global Modals */}
      <Suspense fallback={null}>
        {Boolean(photoModalTarget) && (
          <PhotoGuideModal
            isOpen={Boolean(photoModalTarget)}
            target={photoModalTarget || undefined}
            onClose={() => setPhotoModalTarget(null)}
          />
        )}
      </Suspense>
    </div>
  );
}
