"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import {
  FaStar,
  FaRegHeart,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export interface Tour {
  id: string;
  image: string;
  badge: string;
  title: string;
  location: string;
  rating: number;
  reviewText: string;
  reviewCount: string;
  price: string;
}

const tourData: Tour[] = [
  {
    id: "1",
    image: "/images/tours/tour-1.jpg",
    badge: "BREAKFAST",
    title: "The Montcalm At Brewery London City",
    location: "Westminster Borough, London",
    rating: 4.8,
    reviewText: "Exceptional",
    reviewCount: "3,014",
    price: "$89.00",
  },
  {
    id: "2",
    image: "/images/tours/tour-2.jpg",
    badge: "BREAKFAST",
    title: "Paris Eiffel Luxury Romance Tour",
    location: "7th Arrondissement, Paris",
    rating: 4.9,
    reviewText: "Exceptional",
    reviewCount: "2,450",
    price: "$120.00",
  },
  {
    id: "3",
    image: "/images/tours/tour-3.jpg",
    badge: "BREAKFAST",
    title: "Kathmandu & Everest Scenic Heritage",
    location: "Durbar Square, Kathmandu",
    rating: 4.9,
    reviewText: "Exceptional",
    reviewCount: "1,890",
    price: "$95.00",
  },
  {
    id: "4",
    image: "/images/tours/tour-4.jpg",
    badge: "BREAKFAST",
    title: "Bali Oceanfront Resort & Spa Getaway",
    location: "Nusa Dua, Bali",
    rating: 4.7,
    reviewText: "Exceptional",
    reviewCount: "4,120",
    price: "$110.00",
  },
  {
    id: "5",
    image: "/images/tours/tour-5.jpg",
    badge: "BREAKFAST",
    title: "Swiss Alps Alpine Village Expedition",
    location: "Grindelwald, Switzerland",
    rating: 5.0,
    reviewText: "Exceptional",
    reviewCount: "1,560",
    price: "$145.00",
  },
];

export default function BestTour() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 md:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 mx-auto gap-4 sm:gap-0">
        {/* Left side */}
        <div>
          <span className="text-[#F26522] text-xs sm:text-sm font-semibold tracking-wider uppercase block mb-1">
            MODERN & BEAUTIFUL
          </span>
          <h2
            className={`${playfair.className} text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight`}
          >
            Top Best Seller Tour
          </h2>
        </div>

        {/* Right side: View all Tour button */}
        <Link
          href="/tours"
          className="border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-black text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 rounded-lg transition-colors flex items-center space-x-2 shadow-2xs group"
        >
          <span>View all Tour</span>
          <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-xs">
            <FaArrowRight className="w-3.5 h-3.5 text-gray-700" />
          </span>
        </Link>
      </div>

      {/* Carousel Container */}
      <div className="relative mx-auto">
        {/* Left Arrow Button */}
        <button
          onClick={scrollLeft}
          aria-label="Previous tours"
          className="absolute -left-3 sm:-left-5 top-1/3 -translate-y-1/2 z-20 bg-white text-gray-800 p-3 rounded-full shadow-md border border-gray-100 hover:bg-gray-50 transition-all opacity-90 hover:opacity-100 hidden sm:flex items-center justify-center focus:outline-none cursor-pointer"
        >
          <FaChevronLeft className="w-4 h-4 text-gray-700" />
        </button>

        {/* Horizontal Scrollable Cards Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-none snap-x snap-mandatory py-2 px-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {tourData.map((tour) => (
            <div
              key={tour.id}
              className="flex-shrink-0 w-[260px] sm:w-[280px] md:w-[290px] lg:w-[calc(20%-19.2px)] snap-start group/card cursor-pointer"
            >
              {/* Card Image Container */}
              <div className="relative overflow-hidden aspect-square w-full shadow-2xs group-hover/card:shadow-md transition-shadow bg-gray-100">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  sizes="(max-width: 768px) 280px, 290px"
                  className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                />

                {/* Top-Left Badge */}
                <span className="bg-[#FFC107] text-black text-xs font-semibold px-3 py-1.5 absolute top-3 left-0 z-10 shadow-2xs tracking-wider uppercase">
                  {tour.badge}
                </span>

                {/* Top-Right Wishlist Heart Button */}
                <button
                  onClick={(e) => toggleFavorite(tour.id, e)}
                  aria-label="Add to wishlist"
                  className="bg-white rounded-full p-2.5 absolute top-3 right-3 z-10 shadow-md hover:bg-gray-50 transition-colors text-gray-700 focus:outline-none cursor-pointer"
                >
                  {favorites[tour.id] ? (
                    <FaHeart className="w-4 h-4 text-red-500" />
                  ) : (
                    <FaRegHeart className="w-4 h-4 text-gray-700 hover:text-red-500 transition-colors" />
                  )}
                </button>
              </div>

              {/* Card Content Below Image */}
              <div className="pt-3.5 flex flex-col space-y-1">
                {/* Title */}
                <h3 className="font-semibold text-black text-sm sm:text-base line-clamp-1 group-hover/card:text-[#F26522] transition-colors">
                  {tour.title}
                </h3>

                {/* Location Subtext */}
                <p className="text-gray-500 text-xs sm:text-sm font-normal">
                  {tour.location}
                </p>

                {/* Rating Row */}
                <div className="flex items-center gap-2 pt-1 flex-wrap">
                  {/* Rating Badge */}
                  <span className="bg-[#F26522] text-white font-bold px-2 py-0.5 text-xs rounded-md">
                    {tour.rating.toFixed(1)}
                  </span>

                  {/* 5 Filled Stars */}
                  <div className="flex items-center text-amber-400 text-xs space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  {/* Review Text & Count */}
                  <span className="text-gray-500 text-xs sm:text-sm">
                    {tour.reviewText} {tour.reviewCount} reviews
                  </span>
                </div>

                {/* Price Line */}
                <div className="pt-1.5 text-xs sm:text-sm text-gray-700 flex items-center">
                  <span>Starting from</span>
                  <span className="text-[#F26522] font-bold text-sm sm:text-base ml-1.5">
                    {tour.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={scrollRight}
          aria-label="Next tours"
          className="absolute -right-3 sm:-right-5 top-1/3 -translate-y-1/2 z-20 bg-[#F26522] hover:bg-[#d85417] text-white p-3 rounded-full shadow-md transition-all opacity-90 hover:opacity-100 hidden sm:flex items-center justify-center focus:outline-none cursor-pointer"
        >
          <FaChevronRight className="w-4 h-4 text-white" />
        </button>
      </div>
    </section>
  );
}
