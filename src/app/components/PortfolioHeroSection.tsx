import { motion } from "motion/react";
import "../../styles/portfolio.css";

export function PortfolioHeroSection() {
  return (
    <>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}

        className="portfolio-header"
      >
        <h2>
          Our <span>Portfolio</span>
        </h2>
        <p>
          A curated selection of projects that reflect our expertise,
          innovation, and delivery excellence.
        </p>

        className="container mx-auto max-w-4xl text-center pt-16 md:pt-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4 md:mb-6"
        >
          <span className="text-[#F3F3F3]">Our</span>{" "}
          <span className="text-[#0023E8]">Portfolio</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-[#F3F3F3] text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          A curated selection of projects that reflect our expertise,
          innovation, and delivery excellence.
        </motion.p>

      </motion.div>

      {/* Hero Content */}
      <section className="portfolio-hero-wrapper">
        {/* Left Content */}
        <motion.div

          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="portfolio-hero-content"
        >
       <motion.h1
  initial={{ scale: 1 }}
  whileInView={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 120, duration: 0.6 }}
>
  Crafting <span>Scalable</span> & <br />
  High-Impact Digital Solutions
</motion.h1>

          <p>
            We partner with startups and enterprises to design and develop
            reliable digital products — from modern websites to
            enterprise-grade platforms.
          </p>

       <div className="portfolio-hero-tags">
  <span className="tag">Web Development</span>
  <span className="tag">UI/UX Design</span>
  <span className="tag">Enterprise Solutions</span>
  <span className="tag">Cloud-Ready Apps</span>
</div>


          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="portfolio-hero-content text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1.03 }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 120,
              duration: 0.6,
            }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Crafting <span className="text-[#0023E8]">Scalable</span> & <br />
            High-Impact Digital Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 max-w-xl text-[#F3F3F3]"
          >
            We partner with startups and enterprises to design and develop
            reliable digital products — from modern websites to enterprise-grade
            platforms.
          </motion.p>

          <div className="portfolio-hero-tags">
            <span className="tag">Web Development</span>
            <span className="tag">UI/UX Design</span>
            <span className="tag">Enterprise Solutions</span>
            <span className="tag">Cloud-Ready Apps</span>
          </div>

        </motion.div>

        {/* Right Visual */}
        <motion.div

          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}

          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
              delay: 0.6,
              type: "spring",
              stiffness: 120,
              duration: 0.8,
            }}

          className="portfolio-hero-visual"
        >
          <img
            src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
            alt="Digital Projects Showcase"

             className="portfolio-hero-img"

            className="portfolio-hero-img"

          />
        </motion.div>
      </section>
    </>
  );


}



}

