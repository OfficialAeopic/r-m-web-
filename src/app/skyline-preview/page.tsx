import { HoustonSkyline } from "@/components/ornament/houston-skyline";
import { HoustonSkylineAnimated } from "@/components/ornament/houston-skyline-animated";

/**
 * Throwaway preview route to evaluate the animated SVG skyline treatment
 * against the current static one. Visit /skyline-preview. Refresh to replay
 * the draw-on animation. Not linked in nav.
 */
export default function SkylinePreviewPage() {
  return (
    <main
      style={{
        background: "#F4F0E6",
        color: "#1a1a1a",
        minHeight: "100vh",
        padding: "64px 40px",
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "ui-monospace, monospace",
            letterSpacing: "0.2em",
            fontSize: 12,
            textTransform: "uppercase",
            color: "#2563EB",
          }}
        >
          Preview · Skyline Treatments
        </p>
        <h1 style={{ fontSize: 40, fontWeight: 400, margin: "8px 0 48px" }}>
          A view from the office.
        </h1>

        {/* In-context block, matching the hero's framing */}
        <section style={card}>
          <p style={label}>Draw-on (recommended for hero) — refresh to replay</p>
          <HoustonSkylineAnimated className="block w-full" />
          <p style={caption}>Houston, looking east from Greenhouse Rd.</p>
        </section>

        <section style={card}>
          <p style={label}>Looping (perpetual slow re-sketch)</p>
          <HoustonSkylineAnimated className="block w-full" loop />
          <p style={caption}>Houston, looking east from Greenhouse Rd.</p>
        </section>

        <section style={card}>
          <p style={label}>Current (static) — for comparison</p>
          <div style={{ color: "#1a1a1a" }}>
            <HoustonSkyline className="block w-full" />
          </div>
          <p style={caption}>Houston, looking east from Greenhouse Rd.</p>
        </section>
      </div>
    </main>
  );
}

const card: React.CSSProperties = {
  borderTop: "1px solid rgba(0,0,0,0.15)",
  paddingTop: 24,
  marginBottom: 56,
  color: "#1a1a1a",
};
const label: React.CSSProperties = {
  fontFamily: "ui-monospace, monospace",
  letterSpacing: "0.18em",
  fontSize: 11,
  textTransform: "uppercase",
  color: "#2563EB",
  marginBottom: 20,
};
const caption: React.CSSProperties = {
  fontStyle: "italic",
  fontSize: 14,
  color: "#555",
  marginTop: 12,
};
