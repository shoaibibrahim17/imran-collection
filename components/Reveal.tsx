"use client";

import { motion } from "framer-motion";

import { CINEMATIC } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Vertical offset to rise from (px). */
  y?: number;
  /** Delay before the reveal starts (s). */
  delay?: number;
  /** Animation duration (s). */
  duration?: number;
  /** Fraction of the element that must be visible before revealing. */
  amount?: number;
  /** Add a soft blur-in for extra depth (default true). */
  blur?: boolean;
};

/**
 * Cinematic scroll-reveal wrapper: the first time its children enter the
 * viewport they rise, fade and (optionally) sharpen from a soft blur on a long
 * expo glide. Reused across every section so the reveal feel is consistent.
 * Honours reduced-motion via the global MotionConfig.
 */
export default function Reveal({
  children,
  className,
  y = 40,
  delay = 0,
  duration = 0.9,
  amount = 0.3,
  blur = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: blur ? "blur(8px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: CINEMATIC }}
    >
      {children}
    </motion.div>
  );
}
