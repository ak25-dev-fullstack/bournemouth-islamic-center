"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import latticeBg from "@/assets/donate-lattice.png";
import Container from "@/components/ui/Container";
import { jummahInfo } from "@/data/prayer-times";
import type { DayPrayerTimes } from "@/data/prayer-times-2026";

interface Props {
  allTimes: DayPrayerTimes[];
}

type IqamahSource =
  | { type: "csv" }
  | { type: "offset"; mins: number }
  | { type: "none" };

type PrayerKey = "fajr" | "sunrise" | "dhuhr" | "asr" | "maghrib" | "isha";

const PRAYER_ROWS: { key: PrayerKey; label: string; arabic: string; iqamah: IqamahSource }[] = [
  { key: "fajr",    label: "Fajr",    arabic: "الفجر",  iqamah: { type: "csv" } },
  { key: "sunrise", label: "Sunrise", arabic: "الشروق", iqamah: { type: "none" } },
  { key: "dhuhr",   label: "Dhuhr",   arabic: "الظهر",  iqamah: { type: "offset", mins: 15 } },
  { key: "asr",     label: "Asr",     arabic: "العصر",  iqamah: { type: "offset", mins: 15 } },
  { key: "maghrib", label: "Maghrib", arabic: "المغرب", iqamah: { type: "offset", mins: 5  } },
  { key: "isha",    label: "Isha",    arabic: "العشاء",  iqamah: { type: "offset", mins: 10 } },
];

const MOSQUE_TZ = "Europe/London";

