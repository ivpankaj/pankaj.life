"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { ChevronDown, Check, Sun, Sparkles, Shield, Moon, Sunrise, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS: Record<string, React.ReactNode> = {
  Sun: <Sun className="w-3.5 h-3.5" />,
  Sparkles: <Sparkles className="w-3.5 h-3.5" />,
  Shield: <Shield className="w-3.5 h-3.5" />,
  Moon: <Moon className="w-3.5 h-3.5" />,
  Sunrise: <Sunrise className="w-3.5 h-3.5" />,
  Zap: <Zap className="w-3.5 h-3.5" />,
};

export function ThemeSelector({ className }: { className?: string }) {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentTheme = themes.find((t) => t.id === theme) || themes[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={cn("relative inline-block text-left z-50", className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`Current theme: ${currentTheme.name}. Click to change theme.`}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--theme-card-border)] bg-[var(--theme-subtle-bg)] text-[var(--theme-text)] hover:opacity-90 text-xs font-medium transition-all shadow-sm cursor-pointer select-none"
      >
        <span
          className="w-2.5 h-2.5 rounded-full shadow-sm ring-1 ring-current/20 shrink-0"
          style={{ backgroundColor: currentTheme.swatch }}
        />
        <span className="hidden sm:inline font-mono tracking-tight capitalize text-[var(--theme-text)]">
          {currentTheme.name}
        </span>
        <ChevronDown
          className={cn(
            "w-3 h-3 text-[var(--theme-text)] opacity-70 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-52 rounded-2xl bg-[var(--theme-card-bg)] backdrop-blur-xl border border-[var(--theme-card-border)] p-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.3)] z-[6000]"
          >
            <div className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-[var(--theme-text-muted)] border-b border-[var(--theme-card-border)] mb-1">
              Select Theme
            </div>

            <div className="space-y-0.5">
              {themes.map((t) => {
                const isSelected = t.id === theme;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      setTheme(t.id);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer text-left",
                      isSelected
                        ? "bg-[var(--theme-subtle-bg)] text-[var(--theme-text)] font-bold shadow-sm"
                        : "text-[var(--theme-text-muted)] hover:bg-[var(--theme-subtle-bg)] hover:text-[var(--theme-text)]"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full shadow-sm ring-1 ring-current/20"
                        style={{ backgroundColor: t.swatch }}
                      />
                      <span className="flex items-center gap-1.5 text-[var(--theme-text)]">
                        <span className="opacity-70 text-[var(--theme-text)]">{ICONS[t.iconName]}</span>
                        <span className="text-[var(--theme-text)]">{t.name}</span>
                      </span>
                    </div>

                    {isSelected && (
                      <Check className="w-3.5 h-3.5 text-[var(--theme-text)] shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
