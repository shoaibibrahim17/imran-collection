"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { collections, whatsappLink } from "@/lib/site-data";
import {
  cardHover,
  imageZoom,
  cardContent,
  cardItem,
  staggerContainer,
  TAP,
} from "@/lib/motion";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

const accentRing: Record<string, string> = {
  maroon: "group-hover:ring-maroon",
  forest: "group-hover:ring-forest",
  ink: "group-hover:ring-ink",
  beige: "group-hover:ring-beige",
};

const cardVar = cardHover();
const cta = {
  rest: { opacity: 0.65, x: 0 },
  hover: { opacity: 1, x: 4 },
};

export default function Collections() {
  return (
    <section id="collections" className="bg-ivory py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-maroon">
            Explore
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Our Collections
          </h2>
          <div className="rule-gold mx-auto mt-5 w-36 sm:mt-6 sm:w-40" />
          <p className="mt-5 text-[15px] text-ink/65 sm:mt-6 sm:text-base">
            Four worlds of textile under one roof — explore in store or message
            us to know what&apos;s currently available.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        >
          {collections.map((c) => (
            <motion.div key={c.id} variants={cardItem}>
              <motion.a
                href={whatsappLink(
                  `Hello Imran Collections, I'd like to know more about your ${c.name}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Enquire about ${c.name} on WhatsApp`}
                variants={cardVar}
                initial="rest"
                animate="rest"
                whileHover="hover"
                whileFocus="hover"
                whileTap={TAP}
                className={cn(
                  "group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-3xl ring-1 ring-black/5 outline-none focus-visible:ring-2 focus-visible:ring-gold",
                  accentRing[c.accent]
                )}
              >
                <motion.div variants={imageZoom} className="absolute inset-0">
                  <Image
                    src={c.image}
                    alt={`${c.name} — ${c.blurb}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

                <motion.div variants={cardContent} className="relative z-10 p-5">
                  <h3 className="font-display text-xl font-semibold text-ivory">
                    {c.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ivory/75">
                    {c.blurb}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                    Enquire
                    <motion.span variants={cta} className="inline-flex">
                      <ArrowRight className="size-4" aria-hidden />
                    </motion.span>
                  </span>
                </motion.div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
