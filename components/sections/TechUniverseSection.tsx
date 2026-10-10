"use client";

import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
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
    <section id="tech" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Technology Universe" />

        {/* 3D Filter Tabs */}
        <div className="flex items-center justify-center gap-2.5 flex-wrap mb-14">
          {techCategories.map((category) => {
            const isSelected = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-black font-cartoon transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 border-2 border-yellow-200 border-b-6 border-b-amber-800 shadow-md scale-105"
                    : "bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border-2 border-slate-200 border-b-4 border-b-slate-300"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredTech.map((tech) => (
            <div
              key={tech.id}
              className="bg-white text-slate-900 border-4 border-slate-200 border-b-8 border-b-slate-300 shadow-xl shadow-slate-100/60 rounded-[28px] p-6 group flex flex-col justify-between hover:border-pink-300 hover:border-b-pink-400 hover:scale-105 transition-all duration-200"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="p-3.5 rounded-2xl bg-slate-50 border-2 border-slate-200 shadow-md group-hover:rotate-6 transition-transform"
                    style={{ borderColor: `${tech.color}40` }}
                  >
                    <BrandIcon name={tech.icon} size={30} />
                  </div>
                  <a
                    href={tech.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Official documentation for ${tech.name}`}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-pink-500 hover:text-white text-slate-500 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-xl font-black text-slate-900 font-cartoon group-hover:text-pink-600 transition-colors">
                  {tech.name}
                </h3>
                <span className="inline-block mt-1 mb-2 px-2.5 py-0.5 rounded-full text-[11px] font-bold font-cartoon uppercase tracking-wider bg-slate-100 text-indigo-700 border border-slate-200">
                  {tech.categoryName}
                </span>

                <p className="text-xs text-slate-600 font-medium leading-relaxed mt-1">
                  {tech.description}
                </p>
              </div>

              {/* Bottom Line Indicator */}
              <div
                className="w-full h-1.5 mt-5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, ${tech.color}, #f472b6)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
