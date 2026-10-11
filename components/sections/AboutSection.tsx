import React from "react";
import Link from "next/link";
import { Compass, Code2, Target, ArrowRight, Terminal } from "lucide-react";
import { profile } from "@/data/profile";
import { Meteors } from "@/components/ui/meteors";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[var(--theme-bg)] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Clean Section Header without badge or subheading */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--theme-text)]">
            About Pankaj Verma
          </h2>
        </div>

        {/* Bento Grid Layout for About details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Bio Card */}
          <div className="md:col-span-2 rounded-2xl bg-neutral-950 border border-white/[0.1] p-6 sm:p-8 flex flex-col justify-between hover:border-white/[0.25] transition-colors relative overflow-hidden group">
            <Meteors number={15} />
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/[0.03] rounded-full blur-3xl pointer-events-none" />
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Engineering Foundations
                  </h3>
                  <span className="text-xs font-mono text-neutral-400">
                    @{profile.handle} • Full-Stack Engineer
                  </span>
                </div>
              </div>
              <p className="text-neutral-300 leading-relaxed text-sm sm:text-base mb-4 font-normal">
                {profile.aboutIntro}
              </p>
              <p className="text-neutral-400 leading-relaxed text-sm sm:text-base font-normal">
                {profile.approach}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>Location: Digital Universe</span>
              <span>Full-Stack Web</span>
            </div>
          </div>

          {/* Core Philosophy Card */}
          <div className="rounded-2xl bg-neutral-950 border border-white/[0.1] p-6 sm:p-8 flex flex-col justify-between hover:border-white/[0.25] transition-colors">
            <div>
              <div className="p-2.5 w-fit rounded-xl bg-neutral-900 border border-white/10 text-white mb-6">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight mb-3">
                Architectural Approach
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                Prioritizing clean craftsmanship, user accessibility, minimal client JavaScript payloads, and responsive, fluid interfaces.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-neutral-900/60 border border-white/[0.05] text-xs font-mono text-neutral-300">
              &quot;Software should feel fast, deliberate, and reliable.&quot;
            </div>
          </div>

          {/* Interests Card */}
          <div className="rounded-2xl bg-neutral-950 border border-white/[0.1] p-6 sm:p-8 hover:border-white/[0.25] transition-colors">
            <div className="p-2.5 w-fit rounded-xl bg-neutral-900 border border-white/10 text-white mb-6">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight mb-4">
              Focus Areas
            </h3>
            <ul className="space-y-2.5">
              {profile.interests.map((interest, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs font-mono text-neutral-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-500" />
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Future Horizons Card */}
          <div className="md:col-span-2 rounded-2xl bg-neutral-950 border border-white/[0.1] p-6 sm:p-8 flex flex-col justify-between hover:border-white/[0.25] transition-colors relative overflow-hidden group">
            <Meteors number={12} />
            <div>
              <div className="p-2.5 w-fit rounded-xl bg-neutral-900 border border-white/10 text-white mb-6">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight mb-3">
                Current Objectives &amp; Vision
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                {profile.futureGoals}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
              <Link
                href="/about"
                className="text-xs font-mono text-[var(--theme-text)] hover:opacity-80 flex items-center gap-1.5 transition-opacity"
              >
                <span>Read in-depth bio</span>
                <ArrowRight className="w-3.5 h-3.5 text-[var(--theme-text)]" />
              </Link>
              <Link
                href="/contact"
                className="theme-btn px-4 py-2 rounded-lg bg-[var(--theme-btn-bg)] text-[var(--theme-btn-text)] text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                <span>Connect with Pankaj</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
