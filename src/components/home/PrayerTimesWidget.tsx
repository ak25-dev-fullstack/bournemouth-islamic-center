import { jummahInfo } from "@/data/prayer-times";
import { getTodaysPrayerTimes } from "@/data/prayer-times-2026";

const prayers = [
  { key: "fajr",    label: "Fajr",    arabic: "الفجر"  },
  { key: "sunrise", label: "Sunrise", arabic: "الشروق" },
  { key: "dhuhr",   label: "Dhuhr",   arabic: "الظهر"  },
  { key: "asr",     label: "Asr",     arabic: "العصر"  },
  { key: "maghrib", label: "Maghrib", arabic: "المغرب" },
  { key: "isha",    label: "Isha",    arabic: "العشاء"  },
] as const;

export default function PrayerTimesWidget() {
  const today = getTodaysPrayerTimes();

  return (
    <section
      id="prayer-times"
      className="bg-mosque rounded-lg overflow-hidden"
      aria-labelledby="prayer-times-heading"
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-white/10">
        <h2 id="prayer-times-heading" className="text-[22px] text-white leading-tight">
          Today&apos;s prayer times
        </h2>
        <p className="text-sm text-white/55 mt-1">
          Bournemouth{today ? ` — ${today.hijri}` : ""}
        </p>
      </div>

      {/* Prayer rows */}
      <div className="divide-y divide-white/10">
        {prayers.map((p) => {
          const time = today ? today[p.key as keyof typeof today] as string : "—";
          return (
            <div key={p.key} className="flex items-center justify-between px-6 py-3.5">
              <div className="flex items-center gap-2.5">
                <span className="text-sm text-white">{p.label}</span>
                <span className="text-xs text-white/40">{p.arabic}</span>
              </div>
              <span className="text-sm font-medium text-white tabular-nums">{time}</span>
            </div>
          );
        })}
      </div>

      {/* Jummah footer */}
      <div className="px-6 py-4 border-t border-white/10">
        <p className="text-xs font-medium text-gold uppercase tracking-wider">
          Jummah · Khutbah {jummahInfo.khutbah} · Prayer {jummahInfo.prayer}
        </p>
      </div>
    </section>
  );
}
