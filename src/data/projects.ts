import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Sisters' Prayer Hall Extension",
    summary:
      "Constructing a dedicated sisters' prayer hall with modern ablution facilities, improving capacity and comfort for our sisters' congregation.",
    status: "active",
    fundingGoal: 120000,
    fundingRaised: 87400,
    cta: "Support This Project",
  },
  {
    id: "2",
    title: "Islamic Education Centre",
    summary:
      "Developing a purpose-built education centre with classrooms for weekend school, adult learning, and after-school Quran classes.",
    status: "planning",
    fundingGoal: 200000,
    fundingRaised: 32000,
    cta: "Donate to This Project",
  },
  {
    id: "3",
    title: "Community Food Bank",
    summary:
      "An ongoing initiative providing weekly food parcels to families in need across Bournemouth, regardless of faith.",
    status: "active",
    fundingGoal: 24000,
    fundingRaised: 18600,
    cta: "Donate or Volunteer",
  },
  {
    id: "4",
    title: "Mosque Car Park & Access Improvements",
    summary:
      "Resurfacing the car park and improving disabled access routes to ensure all community members can attend the mosque safely.",
    status: "completed",
    completed: true,
    completedYear: "2024",
  },
  {
    id: "5",
    title: "New CCTV & Security System",
    summary:
      "Upgrading our security infrastructure to keep worshippers and the building safe, with modern CCTV and access control.",
    status: "completed",
    completed: true,
    completedYear: "2023",
  },
];
