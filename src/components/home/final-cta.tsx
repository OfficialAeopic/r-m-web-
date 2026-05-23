import Link from "next/link";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

export function FinalCta() {
  return (
    <section className="border-t border-b border-[var(--color-rule)]">
      <div className="mx-auto max-w-3xl px-5 lg:px-8 py-24 sm:py-28 text-center space-y-7">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]">
          Ready to begin?
        </p>
        <h2
          className="font-display text-[var(--color-ink)]"
          style={{
            fontSize: "clamp(32px, 4.6vw, 56px)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            fontWeight: 380,
          }}
        >
          Get your numbers in order,{" "}
          <span className="italic text-[var(--color-oxblood)]">honestly.</span>
        </h2>
        <p className="font-display italic text-[18px] leading-[1.5] text-[var(--color-ink-secondary)] max-w-xl mx-auto">
          Schedule a free consultation. We will tell you whether we are a fit,
          and what the work would look like.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4 pt-3">
          <Button
            asChild
            className="bg-[var(--color-oxblood)] text-[var(--color-paper)] hover:bg-[var(--color-oxblood-hover)] rounded-none h-12 px-8 font-sans tracking-wide"
          >
            <Link href="/contact#schedule">Schedule a consultation</Link>
          </Button>
          <a
            href={`tel:${COMPANY.phoneTel}`}
            className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-ink)] underline decoration-[var(--color-oxblood)] underline-offset-[6px]"
          >
            Or call {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
