"use client";

import React from "react";
import { Anton, Playfair_Display } from "next/font/google";
import {
  FaMountain,
  FaPlaceOfWorship,
  FaHeartbeat,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export interface ExperiencePill {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const defaultExperiencePills: ExperiencePill[] = [
  {
    id: "views",
    title: "Iconic Himalayan Views",
    description: "Lorem ipsum dolor sit amet",
    icon: <FaMountain className="w-5 h-5 text-[#F26522]" />,
  },
  {
    id: "monasteries",
    title: "Ancient Monasteries",
    description: "Lorem ipsum dolor sit amet",
    icon: <FaPlaceOfWorship className="w-5 h-5 text-[#F26522]" />,
  },
  {
    id: "experience",
    title: "Life-Changing Experience",
    description: "Lorem ipsum dolor sit amet",
    icon: <FaHeartbeat className="w-5 h-5 text-[#F26522]" />,
  },
  {
    id: "culture",
    title: "Sherpa Culture",
    description: "Lorem ipsum dolor sit amet",
    icon: <FaUsers className="w-5 h-5 text-[#F26522]" />,
  },
];

const defaultHighlightsList: string[] = [
  "Reach Everest Base Camp (5,364 m)",
  "Witness stunning views of Everest, Lhotse, Nuptse and Ama Dablam",
  "Explore Namche Bazaar, the vibrant Sherpa town",
  "Visit Tengboche Monastery, the spiritual heart of the region",
  "Walk through traditional Sherpa villages and suspension bridges",
  "Experience the unique culture and warm hospitality of the local people",
];

interface TripAboutAndHighlightsProps {
  aboutHeading?: string;
  paragraphs?: string[];
  experiencePills?: ExperiencePill[];
  highlightsHeading?: string;
  highlights?: string[];
  className?: string;
}

export default function TripAboutAndHighlights({
  aboutHeading = "ABOUT THE TRIP",
  paragraphs = [
    "The Everest Base Camp Trek is one of the world's most iconic trekking experiences. Follow in the footsteps of legendary climbers as you journey into the heart of the Himalayas through traditional Sherpa villages, ancient monasteries, suspension bridges and breathtaking Himalayan landscapes on your way to the base of Mount Everest.",
    "This trek offers the perfect blend of natural beauty, cultural richness and personal achievement, making it a memorable adventure for trekkers and nature enthusiasts.",
  ],
  experiencePills = defaultExperiencePills,
  highlightsHeading = "Trip Highlights",
  highlights = defaultHighlightsList,
  className = "",
}: TripAboutAndHighlightsProps) {
  // Split highlights into two balanced columns
  const half = Math.ceil(highlights.length / 2);
  const col1 = highlights.slice(0, half);
  const col2 = highlights.slice(half);

  return (
    <section id="overview" className={`w-full bg-white py-6 sm:py-8 lg:py-10 px-4 sm:px-5 lg:px-6 xl:px-8 ${className}`}>
      <div className="max-w-[1360px] mx-auto space-y-8 sm:space-y-10">
        {/* 1. ABOUT THE TRIP */}
        <div>
          <h2
            className={`${anton.className} text-xl sm:text-2xl lg:text-[28px] uppercase tracking-tight text-black mb-3`}
          >
            {aboutHeading}
          </h2>
          <div className="space-y-3 text-gray-600 text-xs sm:text-sm lg:text-[14px] leading-relaxed max-w-4xl">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* 2. 4 EXPERIENCE HIGHLIGHT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {experiencePills.map((pill) => (
            <div
              key={pill.id}
              className="bg-[#f9fafb] border border-gray-100 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-xs transition-shadow"
            >
              {/* Circular Pale-Orange Icon */}
              <div className="w-11 h-11 rounded-full bg-[#fdeee9] flex items-center justify-center shrink-0">
                {pill.icon}
              </div>
              {/* Title & Description */}
              <div className="flex flex-col">
                <span className="text-xs sm:text-[13.5px] font-bold text-black leading-snug">
                  {pill.title}
                </span>
                <span className="text-[11px] sm:text-xs text-gray-400 font-normal mt-0.5">
                  {pill.description}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 3. TRIP HIGHLIGHTS CHECKLIST */}
        <div className="pt-2">
          <h3
            className={`${playfair.className} text-lg sm:text-xl lg:text-[22px] font-bold text-black mb-4`}
          >
            {highlightsHeading}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            {/* Column 1 */}
            <div className="space-y-3">
              {col1.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <FaCheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-[13.5px] text-gray-700 leading-relaxed font-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              {col2.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <FaCheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-[13.5px] text-gray-700 leading-relaxed font-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
