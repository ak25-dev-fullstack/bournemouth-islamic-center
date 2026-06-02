import fs from "fs";
import path from "path";

export type DayPrayerTimes = {
  date: string;
  hijri: string;
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
function to24h(raw: string, isPm: boolean): string {
  const [h, m] = raw.trim().split(":").map(Number);
  const hour = isPm ? h + 12 : h;
  return `${String(hour).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

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
      hijri: `${hijriMonth} ${hijriDay}`,
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

const prayerTimes2026: DayPrayerTimes[] = parseCsv();

export function getTodaysPrayerTimes(): DayPrayerTimes | null {
  const today = new Date().toLocaleDateString("en-CA");
  return prayerTimes2026.find((d) => d.date === today) ?? null;
}
