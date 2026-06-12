"use client";

import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-black py-32 text-white -mt-30">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-white/5 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-white/5 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Side - Form */}
          <div>
            <span className="text-xs uppercase tracking-[5px] text-gray-500">
              Get In Touch
            </span>

            <h2 className="mt-4 text-5xl font-bold md:text-6xl">
              Let's Discuss Your Project
            </h2>

            <p className="mt-6 max-w-xl text-lg text-gray-400">
              Tell us about your project requirements and our team will
              get back to you with the right engineering solution.
            </p>

            <form className="mt-10 space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 outline-none transition focus:border-white/30"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 outline-none transition focus:border-white/30"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 outline-none transition focus:border-white/30"
              />

              <input
                type="text"
                placeholder="Project Type"
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 outline-none transition focus:border-white/30"
              />

              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 outline-none transition focus:border-white/30"
              />

              <button
                type="submit"
                className="rounded-xl bg-white px-10 py-4 font-semibold text-black transition hover:scale-105"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[32px] border border-white/10">
              <Image
                src="/contact.jpg" // replace with your image
                alt="Prime Drafting"
                width={800}
                height={900}
                className="h-[700px] w-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 rounded-2xl border border-white/10 bg-black/80 p-6 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[3px] text-gray-500">
                Prime Drafting
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Precision Engineered Excellence
              </h3>

              <p className="mt-3 max-w-sm text-gray-400">
                Delivering world-class MEP design, BIM coordination,
                and drafting services for global projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}