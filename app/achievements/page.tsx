import React from "react";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { AchievementsSection } from "@/components/sections/AchievementsSection";

export const metadata: Metadata = constructMetadata({
  title: "Milestones & Achievements",
  description:
    "Chronological timeline of engineering milestones, architectural achievements, and technical progression by Pankaj Verma.",
  canonicalUrl: "/achievements",
});

export default function AchievementsPage() {
  return (
    <div className="pt-20 pb-16">
      <AchievementsSection />
    </div>
  );
}
