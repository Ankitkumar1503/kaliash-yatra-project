"use client";

import { useState } from "react";
import Image from "next/image";
import { Anton } from "next/font/google";
import { FaPlus, FaMinus } from "react-icons/fa";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  description: string;
  details?: {
    altitude?: string;
    trekkingTime?: string;
    accommodation?: string;
  };
}

const defaultItinerary: ItineraryDay[] = [
  {
    dayNumber: 1,
    title: "Day 1: Arrival in Kathmandu (1,400 m)",
    description:
      "Arrive at Tribhuvan International Airport in Kathmandu. Our representative will warmly welcome you and transfer you to your hotel. Spend the rest of the day relaxing or exploring the vibrant streets of Thamel.",
    details: {
      altitude: "1,400 m",
      trekkingTime: "N/A",
      accommodation: "Hotel in Kathmandu",
    },
  },
  {
    dayNumber: 2,
    title: "Day 2: Flight to Lukla (2,860 m) and Trek to Phakding (2,610 m)",
    description:
      "Take an exhilarating morning flight to Lukla's Tenzing-Hillary Airport. Meet your trekking crew and begin your descent through pine forests along the Dudh Koshi River to the peaceful village of Phakding.",
    details: {
      altitude: "2,610 m",
      trekkingTime: "3 – 4 hours",
      accommodation: "Teahouse Lodge",
    },
  },
  {
    dayNumber: 3,
    title: "Day 3: Trek to Namche Bazaar (3,440 m)",
    description:
      "Cross iconic Hillary suspension bridges draped in prayer flags, enter Sagarmatha National Park at Monjo, and make the steep ascent to Namche Bazaar, the bustling gateway to Everest.",
    details: {
      altitude: "3,440 m",
      trekkingTime: "5 – 6 hours",
      accommodation: "Teahouse Lodge",
    },
  },
  {
    dayNumber: 4,
    title: "Day 4: Acclimatization Day in Namche Bazaar",
    description:
      "Vital acclimatization day. Take a rewarding hike up to the Everest View Hotel for your first panoramic glimpse of Everest, Ama Dablam, and Lhotse, followed by a visit to the Sherpa Culture Museum.",
    details: {
      altitude: "3,440 m (Day hike to 3,880 m)",
      trekkingTime: "3 – 4 hours",
      accommodation: "Teahouse Lodge",
    },
  },
  {
    dayNumber: 5,
    title: "Day 5: Trek to Tengboche (3,860 m)",
    description:
      "Trek along scenic ridge paths with sweeping mountain views before descending to Phunki Thenga. Climb through rhododendron forests to reach Tengboche, home to the largest and most sacred monastery in Khumbu.",
    details: {
      altitude: "3,860 m",
      trekkingTime: "5 – 6 hours",
      accommodation: "Teahouse Lodge",
    },
  },
  {
    dayNumber: 6,
    title: "Day 6: Trek to Dingboche (4,410 m)",
    description:
      "Descend through conifers to Deboche, cross the Imja Khola, and pass the mani stones of Pangboche. Notice the landscape becoming alpine and tundra-like as you approach the stone-walled fields of Dingboche.",
    details: {
      altitude: "4,410 m",
      trekkingTime: "5 – 6 hours",
      accommodation: "Teahouse Lodge",
    },
  },
  {
    dayNumber: 7,
    title: "Day 7: Acclimatization Day in Dingboche",
    description:
      "Second vital acclimatization day before ascending into higher alpine terrain. Hike up Nagarjun Hill (5,100 m) for staggering views of Makalu, Lhotse, Island Peak, and Ama Dablam, returning to Dingboche for rest.",
    details: {
      altitude: "4,410 m (Day hike to 5,100 m)",
      trekkingTime: "4 – 5 hours",
      accommodation: "Teahouse Lodge",
    },
  },
];

interface TripItineraryProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  image?: string;
  days?: ItineraryDay[];
  className?: string;
}

