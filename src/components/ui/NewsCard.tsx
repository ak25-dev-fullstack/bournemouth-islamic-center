import Link from "next/link";
import Image from "next/image";
import { NewsPost } from "@/types";

interface NewsCardProps {
  post: NewsPost;
  featured?: boolean;
}

const categoryStyles: Record<NewsPost["category"], string> = {
  announcement: "bg-gold/10 text-copper",
  community: "bg-mosque/10 text-mosque",
  event: "bg-info/10 text-info",
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
      className={`bg-white border border-ink/8 rounded-lg overflow-hidden flex flex-col hover:border-gold/40 transition-colors duration-150 group ${
        featured ? "sm:flex-row" : ""
      } ${post.pinned ? "ring-1 ring-gold/30" : ""}`}
    >
      {post.image ? (
        <div className={`relative overflow-hidden flex-shrink-0 ${featured ? "sm:w-64 h-48 sm:h-auto" : "h-44"}`}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes={featured ? "(min-width: 640px) 256px, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
            className="object-cover object-center"
            loading="lazy"
          />
        </div>
      ) : (
        <div className={`bg-surface flex items-center justify-center flex-shrink-0 ${featured ? "sm:w-64 h-48 sm:h-auto" : "h-44"}`}>
          <svg className="w-10 h-10 text-gold/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          {post.pinned && (
            <span className="text-xs font-medium text-gold bg-gold/10 px-2 py-0.5 rounded">
              Pinned
            </span>
          )}
          <span className={`text-xs font-medium px-2 py-0.5 rounded ${categoryStyles[post.category]}`}>
            {categoryLabels[post.category]}
          </span>
        </div>

        <h3 className={`text-ink group-hover:text-gold transition-colors duration-150 leading-snug mb-3 ${featured ? "text-[24px]" : "text-[20px]"}`}>
          <Link href={`/news/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="text-sm text-muted leading-relaxed flex-grow">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-5 pt-4 border-t border-ink/8">
          <time className="text-xs text-muted" dateTime={post.date}>{formattedDate}</time>
          {post.author && <span className="text-xs text-muted">{post.author}</span>}
        </div>
      </div>
    </article>
  );
}
