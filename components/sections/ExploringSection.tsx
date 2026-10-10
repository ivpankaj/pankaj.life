import React from "react";
import { Radar, ExternalLink, Activity } from "lucide-react";
import { exploringItems } from "@/data/exploring";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export function ExploringSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Currently Exploring" />

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
                    <div className="p-3 rounded-2xl bg-cyan-50 border-2 border-cyan-200 text-cyan-600 shadow-md group-hover:rotate-12 transition-transform">
                      <Radar className="w-6 h-6 animate-spin" style={{ animationDuration: "10s" }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 font-cartoon group-hover:text-pink-600 transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-xs font-bold font-cartoon text-cyan-700">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-black font-cartoon uppercase tracking-wider text-cyan-700 shrink-0">
                    {item.status}
                  </span>
                </div>

                <p className="text-sm text-slate-700 font-medium leading-relaxed mb-4">
                  {item.focus}
                </p>
              </div>

              <div className="pt-4 border-t-2 border-slate-100 flex items-center justify-between text-xs font-cartoon text-slate-500">
                <span className="flex items-center gap-1.5 font-bold">
                  <Activity className="w-4 h-4 text-emerald-500" />
                  <span>Updated: {item.updatedDate}</span>
                </span>
                {item.projectUrl && (
                  <a
                    href={item.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-black text-pink-600 hover:text-pink-700 transition-colors"
                  >
                    <span>View Docs</span>
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
