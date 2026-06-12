import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

/* ─── Fuentes ─── */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

/* ─── Metadata SEO ─── */
export const metadata: Metadata = {
  title: "Bárbara Palma | Ingeniera en Informática",
  description:
    "Portafolio profesional de Bárbara Javiera Palma Mena — Ingeniera en Informática especializada en desarrollo web frontend con React, Next.js y tecnologías modernas.",
  keywords: [
    "Bárbara Palma",
    "Ingeniera Informática",
    "Frontend Developer",
    "React",
    "Next.js",
    "Portafolio",
    "Chile",
  ],
  authors: [{ name: "Bárbara Javiera Palma Mena" }],
  creator: "Bárbara Javiera Palma Mena",
  openGraph: {
    type: "website",
    locale: "es_CL",
    title: "Bárbara Palma | Ingeniera en Informática",
    description:
      "Portafolio profesional de Bárbara Javiera Palma Mena — Frontend Developer especializada en React y Next.js.",
    siteName: "Bárbara Palma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bárbara Palma | Ingeniera en Informática",
    description:
      "Portafolio profesional — Frontend Developer especializada en React y Next.js.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
