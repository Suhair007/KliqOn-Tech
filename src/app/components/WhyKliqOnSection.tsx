import { motion } from "motion/react";
import {
  TrendingUp,
  Zap,
  Layers,
  ShieldCheck,
  RefreshCcw,
  UserCheck 
} from "lucide-react";


const reasons = [
  {
    title: "Business-Driven Development",
    desc: "We focus on outcomes, not just features. Every build is aligned with your business goals and growth strategy.",
    icon: TrendingUp,
  },
  {
    title: "Fast & Transparent Execution",
    desc: "Quick turnarounds with clear communication, realistic timelines, and zero guesswork.",
    icon: Zap,
  },
  {
    title: "Modern & Scalable Tech Stack",
    desc: "Built using future-ready technologies and architectures that scale smoothly as your needs grow.",
    icon: Layers,
  },
  {
    title: "Quality-Focused Delivery",
    desc: "Every release goes through testing, performance checks, and refinements to ensure reliability.",
    icon: ShieldCheck,
  },
  {
    title: "Long-Term Partnership",
    desc: "We provide ongoing support, improvements, and optimization — not one-time handoffs.",
    icon: RefreshCcw,
  },
    {
    title: "Clear Ownership & Accountability",
    desc: "We take full responsibility for delivery, timelines, and outcomes, so you always know who owns what.",
    icon: UserCheck,
  },
];

export function WhyKliqOnSection() {
  return (
   <section className="relative mt-10 md:mt-14 pt-6 md:pt-8 pb-12 md:pb-20 bg-gradient-to-b from-transparent to-[#0023E8]/10">

      
      {/* WRAPPER (full width, controlled padding) */}
     <div className="w-full px-4 md:px-8 lg:px-12">


        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center  mx-auto mb-12 md:mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-blue-400 mb-3">
            Why Choose KliqOn
          </p>
          <p className="text-lg md:text-xl font-medium text-[#F3F3F3] leading-relaxed">
  We don’t just “deliver projects”, we solve problems with clarity, speed, and accountability. Our approach combines strong engineering, clean UI/UX, and a business-first mindset so every build supports your growth.
</p>

        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
