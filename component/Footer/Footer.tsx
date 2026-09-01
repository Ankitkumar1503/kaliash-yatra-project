"use client";

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
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Press", href: "/press" },
  { label: "Gift Cards", href: "/gift-cards" },
  { label: "Magazine", href: "/magazine" },
];

const supportLinks: FooterLink[] = [
  { label: "Contact", href: "/contact" },
  { label: "Legal Notice", href: "/legal" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms and Conditions", href: "/terms" },
  { label: "Sitemap", href: "/sitemap" },
];

const otherServicesLinks: FooterLink[] = [
  { label: "Activity Finder", href: "/activity-finder" },
  { label: "Tour List", href: "/tours" },
  { label: "Flight finder", href: "/flight-finder" },
  { label: "Cruise Ticket", href: "/cruise" },
  { label: "Holiday Rental", href: "/rentals" },
  { label: "Travel Agents", href: "/agents" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-700 border-t border-gray-100">
      {/* Top Section (4 Columns) */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 — CONTACT US */}
          <div>
            <h3 className="font-bold uppercase text-black text-sm tracking-wide mb-4">
              CONTACT US
            </h3>
            <div className="flex flex-col space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">
                  Toll Free Customer Care
                </p>
                <a
                  href="tel:+12345678902666"
                  className="font-bold text-[#F26522] text-base hover:underline block"
                >
                  +(123) 456 7890 2666
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Need live support?</p>
                <a
                  href="mailto:Support@gotravel.com.vn"
                  className="font-semibold text-[#F26522] text-sm hover:underline block"
                >
                  Support@gotravel.com.vn
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 — OUR COMPANY */}
          <div>
            <h3 className="font-bold uppercase text-black text-sm tracking-wide mb-4">
              OUR COMPANY
            </h3>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — SUPPORT */}
          <div>
            <h3 className="font-bold uppercase text-black text-sm tracking-wide mb-4">
              SUPPORT
            </h3>
            <ul className="space-y-3 text-sm">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — OTHER SERVICES */}
          <div>
            <h3 className="font-bold uppercase text-black text-sm tracking-wide mb-4">
              OTHER SERVICES
            </h3>
            <ul className="space-y-3 text-sm">
              {otherServicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Thin Horizontal Divider Line */}
      <div className="border-t border-gray-200" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4 md:gap-0">
        {/* Left Side: Copyright & Links */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
          <span>© 2026 Kailashyatraguide All rights reserved.</span>
          <div className="flex items-center space-x-3 text-gray-600">
            <Link
              href="/privacy"
              className="hover:text-orange-500 transition-colors"
            >
              Privacy
            </Link>
            <span>•</span>
            <Link
              href="/terms"
              className="hover:text-orange-500 transition-colors"
            >
              Terms
            </Link>
            <span>•</span>
            <Link
              href="/sitemap"
              className="hover:text-orange-500 transition-colors"
            >
              Site Map
            </Link>
          </div>
        </div>

        {/* Right Side: Globe / Language, Social Share, 4 Black Icons */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
          {/* Globe + English (US) */}
          <div className="flex items-center space-x-2 text-gray-700 font-medium cursor-pointer hover:text-orange-500 transition-colors">
            <FaGlobe className="text-gray-600 text-sm" />
            <span>English (US)</span>
          </div>

          {/* Social Share & Icons */}
          <div className="flex items-center space-x-3">
            <span className="font-medium text-gray-700">Social Share</span>
            <div className="flex items-center space-x-2">
              <a
                href="#"
                aria-label="Facebook"
                className="p-1.5 rounded-full text-black hover:text-orange-500 transition-colors"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="p-1.5 rounded-full text-black hover:text-orange-500 transition-colors"
              >
                <FaTwitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-1.5 rounded-full text-black hover:text-orange-500 transition-colors"
              >
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="p-1.5 rounded-full text-black hover:text-orange-500 transition-colors"
              >
                <FaYoutube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
