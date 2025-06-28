"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { useRouter } from "next/navigation";

const faqs = [
  "Are all plots approved by RERA or DTCP?",
  "Can I get EMI or bank loan?",
  "What’s the process of booking and registration?",
  "How do I visit the site?",
];

export default function FaqAndAbout() {
  const [open, setOpen] = useState<number | null>(null);
  const router = useRouter();

  return (
    <section className="bg-white text-gray-800">
      {/* FAQs Section */}
      <div className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        <div className="w-full">
          <h2 className="text-8xl font-serif font-bold mb-6 font-libre">
            FAQs
          </h2>

          <div className="bg-gray-50 p-4 max-w-sm rounded-xl text-left">
            <h4 className="font-semibold text-md font-libre mb-2">
              Still have a Question?
            </h4>
            <p className="text-sm text-gray-600 font-poppins mb-4">
              Can’t find answers to your questions? Contact us on WhatsApp or
              call us!
            </p>
            <div className="flex font-inter">
              <a
                href="#"
                className="bg-green-500 flex gap-2 text-white text-sm py-2 px-4 font-medium"
              >
                <SiWhatsapp size={20} />
                Send WhatsApp
              </a>
              <a
                href="#"
                className="bg-blue-600 flex gap-2 text-white text-sm py-2 px-4 font-medium"
              >
                <FaPhoneAlt size={20} />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="space-y-4">
          {faqs.map((q, idx) => (
            <div
              key={idx}
              onClick={() => setOpen(open === idx ? null : idx)}
              className="border-b cursor-pointer pb-3"
            >
              <div className="flex justify-between items-center">
                <p className=" font-medium">
                  {idx + 1}. {q}
                </p>
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform ${
                    open === idx ? "rotate-180" : ""
                  }`}
                />
              </div>
              {open === idx && (
                <p className="text-sm text-gray-500 mt-2">
                  This is a placeholder answer for: {q}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-[#f5f9ff] py-16 px-4 bg-[url('/about_home.jpg')] bg-cover bg-center">
        <div className="max-w-6xl justify-between flex flex-col md:flex-row gap-2 mx-auto">
          <div className="max-w-lg">
            <h3 className="text-2xl font-libre md:text-3xl font-bold mb-6">
              About Mahalaxmi Group
            </h3>
            <p className="text-sm md:text-base font-poppins text-gray-700 max-w-3xl mx-auto mb-6">
              Mahalaxmi Plots is the dedicated land-consultancy arm that brings
              the proven expertise of Mahalaxmi Developers—a group with 54
              completed projects and 10,000 + satisfied customers—to buyers
              looking for clear-title residential plots in Nagpur. For more than
              a decade, the Group has operated on three pillars: trust,
              transparency and ethics, values that shape every interaction we
              have with our clients.
            </p>
            <button
              onClick={() => router.push("/about")}
              className="bg-blue-600 font-inter cursor-pointer hover:bg-blue-700 text-white py-2 px-5 text-lg font-semibold rounded-md mb-8"
            >
              Read Our Story
            </button>
          </div>
          {/* Directors */}
          <div className="flex justify-center items-center">
            <div className="text-center">
              <Image
                src="/rahul.svg"
                alt="Rahul Bondre"
                width={200}
                height={200}
                className=" mx-auto object-cover"
              />
              <p className="mt-2 font-semibold text-sm text-white sm:text-[#002657]">
                Mr. Rahul Bondre
              </p>
              <p className="text-xs text-white sm:text-gray-500">Director</p>
            </div>
            <div className="text-center">
              <Image
                src="/logo.svg"
                alt="Rahul Bondre"
                width={100}
                height={100}
                className="relative -top-15 mx-auto object-cover"
              />
            </div>
            <div className="text-center">
              <Image
                src="/anish.svg"
                alt="Anish Chhajed"
                width={200}
                height={200}
                className=" mx-auto object-cover"
              />
              <p className="mt-2 font-semibold text-sm text-white sm:text-[#002657]">
                Mr. Anish Chhajed
              </p>
              <p className="text-xs text-white sm:text-gray-500">Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
