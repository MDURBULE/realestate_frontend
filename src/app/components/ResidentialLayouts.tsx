"use client";

import Image from "next/image";
import { mockProperties } from "../data/properties";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ResidentialLayouts() {
  const router = useRouter();
  return (
    <section className="px-4 py-10 bg-white text-center">
      <h2 className="text-3xl font-libre md:text-5xl font-bold text-gray-900 mb-25">
        Explore Our Residential Layouts
      </h2>

      <div className="grid gap-6 font-inter max-w-7xl mt-10 mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {mockProperties.map((layout, index) => (
          <div
            key={index}
            className="bg-blue-50 text-left hover:scale-[1.02] transition-transform rounded-xl overflow-hidden shadow-md w-full max-w-xs"
          >
            <div className="relative">
              {layout.imageUrl ? (
                <Link href={`/property/${layout.slug}`}>
                  <Image
                    src={layout.imageUrl || ""}
                    alt={layout.title}
                    width={400}
                    height={500}
                    className="w-full h-64 object-cover rounded-2xl cursor-pointer"
                  />
                </Link>
              ) : (
                <Image
                  src={layout.imageUrl || ""}
                  alt={layout.title}
                  width={400}
                  height={500}
                  className="w-full h-64 object-cover rounded-2xl"
                />
              )}

              {/* Tag */}
              <span className="absolute flex items-center gap-1 top-2 left-2 bg-white text-xs px-3 py-1 rounded-full font-medium shadow">
                <Image src="/layout_icon.svg" alt="" width={15} height={15} />
                {layout.tag}
              </span>
            </div>

            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-800">
                {layout.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{layout.location}</p>
              <p className="text-sm text-gray-900 mt-2">
                {layout.approval}
                <span className="font-normal text-gray-600">
                  | {layout.layoutStatus}
                </span>
              </p>

              <button
                onClick={() => router.push(`/property/${layout.slug}`)}
                className="w-full mt-4 cursor-pointer bg-[#136EE7] text-white py-2 rounded-full font-semibold"
              >
                See more
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
