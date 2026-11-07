import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";
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

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skitrace — A Resume Tells You What They Claim. Discover What They Can Prove.",
  description:
    "Verify technical competence with real work artifacts, code proof, and verified portfolio traces before you make an offer.",
  keywords: [
    "Skitrace",
    "Candidate Intelligence",
    "Engineering Hiring",
    "Code Verification",
    "Technical Recruitment",
    "Proof-Driven Hiring",
  ],
  authors: [{ name: "Skitrace Technologies, Inc." }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
      { url: "/images/skitrace-emblem.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
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
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${newsreader.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FAF8F5] text-carbon-900 selection:bg-champagne-300 selection:text-carbon-950 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
