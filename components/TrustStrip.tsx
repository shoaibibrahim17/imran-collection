"use client";

import { motion } from "framer-motion";

import { trustItems } from "@/lib/site-data";
import { staggerContainer, fadeUp } from "@/lib/motion";

export default function TrustStrip() {
  return (
    <section
      aria-label="Why shop with us"
      className="border-y border-gold/15 bg-ink text-ivory"
    >
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-gold/10 sm:grid-cols-4"
      >
        {trustItems.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="flex flex-col items-center gap-2 bg-ink px-4 py-8 text-center sm:flex-row sm:items-start sm:gap-4 sm:text-left"
            >
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                <Icon className="size-5" aria-hidden />
              </span>
              <span>
                <span className="block font-display text-sm font-semibold tracking-wide text-ivory">
                  {item.title}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-ivory/60">
                  {item.text}
                </span>
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
