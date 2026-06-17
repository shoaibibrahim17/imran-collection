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

const UNSPLASH = "https://images.unsplash.com";
/** Build a cropped, auto-formatted Unsplash URL at a sensible default size. */
function img(photo: string, w = 800): string {
  return `${UNSPLASH}/${photo}?auto=format&fit=crop&w=${w}&q=80`;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Banarasi Silk Saree",
    category: "Sarees",
    note: "Rich zari work for weddings & festivities.",
    image: img("photo-1641699862936-be9f49b1c38d"),
    tag: "Bridal",
  },
  {
    id: "p2",
    name: "Designer Anarkali Suit",
    category: "Women's Ethnic Wear",
    note: "Flowing silhouette with intricate detailing.",
    image: img("photo-1767955694884-d4bf352c23c2"),
    tag: "New",
  },
  {
    id: "p3",
    name: "Festive Kurta Set",
    category: "Menswear",
    note: "Crisp tailoring for celebrations & occasions.",
    image: img("photo-1770359993283-a2c2f386584e"),
  },
  {
    id: "p4",
    name: "Cotton Bedsheet Set",
    category: "Home Textiles",
    note: "Soft, breathable weaves for everyday comfort.",
    image: img("photo-1635594202056-9ea3b497e5c0"),
  },
  {
    id: "p5",
    name: "Embroidered Lehenga",
    category: "Women's Ethnic Wear",
    note: "Statement bridal piece with fine embroidery.",
    image: img("photo-1759906760638-eeffcb471e53"),
    tag: "Bridal",
  },
  {
    id: "p6",
    name: "Wedding Sherwani",
    category: "Menswear",
    note: "Regal detailing for the groom's big day.",
    image: img("photo-1781106699930-a692cfe30226"),
    tag: "Festive",
  },
  {
    id: "p7",
    name: "Kanjeevaram Saree",
    category: "Sarees",
    note: "Traditional South Indian silk with gold borders.",
    image: img("photo-1692992193981-d3d92fabd9cb"),
  },
  {
    id: "p8",
    name: "Curtains & Drapery",
    category: "Home Textiles",
    note: "Elegant furnishings to elevate any room.",
    image: img("photo-1754611380518-61a923cc47ca"),
  },
];

/* -------------------------------------------------------------------------- */
/*  Hero slideshow (auto-rotating background)                                 */
/* -------------------------------------------------------------------------- */

/** Full-bleed hero images that cross-fade automatically. High-res variants. */
export const heroImages: { src: string; alt: string }[] = [
  { src: img("photo-1610030469983-98e550d6193c", 1920), alt: "Woman in a premium silk saree" },
  { src: img("photo-1617627143750-d86bc21e42bb", 1920), alt: "Woman in festive women's ethnic wear" },
  { src: img("photo-1598808503746-f34c53b9323e", 1920), alt: "Menswear on display in the store" },
  { src: img("photo-1754611380518-61a923cc47ca", 1920), alt: "Elegant curtains and home drapery" },
  { src: img("photo-1616627561950-9f746e330187", 1920), alt: "Home textiles and soft furnishings" },
];

/* -------------------------------------------------------------------------- */
/*  Offer banner                                                              */
/* -------------------------------------------------------------------------- */

export const offer = {
  kicker: "In-Store Now",
  title: "The Festive & Wedding Edit",
  text: "Discover our latest arrivals in sarees, ethnic wear and menswear. Visit us in store or message on WhatsApp to know more — contact store to confirm availability.",
  cta: "Enquire on WhatsApp",
  image: img("photo-1773291934435-adb824c7f040", 1200),
  imageAlt: "Stacks of richly coloured festive fabrics in store",
} as const;

/* -------------------------------------------------------------------------- */
/*  Gallery                                                                   */
/* -------------------------------------------------------------------------- */

export const gallery: { id: string; src: string; alt: string }[] = [
  {
    id: "g1",
    src: img("photo-1441986300917-64674bd600d8", 900),
    alt: "Inside a premium clothing showroom with neatly arranged garments",
  },
  {
    id: "g2",
    src: img("photo-1779894765198-35a622862325", 900),
    alt: "Shelves stacked with vibrant folded fabrics and textiles",
  },
  {
    id: "g3",
    src: img("photo-1555529771-835f59fc5efe", 900),
    alt: "Racks of clothing on display inside the store",
  },
  {
    id: "g4",
    src: img("photo-1507434745378-235a6297156b", 900),
    alt: "Folded home textiles arranged by colour",
  },
  {
    id: "g5",
    src: img("photo-1774271695014-edbd58e54882", 900),
    alt: "Stacks of richly coloured festive textiles",
  },
  {
    id: "g6",
    src: img("photo-1521335629791-ce4aec67dd15", 900),
    alt: "Brightly lit retail floor with garments on display",
  },
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
  image: img("photo-1705250466297-90035b3a2b26", 1000),
  imageAlt: "Neatly folded stacks of fabric ready for bulk orders",
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
