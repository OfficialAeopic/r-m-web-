"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";
import { serviceAreas } from "@/content/service-areas";
import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

const PRIMARY_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-[60] border-b border-[var(--color-rule)] bg-[var(--color-paper)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Masthead */}
        <Link
          href="/"
          className="flex flex-col leading-[1.05] shrink-0 group/mark"
        >
          <span className="font-display text-[22px] text-[var(--color-ink)] tracking-[-0.02em]">
            R&nbsp;<span className="italic">&amp;</span>&nbsp;M
          </span>
          <span className="hidden sm:block font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--color-ink-muted)] mt-0.5">
            Accounting &amp; Tax Service
          </span>
          <span className="hidden sm:block font-mono text-[9px] uppercase tracking-[0.10em] text-[var(--color-gold-leaf)] mt-0.5">
            Est. 1981 · Houston
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-0.5"
        >
          <NavLink href="/" active={pathname === "/"}>
            Home
          </NavLink>
          <NavLink href="/about" active={pathname === "/about"}>
            About
          </NavLink>

          <NavDropdown
            label="Services"
            hubHref="/services"
            hubLabel="All practices"
            hubHint="The full lineup"
            active={pathname.startsWith("/services")}
            items={services.map((s) => ({
              href: `/services/${s.slug}`,
              title: s.title,
              hint: s.shortDescription,
            }))}
            width={520}
            cols={2}
          />

          <NavDropdown
            label="Service Areas"
            hubHref="/service-areas"
            hubLabel="All areas"
            hubHint="Greater Houston"
            active={pathname.startsWith("/service-areas")}
            items={serviceAreas.map((a) => ({
              href: `/service-areas/${a.slug}`,
              title: a.name,
              hint: a.proximity,
            }))}
            width={460}
            cols={2}
          />

          <NavLink href="/team" active={pathname === "/team"}>
            Team
          </NavLink>
          <NavLink href="/reviews" active={pathname === "/reviews"}>
            Reviews
          </NavLink>
          <NavLink href="/blog" active={pathname.startsWith("/blog")}>
            Blog
          </NavLink>
          <NavLink href="/contact" active={pathname === "/contact"}>
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <Button
            asChild
            className="hidden sm:inline-flex bg-[var(--color-oxblood)] text-[var(--color-paper)] hover:bg-[var(--color-oxblood-hover)] rounded-none font-sans font-medium tracking-wide h-10 px-5 text-[13px]"
          >
            <Link href="/contact#schedule">Schedule a consultation</Link>
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="lg:hidden p-2 text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)] hover:bg-[var(--color-oxblood-tint)] border border-[var(--color-rule)]"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[88%] sm:w-[400px] overflow-y-auto bg-[var(--color-paper)] border-l border-[var(--color-rule)]"
            >
              <SheetHeader>
                <SheetTitle className="font-display text-[22px] text-[var(--color-ink)] tracking-tight">
                  R&nbsp;<span className="italic">&amp;</span>&nbsp;M
                </SheetTitle>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-gold-leaf)]">
                  Est. 1981 · Houston
                </span>
              </SheetHeader>

              <nav className="px-4 pb-6 flex flex-col">
                {PRIMARY_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="border-b border-[var(--color-rule-soft)] px-1 py-3 text-sm text-[var(--color-ink)] hover:bg-[var(--color-oxblood-tint)]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}

                <Accordion type="multiple" className="mt-2">
                  <AccordionItem
                    value="services"
                    className="border-b border-[var(--color-rule-soft)]"
                  >
                    <AccordionTrigger className="px-1 py-3 text-sm text-[var(--color-ink)] hover:bg-[var(--color-oxblood-tint)] hover:no-underline">
                      Services
                    </AccordionTrigger>
                    <AccordionContent className="pt-1 pb-2 pl-3">
                      <Link
                        href="/services"
                        className="block py-2 text-sm text-[var(--color-ink)] hover:text-[var(--color-oxblood)]"
                        onClick={() => setMobileOpen(false)}
                      >
                        All Services
                      </Link>
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="block py-2 text-sm text-[var(--color-ink-secondary)] hover:text-[var(--color-oxblood)]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {s.title}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="areas"
                    className="border-b border-[var(--color-rule-soft)]"
                  >
                    <AccordionTrigger className="px-1 py-3 text-sm text-[var(--color-ink)] hover:bg-[var(--color-oxblood-tint)] hover:no-underline">
                      Service Areas
                    </AccordionTrigger>
                    <AccordionContent className="pt-1 pb-2 pl-3">
                      <Link
                        href="/service-areas"
                        className="block py-2 text-sm text-[var(--color-ink)] hover:text-[var(--color-oxblood)]"
                        onClick={() => setMobileOpen(false)}
                      >
                        All Service Areas
                      </Link>
                      {serviceAreas.map((a) => (
                        <Link
                          key={a.slug}
                          href={`/service-areas/${a.slug}`}
                          className="block py-2 text-sm text-[var(--color-ink-secondary)] hover:text-[var(--color-oxblood)]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {a.name}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Button
                  asChild
                  className="mt-6 bg-[var(--color-oxblood)] text-[var(--color-paper)] hover:bg-[var(--color-oxblood-hover)] rounded-none h-11"
                >
                  <Link
                    href="/contact#schedule"
                    onClick={() => setMobileOpen(false)}
                  >
                    Schedule a consultation
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="mt-2 border-[var(--color-rule)] rounded-none h-11 bg-transparent text-[var(--color-ink)]"
                >
                  <a href={`tel:${COMPANY.phoneTel}`}>{COMPANY.phone}</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------
 * Top-level nav link
 * ----------------------------------------------------------------------- */
function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      data-active={active ? "true" : undefined}
      className={cn(
        "group relative inline-flex items-center h-9 px-3 text-[12.5px] font-sans uppercase tracking-[0.10em] transition-colors",
        active
          ? "text-[var(--color-ink)]"
          : "text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)]"
      )}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className={cn(
          "absolute left-3 right-3 bottom-1 h-px bg-[var(--color-oxblood)] origin-left transition-transform duration-300 ease-out",
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        )}
      />
    </Link>
  );
}

/* -------------------------------------------------------------------------
 * Portal-rendered dropdown — guaranteed above EVERYTHING.
 *
 * The panel is rendered into document.body via createPortal so it cannot be
 * trapped by any ancestor stacking context. Its on-screen position is computed
 * from the trigger's getBoundingClientRect on open + resize, then bound to the
 * viewport with `position: fixed` so scroll doesn't drag it away.
 * ----------------------------------------------------------------------- */
type DropdownItem = { href: string; title: string; hint?: string };

function NavDropdown({
  label,
  hubHref,
  hubLabel,
  hubHint,
  items,
  active,
  width,
  cols,
}: {
  label: string;
  hubHref: string;
  hubLabel: string;
  hubHint?: string;
  items: DropdownItem[];
  active?: boolean;
  width: number;
  cols: 2 | 3;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Compute position when opening / when window resizes
  useLayoutEffect(() => {
    if (!open) return;
    function updatePos() {
      const trigger = triggerRef.current;
      if (!trigger) return;
      const rect = trigger.getBoundingClientRect();
      // Anchor below the trigger's bottom-left, but clamp to viewport
      const margin = 12;
      let left = rect.left;
      const maxLeft = window.innerWidth - width - margin;
      if (left > maxLeft) left = Math.max(margin, maxLeft);
      setCoords({ top: rect.bottom, left });
    }
    updatePos();
    window.addEventListener("resize", updatePos);
    window.addEventListener("scroll", updatePos, true);
    return () => {
      window.removeEventListener("resize", updatePos);
      window.removeEventListener("scroll", updatePos, true);
    };
  }, [open, width]);

  // Close on Escape + outside click (must check trigger AND panel)
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (
        triggerRef.current?.contains(target) ||
        panelRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  function openNow() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(true);
  }

  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 180);
  }

  const panel = open && coords && (
    <div
      ref={panelRef}
      role="menu"
      aria-label={label}
      onMouseEnter={openNow}
      onMouseLeave={scheduleClose}
      style={{
        position: "fixed",
        top: coords.top,
        left: coords.left,
        width,
        zIndex: 9999,
      }}
      className="pt-2"
    >
      <div className="border-t-2 border-[var(--color-oxblood)] border-b border-l border-r border-[var(--color-rule)] bg-[var(--color-paper)] shadow-[0_18px_40px_-12px_rgba(26,23,20,0.25)]">
        {/* Hub link */}
        <Link
          href={hubHref}
          className="group/hub flex items-baseline justify-between gap-4 px-5 py-4 border-b border-[var(--color-rule)] bg-[var(--color-paper-tint)] hover:bg-[var(--color-oxblood-tint)] transition-colors"
          onClick={() => setOpen(false)}
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-gold-leaf)] group-hover/hub:text-[var(--color-oxblood)] transition-colors">
              Index
            </p>
            <p className="mt-1 font-display text-[16px] tracking-tight text-[var(--color-ink)]">
              {hubLabel}
            </p>
          </div>
          {hubHint && (
            <p className="font-display italic text-[12px] text-[var(--color-ink-muted)] shrink-0">
              {hubHint} →
            </p>
          )}
        </Link>

        {/* Items grid */}
        <ul
          className={cn(
            "grid",
            cols === 2 ? "grid-cols-2" : "grid-cols-3"
          )}
        >
          {items.map((item, i) => {
            const isActive = pathname === item.href;
            const rowSize = cols === 2 ? 2 : 3;
            const isLastInRow = (i + 1) % rowSize === 0;
            const isLastRow = i >= items.length - (items.length % rowSize || rowSize);
            return (
              <li
                key={item.href}
                className={cn(
                  !isLastInRow && "border-r border-[var(--color-rule-soft)]",
                  !isLastRow && "border-b border-[var(--color-rule-soft)]"
                )}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "group/item block px-5 py-3.5 hover:bg-[var(--color-oxblood-tint)] transition-colors",
                    isActive && "bg-[var(--color-oxblood-tint)]"
                  )}
                  onClick={() => setOpen(false)}
                >
                  <p
                    className={cn(
                      "font-display text-[15px] tracking-tight transition-colors",
                      isActive
                        ? "text-[var(--color-oxblood)]"
                        : "text-[var(--color-ink)] group-hover/item:text-[var(--color-oxblood)]"
                    )}
                  >
                    {item.title}
                  </p>
                  {item.hint && (
                    <p className="mt-1 text-[11px] leading-[1.45] text-[var(--color-ink-muted)] line-clamp-2">
                      {item.hint}
                    </p>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );

  return (
    <div
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={scheduleClose}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        data-active={active ? "true" : undefined}
        onClick={() => setOpen((v) => !v)}
        onFocus={openNow}
        onBlur={(e) => {
          if (!panelRef.current?.contains(e.relatedTarget as Node)) {
            scheduleClose();
          }
        }}
        className={cn(
          "group relative inline-flex items-center gap-1 h-9 px-3 text-[12.5px] font-sans uppercase tracking-[0.10em] transition-colors",
          active || open
            ? "text-[var(--color-ink)]"
            : "text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)]"
        )}
      >
        <span>{label}</span>
        <ChevronDown
          className={cn(
            "size-3 transition-transform duration-200 text-[var(--color-ink-muted)]",
            open && "rotate-180 text-[var(--color-oxblood)]"
          )}
          aria-hidden
        />
        <span
          aria-hidden
          className={cn(
            "absolute left-3 right-3 bottom-1 h-px bg-[var(--color-oxblood)] origin-left transition-transform duration-300 ease-out",
            active || open ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          )}
        />
      </button>

      {mounted && panel && createPortal(panel, document.body)}
    </div>
  );
}
