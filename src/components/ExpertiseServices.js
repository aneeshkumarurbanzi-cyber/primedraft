"use client";

import {
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  HomeModernIcon,
  HeartIcon,
  CubeTransparentIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

import { motion } from "framer-motion";

const services = [
  {
    icon: HomeModernIcon,
    title: "Residential",
    description:
      "High-end villa complexes and luxury multi-family residential towers requiring precision MEP coordination.",
  },
  {
    icon: BuildingOffice2Icon,
    title: "Commercial",
    description:
      "Corporate headquarters and Grade-A office spaces where efficiency and technology integration are paramount.",
  },
  {
    icon: BuildingStorefrontIcon,
    title: "Hospitality",
    description:
      "Luxury resorts and hotels requiring seamless MEP systems that do not compromise architectural aesthetics.",
  },
  {
    icon: HeartIcon,
    title: "Healthcare",
    description:
      "Complex hospital infrastructure and specialized industrial facilities with high technical requirements.",
  },
  {
    icon: CubeTransparentIcon,
    title: "Industrial",
    description:
      "Power plants, warehouses, and manufacturing facilities requiring robust and efficient engineering support.",
  },
  {
    icon: Squares2X2Icon,
    title: "Mixed-Use",
    description:
      "Integrated developments combining residential, retail, and commercial spaces with complex coordination.",
  },
];

export default function ExpertiseServices() {
  return (
    <section className="relative overflow-hidden bg-black py-28 text-white -mt-26">
      {/* Glow */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-white/5 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-white/5 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold uppercase md:text-5xl">
            Expertise & Services
          </h2>

          <p className="mt-5 max-w-2xl text-lg text-gray-400">
            Technical proficiency across the full spectrum of modern
            architectural and industrial developments.
          </p>

          <div className="mt-8 h-px w-full bg-white/10" />
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group border rounded-2xl border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 transition-all duration-300 hover:border-white/30"
              >
                <Icon className="mb-6 h-8 w-8 text-white" />

                <h3 className="mb-4 text-3xl font-semibold">
                  {service.title}
                </h3>

                <p className="leading-relaxed text-gray-400">
                  {service.description}
                </p>

                <div className="mt-8 h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}