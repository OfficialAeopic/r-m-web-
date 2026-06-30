import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { services, getService, type Service } from "@/content/services";
import {
  serviceAreas,
  getServiceArea,
  type ServiceArea,
} from "@/content/service-areas";
import { TESTIMONIALS, FTC_DISCLAIMER } from "@/content/testimonials";
import { COMPANY } from "@/lib/constants";
import { JsonLd } from "@/components/seo/json-ld";
import {
  serviceLd,
  localBusinessLd,
  breadcrumbLd,
  faqLd,
  buildMetadata,
} from "@/lib/metadata";
import { SectionNumber } from "@/components/typography/section-number";
import { pad2 } from "@/lib/roman";

// Parse a flat "service-city" matrix slug into a {service, city} pair by
// matching known service slugs as a prefix and city slugs as the remainder.
// Both slugs contain hyphens, so we test each service prefix explicitly.
function parseMatrix(matrix: string): { service: Service; area: ServiceArea } | null {
  for (const service of services) {
    const prefix = service.slug + "-";
    if (matrix.startsWith(prefix)) {
      const citySlug = matrix.slice(prefix.length);
      const area = getServiceArea(citySlug);
      if (area) return { service, area };
    }
  }
  return null;
}

export function generateStaticParams() {
  // Full matrix: every service × every city (unique content per page).
  const params: { matrix: string }[] = [];
  for (const s of services) {
    for (const a of serviceAreas) {
      params.push({ matrix: `${s.slug}-${a.slug}` });
    }
  }
  return params;
}

export const dynamicParams = false; // only pre-generated matrix slugs are valid
export const revalidate = 604800; // ISR: re-statically-generate weekly

export async function generateMetadata({
  params,
}: {
  params: Promise<{ matrix: string }>;
}): Promise<Metadata> {
  const { matrix } = await params;
  const parsed = parseMatrix(matrix);
  if (!parsed) return { title: "Not found" };
  const { service, area } = parsed;
  return buildMetadata({
    title: `${service.title} in ${area.name}, TX | ${COMPANY.name}`,
    description: `${service.title} for ${area.name}, TX (${area.county}). ${service.tagline} R & M Accounting — serving ${area.name} since ${COMPANY.founded}.`.slice(
      0,
      158,
    ),
    path: `/${matrix}`,
  });
}

