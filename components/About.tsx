"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { about, business, collections } from "@/lib/site-data";

export default function About() {
  return (
    <section id="about" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        {/* Image collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative order-last lg:order-first"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-black/10">
            <Image
              src={collections[0].image}
              alt="Premium sarees at Imran Collections"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden aspect-square w-40 overflow-hidden rounded-xl ring-4 ring-ivory sm:block">
            <Image
              src={collections[1].image}
              alt="Women's ethnic wear at the store"
              fill
              sizes="160px"
              className="object-cover"
            />
          </div>
          <span
            aria-hidden
            className="absolute -left-3 -top-3 -z-10 hidden h-24 w-24 rounded-tl-3xl border-l-2 border-t-2 border-gold sm:block"
          />
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-maroon">
            Our Story
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {about.title}
          </h2>
          <div className="rule-gold mt-6 w-40 lg:mx-0" />

          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/70">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="mt-8 space-y-4">
            {about.highlights.map((h) => {
              const Icon = h.icon;
              return (
                <li key={h.label} className="flex items-center gap-3">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-maroon/10 text-maroon">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="text-sm font-medium text-ink/80">
                    {h.label}
                  </span>
                </li>
              );
            })}
          </ul>

          <p className="mt-8 border-l-2 border-gold pl-4 font-display text-lg italic text-ink/75">
            “{business.foundingStatement}”
          </p>
        </motion.div>
      </div>
    </section>
  );
}
