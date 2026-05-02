import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import heroBg from "@/assets/green mosque.png";
import outsideImg from "@/assets/outside.jpg";
import insideImg from "@/assets/inside.jpg";
import imamImg from "@/assets/imam.jpg";
import khutbahImg from "@/assets/khutbah.jpg";
import abstractImg from "@/assets/islamic-design-greeting-card-background_1024307-3446.avif";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bournemouth Islamic Centre — our mission, history, services, and community.",
};

const services = [
  {
    icon: "🕌",
    title: "Daily Prayers",
    desc: "Five daily prayers with congregation, open to all Muslims.",
    gradient: "from-emerald-600 to-emerald-900",
  },
  {
    icon: "📖",
    title: "Quran & Islamic Education",
    desc: "Weekend school for children, adult Quran circles, and Tajweed classes.",
    gradient: "from-teal-600 to-emerald-900",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Services",
    desc: "Nikah ceremonies, naming ceremonies, and family counselling.",
    gradient: "from-stone-600 to-stone-900",
  },
  {
    icon: "🤝",
    title: "Interfaith Outreach",
    desc: "Engaging with local schools, faith groups, and civic organisations.",
    gradient: "from-amber-600 to-amber-900",
  },
  {
    icon: "🌸",
    title: "Sisters' Services",
    desc: "Dedicated prayer space, weekly halaqa, and support for revert sisters.",
    gradient: "from-emerald-500 to-teal-900",
  },
  {
    icon: "🍱",
    title: "Community Welfare",
    desc: "Weekly food bank, hardship fund, and support for vulnerable community members.",
    gradient: "from-stone-700 to-stone-950",
  },
  {
    icon: "🎓",
    title: "Youth Programme",
    desc: "Regular youth club, trips, sports, and mentoring for ages 11–18.",
    gradient: "from-amber-500 to-amber-900",
  },
  {
    icon: "📜",
    title: "Funeral Services",
    desc: "Janazah prayer coordination and support for bereaved families.",
    gradient: "from-stone-800 to-stone-950",
  },
];

