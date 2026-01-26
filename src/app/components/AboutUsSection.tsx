import { AboutSection } from "../components/AboutSection";

import {WhatWeProvideSection} from "./AboutHeroSection"
import {WhyKliqOnSection} from "./WhyKliqOnSection"
import { MissionSection } from "../components/MissionSection";
import {WhatWeProvideHeader} from "./WhatWeProvideHeader"

import { WhatWeProvideSection } from "./AboutHeroSection";
import { WhyKliqOnSection } from "./WhyKliqOnSection";
import { MissionSection } from "../components/MissionSection";
import { WhatWeProvideHeader } from "./WhatWeProvideHeader";

import "../../styles/about.css";

export default function AboutUsSection() {
  return (
    <div className="about-page">

            <AboutSection/>
            <WhyKliqOnSection/>
            <WhatWeProvideHeader/>
            <WhatWeProvideSection/>
            <MissionSection/>
    
    
    </div>
   


  );
}
