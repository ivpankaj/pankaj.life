import React from "react";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = constructMetadata({
  title: "Connect & Inquire",
  description:
    "Direct contact channels and collaboration inquiry form for Pankaj Verma (@ivpankaj) — Software Developer based in Noida (Delhi NCR), India.",
  canonicalUrl: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-20 pb-16">
      <ContactSection headingTag="h1" />
    </div>
  );
}
