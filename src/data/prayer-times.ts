import { PrayerTime } from "@/types";

// Placeholder prayer times – replace with an API (e.g. Aladhan) in production
export const prayerTimes: PrayerTime[] = [
  { name: "Fajr", arabic: "الفجر", time: "04:52", iqamah: "05:10" },
  { name: "Sunrise", arabic: "الشروق", time: "06:23" },
  { name: "Dhuhr", arabic: "الظهر", time: "13:05", iqamah: "13:30" },
  { name: "Asr", arabic: "العصر", time: "16:48", iqamah: "17:00" },
  { name: "Maghrib", arabic: "المغرب", time: "19:47", iqamah: "19:52" },
  { name: "Isha", arabic: "العشاء", time: "21:25", iqamah: "21:45" },
];

export const jummahInfo = {
  khutbah: "13:00",
  prayer: "13:30",
  note: "Please arrive by 12:45 to ensure a space.",
};
