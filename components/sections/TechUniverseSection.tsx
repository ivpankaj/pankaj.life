"use client";

import React, { useState } from "react";
import { ExternalLink, Sparkles, Filter } from "lucide-react";
import { technologies, techCategories } from "@/data/technologies";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BrandIcon } from "@/components/ui/BrandIcon";

export function TechUniverseSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredTech =
    activeCategory === "all"
      ? technologies
      : technologies.filter((t) => t.categoryId === activeCategory);

  return (
    <section id="tech" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Technology Universe"
          title="Tools & Technologies"
          subtitle="A curated constellation of modern frameworks, runtimes, developer tooling, and platforms I work with."
        />

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {techCategories.map((category) => {
            const isSelected = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25 border border-indigo-400/40 font-semibold scale-105"
                    : "bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800/80 border border-white/10"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredTech.map((tech) => (
            <div
              key={tech.id}
              className="cosmic-glass cosmic-glass-hover rounded-2xl p-5 group flex flex-col justify-between border-white/10 relative overflow-hidden"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="p-3 rounded-xl bg-slate-950/80 border border-white/10 shadow-md group-hover:scale-110 transition-transform duration-300"
                    style={{ borderColor: `${tech.color}30` }}
                  >
                    <BrandIcon name={tech.icon} size={28} className="text-white" />
                  </div>
                  <a
                    href={tech.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Official documentation for ${tech.name}`}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                  </a>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {tech.name}
                </h3>
                <span className="text-[11px] font-mono text-indigo-400/90 uppercase tracking-wider block mb-2">
                  {tech.categoryName}
                </span>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              {/* Accent footer glow line */}
              <div
                className="w-full h-1 mt-4 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, ${tech.color}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
