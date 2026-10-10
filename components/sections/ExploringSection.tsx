import React from "react";
import { Radar, Sparkles, ExternalLink, Activity } from "lucide-react";
import { exploringItems } from "@/data/exploring";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export function ExploringSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Live Radar"
          title="Currently Exploring"
          subtitle="A real-time laboratory dashboard tracking architectural concepts, tooling experiments, and technical deep dives in progress."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {exploringItems.map((item) => (
            <GlassCard
              key={item.id}
              className="border-white/10 hover:border-cyan-500/30 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-900 border border-white/10 text-cyan-400">
                      <Radar className="w-5 h-5 animate-spin" style={{ animationDuration: "12s" }} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {item.name}
                      </h3>
                      <span className="text-[11px] font-mono text-cyan-300">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 shrink-0">
                    {item.status}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.focus}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Updated: {item.updatedDate}</span>
                </span>
                {item.projectUrl && (
                  <a
                    href={item.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <span>View Docs / Spec</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
