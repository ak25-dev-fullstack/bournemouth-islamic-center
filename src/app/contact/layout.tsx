import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Visit",
  description:
    "Find Bournemouth Islamic Centre, get in touch, or plan your visit. Address, map, and contact form.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
