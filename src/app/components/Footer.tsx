import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 text-sm">
      {/* Main Footer Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12 flex sm:flex-row flex-col justify-between">
        {/* Left: Logo + Description */}
        <div className="max-w-3xs">
          <div className="mb-4">
            <Image
              src="/logo.svg"
              alt="Mahalaxmi Group"
              width={220}
              height={220}
            />
          </div>
          <p className="text-sm font-inter text-gray-600">
            Trusted land consultants in Nagpur offering RERA & DTCP approved
            plots. Helping families and investors secure their future through
            clear, legal land ownership.
          </p>
        </div>

        {/* Right: Grid of 3 sections */}
        <div className="flex flex-col font-poppins sm:flex-row gap-8">
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Property Listings
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Layouts */}
          <div>
            <h4 className="font-semibold mb-4">Popular Layouts</h4>
            <ul className="space-y-2">
              <li>Mahalaxmi Nagar 38 – Jamtha</li>
              <li>Mahalaxmi Nagar 1 – Besa</li>
              <li>Mahalaxmi Meadows – Wardha Road</li>
              <li>
                <Link
                  href="/properties"
                  className="text-[#5C5B5B] hover:underline"
                >
                  View All Layouts →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <p>
              <strong>Phone:</strong> +91 XXXXX XXXXX
            </p>
            <p>
              <strong>WhatsApp:</strong>
              <a
                href="https://wa.me/919823000000"
                className="text-blue-600 hover:underline"
              >
                Chat Now →
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@mahalaxmiplots.com"
                className="text-blue-600 hover:underline"
              >
                info@mahalaxmiplots.com
              </a>
            </p>
            <p className="mt-2">
              <strong>Address:</strong>
              <br />
              N-103, 104 Laxmivihar Apartment,
              <br />
              Besides Hotel Airport Center point,
              <br />
              Wardha Road, Somalwada, Nagpur-440025
            </p>
            <p className="mt-2">
              <strong>Timings:</strong> Mon–Sat, 9 AM – 7 PM
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t text-xs text-center md:text-left max-w-6xl mx-auto py-4 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 Mahalaxmi Plots. All rights reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
        </div>
      </div>
      <div className="w-full h-12 flex items-center justify-center text-sm text-white [background-image:linear-gradient(to_right,#021132,#1382F4,#010925,#127CEB,#010722,#1380F1,#000319)]">
        <p className="text-center text-[#91C8FF]">
          Designed and developed by the{" "}
          <a
            href="https://realitysaint.com/" // Replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-white transition"
          >
            Reality Saint
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