function toMins(t: string): number {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function addMins(t: string, mins: number): string {
  const total = toMins(t) + mins;
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}

/** "05:37" → "5:37" — easier to read at a glance */
function displayTime(t: string): string {
  return t.replace(/^0(\d)/, "$1");
}

/** Current wall-clock time at the mosque, regardless of the visitor's own time zone */
function mosqueClock(now: Date) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: MOSQUE_TZ,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      weekday: "short",
      hourCycle: "h23",
    })
      .formatToParts(now)
      .map((p) => [p.type, p.value])
  );
  const dateStr = `${parts.year}-${parts.month}-${parts.day}`;
  const tomorrow = new Date(Date.UTC(+parts.year, +parts.month - 1, +parts.day + 1));
  return {
    dateStr,
    tomorrowStr: tomorrow.toISOString().slice(0, 10),
    secs: +parts.hour * 3600 + +parts.minute * 60 + +parts.second,
    isFriday: parts.weekday === "Fri",
    longDate: new Intl.DateTimeFormat("en-GB", {
      timeZone: MOSQUE_TZ,
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(now),
    clock: `${parts.hour}:${parts.minute}`,
  };
}

function splitDuration(secs: number) {
  const s = Math.max(0, secs);
  return {
    h: Math.floor(s / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-[clamp(3.25rem,13vw,6rem)] font-semibold leading-none tabular-nums tracking-tight">
        {String(value).padStart(2, "0")}
      </span>
      <span className="min-w-[5.5rem] sm:min-w-[7rem] rounded bg-white/15 px-3 py-1 text-base text-white">
        {label}
      </span>
    </div>
  );
}

function Colon() {
  return (
    <span aria-hidden="true" className="text-[clamp(2rem,7vw,3.5rem)] font-semibold leading-none text-white/85 pb-12 sm:pb-14">
      :
    </span>
  );
}

export default function PrayerTimesClient({ allTimes }: Props) {
  // null until mounted: the page is statically exported, so the server can't know "now"
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const tick = () => setNow(new Date());
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

  const clock = now ? mosqueClock(now) : null;
  const todayTimes = clock ? allTimes.find((d) => d.date === clock.dateStr) ?? null : null;

  const rows = PRAYER_ROWS.map((p) => {
    const adhan = todayTimes ? todayTimes[p.key] : null;
    let iqamah: string | null = null;
    if (todayTimes && adhan) {
      if (p.iqamah.type === "csv") iqamah = todayTimes.fajrIqamah;
      else if (p.iqamah.type === "offset") iqamah = addMins(adhan, p.iqamah.mins);
    }
    const label = clock?.isFriday && p.key === "dhuhr" ? "Jumu'ah" : p.label;
    return { key: p.key, label, arabic: p.arabic, adhan, iqamah };
  });

  // Next event: the next adhan, or the iqamah if the adhan has already been called
  let next: {
    key: PrayerKey;
    label: string;
    mode: "adhan" | "iqamah";
    secsLeft: number;
    tomorrow?: boolean;
  } | null = null;
  if (clock && todayTimes) {
    for (const row of rows) {
      if (row.key === "sunrise" || !row.adhan) continue;
      const a = toMins(row.adhan) * 60;
      const i = row.iqamah ? toMins(row.iqamah) * 60 : null;
      if (clock.secs < a) {
        next = { key: row.key, label: row.label, mode: "adhan", secsLeft: a - clock.secs };
        break;
      }
      if (i !== null && clock.secs < i) {
        next = { key: row.key, label: row.label, mode: "iqamah", secsLeft: i - clock.secs };
        break;
      }
    }
    if (!next) {
      const tomorrow = allTimes.find((d) => d.date === clock.tomorrowStr);
      if (tomorrow) {
        next = {
          key: "fajr",
          label: "Fajr",
          mode: "adhan",
          secsLeft: 24 * 3600 - clock.secs + toMins(tomorrow.fajr) * 60,
          tomorrow: true,
        };
      }
    }
  }
  const remaining = next ? splitDuration(next.secsLeft) : null;

  return (
    <section id="prayer-times" aria-labelledby="prayer-times-heading">
      {/* ── Top: date, title, countdown ── */}
      <div className="relative bg-mosque text-white overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0">
          <Image src={latticeBg} alt="" fill sizes="100vw" className="object-cover opacity-15" />
        </div>

        <Container className="relative">
          {/* Date bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 items-center gap-x-4 gap-y-1 py-4 border-b border-white/20 text-base min-h-[4.5rem]">
            <p className="col-span-1">{clock?.longDate ?? " "}</p>
            <p className="text-right sm:text-center text-xl font-semibold tabular-nums">
              {clock ? <><span className="sr-only">Time now: </span>{clock.clock}</> : " "}
            </p>
            <div className="col-span-2 sm:col-span-1 flex flex-wrap sm:flex-col justify-between sm:items-end gap-x-4 text-white/85">
              <p>{todayTimes?.hijri}</p>
              {todayTimes?.hijriArabic && (
                <p lang="ar" dir="rtl">{todayTimes.hijriArabic}</p>
              )}
            </div>
          </div>

          {/* Title */}
          <div className="text-center pt-10">
            <p className="text-lg text-white/85">Prayer times</p>
            <h2 id="prayer-times-heading" className="text-[clamp(1.625rem,4.5vw,2.5rem)] text-white mt-1">
              Bournemouth Islamic Centre &amp; Central Mosque
            </h2>
            <p className="text-base text-white/85 mt-2">4 St Stephen&apos;s Rd, Bournemouth, <span className="whitespace-nowrap">BH2 6JJ</span></p>
          </div>

          {/* Countdown */}
          <div className="text-center py-12 sm:py-16 min-h-[17rem]">
            {next && remaining ? (
              <>
                <p className="text-[clamp(1.375rem,3.5vw,2rem)] mb-6">
                  {next.mode === "iqamah" ? "Iqamah for " : "The prayer of "}
                  <strong className="font-semibold">{next.label}</strong>
                  {next.tomorrow ? " (tomorrow)" : ""} is in
                </p>
                <div className="flex items-start justify-center gap-2 sm:gap-4" aria-hidden="true">
                  <CountdownUnit value={remaining.h} label="Hours" />
                  <Colon />
                  <CountdownUnit value={remaining.m} label="Minutes" />
                  <Colon />
                  <CountdownUnit value={remaining.s} label="Seconds" />
                </div>
                <p className="sr-only">
                  {remaining.h} hours and {remaining.m} minutes
                </p>
              </>
            ) : clock && !todayTimes ? (
              <p className="text-xl max-w-xl mx-auto">
                Today&apos;s times aren&apos;t in our online timetable yet. Please download the
                timetable below or call the mosque on 01202 557 072.
              </p>
            ) : null}
          </div>
        </Container>

        {/* Zig-zag edge into the cards below */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-2"
          style={{
            backgroundImage:
              "linear-gradient(-45deg, #fff 6px, transparent 0), linear-gradient(45deg, #fff 6px, transparent 0)",
            backgroundSize: "12px 12px",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "left bottom",
          }}
        />
      </div>

      {/* ── Bottom: prayer cards ── */}
      <div className="bg-white pt-6 pb-14">
        <Container>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {rows.map((row) => {
              const isNext = next?.key === row.key;
              return (
                <li
                  key={row.key}
                  className={`relative rounded-lg px-3 py-5 sm:py-6 text-center ${
                    isNext ? "bg-mosque text-white" : "bg-surface text-mosque-deep"
                  }`}
                  aria-current={isNext ? "time" : undefined}
                >
                  {isNext && (
                    <span className="absolute top-2 right-2 rounded bg-gold px-2 py-0.5 text-xs font-semibold text-ink">
                      Next
                    </span>
                  )}
                  <p className="text-lg sm:text-xl font-semibold">
                    {row.label}
                    <span lang="ar" className={`block text-base font-normal ${isNext ? "text-white/85" : "text-muted"}`}>
                      {row.arabic}
                    </span>
                  </p>
                  <p className="mt-1 text-[clamp(2.25rem,8vw,3.25rem)] font-semibold leading-tight tabular-nums">
                    {row.adhan ? displayTime(row.adhan) : "–:––"}
                  </p>
                  <p className={`mt-1 text-base sm:text-lg ${isNext ? "text-white" : "text-ink"}`}>
                    {row.iqamah ? (
                      <>
                        Iqamah <span className="font-semibold tabular-nums">{displayTime(row.iqamah)}</span>
                      </>
                    ) : (
                      <span className={isNext ? "text-white/85" : "text-muted"}>
                        {row.key === "sunrise" ? "No prayer" : " "}
                      </span>
                    )}
                  </p>
                </li>
              );
            })}
          </ul>

          {/* Jumuah bar — every week */}
          <div
            className={`mt-3 sm:mt-4 rounded-lg px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-6 ${
              clock?.isFriday ? "bg-gold/25 text-ink" : "bg-surface text-mosque-deep"
            }`}
          >
            <p className="text-xl font-semibold">
              Jumu&apos;ah <span className="font-normal text-ink">(every Friday)</span>
            </p>
            <dl className="flex flex-wrap gap-x-6 gap-y-1 text-lg text-ink">
              <div className="flex gap-2">
                <dt>English khutbah</dt>
                <dd className="font-semibold tabular-nums">{jummahInfo.khutbahEnglish}</dd>
              </div>
              <div className="flex gap-2">
                <dt>Arabic khutbah</dt>
                <dd className="font-semibold tabular-nums">{jummahInfo.khutbah}</dd>
              </div>
              <div className="flex gap-2">
                <dt>Prayer</dt>
                <dd className="font-semibold tabular-nums">{jummahInfo.prayer}</dd>
              </div>
            </dl>
          </div>

          {/* Download */}
          <div className="mt-6 flex justify-center">
            <a
              href="/bournemouth-islamic-center/prayer-times-2026.pdf"
              download
              className="inline-flex items-center justify-center gap-2 min-h-12 px-6 rounded text-lg font-semibold text-mosque border-2 border-mosque hover:bg-mosque hover:text-white transition-colors duration-150"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download timetable (PDF)
            </a>
          </div>
        </Container>
      </div>
    </section>
  );
}
