import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoCard from "@/components/ui/VideoCard";
import { revertVideos } from "@/data/videos";

export const metadata: Metadata = {
  title: "Revert Stories",
  description:
    "Watch and read the journeys of people who embraced Islam through Bournemouth Islamic Centre.",
};

export default function RevertsPage() {
  const featured = revertVideos.find((v) => v.featured);
  const rest = revertVideos.filter((v) => !v.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeading
        title="Revert Stories"
        subtitle="Inspiring journeys to Islam from people in our community"
      />

      {/* Featured story */}
      {featured && (
        <div className="mb-12">
          <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-3">
            Featured Story
          </p>
          <VideoCard video={featured} featured />
        </div>
      )}

      {/* Story grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
        {rest.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      {/* Submit your story CTA */}
      <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-2xl p-10 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">Share Your Journey</h2>
        <p className="text-emerald-200 text-sm max-w-lg mx-auto mb-6">
          Have you recently embraced Islam or are you considering it? We would
          love to hear your story. Your experience can inspire and support
          others on their own journey.
        </p>
        <a
          href="/contact"
          className="inline-flex px-6 py-2.5 rounded-full bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}
