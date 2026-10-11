import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { constructMetadata } from "@/lib/metadata";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PersonJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#f8fafc",
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
    <html lang="en" className={jakarta.variable} data-theme="light" suppressHydrationWarning>
      <head>
        {/* Flash prevention script: sets data-theme immediately before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var storedTheme = localStorage.getItem('pankaj_theme') || 'light';
                document.documentElement.setAttribute('data-theme', storedTheme);
                if (document.body) {
                  document.body.setAttribute('data-theme', storedTheme);
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col relative antialiased bg-[var(--theme-bg)] text-[var(--theme-text)]">
        <ThemeProvider>
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
          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
