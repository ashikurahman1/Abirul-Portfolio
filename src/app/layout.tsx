import type { Metadata } from "next";
import localFont from "next/font/local";
import { MotionProvider } from "@/components/motion/motion-provider";
import { SoundProvider } from "@/components/audio/sound-provider";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const display = localFont({
  src: "../assets/fonts/bodoni-moda.ttf",
  variable: "--font-display",
  weight: "400",
  display: "swap",
});
const sans = localFont({
  src: [
    { path: "../assets/fonts/dm-sans-regular.ttf", weight: "400" },
    { path: "../assets/fonts/dm-sans-medium.ttf", weight: "500" },
    { path: "../assets/fonts/dm-sans-semibold.ttf", weight: "600" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${portfolio.name} — ${portfolio.role}`,
    template: `%s — ${portfolio.name}`,
  },
  description: portfolio.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SoundProvider><MotionProvider>{children}</MotionProvider></SoundProvider>
      </body>
    </html>
  );
}
