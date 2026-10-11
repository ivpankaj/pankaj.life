"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ThemeSelector } from "@/components/theme/ThemeSelector";

export interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        aria-label="Main Navigation"
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black/85 backdrop-blur-md shadow-[0px_2px_12px_rgba(0,0,0,0.5)] z-[5000] px-5 py-2.5 items-center justify-center space-x-3 sm:space-x-5",
          className
        )}
      >
        <Link
          href="/"
          className="text-[var(--theme-text)] font-bold text-sm tracking-tight px-2 hover:opacity-80 transition-opacity flex items-center gap-1.5"
        >
          <span className="h-2 w-2 rounded-full bg-[var(--theme-text)] animate-pulse inline-block" />
          <span>Pankaj Verma</span>
        </Link>

        <div className="h-4 w-px bg-[var(--theme-card-border)] hidden sm:block" />

        {navItems.map((navItem, idx) => (
          <Link
            key={`nav-link-${idx}`}
            href={navItem.link}
            className="relative text-[var(--theme-text-muted)] items-center flex space-x-1 hover:text-[var(--theme-text)] transition-colors text-sm font-medium px-1 py-1"
          >
            {navItem.icon && <span className="block sm:hidden text-[var(--theme-text)]">{navItem.icon}</span>}
            <span className="hidden sm:block">{navItem.name}</span>
          </Link>
        ))}

        <Link
          href="/contact"
          className="theme-btn border text-xs sm:text-sm font-medium relative border-[var(--theme-card-border)] bg-[var(--theme-btn-bg)] text-[var(--theme-btn-text)] px-3.5 py-1.5 rounded-full hover:opacity-90 transition-opacity"
        >
          <span>Contact</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[var(--theme-card-border)] to-transparent h-px" />
        </Link>

        <div className="h-4 w-px bg-[var(--theme-card-border)]" />

        <ThemeSelector />
      </motion.nav>
    </AnimatePresence>
  );
};
