import { Mail, MapPin, Phone, Clock, MessageCircleMore } from "lucide-react";
import Image from "next/image";

export default function GeneralInquiry() {
  return (
    <section
      className="bg-white py-16 px-4 font-poppins md:px-8 lg:px-24"
      aria-labelledby="general-inquiry-heading"
    >
      {/* Structured Data for SEO */}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "Mahalaxmi Group",
          image: "/generalinquiry.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Near Jamtha, Wardha Road",
            addressLocality: "Nagpur",
            postalCode: "441108",
            addressCountry: "IN",
          },
          telephone: "+91 XXXXX XXXXX",
          email: "info@mahalaxmiplots.com",
          openingHours: "Mo-Sa 09:00-19:00",
          url: "https://mahalaxmiplots.com",
        })}
      </script>

      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Side */}
        <div className="flex-1 text-[#002657] text-center lg:text-left flex flex-row md:flex-col items-center lg:items-start">
          <h2
            id="general-inquiry-heading"
            className="text-4xl sm:text-5xl font-libre md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-tight mb-6"
          >
            General
            <br />
            Inquiry
          </h2>
          <div className="w-full flex justify-center lg:justify-start">
            <Image
              src="/enquiry.svg"
              alt="Decorative vector connector"
              width={250}
              height={250}
              className="w-full max-w-[100px] md:max-w-[250px] h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Side */}
        <address
          className="flex-1 not-italic text-gray-800 space-y-8 text-sm sm:text-base"
          itemScope
          itemType="https://schema.org/Organization"
        >
          {/* Address */}
          <div>
            <h3 className="font-semibold text-lg">Office Address</h3>
            <p
              className="flex items-start sm:items-center gap-2 mt-1"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <MapPin className="w-5 h-5 text-[#3b82f6] mt-0.5 sm:mt-0" />
              <span itemProp="streetAddress">
                Mahalaxmi Group, Near Jamtha, Wardha Road, Nagpur – 441108
              </span>
            </p>
          </div>

          {/* Phone */}
          <div>
            <h3 className="font-semibold text-lg">Phone Number</h3>
            <p className="flex items-center gap-2 mt-1">
              <Phone className="w-5 h-5 text-[#3b82f6]" />
              <a
                href="tel:+91XXXXXXXXXX"
                className="text-[#0a2259] underline"
                itemProp="telephone"
              >
                +91 XXXXX XXXXX
              </a>
            </p>
          </div>

          {/* Email */}
          <div>
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="flex items-center gap-2 mt-1">
              <Mail className="w-5 h-5 text-[#3b82f6]" />
              <a
                href="mailto:info@mahalaxmiplots.com"
                className="text-[#0a2259] underline"
                itemProp="email"
              >
                info@mahalaxmiplots.com
              </a>
            </p>
          </div>

          {/* Timings */}
          <div>
            <h3 className="font-semibold text-lg">Office Timings</h3>
            <p className="flex items-center gap-2 mt-1">
              <Clock className="w-5 h-5 text-[#3b82f6]" />
              <span>Monday to Saturday – 9:00 AM to 7:00 PM</span>
            </p>
          </div>

          {/* WhatsApp */}
          <div>
            <h3 className="font-semibold text-lg">WhatsApp</h3>
            <p className="flex items-center gap-2 mt-1">
              <MessageCircleMore className="w-5 h-5 text-[#3b82f6]" />
              <a
                href="https://wa.me/91XXXXXXXXXX"
                className="text-[#0a2259] underline"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Chat with us on WhatsApp"
              >
                Click here to chat
              </a>
            </p>
          </div>
        </address>
      </div>
    </section>
  );
}
