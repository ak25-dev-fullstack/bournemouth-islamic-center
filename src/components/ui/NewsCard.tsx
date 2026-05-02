import Link from "next/link";
import { NewsPost } from "@/types";

interface NewsCardProps {
  post: NewsPost;
  featured?: boolean;
}

const categoryColors: Record<NewsPost["category"], string> = {
  announcement: "bg-amber-100 text-amber-800",
  community: "bg-emerald-100 text-emerald-800",
  event: "bg-blue-100 text-blue-800",
};

const categoryLabels: Record<NewsPost["category"], string> = {
  announcement: "Announcement",
  community: "Community",
  event: "Event",
};

export default function NewsCard({ post, featured = false }: NewsCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article
      className={`bg-white rounded-3xl border border-stone-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group ${
        post.pinned ? "ring-2 ring-amber-400" : ""
      } ${featured ? "flex flex-col sm:flex-row" : "flex flex-col"}`}
    >
      {/* Placeholder image area */}
      <div
        className={`bg-gradient-to-br from-emerald-50 to-stone-100 flex items-center justify-center flex-shrink-0 ${
          featured ? "sm:w-64 h-48 sm:h-auto" : "h-44"
        }`}
      >
        <svg
          className="w-12 h-12 text-emerald-200"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2C9 2 6.5 4.5 6.5 7.5c0 1.8.9 3.4 2.2 4.4L12 22l3.3-10.1c1.3-1 2.2-2.6 2.2-4.4C17.5 4.5 15 2 12 2z" />
        </svg>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          {post.pinned && (
            <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
              Pinned
            </span>
          )}
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full ${
              categoryColors[post.category]
            }`}
          >
            {categoryLabels[post.category]}
          </span>
        </div>

        <h3
          className={`font-bold text-stone-800 group-hover:text-emerald-700 transition-colors leading-snug mb-2 ${
            featured ? "text-xl" : "text-base"
          }`}
        >
          <Link href={`/news/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="text-stone-500 text-sm leading-relaxed flex-grow">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-stone-100">
          <time className="text-xs text-stone-400" dateTime={post.date}>
            {formattedDate}
          </time>
          {post.author && (
            <span className="text-xs text-stone-400">{post.author}</span>
          )}
        </div>
      </div>
    </article>
  );
}
