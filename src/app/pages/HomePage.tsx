import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { TechStackSection } from "../components/TechStackSection";
import { ClientsSection } from "../components/ClientsSection";
import { CTASection } from "../components/CTASection";
import { Footer } from "../components/Footer";

export function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Helmet>
        <title>KliqOn Technologies - Transform Your Business with Intelligent Solutions</title>
        <meta name="description" content="KliqOn Technologies crafts scalable, future-ready digital products. We engineer possibilities and turn bold ideas into measurable impact for ambitious teams." />
        <meta name="keywords" content="software development, web development, mobile apps, digital transformation, technology solutions, scalable software, KliqOn Technologies" />
        <link rel="canonical" href="https://www.kliqontech.com/" />
        <meta property="og:title" content="KliqOn Technologies - Transform Your Business with Intelligent Solutions" />
        <meta property="og:description" content="KliqOn Technologies crafts scalable, future-ready digital products. We engineer possibilities and turn bold ideas into measurable impact." />
        <meta property="og:url" content="https://www.kliqontech.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="bg-[#0E1322] min-h-screen font-['Space_Grotesk',sans-serif] overflow-x-hidden">
        <Navbar />
        <HeroSection heroRef={heroRef}/>
        <ServicesSection />
        <TechStackSection />
        <ClientsSection />
        <CTASection />
      <Footer />
    </div>
    </>
  );
}

