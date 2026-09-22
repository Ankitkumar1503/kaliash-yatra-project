"use client";

import React from "react";
import { Playfair_Display } from "next/font/google";
import { FaWalking } from "react-icons/fa";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export interface TeamGlanceItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const defaultGlanceItems: TeamGlanceItem[] = [
  {
    id: "local-experts",
    title: "Local Experts",
    description: "Across Nepal, Bhutan, Tibet & India",
    icon: <FaWalking className="w-5 h-5" />,
  },
  {
    id: "team-members",
    title: "30+",
    description: "Team Members",
    icon: <FaWalking className="w-5 h-5" />,
  },
  {
    id: "experience",
    title: "15+",
    description: "Years of Experience",
    icon: <FaWalking className="w-5 h-5" />,
  },
  {
    id: "destinations",
    title: "4",
    description: "Destinations",
    icon: <FaWalking className="w-5 h-5" />,
  },
  {
    id: "one-goal",
    title: "One Goal",
    description: "Creating Meaningful Journeys",
    icon: <FaWalking className="w-5 h-5" />,
  },
];

export interface TeamAtAGlanceProps {
  eyebrow?: string;
  title?: string;
  items?: TeamGlanceItem[];
  className?: string;
}

export default function TeamAtAGlance({
  eyebrow = "OUR TEAM AT A GLANCE",
  title = "The People Behind Every Journey",
  items = defaultGlanceItems,
  className = "",
}: TeamAtAGlanceProps) {
  return (
    <section className={`w-full bg-[#F8F9FA] py-12 sm:py-14 md:py-16 ${className}`}>
      <div className="site-container">
        {/* Centered Heading */}
        <div className="text-center max-w-xl mx-auto mb-9 sm:mb-11">
          <span className="text-[#F26522] text-xs sm:text-[13px] font-semibold tracking-wider uppercase block mb-1.5">
            {eyebrow}
          </span>
          <h2
            className={`${playfair.className} text-2xl sm:text-3xl lg:text-[34px] font-bold text-black leading-tight`}
          >
            {title}
          </h2>
        </div>

        {/* 5-Column Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-7 lg:gap-6 text-center">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center group cursor-default"
            >
              {/* Circular light-orange icon */}
              <div className="w-12 h-12 rounded-full bg-[#FDEEE9] text-[#F26522] group-hover:bg-[#F26522] group-hover:text-white transition-all duration-300 flex items-center justify-center mb-3 shadow-2xs">
                {item.icon}
              </div>

              {/* Title / Stat Value */}
              <h3 className="text-sm sm:text-[15px] font-bold text-gray-900 mb-0.5 group-hover:text-[#F26522] transition-colors leading-snug">
                {item.title}
              </h3>

              {/* Supporting Text */}
              <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed max-w-[170px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
