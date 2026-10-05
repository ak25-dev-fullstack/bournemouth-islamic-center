import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/bournemouth-islamic-center",
  // Lets phones/tablets on the same Wi-Fi load the dev server (dev only; no effect on the built site).
  // Update if your computer's network IP changes (shown as "Network:" when running `npm run dev`).
  allowedDevOrigins: ["10.124.154.94", "192.168.0.68"],
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
