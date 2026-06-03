"use client";

import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineArrowTrendingUp,
} from "react-icons/hi2";

export default function WhyChooseSection() {
  const features = [
    {
      icon: <HiOutlineShieldCheck size={22} />,
      title: "Precision",
      description:
        "Our drafting approach ensures zero-clash models and precise material takeoffs that save time and budget.",
    },
    {
      icon: <HiOutlineClock size={22} />,
      title: "Efficiency",
      description:
        "Leveraging automated BIM workflows, we reduce turnaround times without compromising documentation quality.",
    },
    {
      icon: <HiOutlineArrowTrendingUp size={22} />,
      title: "Scalability",
      description:
        "From residential renovations to large industrial developments, our team scales to meet project demands.",
    },
  ];

  return (
    <section className="bg-[#041528] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/team.jpg"
                alt="Engineering Team"
                width={800}
                height={500}
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-5 right-8 rounded-2xl bg-cyan-400 px-8 py-4 text-black font-semibold shadow-[0_0_30px_rgba(34,211,238,.35)]">
              99.8% Accuracy
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Why Choose PRIME Drafting?
            </h2>

            <div className="space-y-10">
              {features.map((item, index) => (
                <div key={index} className="flex gap-5">
                  <div className="h-12 w-12 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 shrink-0">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      {item.title}
                    </h3>

                    <p className="text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-28">
          <div className="rounded-[40px] bg-gradient-to-br from-[#0b1b38] to-[#08142b] border border-white/5 px-8 md:px-16 py-20 text-center">
            <h2 className="text-5xl font-bold mb-6">
              Ready to Draft Your Future?
            </h2>

            <p className="max-w-3xl mx-auto text-slate-400 text-lg">
              Partner with PRIME Drafting for precision engineering services
              that elevate your project from concept to reality.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
              <Link
                href="/contact"
                className="px-10 py-4 rounded-2xl bg-cyan-400 text-black font-semibold shadow-[0_0_30px_rgba(34,211,238,.35)] hover:scale-105 transition"
              >
                Request a Consultation
              </Link>

              <Link
                href="/process"
                className="px-10 py-4 rounded-2xl border border-white/20 hover:border-cyan-400 transition"
              >
                Our Process
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}