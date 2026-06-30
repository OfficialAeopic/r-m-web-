"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { CountUp, FigureRain, Tape } from "./bits";

const HEAD_TOP = ["We", "keep", "Houston's"];
const HEAD_BOT = ["books"];

const ease = [0.16, 1, 0.3, 1] as const;

export function HeroLedger() {
  return (
    <section className="l-dark relative overflow-hidden l-glow-bg l-grain isolate">
      {/* Background video (muted, autoplay, looped). l-glow-bg shows underneath
          as a fallback until it loads / if it fails. */}
      <video
        aria-hidden
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
      >
        <source src="/herobg.mp4" type="video/mp4" />
      </video>
      {/* Navy scrim + blue glow over the video — keeps the headline + ledger
          panel legible and preserves the theme's gradient. */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px 620px at 82% 14%, rgba(46,107,230,0.22), transparent 60%), linear-gradient(180deg, rgba(7,16,30,0.58) 0%, rgba(7,16,30,0.74) 58%, rgba(6,15,28,0.92) 100%)",
        }}
      />

      <FigureRain columns={16} />
      <div aria-hidden className="absolute inset-0 l-grid-bg opacity-40" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-0 sm:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.9fr] gap-12 lg:gap-16 items-center min-h-[64vh]">
          {/* Left — headline */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="l-mono text-[11px] uppercase tracking-[0.28em]"
              style={{ color: "var(--l-emerald)" }}
            >
              Est. 1981 · Houston, Texas
            </motion.p>

            <h1 className="mt-6 l-serif text-[clamp(44px,7.4vw,96px)] leading-[0.98] tracking-[-0.02em]" style={{ color: "var(--l-bone)" }}>
              <span className="block">
                {HEAD_TOP.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease }}
                    className="inline-block mr-[0.22em]"
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
              <span className="block">
                {HEAD_BOT.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.34 + i * 0.08, ease }}
                    className="inline-block mr-[0.22em]"
                  >
                    {w}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease }}
                  className="italic"
                  style={{ color: "var(--l-emerald)" }}
                >
                  in order.
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease }}
              className="mt-7 max-w-lg text-[17px] leading-[1.65]"
              style={{ color: "var(--l-bone-dim)" }}
            >
              For 45 years, Houston families and small businesses have trusted
              R&nbsp;&amp;&nbsp;M Accounting to keep their numbers right, their
              filings on time, and their stress low — every month, all year.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.82, ease }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact#schedule"
                className="group inline-flex items-center gap-2 rounded-md px-6 h-12 text-[15px] font-semibold transition-transform hover:-translate-y-0.5"
                style={{ background: "var(--l-btn)", color: "var(--l-btn-fg)" }}
              >
                Book a free consultation
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-md px-6 h-12 text-[15px] font-medium border transition-colors hover:bg-white/5"
                style={{ borderColor: "var(--l-line)", color: "var(--l-bone)" }}
              >
                Explore services
              </Link>
              <a
                href="tel:+12813912900"
                className="inline-flex items-center gap-2 l-mono text-[12px] uppercase tracking-[0.14em]"
                style={{ color: "var(--l-bone-faint)" }}
              >
                <Phone className="size-3.5" /> (281) 391-2900
              </a>
            </motion.div>
          </div>

          {/* Right — live ledger readout */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease }}
            className="relative rounded-2xl border p-6 sm:p-7 backdrop-blur-sm"
            style={{ borderColor: "var(--l-line)", background: "rgba(46,107,230,0.10)" }}
          >
            <div className="flex items-center justify-between">
              <span className="l-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: "var(--l-bone-faint)" }}>
                The R &amp; M Ledger
              </span>
              <span className="flex items-center gap-1.5 l-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: "var(--l-emerald)" }}>
                <span className="size-1.5 rounded-full l-pulse" style={{ background: "var(--l-emerald)" }} /> Open
              </span>
            </div>

            <div className="mt-5 space-y-px rounded-lg overflow-hidden" style={{ background: "var(--l-line)" }}>
              <ReadoutRow label="Returns filed" value={<CountUp to={11400} suffix="+" />} />
              <ReadoutRow label="Years balancing the books" value={<CountUp to={45} />} />
              <ReadoutRow label="Days a year we answer" value={<CountUp to={365} />} />
              <ReadoutRow
                label="Reconciled, to the cent"
                value={<><CountUp to={100} />%</>}
                accent
              />
            </div>

            <p className="mt-5 l-mono text-[10px] leading-relaxed" style={{ color: "var(--l-bone-faint)" }}>
              <span style={{ color: "var(--l-emerald)" }}>&gt;</span> entry posted · books in balance
              <span className="l-caret" style={{ color: "var(--l-emerald)" }}>_</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Adding-machine tape */}
      <div className="relative mt-12">
        <Tape
          items={[
            "Tax Preparation", "Bookkeeping", "Payroll", "IRS Resolution",
            "Tax Planning", "Sales & Use Tax", "Business Formation", "ITIN / W-7",
            "Audit Representation", "Financial Statements", "QuickBooks",
          ]}
        />
      </div>
    </section>
  );
}

function ReadoutRow({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div
      className="flex items-baseline justify-between gap-4 px-4 py-3"
      style={{ background: "rgba(7,16,30,0.66)" }}
    >
      <span className="text-[13px]" style={{ color: "var(--l-bone-dim)" }}>{label}</span>
      <span
        className="l-mono text-[22px] sm:text-[26px] font-medium tabular-nums"
        style={{ color: accent ? "var(--l-emerald)" : "var(--l-bone)" }}
      >
        {value}
      </span>
    </div>
  );
}
