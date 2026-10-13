"use client";

import Image from "next/image";

interface TripElevationProfileProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string | null;
  itineraryDays?: Array<{
    dayNumber: number;
    title: string;
    details?: { altitude?: string };
  }>;
  className?: string;
}

export default function TripElevationProfile({
  title = "Elevation Profile",
  subtitle = "A visual journey through sacred landscapes and high-altitude Himalayan waypoints.",
  imageUrl,
  itineraryDays = [],
  className = "",
}: TripElevationProfileProps) {
  // Extract altitude points from itinerary if available
  const altitudePoints = itineraryDays
    .map((day) => {
      const rawAlt = day.details?.altitude || "";
      const match = rawAlt.match(/([\d,]+)\s*m/i);
      const val = match ? Number(match[1].replace(/,/g, "")) : null;
      return {
        day: day.dayNumber,
        label: day.title.split(":")[1]?.trim() || day.title,
        altitudeStr: rawAlt || (val ? `${val} m` : ""),
        meters: val || 2000,
      };
    })
    .filter((d) => d.meters > 0);

  return (
    <section id="elevation-profile" className={`w-full bg-white py-8 sm:py-10 lg:py-12 px-4 sm:px-5 lg:px-6 xl:px-8 ${className}`}>
      <div className="max-w-[1360px] mx-auto">
        <div className="bg-white border border-gray-200/90 rounded-2xl p-5 sm:p-7 lg:p-8 shadow-xs overflow-hidden">
          {/* Header */}
          <div className="mb-6">
            <div className="w-10 h-1 bg-[#F26522] rounded-full mb-3" />
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-slate-900 tracking-tight leading-tight">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Elevation Profile Graphic */}
          {imageUrl ? (
            <div className="relative w-full aspect-[21/9] sm:aspect-[2.4/1] rounded-xl overflow-hidden bg-slate-50 border border-slate-100 shadow-2xs">
              <Image
                unoptimized
                src={imageUrl}
                alt={title}
                fill
                priority
                className="object-contain sm:object-cover"
              />
            </div>
          ) : altitudePoints.length > 1 ? (
            <div className="mt-4 p-5 bg-gradient-to-b from-orange-50/40 to-slate-50 rounded-xl border border-orange-100/80">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Interactive Route Elevation Profile
                </span>
                <span className="text-xs font-bold text-[#F26522]">
                  Highest Altitude: {Math.max(...altitudePoints.map((p) => p.meters))} m
                </span>
              </div>
              <div className="relative h-48 sm:h-60 w-full flex items-end justify-between gap-1 pt-8">
                {altitudePoints.map((pt, i) => {
                  const maxMeters = Math.max(...altitudePoints.map((p) => p.meters), 6000);
                  const heightPercent = Math.max(15, Math.min(95, Math.round((pt.meters / maxMeters) * 100)));
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center group relative h-full justify-end">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded shadow pointer-events-none whitespace-nowrap z-10">
                        Day {pt.day}: {pt.meters} m
                      </div>
                      <div className="w-2.5 sm:w-3.5 rounded-t-full bg-gradient-to-t from-[#F26522] to-orange-400 group-hover:scale-y-105 transition-transform" style={{ height: `${heightPercent}%` }} />
                      <span className="text-[10px] text-slate-600 font-medium mt-2 truncate max-w-[45px] text-center">
                        D{pt.day}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
