"use client";

import React from "react";
import { FaHiking, FaCompass, FaUsers, FaStar } from "react-icons/fa";

export interface StatItem {
  id: string;
  value: string;
  label: string;
  icon: React.ReactNode;
}

const statsData: StatItem[] = [
  {
    id: "1",
    value: "8+",
    label: "Popular Treks",
    icon: <FaHiking className="w-5 h-5 text-[#F26522]" />,
  },
  {
    id: "2",
    value: "20+",
    label: "Destinations",
    icon: <FaCompass className="w-5 h-5 text-[#F26522]" />,
  },
  {
    id: "3",
    value: "5,000+",
    label: "Happy Travellers",
    icon: <FaUsers className="w-5 h-5 text-[#F26522]" />,
  },
  {
    id: "4",
    value: "4.8",
    label: "Average Rating",
    icon: <FaStar className="w-4.5 h-4.5 text-[#F26522]" />,
  },
];

interface RegionStatsProps {
  stats?: StatItem[];
  className?: string;
}

export default function RegionStats({
  stats = statsData,
  className = "",
}: RegionStatsProps) {
  return (
    <section
      className={`w-full bg-white pb-8 sm:pb-10 lg:pb-12 px-4 sm:px-5 lg:px-6 xl:px-8 ${className}`}
    >
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#f9fafb] border border-gray-100 rounded-xl sm:rounded-2xl py-3.5 px-4 sm:px-5 flex items-center gap-3.5 shadow-2xs hover:shadow-xs transition-shadow"
            >
              {/* Circular Pale-Orange Icon */}
              <div className="w-11 h-11 rounded-full bg-[#fdeee9] flex items-center justify-center shrink-0">
                {stat.icon}
              </div>

              {/* Value and Label */}
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-black leading-tight tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-500 font-normal leading-tight mt-0.5">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
