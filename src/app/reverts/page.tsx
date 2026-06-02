import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/ui/Container";
import VideoCard from "@/components/ui/VideoCard";

import { revertVideos } from "@/data/videos";

export const metadata: Metadata = {
  title: "Revert stories",
  description: "Watch and read the journeys of people who embraced Islam through Bournemouth Islamic Centre.",
};

export default function RevertsPage() {
  const featured = revertVideos.find((v) => v.featured);
  const rest = revertVideos.filter((v) => !v.featured);

  return (
    <div className="bg-ivory min-h-screen">
      {/* Page header */}
      <div className="bg-white border-b border-ink/8 py-12">
        <Container>
          <p className="text-xs font-medium text-gold uppercase tracking-wider mb-3">Journeys to Islam</p>
          <h1 className="text-[48px] text-ink">Revert stories</h1>
          <p className="text-sm text-muted mt-3">Inspiring journeys to Islam from people in our community</p>
        </Container>
      </div>

      <Container className="py-16">
        {/* Featured story */}
        {featured && (
          <div className="mb-12">
            <p className="text-xs font-medium text-gold uppercase tracking-wider mb-4">Featured story</p>
            <VideoCard video={featured} featured />
          </div>
        )}

        {/* Story grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {rest.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {/* Share your story CTA */}
        <div className="bg-ink text-white rounded-lg px-8 py-12 text-center">
          <p className="text-xs font-medium text-gold uppercase tracking-wider mb-4">Share your journey</p>
          <h2 className="text-[36px] text-white mb-4">Share your story</h2>
          <p className="text-white/55 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Have you recently embraced Islam or are you considering it? We would love to hear your
            story. Your experience can inspire and support others on their own journey.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-6 py-3 rounded text-sm font-medium bg-gold text-ink hover:opacity-88 transition-opacity duration-150"
          >
            Get in touch
          </Link>
        </div>
      </Container>
    </div>
  );
}
