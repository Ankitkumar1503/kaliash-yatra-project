"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Lora, Anton } from "next/font/google";
import { FaRegClock, FaSearch } from "react-icons/fa";

const lora = Lora({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500"],
});

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

export interface BlogPost {
  id: string;
  image: string;
  title: string;
  dateAuthor: string;
  href: string;
  category?: string;
}

const blogData: BlogPost[] = [
  {
    id: "1",
    image: "/images/blogs/blog-1.jpg",
    title: "Best Time to Visit Kailash Mansarovar for the Yatra",
    dateAuthor: "22/09/2022 - Admin",
    href: "/blog/best-time-kailash",
  },
  {
    id: "2",
    image: "/images/blogs/blog-2.jpg",
    title: "A Complete Guide to Preparing for High-Altitude Trekking",
    dateAuthor: "18/09/2022 - Admin",
    href: "/blog/high-altitude-guide",
  },
  {
    id: "3",
    image: "/images/blogs/blog-3.jpg",
    title: "Top 5 Monasteries to Visit Around Pokhara",
    dateAuthor: "15/09/2022 - Admin",
    href: "/blog/top-monasteries-pokhara",
  },
  {
    id: "4",
    image: "/images/blogs/blog-3.jpg",
    title: "Top 5 Monasteries to Visit Around Pokhara",
    dateAuthor: "15/09/2022 - Admin",
    href: "/blog/top-monasteries-pokhara",
  },
];

export interface TravelTipsProps {
  eyebrow?: string;
  title?: string;
  posts?: BlogPost[];
  className?: string;
  showSearchFilter?: boolean;
}

export default function TravelTips({
  eyebrow = "Modern & Beautiful",
  title = "STAY UPDATE WITH KAILASHYATRA TIPS",
  posts,
  className = "",
  showSearchFilter = false,
}: TravelTipsProps = {}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const basePosts = posts && posts.length > 0 ? posts : blogData;

  const filteredPosts = useMemo(() => {
    let list = basePosts;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.dateAuthor.toLowerCase().includes(q)
      );
    }

    if (activeCategory !== "All") {
      const cat = activeCategory.toLowerCase();
      list = list.filter((p) => {
        const titleLower = p.title.toLowerCase();
        if (cat === "trekking") return titleLower.includes("trek") || titleLower.includes("base camp") || titleLower.includes("altitude");
        if (cat === "pilgrimage") return titleLower.includes("kailash") || titleLower.includes("yatra") || titleLower.includes("mansarovar");
        if (cat === "guides") return titleLower.includes("guide") || titleLower.includes("time") || titleLower.includes("countries");
        if (cat === "culture") return titleLower.includes("monasteries") || titleLower.includes("bhutan") || titleLower.includes("temple");
        return true;
      });
    }

    return list;
  }, [basePosts, searchQuery, activeCategory]);

  return (
    <section className={`w-full bg-white py-10 sm:py-12 md:py-16 ${className}`}>
      <div className="site-container">
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-9 md:mb-10">
          <span
            className={`${lora.className} italic text-gray-500 text-xs sm:text-sm block`}
          >
            {eyebrow}
          </span>
          <h2
            className={`${anton.className} text-2xl sm:text-3xl lg:text-[34px] uppercase tracking-tight text-black mt-1 leading-none`}
          >
            {title}
          </h2>
        </div>

        {/* Optional Search and Category Filters */}
        {showSearchFilter && (
          <div className="max-w-3xl mx-auto mb-8 sm:mb-10 flex flex-col md:flex-row items-center gap-4">
            <div className="relative w-full md:w-80">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search travel tips..."
                className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xs text-xs sm:text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#F26522] focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {["All", "Trekking", "Pilgrimage", "Guides", "Culture"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? "bg-[#F26522] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 text-gray-500 text-sm">
            No travel articles found matching &quot;{searchQuery}&quot;.
          </div>
        ) : (
          /* 4-Column Blog Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 lg:gap-x-6 xl:gap-x-7 gap-y-7 sm:gap-y-8 lg:gap-y-9">
            {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={post.href}
              className="flex flex-col group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden mb-3 shadow-2xs group-hover:shadow-md transition-shadow bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-black text-sm sm:text-[15px] leading-snug line-clamp-2 group-hover:text-[#F26522] transition-colors">
                {post.title}
              </h3>

              {/* Meta Row */}
              <div className="flex items-center space-x-2 text-gray-500 text-[11px] sm:text-xs mt-1.5 font-normal">
                <FaRegClock className="text-gray-400 text-xs" />
                <span>{post.dateAuthor}</span>
              </div>
            </Link>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}
