import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

import {
  business,
  contact,
  fullAddress,
  navLinks,
  telLink,
  whatsappLink,
} from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-ink text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <span className="relative inline-flex size-10 items-center justify-center overflow-hidden rounded-full ring-1 ring-gold/40">
              <Image
                src="/images/logo.png"
                alt=""
                width={40}
                height={40}
                className="size-full object-cover"
              />
            </span>
            <span className="font-display text-lg font-semibold tracking-wide text-ivory">
              {business.name}
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/60">
            {business.tagline} in {contact.address.city},{" "}
            {contact.address.state}. {business.description}
          </p>
        </div>

        {/* Explore */}
        <nav aria-label="Footer">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Explore
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ivory/70 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Get in Touch
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-ivory/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              <span>{fullAddress}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0 text-gold" aria-hidden />
              <a
                href={telLink}
                className="transition-colors hover:text-gold"
              >
                {contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="size-4 shrink-0 text-gold" aria-hidden />
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                Message on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-center text-xs text-ivory/45 sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p>
            © {2026} {business.name}. All rights reserved.
          </p>
          <p>Adilabad, Telangana · India</p>
        </div>
      </div>
    </footer>
  );
}
