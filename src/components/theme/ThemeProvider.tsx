import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

/** Tailwind `md` — escritorio mantiene siempre modo light (sin toggle). */
export const DESKTOP_THEME_MEDIA = "(min-width: 768px)";

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

function isDesktopViewport(): boolean {
  return typeof window !== "undefined" && window.matchMedia(DESKTOP_THEME_MEDIA).matches;
}

function initialTheme(defaultTheme: Theme): Theme {
  if (typeof window === "undefined") return defaultTheme;
  return "light";
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() =>
    initialTheme(defaultTheme),
  );

  /** Sincroniza `html` con el estado (y fuerza light en escritorio). */
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (isDesktopViewport()) {
      root.classList.add("light");
      setThemeState((t) => (t !== "light" ? "light" : t));
      return;
    }

    root.classList.add(theme === "dark" ? "dark" : "light");
  }, [theme]);

  /** Al cruzar el breakpoint, forzar arranque light y mantener toggle manual en móvil/tablet. */
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_THEME_MEDIA);

    const onBreakpointChange = () => {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");

      if (mq.matches) {
        root.classList.add("light");
        setThemeState("light");
        return;
      }

      setThemeState("light");
      root.classList.add("light");
    };

    mq.addEventListener("change", onBreakpointChange);
    return () => mq.removeEventListener("change", onBreakpointChange);
  }, [defaultTheme]);

  const value = {
    theme,
    setTheme: (next: Theme) => {
      if (isDesktopViewport()) {
        return;
      }
      try {
        localStorage.setItem(storageKey, next);
      } catch {
        /* ignore */
      }
      setThemeState(next);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
