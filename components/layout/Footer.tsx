import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { BrandIcon } from "@/components/ui/BrandIcon";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative z-10 border-t border-[var(--theme-card-border)] bg-[var(--theme-bg)] text-[var(--theme-text-muted)] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Identity */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight text-[var(--theme-text)]">
                {profile.name}
              </span>
              <span className="text-xs text-[var(--theme-text-muted)] font-mono block mt-0.5">
                @{profile.handle} • Full-Stack Developer &amp; Systems Architect
              </span>
            </Link>

            <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
              {profile.subheading}
            </p>
            <div className="pt-2 text-xs font-mono text-neutral-500">
              Stack: Next.js 16 • React 19 • TypeScript • Tailwind CSS • Aceternity UI
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-200 mb-4 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Projects &amp; Apps
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-white transition-colors">
                  Journey &amp; Milestones
                </Link>
              </li>
              <li>
                <Link href="/socials" className="hover:text-white transition-colors">
                  Social Presence
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Profiles */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-200 mb-4 font-mono">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm">
              {socials.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.name} profile of Pankaj Verma`}
                    className="flex items-center justify-between text-neutral-400 hover:text-white group transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <BrandIcon
                        name={social.id}
                        size={18}
                      />
                      <span>{social.name}</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-12 mt-12 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <p>© {currentYear} {profile.name}. All rights reserved.</p>
          <p>
            Deployed on Vercel • Built with Aceternity UI
          </p>
        </div>
      </div>
    </footer>
  );
}
