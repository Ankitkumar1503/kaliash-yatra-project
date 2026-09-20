"use client";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export interface TripInclusionsExclusionsProps {
  inclusions?: string[];
  exclusions?: string[];
  className?: string;
}

const defaultInclusions: string[] = [
  "Airport transfers (international & domestic)",
  "Kathmandu–Lukla–Kathmandu flights",
  "Accommodation in teahouses during the trek",
  "Experienced English-speaking guide",
  "TIMS permit and Sagarmatha National Park entry fee",
  "Government taxes and service charges",
];

const defaultExclusions: string[] = [
  "International airfare",
  "Nepal visa fee",
  "Travel insurance",
  "Meals in Kathmandu (except breakfast)",
  "Personal expenses such as drinks and Wi-Fi",
  "Tips for guide and porter",
  "Anything not mentioned under inclusions",
];

export default function TripInclusionsExclusions({
  inclusions = defaultInclusions,
  exclusions = defaultExclusions,
  className = "",
}: TripInclusionsExclusionsProps) {
  return (
    <section id="inclusions" className={`w-full bg-white py-6 sm:py-8 lg:py-10 px-4 sm:px-5 lg:px-6 xl:px-8 ${className}`}>
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Inclusions Card */}
          <div className="bg-[#f9fafb] border border-gray-100 rounded-xl p-5 sm:p-6 shadow-2xs">
            <h3 className="text-base sm:text-lg font-bold text-black mb-4">
              Inclusions
            </h3>
            <div className="space-y-3">
              {inclusions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <FaCheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-[13.5px] text-gray-700 leading-relaxed font-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Exclusions Card */}
          <div id="exclusions" className="bg-[#f9fafb] border border-gray-100 rounded-xl p-5 sm:p-6 shadow-2xs">
            <h3 className="text-base sm:text-lg font-bold text-black mb-4">
              Exclusions
            </h3>
            <div className="space-y-3">
              {exclusions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <FaTimesCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-[13.5px] text-gray-700 leading-relaxed font-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
