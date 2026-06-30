"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/content/services";
import { serviceAreas } from "@/content/service-areas";

type Status = "idle" | "submitting" | "success" | "error";

export function LeadForm({
  defaultService,
  defaultCity,
  heading = "Request a consultation",
  compact = false,
}: {
  defaultService?: string;
  defaultCity?: string;
  heading?: string;
  compact?: boolean;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(
    services.some((s) => s.slug === defaultService) ? defaultService! : "",
  );
  const [city, setCity] = useState(
    serviceAreas.some((a) => a.slug === defaultCity) ? defaultCity! : "",
  );
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const serviceTitle = services.find((s) => s.slug === service)?.title ?? service;
      const cityName = serviceAreas.find((a) => a.slug === city)?.name ?? city;
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: phone || undefined,
          service_interest: serviceTitle || "General inquiry",
          city: cityName || undefined,
          message: message || undefined,
          marketing_consent: consent,
          website, // honeypot
        }),
      });
      if (!res.ok) {
        const b = await res.json().catch(() => ({}));
        setErrorMsg(b.error ?? "Something went wrong. Please call (281) 391-2900.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrorMsg("Network error. Please try again or call (281) 391-2900.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-none border border-[var(--color-rule)] bg-[var(--color-paper-tint)] p-8 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-gold-leaf)]">
          Received.
        </p>
        <h3 className="mt-3 font-display text-[24px] text-[var(--color-ink)]">
          Thank you{name ? `, ${name.split(" ")[0]}` : ""}.
        </h3>
        <p className="mt-3 text-[14px] leading-[1.6] text-[var(--color-ink-secondary)] max-w-md mx-auto">
          We&apos;ve received your request and a member of our team will follow up
          within one business day. For anything urgent, call (281) 391-2900.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {heading && (
        <h3 className="font-display text-[22px] text-[var(--color-ink)]">{heading}</h3>
      )}

      {/* Honeypot — visually hidden, off-screen */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website-hp">Leave this empty</label>
        <input
          id="website-hp"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div className={compact ? "space-y-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        <div className="space-y-1.5">
          <Label htmlFor="lf-name">Name</Label>
          <Input id="lf-name" required value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lf-email">Email</Label>
          <Input id="lf-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lf-phone">Phone (optional)</Label>
          <Input id="lf-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <Label>Service interest</Label>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s.slug} value={s.slug}>{s.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label>City</Label>
          <Select value={city} onValueChange={setCity}>
            <SelectTrigger><SelectValue placeholder="Select your city" /></SelectTrigger>
            <SelectContent>
              {serviceAreas.map((a) => (
                <SelectItem key={a.slug} value={a.slug}>{a.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="lf-message">How can we help? (optional)</Label>
        <Textarea
          id="lf-message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Briefly — please don't include SSNs or tax-return details here."
        />
        <p className="text-[11px] text-[var(--color-ink-muted)]">
          For your security, never send Social Security numbers or tax documents
          through this form.
        </p>
      </div>

      <label className="flex items-start gap-2 text-[13px] text-[var(--color-ink-secondary)] cursor-pointer">
        <input
          type="checkbox"
          className="mt-1"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        />
        <span>
          I agree to receive marketing communications from R &amp; M Accounting.
          (Optional — you&apos;ll hear back about your request either way.)
        </span>
      </label>

      {status === "error" && (
        <p className="text-[13px] text-[var(--color-warning)]">{errorMsg}</p>
      )}

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="bg-[var(--color-oxblood)] text-[var(--color-paper)] hover:bg-[var(--color-oxblood-hover)] rounded-none h-12 px-7 font-sans tracking-wide"
      >
        {status === "submitting" ? "Sending…" : "Request consultation"}
      </Button>
    </form>
  );
}
