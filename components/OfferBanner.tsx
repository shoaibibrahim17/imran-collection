"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { offer, whatsappLink } from "@/lib/site-data";

export default function OfferBanner() {
  return (
    <section
      aria-label="Featured offer"
      className="relative overflow-hidden bg-maroon py-16 sm:py-20"
    >
      {/* Decorative gold motif background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(197,162,83,0.18),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(197,162,83,0.14),transparent_45%)]"
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center text-ivory sm:px-6 lg:flex-row lg:justify-between lg:text-left"
      >
        <div className="max-w-2xl">
          <span className="inline-block rounded-full border border-gold/50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-gold">
            {offer.kicker}
          </span>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            {offer.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ivory/80 sm:text-base">
            {offer.text}
          </p>
        </div>
        <Button
          asChild
          size="lg"
          className="h-12 shrink-0 px-6 text-base bg-gold text-ink hover:bg-gold-soft"
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
    </section>
  );
}
