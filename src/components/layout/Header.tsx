"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import iconOnly from "@/assets/icon_only.png";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
  { label: "Events", href: "/events" },
  { label: "Projects", href: "/projects" },
  { label: "Reverts", href: "/reverts" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="p-2 rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-white/10 hover:text-stone-800 dark:hover:text-white transition-colors"
    >
      {theme === "dark" ? (
        /* Sun icon */
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      ) : (
        /* Moon icon */
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 10);
      if (currentY < 100) {
        setVisible(true);
      } else if (currentY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<header
  className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${
    scrolled
      ? "bg-gradient-to-r from-[#F5F0E6]/95 via-[#EFE6D6]/90 to-[#F5F0E6]/95 dark:from-[#0F0F0F]/95 dark:via-[#1C1A17]/95 dark:to-[#3A2E1E]/95 backdrop-blur-md border-b border-[#E5D7B5] dark:border-[#C6A85A]/25 shadow-md"
      : "bg-gradient-to-r from-[#F5F0E6]/80 via-[#EFE6D6]/70 to-[#F5F0E6]/80 dark:from-[#0F0F0F]/75 dark:via-[#1C1A17]/70 dark:to-[#3A2E1E]/75 backdrop-blur-sm border-b border-[#E5D7B5]/50 dark:border-[#C6A85A]/10"
  } ${visible ? "translate-y-0" : "-translate-y-full"}`}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src={iconOnly}
              alt="Bournemouth Islamic Centre"
              width={120}
              height={120}
              className="flex-shrink-0"
            />
            <div className="leading-tight">
              <span className="block text-sm font-bold text-emerald-700 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                Bournemouth Islamic Centre
              </span>
              <span className="block text-xs text-stone-500 dark:text-stone-400">
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
                className="px-3 py-2 text-sm font-medium text-stone-700 dark:text-stone-300 rounded-md hover:bg-stone-100 dark:hover:bg-white/10 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Theme toggle + Donate + mobile menu */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/donate"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-amber-500 text-white hover:bg-amber-600 transition-colors"
            >
              Donate
            </Link>
            <button
              className="md:hidden p-2 rounded-md text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-200 dark:border-white/10 bg-white/95 dark:bg-stone-950/95 backdrop-blur-md px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-stone-700 dark:text-stone-300 rounded-md hover:bg-stone-100 dark:hover:bg-white/10 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
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
