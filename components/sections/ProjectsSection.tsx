"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { projects, projectCategories, ProjectCategory } from "@/data/projects";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export function ProjectsSection({
  headingTag = "h2",
}: {
  headingTag?: "h1" | "h2";
} = {}) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[var(--theme-bg)] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Clean Section Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto relative">
          <div className="absolute inset-x-20 -top-6 bg-gradient-to-r from-transparent via-[var(--theme-card-border)] to-transparent h-[2px] w-3/4 mx-auto blur-sm" />
          {headingTag === "h1" ? (
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--theme-text)]">
              Projects &amp; Engineering Lab
            </h1>
          ) : (
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--theme-text)]">
              Projects &amp; Engineering Lab
            </h2>
          )}
          <div className="h-1 w-20 mx-auto mt-4 bg-[var(--theme-card-border)] rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {projectCategories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[var(--theme-btn-bg)] text-[var(--theme-btn-text)] font-semibold shadow-sm"
                    : "bg-[var(--theme-subtle-bg)] text-[var(--theme-text-muted)] hover:text-[var(--theme-text)] border border-[var(--theme-card-border)]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Aceternity UI BackgroundGradient & 3D Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <BackgroundGradient key={project.slug} className="rounded-[22px] bg-neutral-950 p-2">
              <CardContainer className="w-full py-0">
                <CardBody className="bg-neutral-950 relative group/card border-white/[0.06] hover:border-white/[0.2] w-full rounded-2xl p-6 sm:p-8 border flex flex-col justify-between">
                <div>
                  {/* Category & Year Header (Plain text, no badges) */}
                  <div className="text-xs font-mono text-neutral-500 mb-4 flex items-center justify-between">
                    <CardItem translateZ="30">
                      {project.category}
                    </CardItem>
                    <CardItem translateZ="30">
                      {project.year} • {project.status}
                    </CardItem>
                  </div>

                  {/* Project Title */}
                  <CardItem
                    translateZ="50"
                    className="text-xl sm:text-2xl font-bold text-white tracking-tight"
                  >
                    {project.name}
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="40"
                    className="text-xs sm:text-sm font-mono text-neutral-400 mt-1 mb-4"
                  >
                    {project.tagline}
                  </CardItem>

                  {/* Description */}
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-400 text-sm leading-relaxed mb-6 font-normal"
                  >
                    {project.description}
                  </CardItem>

                  {/* Technologies */}
                  <CardItem translateZ="50" className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono text-neutral-300 bg-neutral-900 border border-white/[0.08] flex items-center gap-1.5"
                      >
                        <BrandIcon name={tech} size={13} className="text-neutral-400" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </CardItem>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between mt-auto">
                  <CardItem
                    translateZ="40"
                    as={Link}
                    href={`/projects/${project.slug}`}
                    className="text-xs font-mono text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>Architecture &amp; Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </CardItem>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <CardItem
                        translateZ="40"
                        as="a"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-neutral-900 border border-white/10 hover:border-white/30 transition-colors flex items-center justify-center"
                        title="View Source Code"
                      >
                        <BrandIcon name="github" size={18} />
                      </CardItem>
                    )}
                    {project.liveUrl && (
                      <CardItem
                        translateZ="40"
                        as="a"
                        href={project.liveUrl}
                        target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors flex items-center gap-1.5 shadow-sm"
                      >
                        <span>Launch</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </CardItem>
                    )}
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  );
}
