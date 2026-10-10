"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  ArrowRight,
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
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Projects & Digital Labs" />

        {/* 3D Category Filters */}
        <div className="flex items-center justify-center gap-2.5 flex-wrap mb-14">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-black font-cartoon transition-all duration-150 cursor-pointer ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-pink-500 to-rose-600 text-white border-2 border-pink-300 border-b-6 border-b-pink-900 shadow-md scale-105"
                  : "bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border-2 border-slate-200 border-b-4 border-b-slate-300"
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
              {/* Card Header Screen Diorama */}
              <div className="mb-6 rounded-2xl bg-slate-50 border-3 border-slate-200 border-b-6 border-b-slate-300 overflow-hidden shadow-inner">
                {/* Candy-button header bar */}
                <div className="px-4 py-3 bg-slate-100 border-b-2 border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-rose-500 shadow-sm border border-rose-300" />
                    <span className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-sm border border-yellow-200" />
                    <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-sm border border-emerald-200" />
                  </div>
                  <span className="text-xs font-bold font-cartoon text-slate-500 truncate max-w-[200px]">
                    {project.liveUrl?.replace("https://", "") || "pankaj.life"}
                  </span>
                  <Rocket className="w-4 h-4 text-pink-500" />
                </div>

                {/* Diorama Screen Content without badges */}
                <div className="p-6 relative bg-gradient-to-br from-indigo-50/50 via-white to-pink-50/50 min-h-[120px] flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 font-cartoon tracking-tight group-hover:text-pink-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-indigo-700 font-bold font-cartoon mt-1">
                      {project.tagline}
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Body */}
              <div className="space-y-4 flex-1">
                <p className="text-sm text-slate-700 font-medium leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-bold font-cartoon text-slate-700 bg-slate-100 border border-slate-200 flex items-center gap-1.5 shadow-sm"
                    >
                      <BrandIcon name={tech} size={13} className="text-slate-500" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-5 border-t-2 border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-black text-pink-600 hover:text-pink-700 font-cartoon transition-colors group/link"
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
                      className="p-2.5 rounded-2xl bg-slate-100 border-2 border-slate-200 border-b-4 border-b-slate-300 text-slate-700 hover:text-slate-900 hover:border-pink-300 transition-all shadow-sm active:translate-y-1"
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
