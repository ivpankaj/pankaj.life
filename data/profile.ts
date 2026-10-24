export interface Profile {
  name: string;
  displayName: string;
  handle: string;
  domain: string;
  tagline: string;
  subheading: string;
  aboutIntro: string;
  interests: string[];
  approach: string;
  futureGoals: string;
  email?: string;
  statusText: string;
  statusActive: boolean;
}

export const profile: Profile = {
  name: "Pankaj Verma",
  displayName: "Pankaj",
  handle: "ivpankaj",
  domain: process.env.NEXT_PUBLIC_SITE_URL || "https://www.pankaj.life",
  tagline: "Exploring Technology. Building Digital Experiences.",
  subheading:
    "Personal developer portfolio and technical projects by Pankaj Verma (@ivpankaj) — Full-stack engineer exploring modern web architectures, Next.js, React, and TypeScript.",
  aboutIntro:
    "I am Pankaj Verma, known online as ivpankaj. I am a full-stack developer and software engineer who builds modern web applications, experiments with scalable architectures, and crafts high-performance digital tools using Next.js, React, TypeScript, and Node.js.",
  interests: [
    "Full-Stack Web Development",
    "Modern Next.js & React Architectures",
    "Creative UI/UX & Responsive Design",
    "Cloud Infrastructure & Edge Computing",
    "Developer Tooling & Automation",
    "Open Web Standards & Web Performance",
  ],
  approach:
    "I believe in clean craftsmanship, high-velocity experimentation, and user-first design. Software should not just be functional; it should feel joyful, accessible, and fast.",
  futureGoals:
    "Continuing to deepen my mastery of scalable web architectures, exploring creative interactions, and sharing projects with the global developer community.",
  email: "hello@pankaj.life",
  statusText: "Building digital projects & exploring modern tech",
  statusActive: true,
};
