import AboutUsSection from "../components/AboutUsSection";
import { useLayoutEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import "../../styles/about.css";
// import {aboutImg} from "/portfolio/about.png";

export function AboutUs(){
    useLayoutEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      }, []);

    return(
       <>
         <Helmet>
           <title>About KliqOn Technologies - Our Story & Mission</title>
           <meta name="description" content="Learn about KliqOn Technologies - the people, principles, and passion behind our work. We craft scalable digital products that drive measurable impact." />
           <meta name="keywords" content="about KliqOn, technology company, software development team, digital innovation, company mission, KliqOn story" />
           <link rel="canonical" href="https://www.kliqontech.com/about" />
           <meta property="og:title" content="About KliqOn Technologies - Our Story & Mission" />
           <meta property="og:description" content="Learn about KliqOn Technologies - the people, principles, and passion behind our work." />
           <meta property="og:url" content="https://www.kliqontech.com/about" />
           <meta property="og:type" content="website" />
         </Helmet>
         <div className="bg-[#0E1322] min-h-screen font-['Space_Grotesk',sans-serif] overflow-x-hidden">
          <Navbar />
         <AboutUsSection/>
          <Footer />
        </div>
       </>
    )
}