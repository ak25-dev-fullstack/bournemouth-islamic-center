import Link from "next/link";
import Image from "next/image";
import donateLatticeImg from "@/assets/donate-lattice.png";

export default function DonationCTAStrip() {
  return (
    <div className="relative bg-ink text-white rounded-lg px-8 py-12 text-center overflow-hidden">
      <Image
        src={donateLatticeImg}
        alt=""
        aria-hidden="true"
        fill
        sizes="(min-width: 1280px) 1168px, 100vw"
        className="object-cover opacity-[0.04] pointer-events-none select-none"
      />
      <div className="relative">
        <p className="text-xs font-medium text-gold uppercase tracking-wider mb-4">
          Support our community
        </p>
        <h2 className="text-[36px] text-white mb-3">
          Support Bournemouth Islamic Centre
        </h2>
        <p className="text-white/55 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
          Your generosity keeps our doors open, our programmes running, and our community
          thriving. Every contribution — large or small — makes a difference.
        </p>
        <Link
          href="/donate"
          className="inline-flex items-center px-7 py-3 rounded text-sm font-medium bg-gold text-ink hover:opacity-88 transition-opacity duration-150"
        >
          Donate now
        </Link>
      </div>
    </div>
  );
}
