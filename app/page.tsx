import React from "react";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { ProfilePageJsonLd } from "@/components/seo/JsonLd";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechUniverseSection } from "@/components/sections/TechUniverseSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { SocialsUniverseSection } from "@/components/sections/SocialsUniverseSection";
import { ExploringSection } from "@/components/sections/ExploringSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = constructMetadata({
  canonicalUrl: "/",
});

export default function HomePage() {
  return (
    <div className="space-y-4 bg-[var(--theme-bg)] transition-colors duration-200">
      <ProfilePageJsonLd />
      <HeroSection />
      <AboutSection />
      <TechUniverseSection />
      {/* <ProjectsSection /> - Commented out for now */}
      {/* <AchievementsSection /> - Commented out for now */}
      <SocialsUniverseSection />
      {/* <ExploringSection /> - Commented out for now */}
      <ContactSection />
    </div>
  );
}
