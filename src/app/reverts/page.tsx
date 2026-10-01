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

  return (
    <div className="bg-ivory min-h-screen">
      {/* Page header */}
      <div className="bg-white border-b border-ink/10 py-12">
        <Container>
          <p className="text-sm font-semibold text-mosque mb-3">Journeys to Islam</p>
          <h1 className="text-[clamp(2.25rem,6vw,3rem)] text-ink">Revert stories</h1>
          <p className="text-lg text-muted mt-3">Inspiring journeys to Islam from people in our community</p>
        </Container>
      </div>

      <Container className="py-16">
        {/* Disclaimer */}
        <div className="mb-10 px-5 py-4 rounded-lg border border-gold/30 bg-gold/5">
          <p className="text-sm text-muted leading-relaxed">
            <span className="font-medium text-ink">This is a new section</span> — we are just getting started and will be adding more stories over time. Check back soon.
          </p>
        </div>

        {/* Featured story */}
        {featured && (
          <div className="mb-12">
            <p className="text-sm font-semibold text-mosque mb-4">Featured story</p>
            <VideoCard video={featured} featured />
          </div>
        )}

        {/* Share your story CTA */}
        <div className="bg-ink text-white rounded-lg px-8 py-12 text-center">
          <p className="text-sm font-semibold text-gold-light mb-4">Share your journey</p>
          <h2 className="text-[clamp(1.875rem,5vw,2.25rem)] text-white mb-4">Share your story</h2>
          <p className="text-white/85 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Have you recently embraced Islam or are you considering it? We would love to hear your
            story. Your experience can inspire and support others on their own journey.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center min-h-12 px-7 rounded text-lg font-semibold bg-gold text-ink hover:opacity-90 transition-opacity duration-150"
          >
            Get in touch
          </Link>
        </div>
      </Container>
    </div>
  );
}
