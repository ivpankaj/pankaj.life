export interface SocialPlatform {
  id: string;
  name: string;
  handle: string;
  url: string;
  purpose: string;
  category: "Code & Projects" | "Professional" | "Social & Media";
  brandColor: string;
  bgGradient: string;
  isPrimary: boolean;
}

export const socials: SocialPlatform[] = [
  {
    id: "github",
    name: "GitHub",
    handle: "@ivpankaj",
    url: "https://github.com/ivpankaj",
    purpose:
      "Open-source repositories, experiments, portfolio code, and technical collaborations.",
    category: "Code & Projects",
    brandColor: "#ffffff",
    bgGradient: "from-zinc-900 to-black",
    isPrimary: true,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "Pankaj Verma (@ivpankaj)",
    url: "https://www.linkedin.com/in/ivpankaj",
    purpose:
      "Professional networking, technology career updates, and industry connections.",
    category: "Professional",
    brandColor: "#0a66c2",
    bgGradient: "from-blue-950 to-indigo-950",
    isPrimary: true,
  },
  {
    id: "x",
    name: "X (formerly Twitter)",
    handle: "@ivpankaj",
    url: "https://x.com/ivpankaj",
    purpose:
      "Quick updates on tech trends, software discoveries, web dev insights, and commentary.",
    category: "Social & Media",
    brandColor: "#e7e9ea",
    bgGradient: "from-neutral-900 to-black",
    isPrimary: true,
  },
  {
    id: "instagram",
    name: "Instagram",
    handle: "@ivpankaj",
    url: "https://instagram.com/ivpankaj",
    purpose:
      "Creative snapshots, visual ideas, behind-the-scenes life, and digital lifestyle moments.",
    category: "Social & Media",
    brandColor: "#e1306c",
    bgGradient: "from-purple-950 via-pink-950 to-orange-950",
    isPrimary: false,
  },
  {
    id: "youtube",
    name: "YouTube",
    handle: "@ivpankaj",
    url: "https://youtube.com/@ivpankaj",
    purpose:
      "Video content, tutorials, tech walkthroughs, and creative digital media.",
    category: "Social & Media",
    brandColor: "#ff0000",
    bgGradient: "from-red-950 to-neutral-950",
    isPrimary: false,
  },
];
