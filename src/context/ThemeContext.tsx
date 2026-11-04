import React, { createContext, useContext, useEffect } from 'react';

type Theme = 'light';

export interface TransitionCoord {
  x: number;
  y: number;
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (e?: React.MouseEvent) => void;
  setTheme: (theme: Theme) => void;
  isTransitioning: boolean;
  transitionCoord: TransitionCoord | null;
  targetTheme: Theme | null;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
  isTransitioning: false,
  transitionCoord: null,
  targetTheme: null,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Permanently lock document to light mode and clean any residual dark mode flags
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark');
    root.classList.remove('theme-transitioning');
    root.setAttribute('data-theme', 'light');
    root.style.colorScheme = 'light';

    try {
      localStorage.removeItem('portfolio-theme');
      localStorage.setItem('portfolio-theme', 'light');
    } catch {
      // Ignore storage errors
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme: 'light',
        toggleTheme: () => {},
        setTheme: () => {},
        isTransitioning: false,
        transitionCoord: null,
        targetTheme: null,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  return useContext(ThemeContext);
};
