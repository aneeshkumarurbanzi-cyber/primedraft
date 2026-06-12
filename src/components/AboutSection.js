"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "15+", label: "Global Markets" },
  { value: "24/7", label: "Technical Support" },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-black py-32 text-white -mt-35">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-white/[0.03] blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-white/[0.03] blur-[180px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <span className="text-xs uppercase tracking-[5px] text-gray-500">
              About Prime Drafting
            </span>

            <h2 className="mt-5 text-5xl font-bold leading-tight md:text-5xl">
              Who We Are
            </h2>

            <div className="mt-8 h-px w-24 bg-white/20" />

            <p className="mt-10 text-lg leading-relaxed text-gray-300">
              Prime Drafting is a specialized engineering design and drafting
              company delivering Mechanical, Electrical, Plumbing (MEP)
              design support and Building Information Modeling (BIM)
              solutions for projects across the Middle East, India,
              and international markets.
            </p>

            <p className="mt-8 leading-relaxed text-gray-400">
              We collaborate with consultants, contractors, architects,
              developers, and engineering firms to provide accurate,
              coordinated, and construction-ready documentation. Our team
              combines technical expertise with practical construction
              knowledge to deliver exceptional project outcomes.
            </p>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                >
                  <h3 className="text-4xl font-bold">{stat.value}</h3>

                  <p className="mt-2 text-xs uppercase tracking-[2px] text-gray-500">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Outer Frame */}
            <div className="rounded-[32px] border border-white/10 bg-zinc-950/50 p-5 backdrop-blur-sm">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-[24px]"
              >
                <Image
                  src="/about.jpg"
                  alt="Prime Drafting"
                  width={900}
                  height={700}
                  className="h-[600px] w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </motion.div>
            </div>

            {/* Floating Glow */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-[100px]" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/5 blur-[100px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}