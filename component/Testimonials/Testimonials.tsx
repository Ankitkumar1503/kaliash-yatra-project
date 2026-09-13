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
  quote: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    id: "1",
    avatar: "/images/testimonials/avatar-1.jpg",
    name: "-Serah j.",
    quote: '"An unforgettable journey. Highly recommended!"',
    rating: 5,
  },
  {
    id: "2",
    avatar: "/images/testimonials/avatar-2.jpg",
    name: "-Serah j.",
    quote: '"An unforgettable journey. Highly recommended!"',
    rating: 5,
  },
  {
    id: "3",
    avatar: "/images/testimonials/avatar-3.jpg",
    name: "-Serah j.",
    quote: '"An unforgettable journey. Highly recommended!"',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#F3F4F6] py-12 md:py-16 px-4 md:px-6 lg:px-8">
      {/* Max-W-7xl matching the exact container width of the entire website */}
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <span className="text-[#F26522] text-xs sm:text-sm font-semibold tracking-wider uppercase block mb-1">
            TESTIMONIALS
          </span>
          <h2
            className={`${anton.className} text-2xl sm:text-3xl md:text-4xl lg:text-[40px] uppercase tracking-tight text-black leading-none`}
          >
            WHAT OUR ADVENTURERS SAY
          </h2>
        </div>

        {/* 3 Testimonials Cards Grid across max-w-7xl */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 pt-2">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-xl shadow-xs hover:shadow-md transition-all duration-200 pt-11 pb-7 px-6 sm:px-7 flex flex-col items-center text-center border border-gray-100 group"
            >
              {/* Overlapping Top Avatar */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full overflow-hidden border-3 border-white shadow-sm bg-gray-100 group-hover:scale-105 transition-transform duration-200">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>

              {/* Review Quote */}
              <p className="text-gray-700 text-sm sm:text-base font-normal leading-relaxed mb-3">
                {item.quote}
              </p>

              {/* Reviewer Name */}
              <span className="text-gray-900 font-semibold text-xs sm:text-sm mb-2.5 block">
                {item.name}
              </span>

              {/* 5 Orange Stars */}
              <div className="flex items-center justify-center space-x-1">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="w-3.5 h-3.5 text-[#F26522] fill-[#F26522]"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
