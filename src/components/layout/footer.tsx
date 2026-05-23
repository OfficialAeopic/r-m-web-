import Link from "next/link";
import { COMPANY, CIRCULAR_230_DISCLAIMER } from "@/lib/constants";

const EXPLORE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/team", label: "Team" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
];

const SERVICES_LINKS = [
  { href: "/services/tax-preparation", label: "Tax Preparation" },
  { href: "/services/bookkeeping", label: "Bookkeeping" },
  { href: "/services/payroll", label: "Payroll" },
  { href: "/services/irs-resolution", label: "IRS Resolution" },
  { href: "/services/estate-trust", label: "Estate & Trust" },
];

export function Footer() {
  const year = new Date().getFullYear();
  // Roman numeral for the current year — distinctive identifying detail
  return (
    <footer className="mt-32 border-t border-[var(--color-rule)] bg-[var(--color-paper-deep)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        {/* Masthead */}
        <div className="text-center mb-14 pb-10 border-b border-[var(--color-rule)]">
          <p className="font-display text-[28px] text-[var(--color-ink)] tracking-[-0.02em]">
            R&nbsp;<span className="italic">&amp;</span>&nbsp;M
          </p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">
            Accounting &amp; Tax Service
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-gold-leaf)]">
            Established 1981 · Houston, Texas
          </p>
        </div>

        {/* Three-column ledger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <FooterColumn label="Departments">
            {EXPLORE_LINKS.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn label="Practices">
            {SERVICES_LINKS.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn label="Correspondence">
            <div className="space-y-4 font-display text-[15px] leading-[1.5] text-[var(--color-ink-secondary)]">
              <p>
                {COMPANY.address.street}
                <br />
                {COMPANY.address.city}, {COMPANY.address.state}{" "}
                {COMPANY.address.zip}
              </p>
              <p>
                <a
                  href={`tel:${COMPANY.phoneTel}`}
                  className="text-[var(--color-ink)] hover:text-[var(--color-oxblood)] underline decoration-[var(--color-rule)] underline-offset-[3px] hover:decoration-[var(--color-oxblood)]"
                >
                  {COMPANY.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-[var(--color-ink)] hover:text-[var(--color-oxblood)] underline decoration-[var(--color-rule)] underline-offset-[3px] hover:decoration-[var(--color-oxblood)]"
                >
                  {COMPANY.email}
                </a>
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[var(--color-rule-soft)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">
                Hours.
              </p>
              <p className="mt-2 font-display text-[14px] text-[var(--color-ink-secondary)]">
                Mon — Fri · 9:00 — 17:00
              </p>
            </div>
          </FooterColumn>
        </div>

        {/* Colophon — Circular 230 (VERBATIM) */}
        <div className="border-t-2 border-[var(--color-oxblood)] pt-10 max-w-2xl mx-auto text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]">
            Circular 230 Notice.
          </p>
          <p className="mt-5 font-display italic text-[14px] leading-[1.65] text-[var(--color-ink-secondary)]">
            {CIRCULAR_230_DISCLAIMER}
          </p>
        </div>

        {/* Imprint */}
        <div className="mt-14 pt-7 border-t border-[var(--color-rule)] flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">
          <p>
            © {year} · R &amp; M Accounting &amp; Tax Service · All Rights
            Reserved.
          </p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="/privacy"
              className="hover:text-[var(--color-oxblood)] transition-colors"
            >
              Privacy.
            </Link>
            <Link
              href="/terms"
              className="hover:text-[var(--color-oxblood)] transition-colors"
            >
              Terms.
            </Link>
            <a
              href={COMPANY.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Client Portal (opens in a new tab)"
              className="hover:text-[var(--color-oxblood)] transition-colors"
            >
              Portal.
            </a>
          </nav>
          <p>
            Site by{" "}
            <a
              href="https://aeopic.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aeopic (opens in a new tab)"
              className="hover:text-[var(--color-oxblood)] transition-colors"
            >
              Aeopic.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] mb-4 pb-3 border-b border-[var(--color-rule)]">
        {label}.
      </p>
      {Array.isArray(children) ? (
        <ul className="flex flex-col gap-2.5">{children}</ul>
      ) : (
        children
      )}
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="font-display text-[15px] text-[var(--color-ink)] hover:text-[var(--color-oxblood)] underline decoration-transparent hover:decoration-[var(--color-oxblood)] underline-offset-[4px] transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
