"use client";

import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

export default function DestinationOverview() {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left Column: Heading & Narrative */}
        <div className="flex flex-col justify-center">
          <span className="text-[#F26522] text-xs sm:text-sm font-semibold tracking-widest uppercase block mb-1.5">
            DESTINATION
          </span>
          <h2
            className={`${anton.className} text-2xl sm:text-3xl md:text-4xl lg:text-[40px] uppercase tracking-tight text-black leading-tight mb-5 sm:mb-6`}
          >
            WHY CHOOSE ZERMATT &amp; THE MATTERHORN?
          </h2>

          <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            <p>
              Nestled at the foot of the world-famous pyramid-shaped Matterhorn peak,
              Zermatt is Switzerland’s ultimate alpine wonderland. Free of combustion
              engine vehicles, this charming car-free village boasts crystal-clean mountain
              air, traditional timber-clad chalets, and cobblestone lanes lined with
              world-class restaurants and historic boutique shops.
            </p>
            <p>
              Whether you are riding Europe’s highest open-air cogwheel railway up to
              Gornergrat, gazing over 29 peaks exceeding 4,000 meters, or skiing on year-round
              glacier slopes, Zermatt offers an unmatched fusion of high-altitude adventure,
              serene alpine lakes, and legendary Swiss alpine luxury.
            </p>
          </div>
        </div>

        {/* Right Column: 2x2 Image Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xs group bg-gray-100">
            <Image
              src="/images/zermatt/overview-1.jpg"
              alt="Zermatt alpine valley village"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xs group bg-gray-100">
            <Image
              src="/images/zermatt/overview-2.jpg"
              alt="Swiss mountain train by alpine lake"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xs group bg-gray-100">
            <Image
              src="/images/zermatt/overview-3.jpg"
              alt="Alpine peaks and mountain chalets"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xs group bg-gray-100">
            <Image
              src="/images/zermatt/overview-4.jpg"
              alt="Historic alpine river and bridge in Zermatt"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
