import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Compass,
  Code,
  Target,
  ArrowRight,
  ShieldCheck,
  Globe,
  Layers,
} from "lucide-react";
import { profile } from "@/data/profile";
import { constructMetadata } from "@/lib/metadata";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { PersonJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "About Digital Identity",
  description: `Learn about Pankaj Verma (@${profile.handle}), technology philosophy, learning journey, and projects on pankaj.life.`,
  canonicalUrl: "/about",
});

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <PersonJsonLd />
      <div className="max-w-5xl mx-auto space-y-12">
        <SectionHeader
          badge="Digital Identity"
          title={`About ${profile.name}`}
          subtitle="An exploration of who I am, my philosophy toward technology, and my ongoing learning voyage across the modern web."
        />

        {/* Persona Spotlight Card */}
        <GlassCard className="border-indigo-500/30">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 text-center md:text-left">
              <div className="w-24 h-24 mx-auto md:mx-0 rounded-3xl bg-gradient-to-tr from-indigo-500 via-rose-500 to-amber-400 p-[2.5px] shadow-2xl shadow-indigo-500/30 mb-4">
                <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center font-black text-4xl text-white">
                  P
                </div>
              </div>
              <h2 className="text-2xl font-black text-white">{profile.name}</h2>
              <p className="text-sm font-mono text-indigo-300">@{profile.handle}</p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Active Builder</span>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>{profile.aboutIntro}</p>
              <p>{profile.subheading}</p>
            </div>
          </div>
        </GlassCard>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Engineering Approach */}
          <GlassCard className="border-rose-500/20 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">My Approach to Building</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {profile.approach}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              I prioritize clean architectures with Next.js Server Components, strict type safety, zero unnecessary client bundles, and tactile UI micro-interactions inspired by Pixar storytelling.
            </p>
          </GlassCard>

          {/* Technology Interests */}
          <GlassCard className="border-cyan-500/20 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Technology Focus Areas</h3>
            </div>
            <ul className="space-y-3">
              {profile.interests.map((interest, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-slate-300"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* Future Horizons */}
          <GlassCard className="border-amber-500/20 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Future Goals</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {profile.futureGoals}
            </p>
          </GlassCard>

          {/* Verification & Transparency */}
          <GlassCard className="border-indigo-500/20 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Truthful Portfolio Standard</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              This portfolio presents only verified facts. Unverified claims, exaggerated metrics, and fake titles are strictly omitted.
            </p>
            <div className="pt-2 text-xs font-mono text-indigo-300">
              Official Hub: https://pankaj.life
            </div>
          </GlassCard>
        </div>

        {/* Bottom Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
          <Link
            href="/projects"
            className="pixar-button px-6 py-3 rounded-2xl text-sm font-bold text-white flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="pixar-button-secondary px-6 py-3 rounded-2xl text-sm font-semibold text-slate-200 cursor-pointer"
          >
            <span>Connect With Me</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
