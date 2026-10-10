"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  ArrowRight,
  Sparkles,
  Layers,
  Terminal,
  ShieldCheck,
  Info,
} from "lucide-react";
import { projects, projectCategories, ProjectCategory } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BrandIcon } from "@/components/ui/BrandIcon";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Featured Works"
          title="Projects & Digital Labs"
          subtitle="Explore digital products, architectural experiments, and software systems. Verified personal work is clearly noted alongside conceptual templates."
        />

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-rose-500 to-indigo-600 text-white shadow-lg shadow-rose-500/25 border border-rose-400/40 font-semibold scale-105"
                  : "bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800/80 border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="cosmic-glass cosmic-glass-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-white/15 relative overflow-hidden group"
            >
              {/* Card Header Preview Mockup (Code-generated authentic UI diorama) */}
              <div className="mb-6 rounded-2xl bg-slate-950/80 border border-white/10 overflow-hidden shadow-inner">
                {/* Browser-style bar */}
                <div className="px-4 py-3 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 truncate max-w-[200px]">
                    {project.liveUrl?.replace("https://", "") || "localhost:3000"}
                  </span>
                  <div className="w-10" />
                </div>

                {/* Diorama Screen Content */}
                <div className="p-6 relative bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 min-h-[140px] flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-white/10 text-white border border-white/10">
                      {project.category}
                    </span>
                    {project.isSample ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded">
                        <Info className="w-3 h-3" />
                        Sample Concept
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
                        <ShieldCheck className="w-3 h-3" />
                        Verified Personal Work
                      </span>
                    )}
                  </div>

                  <div className="mt-4">
                    <h4 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                      {project.name}
                    </h4>
                    <p className="text-xs text-indigo-300 font-mono mt-1">
                      {project.tagline}
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Body */}
              <div className="space-y-4 flex-1">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-300 bg-white/5 border border-white/10 flex items-center gap-1.5"
                    >
                      <BrandIcon name={tech} size={13} className="text-slate-400" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-300 hover:text-white font-mono group/link"
                >
                  <span>Explore Case Study & Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View GitHub Repository"
                      className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                    >
                      <BrandIcon name="github" size={16} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      title="Visit Live Application"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-400/30 text-xs font-semibold text-white transition-colors"
                    >
                      <span>Live Preview</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
