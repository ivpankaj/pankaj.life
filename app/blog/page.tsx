import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Clock, Tag } from "lucide-react";
import { articles } from "@/data/articles";
import { profile } from "@/data/profile";
import { constructMetadata } from "@/lib/metadata";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "Technical Blog & Engineering Notes",
  description:
    "Read technical articles, software architecture breakdowns, Next.js tutorials, and web performance insights written by Pankaj Verma (@ivpankaj).",
  canonicalUrl: "/blog",
});

export default function BlogIndexPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[var(--theme-bg)] min-h-screen">
      <BreadcrumbsJsonLd items={breadcrumbItems} />
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--theme-card-border)] bg-[var(--theme-subtle-bg)] text-xs font-mono text-[var(--theme-text-muted)] mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Insights by {profile.name}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--theme-text)]">
            Engineering Blog &amp; Notes
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[var(--theme-text-muted)] max-w-2xl mx-auto leading-relaxed">
            Architectural case studies, deep dives into modern web frameworks, Next.js patterns, and full-stack development explorations by Pankaj Verma (@{profile.handle}).
          </p>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 gap-6">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="rounded-2xl bg-neutral-950 border border-white/[0.1] p-6 sm:p-8 hover:border-white/[0.25] transition-all group"
            >
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{article.date}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readingTime}</span>
                </span>
                <span>•</span>
                <span className="px-2.5 py-0.5 rounded-full bg-neutral-900 border border-white/10 text-neutral-300">
                  {article.category}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-indigo-400 transition-colors">
                <Link href={`/blog/${article.slug}`}>{article.title}</Link>
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 font-normal">
                {article.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-md bg-neutral-900 border border-white/[0.06] text-neutral-400"
                    >
                      <Tag className="w-3 h-3" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--theme-text)] hover:opacity-80 transition-opacity font-semibold"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
