import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

// Newsletter signup (Website Expansion P8). Adds the contact to a Resend
// audience with explicit marketing consent. §7216: marketing consent is
// separate from any tax engagement. CAN-SPAM: Resend appends the physical
// address + one-click unsubscribe on broadcasts; contacts can unsubscribe.
const schema = z.object({
  email: z.string().email(),
  consent: z.boolean().optional(),
});

const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const buckets = new Map<string, number[]>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const arr = (buckets.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (arr.length >= MAX_PER_WINDOW) return false;
  arr.push(now);
  buckets.set(ip, arr);
  return true;
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot.
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ success: true });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  const { email, consent } = parsed.data;
  if (!consent) {
    return NextResponse.json(
      { error: "Please confirm you'd like to receive our newsletter." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!apiKey || apiKey === "re_placeholder" || !audienceId) {
    // No live key/audience yet — accept gracefully so the form is testable.
    console.log("[newsletter] DEMO — would subscribe", { email });
    return NextResponse.json({ success: true, demo: true });
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });
    if (result.error) {
      console.error("[newsletter] resend error", result.error);
      return NextResponse.json({ error: "Could not subscribe. Please try again." }, { status: 502 });
    }
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("[newsletter] unexpected", e);
    return NextResponse.json({ error: "Could not subscribe. Please try again." }, { status: 502 });
  }
}
