import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

// Self-hosted by next/font at build time: no request to Google Fonts at runtime.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abhi200926.github.io"),
  title: {
    default: "ShipYard",
    template: "%s | ShipYard",
  },
  description: "A small product catalog storefront",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.className} ${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
