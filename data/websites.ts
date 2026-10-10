export interface WebsiteEntry {
  id: string;
  name: string;
  domain: string;
  url: string;
  purpose: string;
  role: string;
  technologies: string[];
  status: "Active" | "In Development" | "Maintained";
  isVerifiedPersonal: boolean;
  notes?: string;
}

export const websites: WebsiteEntry[] = [
  {
    id: "pankaj-life",
    name: "pankaj.life",
    domain: "pankaj.life",
    url: "https://pankaj.life",
    purpose:
      "Official personal tech portfolio and digital home of Pankaj Verma (@ivpankaj), showcasing technologies, projects, and web experiments.",
    role: "Creator, Designer & Developer",
    technologies: ["Next.js 16", "TypeScript", "Tailwind CSS", "App Router"],
    status: "Active",
    isVerifiedPersonal: true,
    notes: "Primary production domain and personal digital flagship.",
  },
];
