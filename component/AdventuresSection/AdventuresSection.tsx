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

export interface Adventure {
  id: string;
  image: string;
  badge: string;
  title: string;
  subtitle: string;
  rating: number;
  reviewText: string;
  reviewCount: string;
  price: string;
}

const adventureData: Adventure[] = [
  {
    id: "1",
    image: "/images/adventures/adv-1.jpg",
    badge: "BESTSELLER",
    title: "Everest Base Camp Trek",
    subtitle: "14 Days · Everest Region",
    rating: 4.8,
    reviewText: "Exceptional",
    reviewCount: "3,014",
    price: "$89.00",
  },
  {
    id: "2",
    image: "/images/adventures/adv-2.jpg",
    badge: "BESTSELLER",
    title: "Everest Base Camp Trek",
    subtitle: "14 Days · Everest Region",
    rating: 4.8,
    reviewText: "Exceptional",
    reviewCount: "3,014",
    price: "$89.00",
  },
  {
    id: "3",
    image: "/images/adventures/adv-3.jpg",
    badge: "BESTSELLER",
    title: "Everest Base Camp Trek",
    subtitle: "14 Days · Everest Region",
    rating: 4.8,
    reviewText: "Exceptional",
    reviewCount: "3,014",
    price: "$89.00",
  },
  {
    id: "4",
    image: "/images/adventures/adv-4.jpg",
    badge: "BESTSELLER",
    title: "Everest Base Camp Trek",
    subtitle: "14 Days · Everest Region",
    rating: 4.8,
    reviewText: "Exceptional",
    reviewCount: "3,014",
    price: "$89.00",
  },
  {
    id: "5",
    image: "/images/adventures/adv-target-5.jpg",
    badge: "BESTSELLER",
    title: "Everest Base Camp Trek",
    subtitle: "14 Days · Everest Region",
    rating: 4.8,
    reviewText: "Exceptional",
    reviewCount: "3,014",
    price: "$89.00",
  },
  {
    id: "6",
    image: "/images/adventures/adv-1.jpg",
    badge: "BESTSELLER",
    title: "Kailash Mansarovar Yatra",
    subtitle: "15 Days · Tibet Region",
    rating: 4.9,
    reviewText: "Exceptional",
    reviewCount: "2,840",
    price: "$95.00",
  },
  {
    id: "7",
    image: "/images/adventures/adv-2.jpg",
    badge: "BESTSELLER",
    title: "Annapurna Sanctuary Trek",
    subtitle: "12 Days · Annapurna Region",
    rating: 5.0,
    reviewText: "Exceptional",
    reviewCount: "3,450",
    price: "$110.00",
  },
  {
    id: "8",
    image: "/images/adventures/adv-4.jpg",
    badge: "BESTSELLER",
    title: "Lumbini Heritage Pilgrimage",
    subtitle: "8 Days · Terai Plains",
    rating: 4.7,
    reviewText: "Exceptional",
    reviewCount: "1,920",
    price: "$75.00",
  },
];

