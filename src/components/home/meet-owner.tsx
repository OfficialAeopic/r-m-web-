import Link from "next/link";
import { SectionNumber } from "@/components/typography/section-number";

export function MeetOwner() {
  return (
    <section className="border-y border-[var(--color-rule)] bg-[var(--color-paper-tint)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-24 sm:py-32">
        {/* Section heading */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.4fr] gap-12 mb-14 lg:mb-16">
          <div>
            <SectionNumber n={3} label="The Owner" />
            <h2
              className="mt-7 font-display text-[var(--color-ink)]"
              style={{
                fontSize: "clamp(34px, 4.6vw, 56px)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                fontWeight: 380,
              }}
            >
              A letter from{" "}
              <span className="italic text-[var(--color-oxblood)]">
                Joshua.
              </span>
            </h2>
          </div>
          <p className="self-end max-w-xl font-display italic text-[18px] leading-[1.55] text-[var(--color-ink-secondary)]">
            On taking over a forty-five-year firm, on what stayed, and on what
            it means to be answered by the owner himself.
          </p>
        </div>

        {/* The spread — sidebar (4 col) + letter (8 col) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Sidebar — portrait, stamp, facts */}
          <aside className="lg:col-span-4 lg:border-r lg:border-[var(--color-rule)] lg:pr-8 space-y-7">
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
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <p
                  className="font-display text-[var(--color-ink)] tracking-[-0.04em]"
                  style={{ fontSize: "clamp(96px, 14vw, 180px)", lineHeight: 0.85, fontWeight: 380 }}
                >
                  JM
                </p>
                <div className="mt-7 w-12 h-px bg-[var(--color-oxblood)]" />
                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]">
                  Joshua Molina
                </p>
                <p className="mt-1 font-display italic text-[13px] text-[var(--color-ink-secondary)]">
                  Owner, since 2020.
                </p>
              </div>
              <p className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-gold-leaf)]">
                Plate 02.
              </p>
            </figure>

            {/* FILED stamp */}
            <div className="border border-dashed border-[var(--color-oxblood)]/60 p-4 flex items-baseline justify-between gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-oxblood)]">
                Filed
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-oxblood)] tabular-nums">
                23 May 2026
              </p>
            </div>

            {/* Facts dl */}
            <dl className="border-t border-[var(--color-rule)]">
              <FactRow label="Owner since" value="2020" />
              <FactRow label="Preparing returns since" value="2007" />
              <FactRow label="Firm founded" value="1981" />
              <FactRow label="At this address" value="45 years" last />
            </dl>

            <Link
              href="/about"
              className="inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink)] underline decoration-[var(--color-oxblood)] underline-offset-[6px] decoration-[1px] hover:decoration-[2px]"
            >
              Read the full story →
            </Link>
          </aside>

          {/* The letter */}
          <article className="lg:col-span-8 lg:pl-10 mt-12 lg:mt-0">
            <div className="relative bg-[var(--color-paper)] border border-[var(--color-rule)] shadow-[0_30px_60px_-30px_rgba(26,23,20,0.18)]">
              {/* Letterhead */}
              <header className="px-9 lg:px-12 pt-9 pb-6 border-b-2 border-[var(--color-oxblood)] flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4">
                <div>
                  <p className="font-display text-[24px] sm:text-[28px] text-[var(--color-ink)] tracking-[-0.02em] leading-none">
                    R&nbsp;<span className="italic">&amp;</span>&nbsp;M
                  </p>
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">
                    Accounting &amp; Tax Service
                  </p>
                  <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.10em] text-[var(--color-gold-leaf)]">
                    Established 1981 · Houston
                  </p>
                </div>
                <div className="sm:text-right">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">
                    Office.
                  </p>
                  <p className="mt-1.5 font-display text-[14px] text-[var(--color-ink-secondary)] leading-[1.5]">
                    3880 Greenhouse Rd, Suite 219
                    <br />
                    Houston, Texas 77084
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
                    (281) 391-2900
                  </p>
                </div>
              </header>

              {/* Letter body */}
              <div className="px-9 lg:px-12 pt-9 pb-14 relative">
                {/* Decorative ornament glyph */}
                <p
                  aria-hidden
                  className="absolute top-9 right-10 font-display text-[var(--color-gold-leaf)]/40 select-none"
                  style={{ fontSize: "60px", lineHeight: 1, fontWeight: 380 }}
                >
                  §
                </p>

                {/* Date line */}
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-muted)] tabular-nums">
                  Houston, Texas · The 23<sup className="text-[7px] tracking-normal">rd</sup>{" "}
                  day of May, 2026
                </p>

                {/* Salutation */}
                <p
                  className="mt-9 font-display italic text-[var(--color-ink)]"
                  style={{ fontSize: "26px", lineHeight: 1.2, fontWeight: 400 }}
                >
                  Dear reader,
                </p>

                {/* Body */}
                <div className="mt-6 space-y-5 max-w-[60ch] text-[16.5px] leading-[1.75] text-[var(--color-ink-secondary)]">
                  <p className="drop-cap">
                    R &amp; M Accounting was founded in 1981 by Robert and
                    Margaret Carcasi. In 2020, they trusted me to carry it
                    forward. I had been preparing returns and advising small
                    businesses since 2007 — long enough to know which corners
                    not to cut.
                  </p>
                  <p>
                    What the Carcasis built well, I have kept: the personal
                    service, the year-round availability, the patient
                    explanations. What needed modernising in the back office,
                    I modernised. The work moves faster now, but the standard
                    is the same.
                  </p>
                  <p>
                    Continuity is rare in this industry. It is also why so
                    many of the families and small businesses who started with
                    R &amp; M in the eighties are still with us today.{" "}
                    <span className="font-display italic text-[var(--color-ink)]">
                      I hope you will be, too.
                    </span>
                  </p>
                </div>

                {/* Closing */}
                <p
                  className="mt-12 font-display italic text-[var(--color-ink-secondary)]"
                  style={{ fontSize: "17px" }}
                >
                  With careful attention,
                </p>

                {/* Signature */}
                <div className="mt-8 flex items-end justify-between gap-8 flex-wrap">
                  <div>
                    <p
                      className="font-display italic text-[var(--color-ink)] tracking-[-0.01em]"
                      style={{
                        fontSize: "clamp(40px, 5vw, 52px)",
                        lineHeight: 0.95,
                        fontWeight: 380,
                      }}
                    >
                      Joshua Molina
                    </p>
                    <div className="mt-3 w-32 h-px bg-[var(--color-ink)]/30" />
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]">
                      Owner, R &amp; M Accounting &amp; Tax Service
                    </p>
                  </div>

                  {/* Wax-seal motif */}
                  <div className="relative shrink-0">
                    <div
                      aria-hidden
                      className="relative size-24 flex items-center justify-center"
                      style={{
                        background:
                          "radial-gradient(circle at 35% 30%, #8c2837 0%, #6B1F2A 55%, #4F1721 100%)",
                        clipPath:
                          "polygon(50% 0%, 67% 8%, 82% 6%, 92% 19%, 100% 32%, 98% 50%, 100% 68%, 92% 81%, 82% 94%, 67% 92%, 50% 100%, 33% 92%, 18% 94%, 8% 81%, 0% 68%, 2% 50%, 0% 32%, 8% 19%, 18% 6%, 33% 8%)",
                        filter: "drop-shadow(0 4px 6px rgba(26,23,20,0.18))",
                      }}
                    >
                      <div className="text-center text-[#F5F1E8]">
                        <p
                          className="font-display"
                          style={{ fontSize: "26px", lineHeight: 0.9, fontWeight: 500 }}
                        >
                          R<span className="italic">&amp;</span>M
                        </p>
                        <p
                          className="mt-1 font-mono uppercase"
                          style={{
                            fontSize: "6px",
                            letterSpacing: "0.18em",
                          }}
                        >
                          Est. 1981
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function FactRow({
  label,
  value,
  last,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={
        "flex items-baseline justify-between gap-4 py-3 " +
        (last
          ? "border-b border-[var(--color-rule)]"
          : "border-b border-[var(--color-rule-soft)]")
      }
    >
      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">
        {label}
      </dt>
      <dd className="font-display text-[15px] text-[var(--color-ink)] tabular-nums">
        {value}
      </dd>
    </div>
  );
}
