import { Metadata } from "next";
import { profile } from "@/data/profile";

export const siteConfig = {
  name: profile.name,
  displayName: profile.displayName,
  handle: profile.handle,
  url: profile.domain,
  title: `${profile.name} (@${profile.handle}) — Software Developer & Technology Portfolio`,
  description:
    "Official personal portfolio of Pankaj Verma (also known as Pankaj and @ivpankaj) — Software Developer & Full-Stack Engineer based in Noida (Delhi NCR), India. Exploring modern web architectures, Next.js 16, TypeScript, systems engineering, and AI applications.",
  keywords: [
    // Personal Identity Keywords
    "Pankaj Verma",
    "Pankaj",
    "ivpankaj",
    "iV Pankaj",
    "Pankaj Verma developer",
    "Pankaj Verma portfolio",
    "Pankaj Verma software developer",
    "Pankaj Verma programmer",
    "Pankaj Verma technology",
    "Pankaj Verma AI developer",
    "ivpankaj portfolio",
    "ivpankaj developer",
    "ivpankaj software developer",
    "ivpankaj official website",
    "pankaj.life",
    // Software Development Keywords
    "Software developer in India",
    "Software developer in Delhi NCR",
    "Software developer in Noida",
    "Software developer in Greater Noida",
    "Full-stack developer in India",
    "Web developer in Noida",
    "Next.js developer in India",
    "React developer in India",
    "Custom software developer",
    "Application developer",
    "Web application developer",
    "Full-stack application development",
    // AI and Application Development Keywords
    "AI developer in India",
    "AI application developer",
    "AI software developer",
    "AI application development",
    "AI-powered application development",
    "Artificial intelligence developer",
    "AI web application developer",
    // Technical Architecture & Frameworks
    "Next.js 16 portfolio",
    "React 19",
    "TypeScript developer",
    "Tailwind CSS",
    "Web performance engineer",
    "Edge computing",
    "Aceternity UI",
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
  const isRoot = !title;
  const metaDescription = description || siteConfig.description;

  const normalizedPath = canonicalUrl
    ? canonicalUrl.startsWith("/")
      ? canonicalUrl
      : `/${canonicalUrl}`
    : "";
  const canonical =
    !normalizedPath || normalizedPath === "/"
      ? siteConfig.url
      : `${siteConfig.url}${normalizedPath}`;

  const ogImage = image || `${siteConfig.url}/opengraph-image`;
  const twitterImage = image || `${siteConfig.url}/twitter-image`;

  const ogTitle = title
    ? `${title} | ${profile.name} (@${profile.handle})`
    : siteConfig.title;

  return {
    ...(isRoot
      ? {
          title: {
            default: siteConfig.title,
            template: `%s | ${profile.name} (@${profile.handle})`,
          },
        }
      : {
          title: title,
        }),
    description: metaDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: profile.name, url: siteConfig.url }],
    creator: profile.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title: ogTitle,
      description: metaDescription,
      url: canonical,
      siteName: `${profile.name} — ${profile.domain.replace("https://", "")}`,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${profile.name} (@${profile.handle}) — Software Developer`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: metaDescription,
      creator: `@${profile.handle}`,
      site: `@${profile.handle}`,
      images: [twitterImage],
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
    verification: {
      google:
        process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
        process.env.GOOGLE_SITE_VERIFICATION ||
        undefined,
      yandex: process.env.YANDEX_VERIFICATION || undefined,
      other: {
        ...(process.env.BING_SITE_VERIFICATION
          ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
          : {}),
      },
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}
