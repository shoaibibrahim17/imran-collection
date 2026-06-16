"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import { gallery } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export default function Gallery() {
  const [active, setActive] = React.useState<number | null>(null);

  // Close on Escape
  React.useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="gallery" className="bg-beige/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-maroon">
            Step Inside
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Store Gallery
          </h2>
          <div className="rule-gold mx-auto mt-6 w-40" />
          <p className="mt-6 text-base text-ink/65">
            A look around our Adilabad showroom and collections.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <motion.button
              key={g.id}
              type="button"
              onClick={() => setActive(i)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={cn(
                "group relative aspect-square overflow-hidden rounded-xl ring-1 ring-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
                i === 0 && "col-span-2 row-span-2 lg:col-span-1 lg:row-span-1"
              )}
              aria-label={`View image: ${g.alt}`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/20" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4 backdrop-blur"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={gallery[active].alt}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close gallery image"
              className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full border border-gold/40 text-ivory transition-colors hover:bg-gold/10 hover:text-gold"
            >
              <X aria-hidden />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
              className="relative aspect-square w-full max-w-2xl overflow-hidden rounded-2xl ring-1 ring-gold/30"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={gallery[active].src}
                alt={gallery[active].alt}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
