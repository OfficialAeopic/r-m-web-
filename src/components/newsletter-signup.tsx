"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Footer newsletter signup (Website Expansion P8). Explicit marketing consent
// + honeypot. CAN-SPAM compliance (physical address + unsubscribe) is enforced
// on the Resend audience/broadcast side.
export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) {
      setMsg("Please confirm you'd like to receive our newsletter.");
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setMsg("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent, website }),
      });
      if (!res.ok) {
        const b = await res.json().catch(() => ({}));
        setMsg(b.error ?? "Could not subscribe. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("done");
    } catch {
      setMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="font-display italic text-[15px] text-[var(--color-ink-secondary)]">
        Thank you — you&apos;re subscribed. Watch your inbox for tax tips and
        deadline reminders.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3" noValidate>
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <input
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          required
          aria-label="Email address"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-none"
        />
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="bg-[var(--color-oxblood)] text-[var(--color-paper)] hover:bg-[var(--color-oxblood-hover)] rounded-none h-10 px-6 font-sans tracking-wide shrink-0"
        >
          {status === "submitting" ? "…" : "Subscribe"}
        </Button>
      </div>
      <label className="flex items-start gap-2 text-[12px] leading-[1.5] text-[var(--color-ink-muted)] cursor-pointer">
        <input
          type="checkbox"
          className="mt-0.5"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        />
        <span>
          I agree to receive R &amp; M Accounting&apos;s newsletter. You can
          unsubscribe anytime; we include our address and an unsubscribe link in
          every email.
        </span>
      </label>
      {status === "error" && (
        <p className="text-[12px] text-[var(--color-warning)]">{msg}</p>
      )}
    </form>
  );
}
