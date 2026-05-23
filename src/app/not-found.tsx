import Link from "next/link";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 lg:px-8 pt-24 pb-24 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]">
        — Not Filed —
      </p>
      <p
        className="mt-5 font-display text-[var(--color-oxblood)] tabular-nums"
        style={{ fontSize: "120px", lineHeight: 0.85, fontWeight: 380, letterSpacing: "-0.04em" }}
      >
        IV·O·IV
      </p>
      <h1
        className="mt-7 font-display text-[var(--color-ink)]"
        style={{
          fontSize: "clamp(36px, 5vw, 64px)",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          fontWeight: 380,
        }}
      >
        Page not in{" "}
        <span className="italic text-[var(--color-oxblood)]">
          this volume.
        </span>
      </h1>
      <p className="mt-7 font-display italic text-[17px] leading-[1.6] text-[var(--color-ink-secondary)] max-w-xl mx-auto">
        The page you are looking for is not here. It may have moved, or the
        link may be off by a character or two. We have been at the same
        address since 1981 — we know how confusing those can be.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-x-8 gap-y-4 items-center justify-center">
        <Button
          asChild
          className="bg-[var(--color-oxblood)] text-[var(--color-paper)] hover:bg-[var(--color-oxblood-hover)] rounded-none h-12 px-7 font-sans tracking-wide"
        >
          <Link href="/">Back to homepage</Link>
        </Button>
        <a
          href={`tel:${COMPANY.phoneTel}`}
          className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-ink)] underline decoration-[var(--color-oxblood)] underline-offset-[6px]"
        >
          Or call {COMPANY.phone}
        </a>
      </div>
    </section>
  );
}
