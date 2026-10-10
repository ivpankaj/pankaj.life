import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  Code,
  Target,
  ArrowRight,
  Star,
} from "lucide-react";
import { profile } from "@/data/profile";
import { constructMetadata } from "@/lib/metadata";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { PersonJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "About",
  description: `Learn about Pankaj Verma (@${profile.handle}) and projects on pankaj.life.`,
  canonicalUrl: "/about",
});

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-white">
      <PersonJsonLd />
      <div className="max-w-5xl mx-auto space-y-12">
        <SectionHeader title={`About ${profile.name}`} />

        {/* Persona Spotlight Card */}
        <GlassCard variant="blue">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 text-center md:text-left">
              <div className="w-24 h-24 mx-auto md:mx-0 rounded-3xl bg-gradient-to-tr from-amber-400 via-pink-500 to-indigo-600 p-[2.5px] shadow-lg shadow-pink-500/20 mb-4 animate-toy-bob">
                <div className="w-full h-full bg-white rounded-[22px] flex items-center justify-center font-black text-4xl text-slate-900 font-cartoon">
                  P
                </div>
              </div>
              <h2 className="text-3xl font-black text-slate-900 font-cartoon">{profile.name}</h2>
              <p className="text-sm font-bold font-cartoon text-pink-600">@{profile.handle}</p>
            </div>

            <div className="md:col-span-8 space-y-4 text-slate-700 text-base leading-relaxed font-medium">
              <p>{profile.aboutIntro}</p>
              <p>{profile.approach}</p>
            </div>
          </div>
        </GlassCard>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Engineering Approach */}
          <GlassCard variant="purple" className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-purple-100 text-purple-700 border-2 border-purple-200">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 font-cartoon">My Approach to Building</h3>
            </div>
            <p className="text-base text-slate-700 leading-relaxed font-medium">
              {profile.approach}
            </p>
          </GlassCard>

          {/* Technology Interests */}
          <GlassCard variant="blue" className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-cyan-100 text-cyan-700 border-2 border-cyan-200">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 font-cartoon">Technology Interests</h3>
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

          {/* Future Horizons */}
          <GlassCard variant="orange" className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-100 text-amber-700 border-2 border-amber-200">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 font-cartoon">Future Horizons</h3>
            </div>
            <p className="text-base text-slate-700 leading-relaxed font-medium">
              {profile.futureGoals}
            </p>
          </GlassCard>

          {/* Digital Hub */}
          <GlassCard variant="blue" className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-indigo-100 text-indigo-700 border-2 border-indigo-200">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 font-cartoon">Digital Presence</h3>
            </div>
            <p className="text-base text-slate-700 leading-relaxed font-medium">
              This portfolio represents my personal technology journey, built with clean craftsmanship on Next.js 16.
            </p>
          </GlassCard>
        </div>

        {/* Bottom Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
          <Link
            href="/projects"
            className="pixar-btn-primary px-7 py-3.5 text-sm font-black text-white flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="pixar-btn-secondary px-7 py-3.5 text-sm font-black text-white cursor-pointer shadow-md"
          >
            <span>Connect With Me</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
