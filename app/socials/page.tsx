import React from "react";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { SocialsUniverseSection } from "@/components/sections/SocialsUniverseSection";

export const metadata: Metadata = constructMetadata({
  title: "Social Media Universe",
  description:
    "Official verified social media profiles of Pankaj Verma (@ivpankaj) on GitHub, LinkedIn, X, Instagram, and YouTube.",
  canonicalUrl: "/socials",
});

export default function SocialsPage() {
  return (
    <div className="pt-20 pb-16">
      <SocialsUniverseSection />
    </div>
  );
}
