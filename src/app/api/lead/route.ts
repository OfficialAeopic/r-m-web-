import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

// Lead capture → CRM pending client (Website Expansion P7).
// §7216: collects NO tax-return information — contact + service interest only.
// Inserts into the shared CRM `leads` table via the Supabase REST API using the
// service-role key (insert-only, bypasses RLS). The CRM Lead Inbox (CRM P1)
// then approves → converts to an active client → fires the portal invite.
const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().max(40).optional().or(z.literal("")),
  service_interest: z.string().min(1).max(120),
  city: z.string().max(80).optional().or(z.literal("")),
  message: z.string().max(2000).optional().or(z.literal("")),
  marketing_consent: z.boolean().optional(),
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
  return req.headers.get("x-real-ip") ?? "unknown";
}

// R&M company id in supabase-rmtax (overridable via env). Leads need company_id
// set so CRM staff_access RLS surfaces them in the Lead Inbox.
const RM_COMPANY_ID =
  process.env.RM_COMPANY_ID ?? "cc582aec-b344-4a32-b088-df4cafa86446";

async function insertLead(lead: {
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  service_interest: string;
  city: string | null;
  message: string | null;
  marketing_consent: boolean;
}): Promise<{ ok: boolean; skipped?: string }> {
  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    // No service-role key yet (Sam action — see deploy runbook). Don't fail the
    // submission; the Resend notification still reaches R&M.
    return { ok: false, skipped: "no_service_key" };
  }
  try {
    const res = await fetch(`${url}/rest/v1/leads`, {
      method: "POST",
      headers: {
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        company_id: RM_COMPANY_ID,
        first_name: lead.first_name,
        last_name: lead.last_name,
        email: lead.email,
        phone: lead.phone,
        service_interest: lead.service_interest,
        city: lead.city,
        message: lead.message,
        marketing_consent: lead.marketing_consent,
        source: "website",
        status: "pending",
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error("[lead] supabase insert failed", res.status, text);
      return { ok: false, skipped: `supabase_${res.status}` };
    }
    return { ok: true };
  } catch (e) {
    console.error("[lead] supabase insert error", e);
    return { ok: false, skipped: "exception" };
  }
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot — bots get a silent 200.
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
    return NextResponse.json({ error: "Validation failed", fieldErrors }, { status: 400 });
  }

  const ip = getIp(req);
  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 },
    );
  }

  const { name, email, phone, service_interest, city, message, marketing_consent } = parsed.data;
  const [first_name, ...rest] = name.trim().split(/\s+/);
  const last_name = rest.join(" ");

  const dbResult = await insertLead({
    first_name,
    last_name,
    email,
    phone: phone || null,
    service_interest,
    city: city || null,
    message: message || null,
    marketing_consent: !!marketing_consent,
  });

  // Notify R&M + send the lead an autoresponder (best-effort).
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey && apiKey !== "re_placeholder") {
    try {
      const resend = new Resend(apiKey);
      const to = process.env.CONTACT_FORM_TO || "rmaccounting@rmtax.org";
      const from = process.env.CONTACT_FORM_FROM || "R & M Website <onboarding@resend.dev>";
      await resend.emails.send({
        from,
        to,
        replyTo: email,
        subject: `New website lead: ${name} — ${service_interest}`,
        html: `<div style="font-family:system-ui,sans-serif;color:#111">
          <h2 style="font-size:18px;margin:0 0 8px">New website lead</h2>
          <p style="font-size:13px;color:#555;margin:0 0 16px">Pending in the CRM Lead Inbox${
            dbResult.ok ? "" : " (DB insert skipped — review service-role key)"
          }.</p>
          <table style="font-size:14px"><tbody>
          <tr><td style="color:#666;padding:4px 12px 4px 0">Name</td><td><strong>${name}</strong></td></tr>
          <tr><td style="color:#666;padding:4px 12px 4px 0">Email</td><td>${email}</td></tr>
          <tr><td style="color:#666;padding:4px 12px 4px 0">Phone</td><td>${phone || "—"}</td></tr>
          <tr><td style="color:#666;padding:4px 12px 4px 0">Service</td><td>${service_interest}</td></tr>
          <tr><td style="color:#666;padding:4px 12px 4px 0">City</td><td>${city || "—"}</td></tr>
          <tr><td style="color:#666;padding:4px 12px 4px 0">Marketing consent</td><td>${marketing_consent ? "Yes" : "No"}</td></tr>
          <tr><td style="color:#666;padding:4px 12px 4px 0;vertical-align:top">Message</td><td style="white-space:pre-wrap">${message || "—"}</td></tr>
          </tbody></table></div>`,
      });
      // Autoresponder to the lead.
      await resend.emails.send({
        from,
        to: email,
        subject: "We received your request — R & M Accounting",
        html: `<div style="font-family:system-ui,sans-serif;color:#111">
          <p>Hi ${first_name},</p>
          <p>Thanks for reaching out to R &amp; M Accounting about <strong>${service_interest}</strong>.
          A member of our team will follow up within one business day.</p>
          <p>If it's urgent, call us at (281) 391-2900.</p>
          <p>R &amp; M Accounting and Tax Service<br/>3880 Greenhouse Rd 219, Houston, TX 77084</p>
          <hr style="border:none;border-top:1px solid #ddd;margin:16px 0"/>
          <p style="font-size:11px;color:#888">You're receiving this because you submitted a request at rmtax.org.</p>
        </div>`,
      });
    } catch (e) {
      console.error("[lead] resend error", e);
      // Don't fail the submission on email error — the lead is what matters.
    }
  }

  return NextResponse.json({ success: true, stored: dbResult.ok });
}
