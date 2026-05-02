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
      className={`bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm overflow-hidden hover:shadow-xl hover:bg-white/8 hover:-translate-y-0.5 transition-all duration-300 ${
        featured ? "flex flex-col lg:flex-row" : "flex flex-col"
      }`}
    >
      {/* YouTube embed */}
      <div
        className={`relative bg-stone-900 flex-shrink-0 ${
          featured ? "lg:w-2/5 aspect-video lg:aspect-auto" : "aspect-video"
        }`}
      >
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wide mb-1">
          Revert Story
        </p>
        <h3
          className={`font-bold text-white leading-snug mb-2 ${
            featured ? "text-xl" : "text-base"
          }`}
        >
          {video.title}
        </h3>
        <p className="text-sm font-medium text-stone-300 mb-2">{video.person}</p>
        <p className="text-stone-400 text-sm leading-relaxed flex-grow">
          {video.excerpt}
        </p>
        <time className="mt-4 text-xs text-stone-500 block" dateTime={video.date}>
          {formattedDate}
        </time>
      </div>
    </article>
  );
}
