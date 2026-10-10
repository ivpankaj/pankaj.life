import React from "react";
import Link from "next/link";
import {
  Compass,
  Sparkles,
  Code,
  Target,
  ArrowRight,
  ShieldCheck,
  Star,
} from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Story & Mission"
          title="About Pankaj Verma"
          subtitle="Get to know the explorer behind the screen — curiosity, creative architecture, and a love for animated digital design."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Persona Card */}
          <div className="lg:col-span-7 space-y-6">
            <GlassCard variant="blue">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-amber-400 via-pink-500 to-indigo-600 p-[2.5px] shadow-xl shadow-pink-500/30">
                  <div className="w-full h-full bg-[#1e1b4b] rounded-[21px] flex items-center justify-center font-black text-2xl text-white font-cartoon">
                    P
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white font-cartoon flex items-center gap-2">
                    {profile.name}
                    <Sparkles className="w-5 h-5 text-amber-300 fill-amber-300" />
                  </h3>
                  <p className="text-xs text-indigo-300 font-bold font-cartoon">
                    Online as {profile.displayName} (@{profile.handle})
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                <p>{profile.aboutIntro}</p>
                <p>{profile.approach}</p>
              </div>

              {/* Status Banner */}
              <div className="mt-6 pt-6 border-t-2 border-indigo-900/60 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs text-emerald-300 font-black font-cartoon">
                    Current Focus: {profile.statusText}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-amber-300 font-black font-cartoon">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Canonical Domain: pankaj.life</span>
                </div>
              </div>
            </GlassCard>

            {/* Approach to Engineering */}
            <GlassCard variant="purple">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-300 border-2 border-purple-400/40">
                  <Code className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black text-white font-cartoon">My Approach to Building</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                {profile.approach} Every digital space should feel joyful, responsive, and alive — pairing robust technical foundations with whimsical Pixar-inspired tactile micro-interactions.
              </p>
            </GlassCard>
          </div>

          {/* Right Column: Key Pillars & Interests */}
          <div className="lg:col-span-5 space-y-6">
            {/* Core Tech Interests */}
            <GlassCard variant="blue">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-300 border-2 border-cyan-400/40">
                  <Compass className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black text-white font-cartoon">Technology Interests</h4>
              </div>
              <ul className="space-y-3">
                {profile.interests.map((interest, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-slate-200 font-medium"
                  >
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400 mt-1 shrink-0" />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            {/* Future Goals */}
            <GlassCard variant="orange">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-300 border-2 border-amber-400/40">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black text-white font-cartoon">Future Horizons</h4>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed font-medium mb-4">
                {profile.futureGoals}
              </p>
              <Link
                href="/about"
                className="pixar-btn-gold px-5 py-2.5 text-xs font-black text-white inline-flex items-center gap-1.5 shadow-md"
              >
                <span>Read Full Digital Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
