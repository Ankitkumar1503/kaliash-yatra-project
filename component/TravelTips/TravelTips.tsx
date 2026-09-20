"use client";

import Image from "next/image";
import Link from "next/link";
import { Lora, Anton } from "next/font/google";
import { FaRegClock } from "react-icons/fa";

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
  className?: string;
}

export default function TravelTips({
  eyebrow = "Modern & Beautiful",
  title = "STAY UPDATE WITH KAILASHYATRA TIPS",
  className = "",
}: TravelTipsProps = {}) {
  return (
    <section className={`w-full bg-white py-10 sm:py-12 md:py-14 ${className}`}>
      <div className="site-container">
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-9">
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

        {/* 4-Column Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 xl:gap-7">
          {blogData.map((post) => (
            <Link
              key={post.id}
              href={post.href}
              className="flex flex-col group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full h-48 sm:h-52 lg:h-64 overflow-hidden mb-3 shadow-2xs group-hover:shadow-md transition-shadow bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
      </div>
    </section>
  );
}
