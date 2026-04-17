import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Announcements",
  description:
    "Latest news, announcements, and community updates from Bournemouth Islamic Centre.",
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
