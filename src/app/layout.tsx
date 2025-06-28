import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Libre_Baskerville,
  Poppins,
} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Premium Real Estate Solutions | Your Trusted Property Partner",
    template: "%s | Premium Real Estate Solutions",
  },
  description:
    "Discover premium real estate properties, expert guidance, and exceptional service. Your trusted partner for buying, selling, and investing in real estate.",
  keywords: [
    "real estate",
    "properties",
    "buy property",
    "sell property",
    "real estate investment",
    "premium properties",
    "real estate agent",
  ],
  authors: [{ name: "Premium Real Estate Solutions" }],
  creator: "Premium Real Estate Solutions",
  publisher: "Premium Real Estate Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://yourdomain.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Premium Real Estate Solutions | Your Trusted Property Partner",
    description:
      "Discover premium real estate properties, expert guidance, and exceptional service.",
    siteName: "Premium Real Estate Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Real Estate Solutions | Your Trusted Property Partner",
    description:
      "Discover premium real estate properties, expert guidance, and exceptional service.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${inter.variable} ${poppins.variable} ${libreBaskerville.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
