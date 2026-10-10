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
    title: "pankaj.life Production Launch",
    category: "Launch",
    organization: "Independent",
    description:
      "Engineered and launched official digital portfolio using Next.js 16, App Router, TypeScript, and a Pixar-inspired vibrant 3D cosmos theme.",
    credentialUrl: "https://pankaj.life",
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
      "Deep-dive implementation of React 19 features, Server Components, Turbopack, and Zero-JS client boundaries.",
    isVerified: true,
    status: "Completed",
  },
  {
    id: "tailwind-v4-adoption",
    year: "2025",
    quarter: "Q4",
    title: "Modern CSS Architecture & Tailwind CSS v4",
    category: "Learning",
    organization: "CSS Standards",
    description:
      "Adoption of modern CSS cascade layers, container queries, custom properties, and fluid typography systems.",
    isVerified: true,
    status: "Completed",
  },
  {
    id: "typescript-foundations",
    year: "2025",
    quarter: "Q2",
    title: "Full-Stack TypeScript & API Design",
    category: "Learning",
    organization: "Open Source",
    description:
      "Built resilient end-to-end type safety between client interfaces and server-side data models.",
    isVerified: true,
    status: "Completed",
  },
];
