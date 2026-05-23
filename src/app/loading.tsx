export default function Loading() {
  return (
    <section
      aria-busy="true"
      aria-live="polite"
      className="mx-auto max-w-6xl px-5 lg:px-8 pt-20 pb-24"
    >
      <span className="sr-only">Loading…</span>

      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-muted)] text-center">
        — Filing —
      </p>

      {/* Animated oxblood rule grows + retracts */}
      <div className="mx-auto mt-7 max-w-md h-px overflow-hidden">
        <div className="ledger-loading-rule h-full w-full" />
      </div>

      <p className="mt-12 text-center font-display italic text-[18px] text-[var(--color-ink-muted)]">
        One moment, please.
      </p>
    </section>
  );
}
