"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link?: string;
    icon?: React.ReactNode;
    category?: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 py-6",
        className
      )}
    >
      {items.map((item, idx) => {
        const Wrapper = item.link ? "a" : "div";
        const wrapperProps = item.link
          ? {
              href: item.link,
              target: item.link.startsWith("http") ? "_blank" : undefined,
              rel: item.link.startsWith("http") ? "noopener noreferrer" : undefined,
            }
          : {};

        return (
          <Wrapper
            key={`${item.title}-${idx}`}
            {...wrapperProps}
            className="relative group block p-2 h-full w-full cursor-pointer no-underline"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-[var(--theme-card-border)]/20 block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <div className="flex items-center gap-3 mb-2">
                {item.icon && <div className="shrink-0">{item.icon}</div>}
                <CardTitle>{item.title}</CardTitle>
              </div>
              {item.category && (
                <div className="text-[11px] font-mono text-[var(--theme-text-muted)] mb-2">
                  {item.category}
                </div>
              )}
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </Wrapper>
        );
      })}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-[var(--theme-card-bg)] border border-[var(--theme-card-border)] group-hover:border-[var(--theme-card-hover)] group-hover:shadow-[0_0_28px_var(--theme-glow)] transition-all duration-300 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2 sm:p-3">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-[var(--theme-text)] font-bold tracking-wide text-base", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-[var(--theme-text-muted)] tracking-normal leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
