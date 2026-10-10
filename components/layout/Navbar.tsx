"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Tech Stack", href: "/#tech" },
  { name: "Achievements", href: "/achievements" },
  { name: "Socials", href: "/socials" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <nav
          aria-label="Main Navigation"
          className={`cosmic-glass rounded-2xl px-5 py-3 transition-all duration-300 flex items-center justify-between ${
            scrolled ? "bg-slate-950/85 shadow-2xl border-white/15" : "bg-slate-900/60"
          }`}
        >
          {/* Brand Mark */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-white transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-rose-400 p-[1.5px] shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/50 transition-shadow">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-base tracking-wider bg-gradient-to-br from-indigo-400 to-purple-300 bg-clip-text text-transparent">
                P
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-white flex items-center gap-1">
                {profile.displayName}
                <Sparkles className="w-3 h-3 text-amber-400 opacity-80 group-hover:opacity-100 transition-opacity" />
              </span>
              <span className="text-[11px] text-slate-400 font-mono tracking-wide">
                @{profile.handle}
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(link.href + "/");

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                    isActive
                      ? "text-white bg-white/10 shadow-inner font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-gradient-to-r from-indigo-400 to-rose-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Status Badge & Contact Action */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300 font-medium font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>pankaj.life</span>
            </div>
            <Link
              href="/contact"
              className="pixar-button px-4 py-1.5 rounded-xl text-xs font-semibold text-white tracking-wide flex items-center gap-1.5"
            >
              <span>Connect</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Dropdown Panel */}
        {isOpen && (
          <div
            className="md:hidden mt-2 cosmic-glass rounded-2xl p-4 bg-slate-950/95 border-white/15 animate-in fade-in slide-in-from-top-2 duration-200 shadow-2xl"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname.startsWith(link.href + "/");

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-indigo-600/25 text-white font-semibold border border-indigo-500/30"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    )}
                  </Link>
                );
              })}
              <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
                <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-emerald-500/10 text-xs text-emerald-300 font-mono">
                  <span>Domain Status:</span>
                  <span className="font-semibold">pankaj.life Live</span>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="pixar-button w-full text-center py-2.5 rounded-xl text-sm font-semibold text-white mt-1 shadow-lg"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
