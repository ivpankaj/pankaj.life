import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} (@${profile.handle}) — ${profile.tagline}`;
export const size = {
  width: 1200,
  height: 600,
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
          padding: "60px 70px",
          backgroundColor: "#070a18",
          backgroundImage:
            "radial-gradient(circle at 75% 25%, rgba(99, 102, 241, 0.45) 0%, transparent 55%), radial-gradient(circle at 25% 75%, rgba(244, 63, 94, 0.3) 0%, transparent 55%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #6366f1, #ec4899)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "26px",
                fontWeight: "900",
                color: "#ffffff",
              }}
            >
              P
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "22px", fontWeight: "bold" }}>{profile.name}</span>
              <span style={{ fontSize: "15px", color: "#818cf8" }}>@{profile.handle}</span>
            </div>
          </div>
          <div
            style={{
              padding: "8px 20px",
              borderRadius: "999px",
              background: "rgba(52, 211, 153, 0.15)",
              border: "1px solid rgba(52, 211, 153, 0.4)",
              color: "#34d399",
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
            pankaj.life
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "900px" }}>
          <div
            style={{
              fontSize: "50px",
              fontWeight: "900",
              lineHeight: 1.15,
              color: "#ffffff",
            }}
          >
            {profile.tagline}
          </div>
          <div style={{ fontSize: "20px", color: "#94a3b8" }}>
            {profile.subheading}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: "24px",
            fontSize: "15px",
            color: "#64748b",
          }}
        >
          <span style={{ color: "#cbd5e1" }}>Pankaj Verma — Personal Tech Universe</span>
          <span style={{ color: "#818cf8", fontWeight: "bold" }}>https://pankaj.life</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
