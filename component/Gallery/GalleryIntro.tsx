import React from "react";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

export default function GalleryIntro() {
  return (
    <section className="w-full bg-white pt-10 sm:pt-12 md:pt-14 pb-4 sm:pb-6">
      <div className="site-container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Eyebrow */}
          <span className="inline-block text-[#F26522] text-xs sm:text-[13px] font-semibold tracking-widest uppercase mb-1.5 sm:mb-2">
            MODERN &amp; BEAUTIFUL
          </span>

          {/* Main Heading */}
          <h2
            className={`${anton.className} text-2xl sm:text-3xl md:text-4xl text-gray-900 uppercase tracking-tight mb-2.5 sm:mb-3`}
          >
            THE TRAVEL GALLERY
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal">
            A collection of moments, landscapes and experiences from journeys
            across the Himalayas and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}
