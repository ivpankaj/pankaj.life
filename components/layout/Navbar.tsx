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
          className={`rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 flex items-center justify-between bg-[#131c46] border-3 border-[#3d509f] border-b-6 border-b-[#0a102c] shadow-[0_15px_35px_rgba(0,0,0,0.5),inset_0_2px_0_rgba(255,255,255,0.25)] ${
            scrolled ? "scale-[0.98] shadow-2xl" : ""
          }`}
        >
          {/* Brand Mark with 3D Cartoon Pop Icon */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded-full p-1"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 p-[2px] shadow-lg shadow-pink-500/30 group-hover:rotate-6 transition-transform">
              <div className="w-full h-full bg-[#1e1b4b] rounded-[14px] flex items-center justify-center font-black text-lg text-white font-cartoon">
                P
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-sm tracking-tight text-white flex items-center gap-1 font-cartoon">
                {profile.displayName}
                <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300 group-hover:scale-125 transition-transform" />
              </span>
              <span className="text-[10px] text-indigo-300 font-bold font-cartoon tracking-wide">
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
                  className={`px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-bold font-cartoon transition-all duration-150 ${
                    isActive
                      ? "bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-md border-2 border-pink-300 border-b-4 border-b-rose-800 scale-105"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action: 3D Live Badge & Connect Button */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#064e3b] border-2 border-[#10b981] border-b-4 border-b-[#022c22] text-[11px] text-emerald-200 font-bold font-cartoon shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>pankaj.life</span>
            </div>
            <Link
              href="/contact"
              className="pixar-btn-primary px-4 py-1.5 text-xs font-black text-white flex items-center gap-1.5 shadow-md"
            >
              <Send className="w-3 h-3" />
              <span>Connect</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-2xl bg-[#1e295d] border-2 border-[#4338ca] text-slate-200 hover:text-white focus-visible:outline-none"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Dropdown Panel */}
        {isOpen && (
          <div className="md:hidden mt-2 rounded-3xl p-5 bg-[#131c46] border-3 border-[#3d509f] border-b-6 border-b-[#0a102c] shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
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
                        : "text-slate-200 hover:bg-white/10"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="text-amber-300">⭐</span>}
                  </Link>
                );
              })}
              <div className="pt-3 mt-2 border-t border-indigo-900 flex flex-col gap-2">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="pixar-btn-primary w-full text-center py-3 rounded-2xl text-sm font-black text-white shadow-lg"
                >
                  🚀 Get in Touch with Pankaj
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
