"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
  { label: "Events", href: "/events" },
  { label: "Projects", href: "/projects" },
  { label: "Reverts", href: "/reverts" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-emerald-700 flex items-center justify-center flex-shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="white"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M12 2C9 2 6.5 4.5 6.5 7.5c0 1.8.9 3.4 2.2 4.4L12 22l3.3-10.1c1.3-1 2.2-2.6 2.2-4.4C17.5 4.5 15 2 12 2z" />
              </svg>
            </div>
            <div className="leading-tight">
              <span className="block text-sm font-bold text-emerald-800 group-hover:text-emerald-600 transition-colors">
                Bournemouth Islamic Centre
              </span>
              <span className="block text-xs text-stone-500">
                & Central Mosque
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-stone-700 rounded-md hover:bg-stone-100 hover:text-emerald-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Donate CTA + mobile menu button */}
          <div className="flex items-center gap-3">
            <Link
              href="/donate"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-amber-500 text-white hover:bg-amber-600 transition-colors"
            >
              Donate
            </Link>
            <button
              className="md:hidden p-2 rounded-md text-stone-600 hover:bg-stone-100"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-100 bg-white px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-stone-700 rounded-md hover:bg-stone-50 hover:text-emerald-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-2.5 rounded-full text-sm font-semibold bg-amber-500 text-white text-center hover:bg-amber-600 transition-colors"
            >
              Donate Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
