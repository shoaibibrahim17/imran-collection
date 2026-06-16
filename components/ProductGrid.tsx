"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { products, whatsappLink } from "@/lib/site-data";

const ALL = "All";

/* Hover choreography, propagated from the card to its children. Transform and
   opacity only — cheap to animate even across the full grid. */
const card: Variants = {
  rest: {
    y: 0,
    boxShadow: "0 12px 30px -20px rgba(0,0,0,0.5)",
    transition: { type: "spring", stiffness: 300, damping: 26 },
  },
  hover: {
    y: -8,
    boxShadow: "0 30px 55px -24px rgba(0,0,0,0.65)",
    transition: { type: "spring", stiffness: 300, damping: 26 },
  },
};

const image: Variants = {
  rest: { scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  hover: { scale: 1.07, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const content: Variants = {
  rest: { y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  hover: { y: -3, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

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
    <section id="featured" className="bg-ink py-20 text-ivory sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Catalogue
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ivory sm:text-4xl">
            Featured Pieces
          </h2>
          <div className="rule-gold mx-auto mt-6 w-40" />
          <p className="mt-6 text-base text-ivory/65">
            A glimpse of what you&apos;ll find in store. Prices and availability
            — contact store to confirm.
          </p>
        </header>

        {/* Category filter */}
        <div
          role="tablist"
          aria-label="Filter products by category"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                active === cat
                  ? "border-gold bg-gold text-ink"
                  : "border-gold/25 text-ivory/70 hover:border-gold/60 hover:text-gold"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
                className="h-full"
              >
                <motion.div
                  variants={card}
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <motion.div variants={image} className="absolute inset-0">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </motion.div>
                    {p.tag ? (
                      <Badge className="absolute left-3 top-3 border-transparent bg-gold text-ink">
                        {p.tag}
                      </Badge>
                    ) : null}
                  </div>
                  <motion.div
                    variants={content}
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
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="mt-4 border-gold/40 bg-transparent text-ivory hover:bg-gold/10 hover:text-gold"
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
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
