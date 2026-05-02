import { Event } from "@/types";

interface EventCardProps {
  event: Event;
}

const audienceColors: Record<string, string> = {
  All: "bg-emerald-900/40 text-emerald-300 border border-emerald-700/30",
  Adults: "bg-blue-900/40 text-blue-300 border border-blue-700/30",
  Sisters: "bg-purple-900/40 text-purple-300 border border-purple-700/30",
  "Ages 11–18": "bg-orange-900/40 text-orange-300 border border-orange-700/30",
};

export default function EventCard({ event }: EventCardProps) {
  const isRecurring = event.recurring;
  const audienceColor =
    audienceColors[event.audience] ?? "bg-stone-800/60 text-stone-300 border border-stone-700/30";

  return (
    <article className="bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm p-5 hover:shadow-xl hover:bg-white/8 hover:-translate-y-0.5 transition-all duration-300 flex gap-4">
      {/* Date block */}
      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-emerald-700 text-white flex flex-col items-center justify-center text-center">
        {isRecurring ? (
          <span className="text-xs font-semibold leading-tight px-1 text-center">
            {event.recurringLabel?.split(" ")[1] ?? "Weekly"}
          </span>
        ) : (
          <>
            <span className="text-lg font-bold leading-none">
              {new Date(event.date).getDate()}
            </span>
            <span className="text-xs font-medium">
              {new Date(event.date).toLocaleDateString("en-GB", {
                month: "short",
              })}
            </span>
          </>
        )}
      </div>

      {/* Content */}
      <div className="flex-grow min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-white text-sm leading-snug">
            {event.title}
          </h3>
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 ${audienceColor}`}
          >
            {event.audience}
          </span>
        </div>

        <p className="text-stone-400 text-xs leading-relaxed mb-2 line-clamp-2">
          {event.description}
        </p>

        <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500">
          <span className="flex items-center gap-1">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {event.time}
            {event.endTime ? `–${event.endTime}` : ""}
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {event.location}
          </span>
          {event.registrationRequired && (
            <span className="text-amber-400 font-medium">
              Registration required
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
