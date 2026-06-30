import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/metadata";
import { SectionNumber } from "@/components/typography/section-number";
import { WhyRM } from "@/components/home/why-rm";

export const metadata: Metadata = buildMetadata({
  title: "Our Story",
  description:
    "R & M Accounting was founded in Houston in 1981 by Robert and Margaret Carcasi. Joshua Molina took ownership in 2020.",
  path: "/about",
});

const TIMELINE = [
  {
    year: "Founded",
    yearDisplay: "1981",
    event:
      "Robert and Margaret Carcasi found R & M Accounting in Houston.",
  },
  {
    year: "Two Decades",
    yearDisplay: "1980s — 2000s",
    event:
      "The firm grows with Houston, serving families and small businesses across the west side.",
  },
  {
    year: "Joshua Begins",
    yearDisplay: "2007",
    event:
      "Joshua Molina begins working with individuals and businesses in tax preparation.",
  },
  {
    year: "New Ownership",
    yearDisplay: "2020",
    event:
      "Joshua takes ownership of R & M, preserving the Carcasis' legacy of personal service.",
  },
  {
    year: "Present Day",
    yearDisplay: "Today",
    event:
      "Forty-five years of continuous operation. Same address. Same standard.",
  },
];

const VALUES = [
  {
    title: "In-house Work.",
    body:
      "Every return, every reconciliation, every filing handled in-house by the people who know your name. No outsourcing.",
  },
  {
    title: "Year-Round Availability.",
    body:
      "We answer the phone in July. Tax season is not a season for us — it is the busy stretch of a year-round practice.",
  },
  {
    title: "Personal Service.",
    body:
      "Patient explanations, plain-English advice, and the same preparer year after year. The work that comes from caring.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-[var(--color-rule)]">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 pt-16 pb-12">
          <SectionNumber n={6} label="The Story" />
          <div className="mt-7 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
            <h1
              className="font-display text-[var(--color-ink)]"
              style={{
                fontSize: "clamp(44px, 6.8vw, 88px)",
                lineHeight: 1.02,
                letterSpacing: "-0.025em",
                fontWeight: 380,
              }}
            >
              From 1981{" "}
              <span className="italic text-[var(--color-oxblood)]">
                to today —
              </span>{" "}
              one firm, one standard.
            </h1>
            <p className="font-display italic text-[18px] leading-[1.55] text-[var(--color-ink-secondary)] max-w-md">
              A quiet, durable history of doing the work in-house, by hand, and
              answering the phone year-round.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline — editorial ledger table */}
      <section className="mx-auto max-w-5xl px-5 lg:px-8 py-16">
        <SectionNumber n={1} label="A Brief Chronology" />
        <h2
          className="mt-5 font-display text-[var(--color-ink)] mb-10"
          style={{
            fontSize: "clamp(28px, 3.6vw, 44px)",
            lineHeight: 1.1,
            fontWeight: 380,
          }}
        >
          What happened, and when.
        </h2>

        <ol className="border-t border-[var(--color-rule)]">
          {TIMELINE.map((t, i) => (
            <li
              key={i}
              className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-x-10 gap-y-3 py-8 border-b border-[var(--color-rule)]"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-gold-leaf)]">
                  {t.year}
                </p>
                <p
                  className="mt-1 font-display text-[var(--color-ink)] tabular-nums"
                  style={{ fontSize: "28px", lineHeight: 1, letterSpacing: "-0.01em" }}
                >
                  {t.yearDisplay}
                </p>
              </div>
              <p className="font-display text-[18px] sm:text-[20px] leading-[1.45] text-[var(--color-ink-secondary)] max-w-2xl">
                {t.event}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Joshua feature */}
      <section className="border-y border-[var(--color-rule)] bg-[var(--color-paper-tint)]">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16 items-center">
          {/* Monogram portrait */}
          <figure className="relative aspect-[4/5] border-t-2 border-[var(--color-oxblood)] border-b border-l border-r border-[var(--color-rule)] bg-[var(--color-paper)] overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(70% 50% at 50% 35%, rgba(212,165,32,0.18), transparent 70%)",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
              <p
                className="font-display text-[var(--color-ink)] tracking-[-0.04em]"
                style={{ fontSize: "clamp(110px, 14vw, 200px)", lineHeight: 0.85, fontWeight: 380 }}
              >
                JM
              </p>
              <div className="mt-8 w-12 h-px bg-[var(--color-oxblood)]" />
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]">
                Joshua Molina
              </p>
              <p className="mt-1 font-display italic text-[14px] text-[var(--color-ink-secondary)]">
                Owner, since 2020.
              </p>
            </div>
            <p className="absolute top-5 left-5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-gold-leaf)]">
              Plate II.
            </p>
          </figure>

          <div>
            <SectionNumber n={2} label="The Owner" />
            <h2
              className="mt-7 font-display text-[var(--color-ink)]"
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                lineHeight: 1.05,
                fontWeight: 380,
              }}
            >
              Joshua Molina.
            </h2>
            <p className="mt-4 font-display italic text-[18px] text-[var(--color-ink-secondary)]">
              Working with individuals and businesses since 2007. Owner since
              2020.
            </p>
            <div className="mt-7 space-y-5 text-[15.5px] leading-[1.7] text-[var(--color-ink-secondary)] max-w-xl">
              <p>
                In 2020, Joshua took over R &amp; M Accounting from founders
                Robert and Margaret Carcasi, who built the firm in 1981 and
                trusted Joshua to carry it forward. He had been preparing
                returns and advising small businesses since 2007 — long enough
                to know which corners not to cut.
              </p>
              <p>
                He kept what the Carcasis built well — the personal service,
                the year-round availability, the patient explanations — and
                brought modern tools to the back office so the work moves
                faster. That continuity is rare in this industry. It is also
                why so many of the families and small businesses who started
                with R &amp; M in the eighties are still with us today.
              </p>
            </div>
            <div className="mt-7 pt-5 border-t border-[var(--color-rule)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-gold-leaf)]">
                Credentials.
              </p>
              <p className="mt-2 font-display italic text-[14px] text-[var(--color-ink-muted)]">
                [Credentials pending — Joshua&rsquo;s active credentials and bar
                membership will be listed here once finalized.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-20">
        <SectionNumber n={3} label="The Standard" />
        <h2
          className="mt-5 font-display text-[var(--color-ink)] mb-12"
          style={{
            fontSize: "clamp(28px, 3.6vw, 44px)",
            lineHeight: 1.1,
            fontWeight: 380,
          }}
        >
          Personal attention, year-round.
        </h2>

        <ol className="border-t border-l border-[var(--color-rule)] grid grid-cols-1 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <li
              key={v.title}
              className="border-r border-b border-[var(--color-rule)] p-8"
            >
              <p className="font-display text-[var(--color-oxblood)] tracking-tight tabular-nums"
                 style={{ fontSize: "56px", lineHeight: 0.95, fontWeight: 380 }}>
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3
                className="mt-6 font-display text-[var(--color-ink)] tracking-tight"
                style={{ fontSize: "22px", lineHeight: 1.15 }}
              >
                {v.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.65] text-[var(--color-ink-secondary)]">
                {v.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <WhyRM />

      <section className="border-t border-b border-[var(--color-rule)]">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 py-20 text-center space-y-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]">
            Forty-five years and counting.
          </p>
          <h2
            className="font-display text-[var(--color-ink)]"
            style={{ fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1.1 }}
          >
            Work with a firm that has done{" "}
            <span className="italic text-[var(--color-oxblood)]">
              this for forty-five years.
            </span>
          </h2>
          <Button
            asChild
            className="bg-[var(--color-oxblood)] text-[var(--color-paper)] hover:bg-[var(--color-oxblood-hover)] rounded-none h-12 px-7 font-sans tracking-wide"
          >
            <Link href="/contact#schedule">Schedule a consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
