import Image from "next/image";
import { RevertVideo } from "@/types";

interface VideoCardProps {
  video: RevertVideo;
  featured?: boolean;
}

export default function VideoCard({ video, featured = false }: VideoCardProps) {
  const formattedDate = new Date(video.date).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });

  return (
    <article
      className={`bg-white border border-ink/8 rounded-lg overflow-hidden hover:border-gold/40 transition-colors duration-150 group ${
        featured ? "flex flex-col lg:flex-row" : "flex flex-col"
      }`}
    >
      {/* Media */}
      {video.image ? (
        <div className={`relative overflow-hidden flex-shrink-0 ${featured ? "lg:w-2/5 aspect-[4/3] lg:aspect-auto" : "aspect-video"}`}>
          <Image
            src={video.image}
            alt={`${video.person} — revert story`}
            fill
            sizes={featured ? "(min-width: 1024px) 40vw, 100vw" : "(min-width: 640px) 50vw, 100vw"}
            className="object-cover object-top"
            loading="lazy"
          />
        </div>
      ) : (
        <div className={`relative bg-surface flex-shrink-0 ${featured ? "lg:w-2/5 aspect-video lg:aspect-auto" : "aspect-video"}`}>
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-xs font-medium text-gold uppercase tracking-wider mb-2">
          Revert story
        </p>
        <h3 className={`text-ink leading-snug mb-2 group-hover:text-gold transition-colors duration-150 ${featured ? "text-[28px]" : "text-[20px]"}`}>
          {video.title}
        </h3>
        <p className="text-sm font-medium text-muted mb-3">{video.person}</p>
        <p className="text-sm text-muted leading-relaxed flex-grow">
          {video.excerpt}
        </p>
        <time className="mt-5 text-xs text-muted block" dateTime={video.date}>
          {formattedDate}
        </time>
      </div>
    </article>
  );
}
