import Link from "next/link";
import {
  ArrowRight,
  Clock,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { TESTIMONIALS, FTC_DISCLAIMER } from "@/content/testimonials";
import { COMPANY } from "@/lib/constants";

const yearsInBusiness = new Date().getFullYear() - COMPANY.founded;

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--m-blue)" }}>
      {children}
    </p>
  );
}

/* ───────────────────────── Why R&M ─────────────────────────
   De-boxed: a hairline-divided list (no cards). */
export function WhyPro() {
  const points = [
    { icon: Clock, title: `Serving since ${COMPANY.founded}`, body: `${yearsInBusiness} years preparing returns and keeping books for Houston families and businesses.` },
    { icon: MapPin, title: "Local & year-round", body: "Not a seasonal pop-up. We're on Greenhouse Rd all year for questions, notices, and planning." },
    { icon: ShieldCheck, title: "Secure client portal", body: "Upload documents, sign forms, and message your preparer — protected with bank-grade encryption." },
  ];
  return (
    <section style={{ background: "var(--m-mist)" }}>
      <div className="mx-auto max-w-6xl px-5 lg:px-8 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
        <div>
          <Eyebrow>Why R &amp; M</Eyebrow>
          <h2
            className="mt-3 font-extrabold tracking-[-0.02em] text-[clamp(28px,4vw,46px)] leading-[1.08]"
            style={{ color: "var(--m-ink)" }}
          >
            A firm that&apos;s still here when you call in{" "}
            <span className="italic font-normal" style={{ fontFamily: "var(--font-display)", color: "var(--m-blue)" }}>
              July.
            </span>
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-[1.7]" style={{ color: "var(--m-body)" }}>
            R&nbsp;&amp;&nbsp;M has been at the same Houston address since 1981. You work directly
            with people who know your file — not a different name every season. Honest answers,
            careful work, and a real human on the other end of the phone.
          </p>
          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-1.5 text-[14px] font-semibold"
            style={{ color: "var(--m-blue)" }}
          >
            Our story <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Hairline-divided list — no boxes */}
        <ul className="divide-y" style={{ borderColor: "var(--m-line)" }}>
          {points.map((p, i) => (
            <li key={p.title} className="flex gap-5 py-6 first:pt-0" style={{ borderColor: "var(--m-line)" }}>
              <span className="font-mono text-[12px] tabular-nums pt-1.5 w-6 shrink-0" style={{ color: "var(--m-blue)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p.icon className="size-5 shrink-0 mt-1" style={{ color: "var(--m-blue)" }} />
              <div>
                <h3 className="text-[17px] font-bold" style={{ color: "var(--m-ink)" }}>{p.title}</h3>
                <p className="mt-1 text-[14px] leading-[1.6]" style={{ color: "var(--m-body)" }}>{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────────────────────── Process ─────────────────────────
   Borderless numbered columns separated by hairlines (no cards). */
export function ProcessPro() {
  const steps = [
    { n: "01", title: "Review", body: "We review your documents and prior returns to understand the full picture." },
    { n: "02", title: "Prepare", body: "We prepare your return or books and flag anything that needs your attention." },
    { n: "03", title: "File & follow up", body: "We file on time, keep copies, and stay reachable all year for questions." },
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 py-20 sm:py-28">
        <Eyebrow>How it works</Eyebrow>
        <h2
          className="mt-3 font-extrabold tracking-[-0.02em] text-[clamp(28px,4vw,46px)] leading-[1.05]"
          style={{ color: "var(--m-ink)" }}
        >
          Simple, start to finish.
        </h2>
        <ol className="mt-14 grid grid-cols-1 md:grid-cols-3 border-t" style={{ borderColor: "var(--m-line)" }}>
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="py-8 md:pr-10 md:pl-10 first:md:pl-0 border-b md:border-b-0 md:border-l first:md:border-l-0"
              style={{ borderColor: "var(--m-line)" }}
            >
              <span className="font-extrabold text-[44px] tabular-nums leading-none" style={{ color: "var(--m-blue)" }}>{s.n}</span>
              <h3 className="mt-5 text-[20px] font-bold" style={{ color: "var(--m-ink)" }}>{s.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.6] max-w-xs" style={{ color: "var(--m-body)" }}>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ───────────────────────── Testimonials ─────────────────────────
   Editorial: one large lead quote + supporting quotes, hairline-separated. */
export function TestimonialsPro() {
  const [lead, ...rest] = TESTIMONIALS;
  return (
    <section style={{ background: "var(--m-navy)" }} className="m-hero-bg m-grain relative isolate overflow-hidden">
      <div aria-hidden className="absolute inset-0 m-grid-lines" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8 py-20 sm:py-28">
        <Eyebrow>In their words</Eyebrow>

        <blockquote className="mt-8 max-w-4xl">
          <p
            className="text-[clamp(24px,3.4vw,40px)] leading-[1.25] font-medium text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span style={{ color: "var(--m-blue-soft)" }}>“</span>
            {lead.quote}
            <span style={{ color: "var(--m-blue-soft)" }}>”</span>
          </p>
          <footer className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: "var(--m-paper-faint)" }}>
            — {lead.name}
          </footer>
        </blockquote>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 pt-10 border-t" style={{ borderColor: "var(--m-line-dark)" }}>
          {rest.map((t) => (
            <blockquote key={t.name}>
              <p className="text-[16px] leading-[1.65]" style={{ color: "var(--m-paper-dim)" }}>
                {t.quote}
              </p>
              <footer className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: "var(--m-paper-faint)" }}>
                — {t.name}
              </footer>
            </blockquote>
          ))}
        </div>

        <p className="mt-12 text-[11px]" style={{ color: "var(--m-paper-faint)" }}>{FTC_DISCLAIMER}</p>
      </div>
    </section>
  );
}

/* ───────────────────────── Final CTA ───────────────────────── */
export function CtaPro() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative mx-auto max-w-5xl px-5 lg:px-8 py-24 sm:py-28">
        <div className="border-t pt-14" style={{ borderColor: "var(--m-line)" }}>
          <h2
            className="font-extrabold tracking-[-0.02em] text-[clamp(30px,4.8vw,58px)] leading-[1.05] max-w-3xl"
            style={{ color: "var(--m-ink)" }}
          >
            Let&apos;s get your numbers{" "}
            <span className="italic font-normal" style={{ fontFamily: "var(--font-display)", color: "var(--m-blue)" }}>
              right.
            </span>
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="text-[17px] leading-[1.6] max-w-md" style={{ color: "var(--m-body)", fontFamily: "var(--font-display)" }}>
              Book a free consultation and we&apos;ll tell you honestly whether we&apos;re a fit
              and what the work would look like.
            </p>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/contact#schedule"
                className="group inline-flex items-center gap-2 rounded-lg px-7 h-12 text-[15px] font-semibold text-white"
                style={{ background: "var(--m-blue)" }}
              >
                Book a Free Consultation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="tel:+12813912900"
                className="inline-flex items-center text-[14px] font-mono uppercase tracking-[0.14em]"
                style={{ color: "var(--m-ink)" }}
              >
                (281) 391-2900
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
