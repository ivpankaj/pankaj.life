import React from "react";
import Link from "next/link";
import {
  Compass,
  Sparkles,
  Code,
  Target,
  ArrowRight,
  Star,
} from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="About Pankaj Verma" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Persona Card */}
          <div className="lg:col-span-7 space-y-6">
            <GlassCard variant="blue">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-amber-400 via-pink-500 to-indigo-600 p-[2.5px] shadow-lg shadow-pink-500/20">
                  <div className="w-full h-full bg-white rounded-[21px] flex items-center justify-center font-black text-2xl text-slate-900 font-cartoon">
                    P
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 font-cartoon flex items-center gap-2">
                    {profile.name}
                    <Sparkles className="w-5 h-5 text-amber-500 fill-amber-500" />
                  </h3>
                  <p className="text-sm font-bold font-cartoon text-pink-600">
                    @{profile.handle}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 text-base leading-relaxed font-medium">
                <p>{profile.aboutIntro}</p>
                <p>{profile.approach}</p>
              </div>
            </GlassCard>

            {/* Approach to Engineering */}
            <GlassCard variant="purple">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-purple-100 text-purple-700 border-2 border-purple-200">
                  <Code className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black text-slate-900 font-cartoon">My Approach to Building</h4>
              </div>
              <p className="text-base text-slate-700 leading-relaxed font-medium">
                {profile.approach} Every digital space should feel joyful, responsive, and alive — pairing robust technical foundations with whimsical tactile micro-interactions.
              </p>
            </GlassCard>
          </div>

          {/* Right Column: Key Pillars & Interests */}
          <div className="lg:col-span-5 space-y-6">
            {/* Core Tech Interests */}
            <GlassCard variant="blue">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-cyan-100 text-cyan-700 border-2 border-cyan-200">
                  <Compass className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black text-slate-900 font-cartoon">Technology Interests</h4>
              </div>
              <ul className="space-y-3">
                {profile.interests.map((interest, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-slate-700 font-bold font-cartoon"
                  >
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500 mt-0.5 shrink-0" />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            {/* Future Goals */}
            <GlassCard variant="orange">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-amber-100 text-amber-700 border-2 border-amber-200">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black text-slate-900 font-cartoon">Future Horizons</h4>
              </div>
              <p className="text-base text-slate-700 leading-relaxed font-medium mb-4">
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
