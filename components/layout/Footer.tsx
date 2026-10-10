import React from "react";
import Link from "next/link";
import { Sparkles, Heart, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { BrandIcon } from "@/components/ui/BrandIcon";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 backdrop-blur-xl mt-24">
      {/* Decorative top rainbow line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-indigo-500 via-rose-500 via-amber-400 to-emerald-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Identity & Personal Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-rose-400 p-[1.5px] shadow-lg shadow-indigo-500/25">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-lg text-white">
                  P
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-1.5">
                  {profile.name}
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </h3>
                <p className="text-xs font-mono text-slate-400">@{profile.handle}</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              {profile.tagline} {profile.subheading}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Official domain: {profile.domain.replace("https://", "")}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 font-mono">
              Exploration
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-white transition-colors hover:translate-x-0.5 inline-block"
                >
                  Home Universe
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-white transition-colors hover:translate-x-0.5 inline-block"
                >
                  Digital Identity & About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-slate-300 hover:text-white transition-colors hover:translate-x-0.5 inline-block"
                >
                  Projects & Experiments
                </Link>
              </li>
              <li>
                <Link
                  href="/achievements"
                  className="text-slate-300 hover:text-white transition-colors hover:translate-x-0.5 inline-block"
                >
                  Milestones & Timeline
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-white transition-colors hover:translate-x-0.5 inline-block"
                >
                  Connect & Inquire
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Profiles */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 font-mono">
              Verified Socials
            </h4>
            <ul className="space-y-2.5 text-sm">
              {socials.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-slate-300 hover:text-white group transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <BrandIcon name={social.id} className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors" size={16} />
                      {social.name}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-12 mt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {profile.name} (@{profile.handle}). All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>&amp; animated Disney-Pixar cosmic inspiration on</span>
            <span className="text-slate-200 font-semibold">Next.js 16</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
