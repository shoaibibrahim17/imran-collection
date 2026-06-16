"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { offer, whatsappLink } from "@/lib/site-data";
import { EASE, TAP_BTN } from "@/lib/motion";

export default function OfferBanner() {
  return (
    <section
      aria-label="Featured offer"
      className="relative overflow-hidden bg-maroon py-14 sm:py-20"
    >
      {/* Real promo image, dimmed into the maroon for legibility */}
      <Image
        src={offer.image}
        alt={offer.imageAlt}
        fill
        sizes="100vw"
        className="object-cover object-center opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-maroon via-maroon/85 to-maroon/60" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(197,162,83,0.18),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(197,162,83,0.14),transparent_45%)]"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-5 text-center text-ivory sm:px-6 lg:flex-row lg:justify-between lg:text-left"
      >
        <div className="max-w-2xl">
          <span className="inline-block rounded-full border border-gold/50 bg-ink/20 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-gold backdrop-blur">
            {offer.kicker}
          </span>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            {offer.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ivory/85 sm:text-base">
            {offer.text}
          </p>
        </div>
        <motion.div whileTap={TAP_BTN} className="w-full shrink-0 sm:w-auto">
          <Button
            asChild
            size="lg"
            className="cta-glow h-12 w-full px-6 text-base bg-gold text-ink hover:bg-gold-soft sm:w-auto"
          >
            <a
              href={whatsappLink(
                "Hello Imran Collections, I'd like to know about your latest festive & wedding collection."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp aria-hidden /> {offer.cta}
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
