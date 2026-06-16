"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { business, navLinks, telLink, whatsappLink } from "@/lib/site-data";

export default function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-gold/20 bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/80"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3" aria-label={`${business.name} — home`}>
          <span className="relative inline-flex size-9 items-center justify-center overflow-hidden rounded-full ring-1 ring-gold/40">
            <Image
              src="/images/logo.png"
              alt=""
              width={36}
              height={36}
              className="size-full object-cover"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-semibold tracking-wide text-ivory">
              {business.name}
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-[0.25em] text-gold">
              Adilabad
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline pb-0.5 text-sm font-medium text-ivory/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-gold/40 bg-transparent text-ivory hover:bg-gold/10 hover:text-gold"
          >
            <a href={telLink}>
              <Phone aria-hidden /> Call
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-gold text-ink hover:bg-gold-soft"
          >
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp aria-hidden /> WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon-lg"
                aria-label="Open menu"
                className="border-gold/40 bg-transparent text-ivory hover:bg-gold/10"
              >
                <Menu aria-hidden />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 border-gold/20 bg-ink text-ivory"
            >
              <SheetHeader>
                <SheetTitle className="font-display text-ivory">
                  {business.name}
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-2 flex flex-col px-4" aria-label="Mobile">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="border-b border-white/5 py-3 text-base text-ivory/85 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 p-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gold text-ink hover:bg-gold-soft"
                >
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp aria-hidden /> Enquire on WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-gold/40 bg-transparent text-ivory hover:bg-gold/10"
                >
                  <a href={telLink}>
                    <Phone aria-hidden /> Call {business.shortName}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
