"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[150px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Top Label */}
        <span className="text-[11px] font-medium uppercase tracking-[6px] text-zinc-400">
          Engineered Excellence
        </span>

        {/* Heading */}
        <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-bold leading-[0.95] md:text-7xl">
          PRIME DRAFTING:
          <br />
          <span className="text-white">
            Precision Engineered
          </span>
          <br />
          <span className="text-zinc-200">
            Excellence
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
          Delivering world-class MEP design and BIM solutions to
          shape the skylines of tomorrow with mathematical rigor
          and aesthetic precision.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="bg-white px-10 py-4 text-sm font-semibold uppercase tracking-[3px] text-black transition-all duration-300 hover:scale-105"
          >
            Partner With Us
          </Link>

          <Link
            href="/projects"
            className="border border-white/30 px-10 py-4 text-sm font-semibold uppercase tracking-[3px] text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}