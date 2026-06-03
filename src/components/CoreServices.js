"use client";

import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineHome,
  HiOutlineCog6Tooth,
  HiOutlineCube,
  HiOutlineBuildingOffice2,
  HiOutlineSquares2X2,
} from "react-icons/hi2";

export default function CoreServices() {
  return (
    <section className="bg-[#051326] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold">Core Services</h2>
          <p className="mt-2 text-slate-400">
            Specialized engineering solutions tailored for complexity.
          </p>
        </div>

       {/* Top Row */}
<div className="grid gap-4 lg:grid-cols-3 mb-4">
  {/* Structural Card */}
  <div className="relative overflow-hidden rounded-3xl lg:col-span-2 h-[500px]">
    <Image
      src="/structure.jpg"
      alt="Structural Engineering"
      fill
      className="object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-[#071425] via-[#071425]/70 to-[#071425]/30" />

    <div className="absolute bottom-10 left-10 max-w-xl">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-300">
        <HiOutlineHome size={22} />
      </div>

      <h3 className="text-5xl font-bold mb-4">
        Structural Engineering
      </h3>

      <p className="text-slate-300 leading-relaxed">
        From concrete foundations to high-rise steel framing, our
        structural drafting services ensure every load-bearing element
        is meticulously documented for safety and efficiency.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <span className="rounded-full bg-cyan-500/15 px-4 py-2 text-sm text-cyan-300">
          Steel Detailing
        </span>
        <span className="rounded-full bg-cyan-500/15 px-4 py-2 text-sm text-cyan-300">
          Concrete Design
        </span>
        <span className="rounded-full bg-cyan-500/15 px-4 py-2 text-sm text-cyan-300">
          Load Analysis
        </span>
      </div>
    </div>
  </div>

  {/* MEP Card */}
  <div className="rounded-3xl bg-[#0A1A31] border border-white/5 p-8 h-[500px]">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300">
      <HiOutlineCog6Tooth size={22} />
    </div>

    <h3 className="mt-6 text-2xl font-bold">MEP Design</h3>

    <p className="mt-4 text-slate-400 leading-relaxed">
      Integrating mechanical, electrical, and plumbing systems into a
      cohesive, clash-free digital model.
    </p>

    <div className="relative mt-8 h-52 overflow-hidden rounded-2xl">
      <Image
        src="/mep.jpg"
        alt="MEP Design"
        fill
        className="object-cover"
      />
    </div>

   
  </div>
</div>

{/* Bottom Row */}
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  {/* BIM */}
  <div className="rounded-3xl bg-[#0A1A31] border border-white/5 p-8">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300">
      <HiOutlineCube size={22} />
    </div>

    <h3 className="mt-6 text-2xl font-bold">BIM Modeling</h3>

    <p className="mt-4 text-slate-400">
      High-fidelity Building Information Modeling for seamless collaboration.
    </p>
  </div>

  {/* Site Coordination */}
  <div className="rounded-3xl bg-[#0A1A31] border border-white/5 p-8">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300">
      <HiOutlineBuildingOffice2 size={22} />
    </div>

    <h3 className="mt-6 text-2xl font-bold">Site Coordination</h3>

    <p className="mt-4 text-slate-400">
      Ensuring design intent is maintained from the drafting board to the
      construction site.
    </p>
  </div>

  {/* 3D Visualization */}
  <div className="rounded-3xl bg-[#0A1A31] border border-white/5 p-8">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300">
      <HiOutlineSquares2X2 size={22} />
    </div>

    <h3 className="mt-6 text-2xl font-bold">3D Visualization</h3>

    <p className="mt-4 text-slate-400">
      Detailed renders that provide a realistic preview of structural
      complexities.
    </p>
  </div>
</div>
      </div>
    </section>
  );
}