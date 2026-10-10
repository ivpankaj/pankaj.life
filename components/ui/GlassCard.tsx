import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function GlassCard({
  children,
  className,
  glow = true,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "cosmic-glass rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300",
        glow && "cosmic-glass-hover",
        className
      )}
      {...props}
    >
      {/* Specular highlight rim */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl pointer-events-none"
      />
      {children}
    </div>
  );
}
