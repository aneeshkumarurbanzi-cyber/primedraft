"use client";

import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/services-bg.jpg" // replace with your image
          alt="Background"
          fill
          className="object-cover opacity-35"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-40">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="mb-8">
            <span className="font-mono text-xs tracking-[4px] text-zinc-500 uppercase">
              [ PROJECT_SERVICES_00 ]
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl font-black uppercase leading-none md:text-6xl">
            Our Services
          </h1>

          {/* Subheading */}
          <h2 className="mt-8 max-w-3xl text-3xl font-semibold text-zinc-400 md:text-4xl">
            Technical Precision. Guaranteed Performance.
          </h2>

          {/* Description */}
          <div className="mt-16 border-l border-zinc-600 pl-8">
            <p className="max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
              PRECISION BIM delivers high-fidelity MEP drafting and BIM
              coordination services designed for the most demanding
              architectural environments. We bridge the gap between design
              intent and site execution through meticulous documentation.
            </p>
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-white/[0.03] blur-[120px]" />
      <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-white/[0.03] blur-[150px]" />
    </section>
  );
}