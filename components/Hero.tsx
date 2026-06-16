"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Navigation } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { EASE, staggerContainer, fadeUp, TAP_BTN } from "@/lib/motion";
import {
  business,
  collections,
  contact,
  directionsLink,
  telLink,
  whatsappLink,
} from "@/lib/site-data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink text-ivory"
    >
      {/* Background image + layered overlays for legibility */}
      <Image
        src={collections[0].image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-70"
      />
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

        <motion.h1
          variants={fadeUp}
          className="mx-auto mt-5 max-w-4xl font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:mt-6 sm:text-6xl lg:text-7xl"
        >
          <span className="text-gold-foil">{business.name}</span>
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
