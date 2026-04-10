import { PortfolioSection } from "../components/PortfolioSection";
import { Helmet } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfolio - KliqOn Technologies Projects & Case Studies</title>
        <meta name="description" content="Explore our portfolio of successful digital projects. See how KliqOn Technologies has helped businesses transform with innovative software solutions." />
        <meta name="keywords" content="portfolio, case studies, software projects, digital solutions, web development projects, mobile app development, KliqOn portfolio" />
        <link rel="canonical" href="https://www.kliqontech.com/portfolio" />
        <meta property="og:title" content="Portfolio - KliqOn Technologies Projects & Case Studies" />
        <meta property="og:description" content="Explore our portfolio of successful digital projects and innovative software solutions." />
        <meta property="og:url" content="https://www.kliqontech.com/portfolio" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="bg-[#0E1322] min-h-screen font-['Space_Grotesk',sans-serif] overflow-x-hidden">
        <Navbar />
        <PortfolioSection />
        <Footer />
      </div>
    </>
  );
}
