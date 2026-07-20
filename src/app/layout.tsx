import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VentureLink Advisory — Launching soon",
  description:
    "Something exceptional is almost here. VentureLink Advisory opens in 24 hours — a smarter way to fund and grow your business.",
  metadataBase: new URL("https://venturelinkadvisory.com"),
  openGraph: {
    title: "VentureLink Advisory — Launching soon",
    description:
      "Something exceptional is almost here. VentureLink Advisory opens in 24 hours.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#071d32",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${instrumentSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
