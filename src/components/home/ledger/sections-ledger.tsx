"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { getService } from "@/content/services";
import { TESTIMONIALS, FTC_DISCLAIMER } from "@/content/testimonials";
import { CountUp } from "./bits";

const ease = [0.16, 1, 0.3, 1] as const;

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="l-mono text-[11px] uppercase tracking-[0.26em]" style={{ color: "var(--l-emerald)" }}>
      {children}
    </span>
  );
}
function DrawRule() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.9, ease }}
      className="h-px origin-left"
      style={{ background: "var(--l-emerald)" }}
    />
  );
}

/* ───────── Stats band — count-ups + drawn rule ───────── */
export function StatsLedger() {
  const stats = [
    { v: <CountUp to={45} />, label: "Years in Houston" },
    { v: <CountUp to={1981} />, label: "Family-stewarded since" },
    { v: <><CountUp to={11400} suffix="+" /></>, label: "Returns filed" },
    { v: <><CountUp to={365} /></>, label: "Days a year — not seasonal" },
  ];
  return (
    <section style={{ background: "var(--l-bg-2)" }} className="relative">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <DrawRule />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 pt-12">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
            >
              <div className="l-mono text-[clamp(36px,5vw,60px)] leading-none font-medium tabular-nums" style={{ color: "var(--l-bone)" }}>
                {s.v}
              </div>
              <div className="mt-3 text-[12px] uppercase tracking-[0.14em]" style={{ color: "var(--l-bone-faint)" }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Services — dark expanding ledger index ───────── */
const ROWS: { slug: string; tag: string }[] = [
  { slug: "tax-preparation", tag: "Individuals · Business · 1040 / 1065 / 1120" },
  { slug: "bookkeeping", tag: "Monthly · Quarterly · Reconciliation" },
  { slug: "payroll", tag: "Processing · Compliance · Quarterly filings" },
  { slug: "accounting", tag: "Statements · Advisory · Ongoing support" },
  { slug: "irs-resolution", tag: "Audits · Back taxes · Representation" },
  { slug: "tax-planning", tag: "Year-round · Proactive · Strategy" },
];

export function ServicesLedger() {
  const [active, setActive] = useState(0);
  return (
    <section style={{ background: "var(--l-bg)" }}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-24 sm:py-32">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>The Practice</Eyebrow>
            <h2 className="mt-4 l-serif text-[clamp(32px,5vw,60px)] leading-[1.02] tracking-[-0.02em]" style={{ color: "var(--l-bone)" }}>
              Everything your numbers need.
            </h2>
          </div>
          <Link href="/services" className="inline-flex items-center gap-1.5 text-[14px] font-semibold shrink-0" style={{ color: "var(--l-emerald)" }}>
            All 17 services <ArrowRight className="size-4" />
          </Link>
        </div>

        <ul className="mt-14 border-t" style={{ borderColor: "var(--l-line)" }} onMouseLeave={() => setActive(-1)}>
          {ROWS.map((row, i) => {
            const s = getService(row.slug);
            if (!s) return null;
            const on = active === i;
            return (
              <motion.li
                key={row.slug}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="border-b transition-colors duration-300"
                style={{ borderColor: "var(--l-line)", background: on ? "var(--l-emerald-deep)" : "transparent" }}
                onMouseEnter={() => setActive(i)}
              >
                <button
                  type="button"
                  onClick={() => setActive(on ? -1 : i)}
                  aria-expanded={on}
                  className="group w-full text-left grid grid-cols-[auto_1fr_auto] items-center gap-5 sm:gap-8 px-2 sm:px-5 py-6 sm:py-7"
                >
                  <span className="l-mono font-medium tabular-nums text-[clamp(18px,2.2vw,28px)] leading-none w-9 sm:w-14 transition-colors duration-300" style={{ color: on ? "var(--l-emerald)" : "var(--l-bone-faint)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0">
                    <span className="block l-serif text-[clamp(24px,3.4vw,42px)] leading-[1.05] transition-colors duration-300" style={{ color: on ? "var(--l-bone)" : "var(--l-bone-dim)" }}>
                      {s.title}
                    </span>
                    <span className="grid transition-[grid-template-rows,opacity] duration-300 ease-out" style={{ gridTemplateRows: on ? "1fr" : "0fr", opacity: on ? 1 : 0 }}>
                      <span className="overflow-hidden min-h-0">
                        <span className="block pt-3 max-w-2xl text-[15px] sm:text-[16px] leading-[1.6]" style={{ color: "var(--l-bone-dim)" }}>
                          {s.shortDescription}
                        </span>
                        <span className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
                          <span className="l-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: "var(--l-bone-faint)" }}>{row.tag}</span>
                          <Link href={`/services/${row.slug}`} className="inline-flex items-center gap-1 text-[13px] font-semibold" style={{ color: "var(--l-emerald)" }}>
                            Learn more <ArrowUpRight className="size-3.5" />
                          </Link>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span className="justify-self-end transition-all duration-300" style={{ color: on ? "var(--l-emerald)" : "var(--l-line)", transform: on ? "translateX(2px)" : "none" }}>
                    <ArrowRight className="size-5 sm:size-6" />
                  </span>
                </button>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ───────── Method — 3 ledger entries ───────── */
export function MethodLedger() {
  const steps = [
    { n: "01", t: "Review", b: "We review your documents and prior returns to understand the full picture." },
    { n: "02", t: "Prepare", b: "We prepare your return or books and flag anything that needs your attention." },
    { n: "03", t: "Reconcile & file", b: "We file on time, keep copies, and stay reachable all year — not just in April." },
  ];
  return (
    <section style={{ background: "var(--l-bg-2)" }}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-24 sm:py-32">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="mt-4 l-serif text-[clamp(32px,5vw,60px)] leading-[1.02] tracking-[-0.02em]" style={{ color: "var(--l-bone)" }}>
          Posted in three entries.
        </h2>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "var(--l-line)" }}>
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="p-8 sm:p-10"
              style={{ background: "var(--l-bg-2)" }}
            >
              <span className="l-mono text-[44px] leading-none font-medium tabular-nums" style={{ color: "var(--l-emerald)" }}>{s.n}</span>
              <h3 className="mt-5 l-serif text-[24px]" style={{ color: "var(--l-bone)" }}>{s.t}</h3>
              <p className="mt-3 text-[14px] leading-[1.65] max-w-xs" style={{ color: "var(--l-bone-dim)" }}>{s.b}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Proof — editorial quotes ───────── */
export function ProofLedger() {
  const [lead, ...rest] = TESTIMONIALS;
  return (
    <section className="l-dark" style={{ background: "var(--l-bg)" }}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-24 sm:py-32">
        <Eyebrow>In their words</Eyebrow>
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.8, ease }}
          className="mt-8 max-w-4xl"
        >
          <p className="l-serif text-[clamp(24px,3.6vw,44px)] leading-[1.22]" style={{ color: "var(--l-bone)" }}>
            <span style={{ color: "var(--l-emerald)" }}>“</span>{lead.quote}<span style={{ color: "var(--l-emerald)" }}>”</span>
          </p>
          <footer className="mt-6 l-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--l-bone-faint)" }}>— {lead.name}</footer>
        </motion.blockquote>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 pt-12 border-t" style={{ borderColor: "var(--l-line)" }}>
          {rest.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
            >
              <p className="text-[16px] leading-[1.7]" style={{ color: "var(--l-bone-dim)" }}>{t.quote}</p>
              <footer className="mt-4 l-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--l-bone-faint)" }}>— {t.name}</footer>
            </motion.blockquote>
          ))}
        </div>
        <p className="mt-12 l-mono text-[10px]" style={{ color: "var(--l-bone-faint)" }}>{FTC_DISCLAIMER}</p>
      </div>
    </section>
  );
}

/* ───────── CTA — emerald glow close ───────── */
export function CtaLedger() {
  return (
    <section style={{ background: "var(--l-bg)" }}>
      <div className="mx-auto max-w-5xl px-5 lg:px-8 py-24 sm:py-28">
        <div className="border-t pt-14" style={{ borderColor: "var(--l-line)" }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, ease }}
            className="l-serif text-[clamp(32px,5vw,62px)] leading-[1.05] tracking-[-0.02em] max-w-3xl"
            style={{ color: "var(--l-bone)" }}
          >
            Let&apos;s get your books{" "}
            <span className="italic" style={{ color: "var(--l-emerald)" }}>in order.</span>
          </motion.h2>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="text-[17px] leading-[1.6] max-w-md" style={{ color: "var(--l-bone-dim)" }}>
              Book a free consultation — we&apos;ll tell you honestly whether we&apos;re a fit
              and what the work would look like.
            </p>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link href="/contact#schedule" className="group inline-flex items-center gap-2 rounded-md px-7 h-12 text-[15px] font-semibold transition-transform hover:-translate-y-0.5" style={{ background: "var(--l-btn)", color: "var(--l-btn-fg)" }}>
                Book a free consultation <ArrowUpRight className="size-4" />
              </Link>
              <a href="tel:+12813912900" className="l-mono text-[13px] uppercase tracking-[0.16em]" style={{ color: "var(--l-bone)" }}>
                (281) 391-2900
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
