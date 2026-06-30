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
          background: "#F4F1EA",
          color: "#16243F",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Top masthead band */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            borderBottom: "1px solid #D8D1C2",
            paddingBottom: 24,
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: 16,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#5A6373",
              fontFamily: "monospace",
            }}
          >
            R &amp; M ACCOUNTING · HOUSTON · EST. 1981
          </div>
          <div
            style={{
              fontSize: 13,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#1E3A8A",
              fontFamily: "monospace",
            }}
          >
            Clear Crossway Solutions
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
              color: "#2563EB",
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
              color: "#16243F",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>We keep Houston&apos;s</div>
            <div>books</div>
            <div style={{ fontStyle: "italic", color: "#1E3A8A" }}>
              in order.
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
            color: "#5A6373",
            fontFamily: "monospace",
            letterSpacing: 2,
            textTransform: "uppercase",
            borderTop: "1px solid #D8D1C2",
            paddingTop: 24,
            width: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ color: "#16243F" }}>rmtax.org</div>
            <div>3880 Greenhouse Rd · Houston, TX</div>
          </div>
          <div style={{ color: "#16243F", letterSpacing: 1 }}>
            (281) 391-2900
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
