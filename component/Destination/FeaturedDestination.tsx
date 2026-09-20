"use client";

import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { FaPlay } from "react-icons/fa";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export interface DestinationStat {
  value: string;
  label: string;
}

export interface FeaturedDestinationProps {
  eyebrow?: string;
  countryName?: string;
  headlineLine1?: string;
  headlineLine2?: string;
  description1?: string;
  description2?: string;
  buttonText?: string;
  buttonHref?: string;
  image?: string;
  stats?: DestinationStat[];
}

export default function FeaturedDestination({
  eyebrow = "FEATURED DESTINATION",
  countryName = "NEPAL",
  headlineLine1 = "Where mountains",
  headlineLine2 = "meet meaning.",
  description1 = "From the world's highest peaks to ancient cities and vibrant local communities, Nepal offers unforgettable experiences for every kind of traveller.",
  description2 = "Travel through the Himalayas, explore UNESCO heritage sites, and immerse yourself in warm local traditions.",
  buttonText = "Explore Nepal",
  buttonHref = "/destination?country=nepal",
  image = "/images/hero-mountains.jpg",
  stats = [
    { value: "120+", label: "Tours" },
    { value: "10+", label: "Regions" },
    { value: "1000+", label: "Happy Travellers" },
  ],
}: FeaturedDestinationProps) {
  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-14">
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
          {/* Left Column (approx 40-42% width) */}
          <div className="lg:col-span-5 flex flex-col items-start justify-center text-left">
            <span className="text-[#F26522] text-xs sm:text-[13px] font-semibold tracking-wider uppercase block mb-1">
              {eyebrow}
            </span>

            <h3 className="text-black uppercase text-xl sm:text-2xl font-bold tracking-tight mb-1">
              {countryName}
            </h3>

            <h2
              className={`${playfair.className} text-3xl sm:text-4xl lg:text-[40px] font-bold text-black leading-[1.12] mb-4`}
            >
              {headlineLine1}
              <br />
              {headlineLine2}
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm md:text-[14px] leading-relaxed mb-3">
              {description1}
            </p>

            <p className="text-gray-600 text-xs sm:text-sm md:text-[14px] leading-relaxed mb-6">
              {description2}
            </p>

            <Link
              href={buttonHref}
              className="bg-[#F26522] hover:bg-[#d8480b] text-white font-medium text-xs sm:text-sm px-6 py-2.5 shadow-xs transition-colors rounded-none inline-flex items-center justify-center cursor-pointer"
            >
              {buttonText}
            </Link>
          </div>

          {/* Right Column (approx 58-60% width) */}
          <div className="lg:col-span-7 relative">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] overflow-hidden shadow-sm group bg-gray-100">
              {/* Main Scenery Image */}
              <Image
                src={image}
                alt={countryName}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />

              {/* Gradient overlay on right for statistics legibility */}
              <div className="absolute inset-0 bg-gradient-to-l from-black/65 via-black/20 to-transparent pointer-events-none" />

              {/* Play Button at Bottom-Left */}
              <button
                type="button"
                aria-label="Play video"
                className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 z-10 w-11 h-11 sm:w-13 sm:h-13 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:scale-105 hover:bg-white transition-all cursor-pointer"
              >
                <FaPlay className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black ml-0.5" />
              </button>

              {/* Vertical Statistics Column on Right */}
              {stats && stats.length > 0 && (
                <div className="absolute right-5 sm:right-7 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-5 sm:gap-6 text-right select-none">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-end">
                      <span className="text-white font-bold text-2xl sm:text-3xl leading-none drop-shadow-xs">
                        {stat.value}
                      </span>
                      <span className="text-white/85 text-[11px] sm:text-xs font-medium uppercase tracking-wider mt-1">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
