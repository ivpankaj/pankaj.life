import React from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Send,
  Compass,
  Code2,
  Terminal,
  Globe,
  ChevronDown,
} from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { BrandIcon } from "@/components/ui/BrandIcon";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Identity & Headline */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Persona Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-indigo-500/30 shadow-lg shadow-indigo-500/10 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-indigo-200">
                Welcome to the digital universe of{" "}
                <span className="text-white font-bold">@{profile.handle}</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
                <span className="block">{profile.name}</span>
                <span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 via-rose-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
                  {profile.tagline}
                </span>
              </h1>
              <p className="text-sm sm:text-base text-indigo-300/80 font-mono tracking-wider pt-1">
                Also known as {profile.displayName} / @{profile.handle} • {profile.domain.replace("https://", "")}
              </p>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {profile.subheading}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/projects"
                className="pixar-button px-7 py-3.5 rounded-2xl text-sm sm:text-base font-bold text-white flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="pixar-button-secondary px-7 py-3.5 rounded-2xl text-sm sm:text-base font-semibold text-slate-200 hover:text-white flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-indigo-400" />
                <span>Connect With Me</span>
              </Link>
            </div>

            {/* Verified Social Quick Connect */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Verified Handles:
              </span>
              <div className="flex items-center gap-2.5">
                {socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${social.name} — ${social.handle}`}
                    className="p-2.5 rounded-xl bg-slate-900/70 border border-white/10 text-slate-300 hover:text-white hover:border-indigo-400/50 hover:bg-slate-800 transition-all hover:scale-110 active:scale-95"
                  >
                    <BrandIcon name={social.id} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Pixar 3D-inspired Digital Diorama Composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-square">
              {/* Outer Orbit Rings */}
              <div className="absolute inset-0 rounded-full border border-indigo-500/20 animate-spin" style={{ animationDuration: "40s" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-rose-400 shadow-lg shadow-rose-500/50" />
              </div>
              <div className="absolute inset-8 rounded-full border border-rose-500/20 animate-spin" style={{ animationDuration: "28s", animationDirection: "reverse" }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50" />
              </div>

              {/* Central Glowing Core Portal */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-tr from-indigo-900/60 via-purple-900/40 to-slate-950 border border-white/20 shadow-2xl flex items-center justify-center backdrop-blur-xl">
                <div className="relative flex flex-col items-center justify-center text-center p-6 space-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 via-pink-500 to-amber-400 p-0.5 shadow-xl shadow-indigo-500/40 animate-pulse-glow">
                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                      <Terminal className="w-8 h-8 text-indigo-300" />
                    </div>
                  </div>
                  <h3 className="font-extrabold text-lg text-white tracking-tight">
                    pankaj.life
                  </h3>
                  <p className="text-xs text-indigo-200/90 font-mono">
                    Next.js 16 • TypeScript
                  </p>
                </div>
              </div>

              {/* Floating Card 1: Live Status */}
              <div className="absolute -top-4 -right-2 cosmic-glass p-3.5 rounded-2xl shadow-2xl border-white/20 animate-float-slow max-w-[190px]">
                <div className="flex items-center gap-2 mb-1.5">
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider font-mono">
                    Production
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-200">
                  pankaj.life
                </p>
                <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                  Canonical Domain
                </p>
              </div>

              {/* Floating Card 2: Tech Universe */}
              <div
                className="absolute -bottom-6 -left-4 cosmic-glass p-3.5 rounded-2xl shadow-2xl border-white/20 animate-float-reverse max-w-[210px]"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Code2 className="w-4 h-4 text-amber-400" />
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider font-mono">
                    Architecture
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-200">
                  Full-Stack TypeScript
                </p>
                <div className="flex items-center gap-1.5 mt-2">
                  <BrandIcon name="nextjs" size={14} className="text-white" />
                  <BrandIcon name="react" size={14} />
                  <BrandIcon name="typescript" size={14} />
                  <BrandIcon name="tailwind" size={14} />
                </div>
              </div>

              {/* Floating Card 3: Digital Identity */}
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 cosmic-glass px-3 py-2 rounded-xl border-white/15 animate-float-slow hidden sm:flex items-center gap-2">
                <Compass className="w-4 h-4 text-rose-400" />
                <span className="text-[11px] font-mono text-slate-200 font-semibold">
                  @ivpankaj
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 pb-4 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to About Section"
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors group"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400 group-hover:text-indigo-300">
              Scroll to explore
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-indigo-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
