import React from "react";
import Link from "next/link";
import { Compass, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 relative z-10 text-center">
      <div className="max-w-md mx-auto cosmic-glass rounded-3xl p-8 sm:p-10 border-white/15 shadow-2xl">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-tr from-rose-500 via-purple-500 to-indigo-500 p-0.5 shadow-xl shadow-rose-500/30">
          <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
            <Compass className="w-8 h-8 text-rose-400 animate-spin" style={{ animationDuration: "15s" }} />
          </div>
        </div>

        <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 block mb-2">
          Coordinates Not Found • 404
        </span>

        <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
          Lost in the Cosmos
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          The trajectory or digital sector you requested does not exist in this sector of the pankaj.life universe.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="pixar-button w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home Orbit</span>
          </Link>
          <Link
            href="/projects"
            className="pixar-button-secondary w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
