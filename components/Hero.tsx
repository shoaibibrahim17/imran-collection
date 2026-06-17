"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, Navigation } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { EASE, staggerContainer, fadeUp, TAP_BTN } from "@/lib/motion";
import {
  business,
  contact,
  directionsLink,
  heroImages,
  telLink,
  whatsappLink,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

/** How long each background image stays before cross-fading (ms). */
const SLIDE_INTERVAL = 5000;

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = React.useState(0);

  // Auto-advance the background slideshow. Paused for reduced-motion users.
  React.useEffect(() => {
    if (reduceMotion || heroImages.length < 2) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % heroImages.length);
    }, SLIDE_INTERVAL);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink text-ivory"
    >
      {/* Auto-rotating background slideshow — all images stay mounted and
          cross-fade via opacity, with a slow Ken-Burns zoom on the active one. */}
      <div className="absolute inset-0">
        {heroImages.map((slide, i) => {
          const isActive = i === active;
          return (
            <motion.div
              key={slide.src}
              aria-hidden={!isActive}
              className="absolute inset-0"
              initial={false}
              animate={{
                opacity: isActive ? 0.7 : 0,
                // Continuous Ken-Burns zoom on the active slide over its full
                // on-screen duration; non-active slides reset to 1.
                scale: reduceMotion ? 1 : isActive ? 1.08 : 1,
              }}
              transition={{
                opacity: { duration: 0.7, ease: EASE },
                scale: { duration: SLIDE_INTERVAL / 1000, ease: "linear" },
              }}
            >
              <Image
                src={slide.src}
                alt=""
                fill
                // `priority` preloads the first slide and sets a high fetch
                // priority; the rest load lazily as the slideshow advances.
                priority={i === 0}
                // Full-bleed slot, but cap the request so large/retina screens
                // don't pull a 3840px source for a hero this size.
                sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, (max-width: 1536px) 1536px, 1920px"
                className="object-cover object-center"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Legibility overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/70 to-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent,rgba(20,20,22,0.7))]" />

      {/* Floating decorative elements (subtle, layered drift) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/4 size-72 rounded-full bg-gold/10 blur-3xl"
        animate={{ y: [0, -24, 0], x: [0, 12, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-1/4 size-80 rounded-full bg-maroon/20 blur-3xl"
        animate={{ y: [0, 28, 0], x: [0, -16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute right-[12%] top-[22%] hidden size-24 rounded-full border border-gold/30 sm:block"
        animate={{ y: [0, 18, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute left-[14%] bottom-[24%] hidden size-3 rounded-full bg-gold/70 sm:block"
        animate={{ y: [0, -16, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 text-center sm:px-6 sm:py-28 lg:px-8"
      >
        <motion.p
          variants={fadeUp}
          className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold sm:text-sm sm:tracking-[0.4em]"
        >
          {contact.address.city}, {contact.address.state}
        </motion.p>

        {/* Thin gold accent */}
        <motion.span
          aria-hidden
          variants={fadeUp}
          className="mx-auto mt-5 block h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent sm:mt-6"
        />

        <motion.h1
          variants={fadeUp}
          className="mx-auto mt-5 max-w-4xl font-display text-[2.9rem] font-bold leading-[1.02] tracking-tight sm:mt-6 sm:text-7xl lg:text-[5.25rem]"
        >
          <span className="text-gold-foil drop-shadow-[0_2px_24px_rgba(197,162,83,0.25)]">
            {business.name}
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-ivory/80 sm:mt-5 sm:text-lg"
        >
          {business.tagline}. Handpicked sarees, women&apos;s ethnic wear,
          menswear and home textiles — curated for every celebration.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mx-auto mt-9 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mt-10 sm:max-w-2xl sm:flex-row sm:items-center"
        >
          <motion.div whileTap={TAP_BTN} className="w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="cta-glow h-12 w-full px-6 text-base bg-gold text-ink hover:bg-gold-soft sm:w-auto"
            >
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp aria-hidden /> Enquire on WhatsApp
              </a>
            </Button>
          </motion.div>
          <motion.div whileTap={TAP_BTN} className="w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 w-full px-6 text-base border-gold/40 bg-ink/30 text-ivory backdrop-blur hover:bg-gold/10 hover:text-gold sm:w-auto"
            >
              <a href={telLink}>
                <Phone aria-hidden /> Call Now
              </a>
            </Button>
          </motion.div>
          <motion.div whileTap={TAP_BTN} className="w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 w-full px-6 text-base border-gold/40 bg-ink/30 text-ivory backdrop-blur hover:bg-gold/10 hover:text-gold sm:w-auto"
            >
              <a href={directionsLink} target="_blank" rel="noopener noreferrer">
                <Navigation aria-hidden /> Get Directions
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mx-auto mt-10 flex max-w-md items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-ivory/55 sm:mt-12 sm:gap-4 sm:text-xs"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
          Sarees · Ethnic · Menswear · Home
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
        </motion.div>
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute inset-x-0 bottom-16 z-10 flex justify-center gap-2.5">
        {heroImages.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show ${slide.alt}`}
            aria-current={i === active}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500",
              i === active ? "w-7 bg-gold" : "w-2.5 bg-ivory/40 hover:bg-ivory/70"
            )}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <motion.span
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 1, 0.2], y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </div>
    </section>
  );
}
