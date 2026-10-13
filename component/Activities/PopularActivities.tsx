"use client";

import { Playfair_Display } from "next/font/google";
import {
  FaHiking,
  FaLandmark,
  FaMountain,
  FaPray,
  FaLeaf,
} from "react-icons/fa";
import type { Activity } from "@/data/types";
import ActivityCard, { type ActivityItem } from "./ActivityCard";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});
const icons = {
  hiking: <FaHiking className="w-5 h-5 text-white" />,
  temple: <FaLandmark className="w-5 h-5 text-white" />,
  rafting: <FaMountain className="w-5 h-5 text-white" />,
  spiritual: <FaPray className="w-5 h-5 text-white" />,
  safari: <FaLeaf className="w-5 h-5 text-white" />,
};

interface PopularActivitiesProps {
  activities: Activity[];
  className?: string;
}
export default function PopularActivities({
  activities,
  className = "",
}: PopularActivitiesProps) {
  const items: ActivityItem[] = activities.map((activity) => ({
    id: activity.slug,
    title: activity.title,
    description: activity.shortDescription,
    image: activity.heroImage,
    icon: icons[activity.iconName as keyof typeof icons] ?? icons.hiking,
    href: `/activities/${activity.slug}`,
  }));
  return (
    <section
      className={`w-full bg-white py-8 sm:py-10 lg:py-12 px-4 sm:px-5 lg:px-6 xl:px-8 ${className}`}
    >
      <div className="max-w-[1360px] mx-auto">
        <div className="mb-4 sm:mb-6 text-left">
          <span className="text-[#F26522] text-xs sm:text-[13px] font-medium tracking-wider uppercase block mb-1">
            CHOOSE YOUR EXPERIENCE
          </span>
          <h2
            className={`${playfair.className} text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-semibold text-black leading-tight`}
          >
            Popular Activities
          </h2>
        </div>
        {items.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 xl:gap-6">
            {items.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-sm">
            No activities are available right now.
          </p>
        )}
      </div>
    </section>
  );
}
