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
  ShieldCheck,
  Info,
} from "lucide-react";
import { projects } from "@/data/projects";
import { constructMetadata } from "@/lib/metadata";
import { GlassCard } from "@/components/ui/GlassCard";
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
    description: project.description,
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
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <ProjectJsonLd project={project} />
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Back Link */}
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to all projects</span>
          </Link>
        </div>

        {/* Hero Card */}
        <GlassCard className="border-indigo-500/30">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                {project.category} • {project.year}
              </span>
              {project.isSample ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-300 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
                  <Info className="w-3.5 h-3.5" />
                  Sample Concept Template
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Personal Project
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {project.name}
            </h1>

            <p className="text-lg text-indigo-200 font-mono">{project.tagline}</p>

            <p className="text-base text-slate-300 leading-relaxed pt-2">
              {project.longDescription}
            </p>

            {/* Quick Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="pixar-button px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white flex items-center gap-2"
                >
                  <span>Launch Live Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixar-button-secondary px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white flex items-center gap-2"
                >
                  <BrandIcon name="github" size={16} />
                  <span>View Source Repository</span>
                </a>
              )}
            </div>
          </div>
        </GlassCard>

        {/* Technical Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard className="border-rose-500/20 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">System Architecture</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.architecture}
            </p>
          </GlassCard>

          <GlassCard className="border-cyan-500/20 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Technology Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono text-slate-200 bg-white/5 border border-white/10 flex items-center gap-2"
                >
                  <BrandIcon name={tech} size={15} />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Key Features */}
        <GlassCard className="border-amber-500/20 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Key Capabilities & Features</h3>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </div>
  );
}
