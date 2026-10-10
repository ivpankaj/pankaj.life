import React from "react";
import { ExternalLink, Globe, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { websites } from "@/data/websites";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { BrandIcon } from "@/components/ui/BrandIcon";

export function WebsitesSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Digital Properties"
          title="Websites & Domains"
          subtitle="Official domains and production web properties owned, designed, and maintained by Pankaj Verma."
        />

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {websites.map((site) => (
            <GlassCard
              key={site.id}
              className="border-indigo-500/30 bg-gradient-to-br from-slate-900/90 via-indigo-950/40 to-slate-950"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left Preview Screen */}
                <div className="md:col-span-5 rounded-2xl bg-slate-950 border border-white/15 overflow-hidden shadow-2xl">
                  {/* Titlebar */}
                  <div className="px-3.5 py-2.5 bg-slate-900 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      https://{site.domain}
                    </span>
                    <Globe className="w-3 h-3 text-emerald-400" />
                  </div>

                  {/* Visual Preview Diorama */}
                  <div className="p-6 text-center space-y-3 bg-gradient-to-tr from-slate-950 via-indigo-950/60 to-purple-950/30">
                    <div className="inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 shadow-lg">
                      <Sparkles className="w-8 h-8 text-amber-400" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-extrabold text-white text-base tracking-tight">
                        {site.name}
                      </div>
                      <div className="text-[11px] font-mono text-indigo-300">
                        Pankaj Verma Portfolio
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-300">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Canonical Production</span>
                    </div>
                  </div>
                </div>

                {/* Right Details */}
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-black text-white">{site.name}</h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {site.status}
                      </span>
                    </div>
                    {site.isVerifiedPersonal && (
                      <span className="inline-flex items-center gap-1 text-xs text-indigo-300 font-mono">
                        <ShieldCheck className="w-4 h-4 text-indigo-400" />
                        Verified Ownership
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {site.purpose}
                  </p>

                  <div className="space-y-1.5 text-xs font-mono text-slate-400">
                    <p>
                      <strong className="text-slate-200">Role:</strong> {site.role}
                    </p>
                    {site.notes && (
                      <p>
                        <strong className="text-slate-200">Notes:</strong> {site.notes}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {site.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono text-indigo-200 bg-indigo-500/10 border border-indigo-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pixar-button inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white shadow-lg"
                    >
                      <span>Visit {site.domain}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
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
