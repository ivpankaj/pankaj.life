import React from "react";
import { ExternalLink, Cpu, Sparkles, Terminal, Activity } from "lucide-react";
import { exploringItems } from "@/data/exploring";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export function ExploringSection() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Terminal className="w-5 h-5 text-neutral-300" />;
      case 1:
        return <Cpu className="w-5 h-5 text-neutral-300" />;
      case 2:
        return <Sparkles className="w-5 h-5 text-neutral-300" />;
      default:
        return <Activity className="w-5 h-5 text-neutral-300" />;
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[var(--theme-bg)]">
      <div className="max-w-7xl mx-auto">
        {/* Clean Section Header without badge or subheading */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--theme-text)]">
            Current Technical Explorations
          </h2>
        </div>

        <BentoGrid className="max-w-6xl mx-auto">
          {exploringItems.map((item, idx) => (
            <BentoGridItem
              key={item.id}
              className={idx === 0 || idx === 3 ? "md:col-span-2" : "md:col-span-1"}
              title={
                <div className="flex items-center justify-between gap-2">
                  <span>{item.name}</span>
                  <span className="text-xs font-mono text-neutral-400">
                    {item.status}
                  </span>
                </div>
              }
              description={
                <div className="space-y-3">
                  <p className="text-neutral-400 text-sm">{item.focus}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-mono text-neutral-500">
                    <span>{item.category}</span>
                    {item.projectUrl && (
                      <a
                        href={item.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-300 hover:text-white flex items-center gap-1 transition-colors"
                      >
                        <span>Docs</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              }
              header={
                <div className="flex flex-1 w-full h-full min-h-[5rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/[0.05] p-4 flex items-end">
                  <span className="text-xs font-mono text-neutral-500">
                    Updated: {item.updatedDate}
                  </span>
                </div>
              }
              icon={
                <div className="p-2 rounded-lg bg-neutral-900 border border-white/10 w-fit mb-1">
                  {getIcon(idx)}
                </div>
              }
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
