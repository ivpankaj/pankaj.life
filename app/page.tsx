import React from "react";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { ProfilePageJsonLd } from "@/components/seo/JsonLd";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechUniverseSection } from "@/components/sections/TechUniverseSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SocialsUniverseSection } from "@/components/sections/SocialsUniverseSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = constructMetadata({
  title: "Pankaj Verma | Full-Stack Developer & Software Portfolio",
  description:
    "Explore Pankaj Verma's official portfolio, projects, and software development work. Known online as ivpankaj, Pankaj shares his technical projects, architecture, verified skills, and experience.",
  canonicalUrl: "/",
});

export default function HomePage() {
  return (
    <div className="space-y-4 bg-[var(--theme-bg)] transition-colors duration-200">
      <ProfilePageJsonLd />
      <HeroSection />
      <AboutSection />
      <TechUniverseSection />
      <ProjectsSection />
      <SocialsUniverseSection />
      <ContactSection />
    </div>
  );
}
