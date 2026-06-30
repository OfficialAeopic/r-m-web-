# RM Tax Website — Deployment & DNS Cutover Runbook

**Target:** `rmtax.org` (apex) + `www.rmtax.org` · **Vercel team:** `vercel-aeopic` · **Repo:** `OfficialAeopic/rm-tax-website`
**Framework:** Next.js 16 (App Router, MDX) · **Compliance:** RED (Circular 230, TX UPL, §7216, CAN-SPAM, TCPA, TDPSA)
**Cross-app:** the lead form writes into the shared CRM `leads` table (`supabase-rmtax`).

---

## 1. Pre-flight
- `tsc --noEmit` → 0 errors · `next build` → exit 0 (334 static pages, incl. 272 GEO-matrix pages; matrix SSG + weekly ISR). Verified 2026-06-24.
- `vercel.json` present (framework nextjs, region iad1).

## 2. GitHub
```bash
cd projects/RMTax/rm-tax-website
git add -A && git commit -m "Website expansion (P1–P11)"
gh repo create OfficialAeopic/rm-tax-website --private --source=. --push
```

## 3. Vercel link + import
Import into the `vercel-aeopic` team. Framework: Next.js (auto). Build/install/output already pinned in `vercel.json`.

## 4. Environment variables (Vercel → Settings → Environment Variables)
| Key | Value / source | Notes |
|---|---|---|
| `RESEND_API_KEY` | Resend dashboard | contact + lead notify/autoresponder + newsletter |
| `RESEND_AUDIENCE_ID` | Resend → Audiences | **newsletter subscribe** (P8). Without it, signups are accepted in demo mode but not stored. |
| `CONTACT_FORM_TO` | `rmaccounting@rmtax.org` | lead + contact recipient |
| `CONTACT_FORM_FROM` | verified Resend sender | e.g. `R & M Website <noreply@rmtax.org>` once domain verified |
| `SUPABASE_URL` | `https://nobvsshatvnvxlzplabl.supabase.co` | for lead → CRM `leads` insert |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → API → service_role | **⚠ MISSING TODAY.** Required for `POST /api/lead` to store leads in the CRM. Until set, leads email R&M but are not written to the CRM (`stored:false`). Sam provisions. |
| `RM_COMPANY_ID` | `cc582aec-b344-4a32-b088-df4cafa86446` | R&M company id so CRM RLS surfaces website leads in the Lead Inbox |
| `NEXT_PUBLIC_GA_ID` | GA4 id | analytics — only fires after cookie consent (P10) |
| `NEXT_PUBLIC_CREDENTIALS_VERIFIED` | `false` until verified | flip to `true` only after TSBPA/IRS license verification (P6) |

> `.env.example` is a protected file — add `RESEND_AUDIENCE_ID`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `RM_COMPANY_ID`, `NEXT_PUBLIC_CREDENTIALS_VERIFIED` by hand.

## 5. Preview deploy (do now)
- Push a branch → Vercel preview URL. Confirm green build.
- Run **Lighthouse** on the preview (home, a service page, a matrix page e.g. `/tax-preparation-katy`, a blog post) → target SEO 100, Performance ≥90, no CLS.
- Smoke: lead form submit (verify Resend email + CRM lead row once service-role key is set), newsletter signup, FAQ accordion, cookie consent (Accept loads GA; Decline + GPC block it), matrix internal links, sitemap.xml includes matrix.

## 6. DNS cutover — rmtax.org (Ionos → Vercel) — GATED on Sam
**Do NOT cut DNS without Sam's go.** Preserve existing email (MX) — Joshua's requirement.
1. In Vercel, add domains `rmtax.org` + `www.rmtax.org` to the project.
2. At Ionos DNS:
   - **A record** `@` → Vercel IP `76.76.21.21` (or the apex value Vercel shows).
   - **CNAME** `www` → `cname.vercel-dns.com`.
   - **Leave all `MX` records and any mail-related `TXT` (SPF/DKIM/DMARC) untouched** — email continues to flow through the current provider.
3. Lower TTL to 300s a day before cutover for a fast rollback window; raise it back afterward.
4. Verify domain in Vercel (SSL auto-provisions). Confirm `https://rmtax.org` serves the new site and email still sends/receives.

## 7. Post-deploy checklist
- [ ] `/sitemap.xml` lists matrix pages; `/robots.txt` allows crawl
- [ ] Lead form creates a CRM `leads` row (service-role key set) → appears in CRM Lead Inbox
- [ ] Newsletter subscribe adds a Resend contact
- [ ] Analytics fires only after consent; GPC honored
- [ ] Circular 230 in footer on every page; UPL warnings on the 4 flagged services + their matrix pages
- [ ] Email (MX) still working after DNS cutover
