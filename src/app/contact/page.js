"use client";

import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
} from "react-icons/hi2";

export default function ContactPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="border-b border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[3px] text-zinc-300">
            Contact Us
          </span>

          <h1 className="mt-6 text-5xl font-bold md:text-6xl">
            Let's Discuss Your Project
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Ready to bring your engineering and drafting requirements
            to life? Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-3xl border border-white/10 bg-zinc-800/80 p-8 backdrop-blur-md">
            <h2 className="mb-8 text-3xl font-bold">
              Send a Message
            </h2>

            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-4 text-white outline-none transition focus:border-white/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-4 text-white outline-none transition focus:border-white/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="+1 234 567 890"
                  className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-4 text-white outline-none transition focus:border-white/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-4 text-white outline-none transition focus:border-white/30"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-white py-4 font-semibold text-black transition hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="mb-8 text-3xl font-bold">
              Get In Touch
            </h2>

            <p className="mb-10 text-zinc-400">
              We're here to answer your questions and discuss your
              project requirements. Reach out through any of the
              channels below.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-5 rounded-3xl border border-white/10 bg-zinc-800/80 p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                  <HiOutlineEnvelope size={24} />
                </div>

                <div>
                  <p className="text-sm text-zinc-400">Email</p>
                  <h3 className="font-semibold">
                    info@primedrafting.com
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-5 rounded-3xl border border-white/10 bg-zinc-800/80 p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                  <HiOutlinePhone size={24} />
                </div>

                <div>
                  <p className="text-sm text-zinc-400">Phone</p>
                  <h3 className="font-semibold">
                    +1 (555) 123-4567
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-5 rounded-3xl border border-white/10 bg-zinc-800/80 p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                  <HiOutlineMapPin size={24} />
                </div>

                <div>
                  <p className="text-sm text-zinc-400">Office</p>
                  <h3 className="font-semibold">
                    123 Business Avenue,
                    New York, USA
                  </h3>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mt-10 rounded-3xl border border-white/10 bg-zinc-800/80 p-8">
              <h3 className="mb-5 text-xl font-semibold">
                Business Hours
              </h3>

              <div className="space-y-3 text-zinc-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>09:00 AM - 06:00 PM</span>
                </div>

                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>09:00 AM - 01:00 PM</span>
                </div>

                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb="
              width="100%"
              height="450"
              loading="lazy"
              className="border-0 grayscale"
            />
          </div>
        </div>
      </section>
    </main>
  );
}