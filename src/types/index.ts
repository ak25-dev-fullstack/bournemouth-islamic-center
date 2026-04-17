export interface NewsPost {
  id: string;
  title: string;
  slug: string;
  category: "announcement" | "community" | "event";
  excerpt: string;
  date: string;
  author?: string;
  image?: string;
  pinned?: boolean;
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
  category: "weekly" | "special" | "youth" | "sisters";
}

export interface RevertVideo {
  id: string;
  title: string;
  person: string;
  excerpt: string;
  youtubeId: string;
  thumbnail?: string;
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
  image?: string;
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
