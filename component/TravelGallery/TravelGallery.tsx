"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  heightClass: string;
}

const galleryData: GalleryItem[] = [
  {
    id: "1",
    image: "/images/gallery/gallery-1.jpg",
    alt: "Mount Kailash sunrise view",
    heightClass: "h-[220px] sm:h-[260px]",
  },
  {
    id: "2",
    image: "/images/gallery/gallery-2.jpg",
    alt: "Kathmandu Durbar Square heritage",
    heightClass: "h-[160px] sm:h-[190px]",
  },
  {
    id: "3",
    image: "/images/gallery/gallery-3.jpg",
    alt: "Himalayan trekking trail",
    heightClass: "h-[260px] sm:h-[300px]",
  },
  {
    id: "4",
    image: "/images/gallery/gallery-4.jpg",
    alt: "Pokhara Phewa lake & mountains",
    heightClass: "h-[160px] sm:h-[190px]",
  },
  {
    id: "5",
    image: "/images/gallery/gallery-5.jpg",
    alt: "Sacred Himalayan peak",
    heightClass: "h-[220px] sm:h-[260px]",
  },
];

export default function TravelGallery() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      {/* Centered Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 px-4 md:px-6">
        <span className="text-[#38BDF8] text-xs sm:text-sm font-semibold tracking-widest uppercase block mb-1.5 text-center">
          MODERN & BEAUTIFUL
        </span>
        <h2
          className={`${playfair.className} text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center mt-1 leading-tight`}
        >
          The Travel Gallery
        </h2>
      </div>

      {/* Contained 5-Image Gallery Grid with gap-4 and alternating vertical heights */}
      <div className="px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 items-center">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className={`relative w-full ${item.heightClass} overflow-hidden group cursor-pointer bg-gray-100`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
