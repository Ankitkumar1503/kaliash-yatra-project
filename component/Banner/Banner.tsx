"use client";

import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export default function Banner() {
  return (
    <section className="relative w-full bg-[#f3f5f7] overflow-hidden">
      {/* Two-column split-screen layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px] md:min-h-[480px] lg:min-h-[520px] max-h-[560px] w-full">
        {/* Left Column (Light gray/off-white background, centered content) */}
        <div className="flex flex-col justify-center px-6 md:px-10 lg:px-12 py-10 lg:py-14 z-10">
          {/* Pill / Badge */}
          <div className="inline-flex items-center bg-[#fdeee9] text-gray-800 text-xs sm:text-sm font-medium rounded-full p-1 pr-3.5 mb-5 w-fit shadow-2xs">
            <span className="bg-[#F26522] text-white font-bold px-2.5 py-0.5 rounded-full text-xs mr-2">
              Trusted
            </span>
            <span>The Best Tour Booking 2022</span>
          </div>

          {/* Heading with Anton display font */}
          <h1
            className={`${anton.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black leading-[0.98] uppercase tracking-tight`}
          >
            FIND A TOUR THAT FEELS
            <br />
            LIKE US
          </h1>

          {/* Subtext */}
          <p className="text-gray-500 text-sm sm:text-base mt-4 max-w-md font-normal">
            Get the best prices on 2,000,000+ propertites, worldwide
          </p>
        </div>

        {/* Right Column (Background image with top-left rounded corner) */}
        <div className="relative w-full h-[300px] lg:h-auto min-h-[300px] lg:min-h-full overflow-hidden rounded-tl-[50px] md:rounded-tl-[80px] lg:rounded-tl-[100px]">
          <Image
            src="/images/hero-mountains.jpg"
            alt="Hero Mountain Sunset"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center w-full h-full"
          />
          {/* Subtle dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Bottom Torn / Brush-Stroke Edge Effect */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-10 sm:h-14 lg:h-16 text-white fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 C30,18 60,10 90,26 C120,40 150,22 180,34 C210,46 240,28 270,40 C300,52 330,34 360,46 C390,58 420,40 450,52 C480,64 510,46 540,58 C570,70 600,52 630,64 C660,76 690,58 720,70 C750,82 780,64 810,76 C840,88 870,70 900,82 C930,94 960,76 990,88 C1020,100 1050,82 1080,94 C1110,106 1140,88 1170,98 C1185,103 1195,108 1200,112 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
