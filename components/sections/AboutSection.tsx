import React from "react";
import Link from "next/link";
import {
  Compass,
  Sparkles,
  Rocket,
  Code,
  Target,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Digital Identity"
          title="About Pankaj Verma"
          subtitle="A peek into my technology philosophy, curiosity-driven learning path, and digital space."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Persona Card */}
          <div className="lg:col-span-7 space-y-6">
            <GlassCard className="border-indigo-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-rose-400 p-[2px] shadow-lg shadow-indigo-500/25">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-bold text-xl text-white">
                    P
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {profile.name}
                    <Sparkles className="w-4 h-4 text-amber-400" />
                  </h3>
                  <p className="text-xs text-indigo-300 font-mono">
                    Online as {profile.displayName} (@{profile.handle})
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>{profile.aboutIntro}</p>
                <p>{profile.approach}</p>
              </div>

              {/* Status Banner */}
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-emerald-300 font-mono">
                    Current Focus: {profile.statusText}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" />
                  <span>Verified Domain: pankaj.life</span>
                </div>
              </div>
            </GlassCard>

            {/* Approach to Engineering */}
            <GlassCard className="border-rose-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  <Code className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white">My Approach to Building</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {profile.approach} Every digital product should be constructed with meticulous precision: structured data for search clarity, clean semantic HTML for accessibility, and animated visual delight that respects user device performance.
              </p>
            </GlassCard>
          </div>

          {/* Right Column: Key Pillars & Interests */}
          <div className="lg:col-span-5 space-y-6">
            {/* Core Tech Interests */}
            <GlassCard className="border-cyan-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white">Technology Interests</h4>
              </div>
              <ul className="space-y-2.5">
                {profile.interests.map((interest, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            {/* Future Goals */}
            <GlassCard className="border-amber-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white">Future Horizons</h4>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {profile.futureGoals}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 font-mono transition-colors group"
              >
                <span>Read detailed digital profile</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
