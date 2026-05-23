import { TESTIMONIALS, FTC_DISCLAIMER } from "@/content/testimonials";
import { SectionNumber } from "@/components/typography/section-number";
import { PullQuote } from "@/components/typography/pull-quote";

export function Testimonials() {
  return (
    <section className="border-y border-[var(--color-rule)] bg-[var(--color-paper-tint)]">
      <div className="mx-auto max-w-5xl px-5 lg:px-8 py-24 sm:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <SectionNumber n={5} label="Correspondence Received" align="center" />
          <h2
            className="mt-7 font-display text-[var(--color-ink)]"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontWeight: 380,
            }}
          >
            The kind of service{" "}
            <span className="italic text-[var(--color-oxblood)]">
              worth telling a friend about.
            </span>
          </h2>
        </div>

        <div className="mt-14 space-y-4">
          {TESTIMONIALS.map((t, i) => (
            <PullQuote
              key={t.name}
              attribution={t.name}
              caption={i === TESTIMONIALS.length - 1 ? FTC_DISCLAIMER : undefined}
            >
              {t.quote}
            </PullQuote>
          ))}
        </div>
      </div>
    </section>
  );
}
