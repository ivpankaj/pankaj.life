"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeType = "light" | "gold" | "silver" | "black" | "dawn" | "cyber";

export interface ThemeOption {
  id: ThemeType;
  name: string;
  swatch: string;
  description: string;
  iconName: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: "light",
    name: "Light",
    swatch: "#ffffff",
    description: "Clean, high-clarity pure white background with pure black text",
    iconName: "Sun",
  },
  {
    id: "gold",
    name: "Gold",
    swatch: "#dfb15b",
    description: "Lustrous radiant gold background with pure black text",
    iconName: "Sparkles",
  },
  {
    id: "silver",
    name: "Silver",
    swatch: "#cbd5e1",
    description: "Polished metallic slate silver background with pure black text",
    iconName: "Shield",
  },
  {
    id: "black",
    name: "Black",
    swatch: "#000000",
    description: "Pure OLED midnight black background with pure white text",
    iconName: "Moon",
  },
  {
    id: "dawn",
    name: "Dawn",
    swatch: "#fbcfe8",
    description: "Sunrise morning rose background with pure black text",
    iconName: "Sunrise",
  },
  {
    id: "cyber",
    name: "Cyber",
    swatch: "#082138",
    description: "Deep cyber abyss blue background with pure white text",
    iconName: "Zap",
  },
];

interface ThemeContextValue {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  themes: ThemeOption[];
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function applyThemeToDom(theme: ThemeType) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
  if (document.body) {
    document.body.setAttribute("data-theme", theme);
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeType>("light");

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      try {
        const storedTheme = (localStorage.getItem("pankaj_theme") as ThemeType) || "light";
        const validTheme = THEME_OPTIONS.some((t) => t.id === storedTheme) ? storedTheme : "light";
        setThemeState(validTheme);
        applyThemeToDom(validTheme);
      } catch {
        applyThemeToDom("light");
      }
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem("pankaj_theme", newTheme);
    } catch {}
    applyThemeToDom(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEME_OPTIONS }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
