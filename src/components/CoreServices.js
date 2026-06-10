"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiOutlineHome,
  HiOutlineCog6Tooth,
  HiOutlineCube,
  HiOutlineBuildingOffice2,
  HiOutlineSquares2X2,
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

export default function CoreServices() {
  return (
   <section className="py-24 text-white bg-[radial-gradient(ellipse_at_top,_#2a2a2a_0%,_#111111_50%,_#000000_80%)]">   
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          className="mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[3px] text-gray-400">
            Our Expertise
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Core Services
          </h2>

          <p className="mt-3 max-w-2xl text-gray-400">
            Specialized engineering and drafting solutions tailored for
            modern construction and infrastructure projects.
          </p>
        </motion.div>

        {/* Top Row */}
        <div className="mb-5 grid gap-5 lg:grid-cols-3">
          {/* Structural Engineering */}
          <motion.div
            className="group relative overflow-hidden rounded-3xl lg:col-span-2 h-[500px]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src="/structure.jpg"
              alt="Structural Engineering"
              fill
              className="object-cover grayscale transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

            <div className="absolute bottom-10 left-10 max-w-xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/10 text-white backdrop-blur-md">
                <HiOutlineHome size={22} />
              </div>

              <h3 className="mb-4 text-4xl font-bold md:text-5xl">
                Structural Engineering
              </h3>

              <p className="leading-relaxed text-gray-300">
                From concrete foundations to steel frameworks, our
                structural drafting services ensure accuracy, safety,
                and efficiency throughout every stage of construction.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
                  Steel Detailing
                </span>

                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
                  Concrete Design
                </span>

                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
                  Load Analysis
                </span>
              </div>
            </div>
          </motion.div>

          {/* MEP Design */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl border border-white/10 bg-zinc-900 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-zinc-800"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white">
              <HiOutlineCog6Tooth size={22} />
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              MEP Design
            </h3>

            <p className="mt-4 leading-relaxed text-gray-400">
              Integrating mechanical, electrical, and plumbing systems
              into coordinated BIM environments for maximum efficiency.
            </p>

            <div className="relative mt-8 h-56 overflow-hidden rounded-2xl">
              <Image
                src="/mep.jpg"
                alt="MEP Design"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <motion.div
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {/* BIM Modeling */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-white/10 bg-zinc-900 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-zinc-800"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white">
              <HiOutlineCube size={22} />
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              BIM Modeling
            </h3>

            <p className="mt-4 leading-relaxed text-gray-400">
              High-fidelity Building Information Modeling that improves
              collaboration, planning, and project coordination.
            </p>
          </motion.div>

          {/* Site Coordination */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-white/10 bg-zinc-900 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-zinc-800"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white">
              <HiOutlineBuildingOffice2 size={22} />
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Site Coordination
            </h3>

            <p className="mt-4 leading-relaxed text-gray-400">
              Ensuring design intent is maintained from planning and
              drafting through on-site execution and delivery.
            </p>
          </motion.div>

          {/* 3D Visualization */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-white/10 bg-zinc-900 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-zinc-800"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white">
              <HiOutlineSquares2X2 size={22} />
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              3D Visualization
            </h3>

            <p className="mt-4 leading-relaxed text-gray-400">
              Photorealistic renders and visual presentations that help
              clients understand structural and spatial concepts.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}