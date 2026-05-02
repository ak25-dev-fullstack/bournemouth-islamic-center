import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import EventCard from "@/components/ui/EventCard";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Events & Activities",
  description:
    "Join us for weekly activities, special events, and community gatherings at Bournemouth Islamic Centre.",
};

export default function EventsPage() {
  const weeklyEvents = events.filter((e) => e.category === "weekly");
  const specialEvents = events.filter((e) => e.category === "special");

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950" />
      <div aria-hidden="true" className="absolute -top-24 right-0 w-[400px] h-[400px] rounded-full bg-emerald-700/10 blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full bg-amber-500/8 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeading
          title="Events &amp; Activities"
          subtitle="Regular programmes and upcoming special events"
          light
        />

        {/* Weekly recurring */}
        <section className="mb-14" aria-labelledby="weekly-heading">
          <h2
            id="weekly-heading"
            className="text-lg font-bold text-white mb-5 flex items-center gap-2"
          >
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block" />
            Weekly Programmes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {weeklyEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        {/* Special events */}
        <section aria-labelledby="special-heading">
          <h2
            id="special-heading"
            className="text-lg font-bold text-white mb-5 flex items-center gap-2"
          >
            <span className="w-1.5 h-6 bg-amber-500 rounded-full inline-block" />
            Upcoming Special Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specialEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        {/* Registration CTA */}
        <div className="mt-12 bg-emerald-900/30 border border-emerald-700/30 rounded-2xl p-8 text-center backdrop-blur-sm">
          <h3 className="text-xl font-bold text-white mb-2">
            Want to host an event?
          </h3>
          <p className="text-stone-400 text-sm mb-5 max-w-lg mx-auto">
            We welcome community events and are happy to discuss space hire.
            Contact us to find out more about what we can offer.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-6 py-2.5 rounded-full bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-600 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
