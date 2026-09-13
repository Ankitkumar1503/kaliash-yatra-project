"use client";

import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  spanClass: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/images/gallery/gallery-3.jpg",
    alt: "Himalayan and alpine trail overlooking mountain range",
    spanClass: "col-span-12 md:col-span-4 row-span-2 min-h-[280px] md:min-h-[380px]",
  },
  {
    id: "2",
    src: "/images/blogs/blog-2.jpg",
    alt: "Cascading forest waterfall with hikers and umbrella",
    spanClass: "col-span-12 sm:col-span-6 md:col-span-4 row-span-2 min-h-[280px] md:min-h-[380px]",
  },
  {
    id: "3",
    src: "/images/gallery/gallery-4.jpg",
    alt: "Cascading turquoise waterfalls and emerald pools",
    spanClass: "col-span-12 sm:col-span-6 md:col-span-4 min-h-[200px]",
  },
  {
    id: "4",
    src: "/images/expeditions/expedition-3.jpg",
    alt: "Turquoise alpine lake with wooden rowboat and towering peaks",
    spanClass: "col-span-12 md:col-span-4 row-span-2 min-h-[280px] md:min-h-[380px]",
  },
  {
    id: "5",
    src: "/images/destinations/everest.jpg",
    alt: "High altitude zip-line adventure",
    spanClass: "col-span-6 sm:col-span-3 md:col-span-2 min-h-[180px]",
  },
  {
    id: "6",
    src: "/images/gallery/gallery-1.jpg",
    alt: "Alpine bungee jumping and outdoor thrill",
    spanClass: "col-span-6 sm:col-span-3 md:col-span-2 min-h-[180px]",
  },
  {
    id: "7",
    src: "/images/expeditions/expedition-2.jpg",
    alt: "Mountain stream under dramatic cloudy peaks",
    spanClass: "col-span-6 sm:col-span-3 md:col-span-2 min-h-[180px]",
  },
  {
    id: "8",
    src: "/images/gallery/gallery-5.jpg",
    alt: "Glowing blue mountain cavern waterfall",
    spanClass: "col-span-6 sm:col-span-3 md:col-span-2 min-h-[180px]",
  },
];

export default function DestinationPhotoGallery() {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <span className="text-[#F26522] text-xs sm:text-sm font-semibold tracking-wider uppercase block mb-1">
            OUR DESTINATIONS
          </span>
          <h2
            className={`${anton.className} text-2xl sm:text-3xl md:text-4xl lg:text-[40px] uppercase tracking-tight text-black leading-none`}
          >
            DESTINATION GALLERY
          </h2>
        </div>

        {/* Dynamic Mosaic Grid */}
        <div className="grid grid-cols-12 gap-3 sm:gap-4 auto-rows-fr">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className={`relative overflow-hidden rounded-lg group shadow-2xs cursor-pointer bg-gray-100 ${img.spanClass}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
