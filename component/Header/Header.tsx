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
  { name: "ABOUT US", href: "/about-us" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="w-full bg-white top-0 z-50 transition-all duration-200">
      {/* 1. TOP CONTACT / SOCIAL BAR */}
      <div className="w-full bg-white text-gray-500 text-xs border-b border-gray-200">
        <div className="site-container py-1.5 sm:py-2 flex justify-between items-center text-xs">
          {/* Left: Phone & Email */}
          <div className="flex items-center space-x-3 sm:space-x-6">
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-1.5 sm:space-x-2 text-gray-600 hover:text-[#F26522] transition-colors text-[11px] sm:text-xs"
            >
              <FaPhoneAlt className="text-gray-500 text-[10px] sm:text-xs" />
              <span className="whitespace-nowrap">+123 456 7890</span>
            </a>
            <a
              href="mailto:marketing@bztravel.com.vn"
              className="hidden md:flex items-center space-x-2 text-gray-600 hover:text-[#F26522] transition-colors text-xs"
            >
              <FaEnvelope className="text-gray-500 text-xs sm:text-sm" />
              <span>marketing@bztravel.com.vn</span>
            </a>
          </div>

          {/* Right: Social Share & Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="text-gray-500 font-normal text-xs sm:text-sm hidden sm:inline">
              Social Share
            </span>
            <div className="flex items-center space-x-2 sm:space-x-2.5">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-600 hover:text-[#F26522] transition-colors p-0.5"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-600 hover:text-[#F26522] transition-colors p-0.5"
              >
                <FaTwitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-600 hover:text-[#F26522] transition-colors p-0.5"
              >
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-gray-600 hover:text-[#F26522] transition-colors p-0.5"
              >
                <FaYoutube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION HEADER */}
      <div className="w-full bg-white border-b border-gray-100">
        <div className="site-container flex items-center justify-between relative h-14 sm:h-16 md:h-18 lg:h-20">
          {/* Left: Logo (Starts close to left edge with container padding) */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.png"
                alt="Mission Nepal Holidays"
                width={190}
                height={46}
                priority
                className="h-8 sm:h-9 md:h-11 lg:h-13 max-h-[34px] sm:max-h-[40px] lg:max-h-none w-auto object-contain transition-transform duration-200 group-hover:opacity-95"
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
          <div className="flex lg:hidden items-center space-x-2 sm:space-x-3 shrink-0">
            <Link
              href="/destination"
              className="bg-[#F26522] hover:bg-[#d8480b] text-white font-medium text-[11px] sm:text-xs px-2.5 sm:px-3 py-1.5 shadow-xs transition-colors whitespace-nowrap inline-flex items-center justify-center"
            >
              Plan Your Trip
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-[#F26522] focus:outline-none p-1 sm:p-1.5 transition-colors cursor-pointer"
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
