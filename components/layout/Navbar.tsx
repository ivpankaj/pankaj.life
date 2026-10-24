"use client";

import React from "react";
import { FloatingNav, NavItem } from "@/components/ui/floating-navbar";
import { User, Briefcase, Cpu, BookOpen } from "lucide-react";

const navItems: NavItem[] = [
  {
    name: "About",
    link: "/#about",
    icon: <User className="h-4 w-4 text-[var(--theme-text)]" />,
  },
  {
    name: "Skills",
    link: "/#skills",
    icon: <Cpu className="h-4 w-4 text-[var(--theme-text)]" />,
  },
  {
    name: "Projects",
    link: "/projects",
    icon: <Briefcase className="h-4 w-4 text-[var(--theme-text)]" />,
  },
  {
    name: "Blog",
    link: "/blog",
    icon: <BookOpen className="h-4 w-4 text-[var(--theme-text)]" />,
  },
];

export function Navbar() {
  return <FloatingNav navItems={navItems} />;
}
