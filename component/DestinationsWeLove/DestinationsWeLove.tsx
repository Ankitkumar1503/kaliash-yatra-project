"use client";

import { useState } from "react";
import Link from "next/link";
import { Lora, Anton } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

export interface DestinationColumn {
  country: string;
  count: string;
  items: string[];
}

export type CategoryTab = "regions" | "cities" | "places";

const destinationsData: Record<CategoryTab, DestinationColumn[]> = {
  regions: [
    {
      country: "Nepal",
      count: "120+ Tours",
      items: [
        "Everest Region",
        "Annapurna Region",
        "Langtang Region",
        "Manaslu Region",
        "Upper Mustang",
      ],
    },
    {
      country: "Bhutan",
      count: "28+ Tours",
      items: [
        "Thimphu",
        "Paro",
        "Punakha",
        "Trongsa",
        "Bumthang",
      ],
    },
    {
      country: "Tibet",
      count: "15+ Tours",
      items: [
        "Lhasa",
        "Mount Kailash",
        "Shigatse",
        "Gyantse",
        "Tsedang",
      ],
    },
    {
      country: "India",
      count: "22+ Tours",
      items: [
        "Leh Ladakh",
        "Sikkim",
        "Darjeeling",
        "Varanasi",
        "Rajasthan",
      ],
    },
    {
      country: "International",
      count: "18+ Tours",
      items: [
        "Istanbul",
        "London",
        "New York",
        "Manchester",
        "Vienna",
      ],
    },
  ],
  cities: [
    {
      country: "Nepal",
      count: "65+ Tours",
      items: [
        "Kathmandu",
        "Pokhara",
        "Lalitpur",
        "Bhaktapur",
        "Chitwan",
      ],
    },
    {
      country: "Bhutan",
      count: "18+ Tours",
      items: [
        "Thimphu",
        "Paro",
        "Punakha",
        "Phuntsholing",
        "Wangdue Phodrang",
      ],
    },
    {
      country: "Tibet",
      count: "12+ Tours",
      items: [
        "Lhasa",
        "Shigatse",
        "Nyingchi",
        "Chamdo",
        "Nagqu",
      ],
    },
    {
      country: "India",
      count: "35+ Tours",
      items: [
        "New Delhi",
        "Jaipur",
        "Agra",
        "Mumbai",
        "Kolkata",
      ],
    },
    {
      country: "International",
      count: "42+ Tours",
      items: [
        "Dubai",
        "Singapore",
        "Bangkok",
        "Tokyo",
        "Paris",
      ],
    },
  ],
  places: [
    {
      country: "Nepal",
      count: "85+ Tours",
      items: [
        "Pashupatinath Temple",
        "Swayambhunath Stupa",
        "Boudhanath Stupa",
        "Phewa Lake",
        "Sarangkot Viewpoint",
      ],
    },
    {
      country: "Bhutan",
      count: "24+ Tours",
      items: [
        "Tiger's Nest Monastery",
        "Punakha Dzong",
        "Dochula Pass",
        "Buddha Dordenma",
        "Rinpung Dzong",
      ],
    },
    {
      country: "Tibet",
      count: "20+ Tours",
      items: [
        "Potala Palace",
        "Jokhang Temple",
        "Lake Mansarovar",
        "Barkhor Street",
        "Yamdrok Lake",
      ],
    },
    {
      country: "India",
      count: "40+ Tours",
      items: [
        "Taj Mahal",
        "Golden Temple",
        "Pangong Lake",
        "Hawa Mahal",
        "Amber Fort",
      ],
    },
    {
      country: "International",
      count: "30+ Tours",
      items: [
        "Hagia Sophia",
        "Big Ben",
        "Eiffel Tower",
        "Burj Khalifa",
        "Colosseum",
      ],
    },
  ],
};

const tabOptions: { id: CategoryTab; label: string }[] = [
  { id: "regions", label: "Regions" },
  { id: "cities", label: "Cities" },
  { id: "places", label: "Places of interest" },
];

export default function DestinationsWeLove() {
  const [activeTab, setActiveTab] = useState<CategoryTab>("regions");

  const currentDestinations = destinationsData[activeTab];

  return (
    <section className="w-full bg-[#F8F8F8] py-12 sm:py-14 md:py-16 px-4 sm:px-5 lg:px-6 xl:px-8">
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          {/* Left Content Area (approx 32-35%) */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between">
            <div>
              {/* Deals & Offers label */}
              <span
                className={`${lora.className} text-gray-500 text-sm sm:text-[15px] font-normal block mb-1.5`}
              >
                Deals &amp; Offers
              </span>

              {/* Main Heading */}
              <h2
                className={`${anton.className} text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] uppercase tracking-tight text-black leading-[1.08] mb-3 sm:mb-4`}
              >
                DESTINATIONS WE LOVE
              </h2>

              {/* Description */}
              <p className="text-[#222222] text-xs sm:text-sm md:text-[14px] leading-relaxed max-w-[360px] font-normal mb-6 sm:mb-8">
                Nature, culture and unforgettable experiences. Discover our
                handpicked destinations across the Himalayas and beyond.
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1">
              {tabOptions.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    type="button"
                    className={`h-[36px] sm:h-[38px] px-4 sm:px-5 rounded-[2px] text-xs sm:text-[13.5px] font-medium transition-all duration-200 cursor-pointer focus:outline-none ${
                      isActive
                        ? "bg-[#F26522] text-white shadow-xs"
                        : "bg-[#EAEAEA] text-gray-800 hover:bg-[#DFDFDF]"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Content Area: 5 Destination Columns (approx 65-68%) */}
          <div className="lg:col-span-8 xl:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 xl:gap-8 pt-1">
              {currentDestinations.map((col) => (
                <div key={col.country} className="flex flex-col justify-between">
                  <div>
                    {/* Destination Title */}
                    <h3 className="text-black font-semibold text-[14.5px] sm:text-[15.5px] leading-tight">
                      {col.country}
                    </h3>

                    {/* Tours Count */}
                    <span className="text-gray-500 text-[11px] sm:text-xs font-normal block mt-1 mb-3">
                      {col.count}
                    </span>

                    {/* Destination List */}
                    <ul className="space-y-1.5 sm:space-y-2">
                      {col.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-gray-600 hover:text-black transition-colors text-xs sm:text-[13px] leading-snug flex items-start"
                        >
                          <span className="mr-2 text-gray-400 select-none">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* View All Link */}
                  <div className="pt-5 sm:pt-6">
                    <Link
                      href="/destination"
                      className="text-[#F26522] font-medium text-xs sm:text-sm inline-flex items-center gap-1.5 hover:gap-2 transition-all group"
                    >
                      <span>View All</span>
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

