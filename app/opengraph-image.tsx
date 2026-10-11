import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.tagline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          backgroundColor: "#070a18",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.4) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(244, 63, 94, 0.25) 0%, transparent 50%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Brand bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #6366f1, #a855f7, #ec4899)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: "900",
                color: "#ffffff",
              }}
            >
              P
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>{profile.name}</span>
              <span style={{ fontSize: "16px", color: "#818cf8" }}>@{profile.handle}</span>
            </div>
          </div>
          <div
            style={{
              padding: "10px 24px",
              borderRadius: "999px",
              background: "rgba(52, 211, 153, 0.15)",
              border: "1px solid rgba(52, 211, 153, 0.4)",
              color: "#34d399",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            pankaj.life
          </div>
        </div>

        {/* Central Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px" }}>
          <div
            style={{
              fontSize: "56px",
              fontWeight: "900",
              lineHeight: 1.15,
              background: "linear-gradient(90deg, #ffffff, #c7d2fe, #fbcfe8)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {profile.tagline}
          </div>
          <div style={{ fontSize: "22px", color: "#94a3b8", lineHeight: 1.4 }}>
            {profile.subheading}
          </div>
        </div>

        {/* Bottom bar tags */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: "30px",
            fontSize: "16px",
            color: "#64748b",
          }}
        >
          <div style={{ display: "flex", gap: "24px", color: "#cbd5e1" }}>
            <span>Next.js 16</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>App Router</span>
            <span>•</span>
            <span>Digital Universe</span>
          </div>
          <div style={{ color: "#818cf8", fontWeight: "bold" }}>
            https://www.pankaj.life
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
