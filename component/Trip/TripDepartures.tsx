"use client";

import { useState } from "react";
import { FaCalendarAlt, FaCheckCircle, FaUserFriends, FaChevronRight } from "react-icons/fa";

export interface DepartureItem {
  id?: string;
  startDate: string;
  endDate: string;
  totalSeats?: number;
  bookedSeats?: number;
  price?: number | string;
  status?: string;
}

interface TripDeparturesProps {
  departures?: DepartureItem[];
  currency?: string;
  tripPrice?: string;
  className?: string;
}

export default function TripDepartures({
  departures = [],
  currency = "USD",
  tripPrice = "2,750",
  className = "",
}: TripDeparturesProps) {
  const [selectedMonth, setSelectedMonth] = useState<string>("all");

  const months = Array.from(
    new Set(
      departures.map((d) => {
        const date = new Date(d.startDate);
        return isNaN(date.getTime()) ? "" : date.toLocaleString("en-US", { month: "short", year: "numeric" });
      }).filter(Boolean)
    )
  );

  const filtered = selectedMonth === "all"
    ? departures
    : departures.filter((d) => {
        const date = new Date(d.startDate);
        return !isNaN(date.getTime()) && date.toLocaleString("en-US", { month: "short", year: "numeric" }) === selectedMonth;
      });

  if (departures.length === 0) return null;

  return (
    <section id="departures" className={`w-full bg-[#f9fafb] py-10 sm:py-12 lg:py-14 px-4 sm:px-5 lg:px-6 xl:px-8 border-y border-gray-100 ${className}`}>
      <div className="max-w-[1360px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-[#F26522] text-xs font-semibold uppercase tracking-wider block mb-1">
              Fixed Departures
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              UPCOMING DEPARTURE DATES
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Guaranteed small-group departures. Select your preferred travel dates below.
            </p>
          </div>

          {months.length > 1 && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
              <button
                type="button"
                onClick={() => setSelectedMonth("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                  selectedMonth === "all" ? "bg-[#F26522] text-white" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                All Dates
              </button>
              {months.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setSelectedMonth(m)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                    selectedMonth === m ? "bg-[#F26522] text-white" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs divide-y divide-slate-100">
          {filtered.map((dep, idx) => {
            const start = new Date(dep.startDate);
            const end = new Date(dep.endDate);
            const startFormatted = !isNaN(start.getTime()) ? start.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : dep.startDate;
            const endFormatted = !isNaN(end.getTime()) ? end.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : dep.endDate;
            const availableSeats = dep.totalSeats && dep.bookedSeats !== undefined ? Math.max(0, dep.totalSeats - dep.bookedSeats) : null;
            const price = dep.price ? String(dep.price) : tripPrice;

            return (
              <div key={dep.id || idx} className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F26522] shrink-0">
                    <FaCalendarAlt className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-bold text-slate-900">
                      {startFormatted} <span className="text-slate-400 font-normal">→</span> {endFormatted}
                    </div>
                    <div className="flex items-center gap-3 mt-1 text-xs text-slate-500 font-medium">
                      <span className="inline-flex items-center gap-1 text-emerald-600">
                        <FaCheckCircle className="w-3 h-3" />
                        {dep.status || "Guaranteed Departure"}
                      </span>
                      {availableSeats !== null && (
                        <span className="inline-flex items-center gap-1 text-slate-500">
                          <FaUserFriends className="w-3 h-3" />
                          {availableSeats} seats left
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-5 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                  <div className="text-left md:text-right">
                    <span className="text-[11px] text-slate-400 block">Per Person</span>
                    <span className="text-lg sm:text-xl font-bold text-slate-900">
                      {currency} {Number(price.replace(/[^0-9.]/g, '')).toLocaleString()}
                    </span>
                  </div>
                  <a
                    href="#dates-price"
                    className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 bg-[#F26522] hover:bg-[#d85417] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-2xs transition-colors cursor-pointer"
                  >
                    <span>Book Now</span>
                    <FaChevronRight className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
