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
    additionalName: "Pankaj",
    alternateName: ["Pankaj", "ivpankaj", "iV Pankaj"],
    url: profile.domain,
    image: `${profile.domain}/opengraph-image`,
    email: profile.email ? `mailto:${profile.email}` : undefined,
    jobTitle: "Software Developer & Full-Stack Engineer",
    description:
      "Pankaj Verma, known online as ivpankaj, is a software developer and full-stack engineer building modern web applications, Next.js platforms, and developer tools.",
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
      "JavaScript",
      "Node.js",
      "Tailwind CSS",
      "Software Architecture",
      "REST APIs",
      "Edge Computing",
      "Web Performance Optimization",
    ],
    sameAs: socials.map((s) => s.url),
    mainEntityOfPage: profile.domain,
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
    name: "Pankaj Verma Portfolio",
    alternateName: [
      "pankaj.life",
      "Pankaj Verma Personal Website",
      "ivpankaj Official Website",
      "Pankaj Verma Developer Portfolio",
    ],
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

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbsJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${profile.domain}${item.url.startsWith("/") ? "" : "/"}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProjectJsonLd({ project }: { project: Project }) {
  const canonicalUrl = `${profile.domain}/projects/${project.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${canonicalUrl}#software`,
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
    programmingLanguage: project.technologies,
    ...(project.githubUrl ? { codeRepository: project.githubUrl } : {}),
    url: canonicalUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({
  article,
}: {
  article: {
    slug: string;
    title: string;
    description: string;
    date: string;
    readingTime: string;
    tags: string[];
  };
}) {
  const canonicalUrl = `${profile.domain}/blog/${article.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${canonicalUrl}#article`,
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@id": `${profile.domain}/#person`,
    },
    publisher: {
      "@id": `${profile.domain}/#person`,
    },
    mainEntityOfPage: canonicalUrl,
    keywords: article.tags.join(", "),
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ContactPageJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${profile.domain}/contact#contactpage`,
    url: `${profile.domain}/contact`,
    name: `Contact ${profile.name}`,
    description: `Direct collaboration inquiry and contact channels for ${profile.name} (@${profile.handle}).`,
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
