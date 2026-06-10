"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineArrowTrendingUp,
} from "react-icons/hi2";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
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
      staggerChildren: 0.2,
    },
  },
};

export default function WhyChooseSection() {
  const features = [
    {
      icon: <HiOutlineShieldCheck size={22} />,
      title: "Precision",
      description:
        "Our drafting approach ensures zero-clash models and precise material takeoffs that save time and budget.",
    },
    {
      icon: <HiOutlineClock size={22} />,
      title: "Efficiency",
      description:
        "Leveraging automated BIM workflows, we reduce turnaround times without compromising documentation quality.",
    },
    {
      icon: <HiOutlineArrowTrendingUp size={22} />,
      title: "Scalability",
      description:
        "From residential renovations to large industrial developments, our team scales to meet project demands.",
    },
  ];

  return (
    <section className="bg-black py-24 text-white overflow-hidden -mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Image */}
          <motion.div variants={fadeUp} className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 group">
              <Image
                src="/team.jpg"
                alt="Engineering Team"
                width={800}
                height={500}
                className="w-full h-[450px] object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute -top-5 right-8 rounded-2xl border border-white/10 bg-white px-8 py-4 text-black font-semibold shadow-xl"
            >
              99.8% Accuracy
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div variants={fadeUp}>
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[3px] text-gray-400">
              Why Choose Us
            </span>

            <h2 className="mt-6 mb-12 text-4xl md:text-5xl font-bold">
              Why Choose PRIME Drafting?
            </h2>

            <motion.div
              className="space-y-10"
              variants={staggerContainer}
            >
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="flex gap-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-md text-white">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="mb-2 text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="leading-relaxed text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CTA Box */}
        <motion.div
          className="mt-28"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="rounded-[40px] border border-white/10 bg-zinc-900 px-8 py-20 text-center md:px-16">
            <h2 className="mb-6 text-4xl md:text-5xl font-bold">
              Ready to Draft Your Future?
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400">
              Partner with PRIME Drafting for precision engineering
              services that elevate your project from concept to
              reality.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-2xl bg-white px-10 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
              >
                Request a Consultation
              </Link>

              <Link
                href="/process"
                className="rounded-2xl border border-white/10 bg-white/5 px-10 py-4 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
              >
                Our Process
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}