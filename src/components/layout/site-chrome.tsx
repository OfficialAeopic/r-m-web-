import { NavLedger } from "@/components/home/ledger/nav-ledger";
import { FooterLedger } from "@/components/home/ledger/footer-ledger";

// Unified chrome (2026-06-29): the "Ledger" nav + footer + .theme-ledger world
// now wrap EVERY route, so inner pages share the homepage's shell and theme.
// (The old editorial Navbar/Footer are retired from the chrome.)
export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="theme-ledger flex flex-col min-h-full">
      <NavLedger />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <FooterLedger />
    </div>
  );
}
