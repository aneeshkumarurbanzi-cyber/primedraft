"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-image.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />
      </div>

      {/* Glow Effects */}
      <div className="absolute left-0 top-1/2 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] rounded-full bg-white/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] rounded-full bg-white/10 blur-[120px]" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 sm:px-6 pt-24 pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs sm:text-sm text-white backdrop-blur-md">
              ⚡ PRECISION-DRIVEN DESIGN
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Precision Drafting for
              <br />
              Structural & MEP
              <br />
              Engineering.
            </h1>

            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed text-gray-300">
              Bridging technical rigor with creative momentum. We deliver
              surgical precision in every schematic, ensuring your
              architectural vision is supported by flawless engineering
              documentation.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/services"
                className="rounded-2xl bg-white px-8 py-4 font-semibold text-black shadow-[0_0_40px_rgba(255,255,255,.15)] transition-all duration-300 hover:scale-105"
              >
                Explore Services →
              </Link>

              <Link
                href="/portfolio"
                className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="relative flex justify-center mt-8 lg:mt-0">
            {/* Glow */}
            <div className="absolute h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] lg:h-[600px] lg:w-[500px] rounded-full bg-white/5 blur-[120px]" />

            {/* Image Card */}
            <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-white/10 bg-white/0 backdrop-blur-xl w-full max-w-md">
              <Image
                src="/hero-image.jpg"
                alt="Engineering Drafting"
                width={600}
                height={700}
                priority
                className="h-[320px] sm:h-[420px] lg:h-[400px] w-full object-cover"
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-4 lg:translate-x-0 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/80 px-4 sm:px-6 py-4 backdrop-blur-xl shadow-2xl">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white text-lg sm:text-xl font-bold text-black">
                ⛭
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold">
                  500+
                </h3>

                <p className="text-[10px] sm:text-xs uppercase tracking-[2px] sm:tracking-[3px] text-gray-400">
                  Projects Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}