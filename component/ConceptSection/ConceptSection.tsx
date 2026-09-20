"use client";

import Image from "next/image";
import Link from "next/link";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function ConceptSection() {
  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-16 overflow-hidden">
      {/* Controlled Centered Content Container */}
      <div className="max-w-[1360px] mx-auto">
        {/* ROW 1: Concept Heading (Left) & Large Landscape Image (Right) */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 xl:gap-16">
          {/* Top-Left: Small Orange Label + Large Editorial Serif Text */}
          <div className="w-full lg:w-[53%] xl:w-[57%] shrink-0">
            <span className="text-[#F26522] text-xs sm:text-[13px] font-medium tracking-widest uppercase mb-2.5 sm:mb-3 block">
              THE CONCEPT
            </span>
            <h2
              className={`${lora.className} text-lg sm:text-xl md:text-2xl lg:text-[23px] xl:text-[27px] 2xl:text-[29px] leading-[1.38] text-gray-950 font-normal`}
            >
              At Mission Nepal Holiday, we design meaningful journeys to Nepal,
              Bhutan, Tibet and India — where breathtaking landscapes, rich
              cultures and warm local communities come together to create
              unforgettable travel experiences.
            </h2>
          </div>

          {/* Top-Right: Large Landscape Image (~45% width, clean rectangle) */}
          <div className="w-full lg:w-[45%] xl:w-[40%] shrink-0">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] lg:aspect-[16/9.8] max-h-[380px] overflow-hidden rounded-none shadow-2xs bg-gray-100">
              <Image
                src="/images/concept/concept-top-right.jpg"
                alt="Himalayan Mountain Range Peaks"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>

        {/* ROW 2: Bottom-Left Large Image + Center Content & CTA + Far-Right Small Image */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-10 xl:gap-14 pt-8 sm:pt-10">
          {/* Bottom-Left: Large Landscape Image (~35% width, flush with left edge) */}
          <div className="w-full lg:w-[36%] xl:w-[35%] shrink-0">
            <div className="relative w-full aspect-[16/9.5] sm:aspect-[16/9.2] max-h-[330px] overflow-hidden rounded-none shadow-2xs bg-gray-100">
              <Image
                src="/images/concept/concept-bottom-left.jpg"
                alt="Rugged Mountain Ridge"
                fill
                sizes="(max-width: 1024px) 100vw, 36vw"
                className="object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Center: Dual Paragraphs + Rectangular Orange About Us Button */}
          <div className="w-full lg:w-[42%] xl:w-[43%] flex flex-col justify-end space-y-3 sm:space-y-3.5">
            <p className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed font-normal">
              Discover extraordinary journeys across Nepal, Bhutan, Tibet and India,
              where stunning landscapes, vibrant cultures and authentic experiences
              come together.
            </p>
            <p className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed font-normal">
              Explore the Himalayas and beyond through unforgettable journeys
              shaped by spectacular landscapes, local traditions and authentic
              experiences.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="w-full sm:w-[200px] lg:w-[220px] h-[44px] sm:h-[48px] lg:h-[50px] bg-[#F26522] hover:bg-[#d8480b] text-white font-medium text-xs sm:text-sm inline-flex items-center justify-center transition-all duration-200 rounded-none shadow-xs hover:shadow-md cursor-pointer"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Far-Right: Small Vertical Image (~17% width, flush with right edge, bottom-aligned) */}
          <div className="w-full sm:w-auto lg:w-[17%] xl:w-[17%] shrink-0">
            <div className="relative w-full sm:w-[220px] lg:w-full aspect-[4/3.5] sm:aspect-[4/3.2] lg:aspect-[3/3.3] max-h-[250px] overflow-hidden rounded-none shadow-2xs bg-gray-100">
              <Image
                src="/images/concept/concept-bottom-right.jpg"
                alt="Golden Sunrise Himalayan Peak"
                fill
                sizes="(max-width: 1024px) 100vw, 18vw"
                className="object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
