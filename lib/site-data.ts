/**
 * Imran Collections — central, editable business data.
 *
 * This is the ONLY file you need to edit to update text, contact details,
 * collections, products and gallery items across the whole website.
 *
 * Guidelines kept in mind:
 *  - No prices are listed (enquire in store / WhatsApp).
 *  - No claims about delivery, returns, stitching or online payment —
 *    anything uncertain is phrased as "contact store to confirm".
 */

import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Gem,
  Store,
  HandHeart,
  Truck,
  BadgeCheck,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Business profile                                                          */
/* -------------------------------------------------------------------------- */

export const business = {
  name: "Imran Collections",
  shortName: "Imran Collections",
  tagline: "Sarees, Ethnic Wear & Home Textiles",
  description:
    "A premium clothing and textile destination in Adilabad, Telangana — offering handpicked sarees, women's ethnic wear, menswear and home textiles for every occasion.",
  // Used for SEO canonical + JSON-LD. Update to the live domain on launch.
  url: "https://www.imrancollections.in",
  // Free-text trading area (used in copy, not a delivery promise).
  servingArea: "Adilabad & surrounding Telangana",
  foundingStatement:
    "For years, families across Adilabad have trusted us to dress their most special moments.",
} as const;

export const contact = {
  phoneDisplay: "+91 78936 07172",
  // E.164 digits only — used for tel: and wa.me links.
  phoneE164: "917893607172",
  email: "", // add a business email here when available
  address: {
    line1: "Cinema Rd, Mahalaxmiwada",
    line2: "Adilabad (U)",
    city: "Adilabad",
    state: "Telangana",
    country: "India",
    postalCode: "504001",
  },
  // Approximate coordinates for Adilabad town centre — refine if you have exact ones.
  geo: { latitude: 19.6641, longitude: 78.532 },
  // Google Maps directions link. Replace with a place link once the listing exists.
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Imran+Collections+Cinema+Road+Mahalaxmiwada+Adilabad+Telangana+504001",
} as const;

/** Store hours — edit freely. `closed: true` renders as "Closed". */
export const hours: { day: string; open: string; closed?: boolean }[] = [
  { day: "Monday", open: "10:00 AM – 9:00 PM" },
  { day: "Tuesday", open: "10:00 AM – 9:00 PM" },
  { day: "Wednesday", open: "10:00 AM – 9:00 PM" },
  { day: "Thursday", open: "10:00 AM – 9:00 PM" },
  { day: "Friday", open: "10:00 AM – 9:00 PM" },
  { day: "Saturday", open: "10:00 AM – 9:30 PM" },
  { day: "Sunday", open: "11:00 AM – 8:00 PM" },
];

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                */
/* -------------------------------------------------------------------------- */

export const navLinks: { label: string; href: string }[] = [
  { label: "Collections", href: "#collections" },
  { label: "Featured", href: "#featured" },
  { label: "Gallery", href: "#gallery" },
  { label: "Wholesale", href: "#wholesale" },
  { label: "About", href: "#about" },
  { label: "Visit", href: "#contact" },
];

/* -------------------------------------------------------------------------- */
/*  Trust strip                                                               */
/* -------------------------------------------------------------------------- */

export const trustItems: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Gem,
    title: "Handpicked Quality",
    text: "Fabrics and designs selected with a discerning eye.",
  },
  {
    icon: Store,
    title: "Trusted Locally",
    text: "A familiar name for families across Adilabad.",
  },
  {
    icon: Sparkles,
    title: "Festive & Bridal",
    text: "Curated edits for weddings and celebrations.",
  },
  {
    icon: HandHeart,
    title: "Personal Service",
    text: "Friendly, in-store guidance for every visit.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Collections (top-level categories)                                        */
/* -------------------------------------------------------------------------- */

export type Collection = {
  id: string;
  name: string;
  blurb: string;
  image: string;
  accent: "maroon" | "forest" | "ink" | "beige";
};

export const collections: Collection[] = [
  {
    id: "sarees",
    name: "Sarees",
    blurb: "Silk, cotton & festive drapes in timeless weaves and colours.",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
    accent: "maroon",
  },
  {
    id: "ethnic",
    name: "Women's Ethnic Wear",
    blurb: "Suits, anarkalis and lehengas for every celebration.",
    image:
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
    accent: "forest",
  },
  {
    id: "menswear",
    name: "Menswear",
    blurb: "Kurtas, sherwanis and ethnic sets for the modern man.",
    image:
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=900&q=80",
    accent: "ink",
  },
  {
    id: "home-textiles",
    name: "Home Textiles",
    blurb: "Bedsheets, furnishings and drapery to dress your home.",
    image:
      "https://images.unsplash.com/photo-1616627561950-9f746e330187?auto=format&fit=crop&w=900&q=80",
    accent: "beige",
  },
];

/* -------------------------------------------------------------------------- */
/*  Featured products (catalogue showcase — NO prices)                        */
/* -------------------------------------------------------------------------- */

export type Product = {
  id: string;
  name: string;
  category: string;
  /** Short, evocative descriptor — never a price or stock claim. */
  note: string;
  image: string;
  /** Optional ribbon, e.g. "New", "Bridal", "Festive". */
  tag?: string;
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Banarasi Silk Saree",
    category: "Sarees",
    note: "Rich zari work for weddings & festivities.",
    image: "/images/products/p1.svg",
    tag: "Bridal",
  },
  {
    id: "p2",
    name: "Designer Anarkali Suit",
    category: "Women's Ethnic Wear",
    note: "Flowing silhouette with intricate detailing.",
    image: "/images/products/p2.svg",
    tag: "New",
  },
  {
    id: "p3",
    name: "Festive Kurta Set",
    category: "Menswear",
    note: "Crisp tailoring for celebrations & occasions.",
    image: "/images/products/p3.svg",
  },
  {
    id: "p4",
    name: "Cotton Bedsheet Set",
    category: "Home Textiles",
    note: "Soft, breathable weaves for everyday comfort.",
    image: "/images/products/p4.svg",
  },
  {
    id: "p5",
    name: "Embroidered Lehenga",
    category: "Women's Ethnic Wear",
    note: "Statement bridal piece with fine embroidery.",
    image: "/images/products/p5.svg",
    tag: "Bridal",
  },
  {
    id: "p6",
    name: "Wedding Sherwani",
    category: "Menswear",
    note: "Regal detailing for the groom's big day.",
    image: "/images/products/p6.svg",
    tag: "Festive",
  },
  {
    id: "p7",
    name: "Kanjeevaram Saree",
    category: "Sarees",
    note: "Traditional South Indian silk with gold borders.",
    image: "/images/products/p7.svg",
  },
  {
    id: "p8",
    name: "Curtains & Drapery",
    category: "Home Textiles",
    note: "Elegant furnishings to elevate any room.",
    image: "/images/products/p8.svg",
  },
];

