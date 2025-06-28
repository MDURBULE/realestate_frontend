import Image from "next/image";

export default function ContactAgent() {
  return (
    <section className="py-20 px-4 bg-white text-center ">
      <h2 className="text-2xl md:text-5xl font-libre font-semibold text-gray-800">
        Want to Know Prices or Availability?
      </h2>
      <p className="text-lg text-gray-500 mt-1 mb-30">
        Let&apos;s have a quick chat!
      </p>
      <div className="relative font-inter flex bg-[url('/wave-line.svg')] bg-no-repeat bg-center flex-col md:flex-row justify-center items-center gap-8">
        {/* Decorative Text Behind */}
        <h1 className="absolute left-0 md:left-20 text-start top-0 text-4xl md:text-7xl font-extrabold text-[#090089] select-none leading-snug hidden md:block z-0">
          GET <br /> INSTANT <br /> RESPONSE
        </h1>
        {/* Wave Line Behind Card */}
        <Image
          width={100}
          height={100}
          src="/wave-line.svg"
          alt="decorative line"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 z-0 pointer-events-none hidden md:block"
        />
        {/* Card */}
        <div className="relative z-10 w-full max-w-md bg-[#E6F1FF] p-2  rounded-xl shadow-lg overflow-hidden">
          {/* Image */}
          <div className="relative w-full h-72">
            <Image
              src="/agent.jpg"
              alt="Agent"
              fill
              className="object-cover rounded-xl"
            />
            <span className="absolute top-2 text-black flex items-center gap-2 left-2 bg-white text-xs px-3 py-1 rounded-full font-semibold shadow">
              <Image src="/solar_star.svg" alt="" width={10} height={10} /> Best
              Agent
            </span>
          </div>
          {/* Form */}
          <div className="p-6 text-left">
            <h3 className="text-2xl font-bold text-center mb-5 text-[#002657]">
              Get Help
            </h3>

            <form className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-white placeholder:text-[#818181] text-gray-800 focus:outline-none p-3 border border-gray-300 rounded-md text-sm"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full bg-white placeholder:text-[#818181] text-gray-800 focus:outline-none p-3 border border-gray-300 rounded-md text-sm"
              />
              <textarea
                placeholder="Message"
                rows={3}
                className="w-full bg-white placeholder:text-[#818181] text-gray-800 focus:outline-none p-3 border border-gray-300 rounded-md text-sm resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700"
              >
                REQUEST A CALLBACK
              </button>
              <p className="text-xs text-gray-500 text-center mt-1">
                *Get instant response
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
