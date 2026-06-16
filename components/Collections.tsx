"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { collections, whatsappLink } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const accentRing: Record<string, string> = {
  maroon: "group-hover:ring-maroon",
  forest: "group-hover:ring-forest",
  ink: "group-hover:ring-ink",
  beige: "group-hover:ring-beige",
};

/* Hover choreography — driven by the link's hover/focus gesture and
   propagated to children via shared variant names. Transform/opacity only,
   so it stays GPU-friendly. */
const card: Variants = {
  rest: {
    y: 0,
    boxShadow: "0 12px 30px -18px rgba(20,20,22,0.35)",
    transition: { type: "spring", stiffness: 300, damping: 26 },
  },
  hover: {
    y: -10,
    boxShadow: "0 34px 60px -24px rgba(20,20,22,0.5)",
    transition: { type: "spring", stiffness: 300, damping: 26 },
  },
};

const image: Variants = {
  rest: { scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  hover: { scale: 1.08, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const content: Variants = {
  rest: { y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  hover: { y: -4, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

const cta: Variants = {
  rest: { opacity: 0.65, x: 0 },
  hover: { opacity: 1, x: 4 },
};

export default function Collections() {
  return (
    <section id="collections" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-maroon">
            Explore
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Our Collections
          </h2>
          <div className="rule-gold mx-auto mt-6 w-40" />
          <p className="mt-6 text-base text-ink/65">
            Four worlds of textile under one roof — explore in store or message
            us to know what&apos;s currently available.
          </p>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.a
                href={whatsappLink(
                  `Hello Imran Collections, I'd like to know more about your ${c.name}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Enquire about ${c.name} on WhatsApp`}
                variants={card}
                initial="rest"
                animate="rest"
                whileHover="hover"
                whileFocus="hover"
                className={cn(
                  "group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl ring-1 ring-black/5 outline-none focus-visible:ring-2 focus-visible:ring-gold",
                  accentRing[c.accent]
                )}
              >
                {/* Zooming cover image */}
                <motion.div variants={image} className="absolute inset-0">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

                {/* Sliding content */}
                <motion.div variants={content} className="relative z-10 p-5">
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
        </div>
      </div>
    </section>
  );
}
