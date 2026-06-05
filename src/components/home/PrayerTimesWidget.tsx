import { getAllPrayerTimes } from "@/data/prayer-times-2026";
import PrayerTimesClient from "./PrayerTimesClient";

export default function PrayerTimesWidget() {
  const allTimes = getAllPrayerTimes();
  return <PrayerTimesClient allTimes={allTimes} />;
}
