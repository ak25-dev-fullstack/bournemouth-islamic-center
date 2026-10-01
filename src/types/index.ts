import type { StaticImageData } from "next/image";

export interface Notice {
  id: string;
  title: string;
  message: string;
  /** ISO date the notice was posted, e.g. "2026-10-01" */
  date: string;
  /** Optional link for more details */
  link?: { label: string; href: string };
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  endTime?: string;
  audience: string;
  location: string;
  recurring?: boolean;
  recurringLabel?: string;
  registrationRequired?: boolean;
  category: "weekly" | "special" | "youth" | "sisters" | "past";
  youtubeId?: string;
}

export interface RevertVideo {
  id: string;
  title: string;
  person: string;
  excerpt: string;
  youtubeId: string;
  image?: StaticImageData;
  date: string;
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  status: "active" | "completed" | "planning";
  fundingGoal?: number;
  fundingRaised?: number;
  image?: StaticImageData;
  cta?: string;
  completed?: boolean;
  completedYear?: string;
}

export interface DonationOption {
  id: string;
  label: string;
  description: string;
  accountName: string;
  sortCode: string;
  accountNumber: string;
  reference?: string;
}

export interface PrayerTime {
  name: string;
  arabic: string;
  time: string;
  iqamah?: string;
}
