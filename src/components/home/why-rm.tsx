import { ShieldCheck, Clock, MapPin, BadgeCheck } from "lucide-react";
import { COMPANY } from "@/lib/constants";

// Credential substantiation (Website Expansion P6): specific professional
// license claims (CPA / EA / PTIN) are GATED behind CREDENTIALS_VERIFIED until
// TSBPA/IRS verification. Until then we render only safe, substantiated framing
// (firm history, decades of experience). Flip NEXT_PUBLIC_CREDENTIALS_VERIFIED
// to "true" once each credential is verified to reveal the badges.
const VERIFIED = process.env.NEXT_PUBLIC_CREDENTIALS_VERIFIED === "true";

const yearsInBusiness = new Date().getFullYear() - COMPANY.founded;

// Only rendered when VERIFIED — fill in real numbers at verification time.
const BADGES = [
  { label: "Enrolled Agent", detail: "Admitted to practice before the IRS" },
  { label: "PTIN-Registered Preparer", detail: "IRS Preparer Tax ID on file" },
  { label: "CPA (on staff)", detail: "Licensed by the Texas State Board of Public Accountancy" },
];

export function WhyRM() {
  return (
    <section className="mx-auto max-w-6xl px-5 lg:px-8 py-16 border-t border-[var(--color-rule)]">
      <p className="eyebrow">Why R &amp; M.</p>
      <h2
        className="mt-4 font-display text-[var(--color-ink)]"
        style={{ fontSize: "clamp(26px, 3.4vw, 40px)", lineHeight: 1.15 }}
      >
        {yearsInBusiness} years of Houston experience.
      </h2>

      {/* Safe, substantiated framing — always shown */}
      <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 border-t border-l border-[var(--color-rule)]">
        <TrustItem icon={Clock} title={`Serving since ${COMPANY.founded}`} body={`Over four decades — ${yearsInBusiness} years — preparing returns and keeping books for Houston families and businesses.`} />
        <TrustItem icon={MapPin} title="Local & year-round" body="Not a seasonal pop-up. We're here on Greenhouse Rd all year for questions, notices, and planning." />
        <TrustItem icon={ShieldCheck} title="Encrypted client portal" body="Documents, consents, and messages protected with AES-256 encryption and multi-factor authentication." />
      </ul>

      {/* Professional license badges — only when verified (substantiation gate) */}
      {VERIFIED && (
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 border-l border-[var(--color-rule)]">
          {BADGES.map((b) => (
            <li key={b.label} className="border-r border-b border-[var(--color-rule)] p-6">
              <div className="flex items-center gap-2">
                <BadgeCheck className="size-4 text-[var(--color-gold-leaf)]" />
                <p className="font-display text-[16px] text-[var(--color-ink)]">{b.label}</p>
              </div>
              <p className="mt-2 text-[13px] leading-[1.55] text-[var(--color-ink-secondary)]">{b.detail}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function TrustItem({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <li className="border-r border-b border-[var(--color-rule)] p-7">
      <Icon className="size-5 text-[var(--color-oxblood)]" />
      <h3 className="mt-4 font-display text-[18px] text-[var(--color-ink)] tracking-tight">{title}</h3>
      <p className="mt-3 text-[13px] leading-[1.55] text-[var(--color-ink-secondary)]">{body}</p>
    </li>
  );
}
