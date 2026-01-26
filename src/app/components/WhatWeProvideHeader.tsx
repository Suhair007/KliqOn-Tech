import {motion} from "motion/react"

export function WhatWeProvideHeader(){
    return(
         <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center max-w-3xl mx-auto mb-12 md:mb-16 section-head"
                >
                     <h2 className="text-sm uppercase tracking-widest text-[#0023E8] mb-3">
                    What We Provide
                  </h2>
                
                  <p className="text-3xl md:text-4xl font-semibold text-[#F3F3F3]">
                   We offer end-to-end digital solutions tailored for startups, SMBs, and growing brands.
                  </p>
                </motion.div>
    )
}