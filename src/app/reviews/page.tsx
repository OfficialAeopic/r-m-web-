import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TESTIMONIALS, FTC_DISCLAIMER } from "@/content/testimonials";
import { JsonLd } from "@/components/seo/json-ld";
import { reviewsLd, buildMetadata } from "@/lib/metadata";
import { SectionNumber } from "@/components/typography/section-number";
import { PullQuote } from "@/components/typography/pull-quote";

export const metadata: Metadata = buildMetadata({
  title: "Client Reviews",
  description:
    "Real reviews from R & M Accounting clients across Houston. Personal attention, year-round availability.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={reviewsLd()} />

      {/* Hero */}
      <section className="border-b border-[var(--color-rule)]">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 pt-16 pb-12">
          <SectionNumber n={8} label="Correspondence Received" />
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
              What our clients{" "}
              <span className="italic text-[var(--color-oxblood)]">
                say in writing.
              </span>
            </h1>
            <div className="max-w-md">
              <p className="font-display italic text-[18px] leading-[1.55] text-[var(--color-ink-secondary)]">
                Three letters of correspondence on file. Don&rsquo;t take our
                word for it — take theirs.
              </p>
              <div className="mt-6 flex items-baseline gap-4">
                <p
                  className="font-display text-[var(--color-oxblood)] tabular-nums"
                  style={{ fontSize: "56px", lineHeight: 0.85, fontWeight: 380 }}
                >
                  5 / 5
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">
                  Stars · {TESTIMONIALS.length} testimonials
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-4xl px-5 lg:px-8 py-14">
        <ol className="space-y-2">
          {TESTIMONIALS.map((t, i) => (
            <li key={t.name}>
              <div className="mb-4 flex items-baseline gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-gold-leaf)] tabular-nums">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">
                  Filed — Houston, Texas
                </span>
              </div>
              <PullQuote
                attribution={t.name}
                caption={FTC_DISCLAIMER}
              >
                {t.quote}
              </PullQuote>
            </li>
          ))}
        </ol>
      </section>

      {/* Google Reviews link */}
      <section className="border-t border-[var(--color-rule)] bg-[var(--color-paper-tint)]">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 py-14 text-center space-y-5">
          <p className="eyebrow">Further Correspondence.</p>
          <p className="font-display text-[20px] leading-[1.45] text-[var(--color-ink-secondary)]">
            Reviews from clients in Cypress, Katy, Spring, Houston, and across
            greater Houston.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--color-ink)] underline decoration-[var(--color-oxblood)] underline-offset-[6px] decoration-[1px] hover:decoration-[2px]"
          >
            Read more reviews on Google →
          </a>
          <p className="font-display italic text-[12px] text-[var(--color-ink-muted)]">
            Google Business Profile link will be activated once verified.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-b border-[var(--color-rule)]">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 py-16 text-center space-y-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]">
            Become The Next Entry.
          </p>
          <h2
            className="font-display text-[var(--color-ink)]"
            style={{ fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1.1 }}
          >
            Schedule a consultation —{" "}
            <span className="italic text-[var(--color-oxblood)]">
              we will listen first.
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
