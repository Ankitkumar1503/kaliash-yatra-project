"use client";

import React from "react";
import { FaWalking, FaCalendarCheck, FaRoute, FaLightbulb } from "react-icons/fa";

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const defaultBenefits: BenefitItem[] = [
  {
    id: "expert-advice",
    title: "Expert Advice",
    description: "Information from experienced travel specialists.",
    icon: <FaWalking className="w-5 h-5" />,
  },
  {
    id: "updated-2026",
    title: "Updated 2026",
    description: "Fresh and relevant travel information.",
    icon: <FaWalking className="w-5 h-5" />,
  },
  {
    id: "easy-to-follow",
    title: "Easy to Follow",
    description: "Clear and practical guidance.",
    icon: <FaWalking className="w-5 h-5" />,
  },
  {
    id: "travel-smarter",
    title: "Travel Smarter",
    description: "Plan your journey with confidence.",
    icon: <FaWalking className="w-5 h-5" />,
  },
];

export interface GuideBenefitsProps {
  items?: BenefitItem[];
  className?: string;
}

export default function GuideBenefits({
  items = defaultBenefits,
  className = "",
}: GuideBenefitsProps) {
  return (
    <section className={`w-full bg-white py-4 sm:py-6 lg:py-7 ${className}`}>
      <div className="site-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8F9FA] hover:bg-[#F2F4F7] transition-colors rounded-2xl lg:rounded-full px-4 sm:px-5 py-3 sm:py-3.5 flex items-center gap-3.5 sm:gap-4 border border-gray-100/70 shadow-2xs group cursor-default"
            >
              {/* Circular light-orange icon container */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FDEEE9] text-[#F26522] group-hover:bg-[#F26522] group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0 shadow-2xs">
                {item.icon}
              </div>

              {/* Text content */}
              <div className="flex flex-col min-w-0 pr-1">
                <h3 className="font-bold text-gray-900 text-xs sm:text-[13.5px] leading-tight group-hover:text-[#F26522] transition-colors truncate">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-[11px] sm:text-xs leading-snug mt-0.5 line-clamp-2">
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
