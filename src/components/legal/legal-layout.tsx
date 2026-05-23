import type { ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import { SectionNumber } from "@/components/typography/section-number";

export function DraftBanner() {
  return (
    <aside
      role="note"
      className="border-t-2 border-b border-[var(--color-warning)] bg-[var(--color-paper-deep)] px-5 py-4 flex items-start gap-3"
    >
      <AlertTriangle className="size-4 mt-1 shrink-0 text-[var(--color-warning)]" />
      <p className="font-display italic text-[13px] leading-[1.6] text-[var(--color-warning)]">
        <span className="font-mono not-italic uppercase tracking-[0.18em] text-[11px] mr-2">
          DRAFT —
        </span>
        This document is pending attorney review. Content is placeholder and
        must not be relied upon. Remove this banner before production.
      </p>
    </aside>
  );
}

export function LegalShell({
  eyebrow,
  title,
  lastUpdated,
  toc,
  children,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  toc?: { id: string; label: string }[];
  children: ReactNode;
}) {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-[var(--color-rule)]">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 pt-16 pb-10">
          <SectionNumber n={10} label={eyebrow} />
          <h1
            className="mt-7 font-display text-[var(--color-ink)]"
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontWeight: 380,
            }}
          >
            {title}.
          </h1>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">
            Last Updated — {lastUpdated}
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 lg:px-8 py-10 space-y-10">
        <DraftBanner />

        {toc && toc.length > 0 && (
          <nav
            aria-label="Table of contents"
            className="border-t border-b border-[var(--color-rule)] py-5"
          >
            <p className="eyebrow mb-4">Contents.</p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-[14px]">
              {toc.map((t, i) => (
                <li key={t.id} className="flex gap-3">
                  <span className="font-mono text-[11px] tracking-[0.14em] text-[var(--color-gold-leaf)] pt-1 w-8 shrink-0 tabular-nums">
                    §{i + 1}
                  </span>
                  <a
                    href={`#${t.id}`}
                    className="font-display text-[var(--color-ink)] hover:text-[var(--color-oxblood)] underline decoration-transparent hover:decoration-[var(--color-oxblood)] underline-offset-[3px] transition-colors"
                  >
                    {t.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="legal-body space-y-12">{children}</div>
      </article>
    </>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  // Split title into "§ N.N" prefix + rest if it starts with a section sign
  return (
    <section id={id} className="scroll-mt-20">
      <h2
        className="font-display text-[var(--color-ink)] tracking-tight mb-5"
        style={{ fontSize: "clamp(20px, 2.4vw, 26px)", lineHeight: 1.2 }}
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-gold-leaf)] block mb-1">
          §{" "}
          {title.match(/^(\d+\.\d+|[\d]+\.|\d+)\s/)?.[1]?.replace(".", " ·") ?? ""}
        </span>
        {title}
      </h2>
      <div className="space-y-4 text-[15.5px] leading-[1.7] text-[var(--color-ink-secondary)] [&_p]:leading-[1.7] [&_ul]:list-none [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul>li]:relative [&_ul>li]:before:absolute [&_ul>li]:before:-left-5 [&_ul>li]:before:content-['—'] [&_ul>li]:before:text-[var(--color-oxblood)] [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol_li::marker]:font-display [&_ol_li::marker]:text-[var(--color-gold-leaf)] [&_h3]:mt-6 [&_h3]:font-display [&_h3]:text-[18px] [&_h3]:tracking-tight [&_h3]:text-[var(--color-ink)] [&_strong]:font-semibold [&_strong]:text-[var(--color-ink)] [&_a]:text-[var(--color-oxblood)] [&_a]:underline [&_a]:underline-offset-[3px]">
        {children}
      </div>
    </section>
  );
}
