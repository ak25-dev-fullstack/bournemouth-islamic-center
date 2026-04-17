import { prayerTimes, jummahInfo } from "@/data/prayer-times";

export default function PrayerTimesWidget() {
  return (
    <section
      id="prayer-times"
      className="bg-emerald-800 text-white rounded-2xl overflow-hidden"
      aria-labelledby="prayer-times-heading"
    >
      <div className="px-6 pt-6 pb-4 border-b border-emerald-700">
        <h2
          id="prayer-times-heading"
          className="text-lg font-bold text-white"
        >
          Today&apos;s Prayer Times
        </h2>
        <p className="text-emerald-300 text-xs mt-0.5">
          Bournemouth — updated daily
        </p>
      </div>

      <div className="divide-y divide-emerald-700">
        {prayerTimes.map((prayer) => (
          <div
            key={prayer.name}
            className="flex items-center justify-between px-6 py-3"
          >
            <div>
              <span className="text-sm font-medium text-white">
                {prayer.name}
              </span>
              <span className="text-emerald-400 text-xs ml-2">
                {prayer.arabic}
              </span>
            </div>
            <div className="text-right">
              <span className="text-sm font-semibold text-white">
                {prayer.time}
              </span>
              {prayer.iqamah && (
                <span className="block text-xs text-emerald-300">
                  Iqamah {prayer.iqamah}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Jummah info */}
      <div className="px-6 py-4 bg-amber-600/20 border-t border-emerald-700">
        <p className="text-xs font-semibold text-amber-300 uppercase tracking-wide mb-1.5">
          Jummah (Friday Prayer)
        </p>
        <div className="flex flex-col gap-1 text-sm text-white">
          <span>Khutbah: {jummahInfo.khutbah}</span>
          <span>Prayer: {jummahInfo.prayer}</span>
        </div>
        <p className="mt-2 text-xs text-emerald-300">{jummahInfo.note}</p>
      </div>
    </section>
  );
}
