import React from "react";
import Link from "next/link";
import { Home, ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 relative z-10 text-center bg-black">
      <div className="max-w-md mx-auto rounded-2xl bg-neutral-950 border border-white/[0.1] p-8 sm:p-10 shadow-2xl">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-white">
          <Terminal className="w-8 h-8 text-neutral-400" />
        </div>

        <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">
          404 • Page Not Found
        </span>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
          Route Not Found
        </h1>

        <p className="text-sm text-neutral-400 leading-relaxed mb-8">
          The requested page does not exist or has been relocated. Navigate back to the homepage or explore available projects.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/projects"
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/[0.2] bg-neutral-900 text-white font-medium text-xs hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
