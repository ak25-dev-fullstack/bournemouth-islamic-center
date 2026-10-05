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
    <div className="flex flex-col items-center gap-1 sm:gap-2">
      <span className="text-[clamp(2.75rem,11vw,5rem)] font-medium leading-none tabular-nums tracking-tight">
        {String(value).padStart(2, "0")}
      </span>
      <span className="min-w-[4.5rem] sm:min-w-[7rem] rounded-sm bg-white/10 px-2 sm:px-3 sm:py-0.5 text-xs sm:text-base text-white/90">
        {label}
      </span>
    </div>
  );
}

function Colon() {
  return (
    <span aria-hidden="true" className="text-[clamp(1.75rem,6vw,3rem)] font-light leading-none text-white/85">
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
    <section id="prayer-times" aria-labelledby="prayer-times-heading" className="flex flex-col min-h-svh">
      {/* ── Top: date, title, countdown ── */}
      <div className="relative flex-1 flex flex-col bg-mosque text-white overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0">
          <Image src={latticeBg} alt="" fill sizes="100vw" className="object-cover opacity-15" />
        </div>

        <Container className="relative w-full flex-1 flex flex-col">
          {/* Date bar */}
          <div className="flex flex-wrap justify-between sm:grid sm:grid-cols-3 items-center gap-x-4 gap-y-0.5 py-2 sm:py-4 border-b border-white/15 text-xs sm:text-base text-white/90 min-h-[3.25rem] sm:min-h-[4.5rem]">
            <p className="col-span-1">{clock?.longDate ?? " "}</p>
            <p className="text-right sm:text-center text-lg sm:text-xl font-medium text-white tabular-nums">
              {clock ? <><span className="sr-only">Time now: </span>{clock.clock}</> : " "}
            </p>
            <div className="w-full sm:w-auto sm:col-span-1 flex flex-wrap sm:flex-col justify-between sm:items-end gap-x-3 text-white/85">
              <p>{todayTimes?.hijri}</p>
              {todayTimes?.hijriArabic && (
                <p lang="ar" dir="rtl" className="ml-auto sm:ml-0">{todayTimes.hijriArabic}</p>
              )}
            </div>
          </div>

          {/* Title */}
          <div className="text-center pt-3 sm:pt-10">
            <p className="text-lg text-white/85">Prayer times</p>
            {/* Phones: mosque name is already in the hero just above — keep it for screen readers only */}
            <h2 id="prayer-times-heading" className="sr-only sm:not-sr-only sm:block text-[clamp(1.625rem,4.5vw,2.5rem)] text-white mt-1">
              Bournemouth Islamic Centre &amp; Central Mosque
            </h2>
            <p className="hidden sm:block text-base text-white/85 mt-2">4 St Stephen&apos;s Rd, Bournemouth, <span className="whitespace-nowrap">BH2 6JJ</span></p>
          </div>

          {/* Countdown */}
          <div className="flex-1 flex flex-col justify-center text-center pt-8 pb-10 sm:py-16 min-h-[8.5rem] sm:min-h-[17rem]">
            {next && remaining ? (
              <>
                <p className="text-xl sm:text-[clamp(1.375rem,3.5vw,2rem)] text-white/90 mb-2 sm:mb-5">
                  {next.mode === "iqamah" ? "Iqamah for " : "The prayer of "}
                  <strong className="font-semibold text-gold-light">{next.label}</strong>
                  {next.tomorrow ? " (tomorrow)" : ""} is in
                </p>
                <div className="flex items-start justify-center gap-1.5 sm:gap-4" aria-hidden="true">
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
      <div className="bg-white pt-5 sm:pt-6 pb-6 sm:pb-14">
        <Container>
          <ul className="grid grid-cols-3 gap-x-2 gap-y-3.5 sm:gap-3">
            {rows.map((row) => {
              const isNext = next?.key === row.key;
              return (
                <li
                  key={row.key}
                  className={`relative rounded px-1 sm:px-3 py-2.5 sm:py-5 text-center ${
                    isNext ? "bg-mosque text-white" : "bg-ivory text-mosque ring-1 ring-inset ring-surface"
                  }`}
                  aria-current={isNext ? "time" : undefined}
                >
                  {isNext && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:top-2 sm:right-2 rounded bg-gold px-2 sm:py-0.5 text-xs leading-6 font-semibold text-ink">
                      Next
                    </span>
                  )}
                  <p className="text-base sm:text-xl font-medium">
                    {row.label}
                    <span lang="ar" className={`hidden sm:block text-base font-normal ${isNext ? "text-white/85" : "text-muted"}`}>
                      {row.arabic}
                    </span>
                  </p>
                  <p className="mt-0.5 sm:mt-1 text-[clamp(1.75rem,7.5vw,3.25rem)] font-medium leading-tight tabular-nums tracking-tight">
                    {row.adhan ? displayTime(row.adhan) : "–:––"}
                  </p>
                  <p className={`sm:mt-1 text-xs sm:text-lg leading-snug min-[380px]:whitespace-nowrap tracking-tight sm:tracking-normal ${isNext ? "text-white" : "text-ink"}`}>
                    {row.iqamah ? (
                      <>
                        <span className={`block min-[380px]:inline ${isNext ? "text-white/85" : "text-muted"}`}>Iqamah</span>{" "}
                        <span className="font-medium tabular-nums">{displayTime(row.iqamah)}</span>
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
            className={`mt-2 sm:mt-3 rounded px-3 sm:px-5 py-2 sm:py-3 grid grid-cols-[auto_1fr] sm:flex sm:flex-wrap md:flex-nowrap items-center sm:justify-between gap-x-3 gap-y-1 sm:gap-x-6 ${
              clock?.isFriday ? "bg-gold/25 text-ink" : "bg-ivory text-mosque ring-1 ring-inset ring-surface"
            }`}
          >
            <p className="text-lg sm:text-xl font-medium leading-tight sm:whitespace-nowrap">
              Jumu&apos;ah{" "}
              <span className="block sm:inline text-xs sm:text-lg font-normal text-muted">Fridays</span>
            </p>
            <dl className="grid grid-cols-3 gap-1 text-center sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-1 sm:text-left text-lg text-ink">
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <dt className="text-xs sm:text-lg leading-snug text-muted">English<span className="hidden sm:inline"> khutbah</span></dt>
                <dd className="font-medium tabular-nums">{jummahInfo.khutbahEnglish}</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <dt className="text-xs sm:text-lg leading-snug text-muted">Arabic<span className="hidden sm:inline"> khutbah</span></dt>
                <dd className="font-medium tabular-nums">{jummahInfo.khutbah}</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <dt className="text-xs sm:text-lg leading-snug text-muted">Prayer</dt>
                <dd className="font-medium tabular-nums">{jummahInfo.prayer}</dd>
              </div>
            </dl>
          </div>

          {/* Download */}
          <div className="mt-3 sm:mt-6 flex justify-center">
            <a
              href="/bournemouth-islamic-center/prayer-times-2026.pdf"
              download
              className="inline-flex items-center justify-center gap-2 min-h-12 px-4 sm:px-6 rounded text-lg font-semibold text-mosque border-2 border-mosque hover:bg-mosque hover:text-white transition-colors duration-150"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download timetable<span className="hidden min-[380px]:inline"> (PDF)</span></span>
            </a>
          </div>
        </Container>
      </div>
    </section>
  );
}
