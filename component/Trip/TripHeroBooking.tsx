"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { FaClock, FaMountain, FaMapMarkerAlt, FaTachometerAlt } from "react-icons/fa";

export interface TripHeroBookingProps {
  originalPrice?: string;
  groupPricing?: Array<{ minPax: number; maxPax: number; pricePerPax: number }>;
  image?: string;
  gallery?: string[];
  imageAlt?: string;
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
  gallery = [],
  imageAlt = "Everest Base Camp Trek",
  price = "1,350",
  originalPrice,
  groupPricing = [],
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
  const allImages = Array.from(new Set([image, ...(gallery || [])].filter(Boolean))) as string[];
  const [isGroupDiscountsOpen, setIsGroupDiscountsOpen] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string>(image || allImages[0] || "/images/destinations/everest.jpg");

  useEffect(() => {
    if (image) setSelectedImage(image);
    else if (allImages.length > 0) setSelectedImage(allImages[0]);
  }, [image, gallery]);

  return (
    <section className={`w-full bg-white pt-6 pb-4 sm:pt-8 sm:pb-6 px-4 sm:px-5 lg:px-6 xl:px-8 ${className}`}>
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left: Landscape Trip Image (~60% width) */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-3">
            <div className="relative w-full h-[250px] sm:h-[290px] lg:h-[310px] xl:h-[330px] 2xl:h-[350px] overflow-hidden bg-gray-100 rounded-lg shadow-2xs group">
              <Image
                unoptimized
                src={selectedImage || "/images/destinations/everest.jpg"}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {allImages.length > 1 && (
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-md font-medium tracking-wide shadow">
                  {Math.max(1, allImages.indexOf(selectedImage) + 1)} / {allImages.length} Photos
                </div>
              )}
            </div>

            {/* Thumbnail Gallery Strip when multiple images are uploaded */}
            {allImages.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-thin">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded-md overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      selectedImage === img
                        ? "border-[#F26522] shadow-md ring-2 ring-[#F26522]/30 scale-[1.02]"
                        : "border-transparent opacity-75 hover:opacity-100 hover:border-gray-300"
                    }`}
                  >
                    <Image
                      unoptimized
                      src={img}
                      alt={`${imageAlt} - Photo ${idx + 1}`}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Booking Summary Card (~40% width) */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col">
            <div className="bg-[#f9fafb] border border-gray-100 rounded-xl p-5 sm:p-6 flex flex-col justify-between h-full shadow-2xs">
              {/* Top: Price & Group Discounts */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    {originalPrice && (
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
                        <span className="text-red-500 font-bold">⚡</span>
                        <span>From</span>
                        <span className="line-through text-red-500 font-medium">{currency} {originalPrice}</span>
                      </div>
                    )}
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight leading-none">
                        {currency} {price}
                      </span>
                      {!originalPrice && (
                        <span className="text-gray-500 text-xs sm:text-[13px] font-normal">
                          {priceSuffix}
                        </span>
                      )}
                    </div>
                  </div>

                  {originalPrice && (() => {
                    const origNum = Number(String(originalPrice).replace(/[^0-9.]/g, ''));
                    const curNum = Number(String(price).replace(/[^0-9.]/g, ''));
                    const diff = origNum > curNum ? origNum - curNum : 0;
                    if (diff <= 0) return null;
                    return (
                      <div className="text-right">
                        <span className="text-xs text-gray-500 block leading-tight">Save</span>
                        <span className="text-lg font-bold text-slate-900 leading-tight">
                          {currency} {diff.toLocaleString()}
                        </span>
                      </div>
                    );
                  })()}
                </div>

                {/* Group Discounts Available Accordion */}
                {groupPricing && groupPricing.length > 0 && (
                  <div className="mb-4 pt-3 border-t border-gray-200/70">
                    <button
                      type="button"
                      onClick={() => setIsGroupDiscountsOpen(!isGroupDiscountsOpen)}
                      className="w-full flex items-center justify-between text-xs sm:text-[13px] font-semibold text-slate-800 hover:text-black transition-colors cursor-pointer select-none group"
                    >
                      <span className="font-semibold text-slate-700">Group Discounts Available</span>
                      <svg
                        className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
                          isGroupDiscountsOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isGroupDiscountsOpen && (
                      <div className="mt-2.5 divide-y divide-gray-100 text-xs sm:text-[12.5px] bg-white rounded-lg p-2.5 border border-gray-100 shadow-2xs">
                        {groupPricing.map((tier, idx) => (
                          <div key={idx} className="flex items-center justify-between py-1.5 text-slate-700 first:pt-0 last:pb-0">
                            <span className="text-slate-600 font-medium">
                              {tier.minPax} - {tier.maxPax} pax
                            </span>
                            <span className="font-semibold text-slate-900">
                              {currency} {Number(tier.pricePerPax).toLocaleString()}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

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
