import { motion } from "motion/react";

export function MissionSection() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* How it Started */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#242f6c]/30 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-[#B7B8BC]/20"
          >
            <p className="text-[#F3F3F3] text-xs mb-3 md:mb-4 tracking-widest">HOW IT STARTED</p>
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 md:mb-6">
              Born from innovation,<br />built for impact.
            </h3>
          <p className="text-[#F3F3F3] text-sm md:text-base text-justify">
  KliqOn began with a simple belief: businesses deserve technology that is 
  <span className="text-[#0023E8]"> reliable, scalable, and easy to grow with</span>. 
  What started as a small team solving practical digital challenges evolved into a focused studio 
  building clean, conversion-friendly products for brands across industries. 
  Every project since then has shaped our process — ship fast, build right, and keep improving.
</p>

          </motion.div>

          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0023E8]/30 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-[#0023E8]/40 flex flex-col justify-center"
          >
           <p className="text-[#F3F3F3] text-xs mb-3 md:mb-4 tracking-widest">
  OUR MISSION
</p>
<h3 className="text-xl md:text-2xl font-medium text-[#F3F3F3]">
  To create the world's most intuitive and scalable technology.
</h3>

<p className="text-[#F3F3F3] text-xs mb-3 md:mb-4 tracking-widest mt-5">
  OUR VISION
</p>
<h3 className="text-xl md:text-2xl font-medium text-[#F3F3F3]">
  To empower businesses with technology that grows, adapts, and creates lasting impact.
</h3>


          </motion.div>
        </div>
      </div>
    </section>
  );
}

