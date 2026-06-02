import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bournemouth Islamic Centre & Central Mosque",
    template: "%s | Bournemouth Islamic Centre",
  },
  description:
    "Welcome to Bournemouth Islamic Centre & Central Mosque — a vibrant community hub for worship, learning, and service in Bournemouth, Dorset.",
  keywords: ["mosque", "Bournemouth", "Islamic centre", "Muslim community", "prayer times", "Jummah"],
  openGraph: {
    siteName: "Bournemouth Islamic Centre & Central Mosque",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen flex flex-col bg-ivory text-ink antialiased">
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
