"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { collections, whatsappLink, wholesale } from "@/lib/site-data";
import { EASE, TAP_BTN } from "@/lib/motion";

export default function WholesaleEnquiry() {
  const [name, setName] = React.useState("");
  const [shop, setShop] = React.useState("");
  const [category, setCategory] = React.useState(collections[0]?.name ?? "");
  const [details, setDetails] = React.useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = [
      `Hello Imran Collections, I have a wholesale / bulk enquiry.`,
      name && `Name: ${name}`,
      shop && `Business: ${shop}`,
      category && `Interested in: ${category}`,
      details && `Details: ${details}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="wholesale" className="bg-forest py-16 text-ivory sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        {/* Copy + image */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
            For Businesses
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {wholesale.title}
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ivory/75 sm:text-base">
            {wholesale.text}
          </p>
          <ul className="mt-7 space-y-3 sm:mt-8">
            {wholesale.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Check className="size-4" aria-hidden />
                </span>
                <span className="text-sm text-ivory/85">{point}</span>
              </li>
            ))}
          </ul>

          {/* Supporting image */}
          <div className="relative mt-8 hidden aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-gold/20 sm:block">
            <Image
              src={wholesale.image}
              alt={wholesale.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="rounded-3xl border border-gold/20 bg-ink/40 p-5 backdrop-blur sm:p-8"
        >
          <div className="grid gap-4">
            <div className="grid gap-1.5">
              <label htmlFor="we-name" className="text-sm font-medium text-ivory/90">
                Your name
              </label>
              <Input
                id="we-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ravi Kumar"
                autoComplete="name"
                className="h-11 border-gold/25 bg-white/5 text-ivory placeholder:text-ivory/40"
              />
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="we-shop" className="text-sm font-medium text-ivory/90">
                Business / shop name{" "}
                <span className="text-ivory/40">(optional)</span>
              </label>
              <Input
                id="we-shop"
                value={shop}
                onChange={(e) => setShop(e.target.value)}
                placeholder="e.g. Kumar Textiles"
                autoComplete="organization"
                className="h-11 border-gold/25 bg-white/5 text-ivory placeholder:text-ivory/40"
              />
            </div>

            <div className="grid gap-1.5">
              <label
                htmlFor="we-category"
                className="text-sm font-medium text-ivory/90"
              >
                Interested in
              </label>
              <select
                id="we-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="h-11 rounded-lg border border-gold/25 bg-white/5 px-3 text-sm text-ivory outline-none focus-visible:border-gold focus-visible:ring-3 focus-visible:ring-gold/30"
              >
                {collections.map((c) => (
                  <option key={c.id} value={c.name} className="bg-ink text-ivory">
                    {c.name}
                  </option>
                ))}
                <option value="Mixed / Multiple" className="bg-ink text-ivory">
                  Mixed / Multiple
                </option>
              </select>
            </div>

            <div className="grid gap-1.5">
              <label
                htmlFor="we-details"
                className="text-sm font-medium text-ivory/90"
              >
                Requirement details
              </label>
              <textarea
                id="we-details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={4}
                placeholder="Quantity, occasion, timeline…"
                className="rounded-lg border border-gold/25 bg-white/5 px-3 py-2 text-sm text-ivory outline-none placeholder:text-ivory/40 focus-visible:border-gold focus-visible:ring-3 focus-visible:ring-gold/30"
              />
            </div>

            <motion.div whileTap={TAP_BTN} className="mt-2">
              <Button
                type="submit"
                size="lg"
                className="h-12 w-full px-6 text-base bg-gold text-ink hover:bg-gold-soft"
              >
                <FaWhatsapp aria-hidden /> Send Enquiry on WhatsApp
              </Button>
            </motion.div>
            <p className="text-center text-xs text-ivory/50">
              Opens WhatsApp with your details pre-filled. Pricing & availability
              — contact store to confirm.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
