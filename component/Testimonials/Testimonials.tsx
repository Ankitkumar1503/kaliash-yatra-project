"use client";

import Image from "next/image";
import Link from "next/link";
import { Anton } from "next/font/google";
import { FaStar, FaPen } from "react-icons/fa";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

export interface Testimonial {
  id: string;
  avatar?: string | null;
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
  loadError?: string;
  tripId?: number;
  tripTitle?: string;
  reviewHref?: string;
}

export default function Testimonials({
  eyebrow = "TRAVELERS LOVE US",
  title = "WHAT OUR TRAVELERS SAY",
  testimonials,
  className = "",
  loadError,
  reviewHref = "/reviews",
}: TestimonialsProps = {}) {
  const displayTestimonials =
    testimonials !== undefined ? testimonials : testimonialsData;

  return (
    <section className={`w-full py-10 sm:py-12 md:py-14 bg-white ${className}`}>
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 mb-8">
          <div className="text-center sm:text-left">
            <span className="text-[#F26522] text-xs sm:text-[13px] font-medium tracking-wider uppercase block mb-1">
              {eyebrow}
            </span>
            <h2
              className={`${anton.className} text-2xl sm:text-3xl lg:text-[34px] uppercase tracking-tight text-black leading-tight`}
            >
              {title}
            </h2>
          </div>

          <Link
            href={reviewHref}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#F26522] hover:bg-[#d85417] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-2xs transition-colors cursor-pointer shrink-0"
          >
            <FaPen className="w-3 h-3" />
            <span>Write a Review</span>
          </Link>
        </div>

        {/* Reviews Content or Polished Empty State */}
        {loadError ? (
          <p className="text-gray-600 text-sm text-center py-6" role="alert">
            {loadError}
          </p>
        ) : displayTestimonials.length === 0 ? (
          <div className="max-w-xl mx-auto my-6 p-8 sm:p-10 bg-[#f9fafb] border border-gray-200/80 rounded-2xl text-center shadow-2xs">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#F26522]/10 flex items-center justify-center text-[#F26522]">
              <FaStar className="w-6 h-6 fill-[#F26522]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              Be the First to Review This Trip
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed max-w-md mx-auto">
              Have you embarked on this journey? Share your experience, memorable moments, and advice to help fellow pilgrims and travelers plan their adventure.
            </p>
            <Link
              href={reviewHref}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#F26522] hover:bg-[#d85417] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <FaPen className="w-3 h-3" />
              <span>Write the First Review</span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 pt-1">
            {displayTestimonials.map((item) => {
              const displayName = item.name.replace(/^[-–—\s]+/, "");
              const rawQuote = item.quote
                .replace(/^["“‘\s]+/, "")
                .replace(/["”’\s]+$/, "");
              const formattedQuote = `"${rawQuote}"`;

              return (
                <div
                  key={item.id}
                  className="bg-[#F8F8F8] p-5 sm:p-6 flex flex-col justify-between text-left min-h-[240px] rounded-xl border border-gray-100 shadow-2xs hover:shadow-sm transition-all duration-200"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex items-center space-x-1">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="w-3.5 h-3.5 text-[#EAB308] fill-[#EAB308]"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-[#52525B] text-xs sm:text-[13.5px] font-normal leading-relaxed mt-4">
                      {formattedQuote}
                    </p>
                  </div>

                  {/* User info */}
                  <div className="flex items-center gap-3 mt-6 pt-2 border-t border-gray-200/50">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 bg-gray-200">
                      {item.avatar ? (
                        <Image
                          unoptimized
                          src={item.avatar}
                          alt={displayName}
                          fill
                          sizes="36px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#F26522]/15 text-[#F26522] font-bold text-xs uppercase">
                          {displayName.charAt(0) || "T"}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col justify-center text-left">
                      <span className="text-gray-900 font-semibold text-xs sm:text-[13.5px] leading-snug">
                        {displayName}
                      </span>
                      {item.location && (
                        <span className="text-gray-500 text-[11px] sm:text-xs leading-tight mt-0.5">
                          {item.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
