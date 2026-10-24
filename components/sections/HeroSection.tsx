"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { Spotlight } from "@/components/ui/spotlight";
import { FlipWords } from "@/components/ui/flip-words";
import { SparklesCore } from "@/components/ui/sparkles";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { useTheme } from "@/components/theme/ThemeProvider";

export function HeroSection() {
  const { theme } = useTheme();

  const animatedKeywords = [
    "Scalable Web Systems",
    "Modern Next.js Platforms",
    "Cloud Edge Infrastructures",
    "High-Performance Interfaces",
    "Interactive Digital Tools",
  ];

  const spotlights = {
    light: { s1: "#cbd5e1", s2: "#e2e8f0", s3: "#94a3b8" },
    gold: { s1: "#fef3c7", s2: "#ebd498", s3: "#a17822" },
    silver: { s1: "#f1f5f9", s2: "#e2e8f0", s3: "#64748b" },
    black: { s1: "#ffffff", s2: "#a1a1aa", s3: "#52525b" },
    dawn: { s1: "#fdf2f8", s2: "#fce7f3", s3: "#db2777" },
    cyber: { s1: "#06b6d4", s2: "#0e3455", s3: "#22d3ee" },
  }[theme] || { s1: "#cbd5e1", s2: "#e2e8f0", s3: "#94a3b8" };

  const particleColor = {
    light: "#000000",
    gold: "#000000",
    silver: "#000000",
    black: "#ffffff",
    dawn: "#000000",
    cyber: "#ffffff",
  }[theme] || "#000000";

  const glowBeamGradient = {
    light: "from-transparent via-black to-transparent",
    gold: "from-transparent via-black to-transparent",
    silver: "from-transparent via-black to-transparent",
    black: "from-transparent via-white to-transparent",
    dawn: "from-transparent via-black to-transparent",
    cyber: "from-transparent via-cyan-400 to-transparent",
  }[theme] || "from-transparent via-black to-transparent";

  return (
    <section className="relative min-h-[92vh] w-full flex items-center justify-center overflow-hidden bg-[var(--theme-bg)] antialiased pt-28 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      {/* Official Aceternity UI Spotlights with Theme-Specific Glows */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill={spotlights.s1}
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw]"
        fill={spotlights.s2}
      />
      <Spotlight
        className="top-28 left-80 h-[80vh] w-[50vw]"
        fill={spotlights.s3}
      />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 h-full w-full bg-[var(--theme-bg)] bg-grid-white/[0.03] -z-10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="max-w-6xl mx-auto w-full relative z-10 text-center flex flex-col items-center">
        {/* Hero Eyebrow & Main H1 */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--theme-card-border)] bg-[var(--theme-subtle-bg)] text-xs font-mono text-[var(--theme-text-muted)] mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Full-Stack Developer &amp; Systems Engineer</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[var(--theme-text)] max-w-5xl leading-[1.08]">
          {profile.name}
        </h1>

        {/* Dynamic Aceternity FlipWords Headline */}
        <div className="text-xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[var(--theme-text)] mt-4 flex items-center justify-center flex-wrap gap-2">
          <span>Engineering</span>
          <FlipWords words={animatedKeywords} className="text-[var(--theme-text)] font-bold" />
        </div>

        {/* Aceternity Sparkles with Radiant Glow Beam */}
        <div className="w-full max-w-2xl h-20 relative mt-2">
          {/* Radiant Beams */}
          <div className={`absolute inset-x-12 top-0 bg-gradient-to-r ${glowBeamGradient} h-[2px] w-3/4 mx-auto blur-sm`} />
          <div className={`absolute inset-x-12 top-0 bg-gradient-to-r ${glowBeamGradient} h-px w-3/4 mx-auto`} />
          <div className={`absolute inset-x-32 top-0 bg-gradient-to-r ${glowBeamGradient} h-[4px] w-1/3 mx-auto blur-sm`} />
          <div className={`absolute inset-x-32 top-0 bg-gradient-to-r ${glowBeamGradient} h-px w-1/3 mx-auto`} />

          {/* Sparkles Core Canvas */}
          <SparklesCore
            key={`sparkles-${theme}`}
            background="transparent"
            minSize={0.4}
            maxSize={1.6}
            particleDensity={60}
            className="w-full h-full"
            particleColor={particleColor}
          />

          {/* Mask to blend edges */}
          <div className="absolute inset-0 w-full h-full bg-[var(--theme-bg)] [mask-image:radial-gradient(350px_100px_at_top,transparent_20%,black)] pointer-events-none" />
        </div>

        {/* Introductory Subtitle */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-[var(--theme-text-muted)] leading-relaxed font-normal">
          I&apos;m <strong className="font-semibold text-[var(--theme-text)]">Pankaj Verma</strong>, known online as <strong className="font-semibold text-[var(--theme-text)] font-mono">@{profile.handle}</strong>. I build high-performance web applications and digital platforms using Next.js, React, TypeScript, and Node.js. Explore my verified projects, technical work, and software engineering portfolio.
        </p>

        {/* Aceternity Moving Border CTA & Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link href="/projects">
            <MovingBorderButton
              borderRadius="9999px"
              duration={3500}
              className="bg-[var(--theme-card-bg)] text-[var(--theme-text)] font-medium text-sm px-6 py-3 border-[var(--theme-card-border)] flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 text-[var(--theme-text)] group-hover:translate-x-1 transition-transform" />
            </MovingBorderButton>
          </Link>

          <Link
            href="/#skills"
            className="px-5 py-3 rounded-full border border-[var(--theme-card-border)] bg-[var(--theme-subtle-bg)] text-[var(--theme-text)] hover:border-[var(--theme-card-hover)] transition-all text-sm font-medium shadow-sm"
          >
            Technical Stack
          </Link>

          <Link
            href="/contact"
            className="theme-btn px-6 py-3 rounded-full border border-[var(--theme-card-border)] bg-[var(--theme-btn-bg)] text-[var(--theme-btn-text)] font-medium text-sm hover:opacity-90 transition-opacity flex items-center gap-2 shadow-sm"
          >
            <Send className="w-4 h-4 text-[var(--theme-btn-text)]" />
            <span>Get in Touch</span>
          </Link>

          <a
            href="https://github.com/ivpankaj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile of Pankaj Verma (@ivpankaj)"
            className="px-5 py-3 rounded-full border border-[var(--theme-card-border)] bg-[var(--theme-subtle-bg)] text-[var(--theme-text-muted)] hover:text-[var(--theme-text)] hover:border-[var(--theme-card-hover)] transition-all flex items-center gap-2 text-sm shadow-sm"
          >
            <BrandIcon name="github" size={18} />
            <span className="font-mono text-xs">@ivpankaj</span>
          </a>
        </div>

        {/* Real Official Color Logos for Social Media */}
        <div className="pt-10 flex items-center justify-center gap-3">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`${social.name} — ${social.handle}`}
              aria-label={`${social.name} profile of Pankaj Verma (${social.handle})`}
              className="p-2.5 rounded-xl border border-[var(--theme-card-border)] bg-[var(--theme-card-bg)] hover:border-[var(--theme-card-hover)] hover:scale-105 transition-all shadow-sm flex items-center justify-center"
            >
              <BrandIcon name={social.id} size={22} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
