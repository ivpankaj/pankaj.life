import React from "react";

export function BackgroundCosmos() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Saturated Cartoon Sky Gradients: Royal Twilight, Warm Aurora & Magenta Nebulas */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c1236] via-[#121a48] to-[#090e28]" />
      
      {/* Pixar Magical Atmosphere Glows */}
      <div className="absolute top-[-10%] left-[20%] w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-indigo-500/25 via-purple-500/25 to-pink-500/20 blur-[110px]" />
      <div className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-amber-400/20 via-orange-500/20 to-rose-500/15 blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-cyan-400/20 via-blue-600/20 to-purple-600/15 blur-[130px]" />

      {/* Fluffy Cartoon Clouds (Toy Story / Pixar sky motif) */}
      <div className="absolute top-[12%] left-[-20%] w-[380px] opacity-25 animate-cloud-slow">
        <svg viewBox="0 0 100 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 35H80C86.6274 35 92 29.6274 92 23C92 16.5918 86.9749 11.3578 80.6278 11.0204C78.7188 4.71714 72.8988 0 66 0C61.4299 0 57.345 2.07921 54.6309 5.37894C51.6967 3.29267 48.0931 2 44.1754 2C35.8457 2 29.0224 8.42398 28.4069 16.6083C25.8601 15.5898 23.0118 15 20 15C8.9543 15 0 23.9543 0 35H20Z"
            fill="url(#cloudGrad1)"
          />
          <defs>
            <linearGradient id="cloudGrad1" x1="0" y1="0" x2="100" y2="40">
              <stop stopColor="#a5b4fc" stopOpacity="0.8" />
              <stop offset="1" stopColor="#818cf8" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div
        className="absolute top-[55%] left-[-30%] w-[460px] opacity-20 animate-cloud-slow"
        style={{ animationDuration: "75s", animationDelay: "15s" }}
      >
        <svg viewBox="0 0 100 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 35H80C86.6274 35 92 29.6274 92 23C92 16.5918 86.9749 11.3578 80.6278 11.0204C78.7188 4.71714 72.8988 0 66 0C61.4299 0 57.345 2.07921 54.6309 5.37894C51.6967 3.29267 48.0931 2 44.1754 2C35.8457 2 29.0224 8.42398 28.4069 16.6083C25.8601 15.5898 23.0118 15 20 15C8.9543 15 0 23.9543 0 35H20Z"
            fill="url(#cloudGrad2)"
          />
          <defs>
            <linearGradient id="cloudGrad2" x1="0" y1="0" x2="100" y2="40">
              <stop stopColor="#f472b6" stopOpacity="0.6" />
              <stop offset="1" stopColor="#c084fc" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Cute Floating Cartoon Planet 1 (Saturn style with cartoon craters and 3D rings) */}
      <div className="absolute top-28 right-[8%] w-64 h-64 opacity-50 animate-toy-bob">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Back of ring */}
          <ellipse
            cx="100"
            cy="100"
            rx="85"
            ry="24"
            stroke="url(#ringGradA)"
            strokeWidth="9"
            transform="rotate(-26 100 100)"
            strokeDasharray="220 220"
            strokeDashoffset="0"
          />
          {/* Main 3D Sphere Body */}
          <circle cx="100" cy="100" r="48" fill="url(#planet3DGradA)" />
          {/* Cartoon Shiny Specular Oval Highlight on top left */}
          <ellipse cx="80" cy="76" rx="14" ry="7" fill="#ffffff" fillOpacity="0.45" transform="rotate(-30 80 76)" />
          {/* Cute Cartoon Craters */}
          <circle cx="112" cy="85" r="7" fill="#6d28d9" fillOpacity="0.4" />
          <circle cx="120" cy="115" r="9" fill="#6d28d9" fillOpacity="0.35" />
          <circle cx="85" cy="118" r="6" fill="#6d28d9" fillOpacity="0.4" />
          {/* Front of ring passing in front */}
          <ellipse
            cx="100"
            cy="100"
            rx="85"
            ry="24"
            stroke="url(#ringGradA)"
            strokeWidth="9"
            transform="rotate(-26 100 100)"
            strokeDasharray="220 220"
            strokeDashoffset="220"
          />
          <defs>
            <linearGradient id="planet3DGradA" x1="60" y1="60" x2="140" y2="140">
              <stop stopColor="#c084fc" />
              <stop offset="0.6" stopColor="#7c3aed" />
              <stop offset="1" stopColor="#4c1d95" />
            </linearGradient>
            <linearGradient id="ringGradA" x1="20" y1="100" x2="180" y2="100">
              <stop stopColor="#fbbf24" />
              <stop offset="0.5" stopColor="#f43f5e" />
              <stop offset="1" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Cute Floating Cartoon Planet 2 (Candy Orange / Pink Moon) */}
      <div
        className="absolute bottom-[22%] left-[5%] w-44 h-44 opacity-45 animate-toy-bob-reverse"
        style={{ animationDelay: "2s" }}
      >
        <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="42" fill="url(#planet3DGradB)" />
          {/* Glossy pill highlight */}
          <ellipse cx="64" cy="62" rx="12" ry="6" fill="#ffffff" fillOpacity="0.5" transform="rotate(-30 64 62)" />
          {/* Smiling Moon-spot craters */}
          <circle cx="70" cy="95" r="8" fill="#ea580c" fillOpacity="0.4" />
          <circle cx="98" cy="74" r="6" fill="#ea580c" fillOpacity="0.4" />
          <circle cx="102" cy="100" r="5" fill="#ea580c" fillOpacity="0.35" />
          <defs>
            <linearGradient id="planet3DGradB" x1="45" y1="45" x2="115" y2="115">
              <stop stopColor="#fde047" />
              <stop offset="0.5" stopColor="#fb923c" />
              <stop offset="1" stopColor="#e11d48" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Whimsical 4-Pointed Cartoon Sparkle Stars */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Star 1 (Gold) */}
          <path
            d="M 140 120 Q 140 140 160 140 Q 140 140 140 160 Q 140 140 120 140 Q 140 140 140 120 Z"
            fill="#fbbf24"
            className="animate-star-joy"
            style={{ transformOrigin: "140px 140px", animationDelay: "0.2s" }}
          />
          {/* Star 2 (Pink) */}
          <path
            d="M 420 80 Q 420 95 435 95 Q 420 95 420 110 Q 420 95 405 95 Q 420 95 420 80 Z"
            fill="#f472b6"
            className="animate-star-joy"
            style={{ transformOrigin: "420px 95px", animationDelay: "1.2s" }}
          />
          {/* Star 3 (Cyan) */}
          <path
            d="M 780 160 Q 780 180 800 180 Q 780 180 780 200 Q 780 180 760 180 Q 780 180 780 160 Z"
            fill="#38bdf8"
            className="animate-star-joy"
            style={{ transformOrigin: "780px 180px", animationDelay: "2.1s" }}
          />
          {/* Star 4 (Mint) */}
          <path
            d="M 1020 90 Q 1020 105 1035 105 Q 1020 105 1020 120 Q 1020 105 1005 105 Q 1020 105 1020 90 Z"
            fill="#34d399"
            className="animate-star-joy"
            style={{ transformOrigin: "1020px 105px", animationDelay: "0.8s" }}
          />
          {/* Star 5 (White) */}
          <path
            d="M 280 480 Q 280 495 295 495 Q 280 495 280 510 Q 280 495 265 495 Q 280 495 280 480 Z"
            fill="#ffffff"
            className="animate-star-joy"
            style={{ transformOrigin: "280px 495px", animationDelay: "1.8s" }}
          />
          {/* Star 6 (Gold) */}
          <path
            d="M 880 520 Q 880 540 900 540 Q 880 540 880 560 Q 880 540 860 540 Q 880 540 880 520 Z"
            fill="#fbbf24"
            className="animate-star-joy"
            style={{ transformOrigin: "880px 540px", animationDelay: "2.7s" }}
          />
          {/* Star 7 (Pink) */}
          <path
            d="M 1160 380 Q 1160 395 1175 395 Q 1160 395 1160 410 Q 1160 395 1145 395 Q 1160 395 1160 380 Z"
            fill="#f472b6"
            className="animate-star-joy"
            style={{ transformOrigin: "1160px 395px", animationDelay: "1.5s" }}
          />
        </svg>
      </div>
    </div>
  );
}
