"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-slate-900"
          >
            Qiftly
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">

            <Link
              href="/"
              className="text-slate-700 hover:text-black"
            >
              Home
            </Link>

            <Link
              href="/products"
              className="text-slate-700 hover:text-black"
            >
              Products
            </Link>

            <Link
              href="/about"
              className="text-slate-700 hover:text-black"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-slate-700 hover:text-black"
            >
              Contact
            </Link>

          </nav>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/97471083700"
            target="_blank"
            className="hidden md:inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            ☰
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">

          <nav className="flex flex-col p-4 gap-4">

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <a
              href="https://wa.me/97471083700"
              target="_blank"
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-center"
            >
              WhatsApp Order
            </a>

          </nav>

        </div>
      )}
    </header>
  );
}