export default async function MatrixPage({
  params,
}: {
  params: Promise<{ matrix: string }>;
}) {
  const { matrix } = await params;
  const parsed = parseMatrix(matrix);
  if (!parsed) notFound();
  const { service, area } = parsed;

  const url = `${COMPANY.url}/${matrix}`;
  const testimonial = TESTIMONIALS[area.testimonialIndex % TESTIMONIALS.length];

  // Three sibling matrix pages: same service, other nearby cities.
  const siblings = serviceAreas
    .filter((a) => a.slug !== area.slug)
    .slice(0, 3)
    .map((a) => ({ slug: `${service.slug}-${a.slug}`, label: `${service.title} in ${a.name}` }));

  // City-localized FAQ appended to the service FAQs.
  const cityFaq = {
    q: `Do you serve ${area.name}?`,
    a: `Yes — R & M Accounting serves ${area.name} and the surrounding ${area.county} area (${area.neighborhoods
      .slice(0, 3)
      .join(", ")}). ${area.proximity}.`,
  };
  const faqs = [...(service.faqs ?? []), cityFaq];

  const jsonLd: object[] = [
    serviceLd({ name: `${service.title} in ${area.name}`, description: service.tagline, url }),
    localBusinessLd({ serviceName: service.title, cityName: area.name, url }),
    breadcrumbLd([
      { name: "Home", url: "/" },
      { name: "Service Areas", url: "/service-areas" },
      { name: area.name, url: `/service-areas/${area.slug}` },
      { name: `${service.title} in ${area.name}`, url: `/${matrix}` },
    ]),
    faqLd(faqs),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-5 lg:px-8 pt-10 pb-4">
        <ol className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-muted)]">
          <li><Link href="/" className="hover:text-[var(--color-oxblood)]">Home</Link></li>
          <li aria-hidden>—</li>
          <li><Link href={`/service-areas/${area.slug}`} className="hover:text-[var(--color-oxblood)]">{area.name}</Link></li>
          <li aria-hidden>—</li>
          <li className="text-[var(--color-ink)]" aria-current="page">{service.title}</li>
        </ol>
      </nav>

      {/* Hero + unique local intro */}
      <section className="mx-auto max-w-6xl px-5 lg:px-8 pb-12 sm:pb-16 border-b border-[var(--color-rule)]">
        <SectionNumber n={1} label={`Serving ${area.name}, TX`} />
        <h1
          className="mt-7 font-display text-[var(--color-ink)]"
          style={{ fontSize: "clamp(36px, 5.5vw, 68px)", lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 400 }}
        >
          {service.title} in {area.name}, TX
        </h1>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 prose-editorial">
            <p className="drop-cap">
              R &amp; M Accounting brings {service.title.toLowerCase()} to {area.name} and the
              wider {area.county} community — from {area.neighborhoods[0]} and{" "}
              {area.neighborhoods[1]} to the families and businesses near{" "}
              {area.landmarks[0]} and {area.landmarks[1]}. {area.proximity}, so working with a
              seasoned local firm has never been simpler.
            </p>
            <p>
              {service.description[0]} Whether you&apos;re in {area.neighborhoods[2] ?? area.name}{" "}
              or anywhere across the {area.zips[0]} area, we&apos;ve served {area.name}-area
              clients with the same year-round, personal attention since {COMPANY.founded}.
            </p>
          </div>
          <aside className="lg:col-span-4 lg:border-l lg:border-[var(--color-rule)] lg:pl-6 space-y-5">
            <div>
              <p className="eyebrow">County.</p>
              <p className="mt-2 font-display text-[15px] text-[var(--color-ink-secondary)]">{area.county}</p>
            </div>
            <div>
              <p className="eyebrow">Neighborhoods.</p>
              <p className="mt-2 text-[13px] leading-[1.55] text-[var(--color-ink-secondary)]">{area.neighborhoods.join(" · ")}</p>
            </div>
            <div>
              <p className="eyebrow">ZIP codes.</p>
              <p className="mt-2 font-mono text-[12px] text-[var(--color-ink-secondary)]">{area.zips.join(", ")}</p>
            </div>
          </aside>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-14 border-b border-[var(--color-rule)]">
        <SectionNumber n={2} label="What's Included" />
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
          {service.whatsIncluded.map((item, i) => (
            <li key={item} className="flex gap-3">
              <span className="font-mono text-[10px] tracking-[0.14em] text-[var(--color-gold-leaf)] pt-1 w-6 shrink-0 tabular-nums">{pad2(i + 1)}.</span>
              <span className="text-[14px] leading-[1.55] text-[var(--color-ink-secondary)]">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* UPL/disclaimer (inherited from service) */}
      {service.disclaimer?.tone === "warning" && (
        <section className="mx-auto max-w-6xl px-5 lg:px-8 py-6">
          <aside role="note" className="border-t-2 border-b-2 border-[var(--color-oxblood)] bg-[var(--color-paper-deep)] py-7 px-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-warning)]">⚠ Legal Notice.</p>
            <p className="mt-4 font-display italic text-[17px] leading-[1.55] text-[var(--color-ink)] max-w-3xl">{service.disclaimer.body}</p>
          </aside>
        </section>
      )}

      {/* Local trust + testimonial */}
      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-14 border-b border-[var(--color-rule)]">
        <SectionNumber n={3} label="Trusted Locally" />
        <blockquote className="mt-8 max-w-3xl">
          <p className="font-display italic text-[20px] sm:text-[24px] leading-[1.5] text-[var(--color-ink)]">“{testimonial.quote}”</p>
          <footer className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-ink-muted)]">— {testimonial.name}</footer>
        </blockquote>
        <p className="mt-4 text-[11px] text-[var(--color-ink-muted)] italic">{FTC_DISCLAIMER}</p>
      </section>

      {/* FAQ (service + city-localized) */}
      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-14 border-b border-[var(--color-rule)]">
        <SectionNumber n={4} label="Questions" />
        <div className="mt-8 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-[var(--color-rule)]">
                <AccordionTrigger className="text-left font-display text-[17px] text-[var(--color-ink)]">{f.q}</AccordionTrigger>
                <AccordionContent className="text-[14px] leading-[1.6] text-[var(--color-ink-secondary)]">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Internal links: service hub, city hub, siblings */}
      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-12 border-b border-[var(--color-rule)]">
        <p className="eyebrow">Explore.</p>
        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[12px] uppercase tracking-[0.14em]">
          <li><Link href={`/services/${service.slug}`} className="underline decoration-[var(--color-gold-leaf)] underline-offset-[5px] hover:text-[var(--color-oxblood)]">All {service.title} →</Link></li>
          <li><Link href={`/service-areas/${area.slug}`} className="underline decoration-[var(--color-gold-leaf)] underline-offset-[5px] hover:text-[var(--color-oxblood)]">Services in {area.name} →</Link></li>
          {siblings.map((s) => (
            <li key={s.slug}><Link href={`/${s.slug}`} className="underline decoration-[var(--color-gold-leaf)] underline-offset-[5px] hover:text-[var(--color-oxblood)]">{s.label} →</Link></li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-paper-tint)]">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 py-16 text-center space-y-6">
          <h2 className="font-display text-[var(--color-ink)]" style={{ fontSize: "clamp(26px, 3.4vw, 40px)", lineHeight: 1.15 }}>
            {service.title} for <span className="italic text-[var(--color-oxblood)]">{area.name}</span>.
          </h2>
          <p className="font-display italic text-[16px] text-[var(--color-ink-secondary)] max-w-xl mx-auto">
            Request a consultation and we&apos;ll tell you honestly whether we&apos;re a fit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4 pt-2">
            <Button asChild className="bg-[var(--color-oxblood)] text-[var(--color-paper)] hover:bg-[var(--color-oxblood-hover)] rounded-none h-12 px-7 font-sans tracking-wide">
              <Link href={`/contact?service=${service.slug}&city=${area.slug}`}>Request a consultation</Link>
            </Button>
            <a href={`tel:${COMPANY.phoneTel}`} className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-ink)] underline decoration-[var(--color-oxblood)] underline-offset-[6px]">
              Or call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
