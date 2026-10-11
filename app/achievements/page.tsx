import React from "react";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { AchievementsSection } from "@/components/sections/AchievementsSection";

export const metadata: Metadata = constructMetadata({
  title: "Engineering Milestones & Journey",
  description:
    "Chronological timeline of software engineering milestones, architectural achievements, and technical progression by Pankaj Verma (@ivpankaj).",
  canonicalUrl: "/achievements",
});

export default function AchievementsPage() {
  return (
    <div className="pt-20 pb-16">
      <AchievementsSection headingTag="h1" />
    </div>
  );
}
