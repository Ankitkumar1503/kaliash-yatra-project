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
  { name: "HOTEL", href: "/hotel" },
  { name: "FLIGHT", href: "/flight" },
  { name: "DESTINATION", href: "/destination" },
  { name: "PAGES", href: "/pages" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="w-full bg-white shadow-xs sticky top-0 z-50">
      {/* 1. Top Bar */}
      <div className="bg-gray-100 text-gray-500 text-xs border-b border-gray-200">
        <div className="hidden sm:flex justify-between items-center mx-auto px-4 md:px-6 lg:px-8 py-2">
          {/* Left side: phone icon + "+123 456 7890", and envelope icon + "marketing@bztravel.com.vn" */}
          <div className="flex items-center space-x-6">
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 hover:text-[#F26522] transition-colors"
            >
              <FaPhoneAlt className="text-gray-400 text-xs" />
              <span>+123 456 7890</span>
            </a>
            <a
              href="mailto:marketing@bztravel.com.vn"
              className="flex items-center space-x-2 hover:text-[#F26522] transition-colors"
            >
              <FaEnvelope className="text-gray-400 text-xs" />
              <span>marketing@bztravel.com.vn</span>
            </a>
          </div>

          {/* Right side: "Social Share" text followed by 4 small icons in a row */}
          <div className="flex items-center space-x-3">
            <span className="font-medium text-gray-500">Social Share</span>
            <div className="flex items-center space-x-2">
              <a
                href="#"
                aria-label="Facebook"
                className="p-1 rounded-full text-gray-500 hover:text-[#F26522] transition-colors"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="p-1 rounded-full text-gray-500 hover:text-[#F26522] transition-colors"
              >
                <FaTwitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-1 rounded-full text-gray-500 hover:text-[#F26522] transition-colors"
              >
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="p-1 rounded-full text-gray-500 hover:text-[#F26522] transition-colors"
              >
                <FaYoutube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navbar */}
      <div className="bg-white">
        <div className="mx-auto px-4 md:px-6 lg:px-8 py-3.5 flex justify-between items-center relative">
          {/* Left: Horizontal Nav Menu (Desktop) & Hamburger Icon (Mobile) */}
          <div className="flex items-center">
            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-black hover:text-[#F26522] focus:outline-none p-1"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-bold text-black hover:text-[#F26522] transition-colors uppercase tracking-wider text-xs md:text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Center: Logo Image */}
          <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none">
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.png"
                alt="Mission Nepal Holidays Logo"
                width={160}
                height={50}
                priority
                // className="h-9 md:h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Right: Two Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* 1. Solid orange rounded button */}
            <Link
              href="/explore"
              className="bg-[#F26522] hover:bg-[#d85417] text-white font-semibold text-sm px-5 py-2.5 shadow-xs hover:shadow-md transition-all duration-200 whitespace-nowrap"
            >
              Become An Explore
            </Link>
            {/* 2. Outlined bordered button */}
            <Link
              href="/login"
              className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-800 font-medium text-sm px-5 py-2.5 transition-all duration-200 whitespace-nowrap"
            >
              Login / Register
            </Link>
          </div>

          {/* Mobile Right Compact Login Button */}
          <div className="md:hidden">
            <Link
              href="/login"
              className="text-xs font-semibold text-[#F26522] border border-[#F26522] px-3 py-1.5 rounded-full hover:bg-[#F26522] hover:text-white transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Collapsible Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-5 shadow-lg">
          <nav className="flex flex-col space-y-4 mb-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-bold text-black hover:text-[#F26522] transition-colors uppercase tracking-wider text-base pb-2 border-b border-gray-50"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col space-y-3">
            <Link
              href="/explore"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center bg-[#F26522] hover:bg-[#d85417] text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-xs transition-colors"
            >
              Become An Explore
            </Link>
            <Link
              href="/login"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center border border-gray-300 bg-white hover:bg-gray-50 text-gray-800 font-medium text-sm px-5 py-2.5 rounded-full transition-colors"
            >
              Login / Register
            </Link>
          </div>

          {/* Mobile Stacked Top Bar Info */}
          <div className="sm:hidden mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500 space-y-3">
            <div className="flex flex-col space-y-2">
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 hover:text-[#F26522]"
              >
                <FaPhoneAlt className="text-gray-400" />
                <span>+123 456 7890</span>
              </a>
              <a
                href="mailto:marketing@bztravel.com.vn"
                className="flex items-center space-x-2 hover:text-[#F26522]"
              >
                <FaEnvelope className="text-gray-400" />
                <span>marketing@bztravel.com.vn</span>
              </a>
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="font-medium text-gray-500">Social Share</span>
              <div className="flex items-center space-x-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-gray-500 hover:text-[#F26522]"
                >
                  <FaFacebookF className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-gray-500 hover:text-[#F26522]"
                >
                  <FaTwitter className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-gray-500 hover:text-[#F26522]"
                >
                  <FaInstagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="text-gray-500 hover:text-[#F26522]"
                >
                  <FaYoutube className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
