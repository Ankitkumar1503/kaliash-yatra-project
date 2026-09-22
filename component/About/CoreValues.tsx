"use client";

import React from "react";
import { Playfair_Display } from "next/font/google";
import { FaWalking, FaUsers, FaLeaf, FaShieldAlt } from "react-icons/fa";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export interface CoreValueItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const defaultValues: CoreValueItem[] = [
  {
    id: "authentic-experiences",
    title: "Authentic Experiences",
    description: "Real travel, real connections.",
    icon: <FaWalking className="w-5 h-5" />,
  },
  {
    id: "people-first",
    title: "People First",
    description: "Our travelers, our team and local communities come first.",
    icon: <FaWalking className="w-5 h-5" />,
  },
  {
    id: "responsible-travel",
    title: "Responsible Travel",
    description: "Travel with a positive impact.",
    icon: <FaWalking className="w-5 h-5" />,
  },
  {
    id: "trust-transparency",
    title: "Trust & Transparency",
    description: "Honest, reliable and always in your best interest.",
    icon: <FaWalking className="w-5 h-5" />,
  },
];

export interface CoreValuesProps {
  eyebrow?: string;
  title?: string;
  values?: CoreValueItem[];
  className?: string;
}

export default function CoreValues({
  eyebrow = "WHAT WE BELIEVE IN",
  title = "Our Core Values",
  values = defaultValues,
  className = "",
}: CoreValuesProps) {
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

        {/* 4-Column Horizontal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8 lg:gap-6 text-center">
          {values.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center group cursor-default"
            >
              {/* Circular light-orange icon */}
              <div className="w-12 h-12 rounded-full bg-[#FDEEE9] text-[#F26522] group-hover:bg-[#F26522] group-hover:text-white transition-all duration-300 flex items-center justify-center mb-3.5 shadow-2xs">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-[15px] font-bold text-gray-900 mb-1 group-hover:text-[#F26522] transition-colors leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-xs leading-relaxed max-w-[220px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
