"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  href?: string;
}

interface ActivityCardProps {
  activity: ActivityItem;
}

export default function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <Link
      href={activity.href || "/activities"}
      className="group block cursor-pointer"
    >
      {/* Outer wrapper allows the icon to extend outside the image without clipping */}
      <div className="relative">
        {/* Inner container with overflow-hidden for image clipping/border radius */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-gray-100 rounded-none shadow-2xs">
          <Image
            src={activity.image}
            alt={activity.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Circular Orange Icon (44-48px) overlapping 50% over image and 50% below image */}
        <div className="absolute -bottom-5 sm:-bottom-5.5 left-1/2 -translate-x-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#F26522] text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#d85417] transition-all duration-300">
          {activity.icon}
        </div>
      </div>

      {/* Content Area Below Image with sufficient top padding for the overlapping badge */}
      <div className="pt-7 sm:pt-7.5 text-center px-1 pb-1">
        <h3 className="font-semibold text-black text-sm sm:text-[15px] leading-snug group-hover:text-[#F26522] transition-colors">
          {activity.title}
        </h3>
        <p className="text-gray-600 text-[11px] sm:text-xs leading-relaxed mt-1 max-w-[200px] mx-auto line-clamp-2">
          {activity.description}
        </p>
      </div>
    </Link>
  );
}
