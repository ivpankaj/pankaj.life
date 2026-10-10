import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 sm:mb-16 ${
        align === "center" ? "text-center max-w-3xl mx-auto" : "text-left max-w-2xl"
      }`}
    >
      {/* Chunky Cartoon Heading without any badge or subheading */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 font-cartoon drop-shadow-sm">
        {title}
      </h2>
    </div>
  );
}
