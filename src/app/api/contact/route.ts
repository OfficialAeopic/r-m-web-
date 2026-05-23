import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().max(40).optional().or(z.literal("")),
  service_interest: z.string().min(1).max(100),
  message: z.string().min(10).max(2000),
});

const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 3;
const buckets = new Map<string, number[]>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const arr = (buckets.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (arr.length >= MAX_PER_WINDOW) {
    buckets.set(ip, arr);
    return false;
  }
  arr.push(now);
  buckets.set(ip, arr);
  return true;
}

function getIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]?.trim() || "unknown";
  const real = req.headers.get("x-real-ip");
  if (real) return real;
  return "unknown";
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot — runs BEFORE validation so bots get a 200 and never learn the trap exists.
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ success: true });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0]?.toString() ?? "form";
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return NextResponse.json(
      { error: "Validation failed", fieldErrors },
      { status: 400 }
    );
  }

  const ip = getIp(req);
  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }

  const { name, email, phone, service_interest, message } = parsed.data;
  const submittedAt = new Date().toISOString();

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#111;max-width:560px;margin:0 auto;">
      <h2 style="margin:0 0 8px;font-size:18px;">New contact form submission</h2>
      <p style="margin:0 0 16px;color:#555;font-size:13px;">Submitted from rmtax.org contact form</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:6px 0;color:#666;width:140px;">Name</td><td><strong>${escapeHtml(name)}</strong></td></tr>
        <tr><td style="padding:6px 0;color:#666;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:6px 0;color:#666;">Phone</td><td>${phone ? escapeHtml(phone) : "—"}</td></tr>
        <tr><td style="padding:6px 0;color:#666;">Service interest</td><td>${escapeHtml(service_interest)}</td></tr>
        <tr><td style="padding:6px 0;color:#666;vertical-align:top;">Message</td><td style="white-space:pre-wrap;">${escapeHtml(message)}</td></tr>
        <tr><td style="padding:6px 0;color:#666;">Submitted</td><td>${submittedAt}</td></tr>
        <tr><td style="padding:6px 0;color:#666;">IP</td><td>${escapeHtml(ip)}</td></tr>
      </table>
    </div>
  `;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey === "re_placeholder") {
    // Demo mode: accept the submission so the form is fully testable without a real key.
    if (process.env.NODE_ENV !== "production") {
      console.log("[contact] DEMO MODE — would send email", {
        to: process.env.CONTACT_FORM_TO,
        from: process.env.CONTACT_FORM_FROM,
        name,
        email,
        service_interest,
      });
    }
    return NextResponse.json({ success: true, demo: true });
  }

  try {
    const resend = new Resend(apiKey);
    const to = process.env.CONTACT_FORM_TO || "rmaccounting@rmtax.org";
    const from =
      process.env.CONTACT_FORM_FROM || "R & M Website <onboarding@resend.dev>";
    const result = await resend.emails.send({
      from,
      to,
      subject: `New Contact: ${name} — ${service_interest}`,
      html,
      replyTo: email,
    });
    if (result.error) {
      console.error("[contact] resend error", result.error);
      return NextResponse.json(
        { error: "Could not send message. Please try again or call us." },
        { status: 502 }
      );
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] unexpected error", err);
    return NextResponse.json(
      { error: "Could not send message. Please try again or call us." },
      { status: 502 }
    );
  }
}
