import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

interface PropertyCardProps {
  imageUrl: string | null;
  tag: string;
  title: string;
  description: string | null;
  areaRange: string;
  approval: string;
  whatsappLink: string | null;
  callLink: string;
  href?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  imageUrl,
  tag,
  title,
  description,
  areaRange,
  approval,
  whatsappLink,
  callLink,
  href,
}) => {
  return (
    <div className="max-w-md bg-[#e9f1fb] font-inter hover:scale-[1.02] transition-transform flex flex-col justify-between p-3 rounded-lg overflow-hidden shadow-lg">
      {/* Image */}
      <div className="relative">
        {href ? (
          <Link href={href}>
            <Image
              src={imageUrl || ""}
              alt={title}
              width={400}
              height={500}
              className="w-full h-56 object-cover rounded-2xl cursor-pointer"
            />
          </Link>
        ) : (
          <Image
            src={imageUrl || ""}
            alt={title}
            width={400}
            height={500}
            className="w-full h-56 object-cover rounded-2xl"
          />
        )}

        {/* Tag */}
        <span className="absolute flex items-center gap-1 top-2 left-2 bg-white text-xs px-3 py-1 rounded-full font-medium shadow">
          <Image src="/layout_icon.svg" alt="" width={15} height={15} />
          {tag}
        </span>

        {/* See More */}
        {href && (
          <Link href={href}>
            <button className="absolute cursor-pointer top-2 right-2 bg-black text-white text-sm px-4 py-1 rounded-full">
              See more
            </button>
          </Link>
        )}
      </div>

      {/* Details */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-[#1e293b]">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <p className="text-sm font-semibold text-[#1e293b] mt-3">
          {areaRange}{" "}
          <span className="text-gray-600 font-normal">| {approval}</span>
        </p>
      </div>

      {/* Buttons */}
      <div className="flex">
        <a
          href={whatsappLink || ""}
          target="_blank"
          className="w-full bg-green-500 text-nowrap text-white text-sm p-2 flex items-center justify-center gap-2 font-medium hover:bg-green-600 transition"
        >
          <BsWhatsapp size={16} /> Send WhatsApp
        </a>
        <a
          href={callLink}
          className="w-full bg-blue-600 text-white text-sm p-2 flex items-center justify-center gap-2 font-medium hover:bg-blue-700 transition"
        >
          <PhoneCall size={16} /> Call Now
        </a>
      </div>
    </div>
  );
};

export default PropertyCard;
