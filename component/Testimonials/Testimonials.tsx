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

export interface TestimonialsProps {
  eyebrow?: string;
  title?: string;
  testimonials?: Testimonial[];
  className?: string;
}

export default function Testimonials({
  eyebrow = "TESTIMONIALS",
  title = "WHAT OUR ADVENTURERS SAY",
  testimonials,
  className = "",
}: TestimonialsProps = {}) {
  const displayTestimonials =
    testimonials && testimonials.length > 0 ? testimonials : testimonialsData;

  return (
    <section className={`w-full py-10 sm:py-12 md:py-14 ${className}`}>
      {/* Container matching the exact container width of the website */}
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-7">
          <span className="text-[#F26522] text-xs sm:text-[13px] font-medium tracking-wider uppercase block mb-1">
            {eyebrow}
          </span>
          <h2
            className={`${anton.className} text-2xl sm:text-3xl lg:text-[34px] uppercase tracking-tight text-black leading-none`}
          >
            {title}
          </h2>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-6 xl:gap-7 pt-1">
          {displayTestimonials.map((item) => {
            const displayName = item.name.replace(/^[-–—\s]+/, "");
            const rawQuote = item.quote
              .replace(/^["“”\s]+/, "")
              .replace(/["“”\s]+$/, "");
            const formattedQuote = `“${rawQuote}”`;

            return (
              <div
                key={item.id}
                className="bg-[#F8F8F8] p-5 sm:p-6 md:p-7 flex flex-col justify-between text-left min-h-[240px] sm:min-h-[250px] transition-all duration-200"
              >
                <div>
                  {/* Top-Left Stars */}
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar
                        key={i}
                        className="w-3 h-3 text-[#EAB308] fill-[#EAB308]"
                      />
                    ))}
                  </div>

                  {/* Left-Aligned Testimonial Quote */}
                  <p className="text-[#52525B] text-xs sm:text-[14px] font-normal leading-relaxed mt-5 sm:mt-6">
                    {formattedQuote}
                  </p>
                </div>

                {/* Bottom-Left User Information */}
                <div className="flex items-center gap-3 mt-7 sm:mt-8 pt-2">
                  <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden shrink-0 bg-gray-200">
                    <Image
                      src={item.avatar}
                      alt={displayName}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center text-left">
                    <span className="text-gray-900 font-semibold text-xs sm:text-[14px] leading-snug">
                      {displayName}
                    </span>
                    {item.location && (
                      <span className="text-gray-500 text-[11px] sm:text-xs leading-tight font-normal mt-0.5">
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
