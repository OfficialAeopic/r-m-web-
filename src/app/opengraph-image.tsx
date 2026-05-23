import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "R & M Accounting and Tax Service — Houston, TX — Since 1981";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#F5F1E8",
          color: "#1A1714",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Top masthead band */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderBottom: "1px solid #C9C0AE",
            paddingBottom: 24,
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: 16,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#8A8378",
              fontFamily: "monospace",
            }}
          >
            R &amp; M ACCOUNTING · HOUSTON · EST. 1981
          </div>
        </div>

        {/* Center headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            maxWidth: 980,
          }}
        >
          <div
            style={{
              fontSize: 14,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#A3823A",
              fontFamily: "monospace",
            }}
          >
            I · THE PRACTICE
          </div>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.02,
              letterSpacing: -2,
              color: "#1A1714",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>Tax preparation,</div>
            <div>done by hand,</div>
            <div style={{ fontStyle: "italic", color: "#6B1F2A" }}>
              since 1981.
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 18,
            color: "#8A8378",
            fontFamily: "monospace",
            letterSpacing: 2,
            textTransform: "uppercase",
            borderTop: "1px solid #C9C0AE",
            paddingTop: 24,
            width: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ color: "#1A1714" }}>rmtax.org</div>
            <div>3880 Greenhouse Rd · Houston, TX</div>
          </div>
          <div style={{ color: "#1A1714", letterSpacing: 1 }}>
            (281) 391-2900
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