const timeline = [
  {
    year: "1998",
    event: "Bournemouth Islamic Centre founded by a group of local Muslim families.",
  },
  {
    year: "2003",
    event: "First permanent mosque building acquired on Mosque Road.",
  },
  {
    year: "2010",
    event: "Weekend school launched, now serving over 150 children.",
  },
  {
    year: "2015",
    event: "Major renovation of the main prayer hall completed.",
  },
  {
    year: "2020",
    event: "Community food bank established, continuing to serve 200+ families.",
  },
  {
    year: "2024",
    event: "Car park expansion and disabled access improvements completed.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative text-white overflow-hidden min-h-[62vh] flex items-end">
        <Image
          src={heroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/45 to-black/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-20 w-full">
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Bournemouth Islamic Centre
          </p>
          <h1 className="text-6xl sm:text-7xl font-bold tracking-tight">About</h1>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="py-20 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-4">
                Who We Are
              </p>
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                A community rooted in faith, open to all
              </h2>
              <div className="space-y-4 text-stone-300 text-base leading-relaxed">
                <p>
                  Bournemouth Islamic Center and Islamic Mosque is a non profit
                  organisation serving the Bournemouth community by promoting
                  religion, advancing education, relieving poverty and distress
                  and by providing facilities for protection of health and
                  recreation with the aim of improving the conditions of life of
                  the community.
                </p>
                <p>
                  The centre operates for the benefit of all Muslims irrespective
                  of their ethnic background, gender, country of origin or age.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="https://register-of-charities.charitycommission.gov.uk/en/charity-search/-/charity-details/1032058/full-print"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Visit BICCM on the Charity Commission
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Image */}
            {/* Stacked images — exterior large, interior small overlay */}
            <div className="relative h-[420px] lg:h-[480px]">
              <div className="absolute top-0 left-0 right-10 bottom-16 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={outsideImg}
                  alt="Bournemouth Islamic Centre exterior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-bottom"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-52 h-40 rounded-2xl overflow-hidden border-4 border-stone-800 shadow-2xl">
                <Image
                  src={insideImg}
                  alt="Inside the mosque"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="relative py-20 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-stone-950 via-emerald-950 to-stone-950"
        />
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.07]">
          <Image src={abstractImg} alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Purpose
            </p>
            <h2 className="text-4xl font-bold text-white">Mission &amp; Vision</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm p-8 hover:bg-white/10 transition-colors duration-200">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                To serve the Muslim community of Bournemouth by providing a
                welcoming, inclusive, and spiritually enriching mosque and
                community centre — a place where faith is nurtured, families are
                supported, and all are welcome.
              </p>
            </div>
            <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm p-8 hover:bg-white/10 transition-colors duration-200">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                A thriving, confident Muslim community in Bournemouth that is
                proud of its faith, well-integrated into civic life, and known
                for its positive contribution to the town&apos;s culture and
                social fabric.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Mosque ── */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden h-80 lg:h-96 order-last lg:order-first">
              <Image
                src={insideImg}
                alt="Inside the Bournemouth Islamic Centre prayer hall"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                {["400+ worshippers", "Sisters' gallery", "Islamic library", "Weekend school"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full"
                    >
                      {badge}
                    </span>
                  )
                )}
              </div>
            </div>
            <div>
              <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-4">
                The Space
              </p>
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Our Mosque</h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>
                  Our main prayer hall can accommodate over 400 worshippers, with
                  a separate, fully equipped prayer space for sisters on the upper
                  floor. The hall was extensively renovated in 2015 to provide a
                  calm, beautiful environment for worship.
                </p>
                <p>
                  The centre also houses a dedicated Wudu area, an Islamic
                  library, a classroom for the weekend school, and a communal
                  kitchen used for community iftars and events throughout the
                  year.
                </p>
                <p>
                  We welcome non-Muslim visitors — please contact us to arrange a
                  guided tour or visit us during our regular open days.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 mt-8 text-emerald-400 font-semibold text-sm hover:text-emerald-300 transition-colors group"
              >
                Contact us to arrange a visit
                <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Meet Our Imam ── */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-stone-900 to-stone-950">
        <div
          aria-hidden="true"
          className="absolute -top-24 right-0 w-80 h-80 rounded-full bg-emerald-700/15 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/3 w-60 h-60 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Imam image */}
            <div className="relative rounded-3xl overflow-hidden h-80 lg:h-full min-h-[320px]">
              <Image
                src={imamImg}
                alt="Imam of Bournemouth Islamic Centre"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-top"
              />
            </div>

            {/* Text */}
            <div className="text-white flex flex-col justify-center">
              <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-4">
                Leadership
              </p>
              <h2 className="text-4xl font-bold mb-2">Meet Our Imam</h2>
              <p className="text-emerald-400 font-semibold text-sm mb-6">
                Sheikh [Name] — Lead Imam &amp; Scholar
              </p>
              <div className="space-y-4 text-stone-300 text-sm leading-relaxed">
                <p>
                  Our imam has served the Bournemouth Muslim community for over a
                  decade, providing spiritual leadership, pastoral care, and
                  educational guidance to worshippers of all ages and backgrounds.
                </p>
                <p>
                  He holds an ijazah in Quranic recitation (Hafs) and a degree in
                  Islamic Studies from [University/Institute]. He leads all five
                  daily prayers, delivers the Friday Jummah khutbah, and oversees
                  the weekend school curriculum.
                </p>
                <p>
                  Outside of regular mosque duties, the imam is actively involved
                  in interfaith dialogue with local churches and community
                  organisations, and provides bereavement support and Islamic
                  counselling to community members.
                </p>
              </div>
            </div>

            {/* Khutbah image */}
            <div className="relative rounded-3xl overflow-hidden h-80 lg:h-full min-h-[320px]">
              <Image
                src={khutbahImg}
                alt="Friday khutbah at Bournemouth Islamic Centre"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-4 left-5 text-white text-sm font-semibold">
                Friday Khutbah
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
              What We Offer
            </p>
            <h2 className="text-4xl font-bold text-white">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`bg-gradient-to-br ${service.gradient} p-7 flex flex-col min-h-[200px]`}
                >
                  <span className="text-4xl mb-5 block" aria-hidden="true">
                    {service.icon}
                  </span>
                  <h3 className="text-sm font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-xs text-white/70 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── History Timeline ── */}
      <section className="relative py-20 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-emerald-950 to-stone-950"
        />
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.05]">
          <Image src={abstractImg} alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div
          aria-hidden="true"
          className="absolute -bottom-20 right-0 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute top-20 -left-20 w-60 h-60 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Since 1998
            </p>
            <h2 className="text-4xl font-bold text-white">Our History</h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div
              aria-hidden="true"
              className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-emerald-700/50 to-transparent"
            />
            <div className="space-y-5">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-6 relative">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-emerald-700 text-white text-xs font-bold flex items-center justify-center z-10">
                    {item.year}
                  </div>
                  <div className="flex-grow bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/10 transition-colors duration-200">
                    <p className="text-sm text-stone-300">{item.event}</p>
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
