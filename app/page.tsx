import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Collections from "@/components/Collections";
import ProductGrid from "@/components/ProductGrid";
import OfferBanner from "@/components/OfferBanner";
import Gallery from "@/components/Gallery";
import WholesaleEnquiry from "@/components/WholesaleEnquiry";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <Collections />
        <ProductGrid />
        <OfferBanner />
        <Gallery />
        <WholesaleEnquiry />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
