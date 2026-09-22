"use client";

import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export interface StoryStat {
  value: string;
  label: string;
}

const defaultStats: StoryStat[] = [
  { value: "15+", label: "Years of Experience" },
  { value: "10+", label: "Regions" },
  { value: "1000+", label: "Happy Travelers" },
  { value: "150+", label: "Tours & Experiences" },
];

export interface AboutStoryProps {
  eyebrow?: string;
  headingLine1?: string;
  headingLine2?: string;
  paragraph1?: string;
  paragraph2?: string;
  ctaText?: string;
  ctaHref?: string;
  stats?: StoryStat[];
  mainImage?: string;
  stackedImage1?: string;
  stackedImage2?: string;
  className?: string;
}

export default function AboutStory({
  eyebrow = "OUR STORY",
  headingLine1 = "A Journey Rooted",
  headingLine2 = "in the Himalayas",
  paragraph1 = "Mission Nepal Holidays was founded with a simple purpose — to share the breathtaking beauty, rich culture and warm hospitality of Nepal, Bhutan, Tibet and India with the world.",
  paragraph2 = "What started as a small team of passionate travelers and local experts has grown into a trusted travel company, helping thousands of travelers discover extraordinary places and unforgettable memories.",
  ctaText = "Our Journey",
  ctaHref = "#our-story",
  stats = defaultStats,
  mainImage = "/images/destinations/mount-kailash.jpg",
  stackedImage1 = "/images/destinations/mount-kailash.jpg",
  stackedImage2 = "/images/destinations/mount-kailash.jpg",
  className = "",
}: AboutStoryProps) {
  return (
    <section className={`w-full bg-white py-10 sm:py-12 md:py-14 ${className}`}>
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left Column: Narrative Content */}
          <div className="lg:col-span-5 flex flex-col items-start justify-center text-left">
            <span className="text-[#F26522] text-xs sm:text-[13px] font-semibold tracking-wider uppercase block mb-1.5 sm:mb-2">
              {eyebrow}
            </span>

            <h2
              className={`${playfair.className} text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-bold text-black leading-[1.18] mb-4`}
            >
              {headingLine1}
              <br />
              {headingLine2}
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3.5 max-w-lg">
              {paragraph1}
            </p>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 max-w-lg">
              {paragraph2}
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

          {/* Right Column: Image Collage + Statistics */}
          <div className="lg:col-span-7">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 lg:gap-5 items-stretch">
              {/* Main Large Image */}
              <div className="relative flex-1 min-h-[240px] sm:min-h-[280px] lg:min-h-[330px] rounded-none overflow-hidden bg-gray-100 shadow-2xs group">
                <Image
                  src={mainImage}
                  alt="Himalayan journey"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 35vw"
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              {/* Two Stacked Smaller Images */}
              <div className="flex flex-row sm:flex-col gap-3 sm:gap-4 w-full sm:w-[130px] md:w-[150px] lg:w-[165px] shrink-0">
                <div className="relative flex-1 sm:h-[135px] lg:h-[155px] min-h-[110px] rounded-none overflow-hidden bg-gray-100 shadow-2xs group">
                  <Image
                    src={stackedImage1}
                    alt="Travel destination"
                    fill
                    sizes="(max-width: 640px) 50vw, 165px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative flex-1 sm:h-[135px] lg:h-[155px] min-h-[110px] rounded-none overflow-hidden bg-gray-100 shadow-2xs group">
                  <Image
                    src={stackedImage2}
                    alt="Mountain view"
                    fill
                    sizes="(max-width: 640px) 50vw, 165px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Statistics Column */}
              <div className="flex flex-row sm:flex-col justify-between sm:justify-around gap-3 sm:gap-2 py-2 sm:py-1 px-1 sm:px-2 shrink-0 border-t sm:border-t-0 sm:border-l border-gray-100/80">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col text-left">
                    <span className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#F26522] leading-none">
                      {stat.value}
                    </span>
                    <span className="text-gray-500 text-[10.5px] sm:text-xs leading-tight mt-1 max-w-[100px]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
