import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { socials } from "@/data/socials";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BrandIcon } from "@/components/ui/BrandIcon";

export function SocialsUniverseSection() {
  return (
    <section id="socials" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Social Media Universe" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {socials.map((platform) => (
            <a
              key={platform.id}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 border-4 border-slate-200 border-b-8 border-b-slate-300 shadow-xl shadow-slate-100/60 rounded-[32px] p-6 sm:p-7 flex flex-col justify-between group hover:border-pink-300 hover:border-b-pink-400 hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <div>
                {/* Header with Brand SVG & Handle */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="p-4 rounded-3xl bg-slate-50 border-2 border-slate-200 shadow-md group-hover:rotate-6 transition-transform"
                    style={{ borderColor: `${platform.brandColor}30` }}
                  >
                    <BrandIcon
                      name={platform.id}
                      size={32}
                    />
                  </div>
                  <div className="p-2.5 rounded-2xl bg-slate-100 group-hover:bg-pink-500 group-hover:text-white text-slate-500 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                {/* Identity Tag */}
                <div className="space-y-1 mb-3">
                  <h3 className="text-2xl font-black text-slate-900 font-cartoon group-hover:text-pink-600 transition-colors">
                    {platform.name}
                  </h3>
                  <div className="text-xs font-cartoon font-bold text-pink-600">
                    {platform.handle}
                  </div>
                </div>

                <p className="text-sm text-slate-700 font-medium leading-relaxed mb-6">
                  {platform.purpose}
                </p>
              </div>

              {/* Bottom Connect Pill */}
              <div className="pt-4 border-t-2 border-slate-100 flex items-center justify-between text-xs font-cartoon">
                <span className="text-slate-500 font-bold">{platform.category}</span>
                <span className="text-pink-600 font-black group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
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
