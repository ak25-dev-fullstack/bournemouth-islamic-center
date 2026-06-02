import { NewsPost } from "@/types";
import insideImg from "@/assets/inside.jpg";
import istockImg from "@/assets/istockphoto-1999641401-612x612.jpg";
import outsideImg from "@/assets/outside.jpg";

export const newsPosts: NewsPost[] = [
  {
    id: "1",
    title: "Ramadan 2025: Iftar Programme & Prayer Schedule",
    slug: "ramadan-2025-programme",
    category: "announcement",
    excerpt:
      "Join us throughout the blessed month of Ramadan for nightly Tarawih prayers, community Iftars, and special Quran recitation sessions. Full schedule now available.",
    date: "2025-02-20",
    author: "BIC Admin",
    pinned: true,
    image: insideImg,
  },
  {
    id: "2",
    title: "New Islamic Education Classes for Adults – Enrol Now",
    slug: "adult-islamic-education-2025",
    category: "community",
    excerpt:
      "We are pleased to announce the launch of a new adult Islamic education programme covering Fiqh, Tajweed, and Arabic. Classes begin in April. Limited spaces available.",
    date: "2025-02-10",
    author: "Education Committee",
    image: istockImg,
  },
  {
    id: "3",
    title: "Mosque Expansion Project – Phase 2 Update",
    slug: "expansion-phase-2-update",
    category: "announcement",
    excerpt:
      "Alhamdulillah, Phase 1 of our expansion has been completed. We are now preparing for Phase 2, which will add a dedicated sisters' prayer hall and ablution facilities.",
    date: "2025-01-28",
    author: "BIC Committee",
    image: outsideImg,
  },
  {
    id: "4",
    title: "Community Eid ul-Fitr Celebration – Save the Date",
    slug: "eid-celebration-2025",
    category: "event",
    excerpt:
      "Plan ahead for our annual Eid ul-Fitr community celebration. This year we are hosting a family fun day following the Eid prayer with food, activities, and a charity bazaar.",
    date: "2025-01-15",
    author: "Events Team",
  },
  {
    id: "5",
    title: "Friday Khutbah Topics – Spring Series",
    slug: "khutbah-spring-series",
    category: "community",
    excerpt:
      "Our spring Jummah khutbah series explores the theme of 'Community, Responsibility, and Faith in Modern Britain'. All are welcome to attend.",
    date: "2025-01-08",
    author: "Imam's Office",
  },
  {
    id: "6",
    title: "Youth Club Winter Trip – Recap",
    slug: "youth-club-winter-trip",
    category: "community",
    excerpt:
      "Over 40 young people joined our youth club's winter trip to the New Forest. A wonderful day of team-building, reflection, and fun in the outdoors.",
    date: "2024-12-18",
    author: "Youth Team",
  },
];
