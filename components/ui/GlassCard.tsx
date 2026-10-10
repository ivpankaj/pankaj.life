import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "blue" | "purple" | "orange";
}

export function GlassCard({
  children,
  className,
  variant = "blue",
  ...props
}: GlassCardProps) {
  const variantStyles =
    variant === "purple"
      ? "bg-white text-slate-900 border-4 border-purple-200 border-b-8 border-b-purple-300 shadow-xl shadow-purple-100/60 hover:border-purple-400 hover:border-b-purple-500"
      : variant === "orange"
      ? "bg-white text-slate-900 border-4 border-amber-200 border-b-8 border-b-amber-300 shadow-xl shadow-amber-100/60 hover:border-amber-400 hover:border-b-amber-500"
      : "bg-white text-slate-900 border-4 border-indigo-200 border-b-8 border-b-indigo-300 shadow-xl shadow-indigo-100/60 hover:border-pink-300 hover:border-b-pink-400";

  return (
    <div
      className={cn(
        "rounded-[32px] p-6 sm:p-8 relative overflow-hidden transition-all duration-200 hover:-translate-y-1",
        variantStyles,
        className
      )}
      {...props}
    >
      {/* Top Gloss Reflection */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-6 right-6 h-2 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-full blur-[1px] pointer-events-none"
      />
      {children}
    </div>
  );
}
