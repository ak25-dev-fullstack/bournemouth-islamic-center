"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
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
  const filteredPosts = newsPosts.filter((p) =>
    activeFilter === "all" ? true : p.category === activeFilter
  );

  return (
    <div className="bg-ivory min-h-screen">
      {/* Page header */}
      <div className="bg-white border-b border-ink/8 py-12">
        <Container>
          <p className="text-xs font-medium text-gold uppercase tracking-wider mb-3">Updates</p>
          <h1 className="text-[48px] text-ink">News &amp; announcements</h1>
          <p className="text-sm text-muted mt-3">Stay up to date with the latest from Bournemouth Islamic Centre</p>
        </Container>
      </div>

      <Container className="py-16">
        {/* Pinned announcement */}
        {pinnedPost && activeFilter === "all" && (
          <div className="mb-10">
            <p className="text-xs font-medium text-gold uppercase tracking-wider mb-3">
              Pinned announcement
            </p>
            <NewsCard post={pinnedPost} featured />
          </div>
        )}

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter news by category">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-1.5 rounded text-sm font-medium transition-colors duration-150 border ${
                activeFilter === f.value
                  ? "bg-gold text-ink border-gold"
                  : "bg-white text-ink/70 border-ink/12 hover:border-gold/40 hover:text-ink"
              }`}
              aria-pressed={activeFilter === f.value}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Post grid */}
        {filteredPosts.length === 0 ? (
          <p className="text-muted text-sm py-10 text-center">No posts in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPosts.map((post) => (
              <NewsCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
