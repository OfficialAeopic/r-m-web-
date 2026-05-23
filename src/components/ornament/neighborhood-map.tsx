/**
 * Hand-drawn-feel sketch map of the office's relative position.
 * Configurable label text — used on service-area pages where each neighborhood
 * gets its name placed on the sketch.
 */
export function NeighborhoodMap({
  areaName,
  className,
}: {
  areaName: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 480 280"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {/* Background grid (very faint, hand-drawn) */}
      <g opacity="0.18" strokeWidth="0.6">
        <path d="M 0,70 L 480,70" />
        <path d="M 0,140 L 480,140" />
        <path d="M 0,210 L 480,210" />
        <path d="M 120,0 L 120,280" />
        <path d="M 240,0 L 240,280" />
        <path d="M 360,0 L 360,280" />
      </g>

      {/* Highway 290 — diagonal */}
      <path d="M 0,40 Q 200,80 480,150" strokeWidth="1.6" />
      <path d="M 14,42 L 8,38 M 14,42 L 12,50" strokeWidth="0.8" />
      <text
        x="80"
        y="62"
        fontFamily="var(--font-mono)"
        fontSize="9"
        letterSpacing="0.12em"
        fill="currentColor"
        stroke="none"
      >
        HWY 290
      </text>

      {/* Highway 6 — vertical */}
      <path d="M 200,0 Q 210,140 196,280" strokeWidth="1.6" />
      <text
        x="210"
        y="20"
        fontFamily="var(--font-mono)"
        fontSize="9"
        letterSpacing="0.12em"
        fill="currentColor"
        stroke="none"
      >
        HWY 6
      </text>

      {/* Local streets */}
      <path d="M 120,180 L 360,210" strokeWidth="0.9" />
      <path d="M 80,220 Q 220,240 380,220" strokeWidth="0.9" />
      <path d="M 240,90 L 270,260" strokeWidth="0.9" />

      {/* Office marker — at Greenhouse / Hwy 6 intersection */}
      <circle
        cx="200"
        cy="155"
        r="6"
        fill="currentColor"
        stroke="none"
      />
      <circle cx="200" cy="155" r="11" strokeWidth="1.4" />
      <path d="M 200,165 L 200,200" />
      <text
        x="208"
        y="172"
        fontFamily="var(--font-display)"
        fontSize="11"
        fontStyle="italic"
        fill="currentColor"
        stroke="none"
      >
        R &amp; M
      </text>

      {/* Service area marker */}
      <circle cx="360" cy="100" r="4" strokeWidth="1.2" />
      <text
        x="370"
        y="104"
        fontFamily="var(--font-mono)"
        fontSize="10"
        letterSpacing="0.12em"
        fill="currentColor"
        stroke="none"
      >
        {areaName.toUpperCase()}
      </text>

      {/* Compass rose, lower left */}
      <g transform="translate(40, 240)">
        <circle cx="0" cy="0" r="16" strokeWidth="0.8" />
        <path d="M 0,-14 L 0,14 M -14,0 L 14,0" strokeWidth="0.6" />
        <path d="M 0,-14 L -3,-9 L 0,-12 L 3,-9 Z" fill="currentColor" stroke="none" />
        <text
          x="0"
          y="-20"
          fontFamily="var(--font-mono)"
          fontSize="8"
          letterSpacing="0.14em"
          textAnchor="middle"
          fill="currentColor"
          stroke="none"
        >
          N
        </text>
      </g>
    </svg>
  );
}
