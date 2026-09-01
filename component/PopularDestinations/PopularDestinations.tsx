"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export interface Destination {
  id: string;
  name: string;
  toursCount: string;
  image: string;
}

const destinationData: Destination[] = [
  {
    id: "1",
    name: "Kathmandu, Nepal",
    toursCount: "18 Tours",
    image: "/images/destinations/kathmandu.jpg",
  },
  {
    id: "2",
    name: "Pokhara, Nepal",
    toursCount: "18 Tours",
    image: "/images/destinations/pokhara.jpg",
  },
  {
    id: "3",
    name: "Mount Kailash, Tibet",
    toursCount: "18 Tours",
    image: "/images/destinations/mount-kailash.jpg",
  },
  {
    id: "4",
    name: "Lumbini, Nepal",
    toursCount: "18 Tours",
    image: "/images/destinations/lumbini.jpg",
  },
  {
    id: "5",
    name: "Everest Base Camp, Nepal",
    toursCount: "18 Tours",
    image: "/images/destinations/everest.jpg",
  },
];

export default function PopularDestinations() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -280, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 280, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 md:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-8 max-w-7xl mx-auto">
        {/* Left Side */}
        <div>
          <span className="text-[#F26522] text-xs sm:text-sm font-semibold tracking-wider uppercase block mb-1">
            MODERN & BEAUTIFUL
          </span>
          <h2
            className={`${playfair.className} text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight`}
          >
            Popular Destinations
          </h2>
        </div>

        {/* Right Side: Arrow Navigation Buttons */}
        <div className="flex items-center space-x-5">
          <button
            onClick={handleScrollLeft}
            aria-label="Previous destinations"
            className="text-black hover:text-gray-600 transition-colors p-1 focus:outline-none cursor-pointer"
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleScrollRight}
            aria-label="Next destinations"
            className="text-[#F26522] hover:text-[#d85417] transition-colors p-1 focus:outline-none cursor-pointer"
          >
            <FaArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Card Carousel Track */}
      <div className="max-w-7xl mx-auto relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-none snap-x snap-mandatory py-2 px-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {destinationData.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[230px] sm:w-[250px] lg:w-[calc(20%-19.2px)] snap-start group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square overflow-hidden mb-3 shadow-2xs group-hover:shadow-md transition-shadow bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 250px, 230px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Below Image Centered Text */}
              <div className="text-center px-1">
                <h3 className="font-bold text-black text-sm sm:text-base leading-snug group-hover:text-[#F26522] transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm font-normal mt-0.5">
                  {item.toursCount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Centered Pagination Dots */}
      <div className="flex justify-center items-center space-x-2 mt-8">
        <button
          onClick={() => setActiveIndex(0)}
          aria-label="Slide 1"
          className={`h-1.5 rounded-full transition-all duration-300 ${
            activeIndex === 0
              ? "w-7 bg-[#F26522]"
              : "w-3 bg-gray-300 hover:bg-gray-400"
          }`}
        />
        <button
          onClick={() => setActiveIndex(1)}
          aria-label="Slide 2"
          className={`h-1.5 rounded-full transition-all duration-300 ${
            activeIndex === 1
              ? "w-7 bg-[#F26522]"
              : "w-3 bg-gray-300 hover:bg-gray-400"
          }`}
        />
        <button
          onClick={() => setActiveIndex(2)}
          aria-label="Slide 3"
          className={`h-1.5 rounded-full transition-all duration-300 ${
            activeIndex === 2
              ? "w-7 bg-[#F26522]"
              : "w-3 bg-gray-300 hover:bg-gray-400"
          }`}
        />
      </div>
    </section>
  );
}
