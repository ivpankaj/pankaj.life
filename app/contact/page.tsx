import React from "react";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { ContactSection } from "@/components/sections/ContactSection";
import { ContactPageJsonLd, BreadcrumbsJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "Contact Pankaj Verma | Collaboration & Project Inquiries",
  description:
    "Get in touch with Pankaj Verma (@ivpankaj) for software engineering collaborations, web application development, and technical consulting.",
  canonicalUrl: "/contact",
});

export default function ContactPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <div className="pt-20 pb-16">
      <ContactPageJsonLd />
      <BreadcrumbsJsonLd items={breadcrumbItems} />
      <ContactSection headingTag="h1" />

      {/* Consultation Scope & Work Engagement FAQ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-12 border-t border-white/[0.08]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white tracking-tight">
              Engineering Consulting
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-normal">
              Available for architectural reviews, Next.js 16 App Router migrations, React 19 performance tuning, and technical design advisory for modern startups.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-bold text-white tracking-tight">
              Location &amp; Availability
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-normal">
              Based in Noida (Delhi NCR), India. Operating on Indian Standard Time (IST / UTC+5:30). Flexible working hours for global remote teams across US, Europe, and Asia-Pacific.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-bold text-white tracking-tight">
              Response Commitment
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-normal">
              All inquiries received through the contact form or direct email (<span className="text-neutral-200 font-mono">hello@pankaj.life</span>) receive a thoughtful reply within 24–48 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
