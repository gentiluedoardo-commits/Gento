import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://realpadel.it"),
  title: {
    default: "Real Padel — Padel Club in Florence",
    template: "%s · Real Padel",
  },
  description:
    "Florence's premier padel centre. Indoor & outdoor panoramic courts, coaching, leagues and a buzzing community. Book your court in seconds.",
  keywords: [
    "padel Florence",
    "padel Firenze",
    "padel club",
    "padel courts",
    "padel coaching",
  ],
  openGraph: {
    title: "Real Padel — Padel Club in Florence",
    description:
      "Indoor & outdoor panoramic courts, coaching, leagues and a buzzing community in the heart of Florence.",
    type: "website",
    locale: "en_GB",
    siteName: "Real Padel",
  },
};

export const viewport: Viewport = {
  themeColor: "#047857",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
