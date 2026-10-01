"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import iconOnly from "@/assets/icon_only.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Reverts", href: "/reverts" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

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

  // Close the mobile menu whenever the route changes (incl. browser back/forward)
  const [menuPath, setMenuPath] = useState(pathname);
  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setMenuOpen(false);
  }

  // While the mobile menu is open: lock page scroll and close on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out ${
        scrolled || menuOpen
          ? "bg-white border-b border-ink/10 shadow-[0_1px_3px_rgba(26,25,22,0.06)]"
          : "bg-ivory/95 backdrop-blur-sm border-b border-gold/20"
      } ${visible || menuOpen ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between gap-4 h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0 min-w-0">
            <Image
              src={iconOnly}
              alt="Bournemouth Islamic Centre — home"
              width={64}
              height={64}
              className="flex-shrink-0"
            />
            <div className="hidden sm:block lg:hidden xl:block leading-tight">
              <span className="block text-base font-semibold text-ink group-hover:text-mosque transition-colors duration-150">
                Bournemouth Islamic Centre
              </span>
              <span className="block text-xs text-muted">&amp; Central Mosque</span>
            </div>
          </Link>

          {/* Desktop nav — shown from 1024px; tablets in portrait use the menu button */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`inline-flex items-center min-h-11 px-3 text-base rounded transition-colors duration-150 ${
                    active
                      ? "font-semibold text-mosque underline underline-offset-8 decoration-2 decoration-gold"
                      : "font-medium text-ink hover:text-mosque hover:bg-ink/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <Link
              href="/donate"
              className="inline-flex items-center min-h-11 px-4 sm:px-5 rounded text-base font-semibold bg-gold text-ink hover:opacity-90 transition-opacity duration-150"
            >
              Donate
            </Link>
            <button
              type="button"
              className="lg:hidden inline-flex items-center gap-2 min-h-11 px-3 rounded border border-ink/20 text-ink hover:bg-ink/5 transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
              <span className="text-base font-medium">{menuOpen ? "Close" : "Menu"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & tablet menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-gold/20 bg-white px-4 sm:px-8 pb-6 pt-3 max-h-[calc(100dvh-5rem)] overflow-y-auto"
        >
          <nav className="flex flex-col gap-1 max-w-[1200px] mx-auto" aria-label="Mobile navigation">
            {[navLinks[0], { label: "Prayer times", href: "/#prayer-times" }, ...navLinks.slice(1)].map((link) => {
              const active = link.href !== "/#prayer-times" && isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center min-h-14 px-4 text-lg rounded transition-colors duration-150 ${
                    active
                      ? "font-semibold text-mosque bg-mosque/10"
                      : "font-medium text-ink hover:bg-ivory"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/donate"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex items-center justify-center min-h-14 px-4 text-lg font-semibold bg-gold text-ink rounded hover:opacity-90 transition-opacity duration-150"
            >
              Donate now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
