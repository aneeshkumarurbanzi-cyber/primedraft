"use client";

const cards = [
  {
    title: "Circuitry & Lighting",
    category: "Power & Light",
    description:
      "Comprehensive lighting layouts, circuit design, power distribution planning, and coordinated electrical drafting solutions.",
  },
  {
    title: "SLD & Load Schedules",
    category: "Schematics",
    description:
      "Detailed single-line diagrams, panel schedules, and load calculations ensuring accurate system performance.",
  },
  {
    title: "Earthing & UPS Systems",
    category: "Protection",
    description:
      "Reliable grounding systems, UPS layouts, and backup power solutions designed for operational safety.",
  },
  {
    title: "Cable Tray Routing",
    category: "Containment",
    description:
      "Efficient cable containment and routing strategies optimized for installation, maintenance, and coordination.",
  },
];

export default function ElectricalServices() {
  return (
    <section className="relative bg-black py-32 text-white -mt-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-[180px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Left Content */}
          <div className="h-fit lg:sticky lg:top-28">
            <span className="text-xs uppercase tracking-[4px] text-gray-500">
              02 / Electrical
            </span>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Electrical Services
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-400">
              High-voltage and ELV system distribution mapping.
              Precision cable routing and load balance analysis.
            </p>

          </div>

          {/* Stack Cards */}
          <div className="lg:col-span-2">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`sticky top-24 ${
                  index !== 0 ? "mt-[20px]" : ""
                }`}
                style={{
                  zIndex: index + 10,
                }}
              >
                <div className="relative h-[380px] rounded-[32px] border border-white/10 bg-zinc-950 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                  {/* Number */}
                  <div className="absolute right-8 top-8">
                    <span className="text-6xl font-bold text-white/20">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex h-full flex-col justify-center p-10">
                    <span className="text-xs uppercase tracking-[4px] text-gray-400">
                      {card.category}
                    </span>

                    <h3 className="mt-4 text-3xl font-bold md:text-4xl">
                      {card.title}
                    </h3>

                    <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-400">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Extra Scroll Space */}
            <div className="h-[150px]" />
          </div>
        </div>
      </div>
    </section>
  );
}