"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error("[app error]", error);
  }, [error]);

  return (
    <section className="mx-auto max-w-3xl px-5 lg:px-8 pt-24 pb-24 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-warning)]">
        — Erratum —
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
        An error in{" "}
        <span className="italic text-[var(--color-oxblood)]">
          the record.
        </span>
      </h1>
      <p className="mt-7 font-display italic text-[17px] leading-[1.6] text-[var(--color-ink-secondary)] max-w-xl mx-auto">
        We hit an unexpected error loading this page. You can try again, or
        head back to the homepage.
      </p>
      {error.digest && (
        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">
          Reference — {error.digest}
        </p>
      )}
      <div className="mt-10 flex flex-col sm:flex-row gap-x-8 gap-y-4 items-center justify-center">
        <Button
          type="button"
          onClick={reset}
          className="bg-[var(--color-oxblood)] text-[var(--color-paper)] hover:bg-[var(--color-oxblood-hover)] rounded-none h-12 px-7 font-sans tracking-wide"
        >
          Try again
        </Button>
        <Link
          href="/"
          className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-ink)] underline decoration-[var(--color-oxblood)] underline-offset-[6px]"
        >
          Or back to homepage
        </Link>
      </div>
    </section>
  );
}
