"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
  heading = "Journey & Milestones",
  subheading,
  headingTag = "h2",
}: {
  data: TimelineEntry[];
  heading?: string;
  subheading?: string;
  headingTag?: "h1" | "h2";
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-[var(--theme-bg)] font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8 lg:px-10">
        {headingTag === "h1" ? (
          <h1 className="text-2xl md:text-5xl font-bold tracking-tight text-[var(--theme-text)] max-w-4xl">
            {heading}
          </h1>
        ) : (
          <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-[var(--theme-text)] max-w-4xl">
            {heading}
          </h2>
        )}
        {subheading && (
          <p className="text-[var(--theme-text-muted)] text-sm md:text-base max-w-2xl leading-relaxed mt-4">
            {subheading}
          </p>
        )}
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-24 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-32 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[var(--theme-card-bg)] flex items-center justify-center border border-[var(--theme-card-border)]">
                <div className="h-4 w-4 rounded-full bg-[var(--theme-text)] p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-[var(--theme-text)]">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-16 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-xl mb-3 text-left font-bold text-[var(--theme-text)]">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[var(--theme-card-border)] to-transparent to-[99%]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[var(--theme-card-border)] via-[var(--theme-text)] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
