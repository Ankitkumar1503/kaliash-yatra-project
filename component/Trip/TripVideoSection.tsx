"use client";

import { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";

interface TripVideoSectionProps {
  title?: string;
  videoUrl?: string | null;
  thumbnailUrl?: string | null;
  className?: string;
}

export default function TripVideoSection({
  title = "Holy Kailash Mansarovar Yatra",
  videoUrl,
  thumbnailUrl = "/images/destinations/everest.jpg",
  className = "",
}: TripVideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!videoUrl) return null;

  // Extract YouTube ID if applicable
  const getEmbedUrl = (url: string) => {
    const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1`;
    const vimeoMatch = url.match(/vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/[^\/]*\/videos\/|album\/(?:\d+\/)?video\/|video\/|)(\d+)/);
    if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <section className={`w-full bg-white py-10 sm:py-12 lg:py-14 px-4 sm:px-5 lg:px-6 xl:px-8 ${className}`}>
      <div className="max-w-[1360px] mx-auto">
        <div className="relative w-full aspect-[16/9] sm:aspect-[2.3/1] rounded-2xl overflow-hidden bg-slate-900 shadow-md group">
          {isPlaying ? (
            <div className="relative w-full h-full">
              <iframe
                src={embedUrl}
                title={title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                type="button"
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
              >
                <FaTimes className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <>
              {/* Background Poster Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${thumbnailUrl || "/images/destinations/everest.jpg"}')` }}
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

              {/* Center Play Button & Title */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F26522] hover:bg-[#d85417] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 cursor-pointer mb-4"
                >
                  <FaPlay className="w-6 h-6 sm:w-7 sm:h-7 ml-1" />
                </button>
                <span className="text-white/80 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-1">
                  Watch Experience Video
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                  {title}
                </h3>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
