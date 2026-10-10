import { Metadata } from "next";
import { profile } from "@/data/profile";

export const siteConfig = {
  name: profile.name,
  displayName: profile.displayName,
  handle: profile.handle,
  url: profile.domain,
  title: `${profile.name} — ${profile.tagline}`,
  description: profile.subheading,
  keywords: [
    "Pankaj Verma",
    "Pankaj",
    "ivpankaj",
    "@ivpankaj",
    "pankaj.life",
    "Pankaj Verma tech portfolio",
    "Pankaj Verma projects",
    "ivpankaj official website",
    "Pankaj Verma websites and applications",
    "Next.js 16 portfolio",
    "TypeScript developer",
    "Web performance engineer",
  ],
};

export function constructMetadata({
  title,
  description,
  image,
  canonicalUrl,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const metaTitle = title
    ? `${title} | ${profile.name} (@${profile.handle})`
    : `${profile.name} — ${profile.tagline}`;
  const metaDescription = description || siteConfig.description;
  const canonical = canonicalUrl ? `${siteConfig.url}${canonicalUrl}` : siteConfig.url;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: profile.name, url: siteConfig.url }],
    creator: profile.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonical,
      siteName: `${profile.name} — ${profile.domain.replace("https://", "")}`,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      creator: `@${profile.handle}`,
      site: `@${profile.handle}`,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}
