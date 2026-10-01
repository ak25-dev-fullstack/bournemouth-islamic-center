import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import heroBg from "@/assets/background.png";
import geoTexture from "@/assets/geo-texture.jpg";

import Container from "@/components/ui/Container";
import DonationCTAStrip from "@/components/ui/DonationCTAStrip";
import EventCard from "@/components/ui/EventCard";
import SectionHeading from "@/components/ui/SectionHeading";
import PrayerTimesWidget from "@/components/home/PrayerTimesWidget";
import QuickLinksGrid from "@/components/home/QuickLinksGrid";
import UrgentNotices from "@/components/home/UrgentNotices";

import revertPhoto from "@/assets/revert-story.jpg";

import { events } from "@/data/events";
import { jummahInfo } from "@/data/prayer-times";

export const metadata: Metadata = {
  title: "Bournemouth Islamic Centre & Central Mosque",
  description: "Your home for worship, community, and learning in Bournemouth. Prayer times, events, announcements, and more.",
};

function GoldDivider() {
  return (
    <div className="h-px w-[120px] mx-auto bg-gold/30 my-2" aria-hidden="true" />
  );
}

export default function HomePage() {
  const upcomingEvents = events.slice(0, 3);

  return (
    <>
      {/* ── Urgent notices — only rendered when src/data/notices.ts has entries ── */}
      <UrgentNotices />

      {/* ── Hero ── */}
      <section className="relative text-white overflow-hidden min-h-[80svh] flex items-center">
        <Image
          src={heroBg}
          alt=""
          aria-hidden="true"
          fill
          priority
          className="object-cover object-[20%_center] sm:object-center"
        />
        {/* Gradient: dark left → lighter right; stronger on small screens where text spans the full width */}
        <div aria-hidden="true" className="absolute inset-0 bg-ink/70 sm:bg-transparent sm:bg-gradient-to-r sm:from-ink/90 sm:via-ink/65 sm:to-ink/20" />

        <Container className="relative py-16 sm:py-24 w-full">
          <div className="max-w-2xl">
            <p className="text-lg font-semibold text-gold-light mb-4">
              Welcome to
            </p>
            <h1 className="text-[clamp(2.25rem,7vw,4rem)] leading-[1.15] text-white mb-6">
              Bournemouth Islamic Centre &amp; Central Mosque
            </h1>
            <GoldDivider />
            <p className="text-white text-xl leading-relaxed mt-6 mb-10 max-w-xl">
              A welcoming home for worship, community, and learning in the heart of Bournemouth.
              All are welcome.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <Link
                href="#prayer-times"
                className="inline-flex items-center justify-center min-h-12 px-7 rounded text-lg font-semibold bg-gold text-ink hover:opacity-90 transition-opacity duration-150"
              >
                Prayer times
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center min-h-12 px-7 rounded text-lg font-semibold bg-white/10 text-white border-2 border-white/70 hover:bg-white/20 transition-colors duration-150"
              >
                Donate
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center justify-center min-h-12 px-7 rounded text-lg font-semibold bg-white/10 text-white border-2 border-white/70 hover:bg-white/20 transition-colors duration-150"
              >
                Events
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Prayer Times ── full width, directly under the hero */}
      <PrayerTimesWidget />

      {/* ── Today at the mosque ── */}
      <section className="py-20 sm:py-24 bg-ivory" aria-labelledby="today-heading">
        <Container>
          <h2 id="today-heading" className="text-[clamp(1.875rem,5vw,2.25rem)] text-ink mb-3">
            Today at the mosque
          </h2>
          <p className="text-lg text-muted mb-8 leading-relaxed max-w-prose">
            Open daily for all five prayers. Our doors are open to all Muslims and those who wish to
            learn more about Islam.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Jumu'ah prayer",
                detail: `Fridays · English khutbah ${jummahInfo.khutbahEnglish} · Prayer ${jummahInfo.prayer}`,
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Weekend school",
                detail: "Sat 9am–12pm · ages 5–16",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
              },
              {
                title: "Sisters' space",
                detail: "Weekly halaqa Wednesdays",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
              },
              {
                title: "Open to all",
                detail: "Visitors always welcome",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 bg-white border border-ink/10 rounded-lg">
                <div className="flex-shrink-0 text-mosque mt-0.5">{item.icon}</div>
                <div>
                  <p className="text-lg font-semibold text-ink">{item.title}</p>
                  <p className="text-base text-muted mt-1">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Quick Navigation ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle geometric texture */}
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.03]">
          <Image src={geoTexture} alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <Container className="relative">
          <SectionHeading
            title="Explore the centre"
            subtitle="Everything you need in one place"
          />
          <QuickLinksGrid />
        </Container>
      </section>

      {/* ── Upcoming Events ── */}
      <section className="py-24 bg-white">
        <Container>
          <SectionHeading
            title="Events & activities"
            subtitle="What's on this week and beyond"
            action={
              <Link href="/events" className="inline-flex items-center min-h-11 text-lg font-semibold text-mosque underline underline-offset-4 decoration-2 hover:text-mosque-deep transition-colors duration-150">
                Full calendar →
              </Link>
            }
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Revert Stories ── */}
      <section className="py-24 bg-ivory">
        <Container>
          <SectionHeading
            title="Revert stories"
            subtitle="Journeys to Islam from members of our community"
          />
          <Link
            href="/reverts"
            className="group block bg-white border border-ink/10 rounded-lg overflow-hidden hover:border-gold/40 transition-colors duration-150 max-w-3xl mx-auto"
          >
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image
                src={revertPhoto}
                alt="Revert stories"
                fill
                sizes="(min-width: 1024px) 768px, 100vw"
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
            </div>
            <div className="p-8">
              <p className="text-sm font-semibold text-mosque mb-4">Revert stories</p>
              <blockquote className="text-[1.375rem] text-ink leading-snug mb-4">
                &ldquo;Whoever accepts Islam will have what came before forgiven.&rdquo;
              </blockquote>
              <p className="text-base text-muted mb-6 leading-relaxed">
                — Sahih Muslim 121 &nbsp;·&nbsp; The Prophet ﷺ assured us that embracing Islam wipes the slate clean.
                Every revert begins a new chapter — free from the past, filled with hope and purpose.
                Read the stories of those who found their way to Islam right here in Bournemouth.
              </p>
              <span className="inline-flex items-center gap-1.5 text-lg font-semibold text-mosque underline underline-offset-4 decoration-2 group-hover:text-mosque-deep transition-colors duration-150">
                Read their stories
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>
        </Container>
      </section>

      {/* ── Donation CTA ── */}
      <section className="py-24 bg-white">
        <Container>
          <DonationCTAStrip />
        </Container>
      </section>
    </>
  );
}
