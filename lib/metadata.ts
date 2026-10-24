import { Metadata } from "next";
import { profile } from "@/data/profile";

export const siteConfig = {
  name: profile.name,
  displayName: profile.displayName,
  handle: profile.handle,
  url: (process.env.NEXT_PUBLIC_SITE_URL || profile.domain || "https://www.pankaj.life").replace(/\/+$/, ""),
  title: `${profile.name} | Full-Stack Developer & Software Portfolio`,
  description:
    "Explore Pankaj Verma's official developer portfolio and projects. Known online as ivpankaj, Pankaj is a full-stack engineer building high-performance web applications with Next.js, React, and TypeScript.",
  keywords: [
    // Tier 1 — Primary personal identity
    "Pankaj Verma",
    "Pankaj Verma portfolio",
    "Pankaj Verma developer",
    "Pankaj Verma personal website",
    "Pankaj Verma official website",
    "Pankaj Verma projects",
    "Pankaj Verma GitHub",
    "Pankaj Verma technology",

    // Tier 2 — First-name identity
    "Pankaj",
    "Pankaj developer",
    "Pankaj software developer",
    "Pankaj portfolio",
    "Pankaj technology",
    "Pankaj projects",
    "Pankaj coding",
    "Pankaj programmer",

    // Tier 3 — Global username
    "ivpankaj",
    "ivpankaj portfolio",
    "ivpankaj developer",
    "ivpankaj GitHub",
    "ivpankaj projects",
    "ivpankaj technology",
    "ivpankaj website",

    // Tier 4 — Full name plus technology
    "Pankaj Verma software developer",
    "Pankaj Verma web developer",
    "Pankaj Verma full-stack developer",
    "Pankaj Verma Next.js developer",
    "Pankaj Verma React developer",
    "Pankaj Verma JavaScript developer",
    "Pankaj Verma TypeScript developer",
    "Pankaj Verma Node.js developer",
    "Pankaj Verma frontend developer",
    "Pankaj Verma backend developer",
    "Pankaj Verma software engineer",
    "Pankaj Verma developer portfolio",
    "Pankaj Verma GitHub projects",

    // Tier 5 — Username plus technology
    "ivpankaj developer",
    "ivpankaj Next.js",
    "ivpankaj React",
    "ivpankaj JavaScript",
    "ivpankaj TypeScript",
    "ivpankaj Node.js",
    "ivpankaj full-stack developer",
    "ivpankaj software engineer",
    "ivpankaj GitHub projects",
    "ivpankaj web development",

    // Tier 6 — Professional discovery
    "Personal developer portfolio",
    "Full-stack developer portfolio",
    "Next.js developer portfolio",
    "React developer portfolio",
    "Software engineering projects",
    "Web application development",
    "Next.js 16 portfolio",
    "React 19",
    "TypeScript developer",
    "Tailwind CSS",
    "Web performance engineer",
    "Edge computing",
    "pankaj.life",
  ],
};

export function constructMetadata({
  title,
  description,
  image,
  canonicalUrl,
  type = "website",
  publishedTime,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
  type?: "website" | "article";
  publishedTime?: string;
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

  const pageTitle = title
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
      title: pageTitle,
      description: metaDescription,
      url: canonical,
      siteName: `${profile.name} — pankaj.life`,
      locale: "en_US",
      type: type,
      ...(publishedTime ? { publishedTime } : {}),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${profile.name} (@${profile.handle}) — Developer Portfolio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
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
        ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ||
        process.env.BING_SITE_VERIFICATION
          ? {
              "msvalidate.01":
                process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ||
                process.env.BING_SITE_VERIFICATION,
            }
          : {}),
      },
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}
