import React from "react";
import { Sparkles } from "lucide-react";

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 sm:mb-16 ${
        align === "center" ? "text-center max-w-3xl mx-auto" : "text-left max-w-2xl"
      }`}
    >
      {/* 3D Cartoon Section Badge */}
      <div
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-4 bg-[#1e295d] border-2 border-[#6366f1] border-b-4 border-b-[#1e1b4b] text-amber-300 shadow-md font-cartoon ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
        <span>{badge}</span>
      </div>

      {/* Chunky Cartoon Heading */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4 font-cartoon drop-shadow-[0_3px_0_#1e1b4b]">
        {title}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg text-indigo-200/90 leading-relaxed font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
}
