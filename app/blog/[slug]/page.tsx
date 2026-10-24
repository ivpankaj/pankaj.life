import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, User } from "lucide-react";
import { articles } from "@/data/articles";
import { profile } from "@/data/profile";
import { constructMetadata } from "@/lib/metadata";
import { ArticleJsonLd, BreadcrumbsJsonLd } from "@/components/seo/JsonLd";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return constructMetadata({
      title: "Article Not Found",
      description: "The requested article does not exist.",
      canonicalUrl: "/blog",
    });
  }

  return constructMetadata({
    title: article.title,
    description: article.description,
    canonicalUrl: `/blog/${article.slug}`,
    type: "article",
    publishedTime: article.date,
  });
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: article.title, url: `/blog/${article.slug}` },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[var(--theme-bg)] min-h-screen">
      <ArticleJsonLd article={article} />
      <BreadcrumbsJsonLd items={breadcrumbItems} />

      <article className="max-w-4xl mx-auto space-y-10">
        {/* Back navigation */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors group bg-neutral-900 px-4 py-2 rounded-full border border-white/10"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="rounded-2xl bg-neutral-950 border border-white/[0.1] p-6 sm:p-10 space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
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

          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg font-mono text-neutral-400 leading-relaxed">
            {article.tagline}
          </p>

          {/* Author Badge */}
          <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white">
                <User className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-white block">
                  {profile.name}
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  @{profile.handle} • Software Developer
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
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
          </div>
        </header>

        {/* Article Content */}
        <section className="rounded-2xl bg-neutral-950 border border-white/[0.1] p-6 sm:p-10 space-y-6 text-neutral-300 leading-relaxed text-base sm:text-lg font-normal">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Footer Author Box & Call to Action */}
        <footer className="rounded-2xl bg-neutral-950 border border-white/[0.1] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">
              Published by {profile.name} (@{profile.handle})
            </h3>
            <p className="text-xs text-neutral-400 mt-1 max-w-md">
              Full-stack developer building modern web applications with Next.js, React, and TypeScript.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/projects"
              className="px-4 py-2 rounded-full border border-white/[0.2] bg-neutral-900 text-white font-medium text-xs hover:bg-neutral-800 transition-colors"
            >
              Explore Projects
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors"
            >
              Connect with Pankaj
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}
