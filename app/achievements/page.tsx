import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/metadata";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "Engineering Milestones & Technical Journey",
  description:
    "Chronological timeline of software engineering milestones, architectural achievements, and technical progression by Pankaj Verma (@ivpankaj).",
  canonicalUrl: "/achievements",
});

export default function AchievementsPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Achievements", url: "/achievements" },
  ];

  return (
    <div className="pt-20 pb-16">
      <BreadcrumbsJsonLd items={breadcrumbItems} />
      <AchievementsSection headingTag="h1" />

      {/* Engineering Philosophy & Milestones Context */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-12 border-t border-white/[0.08]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white tracking-tight">
              Engineering Principles &amp; Progression
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-normal">
              Every milestone reflects a relentless commitment to software craftsmanship: moving from foundational type safety and component ergonomics to distributed edge systems, zero-JS streaming boundaries, and strict web performance optimizations.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-bold text-white tracking-tight">
              Explore Implementations &amp; Code
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-normal">
              These milestones are tangible in real software. Explore the live code architectures in the <Link href="/projects" className="text-neutral-200 underline hover:text-white">Projects Lab</Link>, read architectural breakdowns in the <Link href="/blog" className="text-neutral-200 underline hover:text-white">Engineering Blog</Link>, or get in touch for technical advisory on the <Link href="/contact" className="text-neutral-200 underline hover:text-white">Contact Page</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
