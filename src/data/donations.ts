import { DonationOption } from "@/types";

export const donationOptions: DonationOption[] = [
  {
    id: "general",
    label: "General Fund",
    description:
      "Supports the day-to-day running of the mosque — utilities, maintenance, staff, and programmes.",
    accountName: "Bournemouth Islamic Centre",
    sortCode: "20-00-00",
    accountNumber: "12345678",
    reference: "GENERAL",
  },
  {
    id: "sadaqah",
    label: "Sadaqah",
    description:
      "Voluntary charity used for community welfare, hardship relief, and outreach work.",
    accountName: "Bournemouth Islamic Centre",
    sortCode: "20-00-00",
    accountNumber: "12345678",
    reference: "SADAQAH",
  },
  {
    id: "zakat",
    label: "Zakat",
    description:
      "We distribute Zakat to eligible recipients in Bournemouth and further afield. Calculated and distributed with full transparency.",
    accountName: "Bournemouth Islamic Centre Zakat Fund",
    sortCode: "20-00-00",
    accountNumber: "87654321",
    reference: "ZAKAT",
  },
  {
    id: "sisters-hall",
    label: "Sisters' Prayer Hall",
    description:
      "Dedicated fund for the Sisters' Prayer Hall Extension project.",
    accountName: "Bournemouth Islamic Centre",
    sortCode: "20-00-00",
    accountNumber: "12345678",
    reference: "SISTERS-HALL",
  },
];
