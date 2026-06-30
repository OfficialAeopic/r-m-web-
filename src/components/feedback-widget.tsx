"use client";

import { useEffect } from "react";

// Stage-10 client testing feedback widget (provider-agnostic; default Marker.io).
// ENV-GATED TO STAGING ONLY — must never load on production for real visitors.
// Loads only when NEXT_PUBLIC_DEPLOY_ENV=staging AND a provider + key are set
// (these env vars should exist on the Vercel PREVIEW environment only).
declare global {
  interface Window {
    markerConfig?: { project: string; source: string };
    __Marker?: unknown;
  }
}

export function FeedbackWidget() {
  const env = process.env.NEXT_PUBLIC_DEPLOY_ENV;
  const provider = process.env.NEXT_PUBLIC_FEEDBACK_PROVIDER;
  const key = process.env.NEXT_PUBLIC_FEEDBACK_KEY;

  useEffect(() => {
    // Hard safety: never load on Vercel production, regardless of how the
    // NEXT_PUBLIC_* feedback vars are scoped. Belt-and-suspenders with the
    // explicit staging gate below.
    if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") return;
    if (env !== "staging" || !provider || !key) return; // inert in prod / when unset
    if (typeof window === "undefined" || window.__Marker) return; // already loaded

    if (provider === "marker-io") {
      window.markerConfig = { project: key, source: "snippet" };
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://edge.marker.io/latest/shim.js";
      document.body.appendChild(script);
      return;
    }

    if (provider === "bugherd") {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.bugherd.com/sidebarv2.js?apikey=${key}`;
      document.body.appendChild(script);
    }
  }, [env, provider, key]);

  return null;
}
