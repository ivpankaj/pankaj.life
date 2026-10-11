import React from "react";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export const metadata: Metadata = constructMetadata({
  title: "Projects & Engineering Lab",
  description:
    "Explore digital software projects, open-source utilities, and modern web applications developed by Pankaj Verma (@ivpankaj).",
  canonicalUrl: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="pt-20 pb-16">
      <ProjectsSection headingTag="h1" />
    </div>
  );
}
