/**
 * Hand-drawn-feel Houston skyline silhouette, single-color ink line.
 * Uses currentColor for the stroke so it inherits from the parent.
 */
export function HoustonSkyline({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 720 220"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {/* Horizon line */}
      <path d="M 0,210 L 720,210" strokeWidth="1" />

      {/* Far-left low buildings */}
      <path d="M 20,210 L 20,165 L 38,165 L 38,180 L 56,180 L 56,158 L 76,158 L 76,210 Z" />
      <path d="M 70,170 L 95,170 L 95,210" />
      <path d="M 100,210 L 100,150 L 118,150 L 118,162 L 134,162 L 134,144 L 154,144 L 154,210 Z" />

      {/* Mid-left cluster */}
      <path d="M 165,210 L 165,120 L 178,114 L 192,120 L 192,210 Z" />
      <path d="M 200,210 L 200,130 L 220,130 L 220,118 L 232,118 L 232,210 Z" />

      {/* Wells Fargo Plaza (curved roof) */}
      <path d="M 240,210 L 240,90 Q 268,72 296,90 L 296,210 Z" />
      <path d="M 250,210 L 250,108" />
      <path d="M 270,210 L 270,86" />
      <path d="M 286,210 L 286,108" />

      {/* JPMorgan Chase Tower — tallest, slim */}
      <path d="M 308,210 L 308,55 L 322,40 L 336,40 L 350,55 L 350,210 Z" />
      <path d="M 318,55 L 318,210" />
      <path d="M 340,55 L 340,210" />
      <path d="M 329,40 L 329,28" />
      <circle cx="329" cy="22" r="3" />

      {/* Heritage Plaza — stepped top */}
      <path d="M 360,210 L 360,98 L 378,98 L 378,80 L 396,80 L 396,68 L 414,68 L 414,80 L 432,80 L 432,98 L 450,98 L 450,210 Z" />

      {/* Mid-right cluster */}
      <path d="M 460,210 L 460,118 L 478,118 L 478,100 L 498,100 L 498,210 Z" />
      <path d="M 506,210 L 506,128 L 524,128 L 524,210" />
      <path d="M 530,210 L 530,108 L 548,108 L 548,134 L 562,134 L 562,108 L 578,108 L 578,210 Z" />

      {/* Right tall pair */}
      <path d="M 586,210 L 586,76 L 604,68 L 622,76 L 622,210 Z" />
      <path d="M 595,210 L 595,82" />
      <path d="M 613,210 L 613,82" />
      <path d="M 630,210 L 630,130 L 644,130 L 644,118 L 660,118 L 660,210 Z" />

      {/* Right edge low-rises */}
      <path d="M 668,210 L 668,170 L 686,170 L 686,158 L 704,158 L 704,210 Z" />

      {/* Far-right horizon detail */}
      <path d="M 96,184 L 100,184" />
      <path d="M 154,168 L 165,168" />
      <path d="M 232,138 L 240,138" />
      <path d="M 450,108 L 460,108" />
    </svg>
  );
}
