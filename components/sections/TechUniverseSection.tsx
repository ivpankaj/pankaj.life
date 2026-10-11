"use client";

import React, { useState } from "react";
import { technologies, techCategories } from "@/data/technologies";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function TechUniverseSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredTech =
    activeCategory === "all"
      ? technologies
      : technologies.filter((t) => t.categoryId === activeCategory);

  const hoverItems = filteredTech.map((tech) => ({
    title: tech.name,
    description: tech.description,
    link: tech.websiteUrl,
    category: tech.categoryName,
    icon: (
      <div className="p-2 rounded-xl bg-neutral-900 border border-white/10 text-white">
        <BrandIcon name={tech.icon} size={22} />
      </div>
    ),
  }));

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[var(--theme-bg)] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Clean Section Header without badge or subheading */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--theme-text)]">
            Technical Stack &amp; Toolchain
          </h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-6">
          {techCategories.map((category) => {
            const isSelected = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[var(--theme-btn-bg)] text-[var(--theme-btn-text)] font-semibold shadow-sm"
                    : "bg-[var(--theme-subtle-bg)] text-[var(--theme-text-muted)] hover:text-[var(--theme-text)] border border-[var(--theme-card-border)]"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Aceternity UI Card Hover Effect Grid */}
        <HoverEffect items={hoverItems} />
      </div>
    </section>
  );
}
