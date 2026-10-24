import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/metadata";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "Projects by Pankaj Verma | Web Applications & Developer Tools",
  description:
    "Explore software engineering projects, web applications, open-source utilities, and architecture experiments built by Pankaj Verma (@ivpankaj).",
  canonicalUrl: "/projects",
});

export default function ProjectsPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
  ];

  return (
    <div className="pt-20 pb-16">
      <BreadcrumbsJsonLd items={breadcrumbItems} />
      <ProjectsSection headingTag="h1" />

      {/* Engineering Standards & Technology Stack Context */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-12 border-t border-white/[0.08]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white tracking-tight">
              Production Architecture
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-normal">
              Every project is engineered with modern web standards: Next.js 16 App Router, React Server Components for zero-JS footprints, and strict TypeScript types across the entire data layer.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-bold text-white tracking-tight">
              Performance by Default
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-normal">
              Optimized for Core Web Vitals with minimal layout shifts, instant edge caching, optimized font subsets, and sub-second Largest Contentful Paint times.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-bold text-white tracking-tight">
              Open Source &amp; Articles
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-normal">
              Read the in-depth architectural breakdowns in the <Link href="/blog" className="text-neutral-200 underline hover:text-white">Technical Blog</Link>, or inspect the open-source code on <a href="https://github.com/ivpankaj" target="_blank" rel="noopener noreferrer" className="text-neutral-200 underline hover:text-white">GitHub (@ivpankaj)</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
