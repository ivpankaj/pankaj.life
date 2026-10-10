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
  const variantClass =
    variant === "purple"
      ? "pixar-card-purple"
      : variant === "orange"
      ? "pixar-card-orange"
      : "pixar-card";

  return (
    <div
      className={cn(
        variantClass,
        "p-6 sm:p-8 relative overflow-hidden transition-all duration-200",
        className
      )}
      {...props}
    >
      {/* Glossy Curved Highlight on top */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-6 right-6 h-2 bg-gradient-to-r from-transparent via-white/25 to-transparent rounded-full blur-[1px] pointer-events-none"
      />
      {children}
    </div>
  );
}
