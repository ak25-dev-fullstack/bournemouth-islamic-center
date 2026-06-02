import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import heroBg from "@/assets/outside.jpg";
import imamImg from "@/assets/imam.jpg";
import insideImg from "@/assets/inside.jpg";
import khutbahImg from "@/assets/khutbah.jpg";
import geoTexture from "@/assets/geo-texture.jpg";

export const metadata: Metadata = {
  title: "About us",
  description: "Learn about Bournemouth Islamic Centre — our mission, history, services, and community.",
};

const services = [
  { title: "Daily prayers", desc: "Five daily prayers with congregation, open to all Muslims." },
  { title: "Quran & Islamic education", desc: "Weekend school for children, adult Quran circles, and Tajweed classes." },
  { title: "Family services", desc: "Nikah ceremonies, naming ceremonies, and family counselling." },
  { title: "Interfaith outreach", desc: "Engaging with local schools, faith groups, and civic organisations." },
  { title: "Sisters' services", desc: "Dedicated prayer space, weekly halaqa, and support for revert sisters." },
  { title: "Community welfare", desc: "Weekly food bank, hardship fund, and support for vulnerable community members." },
  { title: "Youth programme", desc: "Regular youth club, trips, sports, and mentoring for ages 11–18." },
  { title: "Funeral services", desc: "Janazah prayer coordination and support for bereaved families." },
];

