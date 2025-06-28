import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-cover bg-no-repeat bg-[url('/hero.svg')] h-[80vh] md:h-screen relative">
      <section className="container mx-auto flex flex-col items-center justify-center md:justify-start md:flex-row h-full px-4 md:px-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/5 to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl px-4 md:px-8 ml-0 md:ml-20 text-white w-full">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight font-libre break-words">
            Find Your Perfect Plot in Nagpur – RERA & DTCP Approved Layouts
          </h1>
          <p className="mt-4 text-base font-poppins md:text-lg">
            Residential Plots in Prime Locations Like Jamtha, Besa, MIHAN &
            Wardha Road
          </p>
          <div className="mt-6 flex flex-col text-center sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full">
            <a
              href="tel:+919823000000"
              className="bg-blue-600 font-inter hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold w-full sm:w-auto"
            >
              Call Our Expert
            </a>
            <Link
              href="/properties"
              className="bg-transparent font-inter text-gray-100 border border-gray-300 px-6 py-3 rounded-md font-semibold shadow-xl w-full sm:w-auto"
            >
              View Available Layouts
            </Link>
          </div>
          <div className="mt-6 flex items-center space-x-3">
            <div className="flex -space-x-2">
              <Image
                src="/users.svg"
                className="border-white"
                alt="users"
                width={100}
                height={100}
              />
            </div>
            <p className="text-white font-poppins font-medium text-sm sm:text-lg">
              Trusted by 5000+ buyers
            </p>
          </div>
        </div>
      </section>
      <div className="absolute -bottom-0 flex justify-center w-full">
        <Image
          src="/down_arrow.svg"
          alt="down_arrow"
          className="w-10 h-10 animate-bounce"
          width={40}
          height={40}
        />
      </div>
    </section>
  );
}
