import React from "react";
import { Mail, MessageSquare, Sparkles, ShieldCheck, Send } from "lucide-react";
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
          badge="Direct Frequency"
          title="Connect With Me"
          subtitle="Have a question, feedback on a project, or want to build something extraordinary together? Let's chat!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard variant="blue">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-3.5 rounded-2xl bg-amber-400/20 text-amber-300 border-2 border-amber-400/40 shadow-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white font-cartoon">Let&apos;s Converse</h3>
                  <p className="text-xs font-bold font-cartoon text-pink-300">
                    Reach Pankaj Verma (@{profile.handle})
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-200 font-medium leading-relaxed mb-6">
                I am always excited to discuss Next.js architectures, creative front-end design, web animation experiments, and collaboration opportunities.
              </p>

              {profile.email && (
                <div className="p-4 rounded-2xl bg-[#0b1030] border-2 border-[#37498c] border-b-4 border-b-[#12183c] mb-6 shadow-inner">
                  <span className="text-[11px] font-bold font-cartoon text-amber-300 block mb-1 uppercase tracking-wider">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-base font-black text-white hover:text-pink-300 font-cartoon transition-colors"
                  >
                    {profile.email}
                  </a>
                </div>
              )}

              <div className="space-y-3">
                <span className="text-xs font-black font-cartoon uppercase tracking-wider text-indigo-300 block">
                  Verified Hangouts
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {socials.slice(0, 4).map((s) => (
                    <a
                      key={s.id}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#141d48] border-2 border-[#334484] border-b-4 border-b-[#0e1434] text-white hover:border-pink-400 hover:scale-105 active:translate-y-1 transition-all text-xs font-bold font-cartoon"
                    >
                      <BrandIcon name={s.id} size={18} />
                      <span className="truncate">{s.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </GlassCard>

            <div className="p-4 rounded-2xl bg-[#1e2a63]/80 border-2 border-[#4357a8] text-xs font-cartoon font-bold text-indigo-200 flex items-center gap-3 shadow-lg">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                Protected with honeypot spam protection &amp; verified domain SSL on pankaj.life.
              </span>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <GlassCard variant="purple">
              <div className="flex items-center gap-2.5 mb-6">
                <MessageSquare className="w-6 h-6 text-pink-400" />
                <h3 className="text-2xl font-black text-white font-cartoon">Send a Message</h3>
              </div>
              <ContactForm />
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
