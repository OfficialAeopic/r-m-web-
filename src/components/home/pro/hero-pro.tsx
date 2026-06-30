import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { HoustonSkyline } from "@/components/ornament/houston-skyline";

// Cinematic navy hero (Meridian redesign). Server component; entrance is
// CSS-only (.m-rise + staggered animation-delay) so it works without JS.
export function HeroPro() {
  return (
    <section className="relative overflow-hidden m-hero-bg m-grain isolate">
      {/* hairline ledger grid, masked toward the top-right */}
      <div aria-hidden className="absolute inset-0 m-grid-lines" />
      {/* faint Houston skyline silhouette along the base */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] flex items-end opacity-[0.16]"
        style={{ color: "var(--m-blue-soft)" }}
      >
        <HoustonSkyline className="w-full" />
      </div>
      {/* bottom fade into the next (white) section */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(6,15,28,0.0))" }}
      />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
        {/* Badge */}
        <div
          className="m-rise inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
          style={{ borderColor: "var(--m-line-dark)", animationDelay: "0.05s" }}
        >
          <span className="size-1.5 rounded-full" style={{ background: "var(--m-blue-soft)" }} />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: "var(--m-paper-dim)" }}>
            Houston, Texas · Family-Stewarded Since 1981
          </span>
        </div>

        {/* Headline */}
        <h1 className="mt-8 max-w-4xl text-white" style={{ fontFamily: "var(--font-sans)" }}>
          <span
            className="m-script m-rise block text-[clamp(34px,5vw,56px)] leading-[0.8] -mb-2 ml-1"
            style={{ color: "var(--m-blue-soft)", animationDelay: "0.12s" }}
          >
            Fast,
          </span>
          <span
            className="m-rise block font-extrabold tracking-[-0.02em] text-[clamp(40px,7.2vw,88px)] leading-[1.02]"
            style={{ animationDelay: "0.2s" }}
          >
            Accurate, and Reliable
          </span>
          <span
            className="m-rise block font-extrabold tracking-[-0.02em] text-[clamp(40px,7.2vw,88px)] leading-[1.02]"
            style={{ animationDelay: "0.3s" }}
          >
            Tax &amp; Accounting for
          </span>
          <span
            className="m-rise block font-extrabold tracking-[-0.02em] text-[clamp(40px,7.2vw,88px)] leading-[1.05]"
            style={{ animationDelay: "0.4s" }}
          >
            the{" "}
            <span
              className="italic font-normal"
              style={{ fontFamily: "var(--font-display)", color: "var(--m-blue-soft)" }}
            >
              Long Haul.
            </span>
          </span>
        </h1>

        {/* Subcopy */}
        <p
          className="m-rise mt-7 max-w-xl text-[17px] leading-[1.6]"
          style={{ color: "var(--m-paper-dim)", animationDelay: "0.5s", fontFamily: "var(--font-display)" }}
        >
          For 45 years, Houston families and small businesses have trusted R&nbsp;&amp;&nbsp;M
          Accounting to handle the work that keeps their numbers right and their stress low.
          Personal attention, year-round.
        </p>

        {/* CTAs */}
        <div className="m-rise mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.6s" }}>
          <Link
            href="/contact#schedule"
            className="group inline-flex items-center gap-2 rounded-lg px-6 h-12 text-[15px] font-semibold text-white transition-colors"
            style={{ background: "var(--m-blue)" }}
          >
            Book a Free Consultation
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg px-6 h-12 text-[15px] font-medium text-white/90 border transition-colors hover:bg-white/5"
            style={{ borderColor: "var(--m-line-dark)" }}
          >
            Browse Services
          </Link>
          <a
            href="tel:+12813912900"
            className="inline-flex items-center gap-2 text-[13px] font-mono uppercase tracking-[0.14em]"
            style={{ color: "var(--m-paper-faint)" }}
          >
            <Phone className="size-3.5" /> (281) 391-2900
          </a>
        </div>

        {/* Stat row */}
        <dl
          className="m-rise mt-16 grid grid-cols-3 gap-px max-w-2xl rounded-xl overflow-hidden border"
          style={{ borderColor: "var(--m-line-dark)", background: "var(--m-line-dark)", animationDelay: "0.72s" }}
        >
          <Stat n="45" label="Years in Houston" />
          <Stat n="1981" label="Family-stewarded since" />
          <Stat n="365" label="Days a year — not seasonal" />
        </dl>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="px-5 py-5" style={{ background: "rgba(255,255,255,0.02)" }}>
      <dt className="font-extrabold text-white text-[30px] sm:text-[36px] leading-none tabular-nums">
        {n}
      </dt>
      <dd className="mt-2 text-[11px] leading-snug" style={{ color: "var(--m-paper-faint)" }}>
        {label}
      </dd>
    </div>
  );
}
