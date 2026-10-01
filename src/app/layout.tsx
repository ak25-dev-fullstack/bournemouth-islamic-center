import type { Metadata, Viewport } from "next";
import { Lora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8F6F0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen flex flex-col bg-ivory text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-5 focus:py-3 focus:rounded focus:bg-ink focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
