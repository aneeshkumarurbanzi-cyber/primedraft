"use client";

import Image from "next/image";
import {
  PlayIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const drawingServices = [
  {
    number: "01",
    title: "CSD Documentation",
    desc: "Multi-disciplinary coordination drawings.",
  },
  {
    number: "02",
    title: "Ceiling Coordination",
    desc: "RCP integration for lighting & HVAC outlets.",
  },
  {
    number: "03",
    title: "IFC Packages",
    desc: "Issue for Construction final stamped sets.",
  },
];

export default function VisualizationSection() {
  return (
    <section className="bg-black py-28 text-white -mt-26">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <span className="text-xs uppercase tracking-[4px] text-zinc-500">
              05 / Visualization
            </span>

            <h2 className="mt-4 text-4xl font-bold uppercase">
              Architectural Visualization
            </h2>

            {/* Image */}
            <div className="relative mt-10 overflow-hidden border border-white/20">
              <Image
                src="/visualization.jpg"
                alt="Visualization"
                width={900}
                height={600}
                className="h-[250px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40" />

              
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-3 border-x border-b border-white/20">
              <div className="border-r border-white/20 py-5 text-center">
                <p className="text-[10px] uppercase tracking-[3px] text-zinc-500">
                  Exterior
                </p>
                <h4 className="mt-2 font-mono text-sm">
                  Photorealistic
                </h4>
              </div>

              <div className="border-r border-white/20 py-5 text-center">
                <p className="text-[10px] uppercase tracking-[3px] text-zinc-500">
                  Multimedia
                </p>
                <h4 className="mt-2 font-mono text-sm">
                  4K Animations
                </h4>
              </div>

              <div className="py-5 text-center">
                <p className="text-[10px] uppercase tracking-[3px] text-zinc-500">
                  VR/AR
                </p>
                <h4 className="mt-2 font-mono text-sm">
                  Concept Viz
                </h4>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <span className="text-xs uppercase tracking-[4px] text-zinc-500">
              06 / Coordination
            </span>

            <h2 className="mt-4 text-4xl font-bold uppercase">
              Shop Drawings
            </h2>

            <div className="mt-8 border-l border-white/20 pl-6">
              <p className="max-w-md text-sm leading-relaxed text-zinc-500">
                Construction-ready deliverables including Combined
                Services (CSD), Builders Work, and detailed IFC
                packages.
              </p>
            </div>

            <div className="mt-20 space-y-10">
              {drawingServices.map((item) => (
                <div key={item.number} className="flex gap-6">
                  <span className="text-4xl font-bold text-zinc-500">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="font-bold uppercase tracking-wide">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 border rounded-3xl border-white/20 bg-gradient-to-r from-zinc-900 to-zinc-950 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[10px] uppercase tracking-[4px] text-zinc-500">
              [ Ready For Deployment ]
            </p>

            <h2 className="mt-6 text-5xl font-bold uppercase md:text-6xl">
              Start Your Precision Build
            </h2>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <button className="bg-white px-10 py-4 text-xs font-semibold uppercase tracking-[3px] text-black transition hover:bg-zinc-200">
                Request A Quote
              </button>

              <button className="flex items-center justify-center gap-2 border border-white/30 px-10 py-4 text-xs font-semibold uppercase tracking-[3px] transition hover:bg-white hover:text-black">
                Download Capabilities
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}