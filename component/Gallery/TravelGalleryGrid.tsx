"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight, FaSearchPlus } from "react-icons/fa";
import { galleryLayout } from "@/lib/api/gallery";

export interface GalleryPhoto { id: string; src: string; alt: string; title: string; location?: string; sortOrder: number }

export default function TravelGalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + photos.length) % photos.length
    );
  }, [photos.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % photos.length
    );
  }, [photos.length]);

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

  const activePhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  return (
    <section className="w-full bg-white pb-12 sm:pb-16 md:pb-20">
      <div className="site-container">
        {/* Gallery Grid - 4 Columns on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 md:gap-4 items-center">
          {photos.map((photo, index) => {
            return (
              <div
                key={photo.id}
                onClick={() => setSelectedIndex(index)}
                className={`relative w-full overflow-hidden group cursor-pointer bg-gray-100 ${
                  galleryLayout(photo.sortOrder).spanClass || "col-span-1"
                } ${galleryLayout(photo.sortOrder).aspectClass || "aspect-square"}`}
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
                {selectedIndex + 1} / {photos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
