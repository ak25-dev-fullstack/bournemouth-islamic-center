import { Event } from "@/types";

interface EventCardProps {
  event: Event;
}

const audienceStyles: Record<string, string> = {
  All: "bg-mosque/10 text-mosque",
  Adults: "bg-info/10 text-info",
  Sisters: "bg-copper/10 text-copper",
  "Ages 11–18": "bg-gold/15 text-copper",
};

export default function EventCard({ event }: EventCardProps) {
  const isRecurring = event.recurring;
  const audienceStyle =
    audienceStyles[event.audience] ?? "bg-ink/5 text-muted";

  return (
    <article className="bg-white border border-ink/10 rounded-lg p-5 sm:p-6 flex flex-col min-[480px]:flex-row gap-3 min-[480px]:gap-4 sm:gap-5">
      {/* Date block */}
      <div className="self-start flex-shrink-0 px-3 py-1 min-[480px]:py-0 min-[480px]:px-1.5 min-[480px]:min-w-16 min-[480px]:h-16 sm:min-w-20 sm:h-20 bg-gold/15 border border-gold/40 rounded flex min-[480px]:flex-col items-baseline min-[480px]:items-center justify-center gap-1.5 min-[480px]:gap-0 text-center">
        {isRecurring ? (
          <span className="text-xs font-semibold text-copper leading-tight px-1">
            {event.recurringLabel?.split(" ")[1] ?? "Weekly"}
          </span>
        ) : (
          <>
            <span className="text-2xl font-semibold text-ink leading-none">
              {new Date(event.date).getDate()}
            </span>
            <span className="text-xs text-ink">
              {new Date(event.date).toLocaleDateString("en-GB", { month: "short" })}
            </span>
          </>
        )}
      </div>

      {/* Content */}
      <div className="flex-grow min-w-0">
        <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded mb-2 ${audienceStyle}`}>
          {event.audience}
        </span>
        <h3 className="text-[1.25rem] text-ink leading-snug mb-2">
          {event.title}
        </h3>

        <p className="text-base text-muted leading-relaxed mb-3">
          {event.description}
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-5 gap-y-1.5 text-base text-ink">
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-mosque flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {event.time}{event.endTime ? `–${event.endTime}` : ""}
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-mosque flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {event.location}
          </span>
          {event.registrationRequired && (
            <span className="text-copper font-semibold">Registration required</span>
          )}
        </div>
      </div>
    </article>
  );
}
