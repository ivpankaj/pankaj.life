import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { projects } from "@/data/projects";
import { constructMetadata } from "@/lib/metadata";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { ProjectJsonLd, BreadcrumbsJsonLd } from "@/components/seo/JsonLd";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return constructMetadata({
      title: "Project Not Found",
      description: "The requested project does not exist.",
      canonicalUrl: "/projects",
    });
  }

  return constructMetadata({
    title: `${project.name} | Pankaj Verma Project Case Study`,
    description: `${project.description} Engineered with ${project.technologies.slice(0, 4).join(", ")} by Pankaj Verma (@ivpankaj). Architectural highlights, key features, and source repository.`,
    canonicalUrl: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: project.name, url: `/projects/${project.slug}` },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[var(--theme-bg)] min-h-screen">
      <ProjectJsonLd project={project} />
      <BreadcrumbsJsonLd items={breadcrumbItems} />
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Back Link */}
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors group bg-neutral-900 px-4 py-2 rounded-full border border-white/10"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Hero Card */}
        <div className="rounded-2xl bg-neutral-950 border border-white/[0.1] p-6 sm:p-10 space-y-6 hover:border-white/[0.2] transition-colors">
          <div className="text-xs font-mono text-neutral-500">
            {project.category} • {project.year} • {project.status}
          </div>

          <div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              {project.name}
            </h1>
            <p className="text-sm font-mono text-neutral-400 mt-2">
              {project.tagline}
            </p>
          </div>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
            {project.longDescription}
          </p>

          {/* Quick Actions */}
          <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-white/[0.08]">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-white/[0.2] bg-neutral-900 text-white font-medium text-xs hover:bg-neutral-800 transition-colors inline-flex items-center gap-2"
              >
                <BrandIcon name="github" size={16} />
                <span>View Source Repository</span>
              </a>
            )}
          </div>
        </div>

        {/* Technical Architecture & Technologies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-neutral-950 border border-white/[0.1] p-6 sm:p-8 space-y-4 hover:border-white/[0.2] transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                System Architecture
              </h3>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed font-normal">
              {project.architecture}
            </p>
          </div>

          <div className="rounded-2xl bg-neutral-950 border border-white/[0.1] p-6 sm:p-8 space-y-4 hover:border-white/[0.2] transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Technology Stack
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-md text-xs font-mono text-neutral-300 bg-neutral-900 border border-white/[0.08] flex items-center gap-1.5"
                >
                  <BrandIcon name={tech} size={14} className="text-neutral-400" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="rounded-2xl bg-neutral-950 border border-white/[0.1] p-6 sm:p-8 space-y-6 hover:border-white/[0.2] transition-colors">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">
              Key Capabilities &amp; Highlights
            </h3>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feat, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-neutral-300 font-normal"
              >
                <CheckCircle2 className="w-4 h-4 text-[var(--theme-text)] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architectural Highlights & Engineering Context */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="rounded-2xl bg-neutral-950 border border-white/[0.1] p-6 sm:p-8 space-y-4 hover:border-white/[0.2] transition-colors">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Engineering Focus &amp; Impact
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-neutral-900/60 border border-white/[0.06] text-xs font-mono text-neutral-300 flex flex-col justify-between"
                >
                  <span className="text-neutral-500 text-[10px] uppercase">
                    Core Highlight 0{idx + 1}
                  </span>
                  <span className="mt-2 font-medium text-neutral-200">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Inter-Project Linking: Explore More Projects */}
        <div className="pt-8 border-t border-white/[0.08] space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Explore More Engineering Projects
              </h3>
              <p className="text-xs font-mono text-neutral-400 mt-1">
                Other applications, developer tools, and architecture experiments by Pankaj Verma (@ivpankaj)
              </p>
            </div>
            <Link
              href="/projects"
              className="text-xs font-mono text-neutral-400 hover:text-white transition-colors hidden sm:block"
            >
              View All ({projects.length}) →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {projects
              .filter((p) => p.slug !== project.slug)
              .map((related) => (
                <Link
                  key={related.slug}
                  href={`/projects/${related.slug}`}
                  className="group p-5 rounded-2xl bg-neutral-950 border border-white/[0.08] hover:border-white/[0.25] transition-all flex flex-col justify-between space-y-3"
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                      {related.category} • {related.year}
                    </span>
                    <h4 className="text-sm font-bold text-white group-hover:text-[var(--theme-text)] transition-colors mt-1">
                      {related.name}
                    </h4>
                    <p className="text-xs text-neutral-400 line-clamp-2 mt-1">
                      {related.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
                    {related.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
