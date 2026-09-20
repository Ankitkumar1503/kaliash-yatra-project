"use client";

import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

interface FeaturedActivityProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  image?: string;
  className?: string;
}

export default function FeaturedActivity({
  eyebrow = "FEATURED ACTIVITY",
  heading = "Trekking in Nepal",
  description = "Experience the world's most iconic trekking routes, from Everest Base Camp to the Annapurna Circuit. Walk through stunning mountain landscapes, traditional villages and ancient trails that offer a true Himalayan adventure.",
  ctaText = "Explore Trekking Tours",
  ctaHref = "/tours",
  image = "/images/kailash-1.jpg",
  className = "",
}: FeaturedActivityProps) {
  return (
    <section
      className={`w-full bg-white py-8 sm:py-10 lg:py-12 px-4 sm:px-5 lg:px-6 xl:px-8 ${className}`}
    >
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left Column (approx 40-42% width) - Vertically Centered */}
          <div className="lg:col-span-5 flex flex-col items-start justify-center text-left">
            <span className="text-[#F26522] text-xs sm:text-[13px] font-semibold tracking-wider uppercase block mb-1">
              {eyebrow}
            </span>
            <h2
              className={`${playfair.className} text-xl sm:text-2xl lg:text-3xl xl:text-[36px] font-semibold text-black leading-tight mb-2.5 sm:mb-3`}
            >
              {heading}
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed mb-5 max-w-lg">
              {description}
            </p>
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 bg-[#F26522] hover:bg-[#d85417] text-white font-medium text-xs sm:text-[13.5px] h-[46px] sm:h-[50px] px-5 sm:px-6 rounded-none transition-colors shadow-2xs group cursor-pointer"
            >
              <span>{ctaText}</span>
              <span className="transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

          {/* Right Column (approx 58-60% width): Controlled Responsive Height */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-[240px] sm:h-[280px] lg:h-[320px] xl:h-[350px] 2xl:h-[380px] overflow-hidden bg-gray-100 rounded-none shadow-2xs group">
              <Image
                src={image}
                alt={heading}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