/* -------------------------------------------------------------------------- */
/*  Offer banner                                                              */
/* -------------------------------------------------------------------------- */

export const offer = {
  kicker: "In-Store Now",
  title: "The Festive & Wedding Edit",
  text: "Discover our latest arrivals in sarees, ethnic wear and menswear. Visit us in store or message on WhatsApp to know more — contact store to confirm availability.",
  cta: "Enquire on WhatsApp",
} as const;

/* -------------------------------------------------------------------------- */
/*  Gallery                                                                   */
/* -------------------------------------------------------------------------- */

export const gallery: { id: string; src: string; alt: string }[] = [
  { id: "g1", src: "/images/gallery/g1.svg", alt: "Imran Collections store front in Adilabad" },
  { id: "g2", src: "/images/gallery/g2.svg", alt: "Wall of sarees on display in store" },
  { id: "g3", src: "/images/gallery/g3.svg", alt: "Menswear section inside the showroom" },
  { id: "g4", src: "/images/gallery/g4.svg", alt: "Home textiles and furnishings display" },
  { id: "g5", src: "/images/gallery/g5.svg", alt: "Festive collection display" },
  { id: "g6", src: "/images/gallery/g6.svg", alt: "Bridal corner with lehengas and silk sarees" },
];

/* -------------------------------------------------------------------------- */
/*  Wholesale enquiry                                                         */
/* -------------------------------------------------------------------------- */

export const wholesale = {
  title: "Wholesale & Bulk Enquiries",
  text: "Buying for a boutique, event or in bulk? Share your requirement and our team will get back to you. For pricing, minimum quantities and availability — contact store to confirm.",
  points: [
    "Sarees, ethnic wear & home textiles",
    "Bulk orders for shops & events",
    "Personalised assistance in store",
  ] as string[],
} as const;

/* -------------------------------------------------------------------------- */
/*  About                                                                     */
/* -------------------------------------------------------------------------- */

export const about = {
  title: "A Name Adilabad Trusts for Fine Textiles",
  paragraphs: [
    "Imran Collections is a clothing and textile store on Cinema Road, Mahalaxmiwada, in the heart of Adilabad, Telangana. We bring together sarees, women's ethnic wear, menswear and home textiles under one roof.",
    "Our focus is simple — handpicked quality, honest service and a warm in-store experience. Whether you are dressing for a wedding, a festival or everyday elegance, our team is here to help you choose.",
    "Step into our showroom to see and feel the collections in person, or reach us on WhatsApp and we'll be glad to assist.",
  ] as string[],
  highlights: [
    { icon: BadgeCheck, label: "Handpicked, quality-checked fabrics" },
    { icon: Store, label: "Walk-in showroom in central Adilabad" },
    { icon: Truck, label: "Bulk & wholesale enquiries welcome" },
  ] as { icon: LucideIcon; label: string }[],
};

/* -------------------------------------------------------------------------- */
/*  Link helpers                                                              */
/* -------------------------------------------------------------------------- */

/** Pre-filled WhatsApp chat link. */
export function whatsappLink(
  message = "Hello Imran Collections, I'd like to enquire about your collections."
): string {
  return `https://wa.me/${contact.phoneE164}?text=${encodeURIComponent(message)}`;
}

/** Click-to-call link. */
export const telLink = `tel:+${contact.phoneE164}`;

/** Google Maps directions link. */
export const directionsLink = contact.mapsUrl;

/** One-line, comma-separated postal address. */
export const fullAddress = [
  contact.address.line1,
  contact.address.line2,
  `${contact.address.city}, ${contact.address.state}`,
  contact.address.country,
  contact.address.postalCode,
].join(", ");
