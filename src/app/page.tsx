import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCTABar from "@/components/layout/MobileCTABar";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import WhatsIncluded from "@/components/sections/WhatsIncluded";
import Pricing from "@/components/sections/Pricing";
import SocialProof from "@/components/sections/SocialProof";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import { siteConfig } from "@/lib/site-config";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: `+${siteConfig.whatsapp}`,
  description:
    "Webs para fontaneros y electricistas con un asistente que atiende a los clientes a cualquier hora y recoge sus solicitudes.",
  areaServed: { "@type": "Country", name: "España" },
  sameAs: [siteConfig.instagram],
  makesOffer: {
    "@type": "Offer",
    name: "Sistema AltiusGrowth: web profesional + asistente 24/7",
    price: "1000",
    priceCurrency: "EUR",
    description: "Implementación 1.000 € (pago único) + mantenimiento 50 €/mes.",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\u003c"),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Problem />
        <HowItWorks />
        <WhatsIncluded />
        <Pricing />
        <SocialProof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
