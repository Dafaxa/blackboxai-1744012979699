import { ImageResponse } from "next/og";
import { hero, site } from "@/content/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#ffffff",
          color: "#0d1a15",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 64,
            height: 6,
            background: "#10b981",
            marginBottom: 40,
          }}
        />
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
          {hero.headline}
        </div>
        <div style={{ fontSize: 28, color: "#5a6a63", marginTop: 32 }}>
          {`${site.name} · Verification infrastructure for sustainable trade`}
        </div>
      </div>
    ),
    size
  );
}
