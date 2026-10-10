"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Info,
  Rocket,
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
          title="Digital Labs & Creations"
          subtitle="Explore interactive applications, architectural tools, and software experiments designed for performance and wonder."
        />

        {/* 3D Category Filters */}
        <div className="flex items-center justify-center gap-2.5 flex-wrap mb-14">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-black font-cartoon transition-all duration-150 cursor-pointer ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-pink-500 to-rose-600 text-white border-2 border-pink-300 border-b-6 border-b-pink-900 shadow-lg scale-105"
                  : "bg-[#182353] text-indigo-200 hover:text-white hover:bg-[#202f6e] border-2 border-[#36498c] border-b-4 border-b-[#111a40]"
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
              className="pixar-card p-6 sm:p-8 flex flex-col justify-between group hover:border-pink-400"
            >
              {/* Card Header Screen Diorama (Pixar Toy Computer Screen) */}
              <div className="mb-6 rounded-2xl bg-[#090e24] border-3 border-[#28376e] border-b-6 border-b-[#070b1c] overflow-hidden shadow-inner">
                {/* Candy-button header bar */}
                <div className="px-4 py-3 bg-[#111a42] border-b-2 border-[#28376e] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-rose-500 shadow-sm border border-rose-300" />
                    <span className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-sm border border-yellow-200" />
                    <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-sm border border-emerald-200" />
                  </div>
                  <span className="text-xs font-bold font-cartoon text-indigo-300 truncate max-w-[200px]">
                    {project.liveUrl?.replace("https://", "") || "pankaj.life"}
                  </span>
                  <Rocket className="w-4 h-4 text-pink-400" />
                </div>

                {/* Diorama Screen Content */}
                <div className="p-6 relative bg-gradient-to-br from-[#101844] via-[#0b1030] to-[#18113c] min-h-[140px] flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-black font-cartoon uppercase tracking-wider bg-indigo-600 text-white border-2 border-indigo-400 shadow">
                      {project.category}
                    </span>
                    {project.isSample ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold font-cartoon text-amber-300 bg-amber-500/20 border-2 border-amber-400/40 px-2.5 py-0.5 rounded-full">
                        <Info className="w-3.5 h-3.5" />
                        Sample Concept
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-bold font-cartoon text-emerald-300 bg-emerald-500/20 border-2 border-emerald-400/40 px-2.5 py-0.5 rounded-full">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Verified Work
                      </span>
                    )}
                  </div>

                  <div className="mt-4">
                    <h3 className="text-2xl font-black text-white font-cartoon tracking-tight group-hover:text-amber-300 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-indigo-200 font-bold font-cartoon mt-1">
                      {project.tagline}
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Body */}
              <div className="space-y-4 flex-1">
                <p className="text-sm text-slate-200 font-medium leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-bold font-cartoon text-indigo-200 bg-[#16204a] border border-[#3b4c96] flex items-center gap-1.5 shadow-sm"
                    >
                      <BrandIcon name={tech} size={13} className="text-slate-300" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-5 border-t-2 border-indigo-900/60 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-black text-pink-400 hover:text-white font-cartoon transition-colors group/link"
                >
                  <span>Explore Case Study & Architecture</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                </Link>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View GitHub Repository"
                      className="p-2.5 rounded-2xl bg-[#1b2559] border-2 border-[#4357a8] border-b-4 border-b-[#12193e] text-white hover:border-pink-400 transition-all shadow-md active:translate-y-1"
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
                      className="pixar-btn-primary px-4 py-2 text-xs font-black text-white flex items-center gap-1.5"
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
