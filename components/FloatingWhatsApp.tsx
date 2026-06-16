"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

import { whatsappLink } from "@/lib/site-data";

export default function FloatingWhatsApp() {
  const [show, setShow] = React.useState(false);

  // Reveal the button once the visitor scrolls past the hero.
  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Imran Collections on WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/25 ring-1 ring-black/5 transition-transform hover:scale-105"
        >
          {/* Pulsing halo */}
          <span
            aria-hidden
            className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40"
          />
          <FaWhatsapp className="size-6" aria-hidden />
          <span className="hidden sm:inline">Chat on WhatsApp</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
