import React from "react";
import Link from "next/link";
import { Sparkles, Heart, ArrowUpRight, Rocket } from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { BrandIcon } from "@/components/ui/BrandIcon";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative z-10 border-t-4 border-indigo-950 bg-[#0a0f28] mt-24">
      {/* Playful Disney-Pixar rainbow border */}
      <div className="h-2 w-full bg-gradient-to-r from-amber-400 via-pink-500 via-purple-500 via-cyan-400 to-emerald-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Identity & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-3xl bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 p-[2.5px] shadow-xl shadow-pink-500/30">
                <div className="w-full h-full bg-[#1e1b4b] rounded-[21px] flex items-center justify-center font-black text-2xl text-white font-cartoon">
                  P
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white font-cartoon flex items-center gap-1.5">
                  {profile.name}
                  <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
                </h3>
                <p className="text-xs font-bold font-cartoon text-pink-300">@{profile.handle}</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 max-w-md leading-relaxed font-medium">
              {profile.tagline} {profile.subheading}
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182352] border-2 border-indigo-400/30 text-xs font-cartoon font-bold text-emerald-300 shadow">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Official Domain: {profile.domain.replace("https://", "")}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-300 mb-4 font-cartoon">
              Exploration
            </h4>
            <ul className="space-y-2.5 text-sm font-cartoon font-bold">
              <li>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-white hover:text-pink-300 transition-colors inline-block"
                >
                  🚀 Home Universe
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-white hover:text-pink-300 transition-colors inline-block"
                >
                  ⭐ Digital Identity &amp; About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-slate-300 hover:text-white hover:text-pink-300 transition-colors inline-block"
                >
                  🎮 Projects &amp; Digital Labs
                </Link>
              </li>
              <li>
                <Link
                  href="/achievements"
                  className="text-slate-300 hover:text-white hover:text-pink-300 transition-colors inline-block"
                >
                  🏆 Technical Adventures
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-white hover:text-pink-300 transition-colors inline-block"
                >
                  💬 Connect &amp; Inquire
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Hangouts */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-300 mb-4 font-cartoon">
              Verified Hangouts
            </h4>
            <ul className="space-y-2.5 text-sm font-cartoon font-bold">
              {socials.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-slate-300 hover:text-white group transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <BrandIcon name={social.id} className="w-4 h-4 text-slate-400 group-hover:text-pink-400 transition-colors" size={16} />
                      {social.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-12 mt-12 border-t-2 border-indigo-950 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-cartoon text-slate-400">
          <p>© {currentYear} {profile.name} (@{profile.handle}). All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-bold">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
            <span>&amp; 3D Disney-Pixar cartoon energy on</span>
            <span className="text-amber-300">Next.js 16</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
