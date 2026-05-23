"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type AnimateOnScrollProps = {
  children: React.ReactNode;
  /** Delay in seconds before animation starts (used for stagger). */
  delay?: number;
  /** Optional className passed through to the motion.div wrapper. */
  className?: string;
  /** Override the y-axis travel distance (default 20). */
  y?: number;
};

/**
 * Wrap a section (or row of cards) to fade-up into view the first time it
 * crosses the -50px viewport margin. Respects prefers-reduced-motion — when
 * set, renders the child without any motion.
 */
export function AnimateOnScroll({
  children,
  delay = 0,
  className,
  y = 8,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
