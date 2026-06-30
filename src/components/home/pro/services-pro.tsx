"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getService } from "@/content/services";

// Interactive "ledger index" — no cards. Full-width numbered rows separated by
// hairlines; hovering (desktop) or tapping (touch) a row expands its detail.
// Distinctive, on-brand for an accounting firm, and avoids the generic icon-card grid.
const ROWS: { slug: string; tag: string }[] = [
  { slug: "tax-preparation", tag: "Individuals · Business · 1040 / 1065 / 1120" },
  { slug: "bookkeeping", tag: "Monthly · Quarterly · Reconciliation" },
  { slug: "payroll", tag: "Processing · Compliance · Quarterly filings" },
  { slug: "accounting", tag: "Statements · Advisory · Ongoing support" },
  { slug: "irs-resolution", tag: "Audits · Back taxes · Representation" },
  { slug: "tax-planning", tag: "Year-round · Proactive · Strategy" },
];

export function ServicesPro() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 py-20 sm:py-28">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--m-blue)" }}>
              What we do
            </p>
            <h2
              className="mt-3 font-extrabold tracking-[-0.02em] text-[clamp(28px,4vw,46px)] leading-[1.05]"
              style={{ color: "var(--m-ink)" }}
            >
              Everything your numbers need,<br className="hidden sm:block" /> under one roof.
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold shrink-0"
            style={{ color: "var(--m-blue)" }}
          >
            All 17 services <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Ledger index */}
        <ul
          className="mt-14 border-t"
          style={{ borderColor: "var(--m-line)" }}
          onMouseLeave={() => setActive(-1)}
        >
          {ROWS.map((row, i) => {
            const s = getService(row.slug);
            if (!s) return null;
            const isActive = active === i;
            return (
              <li
                key={row.slug}
                className="border-b transition-colors duration-300"
                style={{
                  borderColor: "var(--m-line)",
                  background: isActive ? "var(--m-mist)" : "transparent",
                }}
                onMouseEnter={() => setActive(i)}
              >
                <button
                  type="button"
                  onClick={() => setActive(isActive ? -1 : i)}
                  aria-expanded={isActive}
                  className="group w-full text-left grid grid-cols-[auto_1fr_auto] items-center gap-5 sm:gap-8 px-2 sm:px-5 py-6 sm:py-7"
                >
                  {/* Number */}
                  <span
                    className="font-extrabold tabular-nums text-[clamp(20px,2.4vw,30px)] leading-none transition-colors duration-300 w-9 sm:w-12"
                    style={{ color: isActive ? "var(--m-blue)" : "var(--m-line)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Name + reveal */}
                  <span className="min-w-0">
                    <span
                      className="block font-extrabold tracking-[-0.01em] text-[clamp(22px,3.2vw,38px)] leading-[1.05] transition-colors duration-300"
                      style={{ color: isActive ? "var(--m-ink)" : "var(--m-ink)" }}
                    >
                      {s.title}
                    </span>
                    {/* Expanding detail (grid-rows 0fr → 1fr for smooth height) */}
                    <span
                      className="grid transition-[grid-template-rows,opacity] duration-300 ease-out"
                      style={{
                        gridTemplateRows: isActive ? "1fr" : "0fr",
                        opacity: isActive ? 1 : 0,
                      }}
                    >
                      <span className="overflow-hidden min-h-0">
                        <span className="block pt-3 max-w-2xl text-[15px] sm:text-[16px] leading-[1.6]" style={{ color: "var(--m-body)" }}>
                          {s.shortDescription}
                        </span>
                        <span className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
                          <span className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: "var(--m-muted)" }}>
                            {row.tag}
                          </span>
                          <Link
                            href={`/services/${row.slug}`}
                            className="inline-flex items-center gap-1 text-[13px] font-semibold"
                            style={{ color: "var(--m-blue)" }}
                          >
                            Learn more
                            <ArrowUpRight className="size-3.5" />
                          </Link>
                        </span>
                      </span>
                    </span>
                  </span>

                  {/* Arrow indicator */}
                  <span
                    className="justify-self-end transition-all duration-300"
                    style={{
                      color: isActive ? "var(--m-blue)" : "var(--m-line)",
                      transform: isActive ? "translateX(2px)" : "none",
                    }}
                  >
                    <ArrowRight className="size-5 sm:size-6" />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
