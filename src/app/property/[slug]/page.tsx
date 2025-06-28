"use client";

import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import { PhoneCall, Check, ShieldCheck, MessageCircle } from "lucide-react";
import { mockProperties, propertyDetails } from "../../data/properties";
import PropertyCard from "@/app/components/PropertyCard";
import { BsWhatsapp } from "react-icons/bs";

export default function PropertyPage() {
  const { slug } = useParams<{ slug: string }>();
  const property = propertyDetails.find((p) => p.slug === slug);

  if (!property) return notFound();

  return (
    <main className="bg-white max-w-7xl mx-auto font-inter text-gray-900 font-sans">
      <section className="mx-auto px-2 sm:px-4 py-8">
        {/* Top Gallery Section */}
        <div className="grid grid-cols-1 rounde-3xl md:grid-cols-3 gap-4">
          {/* Left column: 1 image (takes 2/3 of width) */}
          <div className="md:col-span-2 relative">
            {/* Badge */}
            <div className="absolute top-3 left-4 z-10 inline-flex items-center px-4 py-1.5 bg-white text-black text-sm font-medium rounded-full shadow-md">
              <span className="w-2.5 h-2.5 bg-red-600 rounded-full mr-2"></span>
              Only Few Plots are left
            </div>

            {/* Image */}
            <Image
              src={property.gallery[0]}
              alt="Gallery 1"
              width={1000}
              height={600}
              className="w-full h-56 sm:h-80 md:h-[420px] object-cover rounded-xl sm:rounded-l-3xl sm:rounded-r-none"
            />
          </div>

          {/* Right column: 2 stacked images */}
          <div className="grid grid-rows-2 gap-4 h-full max-h-[420px]">
            {property.gallery.slice(1, 3).map((img, i) => (
              <div
                key={i}
                className="relative rounded-xl sm:rounded-r-3xl rounded-l-none overflow-hidden h-28 sm:h-40 md:h-full"
              >
                <Image
                  src={img}
                  alt={`Gallery ${i + 2}`}
                  fill
                  className="object-cover rounded-xl sm:rounded-r-3xl rounded-l-none"
                />
                {i === 1 && (
                  <button className="absolute bottom-2 right-2 bg-white text-sm px-3 py-1 rounded-md shadow font-medium">
                    See all {property.gallery.length} Photos
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Property + Agent Details */}
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div className="flex flex-col gap-20 mt-6 w-full lg:w-2/3">
            {/* Left: Property */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs bg-green-100 text-green-600 font-medium px-2 py-1 rounded-full">
                  🟢 {property.title}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002657] uppercase mt-3">
                {property.title}
              </h1>
              <p className="text-gray-600 mt-1 text-sm">{property.location}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 max-w-xl gap-3 mt-4">
                {property.specialFeatures.map((label, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1 bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-md"
                  >
                    {label}
                  </span>
                ))}
              </div>
              {/* Description */}
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  What&apos;s Special
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {property.description}
                </p>
              </div>
              {/* Brochure */}
              <div className="mt-6">
                <a
                  href={property.brochureUrl || ""}
                  download
                  className="bg-blue-600 flex w-fit gap-2 text-white px-4 py-3 rounded-full font-medium"
                >
                  <Image
                    src="/download.svg"
                    alt="download"
                    width={20}
                    height={20}
                  />{" "}
                  Download Brochure
                </a>
              </div>
            </div>

            <section className="bg-white max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a2259] mb-6">
                Project Overview
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-xl overflow-hidden shadow border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100 text-left">
                      <th className="text-sm font-semibold border border-gray-200 text-gray-700 px-4 py-3 w-1/3">
                        Features
                      </th>
                      <th className="text-sm font-semibold border border-gray-200 text-gray-700 px-4 py-3">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-800">
                    {property.overview.map((item, idx) => (
                      <tr
                        key={idx}
                        className="border border-gray-200 even:bg-gray-50"
                      >
                        <td className="px-4 py-3  border  border-gray-200 font-medium text-gray-900">
                          {item.label}
                        </td>
                        <td className="px-4 py-3 border  border-gray-200 ">
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mt-8">
              {/* Heading */}
              <h2 className="text-2xl md:text-3xl font-semibold text-[#002657] mb-6">
                Location
              </h2>
              <p className="text-gray-600 mb-8">
                Live at the Center of South Nagpur&apos;s Growth
              </p>
              {/* Highlights */}
              <h3 className="text-lg font-semibold text-[#7E7E7E] mb-5">
                Nearby Highlights
              </h3>
              <ul className="space-y-4 mb-6">
                {property.nearbyHighlights.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-gray-700"
                  >
                    <Image src="/star.svg" alt="star" width={20} height={20} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              {/* Embedded Map */}
              <div className="overflow-hidden rounded-2xl">
                <iframe
                  src={property.mapUrl || ""}
                  width="100%"
                  height="400"
                  allowFullScreen
                  loading="lazy"
                  className="w-full min-h-[200px] sm:min-h-[300px]"
                ></iframe>
              </div>
            </section>
            {/* Amenities */}
            <div className="max-w-md pb-6">
              <h2 className="text-xl font-semibold text-[#002657] mb-4">
                Amenities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {Object.entries(property.amenities).map(
                  ([key, value], index) => (
                    <div
                      key={index}
                      className="border border-gray-300 rounded-lg"
                    >
                      <h4 className="font-medium bg-[#F5F6F7] text-sm mb-1  p-2 border-b-gray-300 border-b">
                        {key}
                      </h4>
                      <p className="text-sm text-gray-700 p-2 ">{value}</p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Why Choose */}
            <div className="max-w-xl pb-6">
              <h2 className="text-xl flex items-center gap-2 bg-[#1FAF38] font-semibold mb-4 text-white py-3 px-5 rounded-t-lg">
                <Image src="/edit.svg" alt="star" width={20} height={20} />{" "}
                Legal & Financial Information
              </h2>
              <ul className="space-y-5 px-5">
                {property.legalAndFinancialInformation.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-lg">
                    <Check size={20} className="text-green-600" /> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-3">
              <a
                href={property.brochureUrl || ""}
                download
                className="bg-blue-600 w-fit flex gap-2 text-white px-4 py-3 rounded-full font-medium"
              >
                <Image
                  src="/download.svg"
                  alt="download"
                  width={20}
                  height={20}
                />{" "}
                Download Brochure
              </a>
            </div>

            <div className="max-w-xl pb-6">
              <h2 className="text-xl flex items-center gap-2 bg-[#136EE7] font-semibold mb-4 text-white py-3 px-5 rounded-t-lg">
                <Image
                  src="/solar_star.svg"
                  alt="star"
                  width={20}
                  height={20}
                />{" "}
                Why Why Choose {property.title}?
              </h2>
              <ul className="space-y-5 px-5">
                {property.whyChoose.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-lg">
                    <Check size={20} className="text-green-600" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-[#eaf1fb] rounded-2xl h-fit mt-10 shadow-md max-w-sm w-full overflow-hidden p-4 mx-auto lg:mx-0">
            {/* Top Image */}
            <div className="relative w-full h-56 rounded-xl overflow-hidden">
              <Image
                src="/agent.svg" // Replace with actual agent image
                alt="Agent"
                fill
                className="object-cover"
              />
              <span className="absolute top-2 left-2 bg-white text-[10px] px-2 py-[2px] rounded-full text-gray-800 font-medium shadow">
                ⭐ Best Agent
              </span>
            </div>
            {/* Content */}
            <div className="mt-6 px-1 space-y-2">
              <h2 className="text-xl font-bold text-center text-[#1d3557]">
                Contact the Expert
              </h2>
              <p className="text-sm text-left">
                Phone:{" "}
                <span className="font-semibold text-[#1d3557]">
                  +91 7798560767
                </span>
              </p>
              <p className="text-sm text-left">
                Email:{" "}
                <span className="font-semibold text-[#1d3557]">
                  mahalaxmiinfrabuildcon@gmail.com
                </span>
              </p>
              {/* Tags */}
              <div className="flex flex-wrap gap-4 mt-3">
                <span className="flex items-center gap-1 bg-white text-xs px-3 py-1 rounded-full shadow">
                  <MessageCircle size={14} /> 10+ years in Nagpur real estate
                </span>
                <span className="flex items-center gap-1 bg-white text-xs px-3 py-1 rounded-full shadow">
                  <ShieldCheck size={14} /> Verified by Mahalaxmi Group
                </span>
              </div>
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
                <a
                  href="https://wa.me/917798560767"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm flex items-center gap-2 justify-center"
                >
                  <BsWhatsapp size={16} />
                  Send WhatsApp
                </a>
                <a
                  href="tel:+917798560767"
                  className="bg-[#1d70f5] hover:bg-[#1758c9] text-white px-6 py-3 rounded-full text-sm flex items-center gap-2 justify-center"
                >
                  <PhoneCall size={16} /> Call Now
                </a>
              </div>
              <p className="text-center text-xs text-gray-600 mt-2">
                *Get instant response
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Agent */}
      <div className="bg-[#eaf1fb] rounded-2xl shadow-md max-w-md w-full overflow-hidden p-4 mx-auto my-8">
        {/* Top Image */}
        <div className="relative w-full h-64 rounded-xl overflow-hidden">
          <Image
            src="/agent.svg" // Replace with your actual image path
            alt="Agent"
            fill
            className="object-cover"
          />
          <span className="absolute top-2 left-2 bg-white text-[10px] px-2 py-[2px] rounded-full text-gray-800 font-medium shadow">
            ⭐ Best Agent
          </span>
        </div>
        {/* Form */}
        <div className="mt-6 px-1">
          <h2 className="text-xl font-bold text-center text-[#1d3557] mb-4">
            Get Help
          </h2>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Message"
              rows={3}
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-sm outline-none resize-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-[#1d70f5] text-white font-semibold text-sm py-3 rounded-md hover:bg-[#1758c9] transition"
            >
              REQUEST A CALLBACK
            </button>
          </form>
          <p className="text-center text-xs text-gray-600 mt-2">
            *Get instant response
          </p>
        </div>
      </div>
      {/* Similar Listings */}
      <div className="text-2xl font-bold text-gray-800 px-2 sm:px-4">
        See Other Listings
      </div>
      <section
        className="
  flex flex-col sm:flex-row 
  gap-6 
  overflow-x-auto 
  scrollbar-hide 
  snap-x snap-mandatory 
  py-10 px-4 
  lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 
  lg:gap-8 lg:overflow-visible lg:snap-none
"
      >
        {mockProperties.slice(0, 4).map((property) => (
          <PropertyCard
            key={property.slug}
            {...property}
            href={`/property/${property.slug}`}
          />
        ))}
      </section>
    </main>
  );
}
