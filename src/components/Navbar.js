"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        {/* Logo */}
        <Link href="/">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            PRIME<span className="font-medium">Drafting</span>
          </h2>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-12">
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
            href="/process"
            className="text-gray-300 transition hover:text-white"
          >
            Process
          </Link>

          <Link
            href="/contact"
            className="text-gray-300 transition hover:text-white"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden md:inline-flex rounded-full bg-white px-7 py-3 font-semibold text-black shadow-[0_0_40px_rgba(255,255,255,.15)] transition hover:scale-105"
        >
          Get a Quote
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}