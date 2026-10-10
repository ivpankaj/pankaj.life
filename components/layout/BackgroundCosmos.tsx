import React from "react";

export function BackgroundCosmos() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Deep atmospheric sky gradient base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.22),rgba(15,23,42,0)_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_85%_35%,rgba(244,63,94,0.12),rgba(15,23,42,0)_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_15%_75%,rgba(56,189,248,0.15),rgba(15,23,42,0)_65%)]" />

      {/* Floating Pixar-inspired glowing orbs */}
      <div className="absolute top-[8%] left-[10%] w-96 h-96 rounded-full bg-gradient-to-tr from-indigo-600/20 via-purple-500/15 to-transparent blur-3xl animate-pulse-glow" />
      <div
        className="absolute top-[35%] right-[5%] w-[480px] h-[480px] rounded-full bg-gradient-to-bl from-rose-500/15 via-orange-500/10 to-transparent blur-3xl animate-pulse-glow"
        style={{ animationDelay: "2.5s" }}
      />
      <div
        className="absolute bottom-[15%] left-[25%] w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-cyan-500/15 via-indigo-600/15 to-transparent blur-3xl animate-pulse-glow"
        style={{ animationDelay: "4s" }}
      />

      {/* Lightweight SVG Planetary Elements & Constellation Motifs */}
      <svg
        className="absolute top-20 right-[15%] w-72 h-72 opacity-25 animate-float-slow"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="50" fill="url(#planetGrad1)" />
        <ellipse
          cx="100"
          cy="100"
          rx="82"
          ry="18"
          stroke="url(#ringGrad1)"
          strokeWidth="3.5"
          transform="rotate(-28 100 100)"
        />
        <defs>
          <linearGradient id="planetGrad1" x1="60" y1="60" x2="140" y2="140">
            <stop stopColor="#818cf8" />
            <stop offset="1" stopColor="#4338ca" />
          </linearGradient>
          <linearGradient id="ringGrad1" x1="20" y1="100" x2="180" y2="100">
            <stop stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="0.5" stopColor="#f43f5e" stopOpacity="0.4" />
            <stop offset="1" stopColor="#818cf8" stopOpacity="0.9" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="absolute bottom-[28%] left-[8%] w-48 h-48 opacity-20 animate-float-reverse"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="80" cy="80" r="38" fill="url(#planetGrad2)" />
        <circle cx="120" cy="55" r="9" fill="#38bdf8" fillOpacity="0.6" />
        <defs>
          <linearGradient id="planetGrad2" x1="50" y1="50" x2="110" y2="110">
            <stop stopColor="#fb7185" />
            <stop offset="1" stopColor="#9333ea" />
          </linearGradient>
        </defs>
      </svg>

      {/* Decorative Constellation Stars */}
      <svg
        className="absolute inset-0 w-full h-full opacity-35"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12%" cy="18%" r="1.5" fill="#ffffff" className="animate-twinkle" />
        <circle cx="28%" cy="12%" r="2" fill="#38bdf8" className="animate-twinkle" style={{ animationDelay: "1s" }} />
        <circle cx="45%" cy="22%" r="1.5" fill="#facc15" className="animate-twinkle" style={{ animationDelay: "2s" }} />
        <circle cx="68%" cy="14%" r="2" fill="#fb7185" className="animate-twinkle" style={{ animationDelay: "0.5s" }} />
        <circle cx="82%" cy="25%" r="1.5" fill="#ffffff" className="animate-twinkle" style={{ animationDelay: "1.8s" }} />
        <circle cx="92%" cy="45%" r="2" fill="#38bdf8" className="animate-twinkle" style={{ animationDelay: "2.3s" }} />
        <circle cx="20%" cy="58%" r="1.5" fill="#c084fc" className="animate-twinkle" style={{ animationDelay: "1.4s" }} />
        <circle cx="35%" cy="80%" r="2" fill="#ffffff" className="animate-twinkle" style={{ animationDelay: "0.8s" }} />
        <circle cx="75%" cy="72%" r="1.5" fill="#34d399" className="animate-twinkle" style={{ animationDelay: "2.6s" }} />
        <circle cx="88%" cy="88%" r="2" fill="#fb7185" className="animate-twinkle" style={{ animationDelay: "1.1s" }} />
      </svg>

      {/* Subtle Grid Lattice for architectural tech feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
    </div>
  );
}
