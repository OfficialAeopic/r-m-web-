import { cn } from "@/lib/utils";

export function PullQuote({
  children,
  attribution,
  caption,
  className,
}: {
  children: React.ReactNode;
  attribution?: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={cn("pull-quote my-12", className)}>
      <blockquote className="text-[var(--color-ink)]">
        <span aria-hidden className="text-[var(--color-oxblood)] mr-1">
          “
        </span>
        {children}
        <span aria-hidden className="text-[var(--color-oxblood)] ml-1">
          ”
        </span>
      </blockquote>
      {(attribution || caption) && (
        <figcaption className="mt-5 flex flex-col gap-1">
          {attribution && (
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-ink-secondary)]">
              — {attribution}
            </span>
          )}
          {caption && (
            <span className="font-display italic text-[12px] text-[var(--color-ink-muted)]">
              {caption}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
