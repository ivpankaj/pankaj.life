"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, Send } from "lucide-react";
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

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <nav
          aria-label="Main Navigation"
          className={`rounded-full px-5 sm:px-7 py-3 transition-all duration-300 flex items-center justify-between bg-white border-3 border-slate-200 border-b-6 border-b-slate-300 shadow-[0_12px_30px_rgba(0,0,0,0.08)] ${
            scrolled ? "scale-[0.98] shadow-2xl" : ""
          }`}
        >
          {/* Brand Mark */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded-full p-1"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 p-[2px] shadow-md shadow-pink-500/20 group-hover:rotate-6 transition-transform">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center font-black text-lg text-slate-900 font-cartoon">
                P
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-base tracking-tight text-slate-900 flex items-center gap-1 font-cartoon">
                {profile.displayName}
                <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500 group-hover:scale-125 transition-transform" />
              </span>
              <span className="text-[11px] text-slate-500 font-bold font-cartoon tracking-wide">
                @{profile.handle}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(link.href + "/");

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs lg:text-sm font-bold font-cartoon transition-all duration-150 ${
                    isActive
                      ? "bg-pink-600 text-white shadow-md border-2 border-pink-400 border-b-4 border-b-pink-900 scale-105"
                      : "text-slate-700 hover:text-pink-600 hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action: Clean Connect Button (Badge removed per user request) */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="pixar-btn-primary px-5 py-2 text-xs font-black text-white flex items-center gap-1.5 shadow-md"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Connect</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-2xl bg-slate-100 border-2 border-slate-200 text-slate-700 hover:text-slate-900 focus-visible:outline-none"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Dropdown Panel */}
        {isOpen && (
          <div className="md:hidden mt-2 rounded-3xl p-5 bg-white border-3 border-slate-200 border-b-6 border-b-slate-300 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
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
                    className={`px-4 py-3 rounded-2xl text-sm font-bold font-cartoon transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-pink-600 text-white border-2 border-pink-400 shadow-lg"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="text-amber-300">⭐</span>}
                  </Link>
                );
              })}
              <div className="pt-3 mt-2 border-t border-slate-200 flex flex-col gap-2">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="pixar-btn-primary w-full text-center py-3 rounded-2xl text-sm font-black text-white shadow-lg"
                >
                  Get in Touch with Pankaj
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
