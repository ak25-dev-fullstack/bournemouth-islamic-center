import type { Notice } from "@/types";

// Urgent notices shown in a banner at the top of the home page.
// The banner only appears while this list has entries — remove a notice once it's no longer relevant.
//
// Example:
// {
//   id: "car-park-closed",
//   title: "Car park closed this Friday",
//   message: "Due to resurfacing works the car park will be closed for Jumu'ah. Please use street parking on St Stephen's Rd.",
//   date: "2026-10-01",
//   link: { label: "Visiting information", href: "/contact" },
// },
export const notices: Notice[] = [];
