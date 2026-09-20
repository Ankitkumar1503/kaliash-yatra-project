"use client";

import { useState } from "react";

export interface TabItem {
  id: string;
  label: string;
  targetId: string;
}

const defaultTabs: TabItem[] = [
  { id: "overview", label: "Overview", targetId: "overview" },
  { id: "itinerary", label: "Itinerary", targetId: "itinerary" },
  { id: "inclusions", label: "Inclusions", targetId: "inclusions" },
  { id: "exclusions", label: "Exclusions", targetId: "exclusions" },
  { id: "dates-price", label: "Dates & Price", targetId: "dates-price" },
  { id: "useful-info", label: "Useful Info", targetId: "useful-info" },
  { id: "faqs", label: "FAQs", targetId: "faqs" },
  { id: "reviews", label: "Reviews", targetId: "reviews" },
];

interface TripNavTabsProps {
  tabs?: TabItem[];
  className?: string;
}

export default function TripNavTabs({
  tabs = defaultTabs,
  className = "",
}: TripNavTabsProps) {
  const [activeTab, setActiveTab] = useState<string>("overview");

  const handleTabClick = (tab: TabItem) => {
    setActiveTab(tab.id);
    const element = document.getElementById(tab.targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={`w-full bg-white py-3 sm:py-4 px-4 sm:px-5 lg:px-6 xl:px-8 sticky top-0 z-30 bg-white/95 backdrop-blur-xs border-b border-gray-100/80 shadow-2xs ${className}`}>
      <div className="max-w-[1360px] mx-auto">
        <div className="flex items-center overflow-x-auto no-scrollbar py-1 space-x-2 sm:space-x-3">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-[#F26522] text-white shadow-xs"
                    : "bg-transparent hover:bg-gray-100 text-gray-700 hover:text-black"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
