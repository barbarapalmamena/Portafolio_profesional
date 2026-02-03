import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Barbara Palma - Desarrolladora Full Stack",
  description: "Portafolio profesional de Barbara Palma, desarrolladora Full Stack especializada en React, Next.js y tecnologías web modernas.",
  keywords: ["desarrolladora", "full stack", "react", "next.js", "portfolio", "web developer"],
  authors: [{ name: "Barbara Palma" }],
  openGraph: {
    title: "Barbara Palma - Desarrolladora Full Stack",
    description: "Portafolio profesional de Barbara Palma",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
