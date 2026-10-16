import Link from "next/link";
import Image from "next/image";
import logoTransparent from "@/assets/Logo_transparent.png";
import latticeBg from "@/assets/donate-lattice.png";

export default function Footer() {
  return (
    <footer className="bg-mosque text-white relative overflow-hidden">
      {/* Lattice pattern overlay */}
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src={latticeBg}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-20"
        />
      </div>
      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Identity */}
          <div className="lg:col-span-1">
            <Image
              src={logoTransparent}
              alt="Bournemouth Islamic Centre"
              width={130}
              height={56}
              className="brightness-0 invert mb-4"
            />
            <p className="text-sm font-semibold text-gold-light mb-2">
              Bournemouth Islamic Centre
            </p>
            <address className="not-italic text-lg text-white leading-relaxed">
              4 St Stephen&apos;s Rd<br />
              Bournemouth<br />
              BH2 6JJ
            </address>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold text-gold-light mb-4">
              Contact
            </h3>
            <ul className="space-y-1 text-lg text-white">
              <li>
                <a href="tel:+441202557072" className="inline-flex items-center min-h-11 font-medium underline-offset-4 hover:underline [overflow-wrap:anywhere]">
                  01202 557 072
                </a>
              </li>
              <li>
                <a href="mailto:bic.sendmessage@gmail.com" className="inline-flex items-center min-h-11 font-medium underline-offset-4 hover:underline [overflow-wrap:anywhere]">
                  bic.sendmessage@gmail.com
                </a>
              </li>
              <li>
                <Link href="/contact" className="inline-flex items-center min-h-11 font-medium underline-offset-4 hover:underline [overflow-wrap:anywhere]">
                  Visiting information →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-gold-light mb-4">
              Quick links
            </h3>
            <ul className="space-y-1 text-lg text-white">
              {[
                { label: "Prayer times", href: "/#prayer-times" },
                { label: "Events", href: "/events" },
                { label: "Donate", href: "/donate" },
                { label: "Revert stories", href: "/reverts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex items-center min-h-11 font-medium underline-offset-4 hover:underline [overflow-wrap:anywhere]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between md:items-center gap-3 text-base text-white/85">
          <p>
            {`© ${new Date().getFullYear()} Bournemouth Islamic Centre & Central Mosque.`}{" "}
            Registered charity no. 1032058.
          </p>
          <div className="flex flex-wrap gap-x-5">
            <Link href="/about" className="inline-flex items-center min-h-11 text-white underline underline-offset-4">About</Link>
            <Link href="/contact" className="inline-flex items-center min-h-11 text-white underline underline-offset-4">Contact</Link>
            <Link href="/donate" className="inline-flex items-center min-h-11 text-white underline underline-offset-4">Donate</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
