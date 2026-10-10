export interface Technology {
  id: string;
  name: string;
  categoryId:
    | "frontend"
    | "backend"
    | "frameworks"
    | "databases"
    | "cloud"
    | "tools"
    | "design";
  categoryName: string;
  description: string;
  color: string;
  icon: string; // Identifier for authentic SVG rendering
  websiteUrl: string;
}

export const techCategories = [
  { id: "all", name: "All Technologies" },
  { id: "frontend", name: "Frontend" },
  { id: "frameworks", name: "Frameworks & Libraries" },
  { id: "backend", name: "Backend & Runtime" },
  { id: "databases", name: "Databases & Storage" },
  { id: "cloud", name: "Cloud & Deployment" },
  { id: "tools", name: "Developer Tools" },
  { id: "design", name: "Design & Creative" },
] as const;

export const technologies: Technology[] = [
  // Frameworks & Frontend
  {
    id: "nextjs",
    name: "Next.js",
    categoryId: "frameworks",
    categoryName: "Frameworks & Libraries",
    description: "The React framework for the Web, App Router & Turbopack.",
    color: "#ffffff",
    icon: "nextjs",
    websiteUrl: "https://nextjs.org",
  },
  {
    id: "react",
    name: "React",
    categoryId: "frameworks",
    categoryName: "Frameworks & Libraries",
    description: "Component-driven UI library with modern Concurrent features.",
    color: "#61dafb",
    icon: "react",
    websiteUrl: "https://react.dev",
  },
  {
    id: "typescript",
    name: "TypeScript",
    categoryId: "frontend",
    categoryName: "Frontend",
    description: "Strongly typed JavaScript with robust type inference and safety.",
    color: "#3178c6",
    icon: "typescript",
    websiteUrl: "https://www.typescriptlang.org",
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    categoryId: "frontend",
    categoryName: "Frontend",
    description: "The standard scripting engine powering dynamic web experiences.",
    color: "#f7df1e",
    icon: "javascript",
    websiteUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    categoryId: "frontend",
    categoryName: "Frontend",
    description: "Utility-first CSS framework for rapid and maintainable styling.",
    color: "#38bdf8",
    icon: "tailwind",
    websiteUrl: "https://tailwindcss.com",
  },
  {
    id: "html5-css3",
    name: "Modern HTML5 & CSS3",
    categoryId: "frontend",
    categoryName: "Frontend",
    description: "Semantic web architecture, responsive layouts, and CSS variables.",
    color: "#f97316",
    icon: "html5",
    websiteUrl: "https://developer.mozilla.org",
  },

  // Backend & Runtime
  {
    id: "nodejs",
    name: "Node.js",
    categoryId: "backend",
    categoryName: "Backend & Runtime",
    description: "JavaScript runtime built on Chrome's V8 engine.",
    color: "#68a063",
    icon: "nodejs",
    websiteUrl: "https://nodejs.org",
  },
  {
    id: "rest-api",
    name: "REST & Web APIs",
    categoryId: "backend",
    categoryName: "Backend & Runtime",
    description: "Designing structured JSON API endpoints and microservices.",
    color: "#38bdf8",
    icon: "api",
    websiteUrl: "https://restfulapi.net",
  },

  // Databases & Storage
  {
    id: "postgresql",
    name: "PostgreSQL",
    categoryId: "databases",
    categoryName: "Databases & Storage",
    description: "Relational database system known for reliability and feature robustness.",
    color: "#336791",
    icon: "postgresql",
    websiteUrl: "https://www.postgresql.org",
  },
  {
    id: "sqlite",
    name: "SQLite",
    categoryId: "databases",
    categoryName: "Databases & Storage",
    description: "Zero-configuration, lightweight transactional SQL engine.",
    color: "#003b57",
    icon: "sqlite",
    websiteUrl: "https://www.sqlite.org",
  },

  // Cloud & Deployment
  {
    id: "vercel",
    name: "Vercel",
    categoryId: "cloud",
    categoryName: "Cloud & Deployment",
    description: "Frontend cloud platform for instant previews and global edge routing.",
    color: "#ffffff",
    icon: "vercel",
    websiteUrl: "https://vercel.com",
  },
  {
    id: "cloudflare",
    name: "Cloudflare",
    categoryId: "cloud",
    categoryName: "Cloud & Deployment",
    description: "Global CDN, DNS routing, and Edge Worker infrastructure.",
    color: "#f38020",
    icon: "cloudflare",
    websiteUrl: "https://cloudflare.com",
  },

  // Tools
  {
    id: "git",
    name: "Git",
    categoryId: "tools",
    categoryName: "Developer Tools",
    description: "Distributed version control system for tracking source code changes.",
    color: "#f05032",
    icon: "git",
    websiteUrl: "https://git-scm.com",
  },
  {
    id: "github",
    name: "GitHub",
    categoryId: "tools",
    categoryName: "Developer Tools",
    description: "Cloud-hosted repository collaboration, code reviews, and actions.",
    color: "#f0f6fc",
    icon: "github",
    websiteUrl: "https://github.com",
  },
  {
    id: "vscode",
    name: "VS Code",
    categoryId: "tools",
    categoryName: "Developer Tools",
    description: "Extensible code editor optimized for modern web development.",
    color: "#007acc",
    icon: "vscode",
    websiteUrl: "https://code.visualstudio.com",
  },

  // Design
  {
    id: "figma",
    name: "Figma",
    categoryId: "design",
    categoryName: "Design & Creative",
    description: "Collaborative interface design, wireframing, and design system tokens.",
    color: "#a259ff",
    icon: "figma",
    websiteUrl: "https://figma.com",
  },
];
