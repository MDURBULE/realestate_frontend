import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Mahalaxmi Plots & Developers Nagpur | Best Plots in Nagpur",
  description:
    "Learn about Mahalaxmi Plots and Mahalaxmi Developers Nagpur—trusted for the best, available, and better plots in Nagpur. Discover our values, team, and why thousands trust us for clear-title property investments.",
  keywords: [
    "mahalaxmi plots",
    "mahalaxmi developers",
    "mahalaxmi developers nagpur",
    "plots in nagpur",
    "best plots in nagpur",
    "available plots in nagpur",
    "better plots in nagpur",
    "nagpur plots",
    "about mahalaxmi plots",
    "real estate nagpur",
    "trusted property consultant",
    "clear-title plots",
    "mahalaxmi group team",
    "property investment nagpur",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Mahalaxmi Plots & Developers Nagpur | Best Plots in Nagpur",
    description:
      "Learn about Mahalaxmi Plots and Mahalaxmi Developers Nagpur—trusted for the best, available, and better plots in Nagpur. Discover our values, team, and why thousands trust us for clear-title property investments.",
    url: "https://your-domain.com/about",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Mahalaxmi Plots & Developers Nagpur | Best Plots in Nagpur",
    description:
      "Learn about Mahalaxmi Plots and Mahalaxmi Developers Nagpur—trusted for the best, available, and better plots in Nagpur. Discover our values, team, and why thousands trust us for clear-title property investments.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
