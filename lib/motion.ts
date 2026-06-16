/**
 * Shared Framer Motion presets for Imran Collections.
 *
 * One source of truth for the site's iOS-style motion language: soft springs,
 * gentle fades and slides, restrained zoom/lift on hover. Transform/opacity
 * only, so everything stays GPU-friendly. Reduced-motion is handled globally
 * via <MotionConfig reducedMotion="user"> in MotionProvider.
 */

import type { Variants, Transition } from "framer-motion";

/** Premium easing curve (gentle ease-out, no overshoot). */
export const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Cinematic easing — an expo-style ease-out. Content glides in fast then
 * settles slowly, the signature of a polished scroll reveal.
 */
export const CINEMATIC = [0.16, 1, 0.3, 1] as const;

/** Soft spring used for hover lift / tap — subtle, never bouncy. */
export const SPRING: Transition = {
  type: "spring",
  stiffness: 280,
  damping: 28,
  mass: 0.6,
};

/* ----------------------------- Scroll reveal ----------------------------- */
/* Cinematic reveals: rise + gentle blur-in + soft scale, on a long expo glide.
   Blur/opacity stay GPU-reasonable because the stagger means only a couple of
   elements animate at any instant. */

/** Fade + rise + blur-in. Use for headings, paragraphs, standalone blocks. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: CINEMATIC },
  },
};

/** Plain fade, no movement. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: CINEMATIC } },
};

/** Horizontal reveal for two-column sections (image / form / copy). */
export function sideReveal(x = 56): Variants {
  return {
    hidden: { opacity: 0, x, filter: "blur(8px)" },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: CINEMATIC },
    },
  };
}

/**
 * Stagger parent for card grids / lists. Children should use `fadeUp`
 * (or `cardItem`) and the parent drives their reveal in sequence.
 */
export function staggerContainer(stagger = 0.12, delayChildren = 0.08): Variants {
  return {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

/** Card entrance — cinematic rise + soft scale + blur-in. */
export const cardItem: Variants = {
  hidden: { opacity: 0, y: 44, scale: 0.94, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: CINEMATIC },
  },
};

/* ------------------------------ Card hover ------------------------------- */
/* Propagated from the card root's hover/focus gesture to its children via
   shared variant names ("rest" / "hover"). */

/** Card lift + deepening shadow. `shadowRest`/`shadowHover` tune per surface. */
export function cardHover(
  shadowRest = "0 12px 30px -18px rgba(20,20,22,0.35)",
  shadowHover = "0 34px 60px -24px rgba(20,20,22,0.5)",
  lift = -10
): Variants {
  return {
    rest: { y: 0, boxShadow: shadowRest, transition: SPRING },
    hover: { y: lift, boxShadow: shadowHover, transition: SPRING },
  };
}

/** Smooth image zoom on hover. */
export const imageZoom: Variants = {
  rest: { scale: 1, transition: { duration: 0.6, ease: EASE } },
  hover: { scale: 1.08, transition: { duration: 0.6, ease: EASE } },
};

/** Subtle upward slide for the text block sitting over/under an image. */
export const cardContent: Variants = {
  rest: { y: 0, transition: { duration: 0.4, ease: EASE } },
  hover: { y: -4, transition: { duration: 0.4, ease: EASE } },
};

/** Tap feedback for interactive cards/links. */
export const TAP = { scale: 0.985 } as const;

/** Tap feedback for buttons. */
export const TAP_BTN = { scale: 0.96 } as const;
