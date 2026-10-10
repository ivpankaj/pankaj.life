import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechUniverseSection } from "@/components/sections/TechUniverseSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { WebsitesSection } from "@/components/sections/WebsitesSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { SocialsUniverseSection } from "@/components/sections/SocialsUniverseSection";
import { ExploringSection } from "@/components/sections/ExploringSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="space-y-4">
      <HeroSection />
      <AboutSection />
      <TechUniverseSection />
      <ProjectsSection />
      <WebsitesSection />
      <AchievementsSection />
      <SocialsUniverseSection />
      <ExploringSection />
      <ContactSection />
    </div>
  );
}
