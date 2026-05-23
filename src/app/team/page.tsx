import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/metadata";
import { SectionNumber } from "@/components/typography/section-number";

export const metadata: Metadata = buildMetadata({
  title: "Our Team",
  description:
    "The people behind the numbers at R & M Accounting. Joshua Molina leads a Houston firm built on personal attention and year-round service.",
  path: "/team",
});

const PLACEHOLDER_TEAM = [
  { id: 1, mono: "TB", role: "Preparer" },
  { id: 2, mono: "TB", role: "Bookkeeper" },
  { id: 3, mono: "TB", role: "Administration" },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-[var(--color-rule)]">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 pt-16 pb-12">
          <SectionNumber n={7} label="The Team" />
          <div className="mt-7 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-end">
            <h1
              className="font-display text-[var(--color-ink)]"
              style={{
                fontSize: "clamp(44px, 6.8vw, 88px)",
                lineHeight: 1.02,
                letterSpacing: "-0.025em",
                fontWeight: 380,
              }}
            >
              The people{" "}
              <span className="italic text-[var(--color-oxblood)]">
                behind the numbers.
              </span>
            </h1>
            <p className="font-display italic text-[18px] leading-[1.55] text-[var(--color-ink-secondary)] max-w-md">
              Every team member you meet works in this office. No outsourcing,
              no offshoring, no handoffs.
            </p>
          </div>
        </div>
      </section>

      {/* Featured: Joshua */}
      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16 items-center">
        <figure className="relative aspect-[4/5] border-t-2 border-[var(--color-oxblood)] border-b border-l border-r border-[var(--color-rule)] bg-[var(--color-paper-tint)] overflow-hidden">
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
            Plate 01.
          </p>
        </figure>

        <div>
          <SectionNumber n={1} label="Featured" />
          <h2
            className="mt-7 font-display text-[var(--color-ink)]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.05 }}
          >
            Joshua Molina —{" "}
            <span className="italic text-[var(--color-oxblood)]">Owner.</span>
          </h2>
          <p className="mt-4 font-display italic text-[17px] text-[var(--color-ink-secondary)]">
            Working with individuals and businesses since 2007.
          </p>
          <p className="mt-6 text-[15.5px] leading-[1.7] text-[var(--color-ink-secondary)] max-w-xl">
            Joshua leads R &amp; M with the same standard the Carcasis set in
            1981 — personal service, in-house work, and year-round
            availability. He has prepared returns for individuals, families,
            small businesses, and organizations across Houston since 2007.
          </p>
          <div className="mt-7 pt-5 border-t border-[var(--color-rule)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-gold-leaf)]">
              Credentials.
            </p>
            <p className="mt-2 font-display italic text-[14px] text-[var(--color-ink-muted)]">
              [Credentials pending — Joshua&rsquo;s active credentials and bar
              membership will be listed here once finalized.]
            </p>
          </div>
          <Link
            href="/about"
            className="mt-7 inline-block font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--color-ink)] underline decoration-[var(--color-oxblood)] underline-offset-[6px] decoration-[1px] hover:decoration-[2px]"
          >
            Read the full story →
          </Link>
        </div>
      </section>

      {/* Team grid */}
      <section className="border-y border-[var(--color-rule)] bg-[var(--color-paper-tint)]">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 py-20">
          <SectionNumber n={2} label="The Staff" />
          <h2
            className="mt-5 font-display text-[var(--color-ink)] mb-3"
            style={{ fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1.1 }}
          >
            In-house. Local. Reachable.
          </h2>
          <p className="font-display italic text-[16px] text-[var(--color-ink-secondary)] max-w-md mb-10">
            Profiles coming soon. Every team member you meet works in this
            office.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--color-rule)]">
            {PLACEHOLDER_TEAM.map((m, i) => (
              <li
                key={m.id}
                className="border-r border-b border-[var(--color-rule)] bg-[var(--color-paper)]"
              >
                <figure className="relative aspect-[4/5] flex flex-col items-center justify-center p-8 text-center">
                  <p
                    className="font-display text-[var(--color-ink-muted)] tracking-[-0.04em]"
                    style={{ fontSize: "120px", lineHeight: 0.85, fontWeight: 380 }}
                  >
                    {m.mono}
                  </p>
                  <div className="mt-7 w-10 h-px bg-[var(--color-rule)]" />
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]">
                    {m.role}
                  </p>
                  <p className="mt-2 font-display italic text-[13px] text-[var(--color-ink-muted)]">
                    [Bio pending.]
                  </p>
                  <p className="absolute top-5 left-5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-gold-leaf)]">
                    Plate {i + 2}.
                  </p>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Founders tribute */}
      <section className="mx-auto max-w-3xl px-5 lg:px-8 py-16 text-center">
        <p className="eyebrow">In Tribute.</p>
        <p
          className="mt-5 font-display italic text-[var(--color-ink-secondary)]"
          style={{ fontSize: "clamp(20px, 2.4vw, 28px)", lineHeight: 1.4 }}
        >
          Founded by{" "}
          <span className="not-italic text-[var(--color-ink)]">
            Robert &amp; Margaret Carcasi
          </span>{" "}
          in 1981. The foundation they built continues today.
        </p>
      </section>

      {/* CTA */}
      <section className="border-t border-b border-[var(--color-rule)]">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 py-16 text-center space-y-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]">
            Meet With Us.
          </p>
          <h2
            className="font-display text-[var(--color-ink)]"
            style={{ fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1.1 }}
          >
            Schedule a free consultation —{" "}
            <span className="italic text-[var(--color-oxblood)]">
              we will tell you honestly whether we are a fit.
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
