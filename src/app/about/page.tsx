import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";

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
  },
  {
    icon: "📖",
    title: "Quran & Islamic Education",
    desc: "Weekend school for children, adult Quran circles, and Tajweed classes.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Services",
    desc: "Nikah (Islamic marriage) ceremonies, naming ceremonies, and family counselling.",
  },
  {
    icon: "🤝",
    title: "Interfaith Outreach",
    desc: "Engaging with local schools, faith groups, and civic organisations.",
  },
  {
    icon: "🌸",
    title: "Sisters' Services",
    desc: "Dedicated prayer space, weekly halaqa, and support for revert sisters.",
  },
  {
    icon: "🍱",
    title: "Community Welfare",
    desc: "Weekly food bank, hardship fund, and support for vulnerable community members.",
  },
  {
    icon: "🎓",
    title: "Youth Programme",
    desc: "Regular youth club, trips, sports, and mentoring for ages 11–18.",
  },
  {
    icon: "📜",
    title: "Funeral Services",
    desc: "Janazah prayer coordination and support for bereaved families.",
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeading title="About Us" />

      {/* Who we are */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-center">
        <div>
          <h2 className="text-2xl font-bold text-stone-800 mb-4">
            Who We Are
          </h2>
          <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
            <p>
              Bournemouth Islamic Centre &amp; Central Mosque has been at the
              heart of the Muslim community in Bournemouth and the surrounding
              Dorset area since 1998. We are a registered charity run entirely
              by volunteers and supported by the generosity of our community.
            </p>
            <p>
              Our centre serves thousands of Muslims across Bournemouth,
              Christchurch, and Poole, as well as students, visitors, and
              newcomers to the area. We strive to be a place of spiritual
              nourishment, community support, and civic engagement.
            </p>
            <p>
              We are committed to serving not only the Muslim community but also
              the wider Bournemouth community through interfaith dialogue, food
              bank services, and open days.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-emerald-50 to-stone-100 rounded-2xl h-64 flex items-center justify-center">
          <div className="text-center text-stone-400">
            <svg
              className="w-16 h-16 mx-auto mb-3 text-emerald-200"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2C9 2 6.5 4.5 6.5 7.5c0 1.8.9 3.4 2.2 4.4L12 22l3.3-10.1c1.3-1 2.2-2.6 2.2-4.4C17.5 4.5 15 2 12 2z" />
            </svg>
            <p className="text-xs">Mosque image placeholder</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <div className="bg-emerald-700 text-white rounded-2xl p-8">
          <h2 className="text-xl font-bold mb-3">Our Mission</h2>
          <p className="text-emerald-100 text-sm leading-relaxed">
            To serve the Muslim community of Bournemouth by providing a
            welcoming, inclusive, and spiritually enriching mosque and
            community centre — a place where faith is nurtured, families are
            supported, and all are welcome.
          </p>
        </div>
        <div className="bg-stone-800 text-white rounded-2xl p-8">
          <h2 className="text-xl font-bold mb-3">Our Vision</h2>
          <p className="text-stone-300 text-sm leading-relaxed">
            A thriving, confident Muslim community in Bournemouth that is proud
            of its faith, well-integrated into civic life, and known for its
            positive contribution to the town&apos;s culture and social fabric.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="mb-16" aria-labelledby="services-heading">
        <h2
          id="services-heading"
          className="text-2xl font-bold text-stone-800 mb-6"
        >
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl border border-stone-200 p-5"
            >
              <span className="text-2xl mb-3 block" aria-hidden="true">
                {service.icon}
              </span>
              <h3 className="text-sm font-semibold text-stone-800 mb-1">
                {service.title}
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* History timeline */}
      <section aria-labelledby="history-heading">
        <h2
          id="history-heading"
          className="text-2xl font-bold text-stone-800 mb-8"
        >
          Our History
        </h2>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-stone-200" aria-hidden="true" />
          <div className="space-y-6">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-5 relative pl-14">
                <div className="absolute left-0 w-12 h-12 rounded-full bg-emerald-700 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {item.year}
                </div>
                <div className="bg-white rounded-xl border border-stone-200 p-4 flex-grow">
                  <p className="text-sm text-stone-700">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
