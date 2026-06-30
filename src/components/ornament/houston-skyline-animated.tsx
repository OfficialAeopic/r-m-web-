/**
 * Animated Houston skyline — the hand-drawn ink line "draws itself" like a
 * fountain pen sketching the skyline, then a single oxblood horizon line
 * sweeps in beneath it.
 *
 * Pure CSS (no JS) via stroke-dashoffset on pathLength-normalized paths.
 * - loop=false → draws once on view (recommended for a one-time reveal)
 * - loop=true  → perpetual slow re-sketch (draw → long hold → gentle fade → redraw)
 * - speed      → time multiplier; higher = slower (default 1)
 * Respects prefers-reduced-motion (renders fully drawn, no animation).
 */
export function HoustonSkylineAnimated({
  className,
  loop = false,
  speed = 1,
}: {
  className?: string;
  loop?: boolean;
  speed?: number;
}) {
  // Ink building/detail paths, in left-to-right draw order.
  const inkPaths = [
    "M 20,210 L 20,165 L 38,165 L 38,180 L 56,180 L 56,158 L 76,158 L 76,210 Z",
    "M 70,170 L 95,170 L 95,210",
    "M 100,210 L 100,150 L 118,150 L 118,162 L 134,162 L 134,144 L 154,144 L 154,210 Z",
    "M 165,210 L 165,120 L 178,114 L 192,120 L 192,210 Z",
    "M 200,210 L 200,130 L 220,130 L 220,118 L 232,118 L 232,210 Z",
    // Wells Fargo Plaza (curved roof) + mullions
    "M 240,210 L 240,90 Q 268,72 296,90 L 296,210 Z",
    "M 250,210 L 250,108",
    "M 270,210 L 270,86",
    "M 286,210 L 286,108",
    // JPMorgan Chase Tower
    "M 308,210 L 308,55 L 322,40 L 336,40 L 350,55 L 350,210 Z",
    "M 318,55 L 318,210",
    "M 340,55 L 340,210",
    "M 329,40 L 329,28",
    // Heritage Plaza
    "M 360,210 L 360,98 L 378,98 L 378,80 L 396,80 L 396,68 L 414,68 L 414,80 L 432,80 L 432,98 L 450,98 L 450,210 Z",
    // Mid-right cluster
    "M 460,210 L 460,118 L 478,118 L 478,100 L 498,100 L 498,210 Z",
    "M 506,210 L 506,128 L 524,128 L 524,210",
    "M 530,210 L 530,108 L 548,108 L 548,134 L 562,134 L 562,108 L 578,108 L 578,210 Z",
    // Right tall pair
    "M 586,210 L 586,76 L 604,68 L 622,76 L 622,210 Z",
    "M 595,210 L 595,82",
    "M 613,210 L 613,82",
    "M 630,210 L 630,130 L 644,130 L 644,118 L 660,118 L 660,210 Z",
    // Right edge low-rises
    "M 668,210 L 668,170 L 686,170 L 686,158 L 704,158 L 704,210 Z",
    // Horizon detail ticks
    "M 96,184 L 100,184",
    "M 154,168 L 165,168",
    "M 232,138 L 240,138",
    "M 450,108 L 460,108",
  ];

  // Slow, deliberate timing.
  const stagger = 0.16 * speed; // seconds between each path starting
  const drawDur = 2.4 * speed; // seconds each path takes to draw
  const drawSeq = inkPaths.length * stagger + drawDur; // full draw sequence
  const loopCycle = drawSeq + 9 * speed; // draw + long hold + fade before redraw

  // Loop keyframe percentages: draw, hold drawn, fade out, reset.
  const drawPct = Math.min(28, (drawDur / loopCycle) * 100 + 10);

  return (
    <svg
      viewBox="0 0 720 230"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
      data-loop={loop ? "" : undefined}
    >
      <style>{`
        .hs-ink, .hs-horizon, .hs-accent, .hs-dot {
          stroke-dasharray: 1; stroke-dashoffset: 1;
        }
        .hs-ink { stroke: currentColor; stroke-width: 1.4; }
        .hs-horizon { stroke: currentColor; stroke-width: 1; }
        .hs-accent { stroke: var(--color-gold-leaf, #2563EB); stroke-width: 2; opacity: .9; }
        .hs-dot { fill: currentColor; stroke: none; stroke-dasharray: none; stroke-dashoffset: 0; opacity: 0; }

        @keyframes hsDraw { to { stroke-dashoffset: 0; } }
        @keyframes hsDot  { to { opacity: 1; } }
        @keyframes hsLoop {
          0%   { stroke-dashoffset: 1; opacity: 1; }
          ${drawPct.toFixed(1)}% { stroke-dashoffset: 0; opacity: 1; }
          88%  { stroke-dashoffset: 0; opacity: 1; }
          97%  { stroke-dashoffset: 0; opacity: 0; }
          100% { stroke-dashoffset: 1; opacity: 0; }
        }
        @keyframes hsDotLoop {
          0%, 60% { opacity: 0; }
          ${(drawPct + 4).toFixed(1)}% { opacity: 1; }
          88% { opacity: 1; }
          100% { opacity: 0; }
        }

        ${
          loop
            ? `
        .hs-ink, .hs-horizon, .hs-accent {
          animation: hsLoop ${loopCycle.toFixed(2)}s ease-in-out infinite;
        }
        .hs-horizon { animation-delay: 0s; }
        .hs-accent  { animation-delay: ${(drawSeq * 0.6).toFixed(2)}s; }
        .hs-dot { animation: hsDotLoop ${loopCycle.toFixed(2)}s ease-in-out infinite; animation-delay: ${(drawSeq * 0.45).toFixed(2)}s; }
        `
            : `
        .hs-ink, .hs-horizon, .hs-accent { animation: hsDraw ${drawDur}s ease forwards; }
        .hs-horizon { animation-delay: 0s; animation-duration: ${(drawDur + 0.6).toFixed(2)}s; }
        .hs-accent  { animation-delay: ${(drawSeq - 0.4).toFixed(2)}s; }
        .hs-dot { animation: hsDot .5s ease forwards; animation-delay: ${(drawSeq - 0.7).toFixed(2)}s; }
        `
        }

        @media (prefers-reduced-motion: reduce) {
          .hs-ink, .hs-horizon, .hs-accent { stroke-dashoffset: 0; opacity: 1; animation: none; }
          .hs-accent { opacity: .9; }
          .hs-dot { opacity: 1; animation: none; }
        }
      `}</style>

      {/* Horizon line (draws first) */}
      <path className="hs-horizon" pathLength={1} d="M 0,210 L 720,210" />

      {/* Ink buildings, staggered left → right */}
      {inkPaths.map((d, i) => (
        <path
          key={i}
          className="hs-ink"
          pathLength={1}
          d={d}
          style={{ animationDelay: `${((i + 1) * stagger).toFixed(2)}s` }}
        />
      ))}

      {/* Chase Tower antenna beacon */}
      <circle className="hs-dot" cx="329" cy="22" r="3" />

      {/* Oxblood accent underline — the brand stroke */}
      <path className="hs-accent" pathLength={1} d="M 0,218 L 720,218" />
    </svg>
  );
}
