import React from "react";
import { Mail, MessageSquare, Sparkles, Send, ShieldCheck } from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContactForm } from "@/components/contact/ContactForm";
import { BrandIcon } from "@/components/ui/BrandIcon";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Direct Connection"
          title="Connect With Me"
          subtitle="Have a question, feedback on a project, or want to discuss modern web technologies? Drop a message or connect through my verified profiles."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="border-indigo-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Let&apos;s Converse</h3>
                  <p className="text-xs font-mono text-indigo-300">
                    Reach Pankaj Verma (@{profile.handle})
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                I am always curious to talk about Next.js architectures, modern front-end engineering, creative UI ideas, and web experimentation.
              </p>

              {profile.email && (
                <div className="p-4 rounded-xl bg-slate-950/70 border border-white/10 mb-6">
                  <span className="text-[11px] font-mono text-slate-400 block mb-1">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm font-semibold text-indigo-300 hover:text-white font-mono transition-colors"
                  >
                    {profile.email}
                  </a>
                </div>
              )}

              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                  Verified Social Channels
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {socials.slice(0, 4).map((s) => (
                    <a
                      key={s.id}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-white/10 hover:border-indigo-400/40 text-slate-300 hover:text-white transition-all text-xs"
                    >
                      <BrandIcon name={s.id} size={16} />
                      <span className="truncate">{s.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </GlassCard>

            <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-200 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0" />
              <span>
                Protected with honeypot spam detection and verified domain SSL on pankaj.life.
              </span>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <GlassCard className="border-white/15">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-bold text-white">Send a Message</h3>
              </div>
              <ContactForm />
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
