// components/PlotAdvisor.tsx
import Image from "next/image";
import { ShieldCheck, MessageCircle, PhoneCall } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

export default function PlotAdvisor() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 font-poppins lg:px-20 text-center relative overflow-hidden">
      {/* Main layout */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
        {/* Left Side: Heading & Phone Image */}
        <div className="flex flex-row md:flex-col items-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-libre font-bold text-[#002657] leading-tight">
            On-Ground <br /> Plot Advisor
          </h2>
          <div className="flex justify-center mt-6">
            <Image
              src="/phone.svg"
              alt="Phone"
              width={250}
              height={250}
              className="w-full max-w-[100px] md:max-w-[250px] h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Side: Advisor Card */}
        <div className="bg-[#eaf1fb] rounded-2xl shadow-md w-full max-w-sm p-4 mt-10 lg:mt-0">
          {/* Top Image */}
          <div className="relative w-full h-56 rounded-xl overflow-hidden">
            <Image src="/agent.svg" alt="Agent" fill className="object-cover" />
            <span className="absolute top-2 left-2 bg-white text-[10px] px-2 py-[2px] rounded-full text-gray-800 font-medium shadow">
              ⭐ Best Agent
            </span>
          </div>

          {/* Content */}
          <div className="mt-6 px-1 space-y-2 text-left">
            <h2 className="text-xl font-bold text-[#1d3557] text-center">
              Contact the Expert
            </h2>
            <p className="text-sm">
              Phone:{" "}
              <span className="font-semibold text-[#1d3557]">
                +91 7798560767
              </span>
            </p>
            <p className="text-sm">
              Email:{" "}
              <span className="font-semibold text-[#1d3557]">
                mahalaxmiinfrabuildcon@gmail.com
              </span>
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
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
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 justify-center"
              >
                <BsWhatsapp size={16} />
                Send WhatsApp
              </a>
              <a
                href="tel:+917798560767"
                className="bg-[#1d70f5] hover:bg-[#1758c9] text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 justify-center"
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

      {/* Map Section */}
      <div>
        {/* Text Section */}
        <div className="mt-20 text-center max-w-2xl mx-auto px-4">
          <div className="flex justify-center mb-3">
            <Image src="/map.svg" alt="map" width={60} height={60} />
          </div>
          <h3 className="text-2xl font-libre sm:text-3xl md:text-4xl font-semibold text-blue-900">
            Find Us on Map
          </h3>
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            Visit our office or let us guide you on-site. We’re located near
            MIHAN, easily accessible via Outer Ring Road.
          </p>
        </div>

        {/* Map Section - Full width, zero padding */}
        <div className="w-full h-64 sm:h-96 md:h-[500px] mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.501036152285!2d79.06489227472688!3d21.10397208438895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0eb247d3b01%3A0x95d2a1ce65c2a269!2sLaxmi%20Vihar%20Apartment%2C%20Wardha%20Rd%2C%20Somalwada%2C%20Nagpur%2C%20Maharashtra%20440025!5e0!3m2!1sen!2sin!4v1719584344731!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
