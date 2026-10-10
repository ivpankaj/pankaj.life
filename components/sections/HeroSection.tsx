import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Send,
  Rocket,
  ChevronDown,
} from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { BrandIcon } from "@/components/ui/BrandIcon";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Clean Title & Direct 3D Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Main Bubbly Title without badges or subheadings */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.04] font-cartoon">
                <span className="block text-slate-900">
                  {profile.name}
                </span>
                <span className="block mt-2 text-3xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-amber-500 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                  {profile.tagline}
                </span>
              </h1>
            </div>

            {/* 3D Tactile Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/projects"
                className="pixar-btn-primary px-8 py-4 text-base sm:text-lg font-black text-white flex items-center gap-2 group cursor-pointer shadow-lg"
              >
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Explore My Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="pixar-btn-secondary px-7 py-4 text-base sm:text-lg font-black text-white flex items-center gap-2 group cursor-pointer shadow-lg"
              >
                <Send className="w-5 h-5 text-indigo-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <span>Connect With Me</span>
              </Link>
            </div>

            {/* Social Hangouts */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${social.name} — ${social.handle}`}
                  className="p-3 rounded-2xl bg-slate-50 border-2 border-slate-200 border-b-4 border-b-slate-300 text-slate-700 hover:text-pink-600 hover:border-pink-300 hover:scale-110 active:translate-y-1 transition-all shadow-sm"
                >
                  <BrandIcon name={social.id} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Clean 3D Cartoon Rocket & Planet Diorama without badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              {/* Central Glowing Planet Base */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 border-4 border-indigo-200 border-b-8 border-b-indigo-900 shadow-[0_25px_60px_rgba(99,102,241,0.35),inset_0_8px_0_rgba(255,255,255,0.4)] flex items-center justify-center animate-toy-bob">
                {/* 3D Toy Rocket Illustration */}
                <div className="relative w-44 h-44 flex flex-col items-center justify-center">
                  <svg
                    viewBox="0 0 120 120"
                    className="w-36 h-36 drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Rocket Exhaust Flame */}
                    <path
                      d="M60 88 C55 105, 52 118, 60 120 C68 118, 65 105, 60 88 Z"
                      fill="url(#exhaustGradHero)"
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
                      fill="url(#rocketBodyGradHero)"
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
                    {/* Porthole Window */}
                    <circle
                      cx="60"
                      cy="56"
                      r="13"
                      fill="#38bdf8"
                      stroke="#0284c7"
                      strokeWidth="3"
                    />
                    <circle cx="60" cy="56" r="8" fill="#e0f2fe" />
                    <ellipse cx="58" cy="52" rx="4" ry="2" fill="#ffffff" />
                    <defs>
                      <linearGradient id="rocketBodyGradHero" x1="45" y1="20" x2="75" y2="90">
                        <stop stopColor="#ffffff" />
                        <stop offset="0.7" stopColor="#f8fafc" />
                        <stop offset="1" stopColor="#cbd5e1" />
                      </linearGradient>
                      <linearGradient id="exhaustGradHero" x1="60" y1="88" x2="60" y2="120">
                        <stop stopColor="#fde047" />
                        <stop offset="0.5" stopColor="#f97316" />
                        <stop offset="1" stopColor="#ef4444" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="font-cartoon text-sm font-black text-amber-200 drop-shadow mt-1">
                    pankaj.life
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Prompt */}
        <div className="pt-12 pb-2 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to About Section"
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors group cursor-pointer"
          >
            <ChevronDown className="w-6 h-6 animate-bounce text-pink-500" />
          </a>
        </div>
      </div>
    </section>
  );
}
