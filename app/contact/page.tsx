import React from "react";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = constructMetadata({
  title: "Connect & Inquire",
  description:
    "Direct contact channels and inquiry form for Pankaj Verma (@ivpankaj) on pankaj.life.",
  canonicalUrl: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-20 pb-16">
      <ContactSection />
    </div>
  );
}
