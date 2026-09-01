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
    <section className="w-full bg-white py-12 md:py-16 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-10 xl:gap-x-14 gap-y-10 items-start">
        {/* Left Column (Top aligned text + trek trail image below) */}
        <div className="flex flex-col">
          {/* Top Text Block */}
          <div className="mb-6 lg:mb-10">
            <span className="text-[#F26522] text-xs sm:text-sm font-medium tracking-wider uppercase mb-2 block">
              THE CONCEPT
            </span>
            <p
              className={`${lora.className} text-xl sm:text-2xl lg:text-3xl leading-relaxed text-gray-900 font-normal`}
            >
              The journey to Kailash Mansarovar takes you through remote
              Himalayan trails, sacred lakes, and untouched valleys of Nepal
              and Tibet. Our guides ensure every step of the parikrama is safe,
              comfortable, and spiritually grounding.
            </p>
          </div>

          {/* Bottom Trek Trail Image */}
          <div className="relative w-full aspect-[4/3] max-h-[320px] rounded-lg overflow-hidden shadow-xs bg-gray-100">
            <Image
              src="/images/kailash-1.jpg"
              alt="Kailash Mansarovar trek trail"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Column (Staggered/Offset lower than left column on desktop) */}
        <div className="lg:mt-12 xl:mt-16 flex flex-col space-y-6">
          {/* Top Large Sunrise Mountain Image */}
          <div className="relative w-full h-60 sm:h-72 lg:h-80 rounded-lg overflow-hidden shadow-xs bg-gray-100">
            <Image
              src="/images/kailash-2.jpg"
              alt="Mount Kailash sunrise view"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Bottom Row: Text + About Us Button (Left) & Small Peak Image (Right) */}
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-end">
            {/* Left Part: Text & About Us Button */}
            <div className="flex-1">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Accommodation along the route includes guesthouses and tented
                camps with warm meals, blankets, and basic amenities. Our
                support crew carries oxygen support and first-aid for
                high-altitude sections of the yatra.
              </p>
              <Link
                href="/about"
                className="inline-block bg-[#F26522] hover:bg-[#d85417] text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-md shadow-2xs hover:shadow-md transition-all mt-5"
              >
                About Us
              </Link>
            </div>

            {/* Right Part: Small Vertical Peak Image */}
            <div className="relative w-full sm:w-40 md:w-44 h-48 sm:h-56 rounded-lg overflow-hidden shrink-0 shadow-xs bg-gray-100 self-stretch sm:self-end">
              <Image
                src="/images/kailash-3.jpg"
                alt="Himalayan peak near Kailash route"
                fill
                sizes="(max-width: 640px) 100vw, 176px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
