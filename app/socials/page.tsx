import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/metadata";
import { SocialsUniverseSection } from "@/components/sections/SocialsUniverseSection";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "Verified Profiles of Pankaj Verma (@ivpankaj) | GitHub & Networks",
  description:
    "Official verified social media profiles and handles for Pankaj Verma (@ivpankaj) across GitHub, LinkedIn, X, Instagram, and YouTube.",
  canonicalUrl: "/socials",
});

export default function SocialsPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Socials", url: "/socials" },
  ];

  return (
    <div className="pt-20 pb-16">
      <BreadcrumbsJsonLd items={breadcrumbItems} />
      <SocialsUniverseSection headingTag="h1" />

      {/* Online Identity & SameAs Verification Notes */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-12 border-t border-white/[0.08]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white tracking-tight">
              Unified Developer Identity (@ivpankaj)
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-normal">
              Across all code registries, open source platforms, and technical communication channels, Pankaj Verma publishes under the global username <span className="text-neutral-200 font-mono">@ivpankaj</span>. This digital footprint ensures transparent attribution for repositories, engineering articles, and software releases.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-bold text-white tracking-tight">
              Explore More of the Digital Universe
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-normal">
              Beyond social channels, delve into complete project architecture breakdowns in the <Link href="/projects" className="text-neutral-200 underline hover:text-white">Projects Lab</Link>, read in-depth engineering guides in the <Link href="/blog" className="text-neutral-200 underline hover:text-white">Technical Blog</Link>, or learn more about Pankaj&apos;s background on the <Link href="/about" className="text-neutral-200 underline hover:text-white">About Page</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
