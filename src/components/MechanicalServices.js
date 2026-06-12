"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Ducting & Ventilation",
    category: "HVAC Systems",
    image: "/hvac.jpg",
    description:
      "Comprehensive HVAC drafting solutions focused on airflow optimization, thermal efficiency, and BIM coordination.",
    tags: ["HVAC", "BIM", "Coordination"],
  },
  {
    title: "Chilled Water Systems",
    category: "Hydronic",
    image: "/chilled-water.jpg",
    description:
      "Detailed hydronic piping layouts and chilled water system documentation for high-performance buildings.",
    tags: ["Hydronic", "Piping", "MEP"],
  },
  {
    title: "Equipment Schedules",
    category: "Documentation",
    image: "/equipment.jpg",
    description:
      "Accurate schedules, specifications, and equipment documentation aligned with project requirements.",
    tags: ["Schedules", "Documentation", "Specs"],
  },
  {
    title: "Mechanical IFC / As-Built",
    category: "Deliverables",
    image: "/ifc.jpg",
    description:
      "Construction-ready IFC drawings and as-built documentation ensuring seamless project delivery.",
    tags: ["IFC", "As-Built", "Construction"],
  },
  {
    title: "BIM Coordination",
    category: "Collaboration",
    image: "/bim.jpg",
    description:
      "Clash detection, coordination reviews, and multidisciplinary BIM workflows for complex projects.",
    tags: ["BIM", "Clash Detection", "Coordination"],
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function MechanicalServices() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-28 text-white">
      {/* Background Glow */}
      <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-white/5 blur-[140px]" />
      <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-white/5 blur-[140px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20"
        >
          <span className="text-xs uppercase tracking-[4px] text-gray-500">
            01 / Mechanical
          </span>

          <h2 className="mt-4 text-5xl font-bold md:text-6xl">
            Mechanical Services
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
            Comprehensive HVAC and fluid system modeling with a focus on
            airflow dynamics, thermal efficiency, and construction-ready
            documentation.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group rounded-[28px] border border-white/10 bg-[#0a0a0a]/90 p-3 backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:border-white/20"
            >
              {/* Image */}
              <div className="relative h-[260px] overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-3">
                <p className="mb-3 text-xs uppercase tracking-[3px] text-gray-500">
                  {service.category}
                </p>

                <h3 className="text-2xl font-bold">{service.title}</h3>

                <p className="mt-4 text-sm leading-relaxed text-gray-400">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}