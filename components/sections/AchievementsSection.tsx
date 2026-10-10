import React from "react";
import Link from "next/link";
import {
  Calendar,
  ArrowRight,
  ExternalLink,
  Star,
} from "lucide-react";
import { milestones } from "@/data/achievements";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10 bg-white scroll-mt-28">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="Technical Adventures" />

        {/* Timeline Container */}
        <div className="relative border-l-4 border-indigo-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10 sm:space-y-12">
          {milestones.map((milestone) => (
            <div key={milestone.id} className="relative group">
              {/* Cartoon Star Node */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 rounded-2xl bg-amber-400 border-2 border-yellow-200 border-b-4 border-b-amber-700 flex items-center justify-center shadow-md group-hover:scale-125 transition-transform duration-200">
                <Star className="w-4 h-4 text-slate-950 fill-slate-950" />
              </div>

              {/* Milestone Card */}
              <GlassCard variant="blue" className="p-6 sm:p-7 group-hover:border-amber-400">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 font-cartoon text-xs font-bold text-indigo-700">
                    <Calendar className="w-4 h-4 text-indigo-500" />
                    <span>
                      {milestone.year} {milestone.quarter ? `• ${milestone.quarter}` : ""}
                    </span>
                    {milestone.organization && (
                      <span className="text-slate-500">
                        • {milestone.organization}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-bold font-cartoon text-pink-600">
                    {milestone.category}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 font-cartoon mb-2 group-hover:text-pink-600 transition-colors">
                  {milestone.title}
                </h3>

                <p className="text-sm text-slate-700 font-medium leading-relaxed mb-4">
                  {milestone.description}
                </p>

                {milestone.credentialUrl && (
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={milestone.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-black text-pink-600 hover:text-pink-700 font-cartoon transition-colors"
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
            className="pixar-btn-secondary px-7 py-3.5 text-sm font-black text-white inline-flex items-center gap-2 shadow-md"
          >
            <span>View Full Timeline</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
