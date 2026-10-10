import React from "react";
import { Radar, ExternalLink, Activity, Sparkles } from "lucide-react";
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {exploringItems.map((item) => (
            <GlassCard
              key={item.id}
              variant="blue"
              className="flex flex-col justify-between group hover:border-cyan-400"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-[#0b102e] border-2 border-cyan-400/50 text-cyan-300 shadow-lg group-hover:rotate-12 transition-transform">
                      <Radar className="w-6 h-6 animate-spin" style={{ animationDuration: "10s" }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white font-cartoon group-hover:text-amber-300 transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-xs font-bold font-cartoon text-cyan-300">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-black font-cartoon uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border-2 border-cyan-400/40 shrink-0">
                    {item.status}
                  </span>
                </div>

                <p className="text-sm text-slate-200 font-medium leading-relaxed mb-4">
                  {item.focus}
                </p>
              </div>

              <div className="pt-4 border-t-2 border-indigo-900/60 flex items-center justify-between text-xs font-cartoon text-slate-300">
                <span className="flex items-center gap-1.5 font-bold">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span>Updated: {item.updatedDate}</span>
                </span>
                {item.projectUrl && (
                  <a
                    href={item.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-black text-pink-400 hover:text-white transition-colors"
                  >
                    <span>View Docs / Spec</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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
