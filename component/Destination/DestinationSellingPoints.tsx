"use client";

import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { FaStar } from "react-icons/fa";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export interface SellingFeature {
  id: string;
  title: string;
  description: string;
}

const features: SellingFeature[] = [
  {
    id: "1",
    title: "Car-Free Village",
    description:
      "Zermatt offers world-class alpine skiing, pristine fresh air, and peaceful pedestrian streets.",
  },
  {
    id: "2",
    title: "Gornergrat Scenic Railway",
    description:
      "Europe's highest open-air cogwheel train journey providing views of 29 four-thousand-meter peaks.",
  },
  {
    id: "3",
    title: "Glacier Paradise 3,883m",
    description:
      "Year-round snow sports, high-altitude viewing platforms, and sculpted ice palaces.",
  },
  {
    id: "4",
    title: "Iconic Matterhorn Panoramas",
    description:
      "Golden sunrise reflections on serene alpine lakes such as Lake Riffelsee and Stellisee.",
  },
];

export interface HotelCard {
  id: string;
  image: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: string;
}

const hotels: HotelCard[] = [
  {
    id: "1",
    image: "/images/zermatt/hotel-1.jpg",
    name: "Popular Zermatt Hotel",
    location: "Bahnhofstrasse, Zermatt, Switzerland",
    rating: 4.8,
    reviewCount: "1,420 reviews",
  },
  {
    id: "2",
    image: "/images/zermatt/hotel-2.jpg",
    name: "Matterhorn Peak View Resort",
    location: "Winkelmatten, Zermatt, Switzerland",
    rating: 4.9,
    reviewCount: "2,180 reviews",
  },
];

export default function DestinationSellingPoints() {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Two-Column Block: Narrative vs 4 Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading & Narrative */}
          <div className="flex flex-col">
            <span className="text-[#F26522] text-xs sm:text-sm font-semibold tracking-widest uppercase block mb-1.5">
              SELLING POINTS
            </span>
            <h2
              className={`${playfair.className} text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4`}
            >
              The Matterhorn: Great Unique Selling Points for Europe and couple
              to skiing, and scenic mountain in Zermatt
            </h2>

            <div className="space-y-3.5 text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
              <p>
                Zermatt stands proudly as Europe’s premier year-round alpine destination.
                Surrounded by the most majestic concentration of 4,000-meter peaks in the
                Alps, it brings together romantic alpine chalets, legendary mountaineering
                history, and unparalleled ski slopes that connect Switzerland to Italy.
              </p>
              <p>
                From gentle walks through wildflower meadows in summer to exhilarating
                runs down powdery slopes in winter, couples, families, and solo adventurers
                find unforgettable tranquility and adventure here.
              </p>
            </div>

            <Link
              href="#more-info"
              className="text-[#F26522] font-semibold text-xs sm:text-sm hover:underline inline-flex items-center gap-1 w-fit"
            >
              <span>Read More</span>
              <span>&rarr;</span>
            </Link>
          </div>

          {/* Right Column: 4 Feature Bullet Items */}
          <div className="space-y-5">
            {features.map((item) => (
              <div key={item.id} className="flex items-start gap-3.5">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FEE4D6] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Block: 2 Horizontal Hotel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 sm:mt-14 pt-8 border-t border-gray-100">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-xl border border-gray-100 p-3 sm:p-4 shadow-xs hover:shadow-md transition-shadow flex items-center gap-4 group cursor-pointer"
            >
              {/* Hotel Image */}
              <div className="relative w-32 sm:w-40 h-22 sm:h-24 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  sizes="160px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center">
                <h4 className="font-bold text-gray-900 text-sm sm:text-base group-hover:text-[#F26522] transition-colors line-clamp-1">
                  {hotel.name}
                </h4>
                <p className="text-gray-400 text-xs mt-0.5 line-clamp-1">
                  {hotel.location}
                </p>

                {/* Rating row */}
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="bg-[#F26522] text-white font-bold text-xs px-1.5 py-0.5 rounded">
                    {hotel.rating.toFixed(1)}
                  </span>
                  <div className="flex items-center text-amber-400 text-xs space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className="text-gray-400 text-xs">
                    ({hotel.reviewCount})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
