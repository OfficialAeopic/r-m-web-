
### 2026-06-30 Ad-hoc change: Stage-10 feedback widget (Marker.io)
**Trigger:** Sam — wiring embedded Marker.io feedback widget for client testing
**Files/routes touched:** src/components/feedback-widget.tsx (new), src/app/layout.tsx (mount in body)
**Changes:** Provider-agnostic FeedbackWidget (default marker-io). Injects Marker shim via window.markerConfig. ENV-GATED: loads only when NEXT_PUBLIC_DEPLOY_ENV=staging + NEXT_PUBLIC_FEEDBACK_PROVIDER + NEXT_PUBLIC_FEEDBACK_KEY set (Vercel Preview env only). Inert in production.
**Manual verification needed:** On the staging/preview deploy, confirm the Marker "Report a bug" widget appears; on production it must NOT appear.
**Regression risk:** None to existing pages — component returns null and only appends a script in staging.
