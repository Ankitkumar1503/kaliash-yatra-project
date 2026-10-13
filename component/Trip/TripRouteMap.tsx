"use client";

import Image from "next/image";

interface TripRouteMapProps {
  title?: string;
  mapImageUrl?: string | null;
  altitudeChartUrl?: string | null;
  itineraryDays?: Array<{
    dayNumber: number;
    title: string;
    details?: { altitude?: string };
  }>;
  className?: string;
}

export default function TripRouteMap({
  title = "Route Map",
  mapImageUrl,
  itineraryDays = [],
  className = "",
}: TripRouteMapProps) {
  const altitudePoints = itineraryDays
    .map((day) => {
      const rawAlt = day.details?.altitude || "";
      const match = rawAlt.match(/([\d,]+)\s*m/i);
      const val = match ? Number(match[1].replace(/,/g, "")) : null;
      return {
        day: day.dayNumber,
        label: day.title.split(":")[1]?.trim() || day.title,
        meters: val || null,
      };
    })
    .filter((d) => d.meters !== null);

  const minAlt = altitudePoints.length > 0 ? Math.min(...altitudePoints.map((p) => p.meters!)) : 1365;
  const maxAlt = altitudePoints.length > 0 ? Math.max(...altitudePoints.map((p) => p.meters!)) : 5630;

  return (
    <section id="route-map" className={`w-full bg-white py-8 sm:py-10 lg:py-12 px-4 sm:px-5 lg:px-6 xl:px-8 ${className}`}>
      <div className="max-w-[1360px] mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-slate-900 tracking-tight mb-5">
          {title}
        </h2>

        <div className="bg-white border border-gray-200/90 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xs space-y-6">
          {/* Main Map Infographic Image */}
          {mapImageUrl && (
            <div className="relative w-full aspect-[16/9] sm:aspect-[2.1/1] rounded-xl overflow-hidden bg-slate-50 border border-slate-100 shadow-2xs">
              <Image
                unoptimized
                src={mapImageUrl}
                alt={title}
                fill
                priority
                className="object-contain sm:object-cover"
              />
            </div>
          )}

          {/* Altitude Chart Box */}
          <div className="border border-slate-200 rounded-xl p-5 sm:p-6 bg-[#fcfcfd]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Altitude Chart
                </h3>
                <div className="w-8 h-0.5 bg-[#F26522] rounded mt-1" />
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 bg-orange-50/80 px-3 py-1.5 rounded-lg border border-orange-100">
                <span className="text-[#F26522]">▲</span>
                <span>Journey from <strong className="text-slate-900">{minAlt.toLocaleString()} m</strong> to <strong className="text-slate-900">{maxAlt.toLocaleString()} m</strong></span>
              </div>
            </div>

            {/* Visual SVG Altitude Curve */}
            {altitudePoints.length > 1 && (
              <div className="w-full overflow-x-auto pb-2">
                <div className="min-w-[640px] h-48 sm:h-56 relative flex items-end">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 200" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="altitudeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#F26522" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#F26522" stopOpacity="0.02" />
                      </linearGradient>
                    </defs>

                    {/* Generate SVG Path Points */}
                    {(() => {
                      const range = maxAlt - minAlt || 1;
                      const points = altitudePoints.map((pt, idx) => {
                        const x = (idx / (altitudePoints.length - 1)) * 960 + 20;
                        const normalizedY = ((pt.meters! - minAlt) / range);
                        const y = 170 - normalizedY * 130;
                        return { x, y, pt };
                      });

                      const pathD = points.reduce((acc, p, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`, '');
                      const areaD = `${pathD} L ${points[points.length - 1].x} 190 L ${points[0].x} 190 Z`;

                      return (
                        <>
                          <path d={areaD} fill="url(#altitudeGradient)" />
                          <path d={pathD} fill="none" stroke="#F26522" strokeWidth="2.5" />
                          {points.map((p, idx) => (
                            <g key={idx}>
                              <circle cx={p.x} cy={p.y} r="4.5" fill="#F26522" stroke="#ffffff" strokeWidth="2" />
                              <text x={p.x} y={p.y - 10} textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">
                                {p.pt.meters}
                              </text>
                            </g>
                          ))}
                        </>
                      );
                    })()}
                  </svg>
                </div>
                {/* Day Labels Strip */}
                <div className="min-w-[640px] flex justify-between border-t border-slate-200 pt-2 text-[11px] text-slate-500">
                  {altitudePoints.map((pt, idx) => (
                    <div key={idx} className="text-center truncate px-1" style={{ width: `${100 / altitudePoints.length}%` }}>
                      <span className="font-semibold text-slate-800 block">Day {pt.day}</span>
                      <span className="truncate block text-[10px] text-slate-500">{pt.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
