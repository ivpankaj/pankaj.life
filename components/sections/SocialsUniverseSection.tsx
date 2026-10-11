import React from "react";
import { ArrowUpRight } from "lucide-react";
import { socials } from "@/data/socials";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { FloatingDock, FloatingDockItem } from "@/components/ui/floating-dock";

export function SocialsUniverseSection({
  headingTag = "h2",
}: {
  headingTag?: "h1" | "h2";
} = {}) {
  const dockItems: FloatingDockItem[] = socials.map((social) => ({
    title: social.name,
    icon: <BrandIcon name={social.id} size={22} />,
    href: social.url,
  }));

  return (
    <section id="socials" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[var(--theme-bg)] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Clean Section Header without badge or subheading */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          {headingTag === "h1" ? (
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--theme-text)]">
              Connect Across Platforms
            </h1>
          ) : (
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--theme-text)]">
              Connect Across Platforms
            </h2>
          )}
        </div>

        {/* Aceternity UI Floating Dock Showcase */}
        <div className="flex justify-center mb-14">
          <FloatingDock items={dockItems} />
        </div>

        {/* Detailed Grid of Social Handles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socials.map((platform) => (
            <a
              key={platform.id}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${platform.name} profile of Pankaj Verma (${platform.handle})`}
              className="rounded-2xl bg-neutral-950 border border-white/[0.1] p-6 hover:border-white/[0.25] transition-colors flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center">
                    <BrandIcon name={platform.id} size={28} />
                  </div>
                  <div className="p-2 rounded-lg bg-neutral-900/60 text-[var(--theme-text-muted)] group-hover:text-[var(--theme-text)] transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[var(--theme-text)] tracking-tight">
                  {platform.name}
                </h3>
                <div className="text-xs font-mono text-[var(--theme-text-muted)] mt-0.5 mb-3">
                  {platform.handle}
                </div>

                <p className="text-sm text-[var(--theme-text-muted)] leading-relaxed font-normal">
                  {platform.purpose}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[var(--theme-text-muted)]">
                <span>{platform.category}</span>
                <span className="text-[var(--theme-text)] group-hover:underline">Visit Profile →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
