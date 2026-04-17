"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import NewsCard from "@/components/ui/NewsCard";
import { newsPosts } from "@/data/news";
import type { NewsPost } from "@/types";

type FilterCategory = "all" | NewsPost["category"];

const filters: { label: string; value: FilterCategory }[] = [
  { label: "All", value: "all" },
  { label: "Announcements", value: "announcement" },
  { label: "Community", value: "community" },
  { label: "Events", value: "event" },
];

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const pinnedPost = newsPosts.find((p) => p.pinned);
  const filteredPosts = newsPosts.filter((p) => {
    if (activeFilter === "all") return true;
    return p.category === activeFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeading
        title="News &amp; Announcements"
        subtitle="Stay up to date with the latest from Bournemouth Islamic Centre"
      />

      {/* Pinned announcement */}
      {pinnedPost && activeFilter === "all" && (
        <div className="mb-10">
          <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-3">
            Pinned Announcement
          </p>
          <NewsCard post={pinnedPost} featured />
        </div>
      )}

      {/* Filter chips */}
      <div
        className="flex flex-wrap gap-2 mb-8"
        role="group"
        aria-label="Filter news by category"
      >
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
              activeFilter === f.value
                ? "bg-emerald-700 text-white border-emerald-700"
                : "bg-white text-stone-600 border-stone-200 hover:border-emerald-300 hover:text-emerald-700"
            }`}
            aria-pressed={activeFilter === f.value}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Post grid */}
      {filteredPosts.length === 0 ? (
        <p className="text-stone-400 text-sm py-10 text-center">
          No posts in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPosts.map((post) => (
            <NewsCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
