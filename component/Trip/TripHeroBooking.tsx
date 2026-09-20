"use client";

import Image from "next/image";
import Link from "next/link";
import { FaClock, FaMountain, FaMapMarkerAlt, FaTachometerAlt } from "react-icons/fa";

export interface TripHeroBookingProps {
  image?: string;
  price?: string;
  currency?: string;
  priceSuffix?: string;
  duration?: string;
  difficulty?: string;
  region?: string;
  maxAltitude?: string;
  checkAvailabilityHref?: string;
  downloadItineraryHref?: string;
  planTripHref?: string;
  className?: string;
}

export default function TripHeroBooking({
  image = "/images/destinations/everest.jpg",
  price = "1,350",
  currency = "USD",
  priceSuffix = "Per Person",
  duration = "9 Days",
  difficulty = "Moderate Difficulty",
  region = "Everest Region",
  maxAltitude = "5,545 m",
  checkAvailabilityHref = "#dates-price",
  downloadItineraryHref = "#",
  planTripHref = "/contact",
  className = "",
}: TripHeroBookingProps) {
  return (
    <section className={`w-full bg-white pt-6 pb-4 sm:pt-8 sm:pb-6 px-4 sm:px-5 lg:px-6 xl:px-8 ${className}`}>
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left: Landscape Trip Image (~60% width) */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="relative w-full h-[250px] sm:h-[290px] lg:h-[310px] xl:h-[330px] 2xl:h-[350px] overflow-hidden bg-gray-100 rounded-none shadow-2xs group">
              <Image
                src={image}
                alt="Everest Base Camp Trek"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right: Booking Summary Card (~40% width) */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col">
            <div className="bg-[#f9fafb] border border-gray-100 rounded-xl p-5 sm:p-6 flex flex-col justify-between h-full shadow-2xs">
              {/* Top: Starting From & Price */}
              <div>
                <span className="text-gray-500 text-xs font-normal block mb-1">
                  Starting From
                </span>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl sm:text-[28px] font-bold text-black tracking-tight leading-none">
                    {currency} {price}
                  </span>
                  <span className="text-gray-500 text-xs sm:text-[13px] font-normal">
                    {priceSuffix}
                  </span>
                </div>

                {/* 2x2 Specs Grid */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 py-3 border-t border-b border-gray-200/70 mb-5">
                  <div className="flex items-center gap-2 text-gray-700 text-xs sm:text-[13px]">
                    <FaClock className="w-3.5 h-3.5 text-[#F26522] shrink-0" />
                    <span>{duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-xs sm:text-[13px]">
                    <FaTachometerAlt className="w-3.5 h-3.5 text-[#F26522] shrink-0" />
                    <span className="truncate">{difficulty}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-xs sm:text-[13px]">
                    <FaMapMarkerAlt className="w-3.5 h-3.5 text-[#F26522] shrink-0" />
                    <span className="truncate">{region}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-xs sm:text-[13px]">
                    <FaMountain className="w-3.5 h-3.5 text-[#F26522] shrink-0" />
                    <span>Max Altitude: {maxAltitude}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2.5">
                  <a
                    href={checkAvailabilityHref}
                    className="w-full bg-[#F26522] hover:bg-[#d85417] text-white font-medium text-xs sm:text-[13.5px] h-10 sm:h-11 flex items-center justify-center rounded-md transition-colors shadow-2xs cursor-pointer group"
                  >
                    <span>Check Availability</span>
                    <span className="ml-1.5 transition-transform group-hover:translate-x-1">→</span>
                  </a>
                  <a
                    href={downloadItineraryHref}
                    className="w-full bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-medium text-xs sm:text-[13px] h-10 sm:h-11 flex items-center justify-center rounded-md transition-colors shadow-2xs cursor-pointer"
                  >
                    Download Itinerary
                  </a>
                </div>
              </div>

              {/* Bottom: Custom Plan Prompt */}
              <div className="pt-4 mt-4 border-t border-gray-200/70 flex items-center justify-between text-xs sm:text-[13px]">
                <div>
                  <p className="font-semibold text-black leading-tight">Need a custom plan?</p>
                  <p className="text-gray-500 text-[11px] sm:text-xs leading-tight mt-0.5">
                    Talk to our travel experts.
                  </p>
                </div>
                <Link
                  href={planTripHref}
                  className="text-[#F26522] hover:text-[#d85417] font-semibold flex items-center gap-1 text-xs sm:text-[13px] transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>Plan My Trip</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
