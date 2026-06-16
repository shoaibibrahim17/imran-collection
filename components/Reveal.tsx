"use client";

import { motion } from "framer-motion";

import { EASE } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Vertical offset to slide up from (px). */
  y?: number;
  /** Delay before the reveal starts (s). */
  delay?: number;
  /** Animation duration (s). */
  duration?: number;
  /** Fraction of the element that must be visible before revealing. */
  amount?: number;
};

/**
 * Lightweight scroll-reveal wrapper: fades + slides its children up the first
 * time they enter the viewport. Reused across every section header and block
 * so the reveal feel is consistent. Honours reduced-motion via MotionConfig.
 */
export default function Reveal({
  children,
  className,
  y = 24,
  delay = 0,
  duration = 0.6,
  amount = 0.3,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
