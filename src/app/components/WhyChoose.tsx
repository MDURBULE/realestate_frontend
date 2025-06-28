import Image from "next/image";

const features = [
  {
    id: "01",
    title: "15+ Years in Nagpur Real Estate",
    image: "/why1.svg",
  },
  {
    id: "02",
    title: "500+ Plots Sold to Happy Buyers",
    image: "/why2.svg",
  },
  {
    id: "03",
    title: "RERA & DTCP Approved Layouts Only",
    image: "/why3.svg",
  },
  {
    id: "04",
    title: "Bank Loan & EMI Facility",
    image: "/why4.svg",
  },
  {
    id: "05",
    title: "Transparent Process & On-Ground Support",
    image: "/why5.svg",
  },
];

export default function WhyChoose() {
  return (
    <section className="px-4 py-30 bg-white text-center">
      <h2 className="text-3xl md:text-5xl font-libre font-bold text-gray-900">
        Why Chooose Mahalaxmi Plots?
      </h2>
      <p className="text-gray-500 mt-5 text-lg">
        Backed by integrity, legal clarity, and personalized support.
      </p>

      <div className="mt-10 max-w-7xl mx-auto grid gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="relative bg-blue-50 rounded-lg shadow-sm py-6 pb-24 px-4 flex flex-col items-start text-left transition-transform duration-300"
          >
            {/* Line */}
            <div className="w-12 h-1 bg-[#136EE7] rounded-full mb-4"></div>

            {/* Title */}
            <h3 className="text-xl font-poppins font-semibold text-[#002657CC] mb-4">
              {feature.title}
            </h3>

            {feature.id !== "02" && feature.id !== "05" ? <br /> : null}
            {feature.id === "04" ? <br /> : null}

            {/* Number */}
            <span className="text-6xl font-libre md:text-7xl self-center lg:text-9xl font-bold text-[#136EE7] relative z-0">
              {feature.id}
            </span>

            {/* Image fixed at bottom */}
            <div className="hidden sm:block absolute bottom-25 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
