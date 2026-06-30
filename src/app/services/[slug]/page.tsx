import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { services, getService } from "@/content/services";
import { serviceAreas } from "@/content/service-areas";
import { COMPANY } from "@/lib/constants";
import { JsonLd } from "@/components/seo/json-ld";
import { serviceLd, breadcrumbLd, faqLd, buildMetadata } from "@/lib/metadata";
import { SectionNumber } from "@/components/typography/section-number";
import { pad2 } from "@/lib/roman";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  return buildMetadata({
    title: service.metaTitle ?? service.title,
    description:
      service.metaDescription ??
      (service.tagline + " " + service.description[0]).slice(0, 158),
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const serviceIndex = services.findIndex((s) => s.slug === service.slug) + 1;
  const related = service.relatedSlugs
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => !!s)
    .slice(0, 3);

  const serviceUrl = `${COMPANY.url}/services/${service.slug}`;

  // Top GEO-matrix cities for this service (P2 localBlurb → P4 matrix pages).
  const matrixCities = serviceAreas.slice(0, 4);

  const jsonLd: object[] = [
    serviceLd({
      name: service.title,
      description: service.tagline,
      url: serviceUrl,
    }),
    breadcrumbLd([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: service.title, url: `/services/${service.slug}` },
    ]),
  ];
  if (service.faqs && service.faqs.length > 0) {
    jsonLd.push(faqLd(service.faqs));
  }

  return (
    <>
      <JsonLd data={jsonLd} />

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
            <Link href="/services" className="hover:text-[var(--color-oxblood)]">
              Services
            </Link>
          </li>
          <li aria-hidden>—</li>
          <li className="text-[var(--color-ink)]" aria-current="page">
            {service.title}
          </li>
        </ol>
      </nav>

      {/* Hero spread */}
      <section className="mx-auto max-w-6xl px-5 lg:px-8 pb-12 sm:pb-16 border-b border-[var(--color-rule)]">
        <SectionNumber n={serviceIndex} label="The Practice" />

        <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <h1
              className="font-display text-[var(--color-ink)]"
              style={{
                fontSize: "clamp(40px, 6vw, 76px)",
                lineHeight: 1.04,
                letterSpacing: "-0.02em",
                fontWeight: 400,
              }}
            >
              {service.title}
            </h1>
            <p className="mt-5 font-display italic text-[20px] sm:text-[22px] leading-[1.4] text-[var(--color-ink-secondary)] max-w-2xl">
              {service.tagline}
            </p>
          </div>
          <aside className="lg:col-span-4 lg:border-l lg:border-[var(--color-rule)] lg:pl-6 lg:pt-2">
            <div className="space-y-5">
              <SidebarBlock label="Filed Under">
                Practice {pad2(serviceIndex)} — {service.title}
              </SidebarBlock>
              <SidebarBlock label="Who It Is For">{service.whoItsFor}</SidebarBlock>
            </div>
          </aside>
        </div>
      </section>

      {/* Editorial body */}
      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <article className="lg:col-span-8">
            <div className="prose-editorial first-letter:hidden">
              {service.description.map((p, i) => (
                <p key={i} className={i === 0 ? "drop-cap" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </article>

          <aside className="lg:col-span-4 lg:border-l lg:border-[var(--color-rule)] lg:pl-6">
            <p className="eyebrow">Includes.</p>
            <ul className="mt-4 space-y-3">
              {service.whatsIncluded.map((item, i) => (
                <li key={item} className="flex gap-3">
                  <span className="font-mono text-[10px] tracking-[0.14em] text-[var(--color-gold-leaf)] pt-1 w-6 shrink-0 tabular-nums">
                    {pad2(i + 1)}.
                  </span>
                  <span className="text-[14px] leading-[1.55] text-[var(--color-ink-secondary)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Estate & Trust UPL warning — regulatory KEEP TEXT */}
      {service.disclaimer?.tone === "warning" && (
        <section className="mx-auto max-w-6xl px-5 lg:px-8 pb-4">
          <aside
            role="note"
            className="border-t-2 border-b-2 border-[var(--color-oxblood)] bg-[var(--color-paper-deep)] py-7 px-7"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-warning)]">
              ⚠ Legal Notice.
            </p>
            <p className="mt-4 font-display italic text-[17px] sm:text-[18px] leading-[1.55] text-[var(--color-ink)] max-w-3xl">
              {service.disclaimer.body}
            </p>
          </aside>
        </section>
      )}

      {/* Process — Roman-numbered vertical sequence */}
      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-16 border-t border-[var(--color-rule)]">
        <SectionNumber n={2} label="How We Work" />
        <h2
          className="mt-5 font-display text-[var(--color-ink)]"
          style={{ fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1.1 }}
        >
          The order of operations.
        </h2>

        <ol className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[var(--color-rule)]">
          {service.process.map((p, i) => (
            <li
              key={p.step}
              className="border-b border-[var(--color-rule)] md:border-b-0 md:border-r last:md:border-r-0 border-[var(--color-rule)] py-8 md:px-7 md:first:pl-0 md:last:pr-0"
            >
              <p className="font-display text-[56px] leading-none text-[var(--color-oxblood)] tracking-tight tabular-nums">
                {pad2(i + 1)}
              </p>
              <h3 className="mt-5 font-display text-[22px] text-[var(--color-ink)] tracking-tight">
                {p.step}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.6] text-[var(--color-ink-secondary)]">
                {p.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Muted-tone disclaimer (IRS Resolution, Tax Planning) */}
      {service.disclaimer?.tone === "muted" && (
        <section className="mx-auto max-w-6xl px-5 lg:px-8 py-2 pb-12">
          <aside
            role="note"
            className="border-t border-[var(--color-oxblood)] py-5 px-1 max-w-3xl"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">
              Practice Note.
            </p>
            <p className="mt-3 font-display italic text-[15px] leading-[1.6] text-[var(--color-ink-secondary)]">
              {service.disclaimer.body}
            </p>
          </aside>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 lg:px-8 py-16 border-t border-[var(--color-rule)]">
          <SectionNumber n={3} label="Adjacent Practices" />
          <ul className="mt-10 grid grid-cols-1 md:grid-cols-3 border-t border-l border-[var(--color-rule)]">
            {related.map((r, i) => (
              <li key={r.slug} className="border-r border-b border-[var(--color-rule)]">
                <Link
                  href={`/services/${r.slug}`}
                  className="group/r block p-7 h-full hover:bg-[var(--color-paper-tint)] transition-colors"
                >
                  <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--color-gold-leaf)] group-hover/r:text-[var(--color-oxblood)] transition-colors tabular-nums">
                    {pad2(i + 1)}.
                  </span>
                  <h3 className="mt-4 font-display text-[20px] text-[var(--color-ink)] tracking-tight">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.55] text-[var(--color-ink-secondary)]">
                    {r.shortDescription}
                  </p>
                  <p className="mt-5 font-display italic text-[12px] text-[var(--color-ink-muted)] group-hover/r:text-[var(--color-oxblood)] transition-colors">
                    View practice →
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Local blurb + GEO-matrix links */}
      {service.localBlurb && (
        <section className="mx-auto max-w-6xl px-5 lg:px-8 py-16 border-t border-[var(--color-rule)]">
          <SectionNumber n={4} label="In Your Area" />
          <p className="mt-7 font-display italic text-[18px] sm:text-[20px] leading-[1.5] text-[var(--color-ink-secondary)] max-w-3xl">
            {service.localBlurb}
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {matrixCities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/${service.slug}-${c.slug}`}
                  className="font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--color-ink)] underline decoration-[var(--color-gold-leaf)] underline-offset-[5px] hover:text-[var(--color-oxblood)]"
                >
                  {service.title} in {c.name} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* FAQ accordion */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 lg:px-8 py-16 border-t border-[var(--color-rule)]">
          <SectionNumber n={5} label="Questions" />
          <h2
            className="mt-5 font-display text-[var(--color-ink)]"
            style={{ fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1.1 }}
          >
            Frequently asked.
          </h2>
          <div className="mt-8 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-[var(--color-rule)]"
                >
                  <AccordionTrigger className="text-left font-display text-[17px] text-[var(--color-ink)]">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] leading-[1.6] text-[var(--color-ink-secondary)]">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* CTA band */}
      <section className="border-t border-b border-[var(--color-rule)] bg-[var(--color-paper-tint)]">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 py-16 text-center space-y-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">
            Ready to proceed?
          </p>
          <h2
            className="font-display text-[var(--color-ink)]"
            style={{ fontSize: "clamp(26px, 3.4vw, 40px)", lineHeight: 1.15 }}
          >
            Schedule a consultation about{" "}
            <span className="italic text-[var(--color-oxblood)]">
              {service.title.toLowerCase()}.
            </span>
          </h2>
          <p className="font-display italic text-[16px] text-[var(--color-ink-secondary)] max-w-xl mx-auto">
            We will tell you honestly whether we are a fit and what the work
            would look like.
          </p>
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

function SidebarBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="eyebrow">{label}.</p>
      <div className="mt-2 font-display text-[15px] leading-[1.55] text-[var(--color-ink-secondary)]">
        {children}
      </div>
    </div>
  );
}
