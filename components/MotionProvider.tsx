"use client";

import { MotionConfig } from "framer-motion";

/**
 * Global motion configuration. `reducedMotion="user"` makes Framer Motion
 * automatically skip transform/layout animations for visitors who have the
 * "reduce motion" OS setting enabled — opacity changes still apply, so content
 * remains discoverable. Wraps the whole app from the root layout.
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
