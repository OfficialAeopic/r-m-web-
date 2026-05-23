"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const SERVICE_OPTIONS = [
  "Tax Preparation",
  "Bookkeeping",
  "Payroll",
  "Accounting",
  "IRS Resolution",
  "Estate & Trust Tax Returns",
  "Tax Planning",
  "Business & Corporate",
  "Not sure yet",
] as const;

type Status = "idle" | "submitting" | "success" | "error";

type Errors = Partial<
  Record<"name" | "email" | "phone" | "service_interest" | "message" | "form", string>
>;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [service, setService] = useState<string>("");

  function validate(form: FormData): Errors {
    const e: Errors = {};
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const svc = String(form.get("service_interest") ?? "").trim();
    if (name.length < 2) e.name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "Please enter a valid email.";
    if (!svc) e.service_interest = "Please choose a service.";
    if (message.length < 10) e.message = "Please give us a bit more detail (10+ characters).";
    return e;
  }

  async function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = new FormData(ev.currentTarget);
    const localErrors = validate(form);
    if (Object.keys(localErrors).length > 0) {
      setErrors(localErrors);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("submitting");

    const payload = {
      name: String(form.get("name") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      phone: String(form.get("phone") ?? "").trim(),
      service_interest: String(form.get("service_interest") ?? "").trim(),
      message: String(form.get("message") ?? "").trim(),
      website: String(form.get("website") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as {
        success?: boolean;
        error?: string;
        fieldErrors?: Errors;
      };
      if (res.ok && json.success) {
        setStatus("success");
        (ev.target as HTMLFormElement).reset();
        setService("");
      } else if (res.status === 429) {
        setErrors({ form: json.error ?? "Too many submissions. Please try again later." });
        setStatus("error");
      } else {
        setErrors({
          ...(json.fieldErrors ?? {}),
          form: json.error ?? "Something went wrong. Please try again or call us.",
        });
        setStatus("error");
      }
    } catch {
      setErrors({ form: "Network error. Please try again or call us." });
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border-t-2 border-[var(--color-success)] border-b border-l border-r border-[var(--color-rule)] bg-[var(--color-paper-tint)] p-7 flex items-start gap-4"
      >
        <CheckCircle2 className="size-5 text-[var(--color-success)] mt-1 shrink-0" />
        <div className="space-y-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-success)]">
            Received.
          </p>
          <p className="font-display text-[20px] text-[var(--color-ink)] leading-tight">
            Thank you.
          </p>
          <p className="font-display italic text-[15px] text-[var(--color-ink-secondary)] leading-relaxed">
            We will be in touch within one business day.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-oxblood)] underline underline-offset-[4px]"
          >
            Submit another message →
          </button>
        </div>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-7">
      {/* Honeypot — visually hidden */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "-10000px",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      >
        <label htmlFor="website">Website (leave empty)</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      <div aria-live="polite" aria-atomic="true" className="contents">
        {errors.form && (
          <div
            role="alert"
            className="border-t-2 border-[var(--color-error)] border-b border-l border-r border-[var(--color-rule)] bg-[var(--color-paper-tint)] p-4 flex items-start gap-3"
          >
            <AlertCircle className="size-4 text-[var(--color-error)] mt-0.5 shrink-0" />
            <p className="text-[13px] text-[var(--color-error)] leading-relaxed">
              {errors.form}
            </p>
          </div>
        )}
      </div>

      <LedgerField id="name" label="Full Name" required error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          disabled={submitting}
          aria-invalid={!!errors.name}
          className={ledgerInputClass(errors.name)}
        />
      </LedgerField>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <LedgerField id="email" label="Email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={submitting}
            aria-invalid={!!errors.email}
            className={ledgerInputClass(errors.email)}
          />
        </LedgerField>

        <LedgerField id="phone" label="Telephone" optional>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            disabled={submitting}
            className={ledgerInputClass()}
          />
        </LedgerField>
      </div>

      <LedgerField
        id="service_interest"
        label="Interest"
        required
        error={errors.service_interest}
      >
        <Select
          value={service}
          onValueChange={(v) => setService(v ?? "")}
          disabled={submitting}
          name="service_interest"
        >
          <SelectTrigger
            id="service_interest"
            aria-invalid={!!errors.service_interest}
            className={cn(
              "w-full h-12 rounded-none border-0 border-b bg-transparent px-0 font-sans text-[16px] text-[var(--color-ink)] shadow-none",
              errors.service_interest
                ? "border-[var(--color-error)]"
                : "border-[var(--color-rule)]",
              "focus:border-[var(--color-oxblood)] focus:ring-0 focus-visible:ring-0 data-[placeholder]:text-[var(--color-ink-muted)]"
            )}
          >
            <SelectValue placeholder="Choose a service…" />
          </SelectTrigger>
          <SelectContent className="rounded-none border-[var(--color-rule)] bg-[var(--color-paper)]">
            {SERVICE_OPTIONS.map((opt) => (
              <SelectItem
                key={opt}
                value={opt}
                className="rounded-none font-sans text-[14px]"
              >
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </LedgerField>

      <LedgerField id="message" label="Message" required error={errors.message}>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          minLength={10}
          maxLength={2000}
          disabled={submitting}
          aria-invalid={!!errors.message}
          placeholder="Tell us a little about your situation so we know how to help."
          className={cn(
            ledgerInputClass(errors.message),
            "resize-y leading-[1.55] pt-3"
          )}
        />
      </LedgerField>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-x-8 gap-y-4">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-2 bg-[var(--color-oxblood)] text-[var(--color-paper)] hover:bg-[var(--color-oxblood-hover)] rounded-none h-12 px-7 font-sans text-[14px] tracking-wide disabled:opacity-60"
        >
          {submitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            "Send correspondence."
          )}
        </button>
        <p className="font-display italic text-[12.5px] leading-[1.55] text-[var(--color-ink-muted)] max-w-md">
          Submitting this form does not create a client-preparer relationship.
        </p>
      </div>
    </form>
  );
}

function LedgerField({
  id,
  label,
  required,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-muted)] mb-2"
      >
        <span>
          {label}
          {required ? "." : ""}
        </span>
        {optional && (
          <span className="font-display italic text-[var(--color-ink-muted)]/70 normal-case tracking-normal text-[11px]">
            optional
          </span>
        )}
      </label>
      {children}
      {error && (
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-error)]">
          — {error}
        </p>
      )}
    </div>
  );
}

function ledgerInputClass(error?: string) {
  return cn(
    "w-full bg-transparent border-0 border-b py-3 px-0 font-sans text-[16px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-muted)]/70",
    "focus:outline-none focus:border-[var(--color-oxblood)] focus:ring-0 transition-colors",
    error ? "border-[var(--color-error)]" : "border-[var(--color-rule)]"
  );
}
