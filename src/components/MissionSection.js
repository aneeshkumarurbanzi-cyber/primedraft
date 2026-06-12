"use client";

export default function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-black py-32 text-white  -mt-35">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-white/5 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-white/5 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs uppercase tracking-[5px] text-gray-500">
            Our Purpose
          </span>

          <h2 className="mt-5 text-5xl font-bold md:text-6xl">
            Our Mission
          </h2>

          <div className="mt-8 h-px w-24 bg-white/20" />

          <p className="mt-10 max-w-4xl text-xl leading-relaxed text-gray-300 md:text-2xl">
            To provide reliable, accurate, and efficient MEP design and
            drafting solutions that help clients deliver successful projects
            on time and within budget.
          </p>
        </div>
      </div>
    </section>
  );
}