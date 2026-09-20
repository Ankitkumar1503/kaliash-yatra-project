"use client";

import Image from "next/image";
import { Anton } from "next/font/google";
import { FaStar } from "react-icons/fa";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

export interface Testimonial {
  id: string;
  avatar: string;
  name: string;
  location?: string;
  quote: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    id: "1",
    avatar: "/images/testimonials/avatar-1.jpg",
    name: "Serah j.",
    location: "United Kingdom",
    quote: '"An unforgettable journey. Highly recommended!"',
    rating: 5,
  },
  {
    id: "2",
    avatar: "/images/testimonials/avatar-2.jpg",
    name: "Serah j.",
    location: "United Kingdom",
    quote: '"An unforgettable journey. Highly recommended!"',
    rating: 5,
  },
  {
    id: "3",
    avatar: "/images/testimonials/avatar-3.jpg",
    name: "Serah j.",
    location: "United Kingdom",
    quote: '"An unforgettable journey. Highly recommended!"',
    rating: 5,
  },
  {
    id: "4",
    avatar: "/images/testimonials/avatar-3.jpg",
    name: "Serah j.",
    location: "United Kingdom",
    quote: '"An unforgettable journey. Highly recommended!"',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-6 lg:px-8">
      {/* Container matching the exact container width of the website */}
      <div className="max-w-[1470px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[1470px] mx-auto mb-6 md:mb-6">
          <span className="text-[#F26522] text-xs sm:text-sm font-semibold tracking-wider uppercase block mb-1">
            TESTIMONIALS
          </span>
          <h2
            className={`${anton.className} text-2xl sm:text-3xl md:text-4xl lg:text-[40px] uppercase tracking-tight text-black leading-none`}
          >
            WHAT OUR ADVENTURERS SAY
          </h2>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8 pt-2">
          {testimonialsData.map((item) => {
            const displayName = item.name.replace(/^[-–—\s]+/, "");
            const rawQuote = item.quote
              .replace(/^["“”\s]+/, "")
              .replace(/["“”\s]+$/, "");
            const formattedQuote = `“${rawQuote}”`;

            return (
              <div
                key={item.id}
                className="bg-[#F8F8F8] p-6 sm:p-7 md:p-8 flex flex-col justify-between text-left min-h-[260px] sm:min-h-[270px] transition-all duration-200"
              >
                <div>
                  {/* Top-Left Stars */}
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar
                        key={i}
                        className="w-3.5 h-3.5 text-[#EAB308] fill-[#EAB308]"
                      />
                    ))}
                  </div>

                  {/* Left-Aligned Testimonial Quote */}
                  <p className="text-[#52525B] text-[15px] sm:text-[16px] font-normal leading-relaxed mt-7 sm:mt-8">
                    {formattedQuote}
                  </p>
                </div>

                {/* Bottom-Left User Information */}
                <div className="flex items-center gap-3.5 mt-9 sm:mt-10 pt-2">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 bg-gray-200">
                    <Image
                      src={item.avatar}
                      alt={displayName}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center text-left">
                    <span className="text-gray-900 font-bold sm:font-semibold text-[15px] sm:text-[16px] leading-snug">
                      {displayName}
                    </span>
                    {item.location && (
                      <span className="text-gray-500 text-xs sm:text-[13px] leading-tight font-normal mt-0.5">
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
