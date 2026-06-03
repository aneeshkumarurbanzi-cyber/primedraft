"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#071425] text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071425] via-[#071425]/90 to-[#071425]/70" />
      </div>

      {/* Navbar */}
      <header className="relative z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <h2 className="text-4xl font-bold tracking-tight">
            PRIME<span className="font-medium">Drafting</span>
          </h2>

          <nav className="hidden md:flex items-center gap-12">
            <Link
              href="/"
              className="text-cyan-400 border-b-2 border-cyan-400 pb-1"
            >
              Home
            </Link>

            <Link href="/services">Services</Link>
            <Link href="/process">Process</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <Link
            href="/contact"
            className="hidden md:inline-flex rounded-full bg-cyan-400 px-7 py-3 font-semibold text-black shadow-[0_0_25px_rgba(34,211,238,.5)] transition hover:scale-105"
          >
            Get a Quote
          </Link>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
              ⚡ PRECISION-DRIVEN DESIGN
            </div>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              Precision Drafting for
              <br />
              Structural & MEP Engineering.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Bridging technical rigor with creative momentum. We deliver
              surgical precision in every schematic, ensuring your
              architectural vision is supported by flawless engineering
              documentation.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="/services"
                className="rounded-2xl bg-cyan-400 px-8 py-4 font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,.45)] transition hover:scale-105"
              >
                Explore Services →
              </Link>

              <Link
                href="/portfolio"
                className="rounded-2xl border-2 border-cyan-400 px-8 py-4 font-semibold text-white transition hover:bg-cyan-400 hover:text-black"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            {/* Glow */}
            <div className="absolute h-[700px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px]" />

            <div className="relative overflow-hidden rounded-[30px] border border-cyan-500/30 bg-black/20 backdrop-blur-xl">
              <Image
                src="/hero-image.jpg"
                alt="MEP Drafting"
                width={400}
                height={700}
                className="h-82 w-100 object-cover"
                priority
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-10 left-6 flex items-center gap-5 rounded-3xl bg-[#101c31] px-6 py-5 shadow-2xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400 text-black font-bold">
                ⛭
              </div>

              <div>
                <h3 className="text-3xl font-bold text-cyan-300">500+</h3>
                <p className="text-xs uppercase tracking-[3px] text-slate-400">
                  Projects Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute left-0 top-1/2 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
    </section>
  );
}