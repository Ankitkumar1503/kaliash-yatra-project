"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaGlobe,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

interface FooterLink {
  label: string;
  href: string;
}

const companyLinks: FooterLink[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Press", href: "/press" },
  { label: "Gift Cards", href: "/gift-cards" },
  { label: "Magazine", href: "/magazine" },
];

const supportLinks: FooterLink[] = [
  { label: "Contact", href: "/contact" },
  { label: "Legal Notice", href: "/legal-documents" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms and Conditions", href: "/terms" },
  { label: "Sitemap", href: "/sitemap" },
];

const otherServicesLinks: FooterLink[] = [
  { label: "Activity Finder", href: "/activity-finder" },
  { label: "Tour List", href: "/destination" },
  { label: "Flight finder", href: "/flights" },
  { label: "Cruise Ticket", href: "/cruise" },
  { label: "Holiday Rental", href: "/rentals" },
  { label: "Travel Agents", href: "/agents" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-700 border-t border-gray-100">
      {/* Main Footer Container (5 Columns with Vertical Dividers) */}
      <div className="site-container py-8 sm:py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-7 sm:gap-8 lg:gap-0">
          {/* Column 1 — Logo + Description (approx 25%) */}
          <div className="lg:col-span-3 xl:col-span-3 pr-0 lg:pr-6 xl:pr-8 flex flex-col justify-start">
            <Link href="/" className="inline-block mb-3 sm:mb-3.5">
              <Image
                src="/logo.png"
                alt="Mission Nepal Holidays"
                width={190}
                height={46}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-500 text-xs sm:text-[13.5px] leading-relaxed max-w-[280px] sm:max-w-xs font-normal">
              At Mission Nepal Holidays, we design meaningful journeys across
              the Himalayas and beyond, creating unforgettable travel
              experiences.
            </p>
          </div>

          {/* Column 2 — CONTACT US (approx 18%) */}
          <div className="lg:col-span-2 xl:col-span-2 px-0 lg:px-6 xl:px-8 border-l-0 lg:border-l border-gray-200 flex flex-col justify-start">
            <h3 className="font-semibold uppercase text-black text-xs sm:text-[13.5px] tracking-wide mb-2.5 sm:mb-4">
              CONTACT US
            </h3>
            <div className="space-y-3 sm:space-y-3.5 text-xs sm:text-sm">
              <div>
                <p className="text-gray-500 text-[11px] sm:text-xs mb-0.5 font-normal">
                  Toll Free Customer Care
                </p>
                <a
                  href="tel:+12345678902666"
                  className="font-semibold text-[#F26522] text-xs sm:text-[14px] hover:underline block"
                >
                  +(123) 456 7890 2666
                </a>
              </div>
              <div className="pt-0.5">
                <p className="text-gray-500 text-[11px] sm:text-xs mb-0.5 font-normal">
                  Need live support?
                </p>
                <a
                  href="mailto:Support@gotravel.com.vn"
                  className="font-medium text-[#F26522] text-xs sm:text-[13px] hover:underline block"
                >
                  Support@gotravel.com.vn
                </a>
              </div>
            </div>
          </div>

          {/* Column 3 — OUR COMPANY (approx 18%) */}
          <div className="lg:col-span-2 xl:col-span-2 px-0 lg:px-6 xl:px-8 border-l-0 lg:border-l border-gray-200 flex flex-col justify-start">
            <h3 className="font-semibold uppercase text-black text-xs sm:text-[13.5px] tracking-wide mb-2.5 sm:mb-4">
              OUR COMPANY
            </h3>
            <ul className="space-y-1.5 sm:space-y-2.5 text-xs sm:text-[13px]">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#F26522] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — SUPPORT (approx 18%) */}
          <div className="lg:col-span-2 xl:col-span-2 px-0 lg:px-6 xl:px-8 border-l-0 lg:border-l border-gray-200 flex flex-col justify-start">
            <h3 className="font-semibold uppercase text-black text-xs sm:text-[13.5px] tracking-wide mb-2.5 sm:mb-4">
              SUPPORT
            </h3>
            <ul className="space-y-1.5 sm:space-y-2.5 text-xs sm:text-[13px]">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#F26522] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 — OTHER SERVICES (approx 21%) */}
          <div className="lg:col-span-3 xl:col-span-3 pl-0 lg:pl-6 xl:pl-8 border-l-0 lg:border-l border-gray-200 flex flex-col justify-start">
            <h3 className="font-semibold uppercase text-black text-xs sm:text-[13.5px] tracking-wide mb-2.5 sm:mb-4">
              OTHER SERVICES
            </h3>
            <ul className="space-y-1.5 sm:space-y-2.5 text-xs sm:text-[13px]">
              {otherServicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#F26522] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-200">
        <div className="site-container py-3.5 sm:py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-3 md:gap-0">
          {/* Left Side: Copyright & Legal Links */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 sm:gap-x-5 gap-y-1.5 text-center sm:text-left">
            <span className="font-normal text-gray-600">
              © 2026 Kailashyatraguide All rights reserved.
            </span>
            <div className="flex items-center space-x-3 sm:space-x-4 text-gray-600 font-medium">
              <Link
                href="/privacy"
                className="hover:text-[#F26522] transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-[#F26522] transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-[#F26522] transition-colors"
              >
                Site Map
              </Link>
            </div>
          </div>

          {/* Right Side: Language, Social Share, Icons */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 sm:gap-x-6 gap-y-1.5">
            {/* Globe + English (US) */}
            <div className="flex items-center space-x-2 text-gray-600 font-medium cursor-pointer hover:text-[#F26522] transition-colors">
              <FaGlobe className="text-gray-600 text-xs sm:text-sm" />
              <span>English (US)</span>
            </div>

            {/* Social Share & Icons */}
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              <span className="font-medium text-gray-600">Social Share</span>
              <div className="flex items-center space-x-2.5 sm:space-x-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-black hover:text-[#F26522] transition-colors p-0.5"
                >
                  <FaFacebookF className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-black hover:text-[#F26522] transition-colors p-0.5"
                >
                  <FaTwitter className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-black hover:text-[#F26522] transition-colors p-0.5"
                >
                  <FaInstagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="text-black hover:text-[#F26522] transition-colors p-0.5"
                >
                  <FaYoutube className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
