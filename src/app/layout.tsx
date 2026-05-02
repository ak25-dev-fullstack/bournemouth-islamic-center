import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bournemouth Islamic Centre & Central Mosque",
    template: "%s | Bournemouth Islamic Centre",
  },
  description:
    "Welcome to Bournemouth Islamic Centre & Central Mosque — a vibrant community hub for worship, learning, and service in Bournemouth, Dorset.",
  keywords: [
    "mosque",
    "Bournemouth",
    "Islamic centre",
    "Muslim community",
    "prayer times",
    "Jummah",
  ],
  openGraph: {
    siteName: "Bournemouth Islamic Centre & Central Mosque",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-stone-50 antialiased">
        <Header />
        <main className="flex-grow pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
