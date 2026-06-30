import { cn } from "@/lib/utils";

/**
 * R&M brand mark — inline SVG so color is themeable (blue & pearl).
 * Road / "crossway" motif (a clear crossroads) in deep navy with royal-blue
 * lane markings. R & M is the primary company name; "Clear Crossway Solutions"
 * (DBA / slogan) sits beneath as small secondary text so it never competes.
 */
export function BrandMark({
  className,
  markSize = 34,
}: {
  className?: string;
  markSize?: number;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 40 40"
        aria-hidden="true"
        focusable="false"
        className="shrink-0"
      >
        {/* roundel */}
        <rect
          x="1.25"
          y="1.25"
          width="37.5"
          height="37.5"
          rx="8"
          fill="none"
          stroke="var(--color-oxblood)"
          strokeWidth="1.5"
        />
        {/* crossway — two roads crossing (deep navy, low-opacity beds) */}
        <path d="M20 3 V37" stroke="var(--color-oxblood)" strokeWidth="5.5" opacity="0.16" />
        <path d="M3 20 H37" stroke="var(--color-oxblood)" strokeWidth="5.5" opacity="0.16" />
        {/* lane markings (royal blue) */}
        <path
          d="M20 6 V34"
          stroke="var(--color-gold-leaf)"
          strokeWidth="1.4"
          strokeDasharray="3 3.4"
        />
        <path
          d="M6 20 H34"
          stroke="var(--color-gold-leaf)"
          strokeWidth="1.4"
          strokeDasharray="3 3.4"
        />
        {/* center marker */}
        <circle cx="20" cy="20" r="2.2" fill="var(--color-oxblood)" />
      </svg>
      <span className="flex flex-col leading-[1.05]">
        <span className="font-display text-[22px] text-[var(--color-ink)] tracking-[-0.02em]">
          R&nbsp;<span className="italic">&amp;</span>&nbsp;M
        </span>
        <span className="hidden sm:block font-mono text-[8.5px] uppercase tracking-[0.14em] text-[var(--color-oxblood)] mt-0.5">
          Clear Crossway Solutions
        </span>
      </span>
    </span>
  );
}
