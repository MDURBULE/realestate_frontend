import type { Metadata } from "next";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import ResidentialLayouts from "./components/ResidentialLayouts";
import GrowthZones from "./components/GrowthZones";
import Testimonials from "./components/Testimonials";
import ContactAgent from "./components/ContactAgent";
import FaqAndAbout from "./components/FaqAndAbout";
import ContactAgentHorizontal from "./components/ContactAgentHorizontal";

export const metadata: Metadata = {
  title: "Mahalaxmi Plots | Best Plots in Nagpur by Mahalaxmi Developers",
  description:
    "Mahalaxmi Developers Nagpur offers the best, available, and RERA-approved plots in Nagpur. Discover your ideal plot with Mahalaxmi Plots—trusted for clear-title, premium, and better plots in Nagpur.",
  keywords: [
    "mahalaxmi plots",
    "mahalaxmi developers",
    "mahalaxmi developers nagpur",
    "plots in nagpur",
    "best plots in nagpur",
    "available plots in nagpur",
    "better plots in nagpur",
    "nagpur plots",
    "real estate",
    "properties",
    "buy property",
    "sell property",
    "real estate investment",
    "premium properties",
    "real estate agent",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mahalaxmi Plots | Best Plots in Nagpur by Mahalaxmi Developers",
    description:
      "Mahalaxmi Developers Nagpur offers the best, available, and RERA-approved plots in Nagpur. Discover your ideal plot with Mahalaxmi Plots—trusted for clear-title, premium, and better plots in Nagpur.",
    url: "https://your-domain.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahalaxmi Plots | Best Plots in Nagpur by Mahalaxmi Developers",
    description:
      "Mahalaxmi Developers Nagpur offers the best, available, and RERA-approved plots in Nagpur. Discover your ideal plot with Mahalaxmi Plots—trusted for clear-title, premium, and better plots in Nagpur.",
  },
};

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <WhyChoose />
      <ResidentialLayouts />
      <GrowthZones />
      <Testimonials />
      <ContactAgent />
      <FaqAndAbout />
      <ContactAgentHorizontal />
    </main>
  );
}
