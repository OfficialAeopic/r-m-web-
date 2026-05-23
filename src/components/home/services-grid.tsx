"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { services } from "@/content/services";
import { SectionNumber } from "@/components/typography/section-number";
import { pad2 } from "@/lib/roman";
import { cn } from "@/lib/utils";

export function ServicesGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduce = useReducedMotion();
  const active = services[activeIndex];

  return (
    <section className="mx-auto max-w-7xl px-5 lg:px-8 py-24 sm:py-32">
      {/* Section head */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.4fr] gap-12 mb-14 lg:mb-16">
        <div>
          <SectionNumber n={2} label="The Disciplines" />
          <h2
            className="mt-7 font-display text-[var(--color-ink)]"
            style={{
              fontSize: "clamp(34px, 4.6vw, 56px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontWeight: 380,
            }}
          >
            Eight practices,{" "}
            <span className="italic text-[var(--color-oxblood)]">
              under one roof.
            </span>
          </h2>
        </div>
        <div className="self-end max-w-xl">
          <p className="font-display italic text-[18px] leading-[1.55] text-[var(--color-ink-secondary)]">
            Tax, accounting, and financial work for every stage of your life
            or business. Filed by appointment, in-house, by people who know
            your name.
          </p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">
            Filed by Joshua Molina &amp; staff.
          </p>
        </div>
      </div>

      {/* DESKTOP — Index + Plate */}
      <div className="hidden lg:grid grid-cols-12 border-t border-[var(--color-rule)]">
        {/* Index column */}
        <ol
          aria-label="Practices index"
          className="col-span-5 border-r border-[var(--color-rule)]"
        >
          {services.map((s, i) => {
            const isActive = i === activeIndex;
            return (
              <li
                key={s.slug}
                className="border-b border-[var(--color-rule)] last:border-b-0"
              >
                <Link
                  href={`/services/${s.slug}`}
                  onMouseEnter={() => setActiveIndex(i)}
                  onFocus={() => setActiveIndex(i)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative group/idx flex items-baseline justify-between gap-4 py-5 pr-7 transition-[padding,background-color] duration-300 ease-out",
                    isActive
                      ? "bg-[var(--color-paper-tint)] pl-12"
                      : "pl-7 hover:bg-[var(--color-paper-tint)]/60"
                  )}
                >
                  {/* Active left rule */}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--color-oxblood)] transition-transform duration-300 ease-out origin-top",
                      isActive ? "scale-y-100" : "scale-y-0"
                    )}
                  />

                  <span className="flex items-baseline gap-5 min-w-0">
                    <span
                      className={cn(
                        "font-mono text-[11px] tracking-[0.18em] tabular-nums transition-colors shrink-0",
                        isActive
                          ? "text-[var(--color-oxblood)]"
                          : "text-[var(--color-gold-leaf)]"
                      )}
                    >
                      {pad2(i + 1)}.
                    </span>
                    <span
                      className={cn(
                        "font-display tracking-tight transition-colors truncate",
                        isActive
                          ? "text-[var(--color-oxblood)]"
                          : "text-[var(--color-ink)]"
                      )}
                      style={{ fontSize: "22px", lineHeight: 1.2, fontWeight: 420 }}
                    >
                      {s.title}
                    </span>
                  </span>

                  <span
                    aria-hidden
                    className={cn(
                      "font-mono text-[10px] uppercase tracking-[0.18em] shrink-0 transition-all duration-200",
                      isActive
                        ? "text-[var(--color-oxblood)] translate-x-0 opacity-100"
                        : "text-transparent -translate-x-1 opacity-0"
                    )}
                  >
                    Showing →
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>

        {/* Plate column */}
        <div
          aria-live="polite"
          className="col-span-7 relative bg-[var(--color-paper-tint)] border-r border-b border-[var(--color-rule)] min-h-[640px]"
        >
          {/* Huge Roman watermark */}
          <span
            aria-hidden
            className="absolute right-10 top-6 font-display text-[var(--color-oxblood)]/[0.08] select-none pointer-events-none tabular-nums"
            style={{
              fontSize: "280px",
              lineHeight: 0.8,
              fontWeight: 380,
              letterSpacing: "-0.04em",
            }}
          >
            {pad2(activeIndex + 1)}
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.slug}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full flex flex-col p-10 lg:p-12"
            >
              {/* Header */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-gold-leaf)]">
                  Plate {pad2(activeIndex + 1)}.
                </p>
                <h3
                  className="mt-4 font-display tracking-tight text-[var(--color-ink)]"
                  style={{
                    fontSize: "clamp(36px, 4.4vw, 60px)",
                    lineHeight: 1.02,
                    letterSpacing: "-0.02em",
                    fontWeight: 400,
                  }}
                >
                  {active.title}
                </h3>
                <p className="mt-4 font-display italic text-[18px] sm:text-[20px] leading-[1.4] text-[var(--color-oxblood)] max-w-md">
                  {active.tagline}
                </p>
              </div>

              {/* Includes */}
              <div className="mt-9 pt-6 border-t border-[var(--color-rule)]">
                <p className="eyebrow mb-5">Includes.</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-3">
                  {active.whatsIncluded.slice(0, 6).map((item, idx) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[13.5px] leading-[1.5] text-[var(--color-ink-secondary)]"
                    >
                      <span className="font-mono text-[10px] tracking-[0.14em] text-[var(--color-gold-leaf)] pt-[3px] w-6 shrink-0 tabular-nums">
                        {pad2(idx + 1)}.
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer — who + CTA */}
              <div className="mt-auto pt-8 border-t border-[var(--color-rule)] flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div className="max-w-md">
                  <p className="eyebrow">Who It Is For.</p>
                  <p className="mt-2 font-display italic text-[14px] leading-[1.55] text-[var(--color-ink-secondary)]">
                    {active.whoItsFor}
                  </p>
                </div>
                <Link
                  href={`/services/${active.slug}`}
                  className="group/cta inline-flex items-center justify-center gap-2 bg-[var(--color-oxblood)] text-[var(--color-paper)] hover:bg-[var(--color-oxblood-hover)] h-12 px-7 font-sans text-[13px] tracking-wide whitespace-nowrap self-start lg:self-auto"
                >
                  Open practice
                  <span aria-hidden className="transition-transform duration-300 group-hover/cta:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* MOBILE — single-column index, no plate */}
      <ol className="lg:hidden border-t border-l border-[var(--color-rule)]">
        {services.map((s, i) => (
          <li
            key={s.slug}
            className="border-r border-b border-[var(--color-rule)]"
          >
            <Link
              href={`/services/${s.slug}`}
              className="group/m block p-6 hover:bg-[var(--color-paper-tint)] transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--color-gold-leaf)] group-hover/m:text-[var(--color-oxblood)] transition-colors tabular-nums">
                  {pad2(i + 1)}.
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">
                  Practice
                </span>
              </div>
              <h3
                className="mt-4 font-display text-[var(--color-ink)] tracking-tight"
                style={{ fontSize: "24px", lineHeight: 1.15, fontWeight: 420 }}
              >
                {s.title}
              </h3>
              <p className="mt-2 font-display italic text-[14px] leading-[1.45] text-[var(--color-oxblood)]/85">
                {s.tagline}
              </p>
              <p className="mt-3 text-[13.5px] leading-[1.55] text-[var(--color-ink-secondary)]">
                {s.shortDescription}
              </p>
              <p className="mt-5 pt-4 border-t border-[var(--color-rule-soft)] font-display italic text-[12px] text-[var(--color-ink-muted)] group-hover/m:text-[var(--color-oxblood)] transition-colors">
                View practice →
              </p>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
