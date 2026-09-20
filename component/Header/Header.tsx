"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";

interface NavItem {
  name: string;
  href: string;
}

const navLinks: NavItem[] = [
  { name: "HOME", href: "/" },
  { name: "NEPAL", href: "/destination?country=nepal" },
  { name: "BHUTAN", href: "/destination?country=bhutan" },
  { name: "TIBET", href: "/destination?country=tibet" },
  { name: "INDIA", href: "/destination?country=india" },
  { name: "ABOUT US", href: "/pages" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="w-full bg-white top-0 z-50 transition-all duration-200">
      {/* 1. TOP CONTACT / SOCIAL BAR */}
      <div className="w-full bg-white text-gray-500 text-xs border-b border-gray-200">
        <div className="max-w-[1800px] mx-auto py-2 flex justify-between items-center">
          {/* Left: Phone & Email */}
          <div className="flex items-center space-x-6">
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 text-gray-600 hover:text-[#F26522] transition-colors"
            >
              <FaPhoneAlt className="text-gray-500 text-xs sm:text-sm" />
              <span>+123 456 7890</span>
            </a>
            <a
              href="mailto:marketing@bztravel.com.vn"
              className="hidden sm:flex items-center space-x-2 text-gray-600 hover:text-[#F26522] transition-colors"
            >
              <FaEnvelope className="text-gray-500 text-xs sm:text-sm" />
              <span>marketing@bztravel.com.vn</span>
            </a>
          </div>

          {/* Right: Social Share & Icons */}
          <div className="flex items-center space-x-3">
            <span className="text-gray-500 font-normal text-xs sm:text-sm">Social Share</span>
            <div className="flex items-center space-x-2.5">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-600 hover:text-[#F26522] transition-colors"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-600 hover:text-[#F26522] transition-colors"
              >
                <FaTwitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-600 hover:text-[#F26522] transition-colors"
              >
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-gray-600 hover:text-[#F26522] transition-colors"
              >
                <FaYoutube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION HEADER */}
      <div className="w-full bg-white border-b border-gray-100">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between relative h-16 sm:h-18 lg:h-20">
          {/* Left: Logo (Starts close to left edge with container padding) */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.png"
                alt="Mission Nepal Holidays"
                width={190}
                height={46}
                priority
                className="h-10 sm:h-11 md:h-12 lg:h-13 w-auto object-contain transition-transform duration-200 group-hover:opacity-95"
              />
            </Link>
          </div>

          {/* Center: Navigation (Centered in the header) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium md:font-semibold text-black hover:text-[#F26522] transition-colors uppercase tracking-wide text-xs md:text-[13px] whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: Plan Your Trip Button (Aligned to the right edge) */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              href="/destination"
              className="bg-[#F26522] hover:bg-[#d8480b] text-white font-medium text-xs sm:text-[13px] px-4 sm:px-5 py-2 shadow-xs hover:shadow-md transition-all duration-200 whitespace-nowrap inline-flex items-center justify-center cursor-pointer"
            >
              Plan Your Trip
            </Link>
          </div>

          {/* Mobile Right: CTA Button + Hamburger Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-3">
            <Link
              href="/destination"
              className="bg-[#F26522] hover:bg-[#d8480b] text-white font-medium text-xs px-3 py-1.5 shadow-xs transition-colors whitespace-nowrap inline-flex items-center justify-center"
            >
              Plan Your Trip
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-[#F26522] focus:outline-none p-1.5 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <FaTimes className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-5 shadow-lg animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-3.5 mb-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-semibold text-black hover:text-[#F26522] transition-colors uppercase tracking-wide text-xs sm:text-[13px] py-1.5 border-b border-gray-50"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/destination"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full text-center bg-[#F26522] hover:bg-[#d8480b] text-white font-medium text-xs sm:text-[13px] px-4 py-2 shadow-xs transition-colors mb-4"
          >
            Plan Your Trip
          </Link>

          {/* Mobile Contact Info */}
          <div className="sm:hidden pt-3 border-t border-gray-100 text-xs text-gray-500 space-y-2">
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 text-gray-600 hover:text-[#F26522]"
            >
              <FaPhoneAlt className="text-gray-400 text-xs" />
              <span>+123 456 7890</span>
            </a>
            <a
              href="mailto:marketing@bztravel.com.vn"
              className="flex items-center space-x-2 text-gray-600 hover:text-[#F26522]"
            >
              <FaEnvelope className="text-gray-400 text-xs" />
              <span>marketing@bztravel.com.vn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
