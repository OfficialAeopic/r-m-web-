import Link from "next/link";
import { COMPANY, CIRCULAR_230_DISCLAIMER } from "@/lib/constants";
import { Tape } from "./bits";

const COLS: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Practice",
    links: [
      { href: "/services/tax-preparation", label: "Tax Preparation" },
      { href: "/services/bookkeeping", label: "Bookkeeping" },
      { href: "/services/payroll", label: "Payroll" },
      { href: "/services/irs-resolution", label: "IRS Resolution" },
      { href: "/services", label: "All services" },
    ],
  },
  {
    heading: "Firm",
    links: [
      { href: "/about", label: "About" },
      { href: "/team", label: "Team" },
      { href: "/service-areas", label: "Service Areas" },
      { href: "/reviews", label: "Reviews" },
      { href: "/blog", label: "Blog" },
    ],
  },
];

export function FooterLedger() {
  const year = new Date().getFullYear();
  return (
    <footer className="l-dark relative overflow-hidden" style={{ background: "var(--l-bg)" }}>
      <Tape
        items={[
          "Balanced to the cent", "Year-round, not seasonal", "Established 1981",
          "Houston, Texas", "Filed on time", "Books reconciled", "Real humans answer",
        ]}
        reverse
      />

      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        {/* Closing tally line */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div>
            <p className="l-serif text-[clamp(40px,7vw,92px)] leading-[0.95] tracking-[-0.02em]" style={{ color: "var(--l-bone)" }}>
              R <span style={{ color: "var(--l-emerald)" }}>&amp;</span> M
            </p>
            <p className="mt-3 l-mono text-[11px] uppercase tracking-[0.24em]" style={{ color: "var(--l-bone-faint)" }}>
              Accounting &amp; Tax Service · Est. 1981
            </p>
            <Link
              href="/contact#schedule"
              className="mt-7 inline-flex items-center gap-2 rounded-md px-5 h-11 text-[14px] font-semibold"
              style={{ background: "var(--l-btn)", color: "var(--l-btn-fg)" }}
            >
              Schedule a consultation
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {COLS.map((col) => (
              <div key={col.heading}>
                <p className="l-mono text-[10px] uppercase tracking-[0.22em] pb-3 mb-3 border-b" style={{ color: "var(--l-emerald)", borderColor: "var(--l-line)" }}>
                  {col.heading}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-[14px] transition-colors hover:opacity-100" style={{ color: "var(--l-bone-dim)" }}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="l-mono text-[10px] uppercase tracking-[0.22em] pb-3 mb-3 border-b" style={{ color: "var(--l-emerald)", borderColor: "var(--l-line)" }}>
                Office
              </p>
              <address className="not-italic text-[14px] leading-[1.6]" style={{ color: "var(--l-bone-dim)" }}>
                {COMPANY.address.street}<br />
                {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}<br />
                <a href={`tel:${COMPANY.phoneTel}`} className="l-mono text-[13px] mt-2 inline-block" style={{ color: "var(--l-bone)" }}>
                  {COMPANY.phone}
                </a>
              </address>
            </div>
          </div>
        </div>

        {/* Circular 230 colophon (regulatory — verbatim) */}
        <div className="mt-16 pt-8 border-t" style={{ borderColor: "var(--l-line)" }}>
          <p className="l-mono text-[10px] uppercase tracking-[0.2em] mb-3" style={{ color: "var(--l-bone-faint)" }}>
            Circular 230 Notice
          </p>
          <p className="max-w-3xl text-[12px] leading-[1.65]" style={{ color: "var(--l-bone-faint)" }}>
            {CIRCULAR_230_DISCLAIMER}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 l-mono text-[10px] uppercase tracking-[0.18em]" style={{ borderColor: "var(--l-line)", color: "var(--l-bone-faint)" }}>
          <p>© {year} R &amp; M Accounting &amp; Tax Service</p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacy" className="hover:opacity-100" style={{ color: "var(--l-bone-faint)" }}>Privacy</Link>
            <Link href="/terms" className="hover:opacity-100" style={{ color: "var(--l-bone-faint)" }}>Terms</Link>
            <a href="https://portal.rmtax.org" className="hover:opacity-100" style={{ color: "var(--l-bone-faint)" }}>Client Portal</a>
          </nav>
          <p>Site by Aeopic</p>
        </div>
      </div>
    </footer>
  );
}
