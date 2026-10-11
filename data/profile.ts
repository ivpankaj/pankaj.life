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
  domain: "https://www.pankaj.life",
  tagline: "Exploring Technology. Building Digital Experiences.",
  subheading:
    "A personal space for my technology journey, digital projects, experiments, skills, and everything I build on the internet.",
  aboutIntro:
    "I am an enthusiastic technologist and developer who loves exploring modern web frameworks, building delightful digital products, and experimenting with software architecture. Driven by curiosity, I enjoy turning ideas into performant, beautifully styled web applications.",
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
