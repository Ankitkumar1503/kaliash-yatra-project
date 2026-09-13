"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Anton } from "next/font/google";
import {
  FaStar,
  FaRegHeart,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

export interface DestinationTour {
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

const toursData: DestinationTour[] = [
  {
    id: "1",
    image: "/images/adventures/adv-3.jpg",
    badge: "BREAKFAST",
    title: "Matterhorn Glacier Trail Hike",
    location: "Zermatt, Valais, Switzerland",
    rating: 4.9,
    reviewText: "Exceptional",
    reviewCount: "2,450",
    price: "$120.00",
  },
  {
    id: "2",
    image: "/images/tours/tour-4.jpg",
    badge: "BREAKFAST",
    title: "Gornergrat Panorama & Lake Riffelsee",
    location: "Zermatt, Valais, Switzerland",
    rating: 4.8,
    reviewText: "Exceptional",
    reviewCount: "1,890",
    price: "$95.00",
  },
  {
    id: "3",
    image: "/images/tours/tour-2.jpg",
    badge: "BREAKFAST",
    title: "Zermatt Five Lakes Scenic Walk",
    location: "Sunnegga, Zermatt, Switzerland",
    rating: 4.9,
    reviewText: "Exceptional",
    reviewCount: "3,120",
    price: "$110.00",
  },
  {
    id: "4",
    image: "/images/adventures/adv-2.jpg",
    badge: "BREAKFAST",
    title: "Matterhorn Glacier Paradise 3,883m",
    location: "Klein Matterhorn, Switzerland",
    rating: 5.0,
    reviewText: "Exceptional",
    reviewCount: "2,760",
    price: "$145.00",
  },
];

export default function FeaturedDestinationTours() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <span className="text-[#F26522] text-xs sm:text-sm font-semibold tracking-wider uppercase block mb-1">
            TOP DESTINATIONS
          </span>
          <h2
            className={`${anton.className} text-2xl sm:text-3xl md:text-4xl lg:text-[40px] uppercase tracking-tight text-black leading-tight`}
          >
            FEATURED ZERMATT TOURS
          </h2>
        </div>

        {/* Carousel Container with side arrows */}
        <div className="relative group">
          {/* Left Arrow Button */}
          <button
            onClick={scrollLeft}
            aria-label="Previous tours"
            className="absolute -left-3 sm:-left-5 top-1/3 -translate-y-1/2 z-20 bg-white text-gray-800 p-3 rounded-full shadow-md border border-gray-100 hover:bg-gray-50 transition-all opacity-90 hover:opacity-100 hidden sm:flex items-center justify-center focus:outline-none cursor-pointer"
          >
            <FaChevronLeft className="w-4 h-4 text-gray-700" />
          </button>

          {/* Cards Track */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-none snap-x snap-mandatory py-2 px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {toursData.map((tour) => (
              <div
                key={tour.id}
                className="flex-shrink-0 w-[260px] sm:w-[280px] md:w-[290px] lg:w-[calc(25%-18px)] snap-start group/card cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/3] w-full shadow-2xs group-hover/card:shadow-md transition-shadow bg-gray-100 rounded-lg">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 768px) 280px, 290px"
                    className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                  />

                  {/* Top-Left Badge */}
                  <span className="bg-[#FFC107] text-black text-xs font-semibold px-2.5 py-1 absolute top-3 left-0 z-10 shadow-2xs tracking-wider uppercase">
                    {tour.badge}
                  </span>

                  {/* Top-Right Heart Wishlist */}
                  <button
                    onClick={(e) => toggleFavorite(tour.id, e)}
                    aria-label="Add to wishlist"
                    className="bg-white rounded-full p-2 absolute top-3 right-3 z-10 shadow-md hover:bg-gray-50 transition-colors text-gray-700 focus:outline-none cursor-pointer"
                  >
                    {favorites[tour.id] ? (
                      <FaHeart className="w-3.5 h-3.5 text-red-500" />
                    ) : (
                      <FaRegHeart className="w-3.5 h-3.5 text-gray-700 hover:text-red-500 transition-colors" />
                    )}
                  </button>
                </div>

                {/* Card Content Below Image */}
                <div className="pt-3 flex flex-col space-y-1">
                  <h3 className="font-semibold text-black text-sm sm:text-base line-clamp-1 group-hover/card:text-[#F26522] transition-colors">
                    {tour.title}
                  </h3>

                  <p className="text-gray-500 text-xs font-normal">
                    {tour.location}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 pt-1 flex-wrap">
                    <span className="bg-[#F26522] text-white font-bold px-1.5 py-0.5 text-xs rounded">
                      {tour.rating.toFixed(1)}
                    </span>
                    <div className="flex items-center text-amber-400 text-xs space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <span className="text-gray-500 text-xs">
                      {tour.reviewText} ({tour.reviewCount})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="pt-1 text-xs sm:text-sm text-gray-700 flex items-center">
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
      </div>
    </section>
  );
}
