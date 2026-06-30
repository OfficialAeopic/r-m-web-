import { HeroLedger } from "@/components/home/ledger/hero-ledger";
import {
  StatsLedger,
  ServicesLedger,
  MethodLedger,
  ProofLedger,
  CtaLedger,
} from "@/components/home/ledger/sections-ledger";

// "The Ledger" homepage redesign v2 (2026-06-24). The .theme-ledger scope +
// bespoke nav/footer are applied by SiteChrome for the "/" route only, so the
// rest of the site is untouched until approval. Prior versions (Meridian /
// editorial) remain on disk for rollback.
export default function HomePage() {
  return (
    <>
      <HeroLedger />
      <StatsLedger />
      <ServicesLedger />
      <MethodLedger />
      <ProofLedger />
      <CtaLedger />
    </>
  );
}
