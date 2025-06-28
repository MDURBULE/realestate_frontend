import Image from "next/image";

const features = [
  {
    icon: "/metro.png",
    label: "Near MIHAN, Outer Ring Road, Metro",
  },
  {
    icon: "/hospital.png",
    label: "Close to AIIMS, Hospitals, Schools",
  },
  {
    icon: "/airport.png",
    label: "10 Min from Nagpur International Airport",
  },
  {
    icon: "/investor.png",
    label: "Ideal for Home Builders & Investors",
  },
];

export default function GrowthZones() {
  return (
    <section className="bg-white text-center">
      {/* Top content with padding */}
      <div className="py-16 px-4">
        <h2 className="text-3xl font-libre md:text-5xl font-bold text-gray-900">
          Plots in Nagpur&apos;s Fastest Growing Zones
        </h2>
        <p className="text-gray-500 text-lg mt-5 mb-8">
          Plots in the leading areas of the Nagpur
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto px-4 mb-10">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center text-left gap-4 bg-blue-50 rounded-xl shadow-sm w-full hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={50}
                height={50}
                className="object-contain flex-shrink-0"
              />
              <p className="text-[#4F5C6D] font-poppins text-base sm:text-lg font-medium leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Map Image with no padding */}
      <div className="relative w-full mx-auto h-60 sm:h-96 md:h-[900px] rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/growing-zones.png"
          alt="Nagpur Map"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
}