export default function AdventuresSection() {
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
    <section className="w-full bg-white py-10 sm:py-12 md:py-14 px-4 sm:px-5 lg:px-6 xl:px-8">
      {/* Centered Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-7">
        <span className="text-[#F26522] text-xs sm:text-[13px] font-medium tracking-wider uppercase block text-center mb-1.5">
          POPULAR ADVENTURES
        </span>
        <h2
          className={`${anton.className} text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] uppercase tracking-tight text-black text-center leading-none`}
        >
          OUR MOST POPULAR ADVENTURES
        </h2>
      </div>

      {/* 5-Card Carousel Container */}
      <div className="relative max-w-[1360px] mx-auto group">
        {/* Subtle Left Scroll Button */}
        <button
          onClick={scrollLeft}
          aria-label="Previous adventures"
          className="absolute -left-2 lg:-left-3.5 top-[38%] -translate-y-1/2 z-20 bg-white/95 text-gray-700 hover:text-black p-2.5 rounded-full shadow-md border border-gray-100 hover:bg-white transition-all opacity-0 group-hover:opacity-100 hidden sm:flex items-center justify-center focus:outline-none cursor-pointer"
        >
          <FaChevronLeft className="w-3.5 h-3.5" />
        </button>

        {/* Scrollable Track (5 cards per view on desktop) */}
        <div
          ref={scrollRef}
          className="flex gap-4 xl:gap-5 overflow-x-auto scroll-smooth scrollbar-none snap-x snap-mandatory py-2 px-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {adventureData.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="flex-shrink-0 w-[270px] sm:w-[290px] md:w-[calc(33.333%-14px)] lg:w-[calc(20%-16px)] snap-start group/card cursor-pointer"
            >
              {/* Card Image Container (Height ≈ 328px, Ratio ≈ 0.95, clean square corners) */}
              <div className="relative overflow-hidden w-full h-[260px] sm:h-[180px] lg:h-[300px] shadow-2xs group-hover/card:shadow-md transition-shadow bg-gray-100 rounded-none">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 300px, 320px"
                  className="object-cover object-center group-hover/card:scale-105 transition-transform duration-500"
                />

                {/* Top-Left Badge: BESTSELLER */}
                <span className="bg-[#FBBF24] text-black text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 uppercase tracking-wider absolute top-3 left-3 z-10 shadow-2xs rounded-none">
                  {item.badge}
                </span>

                {/* Top-Right Circular Favorite Button */}
                <button
                  onClick={(e) => toggleFavorite(`${item.id}-${idx}`, e)}
                  aria-label="Add to wishlist"
                  className="bg-white rounded-full w-7 h-7 flex items-center justify-center absolute top-3 right-3 z-10 shadow-xs hover:bg-gray-50 transition-colors text-gray-700 focus:outline-none cursor-pointer"
                >
                  {favorites[`${item.id}-${idx}`] ? (
                    <FaHeart className="w-3.5 h-3.5 text-red-500" />
                  ) : (
                    <FaRegHeart className="w-3.5 h-3.5 text-gray-700 hover:text-red-500 transition-colors" />
                  )}
                </button>
              </div>

              {/* Content Below Image: Compact & Clean */}
              <div className="pt-2.5 flex flex-col space-y-0.5">
                {/* Title */}
                <h3 className="font-semibold text-black text-xs sm:text-[13.5px] line-clamp-1 group-hover/card:text-[#F26522] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Secondary Info: Duration · Location */}
                <p className="text-gray-500 text-[11px] sm:text-xs font-normal line-clamp-1">
                  {item.subtitle}
                </p>

                {/* Rating Row */}
                <div className="flex items-center gap-1.5 pt-1 flex-wrap">
                  {/* Orange Rating Box */}
                  <span className="bg-[#F26522] text-white font-semibold w-6 h-6 sm:w-6.5 sm:h-6.5 flex items-center justify-center text-[11px] rounded-none shrink-0">
                    {item.rating.toFixed(1)}
                  </span>
                  {/* Stars */}
                  <div className="flex items-center text-[#FBBF24] text-[10px] space-x-0.5 shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  {/* Review Text */}
                  <span className="text-gray-500 text-[11px] sm:text-xs font-normal">
                    {item.reviewText} {item.reviewCount} reviews
                  </span>
                </div>

                {/* Price Line */}
                <div className="pt-0.5 text-xs text-gray-800 flex items-center">
                  <span>Starting from</span>
                  <span className="text-[#F26522] font-semibold text-xs sm:text-sm ml-1">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Right Scroll Button */}
        <button
          onClick={scrollRight}
          aria-label="Next adventures"
          className="absolute -right-2 lg:-right-3.5 top-[38%] -translate-y-1/2 z-20 bg-white/95 text-gray-700 hover:text-black p-2.5 rounded-full shadow-md border border-gray-100 hover:bg-white transition-all opacity-0 group-hover:opacity-100 hidden sm:flex items-center justify-center focus:outline-none cursor-pointer"
        >
          <FaChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
}
