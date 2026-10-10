import React from "react";
import Link from "next/link";
import {
  Calendar,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Award,
  CheckCircle,
} from "lucide-react";
import { milestones } from "@/data/achievements";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          badge="Progression & Milestones"
          title="Technical Journey"
          subtitle="A transparent chronology of engineering milestones, architectural achievements, and foundational learning moments."
        />

        {/* Timeline Container */}
        <div className="relative border-l-2 border-indigo-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10 sm:space-y-12">
          {milestones.map((milestone) => (
            <div key={milestone.id} className="relative group">
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-400 flex items-center justify-center shadow-lg shadow-indigo-500/50 group-hover:scale-125 transition-transform duration-300">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-indigo-400" />
              </div>

              {/* Milestone Card */}
              <GlassCard className="border-white/10 hover:border-indigo-500/30 transition-all p-5 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-indigo-300">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>
                      {milestone.year} {milestone.quarter ? `• ${milestone.quarter}` : ""}
                    </span>
                    {milestone.organization && (
                      <span className="text-slate-400">
                        • {milestone.organization}
                      </span>
                    )}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white/5 border border-white/10 text-slate-300">
                    {milestone.category}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {milestone.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {milestone.description}
                </p>

                {milestone.credentialUrl && (
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                    <a
                      href={milestone.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 font-mono transition-colors"
                    >
                      <span>Verified Launch / Evidence</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </GlassCard>
            </div>
          ))}
        </div>

        {/* View All Milestones Action */}
        <div className="mt-12 text-center">
          <Link
            href="/achievements"
            className="pixar-button-secondary inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-semibold text-white"
          >
            <span>View Full Timeline & Milestone Log</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
