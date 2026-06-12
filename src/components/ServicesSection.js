"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Mechanical Services",
    image: "/mechanicaal.jpg",
    description:
      "HVAC drafting, chilled water systems, duct routing, and construction-ready mechanical documentation.",
  },
  {
    number: "02",
    title: "Electrical Services",
    image: "/electrical.jpg",
    description:
      "Power distribution, lighting layouts, ELV systems, cable routing, and load schedule design.",
  },
  {
    number: "03",
    title: "Plumbing Services",
    image: "/plumbing.jpg",
    description:
      "Water supply, drainage systems, riser diagrams, pump room layouts, and plumbing coordination.",
  },
  {
    number: "04",
    title: "BIM & 3D Modeling",
    image: "/bim.jpg",
    description:
      "Clash detection, MEP coordination, quantity extraction, and intelligent BIM workflows.",
  },
  {
    number: "05",
    title: "Architectural Visualization",
    image: "/visualization.jpg",
    description:
      "Photorealistic renders, walkthroughs, animations, and concept visualization for projects.",
  },
  {
    number: "06",
    title: "Shop Drawings",
    image: "/shopdrawing.jpg",
    description:
      "Detailed fabrication and construction-ready drawings for accurate on-site execution.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-black py-32 text-white -mt-20">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-xs uppercase tracking-[5px] text-gray-500">
            What We Do
          </span>

          <h2 className="mt-5 text-5xl font-bold md:text-6xl">
            Our Services
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Delivering precision-engineered MEP, BIM, and visualization
            solutions that transform concepts into construction-ready reality.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950"
            >
              <div className="relative h-[500px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Number */}
                <div className="absolute right-8 top-8">
                  <span className="text-7xl font-bold text-white/15">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-bold transition duration-300 group-hover:translate-x-2">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-gray-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}