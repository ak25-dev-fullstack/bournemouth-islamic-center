import fs from "fs";
import path from "path";

export type DayPrayerTimes = {
  date: string;
  hijri: string;
  hijriArabic: string;
  fajr: string;
  fajrIqamah: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
};

// The CSV stores afternoon prayers (Zuhr, Asr, Maghrib, Isha) in 12-hour PM format
// without an AM/PM marker, so we add 12 hours to get 24-hour time.
// Hours already at 12 (e.g. a winter Zuhr of 12:57) are left as-is.
function to24h(raw: string, isPm: boolean): string {
  const [h, m] = raw.trim().split(":").map(Number);
  const hour = isPm && h < 12 ? h + 12 : h;
  return `${String(hour).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

// CSV month spellings → display names. The timetable runs Shawwal 1447 → Rajab 1448.
const HIJRI_MONTHS: Record<string, { en: string; ar: string; year: number }> = {
  "Shaowal":    { en: "Shawwal",          ar: "شوال",          year: 1447 },
  "Thol Qu'da": { en: "Dhul Qa'dah",     ar: "ذو القعدة",     year: 1447 },
  "Thol Hijja": { en: "Dhul Hijjah",      ar: "ذو الحجة",      year: 1447 },
  "Muharram":   { en: "Muharram",         ar: "محرم",          year: 1448 },
  "Safar":      { en: "Safar",            ar: "صفر",           year: 1448 },
  "Rabi'a-1":   { en: "Rabi' al-Awwal",  ar: "ربيع الأول",    year: 1448 },
  "Rabi'a-2":   { en: "Rabi' al-Thani",  ar: "ربيع الآخر",    year: 1448 },
  "Jamada-1":   { en: "Jumada al-Ula",    ar: "جمادى الأولى",  year: 1448 },
  "Jamada-2":   { en: "Jumada al-Akhirah", ar: "جمادى الآخرة", year: 1448 },
  "Rajab":      { en: "Rajab",            ar: "رجب",           year: 1448 },
};

function parseCsv(): DayPrayerTimes[] {
  const csvPath = path.join(
    process.cwd(),
    "src/assets/prayer_times_apr_dec_2026.csv"
  );
  const lines = fs.readFileSync(csvPath, "utf-8").split("\n");
  const rows: DayPrayerTimes[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const cols = line.split(",");
    const [date, , , fajer, eqama, srise, zuher, aser, magrib, isha, hijriMonth, hijriDay] = cols;
    rows.push({
      date,
      ...formatHijri(hijriMonth, hijriDay),
      fajr:        to24h(fajer,  false),
      fajrIqamah:  to24h(eqama,  false),
      sunrise:     to24h(srise,  false),
      dhuhr:       to24h(zuher,  true),
      asr:         to24h(aser,   true),
      maghrib:     to24h(magrib, true),
      isha:        to24h(isha,   true),
    });
  }
  return rows;
}

function formatHijri(month: string, day: string) {
  const m = HIJRI_MONTHS[month.trim()];
  const d = Number(day);
  if (!m) return { hijri: `${d} ${month.trim()}`, hijriArabic: "" };
  return {
    hijri: `${d} ${m.en} ${m.year} AH`,
    hijriArabic: `${d} ${m.ar} ${m.year}`,
  };
}

const prayerTimes2026: DayPrayerTimes[] = parseCsv();

export function getTodaysPrayerTimes(): DayPrayerTimes | null {
  const today = new Date().toLocaleDateString("en-CA");
  return prayerTimes2026.find((d) => d.date === today) ?? null;
}

export function getAllPrayerTimes(): DayPrayerTimes[] {
  return prayerTimes2026;
}
