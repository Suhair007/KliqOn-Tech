import { motion } from "motion/react";
import {
  Layers,
  Cpu,
  PenTool,
  ShieldCheck,
} from "lucide-react";


const reasons = [
  {
    title: "Product-First Mindset",
    desc: "We think beyond features. Every solution is designed to deliver real business value and long-term growth.",
    icon: Layers,
  },
  {
    title: "Scalable Architecture",
    desc: "Built with clean, future-ready systems that scale seamlessly as your business evolves.",
    icon: Cpu,
  },
  {
    title: "Design with Purpose",
    desc: "Human-centered UI/UX that balances aesthetics, usability, and performance.",
    icon: PenTool,
  },
  {
    title: "Transparent Execution",
    desc: "Clear communication, agile delivery, and full ownership from idea to launch.",
    icon: ShieldCheck,
  },
];


export function WhyKliqOnSection() {
  return (
   <section className="relative mt-5 md:mt-14 pt-6 md:pt-8 pb-12 md:pb-20 from-transparent to-[#0023E8]/10">

      
      {/* WRAPPER (full width, controlled padding) */}
     <div className="w-full px-4 md:px-8 lg:px-12">


        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-[#0023E8] mb-3">
            Why Choose KliqOn
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#F3F3F3]">
            Built differently. Delivered intelligently.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {reasons.map((item, index) => {
    const Icon = item.icon;

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-blue-500/40 to-indigo-500/20"
      >
        {/* Glass Card */}
        <div className="h-full rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 transition-all duration-300 group-hover:bg-white/10">

          {/* Icon + Title */}
          <div className="flex items-center gap-3 mb-4">
           <div className="flex h-12 w-12 items-center justify-center rounded-full 
  bg-gradient-to-br from-blue-500/20 to-indigo-500/20 
  text-blue-400 
  group-hover:from-blue-500/30 group-hover:to-indigo-500/30
  transition-all duration-300
  shadow-[0_0_25px_rgba(59,130,246,0.4)]">
  
  <Icon size={22} />
</div>


            <h3 className="text-lg font-medium text-[#F3F3F3]">
              {item.title}
            </h3>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed ">
            {item.desc}
          </p>
        </div>
      </motion.div>
    );
  })}
</div>

      </div>

      {/* Background Glow */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
