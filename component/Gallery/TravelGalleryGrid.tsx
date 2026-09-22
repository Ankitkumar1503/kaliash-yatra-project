"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight, FaSearchPlus } from "react-icons/fa";

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  title: string;
  location?: string;
  spanClass?: string;
  aspectClass?: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  // Row 1
  {
    id: "g1",
    src: "/images/destinations/mount-kailash.jpg",
    alt: "Sacred Mount Kailash and alpine lake reflection",
    title: "Lake Reflection & Mountain Ridge",
    location: "Tibet Autonomous Region",
    spanClass: "col-span-1",
    aspectClass: "aspect-[4/3] sm:aspect-square md:aspect-[4/3]",
  },
  {
    id: "g2",
    src: "/images/destinations/everest.jpg",
    alt: "Mount Everest peak in early morning sunrise",
    title: "Everest Morning Alpenglow",
    location: "Khumbu, Nepal",
    spanClass: "col-span-1",
    aspectClass: "aspect-square",
  },
  {
    id: "g3",
    src: "/images/destinations/pokhara.jpg",
    alt: "Panoramic views of valleys and distant snowy mountains",
    title: "Annapurna Valley Vista",
    location: "Pokhara, Nepal",
    spanClass: "col-span-1",
    aspectClass: "aspect-square",
  },
  {
    id: "g4",
    src: "/images/gallery/gallery-1.jpg",
    alt: "Snow-covered pyramid mountain peak against blue sky",
    title: "Himalayan Solitude",
    location: "Nepal Himalayas",
    spanClass: "col-span-1",
    aspectClass: "aspect-square",
  },

  // Row 2
  {
    id: "g5",
    src: "/images/kailash-1.jpg",
    alt: "Starry night sky over sacred mountain ranges",
    title: "Milky Way Over Kailash",
    location: "Tibet",
    spanClass: "col-span-1",
    aspectClass: "aspect-square",
  },
  {
    id: "g6",
    src: "/images/gallery/gallery-5.jpg",
    alt: "Evening cloud ocean surrounding solitary peak",
    title: "Island in the Clouds",
    location: "Eastern Himalayas",
    spanClass: "col-span-1",
    aspectClass: "aspect-square",
  },
  {
    id: "g7",
    src: "/images/hero-mountains.jpg",
    alt: "Iconic green sea mountain rising dramatically",
    title: "Emerald Mountain Sanctuary",
    location: "Himalayan Foothills",
    spanClass: "col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2",
    aspectClass: "aspect-[16/10] sm:aspect-[2/1]",
  },
  {
    id: "g8",
    src: "/images/adventures/adv-1.jpg",
    alt: "Alpine meadow with wildflowers facing jagged peaks",
    title: "High Altitude Wildflowers",
    location: "Langtang, Nepal",
    spanClass: "col-span-1",
    aspectClass: "aspect-square",
  },

  // Row 3
  {
    id: "g9",
    src: "/images/gallery/gallery-3.jpg",
    alt: "Crystal alpine lake with forested shore and rocky heights",
    title: "Turquoise Mountain Waters",
    location: "Rara Lake, Nepal",
    spanClass: "col-span-1",
    aspectClass: "aspect-square",
  },
  {
    id: "g10",
    src: "/images/tours/tour-2.jpg",
    alt: "Scenic highway leading into towering mountain ranges",
    title: "The Road to Adventure",
    location: "Trans-Himalayan Highway",
    spanClass: "col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2",
    aspectClass: "aspect-[16/10] sm:aspect-[2/1]",
  },
  {
    id: "g11",
    src: "/images/expeditions/expedition-2.jpg",
    alt: "Golden sunset light illuminating vertical rock face",
    title: "Golden Hour Pinnacle",
    location: "Manaslu Circuit",
    spanClass: "col-span-1",
    aspectClass: "aspect-square",
  },
  {
    id: "g12",
    src: "/images/adventures/adv-3.jpg",
    alt: "Misty pine forest canyon with rushing river",
    title: "Whispering River Canyon",
    location: "Marsyangdi Valley",
    spanClass: "col-span-1",
    aspectClass: "aspect-square",
  },

  // Row 4
  {
    id: "g13",
    src: "/images/kailash-2.jpg",
    alt: "Stargazing and night sky over high altitude lake",
    title: "Lake of the Stars",
    location: "Mansarovar Lake",
    spanClass: "col-span-1",
    aspectClass: "aspect-square",
  },
  {
    id: "g14",
    src: "/images/expeditions/expedition-4.jpg",
    alt: "Dramatic golden cloud enveloping mountain peak",
    title: "Halo of the Summit",
    location: "Annapurna Range",
    spanClass: "col-span-1",
    aspectClass: "aspect-square",
  },
  {
    id: "g15",
    src: "/images/gallery/gallery-4.jpg",
    alt: "Serene morning reflections on alpine water",
    title: "Reflections in Still Water",
    location: "Gokyo Lakes",
    spanClass: "col-span-1",
    aspectClass: "aspect-square",
  },
  {
    id: "g16",
    src: "/images/destinations/kathmandu.jpg",
    alt: "Panoramic lake and valley against expansive sky",
    title: "Wide Open Horizons",
    location: "Central Nepal",
    spanClass: "col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1",
    aspectClass: "aspect-square",
  },

  // Row 5
  {
    id: "g17",
    src: "/images/zermatt/overview-1.jpg",
    alt: "Sweeping winter mountain valley with snow-capped peaks",
    title: "Valley of Eternal Snows",
    location: "Mustang, Nepal",
    spanClass: "col-span-1",
    aspectClass: "aspect-[4/3] sm:aspect-square md:aspect-[4/3]",
  },
  {
    id: "g18",
    src: "/images/kailash-3.jpg",
    alt: "Textured black and white mountain ridge",
    title: "Monochrome Majesty",
    location: "Kailash North Face",
    spanClass: "col-span-1",
    aspectClass: "aspect-square",
  },
  {
    id: "g19",
    src: "/images/zermatt/overview-2.jpg",
    alt: "Vibrant green highland pasture with traditional chalets",
    title: "Highland Pastures",
    location: "Helambu Valley",
    spanClass: "col-span-1",
    aspectClass: "aspect-square",
  },
  {
    id: "g20",
    src: "/images/blogs/blog-1.jpg",
    alt: "Warm pink and orange hues coating mountain peaks",
    title: "Rose Dawn on the Crags",
    location: "Dhaulagiri Range",
    spanClass: "col-span-1",
    aspectClass: "aspect-square",
  },

  // Row 6
  {
    id: "g21",
    src: "/images/adventures/adv-4.jpg",
    alt: "Glassy lake mirroring sharp jagged peaks",
    title: "Mirror of the Gods",
    location: "Gosainkunda Lake",
    spanClass: "col-span-1",
    aspectClass: "aspect-square",
  },
  {
    id: "g22",
    src: "/images/blogs/blog-2.jpg",
    alt: "Silhouetted mountain ridges descending into misty valleys",
    title: "Chiaroscuro Ridges",
    location: "Makalu Barun",
    spanClass: "col-span-1",
    aspectClass: "aspect-square",
  },
  {
    id: "g23",
    src: "/images/zermatt/overview-4.jpg",
    alt: "Expansive high altitude plateau under dramatic skies",
    title: "Great Alpine Valley",
    location: "Upper Mustang",
    spanClass: "col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2",
    aspectClass: "aspect-[16/10] sm:aspect-[2/1]",
  },
  {
    id: "g24",
    src: "/images/adventures/adv-2.jpg",
    alt: "Lush green mountain slope illuminated by afternoon sunlight",
    title: "Golden Grasslands",
    location: "Khaptad National Park",
    spanClass: "col-span-1",
    aspectClass: "aspect-square",
  },

  // Row 7
  {
    id: "g25",
    src: "/images/blogs/blog-3.jpg",
    alt: "Deep red and purple twilight over distant mountain ranges",
    title: "Crimson Twilight",
    location: "Kanchenjunga Foothills",
    spanClass: "col-span-1",
    aspectClass: "aspect-square",
  },
  {
    id: "g26",
    src: "/images/expeditions/expedition-3.jpg",
    alt: "Dramatic sharp sawtooth ridge line breaking through clouds",
    title: "The Sawtooth Crest",
    location: "Rolwaling Valley",
    spanClass: "col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2",
    aspectClass: "aspect-[16/10] sm:aspect-[2/1]",
  },
  {
    id: "g27",
    src: "/images/zermatt/overview-3.jpg",
    alt: "Endless rolling green hills leading to snow mountains",
    title: "Green Meadows to Snowy Crests",
    location: "Dolpo Region",
    spanClass: "col-span-1",
    aspectClass: "aspect-square",
  },
  {
    id: "g28",
    src: "/images/adventures/adv-5.jpg",
    alt: "Rapid mountain torrent coursing through boulder strewn riverbed",
    title: "Bhotekoshi Torrent",
    location: "Sindhupalchok, Nepal",
    spanClass: "col-span-1",
    aspectClass: "aspect-square",
  },

  // Row 8
  {
    id: "g29",
    src: "/images/destinations/lumbini.jpg",
    alt: "Soft morning haze wrapping tranquil mountain slopes",
    title: "Morning Mists of Peace",
    location: "Lumbini Region",
    spanClass: "col-span-1",
    aspectClass: "aspect-square",
  },
  {
    id: "g30",
    src: "/images/expeditions/expedition-1.jpg",
    alt: "Imposing sheer limestone cliff over green valley floor",
    title: "Sheer Wall of the Himalayas",
    location: "Annapurna Sanctuary",
    spanClass: "col-span-1",
    aspectClass: "aspect-square",
  },
  {
    id: "g31",
    src: "/images/gallery/gallery-2.jpg",
    alt: "Layered mountain waves fading into azure fog",
    title: "Blue Ridge Horizons",
    location: "Nagarkot, Nepal",
    spanClass: "col-span-1",
    aspectClass: "aspect-square",
  },
  {
    id: "g32",
    src: "/images/tours/tour-1.jpg",
    alt: "Purple and magenta twilight reflecting across glassy water",
    title: "Twilight Reflection",
    location: "Phewa Lake, Pokhara",
    spanClass: "col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2",
    aspectClass: "aspect-[16/10] sm:aspect-[2/1]",
  },
];

