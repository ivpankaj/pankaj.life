import React from "react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { Project } from "@/data/projects";

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${profile.domain}/#person`,
    name: profile.name,
    givenName: "Pankaj",
    familyName: "Verma",
    alternateName: ["Pankaj", "ivpankaj", "iV Pankaj"],
    url: profile.domain,
    image: `${profile.domain}/opengraph-image`,
    email: profile.email ? `mailto:${profile.email}` : undefined,
    jobTitle: "Software Developer & Full-Stack Engineer",
    description: profile.subheading,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Full-Stack Web Development",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "Software Architecture",
      "AI Application Development",
      "REST APIs",
      "Edge Computing",
      "Web Performance Optimization",
    ],
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
    "@id": `${profile.domain}/#website`,
    name: "pankaj.life",
    alternateName: ["Pankaj Verma Portfolio", "ivpankaj Official Website"],
    url: profile.domain,
    description: profile.tagline,
    inLanguage: "en-US",
    publisher: {
      "@id": `${profile.domain}/#person`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProfilePageJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${profile.domain}/#profilepage`,
    url: profile.domain,
    name: `${profile.name} (@${profile.handle}) — Software Developer & Technology Portfolio`,
    description: profile.subheading,
    isPartOf: {
      "@id": `${profile.domain}/#website`,
    },
    mainEntity: {
      "@id": `${profile.domain}/#person`,
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
    "@id": `${profile.domain}/projects/${project.slug}#software`,
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
      "@id": `${profile.domain}/#person`,
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
