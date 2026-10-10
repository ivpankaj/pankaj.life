import React from "react";
import { Mail, MessageSquare } from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContactForm } from "@/components/contact/ContactForm";
import { BrandIcon } from "@/components/ui/BrandIcon";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Connect With Me" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard variant="blue">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-3.5 rounded-2xl bg-pink-100 text-pink-600 border-2 border-pink-200 shadow-md">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 font-cartoon">Let&apos;s Converse</h3>
                  <p className="text-xs font-bold font-cartoon text-pink-600">
                    Reach Pankaj Verma (@{profile.handle})
                  </p>
                </div>
              </div>

              <p className="text-base text-slate-700 font-medium leading-relaxed mb-6">
                I am always excited to discuss Next.js architectures, creative front-end design, web animation experiments, and collaboration opportunities.
              </p>

              {profile.email && (
                <div className="p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 border-b-4 border-b-slate-300 mb-6 shadow-inner">
                  <span className="text-[11px] font-bold font-cartoon text-slate-500 block mb-1 uppercase tracking-wider">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-base font-black text-slate-900 hover:text-pink-600 font-cartoon transition-colors"
                  >
                    {profile.email}
                  </a>
                </div>
              )}

              <div className="space-y-3">
                <span className="text-xs font-black font-cartoon uppercase tracking-wider text-slate-500 block">
                  Social Channels
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {socials.slice(0, 4).map((s) => (
                    <a
                      key={s.id}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50 border-2 border-slate-200 border-b-4 border-b-slate-300 text-slate-700 hover:text-slate-900 hover:border-pink-300 hover:scale-105 active:translate-y-1 transition-all text-xs font-bold font-cartoon"
                    >
                      <BrandIcon name={s.id} size={18} />
                      <span className="truncate">{s.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <GlassCard variant="purple">
              <div className="flex items-center gap-2.5 mb-6">
                <MessageSquare className="w-6 h-6 text-pink-600" />
                <h3 className="text-2xl font-black text-slate-900 font-cartoon">Send a Message</h3>
              </div>
              <ContactForm />
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
