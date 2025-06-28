import Image from "next/image";

export default function ContactAgentHorizontal() {
  return (
    <div className="bg-[#e9f2ff] rounded-3xl p-4 md:p-8 my-10 text-black flex flex-col md:flex-row items-center md:items-start gap-6 shadow-md w-full max-w-5xl mx-auto">
      {/* Agent Image Section */}
      <div className="relative w-full md:w-1/2 rounded-xl overflow-hidden">
        <Image
          src="/agent.svg" // Replace with your agent image path
          alt="Agent"
          width={500}
          height={400}
          className="rounded-xl object-cover w-full h-auto"
        />
        <span className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded-full shadow text-yellow-600 font-semibold">
          🏅 Best Agent
        </span>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 space-y-4 flex flex-col items-center font-inter">
        <h3 className="text-xl md:text-2xl font-bold text-[#012B6D] md:text-left">
          Contact an Expert
        </h3>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500 bg-white"
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500 bg-white"
        />
        <textarea
          rows={4}
          placeholder="Message"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500 bg-white"
        />
        <button className="bg-[#0A5EFF] hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg w-full transition">
          REQUEST A CALLBACK
        </button>
        <p className="text-xs text-gray-500 text-center">
          *Get instant response
        </p>
      </div>
    </div>
  );
}
