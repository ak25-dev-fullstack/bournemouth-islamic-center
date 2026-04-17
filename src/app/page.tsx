import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import NewsCard from "@/components/ui/NewsCard";
import EventCard from "@/components/ui/EventCard";
import VideoCard from "@/components/ui/VideoCard";
import ProjectCard from "@/components/ui/ProjectCard";
import PrayerTimesWidget from "@/components/ui/PrayerTimesWidget";
import QuickLinksGrid from "@/components/ui/QuickLinksGrid";
import { DonationCTAStrip } from "@/components/ui/DonatePanel";
import { newsPosts } from "@/data/news";
import { events } from "@/data/events";
import { revertVideos } from "@/data/videos";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Bournemouth Islamic Centre & Central Mosque",
  description:
    "Your home for worship, community, and learning in Bournemouth. Prayer times, events, news, and more.",
};

function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export default function HomePage() {
  const latestNews = newsPosts.slice(0, 3);
  const upcomingEvents = events.slice(0, 3);
  const featuredVideo = revertVideos.find((v) => v.featured) ?? revertVideos[0];
  const activeProjects = projects.filter((p) => p.status !== "completed").slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <Container className="relative py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-emerald-300 text-sm font-semibold uppercase tracking-widest mb-3">
              Welcome to
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Bournemouth Islamic Centre
              <span className="block text-emerald-300 text-3xl sm:text-4xl mt-1">
                &amp; Central Mosque
              </span>
            </h1>
            <p className="text-emerald-100 text-lg leading-relaxed mb-8 max-w-xl">
              A welcoming home for worship, community, and learning in the heart
              of Bournemouth. All are welcome.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#prayer-times"
                className="px-5 py-2.5 rounded-full bg-white text-emerald-800 font-semibold text-sm hover:bg-emerald-50 transition-colors"
              >
                Prayer Times
              </Link>
              <Link
                href="/donate"
                className="px-5 py-2.5 rounded-full bg-amber-500 text-white font-semibold text-sm hover:bg-amber-600 transition-colors"
              >
                Donate
              </Link>
              <Link
                href="/events"
                className="px-5 py-2.5 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Events
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Today at the Mosque ── */}
      <section className="py-12 bg-white border-b border-stone-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <PrayerTimesWidget />
            </div>
            <div className="lg:col-span-2 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-stone-800 mb-2">
                Today at the Mosque
              </h2>
              <p className="text-stone-500 text-sm mb-6">
                Bournemouth Islamic Centre is open daily for all five daily
                prayers. Our doors are open to all Muslims and those who wish to
                learn more about Islam.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Jummah Prayer",
                    detail: "Every Friday at 1:30pm. Khutbah from 1:00pm.",
                    icon: "🕌",
                  },
                  {
                    title: "Weekend School",
                    detail: "Saturdays 9am–12pm for children aged 5–16.",
                    icon: "📚",
                  },
                  {
                    title: "Sisters' Space",
                    detail:
                      "Dedicated prayer area and weekly halaqa on Wednesdays.",
                    icon: "🌸",
                  },
                  {
                    title: "Open to All",
                    detail:
                      "Visitors, new Muslims, and those curious about Islam always welcome.",
                    icon: "🤝",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3 p-4 rounded-xl bg-stone-50 border border-stone-100"
                  >
                    <span className="text-xl" aria-hidden="true">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-stone-800">
                        {item.title}
                      </p>
                      <p className="text-xs text-stone-500 mt-0.5">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Quick Navigation ── */}
      <section className="py-12">
        <Container>
          <SectionHeading
            title="Explore the Centre"
            subtitle="Everything you need in one place"
          />
          <QuickLinksGrid />
        </Container>
      </section>

      {/* ── Latest News ── */}
      <section className="py-12 bg-white border-y border-stone-100">
        <Container>
          <SectionHeading
            title="Latest News"
            subtitle="Announcements and community updates"
            action={
              <Link
                href="/news"
                className="text-sm font-semibold text-emerald-700 hover:text-emerald-900 transition-colors"
              >
                All news &rarr;
              </Link>
            }
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {latestNews.map((post) => (
              <NewsCard key={post.id} post={post} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Upcoming Events ── */}
      <section className="py-12">
        <Container>
          <SectionHeading
            title="Events &amp; Activities"
            subtitle="What's on this week and beyond"
            action={
              <Link
                href="/events"
                className="text-sm font-semibold text-emerald-700 hover:text-emerald-900 transition-colors"
              >
                Full calendar &rarr;
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

      {/* ── Featured Revert Video ── */}
      <section className="py-12 bg-stone-100 border-y border-stone-200">
        <Container>
          <SectionHeading
            title="Revert Stories"
            subtitle="Journeys to Islam from members of our community"
            action={
              <Link
                href="/reverts"
                className="text-sm font-semibold text-emerald-700 hover:text-emerald-900 transition-colors"
              >
                More stories &rarr;
              </Link>
            }
          />
          <VideoCard video={featuredVideo} featured />
        </Container>
      </section>

      {/* ── Current Projects ── */}
      <section className="py-12 bg-white border-b border-stone-100">
        <Container>
          <SectionHeading
            title="Current Projects"
            subtitle="Help us build a better centre for the community"
            action={
              <Link
                href="/projects"
                className="text-sm font-semibold text-emerald-700 hover:text-emerald-900 transition-colors"
              >
                All projects &rarr;
              </Link>
            }
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activeProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Donation CTA ── */}
      <section className="py-12">
        <Container>
          <DonationCTAStrip />
        </Container>
      </section>
    </>
  );
}
