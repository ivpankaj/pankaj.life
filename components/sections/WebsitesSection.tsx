import React from "react";
import { ExternalLink, Globe, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { websites } from "@/data/websites";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export function WebsitesSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Digital Flagship"
          title="Websites & Domains"
          subtitle="Official domains and digital properties owned, designed, and maintained by Pankaj Verma."
        />

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {websites.map((site) => (
            <GlassCard
              key={site.id}
              variant="blue"
              className="border-indigo-400/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left Preview Screen with Pixar Toy Console Look */}
                <div className="md:col-span-5 rounded-3xl bg-[#0a102c] border-3 border-[#3b4c96] border-b-6 border-b-[#070b20] overflow-hidden shadow-2xl">
                  {/* Titlebar with gummy buttons */}
                  <div className="px-4 py-3 bg-[#131d4e] border-b-2 border-[#3b4c96] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500 border border-rose-300" />
                      <span className="w-3 h-3 rounded-full bg-amber-400 border border-yellow-200" />
                      <span className="w-3 h-3 rounded-full bg-emerald-400 border border-emerald-200" />
                    </div>
                    <span className="text-xs font-bold font-cartoon text-indigo-200">
                      https://{site.domain}
                    </span>
                    <Globe className="w-3.5 h-3.5 text-emerald-300" />
                  </div>

                  {/* Visual Preview Diorama */}
                  <div className="p-7 text-center space-y-3 bg-gradient-to-tr from-[#0e163d] via-[#1a235c] to-[#25174f]">
                    <div className="inline-flex p-4 rounded-3xl bg-amber-400/20 border-2 border-amber-300/40 shadow-lg animate-toy-bob">
                      <Sparkles className="w-10 h-10 text-amber-300 fill-amber-300" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-black text-white text-xl font-cartoon tracking-tight">
                        {site.name}
                      </div>
                      <div className="text-xs font-bold font-cartoon text-pink-300">
                        Official Tech Portfolio
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 border-2 border-emerald-400/40 text-xs font-black font-cartoon text-emerald-300 shadow">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Production Live</span>
                    </div>
                  </div>
                </div>

                {/* Right Details */}
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl sm:text-3xl font-black text-white font-cartoon">
                        {site.name}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-xs font-black font-cartoon bg-emerald-500/20 text-emerald-300 border-2 border-emerald-400/40">
                        {site.status}
                      </span>
                    </div>
                    {site.isVerifiedPersonal && (
                      <span className="inline-flex items-center gap-1 text-xs text-indigo-300 font-bold font-cartoon">
                        <ShieldCheck className="w-4 h-4 text-indigo-400" />
                        Verified Ownership
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-slate-200 font-medium leading-relaxed">
                    {site.purpose}
                  </p>

                  <div className="space-y-1 text-xs font-cartoon text-slate-300">
                    <p>
                      <strong className="text-amber-300">Role:</strong> {site.role}
                    </p>
                    {site.notes && (
                      <p>
                        <strong className="text-pink-300">Notes:</strong> {site.notes}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {site.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-bold font-cartoon text-cyan-200 bg-cyan-950/60 border border-cyan-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3">
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pixar-btn-primary px-6 py-3 text-sm font-black text-white inline-flex items-center gap-2 shadow-lg"
                    >
                      <span>Visit {site.domain}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
