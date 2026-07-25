import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { GrainOverlay } from "@/components/GrainOverlay";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://varq.app"),
  title: "Varq — A native e-reader for macOS",
  description:
    "The Apple Books polish Calibre never had. A native, open-source e-reader for macOS. Built in Swift/SwiftUI. Reads EPUB, PDF, and CBZ.",
  keywords: [
    "e-reader",
    "macOS",
    "EPUB",
    "PDF",
    "CBZ",
    "open source",
    "SwiftUI",
    "reading app",
    "Varq",
  ],
  authors: [{ name: "Pratik Rai", url: "https://github.com/PratikRai0101" }],
  openGraph: {
    title: "Varq — A native e-reader for macOS",
    description:
      "The Apple Books polish Calibre never had. Native, open-source, and beautifully warm.",
    url: "https://varq.app",
    siteName: "Varq",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Varq — A native e-reader for macOS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Varq — A native e-reader for macOS",
    description:
      "The Apple Books polish Calibre never had. Native, open-source, and beautifully warm.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://varq.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-varq-parchment text-varq-ink-light">
        {children}
        <GrainOverlay />
      </body>
    </html>
  );
}
