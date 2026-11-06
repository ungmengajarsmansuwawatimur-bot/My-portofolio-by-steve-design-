import { useState, useEffect, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutExperience } from './components/AboutExperience';
import { RealWork } from './components/RealWork';
import { RetailLearning } from './components/RetailLearning';
import { SkillsContact } from './components/SkillsContact';
import { downloadCv } from './utils/downloadCv';
import { useScrollAnimation } from './hooks/useScrollAnimation';

// Code-split heavy below-the-fold detail pages and modals to slash initial bundle size
const PhotoGuideModal = lazy(() => import('./components/PhotoGuideModal').then(m => ({ default: m.PhotoGuideModal })));
const ProjectDetailJasaDigital = lazy(() => import('./components/ProjectDetailJasaDigital').then(m => ({ default: m.ProjectDetailJasaDigital })));
const ProjectDetailPadds = lazy(() => import('./components/ProjectDetailPadds').then(m => ({ default: m.ProjectDetailPadds })));
const ProjectDetailUsahaKeluarga = lazy(() => import('./components/ProjectDetailUsahaKeluarga').then(m => ({ default: m.ProjectDetailUsahaKeluarga })));
const ProjectDetailRetailLearning = lazy(() => import('./components/ProjectDetailRetailLearning').then(m => ({ default: m.ProjectDetailRetailLearning })));
const HireMePage = lazy(() => import('./components/HireMePage').then(m => ({ default: m.HireMePage })));
import { Footer } from './components/Footer';

type AppRoute = 'home' | 'hire-me' | 'jasa-digital' | 'padds-smansat' | 'usaha-keluarga' | 'pembelajaran-retail';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(() => {
    const hash = window.location.hash;
    if (hash === '#/hire-me') return 'hire-me';
    if (hash === '#/project/jasa-digital') return 'jasa-digital';
    if (hash === '#/project/padds-smansat') return 'padds-smansat';
    if (hash === '#/project/usaha-keluarga') return 'usaha-keluarga';
    if (hash === '#/project/pembelajaran-retail') return 'pembelajaran-retail';
    if (hash === '#home' || hash === '#about' || hash === '#work' || hash === '#contact') return 'home';
    return 'home';
  });

  const [photoModalTarget, setPhotoModalTarget] = useState<string | null>(null);

  // Activate single reusable scroll animation for home page elements
  useScrollAnimation(currentRoute === 'home');

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
      } else if (hash === '#/project/pembelajaran-retail') {
        setCurrentRoute('pembelajaran-retail');
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

  const handleSelectProject = (id: 'jasa-digital' | 'padds-smansat' | 'usaha-keluarga' | 'pembelajaran-retail') => {
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

  const isDetailPage = currentRoute === 'jasa-digital' || currentRoute === 'padds-smansat' || currentRoute === 'usaha-keluarga' || currentRoute === 'pembelajaran-retail';
  const isTemporaryPage = currentRoute === 'jasa-digital' || currentRoute === 'padds-smansat' || currentRoute === 'usaha-keluarga';
  const isHirePage = currentRoute === 'hire-me';
  const showNavbar = currentRoute === 'home';

  return (
    <div className="min-h-screen bg-white text-[#171717] flex flex-col selection:bg-[#F9B51B] selection:text-[#171717] relative">
      {/* Top Accessible Skip Link */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#111111] focus:text-white focus:rounded-md focus:font-bold focus:shadow-lg"
      >
        Lewati ke Konten Utama
      </a>

      {/* Persistent Responsive Navbar - only shown on home */}
      {showNavbar && (
        <Navbar
          onOpenCvModal={downloadCv}
          isDetailPage={isDetailPage}
          isTemporaryPage={isTemporaryPage}
          isHirePage={isHirePage}
          onNavigateHire={handleNavigateHire}
          onNavigateHome={handleNavigateHomeFromNav}
        />
      )}

      {/* Main Content Area */}
      <main className={`flex-1 w-full overflow-x-hidden ${showNavbar ? 'pt-20' : 'pt-0'}`}>
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
          ) : currentRoute === 'pembelajaran-retail' ? (
            <ProjectDetailRetailLearning onBack={handleBackToWorkSection} />
          ) : (
            /* Home Page View */
            <>
              {/* 01 HOME */}
              <Hero onOpenCvModal={downloadCv} />

              {/* 02 ABOUT & EXPERIENCE */}
              <AboutExperience
                onOpenStoreModal={() => setPhotoModalTarget('Visual Operasional Retail')}
              />

              {/* 03 PORTFOLIO PROJECTS (FOUR FOCAL MOCKUPS AS VISUAL ENTRY POINTS) */}
              <RealWork onSelectProject={handleSelectProject} />

              {/* 04 SKILLS / CV / CONTACT */}
              <SkillsContact onOpenCvModal={downloadCv} />
            </>
          )}
        </Suspense>
      </main>

      {/* Global Consistent Footer */}
      <Footer onOpenCvModal={downloadCv} onNavigateHome={handleNavigateHomeFromNav} />

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
