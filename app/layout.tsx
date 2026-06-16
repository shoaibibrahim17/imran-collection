import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

import {
  business,
  contact,
  fullAddress,
  hours,
  whatsappLink,
} from "@/lib/site-data";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: `${business.name} — ${business.tagline} in ${contact.address.city}`,
    template: `%s · ${business.name}`,
  },
  description: business.description,
  keywords: [
    "Imran Collections",
    "Adilabad textile shop",
    "sarees Adilabad",
    "women's ethnic wear Adilabad",
    "menswear Adilabad",
    "home textiles Adilabad",
    "Telangana saree shop",
    "wedding & festive wear",
  ],
  applicationName: business.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: business.url,
    siteName: business.name,
    title: `${business.name} — ${business.tagline}`,
    description: business.description,
    images: [
      {
        url: "/images/hero.svg",
        width: 1600,
        height: 900,
        alt: `${business.name}, ${contact.address.city}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} — ${business.tagline}`,
    description: business.description,
    images: ["/images/hero.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "shopping",
};

const dayMap: Record<string, string> = {
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday",
  Sunday: "Sunday",
};

/** Parse "10:00 AM – 9:00 PM" → { opens: "10:00", closes: "21:00" } (24h). */
function parseHours(open: string): { opens: string; closes: string } | null {
  const match = open.match(
    /(\d{1,2}:\d{2})\s*(AM|PM)\s*[–-]\s*(\d{1,2}:\d{2})\s*(AM|PM)/i
  );
  if (!match) return null;
  const to24 = (t: string, mer: string) => {
    const [h, m] = t.split(":").map(Number);
    let hh = h % 12;
    if (/pm/i.test(mer)) hh += 12;
    return `${String(hh).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  };
  return {
    opens: to24(match[1], match[2]),
    closes: to24(match[3], match[4]),
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  "@id": `${business.url}#store`,
  name: business.name,
  description: business.description,
  url: business.url,
  image: `${business.url}/images/hero.svg`,
  telephone: `+${contact.phoneE164}`,
  priceRange: "$$",
  currenciesAccepted: "INR",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${contact.address.line1}, ${contact.address.line2}`,
    addressLocality: contact.address.city,
    addressRegion: contact.address.state,
    postalCode: contact.address.postalCode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: contact.geo.latitude,
    longitude: contact.geo.longitude,
  },
  hasMap: contact.mapsUrl,
  areaServed: business.servingArea,
  sameAs: [whatsappLink()],
  openingHoursSpecification: hours
    .filter((h) => !h.closed)
    .map((h) => {
      const parsed = parseHours(h.open);
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${dayMap[h.day] ?? h.day}`,
        opens: parsed?.opens,
        closes: parsed?.closes,
      };
    }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink text-ivory">
        {children}
        <script
          type="application/ld+json"
          // JSON-LD must be a raw string; data is first-party and static.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