export default function TravelGalleryGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + galleryPhotos.length) % galleryPhotos.length
    );
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryPhotos.length
    );
  }, []);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  const activePhoto = selectedIndex !== null ? galleryPhotos[selectedIndex] : null;

  return (
    <section className="w-full bg-white pb-12 sm:pb-16 md:pb-20">
      <div className="site-container">
        {/* Gallery Grid - 4 Columns on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 md:gap-4 items-center">
          {galleryPhotos.map((photo, index) => {
            return (
              <div
                key={photo.id}
                onClick={() => setSelectedIndex(index)}
                className={`relative w-full overflow-hidden group cursor-pointer bg-gray-100 ${
                  photo.spanClass || "col-span-1"
                } ${photo.aspectClass || "aspect-square"}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Subtle dark overlay on hover */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 sm:p-4">
                  <div className="flex justify-end">
                    <span className="w-8 h-8 rounded-full bg-white/90 text-gray-800 flex items-center justify-center shadow-xs">
                      <FaSearchPlus className="text-xs" />
                    </span>
                  </div>

                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs sm:text-sm font-semibold drop-shadow-xs">
                      {photo.title}
                    </p>
                    {photo.location && (
                      <p className="text-white/80 text-[11px] sm:text-xs">
                        {photo.location}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
          onClick={handleClose}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close Lightbox"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 p-2.5 rounded-full transition-colors z-50 cursor-pointer"
          >
            <FaTimes className="w-5 h-5" />
          </button>

          {/* Previous Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous Image"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 p-3 sm:p-4 rounded-full transition-colors z-50 cursor-pointer"
          >
            <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next Image"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 p-3 sm:p-4 rounded-full transition-colors z-50 cursor-pointer"
          >
            <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-5xl w-full max-h-[88vh] flex flex-col items-center justify-center select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Container */}
            <div className="relative w-full h-[65vh] sm:h-[75vh] flex items-center justify-center">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                priority
                sizes="(max-width: 1200px) 95vw, 1200px"
                className="object-contain"
              />
            </div>

            {/* Caption & Counter */}
            <div className="w-full flex items-center justify-between text-white mt-3 px-2 sm:px-4">
              <div>
                <h3 className="text-sm sm:text-base font-semibold">
                  {activePhoto.title}
                </h3>
                {activePhoto.location && (
                  <p className="text-xs text-white/70">
                    {activePhoto.location}
                  </p>
                )}
              </div>
              <span className="text-xs sm:text-sm text-white/70 font-mono">
                {selectedIndex + 1} / {galleryPhotos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
