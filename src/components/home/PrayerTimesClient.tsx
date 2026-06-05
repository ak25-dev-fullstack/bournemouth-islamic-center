"use client";

import { useEffect, useState } from "react";
import { jummahInfo } from "@/data/prayer-times";
import type { DayPrayerTimes } from "@/data/prayer-times-2026";

interface Props {
  allTimes: DayPrayerTimes[];
}

type IqamahSource =
  | { type: "csv" }
  | { type: "offset"; mins: number }
  | { type: "none" };

const PRAYER_ROWS: { key: string; label: string; arabic: string; iqamah: IqamahSource }[] = [
  { key: "fajr",    label: "Fajr",    arabic: "الفجر",  iqamah: { type: "csv" } },
  { key: "sunrise", label: "Sunrise", arabic: "الشروق", iqamah: { type: "none" } },
  { key: "dhuhr",   label: "Dhuhr",   arabic: "الظهر",  iqamah: { type: "offset", mins: 15 } },
  { key: "asr",     label: "Asr",     arabic: "العصر",  iqamah: { type: "offset", mins: 15 } },
  { key: "maghrib", label: "Maghrib", arabic: "المغرب", iqamah: { type: "offset", mins: 5  } },
  { key: "isha",    label: "Isha",    arabic: "العشاء",  iqamah: { type: "offset", mins: 10 } },
];

function toMins(t: string): number {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function addMins(t: string, mins: number): string {
  const total = toMins(t) + mins;
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}

function formatDuration(secs: number): string {
  if (secs <= 0) return "0s";
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  if (h > 0) return `${h}h ${String(m).padStart(2, "0")}m ${String(s).padStart(2, "0")}s`;
  if (m > 0) return `${m}m ${String(s).padStart(2, "0")}s`;
  return `${s}s`;
}

export default function PrayerTimesClient({ allTimes }: Props) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const todayStr = now.toLocaleDateString("en-CA");
  const todayTimes = allTimes.find((d) => d.date === todayStr) ?? null;
  const isFriday = now.getDay() === 5;
  const nowSecs = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

  // Build display rows
  const rows = PRAYER_ROWS.map((p) => {
    const adhan = todayTimes
      ? (todayTimes[p.key as keyof DayPrayerTimes] as string)
      : "—";

    let iqamah: string | null = null;
    if (todayTimes && adhan !== "—") {
      if (p.iqamah.type === "csv") iqamah = todayTimes.fajrIqamah;
      else if (p.iqamah.type === "offset") iqamah = addMins(adhan, p.iqamah.mins);
    }

    const label = isFriday && p.key === "dhuhr" ? "Jumu'ah" : p.label;
    return { key: p.key, label, arabic: p.arabic, adhan, iqamah };
  });

  // Countdown logic (skip sunrise)
  const prayerRows = rows.filter((r) => r.key !== "sunrise" && r.adhan !== "—");

  let countdownLabel = "";
  let adhanSecs = 0;
  let iqamahSecs = 0;
  let showAdhan = false;
  let showIqamah = false;
  let betweenAdhanAndIqamah = false;

  for (const row of prayerRows) {
    const aTime = toMins(row.adhan) * 60;
    const iTime = row.iqamah ? toMins(row.iqamah) * 60 : null;

    if (nowSecs < aTime) {
      countdownLabel = row.label;
      adhanSecs = aTime - nowSecs;
      iqamahSecs = iTime ? iTime - nowSecs : 0;
      showAdhan = true;
      showIqamah = !!iTime;
      break;
    }
    if (iTime && nowSecs < iTime) {
      countdownLabel = row.label;
      iqamahSecs = iTime - nowSecs;
      showIqamah = true;
      betweenAdhanAndIqamah = true;
      break;
    }
  }

  // After all prayers — show tomorrow's Fajr
  if (!showAdhan && !showIqamah) {
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowTimes = allTimes.find(
      (d) => d.date === tomorrow.toLocaleDateString("en-CA")
    );
    if (tomorrowTimes) {
      countdownLabel = "Fajr (tomorrow)";
      const fajrA = toMins(tomorrowTimes.fajr) * 60;
      const fajrI = toMins(tomorrowTimes.fajrIqamah) * 60;
      const secsLeft = 24 * 3600 - nowSecs;
      adhanSecs = secsLeft + fajrA;
      iqamahSecs = secsLeft + fajrI;
      showAdhan = true;
      showIqamah = true;
    }
  }

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
          Bournemouth{todayTimes ? ` — ${todayTimes.hijri}` : ""}
        </p>
      </div>

      {/* Column labels */}
      <div className="flex items-center justify-between px-6 pt-3 pb-1">
        <span />
        <div className="flex gap-5">
          <span className="text-[10px] font-medium text-white/30 uppercase tracking-wide w-12 text-right">
            Adhan
          </span>
          <span className="text-[10px] font-medium text-gold/50 uppercase tracking-wide w-12 text-right">
            Iqamah
          </span>
        </div>
      </div>

      {/* Prayer rows */}
      <div className="divide-y divide-white/10">
        {rows.map((row) => (
          <div key={row.key} className="flex items-center justify-between px-6 py-3">
            <div className="flex items-center gap-2.5">
              <span className="text-sm text-white">{row.label}</span>
              <span className="text-xs text-white/40">{row.arabic}</span>
            </div>
            <div className="flex gap-5">
              <span className="text-sm font-medium text-white tabular-nums w-12 text-right">
                {row.adhan}
              </span>
              <span className="text-sm font-medium text-gold/80 tabular-nums w-12 text-right">
                {row.iqamah ?? "—"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Countdown */}
      {(showAdhan || showIqamah) && (
        <div className="px-6 py-6 border-t border-white/10 bg-white/5">
          <p className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
            {betweenAdhanAndIqamah
              ? `${countdownLabel} · Iqamah`
              : `Next · ${countdownLabel}`}
          </p>
          {showAdhan && (
            <div className="flex items-baseline justify-between mb-3">
              <span className="text-sm font-medium text-white/60">Adhan</span>
              <span className="text-[28px] font-semibold text-white tabular-nums leading-none">
                {formatDuration(adhanSecs)}
              </span>
            </div>
          )}
          {showIqamah && (
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium text-gold/80">Iqamah</span>
              <span className="text-[28px] font-semibold text-gold tabular-nums leading-none">
                {formatDuration(iqamahSecs)}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Jummah footer — Fridays only */}
      {isFriday && (
        <div className="px-6 py-4 border-t border-white/10">
          <p className="text-xs font-medium text-gold uppercase tracking-wider">
            Jumu&apos;ah · English {jummahInfo.khutbahEnglish} · Arabic {jummahInfo.khutbah} · Prayer {jummahInfo.prayer}
          </p>
        </div>
      )}
    </section>
  );
}
