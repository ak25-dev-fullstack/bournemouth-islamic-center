"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import iconOnly from "@/assets/icon_only.png";

const navLinks = [
  { label: "News", href: "/news" },
  { label: "Events", href: "/events" },
  { label: "Reverts", href: "/reverts" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y < 80) setVisible(true);
      else if (y > lastScrollY.current) setVisible(false);
      else setVisible(true);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out ${
        scrolled
          ? "bg-white/96 backdrop-blur-sm border-b border-ink/8 shadow-[0_1px_3px_rgba(26,25,22,0.06)]"
          : "bg-ivory/95 backdrop-blur-sm border-b border-gold/20"
      } ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <Image
              src={iconOnly}
              alt="Bournemouth Islamic Centre"
              width={44}
              height={44}
              className="flex-shrink-0"
            />
            <div className="hidden sm:block leading-tight">
              <span className="block text-sm font-medium text-ink group-hover:text-gold transition-colors duration-150">
                Bournemouth Islamic Centre
              </span>
              <span className="block text-xs text-muted">& Central Mosque</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-ink/65 hover:text-ink rounded transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/donate"
              className="hidden sm:inline-flex items-center px-5 py-2 rounded text-sm font-medium bg-gold text-ink hover:opacity-88 transition-opacity duration-150"
            >
              Donate
            </Link>
            <button
              className="md:hidden p-2 text-ink/60 hover:text-ink transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gold/20 bg-white px-5 pb-5 pt-3">
          <nav className="flex flex-col gap-0.5" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 text-sm text-ink/70 hover:text-ink hover:bg-ivory rounded transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-2.5 text-center text-sm font-medium bg-gold text-ink rounded hover:opacity-88 transition-opacity duration-150"
            >
              Donate now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
