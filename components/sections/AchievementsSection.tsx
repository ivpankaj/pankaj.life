import React from "react";
import { ExternalLink } from "lucide-react";
import { milestones } from "@/data/achievements";
import { Timeline, TimelineEntry } from "@/components/ui/timeline";

export function AchievementsSection({
  headingTag = "h2",
}: {
  headingTag?: "h1" | "h2";
} = {}) {
  const timelineData: TimelineEntry[] = milestones.map((milestone) => ({
    title: `${milestone.year} ${milestone.quarter ?? ""}`,
    content: (
      <div className="rounded-2xl bg-neutral-950 border border-white/[0.1] p-6 hover:border-white/[0.25] transition-colors mb-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-xs font-mono text-neutral-400">
            {milestone.category}
          </span>
          {milestone.organization && (
            <span className="text-xs font-mono text-neutral-500">
              {milestone.organization}
            </span>
          )}
        </div>

        <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
          {milestone.title}
        </h4>

        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
          {milestone.description}
        </p>

        {milestone.credentialUrl && (
          <div className="pt-3 border-t border-white/[0.08]">
            <a
              href={milestone.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-white hover:text-neutral-300 inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Verified Details</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    ),
  }));

  return (
    <section id="journey" className="py-8 bg-[var(--theme-bg)] scroll-mt-20">
      <Timeline
        data={timelineData}
        heading="Journey & Milestones"
        headingTag={headingTag}
      />
    </section>
  );
}
