import React from "react";
import { ExternalLink, Globe, Sparkles } from "lucide-react";
import { websites } from "@/data/websites";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export function WebsitesSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Websites & Domains" />

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {websites.map((site) => (
            <GlassCard
              key={site.id}
              variant="blue"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left Preview Screen */}
                <div className="md:col-span-5 rounded-3xl bg-slate-50 border-3 border-slate-200 border-b-6 border-b-slate-300 overflow-hidden shadow-md">
                  {/* Titlebar */}
                  <div className="px-4 py-3 bg-slate-100 border-b-2 border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500 border border-rose-300" />
                      <span className="w-3 h-3 rounded-full bg-amber-400 border border-yellow-200" />
                      <span className="w-3 h-3 rounded-full bg-emerald-400 border border-emerald-200" />
                    </div>
                    <span className="text-xs font-bold font-cartoon text-slate-500">
                      https://{site.domain}
                    </span>
                    <Globe className="w-3.5 h-3.5 text-emerald-500" />
                  </div>

                  {/* Visual Preview */}
                  <div className="p-7 text-center space-y-3 bg-gradient-to-tr from-indigo-50 via-white to-pink-50">
                    <div className="inline-flex p-4 rounded-3xl bg-amber-100 border-2 border-amber-300 shadow-md animate-toy-bob">
                      <Sparkles className="w-10 h-10 text-amber-500 fill-amber-500" />
                    </div>
                    <div>
                      <div className="font-black text-slate-900 text-xl font-cartoon tracking-tight">
                        {site.name}
                      </div>
                      <div className="text-xs font-bold font-cartoon text-pink-600">
                        Official Personal Space
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Details */}
                <div className="md:col-span-7 space-y-4">
                  <h3 className="text-3xl font-black text-slate-900 font-cartoon">
                    {site.name}
                  </h3>

                  <p className="text-base text-slate-700 font-medium leading-relaxed">
                    {site.purpose}
                  </p>

                  <div className="space-y-1 text-xs font-cartoon text-slate-600">
                    <p>
                      <strong className="text-slate-900">Role:</strong> {site.role}
                    </p>
                    {site.notes && (
                      <p>
                        <strong className="text-slate-900">Notes:</strong> {site.notes}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {site.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-bold font-cartoon text-indigo-700 bg-indigo-50 border border-indigo-200"
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
                      className="pixar-btn-primary px-6 py-3 text-sm font-black text-white inline-flex items-center gap-2 shadow-md"
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
