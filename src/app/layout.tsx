import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skitrace — Beyond the resume. Discover the proof.",
  description:
    "Discover the evidence behind a candidate's skills, experience, and professional work — consolidated, traced to primary source code, and verified in one place.",
  keywords: [
    "Skitrace",
    "Candidate Intelligence",
    "Engineering Hiring",
    "Code Verification",
    "Technical Recruitment",
    "Provenance",
  ],
  authors: [{ name: "Skitrace Technologies, Inc." }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
      { url: "/images/skitrace-emblem.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-pearl text-carbon-900 selection:bg-champagne-300 selection:text-carbon-950 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
