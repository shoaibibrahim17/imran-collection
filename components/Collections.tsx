"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { collections, whatsappLink } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const accentRing: Record<string, string> = {
  maroon: "group-hover:ring-maroon",
  forest: "group-hover:ring-forest",
  ink: "group-hover:ring-ink",
  beige: "group-hover:ring-beige",
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
            <motion.a
              key={c.id}
              href={whatsappLink(
                `Hello Imran Collections, I'd like to know more about your ${c.name}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
              className={cn(
                "group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl",
                accentRing[c.accent]
              )}
            >
              <Image
                src={c.image}
                alt={c.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="relative z-10 p-5">
                <h3 className="font-display text-xl font-semibold text-ivory">
                  {c.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ivory/75">
                  {c.blurb}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                  Enquire
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
