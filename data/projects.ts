export type ProjectCategory =
  | "All"
  | "Websites"
  | "Web Applications"
  | "Tools"
  | "APIs"
  | "Experiments"
  | "Open Source";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: "Active" | "Completed" | "Prototype" | "In Progress";
  isSample: boolean; // Transparency: true if demonstrator/sample template, false if verified personal project
  features: string[];
  highlights: string[];
  architecture: string;
  accentColor: string;
  year: string;
}

export const projectCategories: ProjectCategory[] = [
  "All",
  "Websites",
  "Web Applications",
  "Tools",
  "Experiments",
  "Open Source",
];

export const projects: Project[] = [
  {
    slug: "pankaj-life-portfolio",
    name: "Developer Ecosystem & Architecture Lab",
    tagline: "High-performance digital engineering platform and interactive portfolio",
    description:
      "The flagship digital ecosystem for Pankaj Verma (@ivpankaj), built with Next.js 16 App Router, React 19, TypeScript, and authentic Aceternity UI interactive components.",
    longDescription:
      "The central digital hub designed to showcase technical architecture, engineering experiments, and open-source ventures. Built with Next.js 16 and Tailwind CSS, it implements high-performance server components, official Aceternity UI components, full technical SEO, and micro-interactions.",
    category: "Websites",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Aceternity UI",
      "Framer Motion",
    ],
    liveUrl: "/",
    githubUrl: "https://github.com/ivpankaj/pankaj.life",
    status: "Active",
    isSample: false,
    features: [
      "Cinematic animated digital universe with code-rendered atmospheric skies",
      "Zero AI-generated images using authentic brand vectors and code SVGs",
      "Complete Technical SEO: sitemap, robots, dynamic OG, JSON-LD schema",
      "Fully typed data layer for seamless content personalization",
      "Accessible, responsive, and reduced-motion compliant",
    ],
    highlights: [
      "Next.js 16 App Router & React 19 architecture",
      "Core Web Vitals optimized with sub-second LCP",
      "Strict type-checking and automated route generation",
    ],
    architecture:
      "Server-first React architecture leveraging Next.js 16 App Router for minimal client JavaScript, instant hydration, and automated metadata generation.",
    accentColor: "#6366f1",
    year: "2026",
  },
  {
    slug: "nexus-dev-toolkit",
    name: "Nexus Developer Toolkit",
    tagline: "Modern web utility suite for developers and designers",
    description:
      "A fast in-browser utility suite featuring JSON formatters, SVG optimizers, CSS gradient generators, and regex testers.",
    longDescription:
      "Nexus Dev Toolkit provides essential daily tools for developers in a unified, privacy-focused in-browser environment. Processing runs entirely on the client, ensuring data never leaves the user's browser.",
    category: "Tools",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Web Workers"],
    liveUrl: "https://pankaj.life/projects/nexus-dev-toolkit",
    githubUrl: "https://github.com/ivpankaj",
    status: "In Progress",
    isSample: true, // Marked transparently as template showcase for user personalization
    features: [
      "Zero-latency client-side JSON analysis and syntax tree formatting",
      "Live CSS mesh gradient generator with CSS variable copy-to-clipboard",
      "SVG cleaner and path optimizer powered by Web Workers",
      "Dark and light contrast verification matrix",
    ],
    highlights: [
      "Pure client-side privacy",
      "Keyboard shortcut workflow",
      "Responsive panel layout",
    ],
    architecture:
      "Built with Next.js client components offloaded to dedicated Web Workers for instant computation without blocking the main UI thread.",
    accentColor: "#38bdf8",
    year: "2026",
  },
  {
    slug: "aura-api-gateway",
    name: "Aura Edge API Proxy",
    tagline: "Low-latency REST caching and rate-limiting gateway",
    description:
      "A lightweight API routing and caching experiment running on distributed edge nodes for accelerated microservice queries.",
    longDescription:
      "An exploratory cloud architecture project demonstrating distributed edge caching, CORS security enforcement, and token-bucket rate limiting for modern serverless architectures.",
    category: "Experiments",
    technologies: ["TypeScript", "Node.js", "Cloudflare Workers", "REST API"],
    liveUrl: "https://pankaj.life/projects/aura-api-gateway",
    githubUrl: "https://github.com/ivpankaj",
    status: "Prototype",
    isSample: true, // Marked transparently as template showcase for user personalization
    features: [
      "Sub-15ms edge response routing across global locations",
      "Header-based dynamic caching and cache-invalidation hooks",
      "Configurable token-bucket rate limiting",
      "Comprehensive request telemetry and latency logs",
    ],
    highlights: [
      "Edge-first distributed runtime",
      "Zero-cold-start performance",
      "Strict schema validation",
    ],
    architecture:
      "TypeScript worker runtime with distributed key-value cache layer and resilient fallback routing.",
    accentColor: "#f43f5e",
    year: "2025",
  },
  {
    slug: "orbit-notes-sync",
    name: "Orbit Offline Markdown Studio",
    tagline: "Distraction-free Markdown editor with local SQLite storage",
    description:
      "A keyboard-driven markdown editor crafted for developers with instant live preview, code syntax highlighting, and local persistence.",
    longDescription:
      "Orbit Studio is a clean, minimal note-taking application designed for capturing technical thoughts, snippets, and project roadmaps without network dependency.",
    category: "Web Applications",
    technologies: ["React", "TypeScript", "Tailwind CSS", "IndexedDB", "Markdown"],
    liveUrl: "https://pankaj.life/projects/orbit-notes-sync",
    githubUrl: "https://github.com/ivpankaj",
    status: "Prototype",
    isSample: true, // Marked transparently as template showcase for user personalization
    features: [
      "Instant dual-pane Markdown editor with synchronized scrolling",
      "Syntax highlighting for 40+ programming languages",
      "Local-first persistence with zero cloud tracking",
      "Export directly to PDF, clean HTML, or GitHub-flavored MD",
    ],
    highlights: [
      "Local-first architecture",
      "Instant live preview",
      "Vim and standard navigation bindings",
    ],
    architecture:
      "Client-side virtualized text buffer integrated with client IndexedDB persistence and Web Worker markdown parsing.",
    accentColor: "#10b981",
    year: "2025",
  },
];
