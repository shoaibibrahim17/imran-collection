"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Navigation } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import {
  business,
  contact,
  directionsLink,
  telLink,
  whatsappLink,
} from "@/lib/site-data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink text-ivory"
    >
      {/* Background image + overlays */}
      <Image
        src="/images/hero.svg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent,rgba(20,20,22,0.55))]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-7xl px-4 py-28 text-center sm:px-6 lg:px-8"
      >
        <motion.p
          variants={item}
          className="text-xs font-medium uppercase tracking-[0.4em] text-gold sm:text-sm"
        >
          {contact.address.city}, {contact.address.state}
        </motion.p>

        <motion.h1
          variants={item}
          className="mx-auto mt-6 max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="text-gold-foil">{business.name}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-5 max-w-2xl text-base text-ivory/80 sm:text-lg"
        >
          {business.tagline}. Handpicked sarees, women&apos;s ethnic wear,
          menswear and home textiles — curated for every celebration.
        </motion.p>

        <motion.div
          variants={item}
          className="mx-auto mt-10 flex max-w-xl flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="h-12 w-full px-6 text-base bg-gold text-ink hover:bg-gold-soft sm:w-auto"
          >
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp aria-hidden /> Enquire on WhatsApp
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 w-full px-6 text-base border-gold/40 bg-transparent text-ivory hover:bg-gold/10 hover:text-gold sm:w-auto"
          >
            <a href={telLink}>
              <Phone aria-hidden /> Call Now
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 w-full px-6 text-base border-gold/40 bg-transparent text-ivory hover:bg-gold/10 hover:text-gold sm:w-auto"
          >
            <a href={directionsLink} target="_blank" rel="noopener noreferrer">
              <Navigation aria-hidden /> Get Directions
            </a>
          </Button>
        </motion.div>

        <motion.div
          variants={item}
          className="mx-auto mt-12 flex max-w-md items-center gap-4 text-xs uppercase tracking-[0.2em] text-ivory/55"
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
