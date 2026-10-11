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
import { ProjectJsonLd } from "@/components/seo/JsonLd";

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
    title: project.name,
    description: `${project.description} Built with ${project.technologies.slice(0, 3).join(", ")} by Pankaj Verma (@ivpankaj).`,
    canonicalUrl: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[var(--theme-bg)] min-h-screen">
      <ProjectJsonLd project={project} />
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
      </div>
    </div>
  );
}
