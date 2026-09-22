"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { FaSearch } from "react-icons/fa";
import { popularArticles } from "./blogDetailData";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function BlogSidebar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Future search query routing or filtering
      console.log("Searching blog for:", searchQuery);
    }
  };

  return (
    <aside className="w-full flex flex-col space-y-7 sm:space-y-8">
      {/* 1. Search Articles Widget */}
      <div className="w-full">
        <h3
          className={`${playfair.className} text-xl sm:text-[22px] font-bold text-gray-900 mb-3.5`}
        >
          Search Articles
        </h3>
        <form onSubmit={handleSearch} className="flex items-center w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by keyword..."
            aria-label="Search articles"
            className="flex-grow bg-[#F8F9FA] border border-gray-200 border-r-0 px-3.5 py-2 sm:py-2.5 text-xs sm:text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#F26522] focus:bg-white transition-colors"
          />
          <button
            type="submit"
            aria-label="Search button"
            className="bg-[#F26522] hover:bg-[#d95316] text-white px-3.5 py-2.5 sm:py-3 transition-colors flex items-center justify-center cursor-pointer shrink-0"
          >
            <FaSearch className="text-xs sm:text-sm" />
          </button>
        </form>
      </div>

      {/* 2. Popular Articles Widget */}
      <div className="w-full">
        <h3
          className={`${playfair.className} text-xl sm:text-[22px] font-bold text-gray-900 mb-4`}
        >
          Popular Articles
        </h3>

        <div className="flex flex-col divide-y divide-gray-100">
          {popularArticles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className="flex items-center space-x-3 py-3 group cursor-pointer"
            >
              {/* Thumbnail Image */}
              <div className="relative w-16 h-12 sm:w-[72px] sm:h-[52px] shrink-0 overflow-hidden bg-gray-100 rounded-2xs">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="72px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title & Date */}
              <div className="flex flex-col justify-center min-w-0">
                <h4 className="text-xs sm:text-[13px] font-semibold text-gray-800 line-clamp-2 leading-snug group-hover:text-[#F26522] transition-colors">
                  {article.title}
                </h4>
                <span className="text-[11px] text-gray-400 mt-1 font-normal">
                  {article.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
