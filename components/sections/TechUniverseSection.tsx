"use client";

import React, { useState } from "react";
import { ExternalLink, Sparkles } from "lucide-react";
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
          badge="Toolbox & Skills"
          title="Technology Universe"
          subtitle="Explore the powerful engines, languages, and creative platforms powering my digital builds."
        />

        {/* 3D Cartoon Filter Tabs */}
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
                    ? "bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 border-2 border-yellow-200 border-b-6 border-b-amber-800 shadow-lg scale-105"
                    : "bg-[#182353] text-indigo-200 hover:text-white hover:bg-[#202f6e] border-2 border-[#36498c] border-b-4 border-b-[#111a40]"
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
              className="pixar-card p-6 group flex flex-col justify-between hover:scale-105 transition-all duration-200"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="p-3.5 rounded-2xl bg-[#0e163b] border-2 border-white/20 shadow-lg group-hover:rotate-6 transition-transform"
                    style={{ borderColor: `${tech.color}60` }}
                  >
                    <BrandIcon name={tech.icon} size={30} className="text-white" />
                  </div>
                  <a
                    href={tech.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Official documentation for ${tech.name}`}
                    className="p-2 rounded-xl bg-white/10 hover:bg-pink-500 hover:text-white text-indigo-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-lg font-black text-white font-cartoon group-hover:text-amber-300 transition-colors">
                  {tech.name}
                </h3>
                <span className="inline-block mt-1 mb-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold font-cartoon uppercase tracking-wider bg-indigo-950/80 text-cyan-300 border border-cyan-400/30">
                  {tech.categoryName}
                </span>

                <p className="text-xs text-slate-300 font-medium leading-relaxed mt-1">
                  {tech.description}
                </p>
              </div>

              {/* Colorful Bottom Toy Glow Indicator */}
              <div
                className="w-full h-1.5 mt-5 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"
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
