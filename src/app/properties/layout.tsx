import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Available Plots in Nagpur | Mahalaxmi Plots & Developers",
  description:
    "Browse the best, available, and RERA-approved plots in Nagpur by Mahalaxmi Developers. Find your perfect investment with Mahalaxmi Plots—Nagpur's trusted name for clear-title properties.",
  keywords: [
    "mahalaxmi plots",
    "mahalaxmi developers",
    "mahalaxmi developers nagpur",
    "plots in nagpur",
    "best plots in nagpur",
    "available plots in nagpur",
    "better plots in nagpur",
    "nagpur plots",
    "properties for sale nagpur",
    "plots nagpur",
    "rera dtcp approved",
    "property listings nagpur",
    "buy land nagpur",
    "mahalaxmi plots properties",
  ],
  alternates: {
    canonical: "/properties",
  },
  openGraph: {
    title: "Available Plots in Nagpur | Mahalaxmi Plots & Developers",
    description:
      "Browse the best, available, and RERA-approved plots in Nagpur by Mahalaxmi Developers. Find your perfect investment with Mahalaxmi Plots—Nagpur's trusted name for clear-title properties.",
    url: "https://your-domain.com/properties",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Available Plots in Nagpur | Mahalaxmi Plots & Developers",
    description:
      "Browse the best, available, and RERA-approved plots in Nagpur by Mahalaxmi Developers. Find your perfect investment with Mahalaxmi Plots—Nagpur's trusted name for clear-title properties.",
  },
};

export default function PropertiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
