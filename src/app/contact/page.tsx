import type { Metadata } from "next";
import Image from "next/image";
import GeneralInquiry from "../components/GeneralInquiry";
import PlotAdvisor from "../components/PlotAdvisor";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Mahalaxmi Plots, trusted real estate consultants in Nagpur. Contact our expert team for property advice, site visits, and loan assistance.",
  keywords: [
    "contact real estate nagpur",
    "mahalaxmi plots contact",
    "property consultant nagpur",
    "site visit nagpur",
    "loan assistance real estate",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Mahalaxmi Plots",
    description:
      "Get in touch with Mahalaxmi Plots, trusted real estate consultants in Nagpur. Contact our expert team for property advice, site visits, and loan assistance.",
    url: "https://your-domain.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-800">
      <div className="text-center font-poppins max-w-4xl mx-auto py-20">
        <Image
          src="/contact_image.svg"
          alt="Contact Us"
          width={1000}
          height={1000}
          className="w-full h-auto mb-10"
        />
        <div>
          <p className="mt-6 text-gray-600 text-base md:text-lg">
            We&apos;re here to help you make the right decision with
          </p>
          <p className="text-gray-600 text-base md:text-lg">
            clarity, guidance, and on-ground support.
          </p>
        </div>
      </div>

      <GeneralInquiry />
      <PlotAdvisor />
    </main>
  );
}
