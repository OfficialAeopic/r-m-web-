import { cn } from "@/lib/utils";

export function Rule({
  ornament,
  tone = "hair",
  className,
}: {
  ornament?: "§" | "¶" | "❦" | "※" | "·";
  tone?: "hair" | "ox" | "ox-2";
  className?: string;
}) {
  const lineColor =
    tone === "ox" || tone === "ox-2"
      ? "var(--color-oxblood)"
      : "var(--color-rule)";
  const lineHeight = tone === "ox-2" ? 2 : 1;
  if (ornament) {
    return (
      <div
        className={cn(
          "flex items-center gap-4 text-[var(--color-gold-leaf)]",
          className
        )}
        aria-hidden
      >
        <span
          className="flex-1 inline-block"
          style={{ height: lineHeight, background: lineColor }}
        />
        <span className="font-display text-base leading-none">{ornament}</span>
        <span
          className="flex-1 inline-block"
          style={{ height: lineHeight, background: lineColor }}
        />
      </div>
    );
  }
  return (
    <hr
      aria-hidden
      className={cn("border-0", className)}
      style={{ borderTop: `${lineHeight}px solid ${lineColor}` }}
    />
  );
}
