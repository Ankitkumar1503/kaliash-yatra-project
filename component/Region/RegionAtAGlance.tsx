"use client";

import React from "react";
import { Playfair_Display } from "next/font/google";
import {
  FaMountain,
  FaCalendarAlt,
  FaHiking,
  FaPlane,
  FaMapMarkerAlt,
} from "react-icons/fa";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export interface GlanceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const glanceData: GlanceItem[] = [
  {
    id: "altitude",
    title: "Altitude",
    description: "2,800 m – 5,545 m",
    icon: <FaMountain className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    id: "best-time",
    title: "Best Time",
    description: "Mar – May · Sep – Nov",
    icon: <FaCalendarAlt className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    id: "activities",
    title: "Main Activities",
    description: "Trekking · Sightseeing · Culture",
    icon: <FaHiking className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    id: "airport",
    title: "Nearest Airport",
    description: "Lukla (Tenzing-Hillary Airport)",
    icon: <FaPlane className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    id: "region",
    title: "Region",
    description: "Solukhumbu, Nepal",
    icon: <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
];

interface RegionAtAGlanceProps {
  eyebrow?: string;
  title?: string;
  items?: GlanceItem[];
  className?: string;
}

export default function RegionAtAGlance({
  eyebrow = "AT A GLANCE",
  title = "Everest Region at a Glance",
  items = glanceData,
  className = "",
}: RegionAtAGlanceProps) {
  return (
    <section
      className={`w-full bg-[#f9fafb] py-10 sm:py-12 md:py-14 border-y border-gray-100 px-4 sm:px-5 lg:px-6 xl:px-8 ${className}`}
    >
      <div className="max-w-[1360px] mx-auto">
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-[#F26522] text-xs sm:text-[13px] font-semibold tracking-wider uppercase block mb-1.5">
            {eyebrow}
          </span>
          <h2
            className={`${playfair.className} text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-semibold text-black leading-tight`}
          >
            {title}
          </h2>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 text-center">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center group cursor-default"
            >
              {/* Circular Pale-Orange Icon */}
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#fdeee9] text-[#F26522] flex items-center justify-center mb-3 sm:mb-3.5 shadow-2xs group-hover:bg-[#F26522] group-hover:text-white group-hover:scale-105 transition-all duration-200">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-black text-sm sm:text-[15px] mb-1 group-hover:text-[#F26522] transition-colors leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed max-w-[180px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
