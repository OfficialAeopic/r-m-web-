import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { serviceAreas } from "@/content/service-areas";
import { COMPANY } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { SectionNumber } from "@/components/typography/section-number";
import { pad2 } from "@/lib/roman";

export const metadata: Metadata = buildMetadata({
  title: "Service Areas — Houston Tax Preparation",
  description:
    "R & M Accounting serves Houston and the surrounding communities — Cypress, Katy, Spring, Tomball, and more — from our Greenhouse Rd office since 1981.",
  path: "/service-areas",
});

export default function ServiceAreasHubPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-[var(--color-rule)]">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 pt-16 pb-12">
          <SectionNumber n={3} label="Service Areas" />
          <div className="mt-7 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
            <h1
              className="font-display text-[var(--color-ink)]"
              style={{
                fontSize: "clamp(44px, 6.8vw, 88px)",
                lineHeight: 1.02,
                letterSpacing: "-0.025em",
                fontWeight: 380,
              }}
            >
              Serving the{" "}
              <span className="italic text-[var(--color-oxblood)]">
                greater Houston area.
              </span>
            </h1>
            <p className="font-display italic text-[18px] leading-[1.55] text-[var(--color-ink-secondary)] max-w-md">
              From our Greenhouse Road office since 1981. Whether you are
              in Cypress, Katy, Spring, or anywhere across the west side, we
              are a short drive — or a phone call — away.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--color-rule)]">
          {serviceAreas.map((a, i) => (
            <li key={a.slug} className="border-r border-b border-[var(--color-rule)]">
              <Link
                href={`/service-areas/${a.slug}`}
                className="group/area h-full flex flex-col p-7 sm:p-8 hover:bg-[var(--color-paper-tint)] transition-colors"
              >
                <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--color-gold-leaf)] group-hover/area:text-[var(--color-oxblood)] transition-colors tabular-nums">
                  {pad2(i + 1)}.
                </span>
                <h2
                  className="mt-6 font-display text-[var(--color-ink)] tracking-tight"
                  style={{ fontSize: "32px", lineHeight: 1.05, fontWeight: 420 }}
                >
                  {a.name}
                </h2>
                <p className="mt-3 font-display italic text-[14px] leading-[1.45] text-[var(--color-oxblood)]/85">
                  {a.proximity}
                </p>
                <div className="mt-auto pt-6 border-t border-[var(--color-rule-soft)] flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-muted)] tabular-nums">
                    Area {pad2(i + 1)}
                  </span>
                  <span className="font-display italic text-[12px] text-[var(--color-ink-muted)] group-hover/area:text-[var(--color-oxblood)] transition-colors">
                    Visit →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="border-t border-b border-[var(--color-rule)] bg-[var(--color-paper-tint)]">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 py-16 text-center space-y-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]">
            Not Sure If We Serve Your Area?
          </p>
          <h2
            className="font-display text-[var(--color-ink)]"
            style={{ fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1.1 }}
          >
            Give us a call —{" "}
            <span className="italic text-[var(--color-oxblood)]">
              chances are, yes.
            </span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4 pt-2">
            <Button
              asChild
              className="bg-[var(--color-oxblood)] text-[var(--color-paper)] hover:bg-[var(--color-oxblood-hover)] rounded-none h-12 px-7 font-sans tracking-wide"
            >
              <Link href="/contact#schedule">Schedule a consultation</Link>
            </Button>
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-ink)] underline decoration-[var(--color-oxblood)] underline-offset-[6px]"
            >
              Or call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