const timeline = [
  { year: "1998", event: "Bournemouth Islamic Centre founded by a group of local Muslim families." },
  { year: "2003", event: "First permanent mosque building acquired on Mosque Road." },
  { year: "2010", event: "Weekend school launched, now serving over 150 children." },
  { year: "2015", event: "Major renovation of the main prayer hall completed." },
  { year: "2020", event: "Community food bank established, continuing to serve 200+ families." },
  { year: "2024", event: "Car park expansion and disabled access improvements completed." },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative text-white overflow-hidden min-h-[55vh] flex items-end">
        <Image src={heroBg} alt="" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-ink/40 to-ink/85" />
        <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16 pb-14 pt-20 w-full">
          <p className="text-xs font-medium text-gold uppercase tracking-wider mb-3">
            Bournemouth Islamic Centre
          </p>
          <h1 className="text-[56px] sm:text-[72px] font-light text-white">About</h1>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium text-gold uppercase tracking-wider mb-4">Who we are</p>
              <h2 className="text-[36px] text-ink mb-6">
                A community rooted in faith, open to all
              </h2>
              <div className="space-y-4 text-sm text-muted leading-relaxed max-w-[540px]">
                <p>
                  Bournemouth Islamic Center and Islamic Mosque is a non-profit organisation serving the
                  Bournemouth community by promoting religion, advancing education, relieving poverty and
                  distress, and providing facilities for protection of health and recreation — with the aim
                  of improving the conditions of life of the community.
                </p>
                <p>
                  The centre operates for the benefit of all Muslims irrespective of their ethnic background,
                  gender, country of origin, or age.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="https://register-of-charities.charitycommission.gov.uk/en/charity-search/-/charity-details/1032058/full-print"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-medium border border-ink/15 text-ink hover:border-gold/60 hover:text-gold transition-colors duration-150"
                >
                  View on Charity Commission
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Stacked images */}
            <div className="relative h-[400px]">
              <div className="absolute top-0 left-0 right-10 bottom-14 rounded-lg overflow-hidden">
                <Image src={heroBg} alt="Bournemouth Islamic Centre exterior" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-bottom" />
              </div>
              <div className="absolute bottom-0 right-0 w-48 h-36 rounded-lg overflow-hidden border-2 border-white shadow-lg">
                <Image src={insideImg} alt="Inside the mosque" fill sizes="200px" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-24 bg-ivory relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.04]">
          <Image src={geoTexture} alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-medium text-gold uppercase tracking-wider mb-3">Our purpose</p>
            <h2 className="text-[36px] text-ink">Mission &amp; vision</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white border border-ink/8 rounded-lg p-8 hover:border-gold/40 transition-colors duration-150">
              <div className="w-10 h-10 bg-gold/10 rounded flex items-center justify-center mb-6 text-gold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-[20px] text-ink mb-3">Our mission</h3>
              <p className="text-sm text-muted leading-relaxed">
                To serve the Muslim community of Bournemouth by providing a welcoming, inclusive, and
                spiritually enriching mosque and community centre — a place where faith is nurtured,
                families are supported, and all are welcome.
              </p>
            </div>
            <div className="bg-white border border-ink/8 rounded-lg p-8 hover:border-gold/40 transition-colors duration-150">
              <div className="w-10 h-10 bg-gold/10 rounded flex items-center justify-center mb-6 text-gold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-[20px] text-ink mb-3">Our vision</h3>
              <p className="text-sm text-muted leading-relaxed">
                A thriving, confident Muslim community in Bournemouth that is proud of its faith,
                well-integrated into civic life, and known for its positive contribution to the
                town&apos;s culture and social fabric.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Mosque ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-lg overflow-hidden h-80 order-last lg:order-first">
              <Image src={insideImg} alt="Inside the Bournemouth Islamic Centre prayer hall" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                {["400+ worshippers", "Sisters' gallery", "Islamic library", "Weekend school"].map((badge) => (
                  <span key={badge} className="bg-ink/60 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-gold uppercase tracking-wider mb-4">The space</p>
              <h2 className="text-[36px] text-ink mb-6">Our mosque</h2>
              <div className="space-y-4 text-sm text-muted leading-relaxed max-w-[540px]">
                <p>
                  Our main prayer hall can accommodate over 400 worshippers, with a separate, fully
                  equipped prayer space for sisters on the upper floor. The hall was extensively
                  renovated in 2015 to provide a calm, beautiful environment for worship.
                </p>
                <p>
                  The centre also houses a dedicated Wudu area, an Islamic library, a classroom for
                  the weekend school, and a communal kitchen used for community iftars and events.
                </p>
                <p>
                  We welcome non-Muslim visitors — please contact us to arrange a guided tour or
                  visit during our regular open days.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 mt-8 text-sm font-medium text-gold hover:text-copper transition-colors duration-150"
              >
                Contact us to arrange a visit
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Meet Our Imam ── */}
      <section className="py-24 bg-surface">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            <div className="relative rounded-lg overflow-hidden h-72 lg:h-full min-h-[300px]">
              <Image src={imamImg} alt="Imam of Bournemouth Islamic Centre" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover object-top" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs font-medium text-gold uppercase tracking-wider mb-4">Leadership</p>
              <h2 className="text-[36px] text-ink mb-2">Meet our imam</h2>
              <p className="text-sm font-medium text-muted mb-6">Sheikh [Name] — Lead Imam &amp; Scholar</p>
              <div className="space-y-4 text-sm text-muted leading-relaxed">
                <p>
                  Our imam has served the Bournemouth Muslim community for over a decade, providing
                  spiritual leadership, pastoral care, and educational guidance to worshippers of all
                  ages and backgrounds.
                </p>
                <p>
                  He holds an ijazah in Quranic recitation (Hafs) and a degree in Islamic Studies.
                  He leads all five daily prayers, delivers the Friday Jummah khutbah, and oversees
                  the weekend school curriculum.
                </p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden h-72 lg:h-full min-h-[300px]">
              <Image src={khutbahImg} alt="Friday khutbah at Bournemouth Islamic Centre" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Friday khutbah</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-medium text-gold uppercase tracking-wider mb-3">What we offer</p>
            <h2 className="text-[36px] text-ink">Our services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-ink/8 rounded-lg p-6 hover:border-gold/40 transition-colors duration-150"
              >
                <div className="w-2 h-2 rounded-full bg-gold mb-5" aria-hidden="true" />
                <h3 className="text-[16px] text-ink mb-2">{service.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── History Timeline ── */}
      <section className="py-24 bg-ivory relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.04]">
          <Image src={geoTexture} alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-medium text-gold uppercase tracking-wider mb-3">Since 1998</p>
            <h2 className="text-[36px] text-ink">Our history</h2>
          </div>
          <div className="relative max-w-2xl mx-auto">
            {/* Vertical line */}
            <div aria-hidden="true" className="absolute left-7 top-0 bottom-0 w-px bg-gold/20" />
            <div className="space-y-5">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-6 relative">
                  <div className="flex-shrink-0 w-14 h-14 bg-gold/10 border border-gold/30 rounded flex items-center justify-center z-10 text-xs font-medium text-ink">
                    {item.year}
                  </div>
                  <div className="flex-grow bg-white border border-ink/8 rounded-lg p-4 hover:border-gold/30 transition-colors duration-150">
                    <p className="text-sm text-muted">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
