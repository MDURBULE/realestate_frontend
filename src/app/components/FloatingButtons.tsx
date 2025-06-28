"use client";

import { FaPhoneAlt } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { useState } from "react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="flex flex-col items-end gap-3">
        <HoverButton
          icon={<FaPhoneAlt size={20} />}
          label="Call Now"
          href="tel:+919823000000"
          bgColor="bg-[#136EE7]"
        />
        <HoverButton
          icon={<SiWhatsapp size={20} />}
          label="Send WhatsApp"
          bgColor="bg-[#60D669]"
          href="https://wa.me/919823000000"
          target="_blank"
        />
      </div>
    </div>
  );
}

function HoverButton({
  icon,
  label,
  bgColor,
  href,
  target,
}: {
  icon: React.ReactNode;
  label: string;
  bgColor: string;
  href?: string;
  onClick?: () => void;
  target?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center text-white pl-4 pr-2 py-3 rounded-full shadow-lg ${bgColor} transition-all duration-500 ease-in-out`}
    >
      {/* Icon */}
      <span>{icon}</span>

      {/* Animated Label */}
      <span
        className={`ml-2 overflow-hidden transition-all duration-300 ease-in-out ${
          isHovered ? "max-w-xs opacity-100 ml-2" : "max-w-0 opacity-0 ml-0"
        } whitespace-nowrap`}
        style={{ transitionProperty: "max-width, opacity, margin" }}
      >
        {label}
      </span>
    </a>
  );
}
