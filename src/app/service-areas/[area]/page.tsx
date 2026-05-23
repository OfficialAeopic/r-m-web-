import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { serviceAreas, getServiceArea } from "@/content/service-areas";
import { services } from "@/content/services";
import { TESTIMONIALS, FTC_DISCLAIMER } from "@/content/testimonials";
import { COMPANY } from "@/lib/constants";
import { JsonLd } from "@/components/seo/json-ld";
import { serviceLd, breadcrumbLd, buildMetadata } from "@/lib/metadata";
import { SectionNumber } from "@/components/typography/section-number";
import { PullQuote } from "@/components/typography/pull-quote";
import { NeighborhoodMap } from "@/components/ornament/neighborhood-map";
import { pad2 } from "@/lib/roman";

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area } = await params;
  const a = getServiceArea(area);
  if (!a) return { title: "Service area not found" };
  return buildMetadata({
    title: `${a.name} Tax Preparation & Accounting`,
    description:
      `${a.name} tax preparation, bookkeeping, payroll, and accounting from R & M Accounting. Serving ${a.name} since 1981.`.slice(
        0,
        158
      ),
    path: `/service-areas/${a.slug}`,
  });
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area } = await params;
  const a = getServiceArea(area);
  if (!a) notFound();

  const areaIndex = serviceAreas.findIndex((x) => x.slug === a.slug) + 1;
  const testimonial = TESTIMONIALS[a.testimonialIndex % TESTIMONIALS.length];
  const areaUrl = `${COMPANY.url}/service-areas/${a.slug}`;

  return (
    <>
      <JsonLd
        data={[
          serviceLd({
            name: `${a.name} Tax Preparation & Accounting`,
            description: a.description,
            url: areaUrl,
          }),
          breadcrumbLd([
            { name: "Home", url: "/" },
            { name: "Service Areas", url: "/service-areas" },
            { name: a.name, url: `/service-areas/${a.slug}` },
          ]),
        ]}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-6xl px-5 lg:px-8 pt-10 pb-4"
      >
        <ol className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-muted)]">
          <li>
            <Link href="/" className="hover:text-[var(--color-oxblood)]">
              Home
            </Link>
          </li>
          <li aria-hidden>—</li>
          <li>
            <Link href="/service-areas" className="hover:text-[var(--color-oxblood)]">
              Service Areas
            </Link>
          </li>
          <li aria-hidden>—</li>
          <li className="text-[var(--color-ink)]" aria-current="page">
            {a.name}
          </li>
        </ol>
      </nav>

      {/* Hero spread */}
      <section className="mx-auto max-w-6xl px-5 lg:px-8 pb-12 border-b border-[var(--color-rule)]">
        <SectionNumber n={areaIndex} label="Service Area" />

        <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h1
              className="font-display text-[var(--color-ink)]"
              style={{
                fontSize: "clamp(44px, 7vw, 92px)",
                lineHeight: 1.02,
                letterSpacing: "-0.025em",
                fontWeight: 380,
              }}
            >
              {a.name}.
            </h1>
            <p className="mt-5 font-display italic text-[20px] sm:text-[22px] leading-[1.45] text-[var(--color-ink-secondary)] max-w-xl">
              {a.proximity}
            </p>
            <p className="mt-7 text-[15px] leading-[1.7] text-[var(--color-ink-secondary)] max-w-2xl">
              {a.description}
            </p>
          </div>

          <div className="lg:col-span-5 lg:border-l lg:border-[var(--color-rule)] lg:pl-6">
            <p className="eyebrow">Map.</p>
            <div className="mt-3 text-[var(--color-ink)] border border-[var(--color-rule)] bg-[var(--color-paper-tint)]">
              <NeighborhoodMap areaName={a.name} className="w-full block" />
            </div>
            <p className="mt-3 font-display italic text-[12px] text-[var(--color-ink-muted)]">
              {a.name} relative to our Greenhouse Rd office.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-4xl px-5 lg:px-8 py-14">
        <SectionNumber n={2} label="Correspondence Received" align="center" />
        <PullQuote
          attribution={testimonial.name}
          caption={FTC_DISCLAIMER}
          className="mt-8 text-center"
        >
          {testimonial.quote}
        </PullQuote>
      </section>

      {/* Services available */}
      <section className="border-t border-[var(--color-rule)] bg-[var(--color-paper-tint)]">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 py-16">
          <SectionNumber n={3} label="Available in This Area" />
          <h2
            className="mt-5 font-display text-[var(--color-ink)]"
            style={{ fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1.1 }}
          >
            The full lineup of practices.
          </h2>

          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[var(--color-rule)]">
            {services.map((s, i) => (
              <li
                key={s.slug}
                className="border-r border-b border-[var(--color-rule)] bg-[var(--color-paper)]"
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="group/svc block p-6 h-full hover:bg-[var(--color-paper-tint)] transition-colors"
                >
                  <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-gold-leaf)] group-hover/svc:text-[var(--color-oxblood)] transition-colors tabular-nums">
                    {pad2(i + 1)}.
                  </span>
                  <h3 className="mt-3 font-display text-[18px] text-[var(--color-ink)] tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[12px] leading-[1.55] text-[var(--color-ink-secondary)]">
                    {s.shortDescription.slice(0, 92)}…
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA band */}
      <section className="border-t border-b border-[var(--color-rule)]">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 py-16 text-center space-y-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">
            Ready to work with a local firm?
          </p>
          <h2
            className="font-display text-[var(--color-ink)]"
            style={{ fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1.1 }}
          >
            Whether you are in {a.name}, or anywhere{" "}
            <span className="italic text-[var(--color-oxblood)]">
              across the west side,
            </span>{" "}
            we are a phone call away.
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

      {/* Other areas */}
      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-12">
        <p className="eyebrow">Adjacent Areas.</p>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
          {serviceAreas
            .filter((other) => other.slug !== a.slug)
            .map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/service-areas/${other.slug}`}
                  className="font-display text-[16px] text-[var(--color-ink)] hover:text-[var(--color-oxblood)] underline decoration-[var(--color-rule)] underline-offset-[4px] hover:decoration-[var(--color-oxblood)] transition-colors"
                >
                  {other.name}
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}
