"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { products, whatsappLink } from "@/lib/site-data";
import {
  CINEMATIC,
  cardHover,
  imageZoom,
  cardContent,
  TAP,
  TAP_BTN,
} from "@/lib/motion";
import Reveal from "@/components/Reveal";

const ALL = "All";
const cardVar = cardHover(
  "0 12px 30px -20px rgba(0,0,0,0.55)",
  "0 30px 55px -24px rgba(0,0,0,0.7)",
  -8
);

export default function ProductGrid() {
  const categories = React.useMemo(
    () => [ALL, ...Array.from(new Set(products.map((p) => p.category)))],
    []
  );
  const [active, setActive] = React.useState<string>(ALL);

  const visible = products.filter(
    (p) => active === ALL || p.category === active
  );

  return (
    <section id="featured" className="bg-ink py-16 text-ivory sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
            Catalogue
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ivory sm:text-4xl">
            Featured Pieces
          </h2>
          <div className="rule-gold mx-auto mt-5 w-36 sm:mt-6 sm:w-40" />
          <p className="mt-5 text-[15px] text-ivory/65 sm:mt-6 sm:text-base">
            A glimpse of what you&apos;ll find in store. Prices and availability
            — contact store to confirm.
          </p>
        </Reveal>

        {/* Category filter — horizontally scrollable on small screens */}
        <div
          role="tablist"
          aria-label="Filter products by category"
          className="no-scrollbar mt-8 flex snap-x gap-2 overflow-x-auto pb-1 sm:mt-10 sm:flex-wrap sm:justify-center sm:overflow-visible"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              whileTap={TAP_BTN}
              className={cn(
                "shrink-0 snap-start rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                active === cat
                  ? "border-gold bg-gold text-ink"
                  : "border-gold/25 text-ivory/70 hover:border-gold/60 hover:text-gold"
              )}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 44, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: CINEMATIC }}
                className="h-full"
              >
                <motion.div
                  variants={cardVar}
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                  whileFocus="hover"
                  whileTap={TAP}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <motion.div variants={imageZoom} className="absolute inset-0">
                      <Image
                        src={p.image}
                        alt={`${p.name} — ${p.category}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </motion.div>
                    {p.tag ? (
                      <Badge className="absolute left-3 top-3 border-transparent bg-gold text-ink shadow-sm">
                        {p.tag}
                      </Badge>
                    ) : null}
                  </div>
                  <motion.div
                    variants={cardContent}
                    className="flex flex-1 flex-col p-4"
                  >
                    <p className="text-[11px] uppercase tracking-[0.2em] text-gold/80">
                      {p.category}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-semibold text-ivory">
                      {p.name}
                    </h3>
                    <p className="mt-1 flex-1 text-sm leading-relaxed text-ivory/60">
                      {p.note}
                    </p>
                    <motion.div whileTap={TAP_BTN} className="mt-4">
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="w-full border-gold/40 bg-transparent text-ivory hover:bg-gold/10 hover:text-gold"
                      >
                        <a
                          href={whatsappLink(
                            `Hello Imran Collections, I'm interested in the ${p.name} (${p.category}). Could you share more details?`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaWhatsapp aria-hidden /> Enquire
                        </a>
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
