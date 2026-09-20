"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Anton } from "next/font/google";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

interface HeroSlide {
  id: number;
  badgeText: string;
  headlineLine1: string;
  headlineLine2: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  alt: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    badgeText: "The Best Tour Booking 2026",
    headlineLine1: "FIND  A TOUR THAT",
    headlineLine2: "FEELS LIKE US",
    description:
      "Extraordinary journeys across Nepal, Bhutan, Tibet & India. Discover the best experiences, local culture and unforgettable Himalayan adventures.",
    ctaText: "Explore Tours",
    ctaLink: "/destination",
    image: "/images/hero-mountains.jpg",
    alt: "Himalayan Mountain Landscape",
  },
  {
    id: 2,
    badgeText: "Kailash Mansarovar Yatra",
    headlineLine1: "SACRED PEAKS OF",
    headlineLine2: "MOUNT KAILASH",
    description:
      "Embark on the ultimate spiritual pilgrimage around sacred Mount Kailash and the divine holy waters of Lake Mansarovar.",
    ctaText: "Explore Tours",
    ctaLink: "/destination?country=tibet",
    image: "/images/destinations/mount-kailash.jpg",
    alt: "Mount Kailash Sacred Peak",
  },
  {
    id: 3,
    badgeText: "Everest Himalayan Expedition",
    headlineLine1: "STAND AT THE",
    headlineLine2: "TOP OF THE WORLD",
    description:
      "Trek through iconic Sherpa villages, ancient monasteries, and high alpine ridges to the legendary Everest Base Camp.",
    ctaText: "Explore Tours",
    ctaLink: "/destination?country=nepal",
    image: "/images/destinations/everest.jpg",
    alt: "Everest Base Camp Trek",
  },
  {
    id: 4,
    badgeText: "Annapurna & Pokhara Valley",
    headlineLine1: "DISCOVER SERENE",
    headlineLine2: "LAKES & PEAKS",
    description:
      "Wake up to golden sunrises over the Annapurna range and tranquil boat journeys across sacred Phewa Lake in Pokhara.",
    ctaText: "Explore Tours",
    ctaLink: "/destination?country=nepal",
    image: "/images/destinations/pokhara.jpg",
    alt: "Pokhara Annapurna Sunrise",
  },
  {
    id: 5,
    badgeText: "Kathmandu Valley Heritage",
    headlineLine1: "ANCIENT TEMPLES",
    headlineLine2: "SACRED TRADITIONS",
    description:
      "Immerse yourself in centuries of Newari craftsmanship, medieval palace squares, and spiritual Buddhist stupas.",
    ctaText: "Explore Tours",
    ctaLink: "/destination?country=nepal",
    image: "/images/destinations/kathmandu.jpg",
    alt: "Kathmandu Ancient Durbar Square",
  },
  {
    id: 6,
    badgeText: "Spiritual Lumbini Pilgrimage",
    headlineLine1: "BIRTHPLACE OF",
    headlineLine2: "LORD BUDDHA",
    description:
      "Find peace and tranquility at the holy Maya Devi Temple and sacred monastic zones of Lumbini, Nepal.",
    ctaText: "Explore Tours",
    ctaLink: "/destination?country=nepal",
    image: "/images/destinations/lumbini.jpg",
    alt: "Sacred Lumbini Monasteries",
  },
  {
    id: 7,
    badgeText: "Bhutan Dragon Kingdom",
    headlineLine1: "MYSTICAL LAND OF",
    headlineLine2: "THUNDER DRAGON",
    description:
      "Hike to the breathtaking cliffside Tiger's Nest monastery and experience the untouched culture of the Himalayan kingdom.",
    ctaText: "Explore Tours",
    ctaLink: "/destination?country=bhutan",
    image: "/images/kailash-1.jpg",
    alt: "Bhutan Himalayan Valley",
  },
  {
    id: 8,
    badgeText: "Tibet High Plateau",
    headlineLine1: "ROOF OF THE WORLD",
    headlineLine2: "SPIRITUAL TIBET",
    description:
      "Cross high mountain passes to the majestic Potala Palace in Lhasa and turquoise alpine lakes across Tibet.",
    ctaText: "Explore Tours",
    ctaLink: "/destination?country=tibet",
    image: "/images/kailash-2.jpg",
    alt: "Tibet High Altitude Plateau",
  },
  {
    id: 9,
    badgeText: "Holy Lake Mansarovar",
    headlineLine1: "DIVINE PURITY AT",
    headlineLine2: "LAKE MANSAROVAR",
    description:
      "Take a sacred dip in the crystal turquoise waters of Mansarovar reflecting the snow-capped peak of Mount Kailash.",
    ctaText: "Explore Tours",
    ctaLink: "/destination?country=tibet",
    image: "/images/kailash-3.jpg",
    alt: "Sacred Lake Mansarovar",
  },
  {
    id: 10,
    badgeText: "Golden Triangle & Himalaya",
    headlineLine1: "SPLENDORS OF",
    headlineLine2: "INCREDIBLE INDIA",
    description:
      "Discover the heritage fortresses of Rajasthan, the Taj Mahal, and peaceful Himalayan foothills of Ladakh.",
    ctaText: "Explore Tours",
    ctaLink: "/destination?country=india",
    image: "/images/hero-mountains.jpg",
    alt: "Incredible Himalayan Journeys",
  },
  {
    id: 11,
    badgeText: "High Alpine Treks 2026",
    headlineLine1: "UNTOUCHED TRAILS",
    headlineLine2: "WILD ADVENTURES",
    description:
      "Venture off the beaten path with expert Sherpa guides into remote valleys and towering glaciated passes.",
    ctaText: "Explore Tours",
    ctaLink: "/destination",
    image: "/images/destinations/everest.jpg",
    alt: "High Alpine Himalayan Trek",
  },
  {
    id: 12,
    badgeText: "Custom Group Expeditions",
    headlineLine1: "YOUR JOURNEY OF",
    headlineLine2: "A LIFETIME",
    description:
      "Tailor-made private and small-group journeys crafted with personalized care, safety, and luxury Himalayan stays.",
    ctaText: "Explore Tours",
    ctaLink: "/destination",
    image: "/images/destinations/mount-kailash.jpg",
    alt: "Tailor-made Himalayan Tour",
  },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative w-full bg-[#f2f5f6] overflow-hidden">
      {/* 50% / 50% Two-Column Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        {/* LEFT CONTENT AREA */}
        <div className="flex flex-col justify-start items-start pl-6 sm:pl-8 lg:pl-10 xl:pl-16 2xl:pl-20 pr-6 lg:pr-8 pt-8 sm:pt-12 lg:pt-[85px] pb-10 lg:pb-[100px] z-10">
          {/* Badge */}
          <div className="inline-flex items-center bg-[#fdeee9] text-gray-800 text-xs sm:text-[13px] font-medium rounded-full p-1 pr-3 mb-[22px] sm:mb-[26px] shadow-2xs">
            <span className="bg-[#F26522] text-white font-semibold px-2.5 py-0.5 rounded-full text-[11px] mr-2">
              Trusted
            </span>
            <span className="font-medium text-gray-800 text-xs sm:text-[13px]">
              {slide.badgeText}
            </span>
          </div>

          {/* Headline: target 60-68px on desktop, exactly 2 lines */}
          <h1
            className={`${anton.className} text-3xl sm:text-5xl md:text-6xl lg:text-[58px] xl:text-[64px] 2xl:text-[68px] text-black leading-[0.96] uppercase tracking-tight mb-[20px] sm:mb-[24px]`}
          >
            <span className="block whitespace-nowrap">
              {slide.headlineLine1}
            </span>
            <span className="block whitespace-nowrap">
              {slide.headlineLine2}
            </span>
          </h1>

          {/* Description: refined font size ~15px, comfortable readability */}
          <p className="text-gray-700 text-xs sm:text-sm lg:text-[15px] xl:text-[15.5px] font-normal leading-relaxed max-w-[620px] mb-[24px] sm:mb-[28px]">
            {slide.description}
          </p>

          {/* Explore Tours Button: refined height & font size */}
          <Link
            href={slide.ctaLink}
            className="w-full sm:w-[220px] lg:w-[240px] h-[48px] sm:h-[52px] lg:h-[56px] bg-[#F26522] hover:bg-[#d8480b] text-white font-semibold text-sm sm:text-[15px] inline-flex items-center justify-center transition-all duration-200 rounded-none shadow-xs hover:shadow-md cursor-pointer"
          >
            {slide.ctaText}
          </Link>
        </div>

        {/* RIGHT IMAGE AREA */}
        <div className="relative w-full pb-0 h-[380px] sm:h-[460px] md:h-[520px] lg:h-auto min-h-[380px] lg:min-h-[640px] flex flex-col justify-end">
          {/* Curved Mountain Image Container */}
          <div className="relative w-full h-full min-h-[340px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[600px] overflow-hidden rounded-tl-[110px] sm:rounded-tl-[130px] lg:rounded-tl-[150px]">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center w-full h-full transition-opacity duration-300"
            />
            {/* Subtle bottom-right gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Carousel Navigation Controller Pill (< 1 / 12 >) */}
      {/* <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center bg-[#1c2327]/90 backdrop-blur-xs text-white rounded-full px-4 py-1.5 shadow-lg border border-white/10 space-x-3 select-none">
        <button
          onClick={prevSlide}
          className="p-1 text-gray-300 hover:text-[#F26522] transition-colors focus:outline-none cursor-pointer"
          aria-label="Previous Slide"
        >
          <FaChevronLeft className="w-3 h-3" />
        </button>
        <span className="text-xs sm:text-sm font-semibold tracking-wider px-1">
          {currentSlide + 1} / {heroSlides.length}
        </span>
        <button
          onClick={nextSlide}
          className="p-1 text-gray-300 hover:text-[#F26522] transition-colors focus:outline-none cursor-pointer"
          aria-label="Next Slide"
        >
          <FaChevronRight className="w-3 h-3" />
        </button>
      </div> */}

      {/* Bottom Thin Organic Torn-Paper / Brush Edge Transition across BOTH columns */}
      <div className="absolute -bottom-0.5 left-0 right-0 w-full z-20 pointer-events-none overflow-hidden select-none leading-none">
        <Image
          src="/images/hero-brush-edge.png"
          alt=""
          width={1920}
          height={65}
          priority
          className="w-full h-8 sm:h-10 md:h-12 lg:h-14 object-fill block"
        />
      </div>
    </section>
  );
}
