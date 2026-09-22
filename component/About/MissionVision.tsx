"use client";

import React from "react";
import { Playfair_Display } from "next/font/google";
import { FaWalking, FaCompass } from "react-icons/fa";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export interface MissionVisionItem {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const defaultItems: MissionVisionItem[] = [
  {
    id: "mission",
    eyebrow: "MEANINGFUL TRAVEL.",
    title: "OUR MISSION",
    description:
      "To create meaningful travel experiences that inspire connection and make a positive impact on people and places.",
    icon: <FaWalking className="w-5 h-5" />,
  },
  {
    id: "vision",
    eyebrow: "TRAVEL WITH PURPOSE.",
    title: "OUR VISION",
    description:
      "To be a leading travel company in the Himalayas, known for authentic experiences, responsible tourism and exceptional service.",
    icon: <FaWalking className="w-5 h-5" />,
  },
];

export interface MissionVisionProps {
  items?: MissionVisionItem[];
  className?: string;
}

export default function MissionVision({
  items = defaultItems,
  className = "",
}: MissionVisionProps) {
  return (
    <section className={`w-full bg-white py-6 sm:py-8 lg:py-10 ${className}`}>
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8F9FA] hover:bg-[#F2F4F7] transition-colors rounded-2xl p-6 sm:p-8 lg:p-9 border border-gray-100/80 shadow-2xs flex flex-col items-start justify-between min-h-[220px] sm:min-h-[240px] group"
            >
              {/* Top Row: Circular peach/orange icon */}
              <div className="w-12 h-12 rounded-full bg-[#FDEEE9] text-[#F26522] group-hover:bg-[#F26522] group-hover:text-white transition-all duration-300 flex items-center justify-center mb-5 shadow-2xs">
                {item.icon}
              </div>

              {/* Middle: Eyebrow + Title */}
              <div>
                <span className="text-[#F26522] text-xs sm:text-[13px] font-semibold tracking-wider uppercase block mb-1">
                  {item.eyebrow}
                </span>
                <h3
                  className={`${playfair.className} text-xl sm:text-2xl lg:text-[26px] font-bold text-black uppercase tracking-tight mb-2.5 leading-snug`}
                >
                  {item.title}
                </h3>

                {/* Bottom: Description */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-md">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
