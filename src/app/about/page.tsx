// components/AboutUs.tsx
import { Phone } from "lucide-react";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";

export default function AboutUs() {
  return (
    <section className="w-full overflow-hidden">
      {/* 1) Hero/skyline */}
      <div
        className="relative w-full h-[calc(100vh-100px)] bg-cover bg-center"
        style={{ backgroundImage: "url('/about.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-400/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-2 sm:px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-6xl gap-4 md:gap-0">
            <Image
              src="/rahul.svg"
              alt="Person 1"
              width={200}
              height={340}
              className="rounded-lg w-40 h-40 md:w-[350px] md:h-[600px] object-contain"
            />
            <div className="text-center my-6 md:my-0 flex-1">
              <h2 className="text-3xl font-libre sm:text-5xl font-serif font-bold text-white">
                About Us
              </h2>
              <p className="mt-2 font-poppins text-base sm:text-lg text-white/90">
                Trusted Real Estate in Nagpur
              </p>
            </div>
            <Image
              src="/anish.svg"
              alt="Person 2"
              width={200}
              height={340}
              className="rounded-lg w-40 h-40 md:w-[350px] md:h-[600px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* 2) Floating card */}
      <div className="relative -mt-20 sm:-mt-32 z-20 px-4 sm:px-6">
        <div className="mx-auto w-full max-w-3xl bg-white shadow-2xl flex flex-col-reverse sm:flex-row overflow-hidden rounded-xl">
          {/* Left half */}
          <div className="w-full sm:w-1/2 p-6 flex flex-col justify-between">
            <div className="font-poppins">
              <h3 className="text-xl sm:text-2xl font-libre font-semibold text-blue-900">
                Who We Are
              </h3>
              <p className="mt-10 text-gray-700 text-sm sm:text-base leading-relaxed">
                Mahalaxmi Plots is the dedicated land-consultancy arm that
                brings the proven expertise of Mahalaxmi Developers—a group with{" "}
                <strong>54 completed projects</strong> and{" "}
                <strong>10,000+ satisfied customers</strong>—to buyers looking
                for clear-title <strong>residential plots</strong> in Nagpur.
              </p>
              <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                For more than a decade, the Group has operated on three pillars:{" "}
                <strong>trust, transparency and ethics</strong>, values that
                shape every interaction we have with our clients.
              </p>
            </div>
            <div className="text-right mt-6">
              <Image
                src="/signature.svg"
                alt="Signature"
                width={100}
                height={100}
                className="rounded-full border-2 border-white w-16 h-16 sm:w-[100px] sm:h-[100px] inline-block"
              />
            </div>
          </div>

          {/* Right half */}
          <div
            className="w-full sm:w-1/2 relative bg-cover bg-center flex flex-col justify-end min-h-[300px] sm:min-h-0"
            style={{ backgroundImage: "url('/who.jpg')" }}
          >
            {/* black overlay with 50% opacity */}
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            {/* Top floating avatars */}
            <div className="z-10 flex space-x-2 absolute left-1/2 -translate-x-1/2 top-6 sm:top-8">
              <Image
                src="/rahul.svg"
                alt="Person 1"
                width={60}
                height={60}
                className="rounded-full border-4 bg-yellow-400 border-white"
              />
              <Image
                src="/anish.svg"
                alt="Person 2"
                width={60}
                height={60}
                className="rounded-full border-4 bg-blue-500 border-white -ml-3"
              />
            </div>

            {/* Center Logo with glow */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[200px] h-[200px] rounded-full bg-white blur-2xl opacity-70"></div>
              </div>
              <Image
                src="/logo.svg"
                alt="Mahalaxmi Logo"
                width={180}
                height={180}
                className="relative z-10 mx-auto"
              />
            </div>

            {/* Bottom content */}
            <div className="relative z-10 py-6 px-4 flex items-center justify-center">
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <Image
                  src="/users.svg"
                  alt="Badge"
                  width={80}
                  height={80}
                  className="mb-2 sm:mb-0"
                />
                <p className="text-white font-poppins font-semibold text-base sm:text-lg text-center sm:text-left">
                  400+ Active Advisors
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhatSets />
      <OurPillars />
    </section>
  );
}

function WhatSets() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto grid font-poppins grid-cols-1 md:grid-cols-2 px-2 sm:px-6 lg:px-0 gap-y-10">
        {/* Left: Big Heading */}
        <h2 className="text-4xl sm:text-6xl md:text-[130px] leading-none font-serif font-bold text-[#002657] font-libre mb-6 md:mb-0">
          What Sets Us Apart
        </h2>

        {/* Right: Feature List */}
        <div className="space-y-8 sm:space-y-12">
          {/* Feature 1 */}
          <div className="flex items-start">
            <div className="w-18 flex items-center justify-center rounded-lg flex-shrink-0">
              {/* Check-in-square SVG */}
              <Image src="/check.svg" alt="check" width={100} height={100} />
            </div>
            <div className="ml-4">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-900">
                Clear-title property only
              </h3>
              <p className="mt-1 text-gray-600 max-w-xs text-sm sm:text-base">
                Every layout we promote is fully documented and open for your
                legal scrutiny.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start">
            <div className="w-18 flex items-center justify-center rounded-lg flex-shrink-0">
              {/* Check-in-square SVG */}
              <Image src="/bank.svg" alt="check" width={100} height={100} />
            </div>
            <div className="ml-4">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-900">
                Bank-linked finance
              </h3>
              <p className="mt-1 text-gray-600 text-sm max-w-xs sm:text-base">
                Tie-ups with nationalised and private banks mean faster loan
                approvals on every project.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start">
            <div className="w-18 flex items-center justify-center rounded-lg flex-shrink-0">
              {/* Check-in-square SVG */}
              <Image src="/brain.svg" alt="check" width={100} height={100} />
            </div>
            <div className="ml-4">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-900">
                End-to-end support
              </h3>
              <p className="mt-1 text-gray-600 text-sm max-w-xs sm:text-base">
                Document assistance and an in-house legal cell guide you from
                booking to registration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurPillars() {
  return (
    <section className="bg-white py-16 sm:py-20 font-poppins px-2 md:px-10 lg:px-24">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-5xl font-libre font-bold text-center text-[#0a2259] mb-10 sm:mb-20">
        Our Pillars
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* First pillar */}
        <div className="flex max-w-6xl mx-auto flex-col md:flex-row items-center md:items-start gap-8">
          {/* Portrait */}
          <div className="flex-shrink-0">
            <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-96 lg:h-96 rounded-full bg-white overflow-hidden">
              <Image
                src="/rahul-bg.svg"
                alt="Mr. Rahul Bondre"
                fill
                sizes="(min-width: 768px) 288px, 224px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="mt-8 md:mt-0 md:ml-12 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0a2259] mb-6">
              Mr. Rahul Bondre
            </h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              As the <strong>Director of Mahalaxmi Group</strong>, my main goal
              is to make people feel proud of their investments. We want you to
              trust us completely, knowing that we&apos;re always open and
              honest in our dealings.
            </p>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Every project we take on is a chance to create amazing spaces and
              turn your <strong>dreams into reality</strong>.
            </p>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              …We&apos;re obsessed with <strong>quality</strong> and doing
              things the right way…
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              In today&apos;s ever-changing market, we&apos;re always on the
              lookout for new ideas and technology to help us serve you better.
              Nagpur City experiences rapid growth, now is the opportune moment
              to consider land investments.
            </p>
          </div>
        </div>

        {/* PNG connector (shown only on md+ screens), repositioned */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-[220px] md:top-[280px] w-full md:w-[600px] h-[120px] md:h-[200px] pointer-events-none">
          <Image
            src="/Vector.png"
            alt="Connector"
            fill
            className="object-contain"
          />
        </div>

        {/* Second pillar */}
        <div className="mt-20 md:mt-40 flex max-w-6xl mx-auto flex-col md:flex-row-reverse items-center md:items-start gap-8">
          {/* Portrait */}
          <div className="flex-shrink-0">
            <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-96 lg:h-96 rounded-full bg-white overflow-hidden">
              <Image
                src="/anish-bg.svg"
                alt="Mr. Anish Chhajed"
                fill
                sizes="(min-width: 768px) 288px, 224px"
                className="object-cover"
              />
            </div>
          </div>
          {/* Text */}
          <div className="mt-8 md:mt-0 md:mr-12 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0a2259] mb-6">
              Mr. Anish Chhajed
            </h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              With over <strong>54 successful projects</strong> and a portfolio
              of promising ventures, I am proud to lead Mahalaxmi Group as its
              Director.
            </p>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Our unwavering commitment to trust, transparency, and ethics has
              allowed us to serve more than{" "}
              <strong>10,000 satisfied clients</strong>
              and shape the construction and development industry.
            </p>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              At Mahalaxmi Group, we view each project as an opportunity to
              transform spaces and fulfill dreams, upholding a dedication to
              quality craftsmanship and meticulous{" "}
              <strong>attention to detail</strong>.
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              Join us on this journey to experience the Mahalaxmi difference,
              where we aim to leave a <strong>lasting mark</strong> on the built
              environment, built upon the pillars of integrity and excellence.
            </p>
          </div>
        </div>

        <div className="py-8 sm:py-12 px-4 text-center mt-10">
          {/* Top Border Line */}
          <div className="w-16 sm:w-64 h-0.5 bg-blue-600 mx-auto mb-6 sm:mb-16" />

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-libre font-semibold text-[#1d3557] mb-6">
            Contact Us
          </h2>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919823000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md flex items-center gap-2 transition duration-300"
            >
              <BsWhatsapp size={20} />
              <span className="text-sm sm:text-base">Send WhatsApp</span>
            </a>

            {/* Call Now Button */}
            <a
              href="tel:+919823000000"
              className="bg-[#1d70f5] hover:bg-[#1758c9] text-white px-6 py-3 rounded-md flex items-center gap-2 transition duration-300"
            >
              <Phone size={20} />
              <span className="text-sm sm:text-base">Call Now</span>
            </a>
          </div>

          {/* Bottom Border Line */}
          <div className="w-16 sm:w-64 h-0.5 bg-blue-600 mx-auto mt-6 sm:mt-16" />
        </div>
      </div>
    </section>
  );
}
