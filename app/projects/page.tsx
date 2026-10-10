import React from "react";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export const metadata: Metadata = constructMetadata({
  title: "Projects & Applications",
  description:
    "Explore digital projects, software tools, and web architecture experiments created and explored by Pankaj Verma.",
  canonicalUrl: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="pt-20 pb-16">
      <ProjectsSection />
    </div>
  );
}
