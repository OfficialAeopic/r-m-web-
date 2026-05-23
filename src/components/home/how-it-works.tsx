import { SectionNumber } from "@/components/typography/section-number";
import { pad2 } from "@/lib/roman";

const STEPS = [
  {
    title: "Consultation",
    body:
      "Call or schedule online. We listen first, then explain what we would actually do for you — and what we would not.",
  },
  {
    title: "Document Intake",
    body:
      "We send a clear checklist. Bring it in, upload it, or mail it. Whatever works for you.",
  },
  {
    title: "Review &\nPreparation",
    body:
      "Joshua and the team handle the work in-house and flag anything that needs your eyes.",
  },
  {
    title: "File and Follow Up",
    body:
      "We file on time, send you copies for your records, and stay reachable year-round.",
  },
] as const;

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24 sm:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 mb-14">
        <div>
          <SectionNumber n={4} label="Procedure" />
          <h2
            className="mt-7 font-display text-[var(--color-ink)]"
            style={{
              fontSize: "clamp(32px, 4.4vw, 56px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontWeight: 380,
            }}
          >
            The order of{" "}
            <span className="italic text-[var(--color-oxblood)]">operations.</span>
          </h2>
        </div>
        <p className="self-end max-w-lg font-display italic text-[18px] leading-[1.55] text-[var(--color-ink-secondary)]">
          From first phone call to filed return — here is what working with
          R &amp; M actually looks like.
        </p>
      </div>

      <ol className="border-t border-[var(--color-rule)]">
        {STEPS.map((step, i) => (
          <li
            key={step.title}
            className="border-b border-[var(--color-rule)] py-10 grid grid-cols-1 md:grid-cols-[120px_1fr_2fr] gap-x-10 gap-y-4 items-start"
          >
            <p
              className="font-display text-[var(--color-oxblood)] tracking-tight tabular-nums"
              style={{ fontSize: "72px", lineHeight: 0.9, fontWeight: 380 }}
            >
              {pad2(i + 1)}.
            </p>
            <h3
              className="font-display text-[var(--color-ink)] tracking-tight whitespace-pre-line"
              style={{ fontSize: "24px", lineHeight: 1.1 }}
            >
              {step.title}
            </h3>
            <p className="text-[15px] leading-[1.65] text-[var(--color-ink-secondary)] max-w-2xl">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
