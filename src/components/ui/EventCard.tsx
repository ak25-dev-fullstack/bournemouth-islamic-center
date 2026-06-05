import { Event } from "@/types";

interface EventCardProps {
  event: Event;
}

const audienceStyles: Record<string, string> = {
  All: "bg-mosque/10 text-mosque",
  Adults: "bg-info/10 text-info",
  Sisters: "bg-copper/10 text-copper",
  "Ages 11–18": "bg-gold/10 text-gold",
};

export default function EventCard({ event }: EventCardProps) {
  const isRecurring = event.recurring;
  const audienceStyle =
    audienceStyles[event.audience] ?? "bg-ink/5 text-muted";

  return (
    <article className="bg-white border border-ink/8 rounded-lg p-6 flex gap-5 hover:border-gold/40 transition-colors duration-150 group">
      {/* Date block */}
      <div className="flex-shrink-0 w-20 h-20 bg-gold/10 border border-gold/25 rounded flex flex-col items-center justify-center text-center">
        {isRecurring ? (
          <span className="text-xs font-medium text-copper leading-tight">
            {event.recurringLabel?.split(" ")[1] ?? "Weekly"}
          </span>
        ) : (
          <>
            <span className="text-xl font-medium text-ink leading-none">
              {new Date(event.date).getDate()}
            </span>
            <span className="text-xs text-muted">
              {new Date(event.date).toLocaleDateString("en-GB", { month: "short" })}
            </span>
          </>
        )}
      </div>

      {/* Content */}
      <div className="flex-grow min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="text-[18px] text-ink leading-snug group-hover:text-gold transition-colors duration-150">
            {event.title}
          </h3>
          <span className={`text-xs font-medium px-2 py-0.5 rounded flex-shrink-0 ${audienceStyle}`}>
            {event.audience}
          </span>
        </div>

        <p className="text-sm text-muted leading-relaxed mb-3 line-clamp-2">
          {event.description}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {event.time}{event.endTime ? `–${event.endTime}` : ""}
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {event.location}
          </span>
          {event.registrationRequired && (
            <span className="text-copper font-medium">Registration required</span>
          )}
        </div>
      </div>
    </article>
  );
}
