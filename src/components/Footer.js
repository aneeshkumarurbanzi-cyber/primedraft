"use client";

import Link from "next/link";
import {
  FaGlobe,
  FaShareAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#071425] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div>
            <h2 className="text-4xl font-bold">
              PRIME<span className="font-medium">Drafting</span>
            </h2>

            <p className="mt-6 text-slate-400 leading-relaxed max-w-xs">
              High-level engineering drafting and BIM modeling
              services for architects and developers who demand
              surgical precision.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-8">
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                <FaGlobe size={18} />
              </a>

              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                <FaShareAlt size={18} />
              </a>

              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest text-white uppercase mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-slate-400">
              <li>
                <Link
                  href="/services/structural-engineering"
                  className="hover:text-cyan-400 transition"
                >
                  Structural Engineering
                </Link>
              </li>

              <li>
                <Link
                  href="/services/mep-design"
                  className="hover:text-cyan-400 transition"
                >
                  MEP Design
                </Link>
              </li>

              <li>
                <Link
                  href="/services/bim-modeling"
                  className="hover:text-cyan-400 transition"
                >
                  BIM Modeling
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest text-white uppercase mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-slate-400">
              <li>
                <Link
                  href="/process"
                  className="hover:text-cyan-400 transition"
                >
                  Our Process
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-cyan-400 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/careers"
                  className="hover:text-cyan-400 transition"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest text-white uppercase mb-6">
              Legal
            </h3>

            <ul className="space-y-4 text-slate-400">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-cyan-400 transition"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-cyan-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-cyan-400 transition"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 text-sm">
          © 2024 PRIME Drafting. Precision in every line.
        </div>
      </div>
    </footer>
  );
}