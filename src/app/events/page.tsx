import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import sunsetBg from "@/assets/sunset.png";
import Container from "@/components/ui/Container";
import EventCard from "@/components/ui/EventCard";

import { events } from "@/data/events";
import type { Event } from "@/types";

export const metadata: Metadata = {
  title: "Events & activities",
  description: "Join us for weekly activities, special events, and community gatherings at Bournemouth Islamic Centre.",
};

function PastEventCard({ event }: { event: Event }) {
  const formattedDate = new Date(event.date).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="bg-white border border-ink/8 rounded-lg overflow-hidden hover:border-gold/30 transition-colors duration-150">
      <div className="flex flex-col lg:flex-row">
        {/* Video embed */}
        {event.youtubeId && (
          <div className="lg:w-1/2 flex-shrink-0 aspect-video lg:aspect-auto relative bg-ink">
            <iframe
              src={`https://www.youtube.com/embed/${event.youtubeId}`}
              title={event.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />
          </div>
        )}

        {/* Details */}
        <div className="flex flex-col justify-between p-7 lg:p-8">
          {/* Meta */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs font-medium text-gold bg-gold/10 px-2.5 py-1 rounded">
                Past event
              </span>
              <span className="text-xs font-medium text-muted bg-ink/5 px-2.5 py-1 rounded">
                {event.audience}
              </span>
            </div>

            <h3 className="text-[28px] text-ink mb-3 leading-tight">
              {event.title}
            </h3>

            <p className="text-sm text-muted leading-relaxed mb-6 max-w-prose">
              {event.description}
            </p>

            {/* Info grid */}
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex gap-3 items-start">
                <svg className="w-4 h-4 text-gold/70 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <dt className="text-xs text-muted mb-0.5">Date</dt>
                  <dd className="text-sm text-ink">{formattedDate}</dd>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-4 h-4 text-gold/70 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <dt className="text-xs text-muted mb-0.5">Time</dt>
                  <dd className="text-sm text-ink">{event.time}</dd>
                </div>
              </div>
              <div className="flex gap-3 items-start sm:col-span-2">
                <svg className="w-4 h-4 text-gold/70 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <dt className="text-xs text-muted mb-0.5">Location</dt>
                  <dd className="text-sm text-ink">{event.location}</dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function EventsPage() {
  const weeklyEvents = events.filter((e) => e.recurring);
  const specialEvents = events.filter((e) => e.category === "special");
  const pastEvents = events.filter((e) => e.category === "past");

  return (
    <div className="bg-ivory min-h-screen">
      {/* Page header */}
      <div className="relative overflow-hidden py-28 flex items-end">
        <Image
          src={sunsetBg}
          alt=""
          aria-hidden="true"
          fill
          priority
          className="object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-ink/20" />
        <Container className="relative">
          <p className="text-xs font-medium text-gold uppercase tracking-wider mb-3">What&apos;s on</p>
          <h1 className="text-[52px] text-white leading-tight">Events &amp; activities</h1>
          <p className="text-white/70 mt-3 text-base">Regular programmes and upcoming special events</p>
        </Container>
      </div>

      <Container className="py-16 space-y-14">

        {/* Weekly recurring */}
        <section aria-labelledby="weekly-heading">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 bg-gold rounded-full" aria-hidden="true" />
            <h2 id="weekly-heading" className="text-[24px] text-ink">Weekly programmes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {weeklyEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        {/* Special events */}
        {specialEvents.length > 0 && (
          <section aria-labelledby="special-heading">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-copper rounded-full" aria-hidden="true" />
              <h2 id="special-heading" className="text-[24px] text-ink">Upcoming special events</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specialEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        )}

        {/* Host event CTA */}
        <div className="bg-white border border-ink/8 rounded-lg p-8 text-center hover:border-gold/30 transition-colors duration-150">
          <h3 className="text-[22px] text-ink mb-3">Want to host an event?</h3>
          <p className="text-sm text-muted mb-6 max-w-md mx-auto leading-relaxed">
            We welcome community events and are happy to discuss space hire. Contact us to find
            out more about what we can offer.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-6 py-3 rounded text-sm font-medium bg-gold text-ink hover:opacity-88 transition-opacity duration-150"
          >
            Get in touch
          </Link>
        </div>

        {/* Past events */}
        {pastEvents.length > 0 && (
          <section aria-labelledby="past-heading">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-muted rounded-full" aria-hidden="true" />
              <h2 id="past-heading" className="text-[24px] text-ink">Past events</h2>
            </div>
            <div className="space-y-6">
              {pastEvents.map((event) => (
                <PastEventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        )}

      </Container>
    </div>
  );
}
