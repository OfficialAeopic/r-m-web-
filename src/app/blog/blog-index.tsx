"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SectionNumber } from "@/components/typography/section-number";
import { pad2 } from "@/lib/roman";
import type { BlogPostMeta } from "@/lib/blog";

export function BlogIndex({
  posts,
  categories,
}: {
  posts: BlogPostMeta[];
  categories: string[];
}) {
  const [active, setActive] = useState<string>("All");
  const filtered = useMemo(
    () =>
      active === "All" ? posts : posts.filter((p) => p.category === active),
    [active, posts]
  );

  return (
    <>
      {/* Header */}
      <section className="border-b border-[var(--color-rule)]">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 pt-16 pb-12">
          <SectionNumber n={5} label="The Journal" />
          <div className="mt-7 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
            <h1
              className="font-display text-[var(--color-ink)]"
              style={{
                fontSize: "clamp(44px, 6.5vw, 84px)",
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
                fontWeight: 380,
              }}
            >
              Tax tips &amp;{" "}
              <span className="italic text-[var(--color-oxblood)]">
                resources.
              </span>
            </h1>
            <p className="font-display italic text-[18px] leading-[1.55] text-[var(--color-ink-secondary)] max-w-md">
              Deadlines, planning notes, and plain-English answers for Houston
              families and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Filter pills */}
      <section className="border-b border-[var(--color-rule)] bg-[var(--color-paper-tint)]">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 py-5 flex flex-wrap items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-muted)] mr-2">
            Filed Under —
          </span>
          {["All", ...categories].map((c) => {
            const isActive = c === active;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={cn(
                  "font-mono text-[11px] uppercase tracking-[0.14em] px-3 py-1 border transition-colors",
                  isActive
                    ? "border-[var(--color-oxblood)] bg-[var(--color-oxblood)] text-[var(--color-paper)]"
                    : "border-[var(--color-rule)] bg-[var(--color-paper)] text-[var(--color-ink-secondary)] hover:border-[var(--color-oxblood)] hover:text-[var(--color-oxblood)]"
                )}
              >
                {c}
              </button>
            );
          })}
        </div>
      </section>

      {/* Post grid */}
      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-12">
        {filtered.length === 0 ? (
          <p className="font-display italic text-[var(--color-ink-muted)] text-center py-20">
            Nothing has been filed under {active} yet.
          </p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--color-rule)]">
            {filtered.map((p, i) => (
              <li
                key={p.slug}
                className="border-r border-b border-[var(--color-rule)]"
              >
                <Link
                  href={`/blog/${p.slug}`}
                  className="group/post block h-full p-7 hover:bg-[var(--color-paper-tint)] transition-colors"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-gold-leaf)] group-hover/post:text-[var(--color-oxblood)] transition-colors tabular-nums">
                      {pad2(i + 1)}. {p.category}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-ink-muted)]">
                      {p.readTime}
                    </span>
                  </div>
                  <h2
                    className="mt-5 font-display text-[var(--color-ink)] tracking-tight"
                    style={{ fontSize: "22px", lineHeight: 1.2, fontWeight: 420 }}
                  >
                    {p.title}
                  </h2>
                  <p className="mt-4 text-[13.5px] leading-[1.55] text-[var(--color-ink-secondary)] line-clamp-3">
                    {p.excerpt}
                  </p>
                  <div className="mt-6 pt-4 border-t border-[var(--color-rule-soft)] flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-muted)]">
                      {new Date(p.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="font-display italic text-[12px] text-[var(--color-ink-muted)] group-hover/post:text-[var(--color-oxblood)] transition-colors">
                      Read →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
