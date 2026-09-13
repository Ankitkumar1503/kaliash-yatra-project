"use client";

import { useState } from "react";
import Image from "next/image";
import { Anton } from "next/font/google";
import { FaCheckCircle, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

export interface UpcomingTrip {
  id: string;
  image: string;
  title: string;
  duration: string;
  dates: string;
  price: string;
  seatsLeft: number;
  month: number;
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const FULL_MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ALL_TRIPS: UpcomingTrip[] = [
  // October 2026
  {
    id: "oct-1",
    image: "/images/expeditions/expedition-1.jpg",
    title: "EVEREST BASE CAMP",
    duration: "15 days",
    dates: "Oct 12, 2026",
    price: "$3,500",
    seatsLeft: 30,
    month: 9,
  },
  {
    id: "oct-2",
    image: "/images/expeditions/expedition-2.jpg",
    title: "EVEREST BASE CAMP",
    duration: "15 days",
    dates: "Oct 12, 2026",
    price: "$3,500",
    seatsLeft: 30,
    month: 9,
  },
  {
    id: "oct-3",
    image: "/images/expeditions/expedition-3.jpg",
    title: "EVEREST BASE CAMP",
    duration: "14 days",
    dates: "Oct 12, 2026",
    price: "$3,500",
    seatsLeft: 20,
    month: 9,
  },
  {
    id: "oct-4",
    image: "/images/expeditions/expedition-4.jpg",
    title: "EVEREST BASE CAMP",
    duration: "12 days",
    dates: "Oct 12, 2026",
    price: "$3,500",
    seatsLeft: 15,
    month: 9,
  },
  // September 2026
  {
    id: "sep-1",
    image: "/images/expeditions/expedition-1.jpg",
    title: "KAILASH MANSAROVAR YATRA",
    duration: "15 days",
    dates: "Sep 14, 2026 - Sep 28, 2026",
    price: "$2,750",
    seatsLeft: 30,
    month: 8,
  },
  {
    id: "sep-2",
    image: "/images/expeditions/expedition-2.jpg",
    title: "KAILASH MANSAROVAR YATRA",
    duration: "15 days",
    dates: "Sep 21, 2026 - Oct 5, 2026",
    price: "$2,750",
    seatsLeft: 30,
    month: 8,
  },
  // November 2026
  {
    id: "nov-1",
    image: "/images/expeditions/expedition-3.jpg",
    title: "EVEREST THREE PASSES TREK",
    duration: "18 days",
    dates: "Nov 5, 2026 - Nov 22, 2026",
    price: "$3,200",
    seatsLeft: 12,
    month: 10,
  },
  {
    id: "nov-2",
    image: "/images/expeditions/expedition-4.jpg",
    title: "ANNAPURNA CIRCUIT TREK",
    duration: "12 days",
    dates: "Nov 12, 2026 - Nov 24, 2026",
    price: "$1,850",
    seatsLeft: 18,
    month: 10,
  },
  // April 2026
  {
    id: "apr-1",
    image: "/images/expeditions/expedition-1.jpg",
    title: "EVEREST BASE CAMP SPRING",
    duration: "15 days",
    dates: "Apr 10, 2026 - Apr 25, 2026",
    price: "$3,500",
    seatsLeft: 16,
    month: 3,
  },
  {
    id: "apr-2",
    image: "/images/expeditions/expedition-3.jpg",
    title: "ANNAPURNA SANCTUARY EXPEDITION",
    duration: "14 days",
    dates: "Apr 15, 2026 - Apr 29, 2026",
    price: "$2,600",
    seatsLeft: 22,
    month: 3,
  },
  // May 2026
  {
    id: "may-1",
    image: "/images/expeditions/expedition-2.jpg",
    title: "KAILASH MANSAROVAR YATRA",
    duration: "15 days",
    dates: "May 10, 2026 - May 25, 2026",
    price: "$2,750",
    seatsLeft: 25,
    month: 4,
  },
  {
    id: "may-2",
    image: "/images/expeditions/expedition-1.jpg",
    title: "EVEREST BASE CAMP",
    duration: "15 days",
    dates: "May 18, 2026 - Jun 2, 2026",
    price: "$3,600",
    seatsLeft: 10,
    month: 4,
  },
  // June 2026
  {
    id: "jun-1",
    image: "/images/expeditions/expedition-3.jpg",
    title: "KAILASH SAGA DAWA FESTIVAL",
    duration: "16 days",
    dates: "Jun 2, 2026 - Jun 18, 2026",
    price: "$2,950",
    seatsLeft: 20,
    month: 5,
  },
  // August 2026
  {
    id: "aug-1",
    image: "/images/expeditions/expedition-2.jpg",
    title: "UPPER MUSTANG MONSOON TREK",
    duration: "14 days",
    dates: "Aug 15, 2026 - Aug 29, 2026",
    price: "$2,250",
    seatsLeft: 14,
    month: 7,
  },
];

export default function UpcomingTrips() {
  const [selectedMonth, setSelectedMonth] = useState<number>(9);
  const [year, setYear] = useState<number>(2026);
  const [selectedTrip, setSelectedTrip] = useState<UpcomingTrip | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "1",
  });

  const handlePrevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setYear((y) => y - 1);
    } else {
      setSelectedMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setYear((y) => y + 1);
    } else {
      setSelectedMonth((m) => m + 1);
    }
  };

  const filteredTrips = ALL_TRIPS.filter((t) => t.month === selectedMonth);

  const handleOpenModal = (trip: UpcomingTrip) => {
    setSelectedTrip(trip);
    setSubmitted(false);
  };

  const handleCloseModal = () => {
    setSelectedTrip(null);
    setSubmitted(false);
    setFormData({ name: "", email: "", phone: "", travelers: "1" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      handleCloseModal();
    }, 2200);
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 md:px-6 lg:px-8">
      {/* Max-W-7xl matching the exact container width of the entire website */}
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-[#F26522] text-xs sm:text-sm font-semibold tracking-wider uppercase block mb-1">
            Upcoming Trips
          </span>
          <h2
            className={`${anton.className} text-2xl sm:text-3xl md:text-4xl lg:text-[40px] uppercase tracking-tight text-black leading-none`}
          >
            JOIN OUR UPCOMING EXPEDITIONS
          </h2>
        </div>

        {/* Month Selector Calendar Bar matching max-w-7xl */}
        <div className="bg-gray-50/80 rounded-lg border border-gray-200 p-3 sm:p-3.5 mb-6">
          {/* Top Month/Year Navigation */}
          <div className="flex items-center justify-between pb-2.5 border-b border-gray-200 mb-2.5">
            <button
              onClick={handlePrevMonth}
              aria-label="Previous month"
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-black hover:bg-gray-200 transition-colors cursor-pointer"
            >
              <FaChevronLeft className="w-3.5 h-3.5" />
            </button>

            <span className="font-bold text-gray-900 text-sm sm:text-base tracking-wide">
              {FULL_MONTHS[selectedMonth]}, {year}
            </span>

            <button
              onClick={handleNextMonth}
              aria-label="Next month"
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-black hover:bg-gray-200 transition-colors cursor-pointer"
            >
              <FaChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 12 Months Tab Bar */}
          <div className="overflow-x-auto scrollbar-none py-0.5">
            <div className="flex items-center justify-between min-w-[640px] sm:min-w-full gap-1.5">
              {MONTHS.map((m, index) => {
                const isActive = selectedMonth === index;
                return (
                  <button
                    key={m}
                    onClick={() => setSelectedMonth(index)}
                    className={`flex-1 px-3 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer text-center ${
                      isActive
                        ? "bg-[#F26522] text-white shadow-2xs"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-200/60"
                    }`}
                  >
                    {m}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Trips List across max-w-7xl */}
        <div className="space-y-4 sm:space-y-5">
          {filteredTrips.length > 0 ? (
            filteredTrips.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 sm:p-4 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-2xs transition-all group bg-white"
              >
                {/* Left Part: Landscape Mountain Photo + Info */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto text-center sm:text-left">
                  {/* Landscape Image */}
                  <div className="relative w-full sm:w-44 md:w-52 h-26 sm:h-28 shrink-0 overflow-hidden rounded-md bg-gray-100 shadow-2xs group-hover:shadow-xs transition-shadow">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 208px"
                      className="object-cover group-hover:scale-105 transition-transform duration-400"
                    />
                  </div>

                  {/* Trip Title & Enriched Details */}
                  <div className="flex flex-col justify-center space-y-1">
                    <h3 className="text-black font-bold text-base sm:text-lg uppercase tracking-wide group-hover:text-[#F26522] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-gray-500 font-normal">
                      <span>{item.dates}</span>
                      <span>-</span>
                      <span className="font-semibold text-gray-800">{item.price}</span>
                      <span className="text-gray-400">({item.duration})</span>
                    </div>

                    <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-semibold text-[#00A86B] pt-0.5">
                      <FaCheckCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{item.seatsLeft} SEATS LEFT</span>
                    </div>
                  </div>
                </div>

                {/* Right Part: Orange Join Trip Button */}
                <div className="w-full sm:w-auto flex justify-center sm:justify-end shrink-0 sm:pr-2">
                  <button
                    type="button"
                    onClick={() => handleOpenModal(item)}
                    className="w-full sm:w-auto bg-[#F26522] hover:bg-[#d85417] text-white font-semibold text-xs sm:text-sm px-8 py-3 uppercase tracking-wider transition-all duration-150 cursor-pointer shadow-2xs hover:shadow-xs active:scale-98"
                  >
                    JOIN TRIP
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-10 text-center border border-dashed border-gray-200 rounded-lg">
              <p className="text-gray-500 text-sm font-medium mb-3">
                No fixed group departures scheduled for{" "}
                <span className="font-semibold text-black">
                  {FULL_MONTHS[selectedMonth]} {year}
                </span>
                .
              </p>
              <button
                onClick={() =>
                  handleOpenModal({
                    id: `custom-${selectedMonth}`,
                    image: "/images/expeditions/expedition-1.jpg",
                    title: "CUSTOM HIMALAYAN EXPEDITION",
                    duration: "Flexible",
                    dates: `${FULL_MONTHS[selectedMonth]} ${year}`,
                    price: "Inquire for quote",
                    seatsLeft: 10,
                    month: selectedMonth,
                  })
                }
                className="bg-[#F26522] hover:bg-[#d85417] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded uppercase tracking-wider transition-colors cursor-pointer"
              >
                Request Custom Dates
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Booking / Join Modal */}
      {selectedTrip && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white max-w-md w-full p-6 sm:p-7 rounded-xl relative shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1 cursor-pointer transition-colors"
            >
              <FaTimes className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="py-6 text-center flex flex-col items-center">
                <FaCheckCircle className="w-12 h-12 text-[#F26522] mb-2.5 animate-bounce" />
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  Trip Request Received!
                </h4>
                <p className="text-xs text-gray-600">
                  We have reserved your inquiry for{" "}
                  <span className="font-semibold text-black">
                    {selectedTrip.title}
                  </span>
                  . Our travel coordinator will contact you shortly.
                </p>
              </div>
            ) : (
              <div>
                <span className="text-[#F26522] text-xs font-semibold tracking-wider uppercase block mb-1">
                  SECURE YOUR EXPEDITION SPOT
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {selectedTrip.title}
                </h3>
                <p className="text-gray-500 text-xs mt-0.5 mb-4">
                  {selectedTrip.dates} • {selectedTrip.price} •{" "}
                  {selectedTrip.seatsLeft} seats remaining
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Anderson"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-[#F26522]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-[#F26522]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-[#F26522]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                        Travelers
                      </label>
                      <select
                        value={formData.travelers}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            travelers: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-[#F26522] bg-white"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3">3 Persons</option>
                        <option value="4">4+ Persons</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#F26522] hover:bg-[#d85417] text-white font-semibold py-2.5 uppercase tracking-wider text-xs transition-colors cursor-pointer mt-3"
                  >
                    Confirm & Request Details
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
