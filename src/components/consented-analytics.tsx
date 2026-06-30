"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import Link from "next/link";

// Cookie/analytics consent (Website Expansion P10).
// - No analytics fires before explicit consent.
// - Honors the Global Privacy Control (GPC) signal: if the browser sends GPC,
//   we treat it as an opt-out and never load analytics (no banner needed).
// - TDPSA opt-out: "Decline" stores a denial; users can also clear/change it.
const STORAGE_KEY = "rm_analytics_consent"; // "granted" | "denied"

type Consent = "unknown" | "granted" | "denied";

export function ConsentedAnalytics({ gaId }: { gaId?: string }) {
  const [consent, setConsent] = useState<Consent>("unknown");
  const enabled = !!gaId && gaId !== "G-PLACEHOLDER";

  useEffect(() => {
    // 1) Honor Global Privacy Control — opt-out signal wins, no banner.
    const gpc = (navigator as Navigator & { globalPrivacyControl?: boolean })
      .globalPrivacyControl;
    if (gpc === true) {
      setConsent("denied");
      try {
        localStorage.setItem(STORAGE_KEY, "denied");
      } catch {
        /* ignore */
      }
      return;
    }
    // 2) Restore a prior choice.
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "granted" || stored === "denied") {
        setConsent(stored);
      }
    } catch {
      /* ignore */
    }
  }, []);

  function choose(value: "granted" | "denied") {
    setConsent(value);
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
  }

  return (
    <>
      {enabled && consent === "granted" && <GoogleAnalytics gaId={gaId!} />}

      {consent === "unknown" && (
        <div
          role="dialog"
          aria-label="Cookie and analytics consent"
          className="fixed inset-x-0 bottom-0 z-[90] border-t border-[var(--color-rule)] bg-[var(--color-paper-deep)]"
        >
          <div className="mx-auto max-w-6xl px-5 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="flex-1 text-[13px] leading-[1.55] text-[var(--color-ink-secondary)]">
              We use privacy-respecting analytics to improve this site. No
              analytics run until you agree. See our{" "}
              <Link href="/privacy" className="underline decoration-[var(--color-gold-leaf)] underline-offset-[3px] hover:text-[var(--color-oxblood)]">
                Privacy Policy
              </Link>{" "}
              for your TDPSA rights.
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => choose("denied")}
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-ink)] underline decoration-[var(--color-rule)] underline-offset-[5px] hover:decoration-[var(--color-oxblood)]"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => choose("granted")}
                className="bg-[var(--color-oxblood)] text-[var(--color-paper)] hover:bg-[var(--color-oxblood-hover)] h-9 px-5 font-sans text-[13px] tracking-wide"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
