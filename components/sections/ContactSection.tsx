"use client";

import React from "react";
import { MessageSquare, Terminal } from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { ContactForm } from "@/components/contact/ContactForm";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Meteors } from "@/components/ui/meteors";

export function ContactSection({
  headingTag = "h2",
}: {
  headingTag?: "h1" | "h2";
} = {}) {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[var(--theme-bg)] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Clean Section Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto relative">
          <div className="absolute inset-x-20 -top-6 bg-gradient-to-r from-transparent via-[var(--theme-card-border)] to-transparent h-[2px] w-3/4 mx-auto blur-sm" />
          {headingTag === "h1" ? (
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--theme-text)]">
              Get in Touch
            </h1>
          ) : (
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--theme-text)]">
              Get in Touch
            </h2>
          )}
          <div className="h-1 w-20 mx-auto mt-4 bg-[var(--theme-card-border)] rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Info with Aceternity CardSpotlight & Meteors */}
          <div className="lg:col-span-5">
            <CardSpotlight
              color="var(--theme-glow)"
              radius={300}
              className="space-y-6 relative overflow-hidden"
            >
              <Meteors number={10} />
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Pankaj Verma
                  </h3>
                  <p className="text-xs font-mono text-neutral-400">
                    @{profile.handle} • Systems &amp; Web Engineer
                  </p>
                </div>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                Open to discussing full-stack web applications, TypeScript architectures, developer utilities, and web performance.
              </p>

              {profile.email && (
                <div className="p-4 rounded-xl bg-[var(--theme-subtle-bg)] border border-[var(--theme-card-border)]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--theme-text-muted)] block mb-1">
                    Direct Contact
                  </span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm font-mono text-[var(--theme-text)] hover:underline transition-all"
                  >
                    {profile.email}
                  </a>
                </div>
              )}

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                  Verified Profiles
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {socials.slice(0, 4).map((s) => (
                    <a
                      key={s.id}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-neutral-900/60 border border-white/[0.06] text-neutral-300 hover:text-white hover:border-white/20 transition-all text-xs"
                    >
                      <BrandIcon name={s.id} size={18} />
                      <span className="truncate">{s.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </CardSpotlight>
          </div>

          {/* Right Column: Contact Form with Aceternity CardSpotlight */}
          <div className="lg:col-span-7">
            <CardSpotlight
              color="var(--theme-glow)"
              radius={350}
              className="p-6 sm:p-8"
            >
              <div className="flex items-center gap-2.5 mb-6">
                <MessageSquare className="w-5 h-5 text-neutral-300" />
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Send a Direct Message
                </h3>
              </div>
              <ContactForm />
            </CardSpotlight>
          </div>
        </div>
      </div>
    </section>
  );
}
