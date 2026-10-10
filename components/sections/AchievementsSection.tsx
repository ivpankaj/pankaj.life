import React from "react";
import Link from "next/link";
import {
  Calendar,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Star,
  Award,
} from "lucide-react";
import { milestones } from "@/data/achievements";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          badge="Milestones & Journey"
          title="Technical Adventures"
          subtitle="A transparent timeline of engineering milestones, architectural achievements, and foundational learning moments."
        />

        {/* Timeline Container */}
        <div className="relative border-l-4 border-indigo-400/50 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10 sm:space-y-12">
          {milestones.map((milestone) => (
            <div key={milestone.id} className="relative group">
              {/* Cute Cartoon Star Node */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 rounded-2xl bg-amber-400 border-2 border-yellow-200 border-b-4 border-b-amber-700 flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-200">
                <Star className="w-4 h-4 text-slate-950 fill-slate-950" />
              </div>

              {/* Milestone Card */}
              <GlassCard variant="blue" className="p-6 sm:p-7 group-hover:border-amber-400">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 font-cartoon text-xs font-bold text-amber-300">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>
                      {milestone.year} {milestone.quarter ? `• ${milestone.quarter}` : ""}
                    </span>
                    {milestone.organization && (
                      <span className="text-indigo-200">
                        • {milestone.organization}
                      </span>
                    )}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-black font-cartoon uppercase tracking-wider bg-pink-600 text-white border border-pink-400 shadow-sm">
                    {milestone.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white font-cartoon mb-2 group-hover:text-amber-300 transition-colors">
                  {milestone.title}
                </h3>

                <p className="text-sm text-slate-200 font-medium leading-relaxed mb-4">
                  {milestone.description}
                </p>

                {milestone.credentialUrl && (
                  <div className="pt-3 border-t border-indigo-900/60 flex items-center justify-between">
                    <a
                      href={milestone.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-black text-pink-400 hover:text-white font-cartoon transition-colors"
                    >
                      <span>Verified Launch / Evidence</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </GlassCard>
            </div>
          ))}
        </div>

        {/* View All Milestones Action */}
        <div className="mt-14 text-center">
          <Link
            href="/achievements"
            className="pixar-btn-secondary px-7 py-3.5 text-sm font-black text-white inline-flex items-center gap-2"
          >
            <span>View Full Timeline & Milestone Log</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
