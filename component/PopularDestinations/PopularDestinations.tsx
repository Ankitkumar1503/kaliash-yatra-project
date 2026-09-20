"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export interface Destination {
  id: string;
  name: string;
  description: string;
  toursCount?: string;
  image: string;
  href?: string;
}

const destinationData: Destination[] = [
  {
    id: "1",
    name: "Nepal",
    description: "Explore the Himalayas",
    toursCount: "120+ Tours",
    image: "/images/destinations/everest.jpg",
    href: "/destination",
  },
  {
    id: "2",
    name: "Bhutan",
    description: "Discover the Land of Happiness",
    toursCount: "28+ Tours",
    image: "/images/destinations/pokhara.jpg",
    href: "/destination",
  },
  {
    id: "3",
    name: "Tibet",
    description: "Journey to the Roof of the World",
    toursCount: "15+ Tours",
    image: "/images/destinations/mount-kailash.jpg",
    href: "/destination",
  },
  {
    id: "4",
    name: "India",
    description: "Experience timeless traditions",
    toursCount: "22+ Tours",
    image: "/images/destinations/lumbini.jpg",
    href: "/destination",
  },
  {
    id: "5",
    name: "International",
    description: "Explore beyond the Himalayas",
    toursCount: "18+ Tours",
    image: "/images/destinations/kathmandu.jpg",
    href: "/destination",
  },
];

export default function PopularDestinations() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-white py-10 sm:py-12 md:py-14 px-4 sm:px-5 lg:px-6 xl:px-8">
      <div className="max-w-[1360px] mx-auto">
        {/* Section Header: Left Title block + Right Minimal Arrows */}
        <div className="flex justify-between items-end mb-5 sm:mb-7">
          {/* Left Side */}
          <div>
            <span className="text-[#F26522] text-xs sm:text-[13px] font-medium tracking-wider uppercase block mb-1">
              MODERN &amp; BEAUTIFUL
            </span>
            <h2
              className={`${playfair.className} text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-semibold text-black leading-tight`}
            >
              Popular Destinations
            </h2>
          </div>

          {/* Right Side: Minimal Navigation Arrows */}
          <div className="flex items-center space-x-3 sm:space-x-4 pb-1">
            <button
              onClick={handleScrollLeft}
              aria-label="Previous destinations"
              className="text-black hover:opacity-75 transition-opacity p-1 cursor-pointer focus:outline-none"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.75"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <button
              onClick={handleScrollRight}
              aria-label="Next destinations"
              className="text-[#F26522] hover:opacity-75 transition-opacity p-1 cursor-pointer focus:outline-none"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.75"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* 5 Destination Cards Carousel Track */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-5 xl:gap-6 overflow-x-auto scroll-smooth scrollbar-none snap-x snap-mandatory py-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {destinationData.map((item) => (
              <Link
                key={item.id}
                href={item.href || "/destination"}
                className="flex-shrink-0 w-[260px] sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] lg:w-[calc((100%-4*1.5rem)/5)] snap-start group cursor-pointer"
              >
                {/* 2:1 Aspect Ratio Landscape Image */}
                <div className="relative w-full aspect-[2/1] overflow-hidden mb-2.5 sm:mb-3 bg-gray-100 rounded-none">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Centered Destination Name and Description */}
                <div className="text-center px-1">
                  <h3 className="font-semibold text-black text-sm sm:text-base leading-snug group-hover:text-[#F26522] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-700 text-[11px] sm:text-xs md:text-[13px] font-normal leading-relaxed mt-0.5">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
