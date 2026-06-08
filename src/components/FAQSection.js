"use client";

import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

export default function FAQSection() {
  const faqs = [
    {
      question: "What drafting services do you provide?",
      answer:
        "We offer Structural Engineering Drafting, MEP Design, BIM Modeling, Site Coordination, and 3D Visualization services for residential, commercial, and industrial projects.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes. We collaborate with architects, engineers, contractors, and developers worldwide, delivering accurate documentation and BIM solutions remotely.",
    },
    {
      question: "Which software do you use?",
      answer:
        "Our team works with industry-standard tools including AutoCAD, Revit, Navisworks, Civil 3D, Tekla Structures, and other BIM platforms.",
    },
    {
      question: "How do you ensure project accuracy?",
      answer:
        "We follow strict quality-control processes, clash detection workflows, and multi-stage reviews to ensure precise and reliable project deliverables.",
    },
    {
      question: "What is your typical project turnaround time?",
      answer:
        "Turnaround times depend on project complexity, but we prioritize efficient delivery while maintaining the highest standards of quality and accuracy.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-24 text-white -mt-25">
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[3px] text-zinc-300">
            FAQ
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-zinc-400">
            Everything you need to know about our drafting and engineering
            services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-800/80 backdrop-blur-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <h3 className="text-lg font-semibold">
                  {faq.question}
                </h3>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  {activeIndex === index ? (
                    <HiMinus size={18} />
                  ) : (
                    <HiPlus size={18} />
                  )}
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-zinc-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md">
          <h3 className="text-2xl font-bold">
            Still have questions?
          </h3>

          <p className="mt-3 text-zinc-400">
            Contact our team and we'll be happy to discuss your project
            requirements.
          </p>

          <a
            href="/contact"
            className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}