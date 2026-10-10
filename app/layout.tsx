import type { Metadata, Viewport } from "next";
import { Fredoka, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { constructMetadata } from "@/lib/metadata";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackgroundCosmos } from "@/components/layout/BackgroundCosmos";
import { PersonJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${jakarta.variable}`}
    >
      <body className="min-h-screen flex flex-col relative bg-white text-slate-900 antialiased font-sans selection:bg-pink-500 selection:text-white">
        {/* Google Tag (gtag.js) via next/script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1TTZY42QEC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1TTZY42QEC');
          `}
        </Script>

        <PersonJsonLd />
        <WebSiteJsonLd />
        <BackgroundCosmos />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
