import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  Code2,
  Target,
  ArrowRight,
  Terminal,
  Globe,
} from "lucide-react";
import { profile } from "@/data/profile";
import { constructMetadata } from "@/lib/metadata";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: `About ${profile.name} | Software Developer & Full-Stack Engineer`,
  description: `Learn about Pankaj Verma (@${profile.handle}) — software developer and full-stack engineer. Technical approach, engineering philosophy, verified skills, and focus areas.`,
  canonicalUrl: "/about",
});

export default function AboutPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[var(--theme-bg)] min-h-screen">
      <BreadcrumbsJsonLd items={breadcrumbItems} />
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Clean Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--theme-text)]">
            About {profile.name}
          </h1>
        </div>

        {/* Persona Spotlight Card */}
        <div className="rounded-2xl bg-neutral-950 border border-white/[0.1] p-6 sm:p-10 hover:border-white/[0.2] transition-colors relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 text-center md:text-left">
              <div className="w-20 h-20 mx-auto md:mx-0 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-4">
                <Terminal className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {profile.name}
              </h2>
              <p className="text-xs font-mono text-neutral-400 mt-1">
                @{profile.handle} • Full-Stack Engineer
              </p>
            </div>

            <div className="md:col-span-8 space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
              <p>{profile.aboutIntro}</p>
              <p className="text-neutral-400">{profile.approach}</p>
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Engineering Approach */}
          <div className="rounded-2xl bg-neutral-950 border border-white/[0.1] p-6 sm:p-8 space-y-4 hover:border-white/[0.2] transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Engineering Approach
              </h3>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {profile.approach}
            </p>
          </div>

          {/* Technology Interests */}
          <div className="rounded-2xl bg-neutral-950 border border-white/[0.1] p-6 sm:p-8 space-y-4 hover:border-white/[0.2] transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Technical Focus Areas
              </h3>
            </div>
            <ul className="space-y-2.5">
              {profile.interests.map((interest, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-xs font-mono text-neutral-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Future Horizons */}
          <div className="rounded-2xl bg-neutral-950 border border-white/[0.1] p-6 sm:p-8 space-y-4 hover:border-white/[0.2] transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Current Horizons &amp; Goals
              </h3>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {profile.futureGoals}
            </p>
          </div>

          {/* Digital Flagship */}
          <div className="rounded-2xl bg-neutral-950 border border-white/[0.1] p-6 sm:p-8 space-y-4 hover:border-white/[0.2] transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Personal Digital Flagship
              </h3>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">
              This portfolio represents my personal digital workshop and hub, built with Next.js 16, TypeScript, and the official Aceternity UI component system.
            </p>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors flex items-center gap-2"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full border border-white/[0.2] bg-neutral-950 text-white font-medium text-sm hover:bg-neutral-900 transition-colors"
          >
            <span>Connect with Pankaj</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
