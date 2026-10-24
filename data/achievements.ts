export interface Milestone {
  id: string;
  year: string;
  quarter?: string;
  title: string;
  category: "Launch" | "Learning" | "Architecture" | "Open Source";
  organization?: string;
  description: string;
  credentialUrl?: string;
  isVerified: boolean;
  status: "Completed" | "Ongoing";
}

export const milestones: Milestone[] = [
  {
    id: "pankaj-life-launch",
    year: "2026",
    quarter: "Q1",
    title: "Production Architecture & Platform Launch",
    category: "Launch",
    organization: "Independent",
    description:
      "Engineered and launched official digital developer platform using Next.js 16, App Router, TypeScript, and authentic Aceternity UI design system. Implemented zero-bloat server components, sub-second LCP optimization, dynamic OpenGraph generation, and full Schema.org structured data hierarchy.",
    credentialUrl: "https://github.com/ivpankaj/pankaj.life",
    isVerified: true,
    status: "Completed",
  },
  {
    id: "nextjs-16-mastery",
    year: "2026",
    quarter: "Q1",
    title: "Next.js 16 & React 19 App Router Architecture",
    category: "Architecture",
    organization: "Web Ecosystem",
    description:
      "Deep-dive implementation of React 19 Server Components, Actions, Turbopack incremental bundling, and Zero-JS client boundaries. Designed high-performance data hydration strategies that eliminate client-side state flicker and drastically reduce First Contentful Paint.",
    isVerified: true,
    status: "Completed",
  },
  {
    id: "distributed-edge-apis",
    year: "2025",
    quarter: "Q4",
    title: "Distributed Edge API Architecture & Caching",
    category: "Architecture",
    organization: "Cloud Engineering",
    description:
      "Researched and built prototype distributed API proxies on Cloudflare Workers and V8 isolates. Implemented sliding-window rate limiting, optimistic in-memory caching, and cryptographic HMAC header verification for microservice protection.",
    isVerified: true,
    status: "Completed",
  },
  {
    id: "tailwind-v4-adoption",
    year: "2025",
    quarter: "Q3",
    title: "Modern CSS Architecture & Tailwind CSS v4",
    category: "Learning",
    organization: "CSS Standards",
    description:
      "Full adoption of modern CSS cascade layers (@layer), container queries, custom properties, and fluid typography systems. Migrated traditional utility overhead to modern compiler-driven CSS modules with 100% theme token isolation.",
    isVerified: true,
    status: "Completed",
  },
  {
    id: "typescript-foundations",
    year: "2025",
    quarter: "Q2",
    title: "Full-Stack TypeScript & Strict Type Safety",
    category: "Learning",
    organization: "Open Source",
    description:
      "Constructed resilient end-to-end type safety between client interfaces and server-side data models. Authored custom generic utility types, runtime schema validation using Zod, and typed API client SDKs.",
    isVerified: true,
    status: "Completed",
  },
  {
    id: "web-vitals-performance",
    year: "2025",
    quarter: "Q1",
    title: "Core Web Vitals Engineering & Lighthouse Audits",
    category: "Open Source",
    organization: "Performance Engineering",
    description:
      "Achieved 100/100 Lighthouse performance audits across desktop and mobile devices by auditing critical rendering paths, deferring non-essential scripts, inlining critical CSS, and optimizing font subset delivery.",
    isVerified: true,
    status: "Completed",
  },
];
