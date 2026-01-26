import AboutUsSection from "../components/AboutUsSection";

import { useLayoutEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import "../../styles/about.css";
// import {aboutImg} from "/portfolio/about.png";

export function AboutUs(){
    useLayoutEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      }, []);

    return(
       <div className="bg-[#0E1322] min-h-screen font-['Space_Grotesk',sans-serif] overflow-x-hidden">
          <Navbar />
         <AboutUsSection/>
          <Footer />
        </div>
    )
}