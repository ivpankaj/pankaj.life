import React from "react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { Project } from "@/data/projects";

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: [profile.displayName, profile.handle, `@${profile.handle}`],
    url: profile.domain,
    jobTitle: "Technology & Software Explorer",
    description: profile.subheading,
    sameAs: socials.map((s) => s.url),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "pankaj.life",
    alternateName: "Pankaj Verma Portfolio",
    url: profile.domain,
    description: profile.tagline,
    publisher: {
      "@type": "Person",
      name: profile.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProjectJsonLd({ project }: { project: Project }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.description,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: profile.name,
      url: profile.domain,
    },
    url: project.liveUrl || `${profile.domain}/projects/${project.slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
