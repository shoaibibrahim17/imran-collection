"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { sideReveal } from "@/lib/motion";
import {
  business,
  contact,
  directionsLink,
  fullAddress,
  hours,
  telLink,
  whatsappLink,
} from "@/lib/site-data";

const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  `${business.name}, ${fullAddress}`
)}&output=embed`;

export default function Contact() {
  return (
    <section id="contact" className="bg-ink py-16 text-ivory sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Visit Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ivory sm:text-4xl">
            Find Imran Collections
          </h2>
          <div className="rule-gold mx-auto mt-6 w-40" />
          <p className="mt-6 text-base text-ivory/65">
            We&apos;d love to welcome you in store. Call, message or get
            directions below.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Details */}
          <motion.div
            variants={sideReveal(-56)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-6"
          >
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-ivory">
                    Address
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ivory/70">
                    {fullAddress}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <Phone className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-ivory">
                    Phone &amp; WhatsApp
                  </h3>
                  <a
                    href={telLink}
                    className="mt-1 block text-sm text-ivory/70 transition-colors hover:text-gold"
                  >
                    {contact.phoneDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <Clock className="size-5" aria-hidden />
                </span>
                <div className="w-full">
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-ivory">
                    Store Hours
                  </h3>
                  <dl className="mt-2 space-y-1">
                    {hours.map((h) => (
                      <div
                        key={h.day}
                        className="flex items-center justify-between gap-4 text-sm"
                      >
                        <dt className="text-ivory/60">{h.day}</dt>
                        <dd className="text-ivory/85">
                          {h.closed ? "Closed" : h.open}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </li>
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 flex-1 px-5 text-base bg-gold text-ink hover:bg-gold-soft"
              >
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp aria-hidden /> WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 flex-1 px-5 text-base border-gold/40 bg-transparent text-ivory hover:bg-gold/10 hover:text-gold"
              >
                <a href={telLink}>
                  <Phone aria-hidden /> Call
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 flex-1 px-5 text-base border-gold/40 bg-transparent text-ivory hover:bg-gold/10 hover:text-gold"
              >
                <a
                  href={directionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation aria-hidden /> Directions
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            variants={sideReveal(56)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="min-h-80 overflow-hidden rounded-2xl border border-gold/20"
          >
            <iframe
              title={`Map to ${business.name}`}
              src={mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-80 w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
