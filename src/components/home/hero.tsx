"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionNumber } from "@/components/typography/section-number";
import { HoustonSkylineAnimated } from "@/components/ornament/houston-skyline-animated";

const HEADLINE_LINES = [
  "Tax preparation,",
  "done by hand,",
  "since 1981.",
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative border-b border-[var(--color-rule)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Masthead band */}
        <div className="pt-10 pb-5 border-b border-[var(--color-rule)] text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]">
            R &amp; M Accounting{" "}
            <span className="text-[var(--color-rule)] mx-2">·</span>
            Houston, Texas{" "}
            <span className="text-[var(--color-rule)] mx-2">·</span>
            Established 1981
          </p>
        </div>

        {/* Spread */}
        <div className="pt-14 pb-20 grid grid-cols-1 lg:grid-cols-[1.45fr_1fr] gap-12 lg:gap-16 items-end">
          {/* Left — typeset headline */}
          <div>
            <SectionNumber n={1} label="The Practice" />

            <h1
              className="mt-7 font-display text-[var(--color-ink)]"
              style={{
                fontSize: "clamp(48px, 8.4vw, 104px)",
                lineHeight: 1.02,
                letterSpacing: "-0.025em",
                fontWeight: 380,
              }}
            >
              {HEADLINE_LINES.map((line, i) => (
                <motion.span
                  key={i}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + i * 0.18,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block"
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            {/* Editorial sub-statement */}
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 max-w-xl font-display italic text-[18px] sm:text-[20px] leading-[1.55] text-[var(--color-ink-secondary)]"
            >
              For forty-five years, at the same address, by hand and by careful
              eye. Filed by appointment, reviewed by the owner, answered
              year-round.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <Button
                asChild
                className="bg-[var(--color-oxblood)] text-[var(--color-paper)] hover:bg-[var(--color-oxblood-hover)] rounded-none font-sans h-12 px-7 text-[14px] tracking-wide"
              >
                <Link href="/contact#schedule">Schedule a consultation</Link>
              </Button>
              <a
                href="tel:+12813912900"
                className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-ink)] underline decoration-[var(--color-oxblood)] underline-offset-[6px] decoration-[1px] hover:decoration-[2px] transition-all"
              >
                Or call (281) 391-2900
              </a>
            </motion.div>

            {/* Specimen stats */}
            <motion.dl
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.2 }}
              className="mt-14 pt-7 border-t border-[var(--color-rule)] grid grid-cols-3 gap-6 max-w-xl"
            >
              <Stat n="45" label="Years" />
              <Stat n="I" label="Address" />
              <Stat n="365" label="Days a year" />
            </motion.dl>
          </div>

          {/* Right — skyline ornament */}
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="hidden lg:flex justify-end items-end text-[var(--color-ink)]/85"
          >
            <div className="w-full max-w-[460px]">
              <div className="border-l border-[var(--color-rule)] pl-6">
                <p className="eyebrow mb-4">A View From the Office.</p>
                <HoustonSkylineAnimated className="w-full" loop speed={1.4} />
                <p className="mt-4 font-display italic text-[13px] text-[var(--color-ink-muted)]">
                  Houston, looking east from Greenhouse Rd.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-[44px] leading-none text-[var(--color-ink)] tabular-nums">
        {n}
      </dt>
      <dd className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">
        {label}
      </dd>
    </div>
  );
}
