"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

const plumbingServices = [
  "Water Supply & Distribution",
  "Drainage & Storm Water",
  "Pump Room Detail Design",
  "Riser Diagrams & Isometric",
];

const bimServices = [
  {
    label: "LOD 100-500",
    title: "MEP Coordination",
  },
  {
    label: "Automation",
    title: "Clash Detection",
  },
  {
    label: "Revit",
    title: "Quantity Extraction",
  },
  {
    label: "Integration",
    title: "Construction Sync",
  },
];

export default function PlumbingBIMSection() {
  return (
    <section className="bg-black py-28 text-white -mt-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top Line */}
        <div className="mb-24 h-px w-full rounded-full bg-white/20" />

        {/* Main Container */}
        <div className="rounded-[40px] border border-white/10 bg-zinc-950/40 p-8 md:p-12 backdrop-blur-sm">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Plumbing */}
            <div>
              <span className="text-xs uppercase tracking-[4px] text-gray-500">
                03 / Plumbing
              </span>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                PLUMBING SERVICES
              </h2>

              <div className="mt-10 rounded-3xl border border-white/10 overflow-hidden">
                {plumbingServices.map((service, index) => (
                  <div key={index}>
                    <div className="group flex items-center justify-between px-6 py-6 transition-all duration-300 hover:bg-white/[0.03]">
                      <h3 className="font-mono text-lg md:text-xl">
                        {service}
                      </h3>

                      <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                    {index !== plumbingServices.length - 1 && (
                      <div className="h-px bg-white/10" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* BIM */}
            <div className="relative">
              {/* Divider */}
              <div className="absolute left-0 top-0 hidden h-full w-px bg-white/10 lg:block" />

              <div className="lg:pl-12">
                <span className="text-xs uppercase tracking-[4px] text-gray-500">
                  04 / BIM Modeling
                </span>

                <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                  BIM & 3D MODELING
                </h2>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  {bimServices.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-3xl border border-white/20 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-white/40 hover:bg-zinc-900"
                    >
                      <p className="mb-4 text-xs uppercase tracking-[3px] text-gray-500">
                        {item.label}
                      </p>

                      <h3 className="font-mono text-xl md:text-2xl">
                        {item.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}