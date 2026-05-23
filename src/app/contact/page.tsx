import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { ContactForm } from "./contact-form";
import { buildMetadata } from "@/lib/metadata";
import { SectionNumber } from "@/components/typography/section-number";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with R & M Accounting in Houston. Call (281) 391-2900, email rmaccounting@rmtax.org, or send us a message.",
  path: "/contact",
});

const MAP_EMBED =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(COMPANY.address.full) +
  "&output=embed";

const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(COMPANY.address.full);

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-[var(--color-rule)]">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 pt-16 pb-12">
          <SectionNumber n={4} label="Correspondence" />
          <div className="mt-7 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-end">
            <h1
              className="font-display text-[var(--color-ink)]"
              style={{
                fontSize: "clamp(48px, 7vw, 92px)",
                lineHeight: 1.02,
                letterSpacing: "-0.025em",
                fontWeight: 380,
              }}
            >
              Get in touch.
            </h1>
            <p className="font-display italic text-[18px] leading-[1.55] text-[var(--color-ink-secondary)] max-w-md">
              By telephone, by post, or by correspondence card. We respond
              within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Card */}
      <section
        id="schedule"
        className="mx-auto max-w-6xl px-5 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16"
      >
        {/* Left — Form */}
        <div>
          <p className="eyebrow mb-7">Submit a Message.</p>
          <ContactForm />
        </div>

        {/* Right — Address card */}
        <aside>
          <div className="border-t-2 border-[var(--color-oxblood)] border-b border-[var(--color-rule)] border-l border-r bg-[var(--color-paper-tint)] p-7 space-y-7">
            <AddressLine label="Office">
              {COMPANY.address.street}
              <br />
              {COMPANY.address.city}, {COMPANY.address.state}{" "}
              {COMPANY.address.zip}
            </AddressLine>
            <AddressLine label="Telephone" href={`tel:${COMPANY.phoneTel}`}>
              {COMPANY.phone}
            </AddressLine>
            <AddressLine label="Correspondence" href={`mailto:${COMPANY.email}`}>
              {COMPANY.email}
            </AddressLine>
            <AddressLine label="Hours">
              Monday — Friday
              <br />
              9:00 — 17:00
            </AddressLine>
            <div className="pt-3 border-t border-[var(--color-rule-soft)]">
              <p className="font-display italic text-[12px] leading-[1.5] text-[var(--color-ink-muted)]">
                Extended hours available during tax season,
                January through April.
              </p>
            </div>
          </div>
        </aside>
      </section>

      {/* Map */}
      <section className="border-t border-[var(--color-rule)] bg-[var(--color-paper-tint)]">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 py-14">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Visit.</p>
              <h2
                className="mt-3 font-display text-[var(--color-ink)] tracking-tight"
                style={{ fontSize: "clamp(24px, 3.2vw, 36px)", lineHeight: 1.15 }}
              >
                {COMPANY.address.full}
              </h2>
            </div>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-ink)] underline decoration-[var(--color-oxblood)] underline-offset-[5px] hover:decoration-[2px]"
            >
              Open in Google Maps →
            </a>
          </div>
          <figure className="border border-[var(--color-rule)] bg-[var(--color-paper)]">
            <iframe
              src={MAP_EMBED}
              width="100%"
              height={360}
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="R & M Accounting office location"
            />
            <figcaption className="px-5 py-3 border-t border-[var(--color-rule)] flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-muted)]">
              <span>Map. — Suite 219, second floor.</span>
              <span>Greenhouse Rd &amp; Hwy 6.</span>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}

function AddressLine({
  label,
  children,
  href,
}: {
  label: string;
  children: React.ReactNode;
  href?: string;
}) {
  const inner = (
    <span className="font-display text-[17px] leading-[1.4] text-[var(--color-ink)]">
      {children}
    </span>
  );
  return (
    <div>
      <p className="eyebrow !text-[10px]">{label}.</p>
      <div className="mt-2">
        {href ? (
          <a
            href={href}
            className="hover:text-[var(--color-oxblood)] underline decoration-[var(--color-rule)] hover:decoration-[var(--color-oxblood)] underline-offset-[4px]"
          >
            {inner}
          </a>
        ) : (
          inner
        )}
      </div>
    </div>
  );
}
