import React from "react";
import { ExternalLink, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import { socials } from "@/data/socials";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BrandIcon } from "@/components/ui/BrandIcon";

export function SocialsUniverseSection() {
  return (
    <section id="socials" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Digital Orbit"
          title="Social Media Universe"
          subtitle="Connect with Pankaj Verma across verified profiles under the handle @ivpankaj. No fake metrics, just direct channels to collaborate and converse."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socials.map((platform) => (
            <a
              key={platform.id}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-glass cosmic-glass-hover rounded-3xl p-6 sm:p-7 flex flex-col justify-between group border-white/10 hover:border-indigo-400/40 relative overflow-hidden transition-all duration-300"
            >
              {/* Subtle Platform-Specific Radial Tint */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ backgroundColor: platform.brandColor }}
              />

              <div>
                {/* Header with Brand SVG & Handle */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ borderColor: `${platform.brandColor}40` }}
                  >
                    <BrandIcon
                      name={platform.id}
                      size={28}
                      className="text-white"
                    />
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                    <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-white" />
                  </div>
                </div>

                {/* Identity Tag */}
                <div className="space-y-1 mb-3">
                  <h3 className="text-xl font-black text-white group-hover:text-indigo-200 transition-colors">
                    {platform.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-indigo-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{platform.handle}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {platform.purpose}
                </p>
              </div>

              {/* Bottom Connect Pill */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">{platform.category}</span>
                <span className="text-indigo-300 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>Open Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
