import React from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Send,
  Rocket,
  Star,
  Globe,
  Code2,
  ChevronDown,
} from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { BrandIcon } from "@/components/ui/BrandIcon";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bubbly Cartoon Headline & Story */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-7">
            {/* Playful Pixar Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1b2559] border-2 border-[#4f64c8] border-b-4 border-b-[#141b44] shadow-lg shadow-indigo-950/40">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400" />
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-wide text-amber-300 font-cartoon flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-300" />
                Welcome to the Digital Universe of
                <span className="text-white bg-pink-600 px-2.5 py-0.5 rounded-full border border-pink-400 text-xs">
                  @{profile.handle}
                </span>
              </span>
            </div>

            {/* Main Bubbly Title */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.04] font-cartoon">
                <span className="block text-white drop-shadow-[0_4px_0_#1e1b4b]">
                  {profile.name}
                </span>
                <span className="block mt-2 text-3xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-amber-300 via-pink-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(244,114,182,0.4)]">
                  {profile.tagline}
                </span>
              </h1>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2 text-xs sm:text-sm font-bold text-indigo-200 font-cartoon">
                <span className="px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-400/40 text-indigo-300">
                  Also known as {profile.displayName} / @{profile.handle}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-400/40 text-emerald-300 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {profile.domain.replace("https://", "")}
                </span>
              </div>
            </div>

            {/* Supportive Bio */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              {profile.subheading}
            </p>

            {/* 3D Cartoon Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              <Link
                href="/projects"
                className="pixar-btn-primary px-8 py-4 text-base sm:text-lg font-black text-white flex items-center gap-2 group cursor-pointer"
              >
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Explore My Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="pixar-btn-secondary px-7 py-4 text-base sm:text-lg font-black text-white flex items-center gap-2 group cursor-pointer"
              >
                <Send className="w-5 h-5 text-indigo-200 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <span>Connect With Me</span>
              </Link>
            </div>

            {/* Cartoon Social Stickers */}
            <div className="pt-6 border-t-2 border-indigo-900/60 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 font-cartoon flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                Verified Hangouts:
              </span>
              <div className="flex items-center gap-2">
                {socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${social.name} — ${social.handle}`}
                    className="p-3 rounded-2xl bg-[#1a2352] border-2 border-[#3b4c96] border-b-4 border-b-[#12183a] text-white hover:border-pink-400 hover:scale-110 active:translate-y-1 transition-all shadow-md shadow-black/30"
                  >
                    <BrandIcon name={social.id} size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Disney-Pixar 3D Cartoon Toy Space Diorama */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[440px] aspect-square">
              {/* Central Glowing Planet Base */}
              <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-[#312e81] via-[#4338ca] to-[#7c3aed] border-4 border-[#a5b4fc] border-b-8 border-b-[#1e1b4b] shadow-[0_25px_60px_rgba(79,70,229,0.5),inset_0_8px_0_rgba(255,255,255,0.45)] flex items-center justify-center animate-toy-bob">
                {/* 3D Toy Rocket Illustration flying around the planet */}
                <div className="relative w-44 h-44 flex flex-col items-center justify-center">
                  <svg
                    viewBox="0 0 120 120"
                    className="w-36 h-36 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Rocket Exhaust Flame */}
                    <path
                      d="M60 88 C55 105, 52 118, 60 120 C68 118, 65 105, 60 88 Z"
                      fill="url(#exhaustGrad)"
                      className="animate-pulse"
                    />
                    {/* Rocket Fins */}
                    <path
                      d="M36 65 C22 75, 20 90, 32 94 C38 90, 42 80, 44 72 Z"
                      fill="#ec4899"
                      stroke="#831843"
                      strokeWidth="3"
                    />
                    <path
                      d="M84 65 C98 75, 100 90, 88 94 C82 90, 78 80, 76 72 Z"
                      fill="#ec4899"
                      stroke="#831843"
                      strokeWidth="3"
                    />
                    {/* Rocket Fuselage */}
                    <path
                      d="M60 12 C44 32, 40 68, 44 88 C52 90, 68 90, 76 88 C80 68, 76 32, 60 12 Z"
                      fill="url(#rocketBodyGrad)"
                      stroke="#1e1b4b"
                      strokeWidth="3.5"
                    />
                    {/* Rocket Nose Cone */}
                    <path
                      d="M60 12 C52 24, 48 34, 48 40 C56 42, 64 42, 72 40 C72 34, 68 24, 60 12 Z"
                      fill="#f43f5e"
                      stroke="#881337"
                      strokeWidth="3"
                    />
                    {/* Cute Round Porthole Window */}
                    <circle
                      cx="60"
                      cy="56"
                      r="13"
                      fill="#38bdf8"
                      stroke="#0284c7"
                      strokeWidth="3"
                    />
                    <circle cx="60" cy="56" r="8" fill="#e0f2fe" />
                    {/* Glossy Porthole Highlight */}
                    <ellipse cx="58" cy="52" rx="4" ry="2" fill="#ffffff" />
                    <defs>
                      <linearGradient id="rocketBodyGrad" x1="45" y1="20" x2="75" y2="90">
                        <stop stopColor="#ffffff" />
                        <stop offset="0.7" stopColor="#f1f5f9" />
                        <stop offset="1" stopColor="#cbd5e1" />
                      </linearGradient>
                      <linearGradient id="exhaustGrad" x1="60" y1="88" x2="60" y2="120">
                        <stop stopColor="#fde047" />
                        <stop offset="0.5" stopColor="#f97316" />
                        <stop offset="1" stopColor="#ef4444" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="font-cartoon text-sm font-bold text-amber-300 drop-shadow mt-1">
                    🚀 pankaj.life
                  </span>
                </div>
              </div>

              {/* Floating Cartoon Badge 1: Production Launch Badge (Chunky sticker style) */}
              <div className="absolute -top-3 -right-2 bg-[#065f46] border-3 border-[#34d399] border-b-6 border-b-[#022c22] p-3.5 rounded-3xl shadow-xl animate-toy-bob-reverse max-w-[200px]">
                <div className="flex items-center gap-1.5 mb-1">
                  <Globe className="w-4 h-4 text-emerald-300" />
                  <span className="text-[11px] font-cartoon font-bold text-emerald-200 uppercase tracking-wider">
                    Official Flagship
                  </span>
                </div>
                <div className="text-sm font-black text-white font-cartoon">
                  pankaj.life
                </div>
                <div className="text-[10px] text-emerald-300 font-bold font-cartoon mt-0.5">
                  🟢 100% Live &amp; Verified
                </div>
              </div>

              {/* Floating Cartoon Badge 2: Tech Universe Badge (Chunky orange toy console) */}
              <div
                className="absolute -bottom-6 -left-3 bg-[#7c2d12] border-3 border-[#fb923c] border-b-6 border-b-[#431407] p-3.5 rounded-3xl shadow-xl animate-toy-bob max-w-[220px]"
                style={{ animationDelay: "1.2s" }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Code2 className="w-4 h-4 text-amber-300" />
                  <span className="text-[11px] font-cartoon font-bold text-amber-200 uppercase tracking-wider">
                    Creative Code
                  </span>
                </div>
                <div className="text-sm font-black text-white font-cartoon">
                  Next.js 16 • React 19
                </div>
                <div className="flex items-center gap-2 mt-2 pt-1 border-t border-amber-500/30">
                  <BrandIcon name="nextjs" size={16} className="text-white" />
                  <BrandIcon name="react" size={16} />
                  <BrandIcon name="typescript" size={16} />
                  <BrandIcon name="tailwind" size={16} />
                </div>
              </div>

              {/* Floating Cartoon Badge 3: Online Identity Badge (Playful candy pill) */}
              <div
                className="absolute top-1/2 -right-6 -translate-y-1/2 bg-[#831843] border-3 border-[#f472b6] border-b-6 border-b-[#500724] px-4 py-2 rounded-full shadow-xl animate-toy-bob hidden sm:flex items-center gap-2"
                style={{ animationDelay: "2s" }}
              >
                <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
                <span className="text-xs font-cartoon font-black text-white tracking-wider">
                  @ivpankaj
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Playful Scroll Down Prompt */}
        <div className="pt-16 pb-4 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to About Section"
            className="flex flex-col items-center gap-1.5 text-amber-300 hover:text-white transition-colors group cursor-pointer"
          >
            <span className="text-xs font-cartoon font-bold uppercase tracking-widest bg-[#1a2352] px-3.5 py-1 rounded-full border border-indigo-400/30">
              Scroll to explore universe ⬇️
            </span>
            <ChevronDown className="w-5 h-5 animate-bounce text-pink-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
