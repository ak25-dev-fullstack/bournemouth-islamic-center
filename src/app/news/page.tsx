"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import NewsCard from "@/components/ui/NewsCard";
import { newsPosts } from "@/data/news";
import type { NewsPost } from "@/types";
import bluecoolImg from "@/assets/bluecool.webp";

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
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0 bg-stone-950" />
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.12]">
        <Image src={bluecoolImg} alt="" fill sizes="100vw" className="object-cover object-center" />
      </div>
      <div aria-hidden="true" className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/6 blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-emerald-600/6 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeading
          title="News &amp; Announcements"
          subtitle="Stay up to date with the latest from Bournemouth Islamic Centre"
          light
        />

        {/* Pinned announcement */}
        {pinnedPost && activeFilter === "all" && (
          <div className="mb-10">
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-wide mb-3">
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
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeFilter === f.value
                  ? "bg-emerald-700 text-white border-emerald-700"
                  : "bg-white/5 text-stone-300 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20"
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
    </div>
  );
}
