export interface ExploringItem {
  id: string;
  name: string;
  category: string;
  focus: string;
  status: "Actively Researching" | "Building Prototype" | "Testing";
  updatedDate: string;
  badgeColor: string;
  projectUrl?: string;
}

export const exploringItems: ExploringItem[] = [
  {
    id: "nextjs-16-ppr",
    name: "Partial Prerendering (PPR)",
    category: "Next.js 16 Framework",
    focus:
      "Combining static shell rendering with dynamic streaming micro-holes for instant perceived loads.",
    status: "Testing",
    updatedDate: "April 2026",
    badgeColor: "#38bdf8",
    projectUrl: "https://nextjs.org/docs",
  },
  {
    id: "edge-compute",
    name: "Edge Compute & Cloudflare Workers",
    category: "Cloud Infrastructure",
    focus:
      "Exploring zero-cold-start edge functions, KV storage, and geo-distributed caching strategies.",
    status: "Building Prototype",
    updatedDate: "March 2026",
    badgeColor: "#f97316",
    projectUrl: "https://workers.cloudflare.com",
  },
  {
    id: "svg-mesh-gradients",
    name: "Pure CSS & SVG 3D Shaders",
    category: "Creative Frontend",
    focus:
      "Building lightweight, GPU-accelerated atmospheric backgrounds without heavy WebGL overhead.",
    status: "Actively Researching",
    updatedDate: "March 2026",
    badgeColor: "#a855f7",
    projectUrl: "https://pankaj.life",
  },
  {
    id: "ai-tooling-specs",
    name: "AI Agent Workflows & Tool APIs",
    category: "Developer Tooling",
    focus:
      "Understanding Model Context Protocol (MCP) and agentic code generation pipelines.",
    status: "Actively Researching",
    updatedDate: "April 2026",
    badgeColor: "#10b981",
    projectUrl: "https://github.com/ivpankaj",
  },
];
