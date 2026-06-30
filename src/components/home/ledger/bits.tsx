"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/* Count-up tally — animates from 0 → `to` the first time it scrolls into view. */
export function CountUp({
  to,
  duration = 1.8,
  prefix = "",
  suffix = "",
  className,
}: {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

/* Deterministic "falling figures" data-rain. SSR-safe (no random). */
export function FigureRain({ columns = 14 }: { columns?: number }) {
  const cols = Array.from({ length: columns });
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      style={{
        WebkitMaskImage: "radial-gradient(120% 90% at 75% 18%, #000 0%, transparent 72%)",
        maskImage: "radial-gradient(120% 90% at 75% 18%, #000 0%, transparent 72%)",
      }}
    >
      <div className="flex h-full justify-between">
        {cols.map((_, c) => {
          const dur = 14 + ((c * 5) % 13); // 14–26s, varied
          const digits = Array.from({ length: 40 }, (_, r) => (c * 7 + r * 3) % 10).join(" ");
          return (
            <div key={c} className="relative h-full" style={{ width: `${100 / columns}%` }}>
              <div
                className="l-fall l-mono absolute left-1/2 -translate-x-1/2 text-[12px] leading-[2.0] whitespace-pre"
                style={{
                  animationDuration: `${dur}s`,
                  color: c % 4 === 0 ? "rgba(111,160,242,0.34)" : "rgba(255,255,255,0.10)",
                  opacity: c % 3 === 0 ? 0.9 : 0.55,
                }}
              >
                {digits}
                {"\n"}
                {digits}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* Adding-machine tape — a seamless perpetual marquee. */
export function Tape({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-4 border-y" style={{ borderColor: "var(--l-line)" }}>
      <div className={`l-tape ${reverse ? "l-tape-rev" : ""}`}>
        {row.map((t, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="l-mono text-[12px] uppercase tracking-[0.18em] px-7" style={{ color: "var(--l-bone-dim)" }}>
              {t}
            </span>
            <span aria-hidden style={{ color: "var(--l-emerald)" }}>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
