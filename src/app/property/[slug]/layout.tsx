import type { Metadata } from "next";
import { propertyDetails } from "../../data/properties";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const property = propertyDetails.find((p) => p.slug === slug);
  if (!property) return {} as Metadata;
  return {
    title: `${property.title} | Mahalaxmi Plots, Mahalaxmi Developers Nagpur | Best Plots in Nagpur`,
    description: `${property.description} Find the best, available, and RERA-approved plots in Nagpur with Mahalaxmi Plots and Mahalaxmi Developers.`,
    keywords: [
      property.title,
      property.location,
      "mahalaxmi plots",
      "mahalaxmi developers",
      "mahalaxmi developers nagpur",
      "plots in nagpur",
      "best plots in nagpur",
      "available plots in nagpur",
      "better plots in nagpur",
      "nagpur plots",
      "property for sale",
      "plot nagpur",
      "rera dtcp approved",
      "mahalaxmi plots properties",
    ],
    alternates: {
      canonical: `/property/${property.slug}`,
    },
    openGraph: {
      title: `${property.title} | Mahalaxmi Plots, Mahalaxmi Developers Nagpur | Best Plots in Nagpur`,
      description: `${property.description} Find the best, available, and RERA-approved plots in Nagpur with Mahalaxmi Plots and Mahalaxmi Developers.`,
      url: `https://your-domain.com/property/${property.slug}`,
      images: property.gallery?.length
        ? property.gallery.map((img) => ({ url: img }))
        : undefined,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${property.title} | Mahalaxmi Plots, Mahalaxmi Developers Nagpur | Best Plots in Nagpur`,
      description: `${property.description} Find the best, available, and RERA-approved plots in Nagpur with Mahalaxmi Plots and Mahalaxmi Developers.`,
      images: property.gallery?.length ? property.gallery : undefined,
    },
  };
}

export default function PropertySlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
