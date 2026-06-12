"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link href="/">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              PRIME<span className="font-medium">Drafting</span>
            </h2>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-12 md:flex">
            <Link
              href="/"
              className="border-b-2 border-white pb-1 text-white"
            >
              Home
            </Link>

            <Link
              href="/services"
              className="text-gray-300 transition hover:text-white"
            >
              Services
            </Link>

            <Link
              href="/about"
              className="text-gray-300 transition hover:text-white"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="text-gray-300 transition hover:text-white"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Button */}
          <Link
            href="/contact"
            className="hidden rounded-full bg-white px-7 py-3 font-semibold text-black shadow-[0_0_40px_rgba(255,255,255,.15)] transition hover:scale-105 md:inline-flex"
          >
            Get a Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white md:hidden"
          >
            {isOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen
              ? "max-h-[400px] opacity-100 pb-6"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-3xl border border-white/10 bg-zinc-900/95 p-6 backdrop-blur-xl">
            <nav className="flex flex-col gap-5">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-lg text-white"
              >
                Home
              </Link>

              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className="text-lg text-gray-300"
              >
                Services
              </Link>

              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-lg text-gray-300"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-lg text-gray-300"
              >
                Contact
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-flex justify-center rounded-full bg-white px-6 py-3 font-semibold text-black"
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}