"use client";
import React, { useId, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Sparkle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  direction: number;
}

export const SparklesCore = (props: {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}) => {
  const {
    id,
    className,
    background = "transparent",
    minSize = 0.6,
    maxSize = 2.4,
    speed = 1,
    particleColor = "#ffffff",
    particleDensity = 80,
  } = props;
  const [init, setInit] = useState(false);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const generatedId = useId();
  const canvasId = id || generatedId;

  useEffect(() => {
    setInit(true);
  }, []);

  useEffect(() => {
    if (!init || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    const count = Math.floor((width * height) / (10000 / (particleDensity / 10)));
    const sparkles: Sparkle[] = [];

    for (let i = 0; i < count; i++) {
      sparkles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * (maxSize - minSize) + minSize,
        opacity: Math.random(),
        speed: (Math.random() * 0.8 + 0.2) * speed,
        direction: Math.random() > 0.5 ? 1 : -1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      if (background !== "transparent") {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, width, height);
      }

      ctx.fillStyle = particleColor;
      sparkles.forEach((sparkle) => {
        sparkle.opacity += sparkle.speed * 0.015 * sparkle.direction;
        if (sparkle.opacity >= 1) {
          sparkle.opacity = 1;
          sparkle.direction = -1;
        } else if (sparkle.opacity <= 0.1) {
          sparkle.opacity = 0.1;
          sparkle.direction = 1;
        }

        ctx.globalAlpha = sparkle.opacity;
        ctx.beginPath();
        ctx.arc(sparkle.x, sparkle.y, sparkle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [init, background, minSize, maxSize, speed, particleColor, particleDensity]);

  return (
    <canvas
      ref={canvasRef}
      id={canvasId}
      className={cn("h-full w-full pointer-events-none", className)}
    />
  );
};
