"use client";

import React from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { FaMountain, FaUsers, FaHiking, FaPray } from "react-icons/fa";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export interface ExperienceHighlight {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const defaultHighlights: ExperienceHighlight[] = [
  {
    id: "mountains",
    title: "Breathtaking Mountains",
    description: "Get up close to the world's highest peaks.",
    icon: <FaMountain className="w-4 h-4 text-[#F26522]" />,
  },
  {
    id: "culture",
    title: "Sherpa Culture",
    description: "Experience unique traditions and warm hospitality.",
    icon: <FaUsers className="w-4 h-4 text-[#F26522]" />,
  },
  {
    id: "trekking",
    title: "Trekking Adventures",
    description: "World-famous trails for every level.",
    icon: <FaHiking className="w-4 h-4 text-[#F26522]" />,
  },
  {
    id: "spirituality",
    title: "Monasteries & Spirituality",
    description: "Discover ancient monasteries and Buddhist heritage.",
    icon: <FaPray className="w-4 h-4 text-[#F26522]" />,
  },
];

interface UnforgettableExperiencesProps {
  eyebrow?: string;
  heading?: string;
  paragraphs?: string[];
  highlights?: ExperienceHighlight[];
  experiences?: Array<{ title: string; description: string; icon?: string }>;
  image?: string;
  className?: string;
}

export default function UnforgettableExperiences({
  eyebrow = "WHY VISIT EVEREST REGION",
  heading = "Unforgettable Experiences",
  paragraphs = [
    "The Everest region, also known as the Khumbu region, is one of the world's most iconic mountain destinations. It features Mount Everest (8,848.86 m), charming Sherpa villages, historic monasteries and breathtaking Himalayan scenery.",
    "Whether you're here for trekking, cultural exploration or simply to witness the world's highest mountains, the Everest region promises an authentic, memorable journey filled with unforgettable landscape encounters and experiences.",
  ],
  highlights,
  experiences,
  image = "/images/destinations/everest.jpg",
  className = "",
}: UnforgettableExperiencesProps) {
  const displayHighlights =
    experiences && experiences.length > 0
      ? experiences.map((exp, idx) => ({
          id: `exp-${idx}`,
          title: exp.title,
          description: exp.description,
          icon: defaultHighlights[idx % defaultHighlights.length].icon,
        }))
      : highlights || defaultHighlights;
  return (
    <section
      className={`w-full bg-white py-8 sm:py-10 lg:py-12 px-4 sm:px-5 lg:px-6 xl:px-8 ${className}`}
    >
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left Column: Landscape Image (~42% on desktop) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative w-full h-[240px] sm:h-[290px] lg:h-[330px] xl:h-[360px] overflow-hidden bg-gray-100 rounded-none shadow-2xs group">
              <Image
                src={image}
                alt={heading}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Editorial & Highlights Grid (~58% on desktop) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center text-left">
            <span className="text-[#F26522] text-xs sm:text-[13px] font-semibold tracking-wider uppercase block mb-1.5">
              {eyebrow}
            </span>
            <h2
              className={`${playfair.className} text-2xl sm:text-3xl lg:text-[34px] font-bold text-black leading-tight mb-3 sm:mb-4`}
            >
              {heading}
            </h2>

            {/* Two Narrative Paragraphs */}
            <div className="space-y-3 mb-6 text-gray-600 text-xs sm:text-sm lg:text-[14px] leading-relaxed">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* 2x2 Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-1">
              {displayHighlights.map((item) => (
                <div key={item.id} className="flex items-start gap-3 sm:gap-3.5">
                  {/* Circular Pale-Orange Icon */}
                  <div className="w-10 h-10 rounded-full bg-[#fdeee9] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    {item.icon}
                  </div>
                  {/* Title & Description */}
                  <div>
                    <h3 className="font-bold text-black text-xs sm:text-sm leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
