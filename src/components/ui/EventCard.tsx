import { Event } from "@/types";

interface EventCardProps {
  event: Event;
}

const audienceColors: Record<string, string> = {
  All: "bg-emerald-100 text-emerald-800",
  Adults: "bg-blue-100 text-blue-800",
  Sisters: "bg-purple-100 text-purple-800",
  "Ages 11–18": "bg-orange-100 text-orange-800",
};

export default function EventCard({ event }: EventCardProps) {
  const isRecurring = event.recurring;
  const audienceColor =
    audienceColors[event.audience] ?? "bg-stone-100 text-stone-700";

  return (
    <article className="bg-white rounded-xl border border-stone-200 p-5 hover:shadow-md transition-shadow flex gap-4">
      {/* Date block */}
      <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-emerald-700 text-white flex flex-col items-center justify-center text-center">
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
          <h3 className="font-semibold text-stone-800 text-sm leading-snug">
            {event.title}
          </h3>
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 ${audienceColor}`}
          >
            {event.audience}
          </span>
        </div>

        <p className="text-stone-500 text-xs leading-relaxed mb-2 line-clamp-2">
          {event.description}
        </p>

        <div className="flex flex-wrap items-center gap-3 text-xs text-stone-400">
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
            <span className="text-amber-600 font-medium">
              Registration required
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
