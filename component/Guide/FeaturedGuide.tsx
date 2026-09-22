"use client";

import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export interface FeaturedGuideProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  image?: string;
  className?: string;
}

export default function FeaturedGuide({
  eyebrow = "NEPAL TRAVEL GUIDE",
  titleLine1 = "A Complete Guide to",
  titleLine2 = "Travelling in Nepal",
  description = "Everything you need to know before you go — from the best time to visit and entry requirements to local culture, food, transportation and practical travel tips.",
  ctaText = "Read Full Guide",
  ctaHref = "/guide/nepal",
  image = "/images/destinations/mount-kailash.jpg",
  className = "",
}: FeaturedGuideProps) {
  return (
    <section className={`w-full bg-white py-8 sm:py-10 lg:py-12 ${className}`}>
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-9 lg:gap-12 xl:gap-14 items-center">
          {/* Left Column (approx 60% width on desktop, 1st on mobile): Aspect-ratio travel photo */}
          <div className="lg:col-span-7 order-1">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] md:aspect-[16/9] lg:aspect-[16/10] overflow-hidden bg-gray-100 shadow-2xs group">
              <Image
                src={image}
                alt={`${titleLine1} ${titleLine2}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center group-hover:scale-103 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column (approx 40% width on desktop, 2nd on mobile): Content */}
          <div className="lg:col-span-5 order-2 flex flex-col items-start justify-center text-left">
            <span className="text-[#F26522] text-xs sm:text-[13px] font-semibold tracking-wider uppercase block mb-1 sm:mb-2">
              {eyebrow}
            </span>

            <h2
              className={`${playfair.className} text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-bold text-black leading-[1.18] mb-3 sm:mb-4`}
            >
              {titleLine1}
              <br />
              {titleLine2}
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm md:text-[14.5px] leading-relaxed mb-5 sm:mb-6 max-w-lg">
              {description}
            </p>

            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 bg-[#F26522] hover:bg-[#d85417] text-white font-medium text-xs sm:text-[13.5px] h-[44px] sm:h-[48px] px-6 sm:px-7 rounded-none transition-colors shadow-2xs group cursor-pointer"
            >
              <span>{ctaText}</span>
              <span className="transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
