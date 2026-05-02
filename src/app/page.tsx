import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import logoTransparent from "@/assets/Logo_transparent.png";
import heroBg from "@/assets/background.png";
import bluecoolImg from "@/assets/bluecool.webp";
import abstractImg from "@/assets/islamic-design-greeting-card-background_1024307-3446.avif";
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
      <section className="relative text-white overflow-hidden min-h-[88vh] flex items-center">
        {/* Background mosque photo */}
        <Image
          src={heroBg}
          alt=""
          aria-hidden="true"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Main dark gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/25"
        />

        <Container className="relative py-24 w-full">
          <div className="max-w-2xl">
            <Image
              src={logoTransparent}
              alt="Bournemouth Islamic Centre"
              width={200}
              height={100}
              className="mb-7 brightness-0 invert opacity-90"
            />
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Welcome to
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-5 tracking-tight">
              Bournemouth Islamic Centre &amp; Central Mosque
            </h1>
            <p className="text-stone-300 text-lg leading-relaxed mb-10 max-w-lg">
              A welcoming home for worship, community, and learning in the heart
              of Bournemouth. All are welcome.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#prayer-times"
                className="px-6 py-3 rounded-full bg-white text-emerald-900 font-bold text-sm hover:bg-emerald-50 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                Prayer Times
              </Link>
              <Link
                href="/donate"
                className="px-6 py-3 rounded-full bg-amber-500 text-white font-bold text-sm hover:bg-amber-400 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                Donate
              </Link>
              <Link
                href="/events"
                className="px-6 py-3 rounded-full border border-white/40 text-white font-bold text-sm hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              >
                Events
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Prayer Times ── */}
      <section className="relative py-16 overflow-hidden">
        {/* Dark gradient background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-stone-950 via-emerald-950 to-stone-950"
        />
        {/* Abstract pattern texture */}
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.06]">
          <Image src={abstractImg} alt="" fill sizes="100vw" className="object-cover" />
        </div>
        {/* Glow orbs */}
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"
        />
        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <PrayerTimesWidget />
            </div>
            <div className="lg:col-span-2 flex flex-col justify-center text-white">
              <h2 className="text-3xl font-bold mb-2">Today at the Mosque</h2>
              <p className="text-stone-400 text-sm mb-8">
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
                    className="flex gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-200"
                  >
                    <span className="text-2xl flex-shrink-0" aria-hidden="true">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="text-xs text-stone-400 mt-0.5">
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
      <section className="py-16 bg-stone-50">
        <Container>
          <SectionHeading
            title="Explore the Centre"
            subtitle="Everything you need in one place"
          />
          <QuickLinksGrid />
        </Container>
      </section>

      {/* ── Latest News ── */}
      <section className="relative py-16 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-stone-950" />
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.12]">
          <Image src={bluecoolImg} alt="" fill sizes="100vw" className="object-cover object-center" />
        </div>
        <div aria-hidden="true" className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/8 blur-3xl pointer-events-none" />
        <div aria-hidden="true" className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-emerald-600/8 blur-3xl pointer-events-none" />
        <Container className="relative">
          <SectionHeading
            title="Latest News"
            subtitle="Announcements and community updates"
            light
            action={
              <Link
                href="/news"
                className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
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
      <section className="relative py-16 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-stone-900 to-stone-950"
        />
        <div
          aria-hidden="true"
          className="absolute -top-24 right-0 w-80 h-80 rounded-full bg-emerald-700/20 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"
        />
        <Container className="relative">
          <SectionHeading
            title="Events & Activities"
            subtitle="What's on this week and beyond"
            action={
              <Link
                href="/events"
                className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Full calendar &rarr;
              </Link>
            }
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Featured Revert Video ── */}
      <section className="py-16 bg-stone-100">
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
      <section className="relative py-16 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-emerald-950"
        />
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.06]">
          <Image src={abstractImg} alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-amber-400/15 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-emerald-600/20 blur-3xl pointer-events-none"
        />
        <Container className="relative">
          <SectionHeading
            title="Current Projects"
            subtitle="Help us build a better centre for the community"
            action={
              <Link
                href="/projects"
                className="text-sm font-semibold text-emerald-300 hover:text-white transition-colors"
              >
                All projects &rarr;
              </Link>
            }
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Donation CTA ── */}
      <section className="py-16 bg-white">
        <Container>
          <DonationCTAStrip />
        </Container>
      </section>
    </>
  );
}
