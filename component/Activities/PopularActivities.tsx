"use client";

import { Playfair_Display } from "next/font/google";
import {
  FaHiking,
  FaLandmark,
  FaMountain,
  FaPray,
  FaLeaf,
} from "react-icons/fa";
import ActivityCard, { ActivityItem } from "./ActivityCard";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const activitiesData: ActivityItem[] = [
  {
    id: "trekking",
    title: "Trekking",
    description: "Walk through the Himalayas and discover breathtaking trails.",
    image: "/images/kailash-1.jpg",
    icon: <FaHiking className="w-5 h-5 text-white" />,
    href: "/activities/trekking",
  },
  {
    id: "cultural-tours",
    title: "Cultural Tours",
    description: "Explore ancient traditions, heritage sites and local life.",
    image: "/images/destinations/kathmandu.jpg",
    icon: <FaLandmark className="w-5 h-5 text-white" />,
    href: "/activities/cultural-tours",
  },
  {
    id: "adventure",
    title: "Adventure",
    description: "Push your limits with exciting and unforgettable experiences.",
    image: "/images/expeditions/expedition-1.jpg",
    icon: <FaMountain className="w-5 h-5 text-white" />,
    href: "/activities/adventure",
  },
  {
    id: "spiritual-journeys",
    title: "Spiritual Journeys",
    description: "Travel with purpose and find inner peace.",
    image: "/images/destinations/mount-kailash.jpg",
    icon: <FaPray className="w-5 h-5 text-white" />,
    href: "/activities/spiritual-journeys",
  },
  {
    id: "wildlife-nature",
    title: "Wildlife & Nature",
    description: "Connect with pristine nature and unique wildlife.",
    image: "/images/expeditions/expedition-4.jpg",
    icon: <FaLeaf className="w-5 h-5 text-white" />,
    href: "/activities/wildlife-nature",
  },
];

interface PopularActivitiesProps {
  className?: string;
}

export default function PopularActivities({ className = "" }: PopularActivitiesProps) {
  return (
    <section
      className={`w-full bg-white py-8 sm:py-10 lg:py-12 px-4 sm:px-5 lg:px-6 xl:px-8 ${className}`}
    >
      <div className="max-w-[1360px] mx-auto">
        {/* Section Header */}
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

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 xl:gap-6">
          {activitiesData.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
}
