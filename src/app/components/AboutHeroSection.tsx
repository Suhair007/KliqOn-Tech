import { motion } from "motion/react";



import {
  Code2,
  Layers,
  Palette,
  ShoppingCart,
  Gauge,
  Wrench,

} from "lucide-react";

const services = [
  {
    title: "Website Design & Development",
    desc: "High-performance, responsive websites built for speed, scalability, and conversions.",
    icon: Code2,
    image: "/about/provide-1.jfif",
  },
  {
    title: "eCommerce Development",
    desc: "Shopify and custom eCommerce solutions designed to scale and sell effectively.",
    icon: ShoppingCart,
    image: "/about/provide-3.jpg",
  },
  {
    title: "Web Application Development",
    desc: "Custom dashboards, portals, and SaaS MVPs built with modern architectures.",
    icon: Layers,
    image: "/about/provide-2.jfif",
  },
  {
    title: "UI/UX Design",
    desc: "Wireframes, prototypes, and design systems focused on usability and conversions.",
    icon: Palette,
    image: "/about/provide-3.jfif",
  },
  {
    title: "SEO & Performance Optimization",
    desc: "SEO-ready builds with performance tuning for faster load times and better rankings.",
    icon: Gauge,
    image: "/about/provide-4.jfif",
  },
  {
    title: "Maintenance, Support & Integrations",
    desc: "Ongoing updates, monitoring, feature enhancements, and third-party integrations including payments, CRM, and APIs.",
    icon: Wrench,
    image: "/about/provide-5.jpg",
  },
];




import { Code2, Layers, Palette } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Fast, scalable, SEO-optimized websites using modern technologies.",
    icon: Code2,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Full-Stack Solutions",
    desc: "Secure APIs, databases, and complete system design.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  {
    title: "UI/UX Design",
    desc: "Intuitive, conversion-focused user experiences.",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
  },
];


export function WhatWeProvideSection() {
  return (
    <section className="provide-section">
      {/* Background GIF */}
      
      <div className="provide-bg"></div>

      <div className="provide-wrapper">
        {/* Heading */}
      

        {/* Cards */}
        <div className="provide-grid">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="provide-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Card Image */}
                <div className="card-image">
                  <img src={item.image} alt={item.title} />
                </div>

                {/* Icon + Title */}
                <div className="card-head">
                  <Icon size={24} />
                  <h3>{item.title}</h3>
                </div>

                {/* Description */}

                <p className="text-justify">{item.desc}</p>

                <p>{item.desc}</p>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
