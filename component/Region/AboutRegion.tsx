"use client";

import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { FaPlay } from "react-icons/fa";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

interface AboutRegionProps {
  eyebrow?: string;
  heading?: string;
  paragraphs?: string[];
  ctaText?: string;
  ctaHref?: string;
  image?: string;
  className?: string;
}

export default function AboutRegion({
  eyebrow = "ABOUT THE REGION",
  heading = "The Land of Giants",
  paragraphs = [
    "The Everest region, also known as the Khumbu region, is one of the world's most iconic mountain destinations. It is home to Mount Everest (8,848.86 m), traditional Sherpa villages, ancient monasteries and spectacular Himalayan landscapes.",
    "Whether you are here for trekking, cultural exploration or simply to witness the world's highest peaks, the Everest region offers an unforgettable journey.",
  ],
  ctaText = "Explore Tours",
  ctaHref = "/tours",
  image = "/images/destinations/everest.jpg",
  className = "",
}: AboutRegionProps) {
  return (
    <section
      className={`w-full bg-white py-8 sm:py-10 lg:py-12 px-4 sm:px-5 lg:px-6 xl:px-8 ${className}`}
    >
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left Column (approx 40% width) */}
          <div className="lg:col-span-5 flex flex-col items-start justify-center text-left">
            <span className="text-[#F26522] text-xs sm:text-[13px] font-semibold tracking-wider uppercase block mb-1.5">
              {eyebrow}
            </span>
            <h2
              className={`${playfair.className} text-2xl sm:text-3xl lg:text-[36px] font-bold text-black leading-tight mb-3 sm:mb-4`}
            >
              {heading}
            </h2>
            <div className="space-y-3 mb-6 text-gray-600 text-xs sm:text-sm lg:text-[14px] leading-relaxed max-w-lg">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center bg-[#F26522] hover:bg-[#d85417] text-white font-medium text-xs sm:text-[13.5px] px-6 h-[46px] sm:h-[48px] rounded-none transition-colors shadow-2xs cursor-pointer"
            >
              {ctaText}
            </Link>
          </div>

          {/* Right Column (approx 60% width): Landscape Image with Watch Video Button */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-[240px] sm:h-[280px] lg:h-[300px] xl:h-[330px] 2xl:h-[350px] overflow-hidden bg-gray-100 rounded-none shadow-2xs group">
              <Image
                src={image}
                alt={heading}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Video control in lower-left area */}
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2.5 cursor-pointer group/video bg-black/30 hover:bg-black/45 backdrop-blur-xs py-1.5 px-3 rounded-full transition-all">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-black flex items-center justify-center shrink-0 shadow-md group-hover/video:scale-105 transition-transform">
                  <FaPlay className="w-2.5 h-2.5 text-[#F26522] ml-0.5" />
                </div>
                <span className="text-white font-medium text-xs sm:text-[13px] drop-shadow-sm select-none">
                  Watch Video
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
