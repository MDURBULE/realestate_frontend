"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close menu on outside click
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isMobileMenuOpen]);

  // Close menu on navigation
  function handleNav() {
    setIsMobileMenuOpen(false);
  }

  return (
    <nav className="text-black px-4 md:px-6 py-6 font-inter sticky top-0 z-50 shadow-md bg-white w-full">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left: Logo + Links (lg only) */}
        <div className="flex items-center space-x-6">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Mahalaxmi Logo"
              width={100}
              height={100}
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center space-x-10 ">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
              { label: "Blogs", href: "#" },
            ].map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`hover:text-black transition-all duration-300 ${
                    pathname === href
                      ? "text-black font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Middle: Search (lg only) */}
        <div className="hidden lg:flex items-center gap-2 border border-gray-300 rounded-full">
          <input
            type="text"
            placeholder="Search anything..."
            className="px-4 py-2 w-48 xl:w-60 rounded-full focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-4 py-3 rounded-r-full">
            <IoSearch />
          </button>
        </div>

        {/* Right: Listings + Call + Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Link
            href="/properties"
            className={`hidden lg:block font-medium transition-colors duration-300 ${
              pathname === "/properties" ? "text-black" : "text-gray-600"
            }`}
          >
            Ongoings Listings
          </Link>
          <a
            href="tel:+919823000000"
            className="bg-blue-600 flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm"
          >
            <FaPhoneAlt /> Call Now
          </a>

          {/* Hamburger Icon */}
          <button
            className="lg:hidden ml-2"
            aria-label="Open menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 z-[999] bg-black/40 transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-lg p-8 flex flex-col gap-8 transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 text-2xl"
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            &times;
          </button>

          <ul className="flex flex-col space-y-6 text-lg font-semibold mt-12">
            <li>
              <Link href="/" onClick={handleNav}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={handleNav}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/properties" onClick={handleNav}>
                Properties
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={handleNav}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="mt-auto flex flex-col gap-4">
            <a
              href="tel:+919823000000"
              className="bg-blue-600 flex items-center gap-2 text-white p-4 rounded-full justify-center"
            >
              <FaPhoneAlt /> Call Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
