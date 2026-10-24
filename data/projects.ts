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
      "The central digital hub designed to showcase technical architecture, engineering experiments, and open-source ventures by Pankaj Verma. Built with Next.js 16 and Tailwind CSS v4, the application prioritizes zero-runtime bloat, sub-second Largest Contentful Paint (LCP), and comprehensive structured metadata. It demonstrates modern server-driven UI composition, granular client boundaries, dynamic Open Graph card rendering, and full Schema.org compliance.",
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
      "Micro-animations with GPU-accelerated framer-motion transforms",
    ],
    highlights: [
      "Next.js 16 App Router & React 19 architecture",
      "Core Web Vitals optimized with sub-second LCP",
      "Strict type-checking and automated route generation",
    ],
    architecture:
      "Server-first React architecture leveraging Next.js 16 App Router for minimal client JavaScript, instant hydration, and automated metadata generation. Rendering uses React Server Components by default with client-side interactive islands isolated strictly where Aceternity UI effects and Canvas animations execute.",
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
      "Nexus Dev Toolkit provides essential daily tools for developers in a unified, privacy-focused in-browser environment. Processing runs entirely on the client, ensuring sensitive logs, JSON payloads, and API tokens never leave the user's browser. Built to eliminate the need for insecure ad-laden web converters, Nexus handles formatting, compression, and analysis with instant feedback loops.",
    category: "Tools",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Web Workers"],
    liveUrl: "https://www.pankaj.life/projects/nexus-dev-toolkit",
    githubUrl: "https://github.com/ivpankaj",
    status: "In Progress",
    isSample: true, // Marked transparently as template showcase for user personalization
    features: [
      "Zero-latency client-side JSON analysis and syntax tree formatting",
      "Live CSS mesh gradient generator with CSS variable copy-to-clipboard",
      "SVG cleaner and path optimizer powered by Web Workers",
      "Dark and light contrast verification matrix",
      "Offline-capable PWA storage with IndexedDB local caching",
    ],
    highlights: [
      "Pure client-side zero-leak privacy model",
      "Keyboard shortcut workflow for power users",
      "Non-blocking Web Worker computation pipeline",
    ],
    architecture:
      "Built with Next.js client components offloaded to dedicated Web Workers for instant computation without blocking the main UI thread. Heavy parsing and AST traversal occur inside background worker threads, preserving 60 FPS animation smoothness on low-powered mobile devices.",
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
      "An exploratory cloud architecture project demonstrating distributed edge caching, CORS security enforcement, and token-bucket rate limiting for modern serverless architectures. Aura sits between high-traffic client frontends and compute-heavy upstream backends, enforcing query deduplication, stale-while-revalidate caching, and DDoS mitigation at edge points of presence.",
    category: "Experiments",
    technologies: ["TypeScript", "Node.js", "Cloudflare Workers", "REST API"],
    liveUrl: "https://www.pankaj.life/projects/aura-api-gateway",
    githubUrl: "https://github.com/ivpankaj",
    status: "Prototype",
    isSample: true, // Marked transparently as template showcase for user personalization
    features: [
      "Sub-15ms edge response routing across global locations",
      "Header-based dynamic caching and cache-invalidation hooks",
      "Configurable token-bucket rate limiting with sliding windows",
      "Comprehensive request telemetry and latency logs",
      "Zero-trust API key verification with cryptographic edge hashing",
    ],
    highlights: [
      "Edge-first distributed runtime with Cloudflare Workers",
      "Zero-cold-start performance using V8 isolates",
      "Strict schema validation on upstream payload responses",
    ],
    architecture:
      "TypeScript worker runtime with distributed key-value cache layer and resilient fallback routing. Implements optimistic cache lookups in memory before dispatching upstream HTTP fetches, reducing backend server loads by over 70% during traffic surges.",
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
      "Orbit Studio is a clean, minimal note-taking application designed for capturing technical thoughts, snippets, and project roadmaps without network dependency. With zero tracking and complete local-first storage, developers retain complete sovereignty over their data. Files can be categorized using nested tags, organized in virtual notebooks, and exported seamlessly to clean HTML, PDF, or formatted Markdown.",
    category: "Web Applications",
    technologies: ["React", "TypeScript", "Tailwind CSS", "IndexedDB", "Markdown"],
    liveUrl: "https://www.pankaj.life/projects/orbit-notes-sync",
    githubUrl: "https://github.com/ivpankaj",
    status: "Prototype",
    isSample: true, // Marked transparently as template showcase for user personalization
    features: [
      "Instant dual-pane Markdown editor with synchronized scrolling",
      "Syntax highlighting for 40+ programming languages",
      "Local-first persistence with zero cloud tracking",
      "Export directly to PDF, clean HTML, or GitHub-flavored MD",
      "Full-text indexing with client-side BM25 search engine",
    ],
    highlights: [
      "Local-first privacy architecture with IndexedDB",
      "Instant live preview with math typesetting (KaTeX)",
      "Vim and standard navigation bindings",
    ],
    architecture:
      "Client-side virtualized text buffer integrated with client IndexedDB persistence and Web Worker markdown parsing. Employs a differential sync engine designed to reconcile conflicting document revisions without network roundtrips.",
    accentColor: "#10b981",
    year: "2025",
  },
];
