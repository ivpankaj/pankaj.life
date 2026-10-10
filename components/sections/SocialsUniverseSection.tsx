import React from "react";
import { ExternalLink, ShieldCheck, ArrowRight, Star } from "lucide-react";
import { socials } from "@/data/socials";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BrandIcon } from "@/components/ui/BrandIcon";

export function SocialsUniverseSection() {
  return (
    <section id="socials" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Social Orbit"
          title="Social Media Universe"
          subtitle="Connect with Pankaj Verma across verified profiles under the handle @ivpankaj. Real conversations and open collaboration."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {socials.map((platform) => (
            <a
              key={platform.id}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pixar-card p-6 sm:p-7 flex flex-col justify-between group hover:border-pink-400 hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <div>
                {/* Header with Brand SVG & Handle */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="p-4 rounded-3xl bg-[#0d1438] border-2 border-white/20 shadow-xl group-hover:rotate-6 transition-transform"
                    style={{ borderColor: `${platform.brandColor}70` }}
                  >
                    <BrandIcon
                      name={platform.id}
                      size={32}
                      className="text-white"
                    />
                  </div>
                  <div className="p-2.5 rounded-2xl bg-white/10 group-hover:bg-pink-500 text-white transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                {/* Identity Tag */}
                <div className="space-y-1 mb-3">
                  <h3 className="text-2xl font-black text-white font-cartoon group-hover:text-amber-300 transition-colors">
                    {platform.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-cartoon font-bold text-pink-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>{platform.handle}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-200 font-medium leading-relaxed mb-6">
                  {platform.purpose}
                </p>
              </div>

              {/* Bottom Connect Pill */}
              <div className="pt-4 border-t-2 border-indigo-900/60 flex items-center justify-between text-xs font-cartoon">
                <span className="text-indigo-300 font-bold">{platform.category}</span>
                <span className="text-amber-300 font-black group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
                  <span>Visit Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
