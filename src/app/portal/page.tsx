import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { SectionNumber } from "@/components/typography/section-number";
import { pad2 } from "@/lib/roman";

export const metadata: Metadata = buildMetadata({
  title: "Client Portal — Secure Access",
  description:
    "Access your tax documents, track your return, and communicate with our team through the R & M secure client portal.",
  path: "/portal",
});

const STEPS = [
  {
    title: "Sign Up",
    body: "Accept your invitation link from R & M and create your account.",
  },
  {
    title: "Secure Your Account",
    body:
      "Set up two-factor authentication. Required for your security — protects your tax information.",
  },
  {
    title: "Access Your Dashboard",
    body:
      "View your return status, upload documents, read messages, and manage your consents — all from one place.",
  },
];

const BADGES = [
  {
    title: "256-bit Encryption.",
    body: "All your data is encrypted at rest with AES-256 encryption.",
  },
  {
    title: "Two-Factor Authentication.",
    body: "Every login requires a code from your authenticator app.",
  },
  {
    title: "SOC 2 Infrastructure.",
    body: "Built on Supabase — SOC 2 Type II certified infrastructure.",
  },
  {
    title: "No Tracking.",
    body:
      "Zero third-party analytics or tracking on the portal. Your data stays private.",
  },
];

export default function PortalInfoPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-[var(--color-rule)]">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 pt-16 pb-12">
          <SectionNumber n={9} label="Client Portal" />
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
              Your secure{" "}
              <span className="italic text-[var(--color-oxblood)]">
                correspondence portal.
              </span>
            </h1>
            <p className="font-display italic text-[18px] leading-[1.55] text-[var(--color-ink-secondary)] max-w-md">
              Access your tax documents, track your return, and communicate
              with our team — all in one place.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-x-8 gap-y-4">
            <Button
              asChild
              className="bg-[var(--color-oxblood)] text-[var(--color-paper)] hover:bg-[var(--color-oxblood-hover)] rounded-none h-12 px-7 font-sans tracking-wide"
            >
              <a
                href={COMPANY.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Log in to your portal →
              </a>
            </Button>
            <p className="font-display italic text-[14px] text-[var(--color-ink-muted)]">
              First time? Use the invitation link sent to your email.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-20">
        <SectionNumber n={1} label="Procedure" />
        <h2
          className="mt-5 mb-12 font-display text-[var(--color-ink)]"
          style={{ fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1.1 }}
        >
          Three steps to get started.
        </h2>

        <ol className="border-t border-l border-[var(--color-rule)] grid grid-cols-1 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className="border-r border-b border-[var(--color-rule)] p-8"
            >
              <p
                className="font-display text-[var(--color-oxblood)] tracking-tight tabular-nums"
                style={{ fontSize: "72px", lineHeight: 0.9, fontWeight: 380 }}
              >
                {pad2(i + 1)}.
              </p>
              <h3
                className="mt-6 font-display text-[var(--color-ink)] tracking-tight"
                style={{ fontSize: "22px", lineHeight: 1.15 }}
              >
                {s.title}.
              </h3>
              <p className="mt-3 text-[14px] leading-[1.65] text-[var(--color-ink-secondary)]">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Security badges */}
      <section className="border-y border-[var(--color-rule)] bg-[var(--color-paper-tint)]">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 py-20">
          <SectionNumber n={2} label="Security Apparatus" />
          <div className="mt-7 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 items-end mb-12">
            <h2
              className="font-display text-[var(--color-ink)]"
              style={{ fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1.1 }}
            >
              Your tax data deserves{" "}
              <span className="italic text-[var(--color-oxblood)]">
                better than email.
              </span>
            </h2>
            <p className="font-display italic text-[16px] text-[var(--color-ink-secondary)] max-w-lg">
              The portal is built around four guarantees.
            </p>
          </div>

          <ul className="border-t border-l border-[var(--color-rule)] grid grid-cols-1 sm:grid-cols-2">
            {BADGES.map((b, i) => (
              <li
                key={b.title}
                className="border-r border-b border-[var(--color-rule)] bg-[var(--color-paper)] p-8"
              >
                <div className="flex items-baseline gap-5">
                  <span
                    className="font-display text-[var(--color-gold-leaf)] tabular-nums"
                    style={{ fontSize: "44px", lineHeight: 0.85, fontWeight: 380 }}
                  >
                    {pad2(i + 1)}.
                  </span>
                  <div>
                    <h3
                      className="font-display text-[var(--color-ink)] tracking-tight"
                      style={{ fontSize: "20px", lineHeight: 1.2 }}
                    >
                      {b.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.6] text-[var(--color-ink-secondary)]">
                      {b.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-b border-[var(--color-rule)]">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 py-16 text-center space-y-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)]">
            Not a Portal Member Yet?
          </p>
          <h2
            className="font-display text-[var(--color-ink)]"
            style={{ fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1.1 }}
          >
            Contact us —{" "}
            <span className="italic text-[var(--color-oxblood)]">
              once you are a client we will send your invitation.
            </span>
          </h2>
          <Button
            asChild
            className="bg-[var(--color-oxblood)] text-[var(--color-paper)] hover:bg-[var(--color-oxblood-hover)] rounded-none h-12 px-7 font-sans tracking-wide"
          >
            <Link href="/contact#schedule">Contact us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
