"use client";

import Image from "next/image";
import { useRef } from "react";

const testimonials = [
  {
    name: "Mr. Patil, Nagpur",
    text: "We booked a plot in Mahalaxmi Nagar 1 and the process was smooth, transparent, and truly legal. Great experience!",
    title: "It was a good investment",
    image: "/person1.svg",
  },
  {
    name: "Mrs. Sharma, Amravati",
    text: "Buying a plot in Mahalaxmi Nagar 2 was the best decision. The staff was helpful, and all documentation was handled professionally.",
    title: "Highly recommended!",
    image: "/person2.svg",
  },
  {
    name: "Dr. Kale, Akola",
    text: "The entire plot booking experience was hassle-free. I appreciate the team’s honesty and timely updates throughout the process.",
    title: "Trustworthy and professional",
    image: "/person1.svg",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.9; // Adjust scroll step as needed

      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-libre md:text-5xl font-bold text-gray-900 leading-tight">
          Read review,
          <br />
          Trust your peers
        </h2>
        <p className="text-gray-500 font-poppins mt-5 mb-12 text-base sm:text-lg">
          People from all areas of life have worked with us
        </p>
      </div>

      <div className="flex flex-col font-poppins md:flex-row items-center md:items-start justify-center gap-12 max-w-6xl mx-auto px-2">
        {/* Left Info Column */}
        <div className="flex flex-col items-center md:items-start gap-6 w-full max-w-md text-center md:text-left">
          <Image
            src="/commas.svg"
            alt="quote"
            width={100}
            height={100}
            className="w-16 h-16 md:w-24 md:h-24"
          />
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700">
            What our customers <br /> are saying
          </p>
          <div className="flex items-center gap-4 justify-center md:justify-start w-full">
            <button
              className="text-blue-600 text-2xl hover:scale-110 transition"
              onClick={() => scroll("left")}
            >
              ←
            </button>
            <div className="h-1 bg-gray-300 flex-1 max-w-[80px] mt-1 rounded-full" />
            <button
              className="text-blue-600 text-2xl hover:scale-110 transition"
              onClick={() => scroll("right")}
            >
              →
            </button>
          </div>
        </div>

        {/* Testimonials Scrollable Section */}
        <div
          className="w-full overflow-x-auto scrollbar-hide -mx-2 md:mx-0 px-2"
          ref={scrollRef}
        >
          <div className="flex gap-6 snap-x snap-mandatory">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-lg shadow flex gap-4 flex-shrink-0 snap-center w-[85vw] sm:w-[75vw] md:w-[400px] max-w-full"
              >
                <Image
                  src={t.image}
                  alt={t.name}
                  width={100}
                  height={100}
                  className="rounded-xl object-cover"
                />
                <div className="flex flex-col gap-2 text-left">
                  <h4 className="font-bold text-gray-800 text-md">{t.title}</h4>
                  <p className="text-sm text-gray-600 italic">{t.text}</p>
                  <p className="text-sm text-gray-800 text-right font-semibold">
                    ~ {t.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
