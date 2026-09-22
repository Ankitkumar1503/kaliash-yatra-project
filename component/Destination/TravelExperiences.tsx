"use client";

import { Playfair_Display } from "next/font/google";
import {
  FaHiking,
  FaLandmark,
  FaMountain,
  FaPray,
  FaLeaf,
} from "react-icons/fa";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export interface TravelExperienceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const experiencesList: TravelExperienceItem[] = [
  {
    id: "trekking",
    title: "Trekking",
    description: "Walk through the Himalayas.",
    icon: <FaHiking className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    id: "cultural-tours",
    title: "Cultural Tours",
    description: "Discover ancient traditions.",
    icon: <FaLandmark className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    id: "adventure",
    title: "Adventure",
    description: "Push your limits.",
    icon: <FaMountain className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    id: "spiritual-journeys",
    title: "Spiritual Journeys",
    description: "Travel with purpose.",
    icon: <FaPray className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
  {
    id: "wildlife-nature",
    title: "Wildlife & Nature",
    description: "Connect with pristine beauty.",
    icon: <FaLeaf className="w-5 h-5 sm:w-6 sm:h-6" />,
  },
];

import Link from "next/link";

export default function TravelExperiences() {
  return (
    <section className="w-full bg-[#f9fafb] py-12 sm:py-16 md:py-20 border-y border-gray-100">
      <div className="max-w-[1360px] mx-auto">
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-[#F26522] text-xs sm:text-[13px] font-semibold tracking-wider uppercase block mb-1.5">
            MORE THAN JUST PLACES
          </span>
          <h2
            className={`${playfair.className} text-2xl sm:text-3xl lg:text-[36px] font-semibold text-black leading-tight`}
          >
            Choose Your Travel Experience
          </h2>
        </div>

        {/* 5 Columns Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 text-center">
          {experiencesList.map((item) => (
            <Link
              key={item.id}
              href="/activities"
              className="flex flex-col items-center group cursor-pointer block"
            >
              {/* Circular Pale-Orange Icon Container */}
              <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#fdeee9] text-[#F26522] flex items-center justify-center mb-3 sm:mb-3.5 shadow-2xs group-hover:bg-[#F26522] group-hover:text-white group-hover:scale-105 transition-all duration-200">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-black text-sm sm:text-[15px] mb-1 group-hover:text-[#F26522] transition-colors leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed max-w-[170px]">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
