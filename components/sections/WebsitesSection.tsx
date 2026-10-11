import React from "react";
import { ExternalLink, Globe } from "lucide-react";
import { websites } from "@/data/websites";

export function WebsitesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Clean Section Header without badge or subheading */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Web Properties &amp; Platforms
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {websites.map((site) => (
            <div
              key={site.id}
              className="rounded-2xl bg-neutral-950 border border-white/[0.1] p-6 sm:p-8 hover:border-white/[0.25] transition-colors relative overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Browser preview bar */}
                <div className="md:col-span-5 rounded-xl bg-neutral-900 border border-white/10 overflow-hidden">
                  <div className="px-3.5 py-2.5 bg-neutral-950 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                      <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                      <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                    </div>
                    <span className="text-[11px] font-mono text-neutral-400 truncate max-w-[150px]">
                      {site.domain}
                    </span>
                    <Globe className="w-3.5 h-3.5 text-neutral-500" />
                  </div>
                  <div className="p-8 text-center space-y-2">
                    <div className="text-xl font-bold text-white tracking-tight">
                      {site.name}
                    </div>
                    <div className="text-xs font-mono text-neutral-400">
                      https://{site.domain}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="md:col-span-7 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {site.name}
                    </h3>
                    <p className="text-xs font-mono text-neutral-400 mt-1">
                      Role: {site.role}
                    </p>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {site.purpose}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {site.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono text-neutral-300 bg-neutral-900 border border-white/[0.08]"
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
                      className="px-5 py-2.5 rounded-lg bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors inline-flex items-center gap-2 shadow-sm"
                    >
                      <span>Visit {site.domain}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
