import { toRoman } from "@/lib/roman";
import { cn } from "@/lib/utils";

export function SectionNumber({
  n,
  label,
  className,
  align = "left",
}: {
  n: number;
  label: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-4",
        align === "center" && "justify-center",
        className
      )}
    >
      <span className="roman">{toRoman(n)}.</span>
      <span
        aria-hidden
        className="h-px w-12 bg-[var(--color-oxblood)] inline-block"
      />
      <span className="eyebrow">{label}</span>
    </div>
  );
}
