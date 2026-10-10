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
  Rocket,
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
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-white">
      <ProjectJsonLd project={project} />
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Back Link */}
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-black font-cartoon text-slate-700 hover:text-pink-600 transition-colors group bg-slate-100 px-4 py-2 rounded-full border border-slate-200"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Hero Card */}
        <GlassCard variant="blue">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight font-cartoon">
              {project.name}
            </h1>

            <p className="text-lg text-pink-600 font-cartoon font-bold">{project.tagline}</p>

            <p className="text-base text-slate-700 leading-relaxed font-medium pt-2">
              {project.longDescription}
            </p>

            {/* Quick Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="pixar-btn-primary px-7 py-3.5 text-sm font-black text-white flex items-center gap-2 shadow-md"
                >
                  <Rocket className="w-4 h-4" />
                  <span>Launch Live Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixar-btn-secondary px-6 py-3.5 text-sm font-black text-white flex items-center gap-2"
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
          <GlassCard variant="purple" className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-purple-100 text-purple-700 border-2 border-purple-200">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 font-cartoon">System Architecture</h3>
            </div>
            <p className="text-base text-slate-700 leading-relaxed font-medium">
              {project.architecture}
            </p>
          </GlassCard>

          <GlassCard variant="orange" className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-100 text-amber-700 border-2 border-amber-200">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 font-cartoon">Technology Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold font-cartoon text-slate-800 bg-slate-100 border border-slate-200 flex items-center gap-2 shadow-sm"
                >
                  <BrandIcon name={tech} size={15} />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Key Features */}
        <GlassCard variant="blue" className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-100 text-amber-600 border-2 border-amber-200">
              <Sparkles className="w-6 h-6 fill-amber-500" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 font-cartoon">Key Capabilities</h3>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </div>
  );
}
