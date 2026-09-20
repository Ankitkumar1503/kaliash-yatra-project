"use client";

import { useState } from "react";
import { Lora, Anton } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqsData: FAQItem[] = [
  {
    id: "1",
    question: "Do I need a visa to visit Nepal?",
    answer:
      "Most foreign nationals require a visa to enter Nepal, which can be obtained upon arrival at Tribhuvan International Airport in Kathmandu or at official land border crossings. You can also apply online via the Nepal Immigration portal in advance. Your passport must be valid for at least six months from the date of arrival.",
  },
  {
    id: "2",
    question: "What is the best time to visit Nepal?",
    answer:
      "The best seasons to visit Nepal for trekking, tours, and mountain expeditions are autumn (late September to late November) and spring (March to May). These months offer crisp blue skies, stable weather, and panoramic Himalayan vistas.",
  },
  {
    id: "3",
    question: "Are your trips suitable for beginners?",
    answer:
      "Yes! We offer adventures tailored for every experience level, ranging from beginner-friendly cultural sightseeing and valley hikes to moderate and challenging high-altitude Himalayan treks. Our experienced guides ensure your safety and comfort every step of the way.",
  },
  {
    id: "4",
    question: "What is included in the tour cost?",
    answer:
      "Our packages generally cover hotel accommodations, internal transportation, local flights, trekking permits, certified guides, porters, and meals as specified in the itinerary. Personal expenses, international airfare, and personal travel insurance are booked separately.",
  },
  {
    id: "5",
    question: "How can I book a tour?",
    answer:
      "You can book directly through our website by choosing your desired tour and dates, or by contacting our team via phone or email. A deposit is required to confirm your reservation, with flexible payment options available.",
  },
  {
    id: "6",
    question: "Is travel insurance mandatory?",
    answer:
      "Yes, comprehensive travel insurance covering emergency medical treatment and high-altitude helicopter evacuation is mandatory for all trekking and mountaineering expeditions in Nepal.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-14 md:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1470px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Heading and description */}
          <div className="lg:col-span-4 xl:col-span-4 lg:sticky lg:top-24">
            <span
              className={`${lora.className} text-gray-500 text-xs sm:text-sm tracking-[0.18em] uppercase block mb-3 font-normal`}
            >
              TRAVEL INFORMATION
            </span>
            <h2
              className={`${anton.className} text-3xl sm:text-4xl md:text-5xl lg:text-[46px] uppercase tracking-tight text-black leading-[1.08] mb-4`}
            >
              FREQUENTLY ASKED
              <br className="hidden sm:inline" /> QUESTIONS
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-sm">
              Find answers to the most common questions about travelling with us.
            </p>
          </div>

          {/* Right Column: FAQ Accordion with clean gray cards */}
          <div className="lg:col-span-8 xl:col-span-8 space-y-3 sm:space-y-3.5">
            {faqsData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id}
                  className="bg-[#F8F8F8] rounded-[3px] transition-colors overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    className="w-full py-4 sm:py-5 px-5 sm:px-7 flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                  >
                    <span className="text-sm sm:text-[15.5px] font-semibold text-gray-900 group-hover:text-[#F26522] transition-colors pr-4">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-gray-700 group-hover:text-[#F26522] transition-colors flex items-center justify-center w-5 h-5">
                      {isOpen ? (
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h14"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 5v14m-7-7h14"
                          />
                        </svg>
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-7 pb-5 pt-1 text-gray-600 text-xs sm:text-sm leading-relaxed font-normal border-t border-gray-100">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
