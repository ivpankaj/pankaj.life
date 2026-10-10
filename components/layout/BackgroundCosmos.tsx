import React from "react";

export function BackgroundCosmos() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-white"
    >
      {/* Soft warm pastel ambient glows on clean white */}
      <div className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-sky-200/40 via-indigo-100/30 to-pink-100/40 blur-[120px]" />
      <div className="absolute top-[40%] right-[-10%] w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-amber-100/50 via-rose-100/40 to-transparent blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-cyan-100/40 via-purple-100/30 to-transparent blur-[130px]" />

      {/* Gentle Fluffy Cartoon Clouds drifting on white canvas */}
      <div className="absolute top-[8%] left-[-15%] w-[380px] opacity-40 animate-cloud-slow">
        <svg viewBox="0 0 100 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 35H80C86.6274 35 92 29.6274 92 23C92 16.5918 86.9749 11.3578 80.6278 11.0204C78.7188 4.71714 72.8988 0 66 0C61.4299 0 57.345 2.07921 54.6309 5.37894C51.6967 3.29267 48.0931 2 44.1754 2C35.8457 2 29.0224 8.42398 28.4069 16.6083C25.8601 15.5898 23.0118 15 20 15C8.9543 15 0 23.9543 0 35H20Z"
            fill="#e0e7ff"
          />
        </svg>
      </div>

      <div
        className="absolute top-[52%] left-[-25%] w-[420px] opacity-35 animate-cloud-slow"
        style={{ animationDuration: "75s", animationDelay: "15s" }}
      >
        <svg viewBox="0 0 100 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 35H80C86.6274 35 92 29.6274 92 23C92 16.5918 86.9749 11.3578 80.6278 11.0204C78.7188 4.71714 72.8988 0 66 0C61.4299 0 57.345 2.07921 54.6309 5.37894C51.6967 3.29267 48.0931 2 44.1754 2C35.8457 2 29.0224 8.42398 28.4069 16.6083C25.8601 15.5898 23.0118 15 20 15C8.9543 15 0 23.9543 0 35H20Z"
            fill="#fce7f3"
          />
        </svg>
      </div>

      {/* Pastel 4-Pointed Cartoon Sparkle Stars */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 140 120 Q 140 140 160 140 Q 140 140 140 160 Q 140 140 120 140 Q 140 140 140 120 Z"
            fill="#fbbf24"
            className="animate-star-joy"
            style={{ transformOrigin: "140px 140px", animationDelay: "0.2s" }}
          />
          <path
            d="M 780 140 Q 780 155 795 155 Q 780 155 780 170 Q 780 155 765 155 Q 780 155 780 140 Z"
            fill="#38bdf8"
            className="animate-star-joy"
            style={{ transformOrigin: "780px 155px", animationDelay: "1.8s" }}
          />
          <path
            d="M 1080 200 Q 1080 215 1095 215 Q 1080 215 1080 230 Q 1080 215 1065 215 Q 1080 215 1080 200 Z"
            fill="#f472b6"
            className="animate-star-joy"
            style={{ transformOrigin: "1080px 215px", animationDelay: "0.9s" }}
          />
          <path
            d="M 320 540 Q 320 555 335 555 Q 320 555 320 570 Q 320 555 305 555 Q 320 555 320 540 Z"
            fill="#fbbf24"
            className="animate-star-joy"
            style={{ transformOrigin: "320px 555px", animationDelay: "2.3s" }}
          />
        </svg>
      </div>
    </div>
  );
}
