"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { services } from "@/content/services";
import { serviceAreas } from "@/content/service-areas";

type Child = { href: string; title: string; hint?: string };
type NavLinkDef = { href: string; label: string; children?: Child[] };

const LINKS: NavLinkDef[] = [
  {
    href: "/services",
    label: "Services",
    children: services.map((s) => ({
      href: `/services/${s.slug}`,
      title: s.title,
      hint: s.shortDescription,
    })),
  },
  {
    href: "/service-areas",
    label: "Service Areas",
    children: serviceAreas.map((a) => ({
      href: `/service-areas/${a.slug}`,
      title: a.name,
      hint: a.proximity,
    })),
  },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function Monogram() {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="R & M — Clear Crossway Solutions, home">
      <span className="relative inline-flex size-9 items-center justify-center">
        <svg viewBox="0 0 40 40" className="size-9" fill="none" aria-hidden="true">
          {/* roundel + road/crossway motif */}
          <rect x="1.5" y="1.5" width="37" height="37" rx="8" stroke="var(--l-emerald)" strokeWidth="1.5" />
          <path d="M20 4 V36" stroke="var(--l-emerald)" strokeWidth="5.5" opacity="0.16" />
          <path d="M4 20 H36" stroke="var(--l-emerald)" strokeWidth="5.5" opacity="0.16" />
          <path className="l-pulse" d="M20 7 V33" stroke="var(--l-emerald)" strokeWidth="1.4" strokeDasharray="3 3.2" />
          <path d="M7 20 H33" stroke="var(--l-emerald)" strokeWidth="1.4" strokeDasharray="3 3.2" />
          <circle cx="20" cy="20" r="2.1" fill="var(--l-emerald)" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-extrabold tracking-[-0.01em] text-[15px]" style={{ color: "var(--l-bone)" }}>
          R &amp; M
        </span>
        <span className="block l-mono text-[8.5px] uppercase tracking-[0.20em]" style={{ color: "var(--l-emerald)" }}>
          Clear Crossway Solutions
        </span>
      </span>
    </Link>
  );
}

/* Desktop nav item — plain link, or a hover dropdown when it has children. */
function DesktopNavItem({ link }: { link: NavLinkDef }) {
  const [open, setOpen] = useState(false);

  if (!link.children) {
    return (
      <li>
        <Link
          href={link.href}
          className="group relative text-[13.5px] font-medium transition-colors"
          style={{ color: "var(--l-bone-dim)" }}
        >
          {link.label}
          <span
            className="absolute -bottom-1.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
            style={{ background: "var(--l-emerald)" }}
          />
        </Link>
      </li>
    );
  }

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={link.href}
        className="group relative inline-flex items-center gap-1 text-[13.5px] font-medium transition-colors"
        style={{ color: "var(--l-bone-dim)" }}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {link.label}
        <ChevronDown
          className="size-3.5 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "none", color: "var(--l-bone-faint)" }}
          aria-hidden
        />
        <span
          className="absolute -bottom-1.5 left-0 h-px transition-all duration-300"
          style={{ background: "var(--l-emerald)", width: open ? "100%" : 0 }}
        />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="absolute left-0 top-full pt-3"
            style={{ width: 480, zIndex: 60 }}
          >
            <div
              className="overflow-hidden rounded-lg border shadow-[0_18px_44px_-12px_rgba(10,22,38,0.28)]"
              style={{ background: "var(--l-bg)", borderColor: "var(--l-line)", borderTop: "2px solid var(--l-emerald)" }}
            >
              <Link
                href={link.href}
                className="flex items-center justify-between gap-4 px-5 py-3.5 border-b transition-colors"
                style={{ borderColor: "var(--l-line)", background: "var(--l-bg-2)" }}
              >
                <span className="font-semibold text-[14px]" style={{ color: "var(--l-bone)" }}>
                  All {link.label}
                </span>
                <span className="l-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: "var(--l-emerald)" }}>
                  Index →
                </span>
              </Link>
              <ul className="grid grid-cols-2">
                {link.children.map((c, i) => (
                  <li
                    key={c.href}
                    style={{
                      borderRight: i % 2 === 0 ? "1px solid var(--l-line-2)" : undefined,
                      borderBottom: i < link.children!.length - (link.children!.length % 2 || 2)
                        ? "1px solid var(--l-line-2)"
                        : undefined,
                    }}
                  >
                    <Link href={c.href} className="block px-5 py-3 transition-colors hover:bg-[color-mix(in_oklab,var(--l-emerald)_8%,transparent)]">
                      <span className="block text-[13.5px] font-medium" style={{ color: "var(--l-bone)" }}>
                        {c.title}
                      </span>
                      {c.hint && (
                        <span className="mt-0.5 block text-[11px] leading-snug line-clamp-1" style={{ color: "var(--l-bone-faint)" }}>
                          {c.hint}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export function NavLedger() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <motion.div
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.86)",
          borderColor: scrolled ? "var(--l-line)" : "rgba(226,233,243,0.55)",
          boxShadow: scrolled ? "0 1px 24px rgba(10,22,38,0.08)" : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="border-b backdrop-blur-md"
        style={{ borderColor: "transparent" }}
      >
        <nav className="mx-auto max-w-7xl px-5 lg:px-8 h-[68px] flex items-center justify-between gap-6">
          <Monogram />

          <ul className="hidden lg:flex items-center gap-7">
            {LINKS.map((l) => (
              <DesktopNavItem key={l.href} link={l} />
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://portal.rmtax.org"
              className="l-mono text-[11px] uppercase tracking-[0.16em]"
              style={{ color: "var(--l-bone-faint)" }}
            >
              Client Login
            </a>
            <Link
              href="/contact#schedule"
              className="group inline-flex items-center gap-1.5 rounded-md px-4 h-10 text-[13px] font-semibold transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--l-btn)", color: "var(--l-btn-fg)" }}
            >
              Schedule
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="lg:hidden inline-flex size-10 items-center justify-center rounded-md"
            style={{ color: "var(--l-bone)" }}
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </button>
        </nav>
      </motion.div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 lg:hidden l-dark l-glow-bg overflow-y-auto"
          >
            <div className="flex items-center justify-between px-5 h-[68px]">
              <Monogram />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex size-10 items-center justify-center rounded-md"
                style={{ color: "var(--l-bone)" }}
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
              className="px-6 mt-4 pb-10 space-y-3"
            >
              {LINKS.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block l-serif text-[30px] leading-[1.2]"
                    style={{ color: "var(--l-bone)" }}
                  >
                    {l.label}
                  </Link>
                  {l.children && (
                    <ul className="mt-1.5 pl-1 flex flex-wrap gap-x-4 gap-y-1">
                      {l.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            onClick={() => setOpen(false)}
                            className="text-[13px]"
                            style={{ color: "var(--l-bone-faint)" }}
                          >
                            {c.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.li>
              ))}
            </motion.ul>
            <div className="px-6 mt-2 pb-10">
              <Link
                href="/contact#schedule"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-md px-5 h-12 text-[14px] font-semibold"
                style={{ background: "var(--l-btn)", color: "var(--l-btn-fg)" }}
              >
                Schedule a consultation <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
