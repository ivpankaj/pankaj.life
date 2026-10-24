export interface Article {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
  content: string[];
}

export const articles: Article[] = [
  {
    slug: "architecting-nextjs-16-turbopack-react-19",
    title: "Architecting Next.js 16 Applications with React 19 and Turbopack",
    tagline: "Server Components, streaming metadata, and building zero-bloat web architectures.",
    description:
      "An engineering breakdown by Pankaj Verma on building high-performance web systems using Next.js 16 App Router, React 19 concurrent features, and Turbopack compilation.",
    date: "2026-02-15",
    readingTime: "6 min read",
    category: "Architecture",
    tags: ["Next.js", "React 19", "Turbopack", "TypeScript", "Performance"],
    content: [
      "The evolution of the web platform requires frontend architectures to deliver instant first paints while keeping client-side JavaScript payloads to an absolute minimum. In Next.js 16 paired with React 19, the App Router transitions from an experimental paradigm to a production-grade foundation for mission-critical web applications.",
      "By embracing React Server Components (RSC) by default, data-fetching logic and template rendering remain on the server or edge layer. Only interactive micro-components—such as theme selectors, dynamic navigation docks, and form handlers—ship client JavaScript. This architectural choice delivers lightning-fast First Contentful Paint (FCP) and reduces Cumulative Layout Shift (CLS) to near zero.",
      "Turbopack fundamentally accelerates developer feedback loops and production builds. With incremental computation and native Rust compilation, hot-module replacement operates in milliseconds, enabling rapid iteration on complex user interfaces and component libraries like Aceternity UI.",
      "Furthermore, Next.js 16 provides first-class native metadata APIs, allowing dynamic Open Graph generation via next/og alongside automated sitemap.xml and robots.txt generation. This ensures that every public route is fully optimized for search crawlers without sacrificing developer velocity or introducing client-side hydration delays.",
    ],
  },
  {
    slug: "modern-design-tokens-tailwind-v4",
    title: "Modern Design Tokens and Dynamic Theming with Tailwind CSS v4",
    tagline: "Implementing zero-runtime CSS theme switching without flash-of-unstyled-content.",
    description:
      "How to structure modern CSS variables, flash-free theme hydration, and tactile UI components with Tailwind CSS v4 in production Next.js apps by Pankaj Verma.",
    date: "2026-03-01",
    readingTime: "5 min read",
    category: "Frontend",
    tags: ["Tailwind CSS", "CSS", "Design Systems", "Web Performance"],
    content: [
      "Modern web applications demand visual depth and responsiveness without the runtime overhead traditionally associated with CSS-in-JS libraries. Tailwind CSS v4 introduces a streamlined CSS-first architecture built directly on modern CSS custom properties and standard @theme directives.",
      "A primary challenge in multi-theme web applications (such as Light, Dark, Gold, Silver, and Cyber palettes) is preventing Flash of Unstyled Content (FOUC). By executing a minimal, synchronous theme resolution script in the document <head> before the DOM paints, data-theme attributes can be established instantaneously from localStorage.",
      "Coupled with CSS custom properties mapped to semantic design tokens (--theme-bg, --theme-text, --theme-card-border), color switches trigger zero layout thrashing or unnecessary React re-renders. Every transition feels fluid and intentional.",
      "This architecture enables rich tactile aesthetics—such as specular highlight borders, glowing spotlights, and glassmorphic cards—while maintaining a 100/100 Core Web Vitals score across desktop and mobile devices.",
    ],
  },
];