export default function TripItinerary({
  eyebrow = "Itinerary",
  heading = "DAY BY DAY ITINERARY",
  description = "Follow our carefully crafted day-by-day itinerary designed for safe acclimatization, rewarding trails, and maximum immersion into Himalayan wonders.",
  image = "/images/tours/tour-4.jpg",
  days = defaultItinerary,
  className = "",
}: TripItineraryProps) {
  const [openDay, setOpenDay] = useState<number | null>(null);

  const toggleDay = (dayNumber: number) => {
    setOpenDay(openDay === dayNumber ? null : dayNumber);
  };

  return (
    <section id="itinerary" className={`w-full bg-white py-6 sm:py-8 lg:py-10 px-4 sm:px-5 lg:px-6 xl:px-8 ${className}`}>
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          {/* Left Column: Eyebrow + Heading + Paragraph + Image (~38% width) */}
          <div className="lg:col-span-5 flex flex-col justify-start text-left">
            <span className="text-[#F26522] text-xs sm:text-[13px] font-medium tracking-wider uppercase block mb-1">
              {eyebrow}
            </span>
            <h2
              className={`${anton.className} text-xl sm:text-2xl lg:text-[28px] uppercase tracking-tight text-black mb-2.5`}
            >
              {heading}
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 max-w-md">
              {description}
            </p>
            <div className="relative w-full h-[180px] sm:h-[210px] lg:h-[230px] overflow-hidden rounded-none shadow-2xs group">
              <Image
                src={image}
                alt={heading}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Timeline + Accordion (~62% width) */}
          <div className="lg:col-span-7 relative">
            <div className="space-y-3.5 relative">
              {days.map((item, idx) => {
                const isOpen = openDay === item.dayNumber;
                const isLast = idx === days.length - 1;

                return (
                  <div key={item.dayNumber} className="relative flex items-start group">
                    {/* Vertical connecting line */}
                    {!isLast && (
                      <div className="absolute left-[11px] top-6 bottom-[-14px] w-0.5 bg-gray-200" />
                    )}

                    {/* Timeline Orange Dot */}
                    <div className="relative z-10 w-6 h-6 rounded-full bg-[#F26522] border-[3px] border-white shadow-xs flex items-center justify-center shrink-0 mt-2.5 mr-3 sm:mr-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>

                    {/* Day Accordion Card */}
                    <div className="flex-1 bg-[#f9fafb] border border-gray-100 rounded-lg overflow-hidden transition-all shadow-2xs">
                      <button
                        type="button"
                        onClick={() => toggleDay(item.dayNumber)}
                        className="w-full py-3 px-3.5 sm:px-4 flex items-center justify-between text-left hover:bg-gray-100/60 transition-colors cursor-pointer select-none"
                      >
                        <span className="text-xs sm:text-[13.5px] font-semibold text-black leading-snug">
                          {item.title}
                        </span>
                        <div className="w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 shrink-0 ml-2 group-hover:text-black">
                          {isOpen ? (
                            <FaMinus className="w-2.5 h-2.5 text-[#F26522]" />
                          ) : (
                            <FaPlus className="w-2.5 h-2.5" />
                          )}
                        </div>
                      </button>

                      {/* Expandable Content */}
                      {isOpen && (
                        <div className="px-3.5 sm:px-4 pb-3.5 pt-1 text-gray-600 text-xs sm:text-[13px] leading-relaxed border-t border-gray-100/80">
                          <p className="mb-2">{item.description}</p>
                          {item.details && (
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] sm:text-xs text-gray-500 pt-1 font-medium">
                              {item.details.altitude && (
                                <span>Altitude: {item.details.altitude}</span>
                              )}
                              {item.details.trekkingTime && (
                                <span>Duration: {item.details.trekkingTime}</span>
                              )}
                              {item.details.accommodation && (
                                <span>Stay: {item.details.accommodation}</span>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
