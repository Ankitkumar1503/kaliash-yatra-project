"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Lora, Anton } from "next/font/google";
import {
  FaStar,
  FaRegHeart,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const lora = Lora({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500"],
});

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

export interface Adventure {
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

const adventureData: Adventure[] = [
  {
    id: "1",
    image: "/images/adventures/adv-1.jpg",
    badge: "BREAKFAST",
    title: "Kailash Mansarovar Trek",
    location: "Darchen, Tibet Autonomous Region",
    rating: 4.8,
    reviewText: "Exceptional",
    reviewCount: "3,014",
    price: "$89.00",
  },
  {
    id: "2",
    image: "/images/adventures/adv-2.jpg",
    badge: "BREAKFAST",
    title: "Annapurna Base Camp Trek",
    location: "Annapurna Sanctuary, Nepal",
    rating: 4.9,
    reviewText: "Exceptional",
    reviewCount: "2,840",
    price: "$95.00",
  },
  {
    id: "3",
    image: "/images/adventures/adv-3.jpg",
    badge: "BREAKFAST",
    title: "Everest Base Camp Trek",
    location: "Solukhumbu, Nepal",
    rating: 5.0,
    reviewText: "Exceptional",
    reviewCount: "3,450",
    price: "$110.00",
  },
  {
    id: "4",
    image: "/images/adventures/adv-4.jpg",
    badge: "BREAKFAST",
    title: "Lumbini Heritage Pilgrimage",
    location: "Lumbini, Nepal",
    rating: 4.7,
    reviewText: "Exceptional",
    reviewCount: "1,920",
    price: "$75.00",
  },
];

export default function AdventuresSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 md:px-6 lg:px-8">
      {/* Centered Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <span
          className={`${lora.className} italic text-gray-500 text-sm sm:text-base block`}
        >
          Modern & Beautiful
        </span>
        <h2
          className={`${anton.className} text-2xl sm:text-3xl md:text-4xl lg:text-[40px] uppercase tracking-tight text-black mt-1.5 leading-none`}
        >
          OUR MOST POPULAR ADVENTURES
        </h2>
      </div>

      {/* 4-Card Carousel */}
      <div className="relative max-w-7xl mx-auto group">
        {/* Left Circular Arrow Button */}
        <button
          onClick={scrollLeft}
          aria-label="Previous adventures"
          className="absolute -left-3 sm:-left-5 top-1/3 -translate-y-1/2 z-20 bg-white text-gray-800 p-3 rounded-full shadow-md border border-gray-100 hover:bg-gray-50 transition-all opacity-90 hover:opacity-100 hidden sm:flex items-center justify-center focus:outline-none cursor-pointer"
        >
          <FaChevronLeft className="w-4 h-4 text-gray-700" />
        </button>

        {/* Scrollable Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-none snap-x snap-mandatory py-2 px-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {adventureData.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[260px] sm:w-[280px] md:w-[290px] lg:w-[calc(25%-18px)] snap-start group/card cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative rounded-lg overflow-hidden aspect-[4/5] h-56 sm:h-64 lg:h-68 w-full shadow-2xs group-hover/card:shadow-md transition-shadow bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 280px, 290px"
                  className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                />

                {/* Top-Left Badge */}
                <span className="bg-amber-400 text-black text-xs font-semibold px-3 py-1 rounded absolute top-3.5 left-3.5 z-10 shadow-2xs uppercase tracking-wider">
                  {item.badge}
                </span>

                {/* Top-Right Wishlist Button */}
                <button
                  onClick={(e) => toggleFavorite(item.id, e)}
                  aria-label="Add to wishlist"
                  className="bg-white rounded-full p-2.5 absolute top-3.5 right-3.5 z-10 shadow-md hover:bg-gray-50 transition-colors text-gray-700 focus:outline-none cursor-pointer"
                >
                  {favorites[item.id] ? (
                    <FaHeart className="w-4 h-4 text-red-500" />
                  ) : (
                    <FaRegHeart className="w-4 h-4 text-gray-700 hover:text-red-500 transition-colors" />
                  )}
                </button>
              </div>

              {/* Below Image Content */}
              <div className="pt-3.5 flex flex-col space-y-1">
                {/* Title */}
                <h3 className="font-semibold text-black text-sm sm:text-base line-clamp-1 group-hover/card:text-[#F26522] transition-colors">
                  {item.title}
                </h3>

                {/* Location Subtext */}
                <p className="text-gray-500 text-xs sm:text-sm font-normal">
                  {item.location}
                </p>

                {/* Rating Row */}
                <div className="flex items-center gap-2 pt-1 flex-wrap">
                  <span className="bg-[#F26522] text-white font-bold px-2 py-0.5 rounded text-xs">
                    {item.rating.toFixed(1)}
                  </span>
                  <div className="flex items-center text-amber-400 text-xs space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className="text-gray-500 text-xs sm:text-sm">
                    {item.reviewText} {item.reviewCount} reviews
                  </span>
                </div>

                {/* Price Line */}
                <div className="pt-1.5 text-xs sm:text-sm text-gray-700 flex items-center">
                  <span>Starting from</span>
                  <span className="text-[#F26522] font-bold text-sm sm:text-base ml-1.5">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Circular Arrow Button */}
        <button
          onClick={scrollRight}
          aria-label="Next adventures"
          className="absolute -right-3 sm:-right-5 top-1/3 -translate-y-1/2 z-20 bg-[#F26522] hover:bg-[#d85417] text-white p-3 rounded-full shadow-md transition-all opacity-90 hover:opacity-100 hidden sm:flex items-center justify-center focus:outline-none cursor-pointer"
        >
          <FaChevronRight className="w-4 h-4 text-white" />
        </button>
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
