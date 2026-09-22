"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export interface GuideArticle {
  id: string;
  image: string;
  dateBadge: string;
  title: string;
  description: string;
  href?: string;
}

const defaultPopularGuides: GuideArticle[] = [
  {
    id: "guide-1",
    image: "/images/adventures/adv-1.jpg",
    dateBadge: "MAY 15, 2026",
    title: "Best Time to Visit Nepal",
    description: "A complete guide on the seasons, weather and best trekking months.",
    href: "/guide/best-time-to-visit-nepal",
  },
  {
    id: "guide-2",
    image: "/images/adventures/adv-2.jpg",
    dateBadge: "MAY 15, 2026",
    title: "Best Time to Visit Nepal",
    description: "A complete guide on the seasons, weather and best trekking months.",
    href: "/guide/best-time-to-visit-nepal",
  },
  {
    id: "guide-3",
    image: "/images/adventures/adv-3.jpg",
    dateBadge: "MAY 15, 2026",
    title: "Best Time to Visit Nepal",
    description: "A complete guide on the seasons, weather and best trekking months.",
    href: "/guide/best-time-to-visit-nepal",
  },
  {
    id: "guide-4",
    image: "/images/concept/concept-bottom-left.jpg",
    dateBadge: "MAY 15, 2026",
    title: "Best Time to Visit Nepal",
    description: "A complete guide on the seasons, weather and best trekking months.",
    href: "/guide/best-time-to-visit-nepal",
  },
  {
    id: "guide-5",
    image: "/images/adventures/adv-5.jpg",
    dateBadge: "MAY 15, 2026",
    title: "Best Time to Visit Nepal",
    description: "A complete guide on the seasons, weather and best trekking months.",
    href: "/guide/best-time-to-visit-nepal",
  },
];

export interface PopularGuidesProps {
  title?: string;
  viewAllText?: string;
  viewAllHref?: string;
  items?: GuideArticle[];
  className?: string;
}

export default function PopularGuides({
  title = "Popular Guides",
  viewAllText = "View All Articles",
  viewAllHref = "/guide",
  items = defaultPopularGuides,
  className = "",
}: PopularGuidesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className={`w-full bg-white py-8 sm:py-10 lg:py-12 ${className}`}>
      <div className="site-container">
        {/* Header: Title on Left, Button on Right */}
        <div className="flex justify-between items-end mb-5 sm:mb-7">
          <h2
            className={`${playfair.className} text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-semibold text-black leading-tight`}
          >
            {title}
          </h2>

          <Link
            href={viewAllHref}
            className="border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-black text-xs sm:text-[13px] font-medium px-3.5 sm:px-4 py-1.5 rounded-md transition-colors flex items-center space-x-1.5 shadow-2xs group cursor-pointer shrink-0"
          >
            <span>{viewAllText}</span>
            <span className="transform group-hover:translate-x-0.5 transition-transform text-xs">
              →
            </span>
          </Link>
        </div>

        {/* 5 Cards Row / Carousel Track */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 xl:gap-5 overflow-x-auto scroll-smooth scrollbar-none snap-x snap-mandatory py-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {items.map((item) => (
              <Link
                key={item.id}
                href={item.href || "/guide"}
                className="flex-shrink-0 w-[240px] sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] lg:w-[calc((100%-4*1.25rem)/5)] snap-start group/card cursor-pointer"
              >
                {/* Image Container with Aspect Ratio */}
                <div className="relative overflow-hidden w-full aspect-[4/3] shadow-2xs group-hover/card:shadow-md transition-shadow bg-gray-100 rounded-none mb-2.5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover object-center group-hover/card:scale-105 transition-transform duration-500"
                  />

                  {/* Top-Left Date Badge */}
                  <span className="bg-[#FBBF24] text-black text-[10px] sm:text-[11px] font-bold px-2 py-0.5 uppercase tracking-wider absolute top-2.5 left-2.5 z-10 shadow-2xs rounded-none">
                    {item.dateBadge}
                  </span>

                  {/* Top-Right Favorite Button */}
                  <button
                    onClick={(e) => toggleFavorite(item.id, e)}
                    aria-label="Add to favorites"
                    className="bg-white rounded-full w-7 h-7 flex items-center justify-center absolute top-2.5 right-2.5 z-10 shadow-xs hover:bg-gray-50 transition-colors text-gray-700 focus:outline-none cursor-pointer"
                  >
                    {favorites[item.id] ? (
                      <FaHeart className="w-3.5 h-3.5 text-red-500" />
                    ) : (
                      <FaRegHeart className="w-3.5 h-3.5 text-gray-700 hover:text-red-500 transition-colors" />
                    )}
                  </button>
                </div>

                {/* Content Below Image */}
                <div className="flex flex-col space-y-1">
                  <h3 className="font-semibold text-black text-xs sm:text-[13.5px] leading-snug group-hover/card:text-[#F26522] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-[11px] sm:text-xs font-normal leading-relaxed line-clamp-2">
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
