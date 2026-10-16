import { jummahInfo } from "@/data/prayer-times";

// What the mosque actually offers (confirmed by the site owner, Oct 2026).
// Used by the About page "Our services" grid. Don't add services here unless the mosque confirms them.
export type Service = {
  title: string;
  desc: string;
  href?: string;
  linkLabel?: string;
};

export const services: Service[] = [
  {
    title: "Prayer rooms, open 24/7",
    desc: "Separate prayer rooms for brothers and sisters, open 24 hours a day, 7 days a week.",
  },
  {
    title: "Jumu'ah (Friday prayer)",
    desc: `Every Friday · English khutbah ${jummahInfo.khutbahEnglish} · Arabic khutbah ${jummahInfo.khutbah} · Prayer ${jummahInfo.prayer}.`,
    href: "/#prayer-times",
    linkLabel: "See prayer times",
  },
  {
    title: "Madrasah for children",
    desc: "Islamic classes for children. Please contact the mosque for details.",
    href: "/contact",
    linkLabel: "Ask about the madrasah",
  },
  {
    title: "Nikah (marriage)",
    desc: "Islamic marriage ceremonies at the mosque. Please contact us to arrange.",
    href: "/contact",
    linkLabel: "Contact us",
  },
  {
    title: "Janazah (funeral) services",
    desc: "Funeral prayers and support for bereaved families. Please contact the mosque as soon as possible.",
    href: "/contact",
    linkLabel: "Contact us",
  },
  {
    title: "Reverts — take your shahadah",
    desc: "If you would like to embrace Islam, you can take your shahadah at the mosque. We are here to support you.",
    href: "/reverts",
    linkLabel: "Revert stories",
  },
];

// Who the mosque welcomes.
export const welcomeGroups = [
  "Brothers",
  "Sisters",
  "School trips",
  "Anyone interested in Islam",
];
