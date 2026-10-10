import React from "react";
import Link from "next/link";
import { Compass, Home, ArrowLeft, Rocket } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 relative z-10 text-center">
      <div className="max-w-md mx-auto pixar-card p-8 sm:p-10 shadow-2xl">
        <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-tr from-amber-400 via-pink-500 to-indigo-600 p-[2.5px] shadow-xl shadow-pink-500/40 animate-toy-bob">
          <div className="w-full h-full bg-[#1e1b4b] rounded-[21px] flex items-center justify-center">
            <Rocket className="w-10 h-10 text-amber-300 animate-bounce" />
          </div>
        </div>

        <span className="text-xs font-black uppercase tracking-widest text-amber-300 font-cartoon block mb-2">
          Sector Lost • 404 Error
        </span>

        <h1 className="text-4xl sm:text-5xl font-black text-white mb-3 font-cartoon">
          Lost in the Cosmos!
        </h1>

        <p className="text-sm text-slate-200 font-medium leading-relaxed mb-8">
          Whoops! This sector of the pankaj.life universe seems to have drifted into an unknown nebula. Let&apos;s steer back to safety!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="pixar-btn-primary w-full sm:w-auto px-6 py-3.5 text-sm font-black text-white flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home Orbit</span>
          </Link>
          <Link
            href="/projects"
            className="pixar-btn-secondary w-full sm:w-auto px-6 py-3.5 text-sm font-black text-white flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
