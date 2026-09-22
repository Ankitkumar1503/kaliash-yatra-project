"use client";

import React from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { FaWalking } from "react-icons/fa";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export interface TeamFeature {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const defaultFeatures: TeamFeature[] = [
  {
    id: "local-knowledge",
    title: "Local Knowledge",
    description: "Authentic insights",
    icon: <FaWalking className="w-3.5 h-3.5" />,
  },
  {
    id: "personalized-care",
    title: "Personalized Care",
    description: "Tailor-made support",
    icon: <FaWalking className="w-3.5 h-3.5" />,
  },
  {
    id: "passionate-team",
    title: "Passionate Team",
    description: "Travel lovers",
    icon: <FaWalking className="w-3.5 h-3.5" />,
  },
  {
    id: "positive-impact",
    title: "Positive Impact",
    description: "Stronger communities",
    icon: <FaWalking className="w-3.5 h-3.5" />,
  },
];

export interface TeamDifferenceProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  features?: TeamFeature[];
  image?: string;
  className?: string;
}

export default function TeamDifference({
  eyebrow = "WHAT MAKES OUR TEAM DIFFERENT",
  heading = "More Than a Travel Company",
  description = "Our team combines local knowledge, professional expertise and a genuine love for the Himalayas. We believe in responsible travel, meaningful connections and creating a positive impact in the communities we work with.",
  features = defaultFeatures,
  image = "/images/destinations/kathmandu.jpg",
  className = "",
}: TeamDifferenceProps) {
  return (
    <section className={`w-full bg-white py-10 sm:py-12 md:py-14 ${className}`}>
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          {/* Left Column: Landscape Image (1st on mobile) */}
          <div className="lg:col-span-6 order-1">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] overflow-hidden bg-gray-100 shadow-2xs group rounded-none">
              <Image
                src={image}
                alt={heading}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-103 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Content + 2-Column Features (2nd on mobile) */}
          <div className="lg:col-span-6 order-2 flex flex-col items-start justify-center text-left">
            <span className="text-[#F26522] text-xs sm:text-[13px] font-semibold tracking-wider uppercase block mb-1.5">
              {eyebrow}
            </span>

            <h2
              className={`${playfair.className} text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-bold text-black leading-tight mb-3.5`}
            >
              {heading}
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 max-w-lg">
              {description}
            </p>

            {/* 2-Column Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full pt-1">
              {features.map((item) => (
                <div key={item.id} className="flex items-start gap-3 group">
                  {/* Small peach/orange circular icon */}
                  <div className="w-7 h-7 rounded-full bg-[#FDEEE9] text-[#F26522] group-hover:bg-[#F26522] group-hover:text-white transition-colors flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    {item.icon}
                  </div>

                  {/* Title & Description */}
                  <div className="flex flex-col">
                    <h3 className="text-xs sm:text-[13.5px] font-bold text-gray-900 group-hover:text-[#F26522] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-[11px] sm:text-xs leading-snug mt-0.5">
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
