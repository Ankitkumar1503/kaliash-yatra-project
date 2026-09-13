"use client";

import { useState } from "react";
import { Anton } from "next/font/google";
import { FaPlus, FaMinus } from "react-icons/fa";

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
    question: "What is the physical requirement for tours?",
    answer:
      "What is the physical requirement for tours? Aerobic endurance and overall fitness are required. Flights included in the altitude. It makes a most possible and safe show this completion issue.",
  },
  {
    id: "2",
    question: "Are flights included in the price?",
    answer:
      "Domestic flights within Nepal (such as Kathmandu to Lukla, Nepalgunj to Simikot, or Pokhara flights) are included as indicated in each tour package. International flights to/from Tribhuvan International Airport (Kathmandu) are booked separately, and our travel team is always glad to assist with flight ticketing and personalized transfers.",
  },
  {
    id: "3",
    question: "How to prepare for high altitudes?",
    answer:
      "We recommend beginning cardiovascular conditioning (brisk hill hiking, stair climbing, running, or cycling) 8 to 12 weeks before your expedition. Our itineraries are medically crafted with dedicated acclimatization rest days, daily pulse oximeter monitoring by certified guides, and portable medical oxygen sets on all high-pass sections.",
  },
  {
    id: "4",
    question: "What is your cancellation policy?",
    answer:
      "We provide flexible booking security. You can reschedule or rollover your tour deposit to any date within 24 months free of charge. Cancellations submitted more than 30 days prior to trip departure receive a full refund minus minimal administrative processing charges.",
  },
];

export default function FAQSection() {
  // First item expanded by default matching mockup screenshot
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 px-6 sm:px-12 md:px-16 lg:px-24">
      {/* Centered container with comfortable spacing from left and right */}
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-12">
          <span className="text-[#F26522] text-xs sm:text-sm font-semibold tracking-wider uppercase block mb-1">
            FAQS
          </span>
          <h2
            className={`${anton.className} text-2xl sm:text-3xl md:text-4xl lg:text-[40px] uppercase tracking-tight text-black leading-none`}
          >
            FAQS: EVERYTHING YOU NEED TO KNOW
          </h2>
        </div>

        {/* Accordion List with centered comfortable width and generous side margins */}
        <div className="divide-y divide-gray-200 border-b border-gray-200">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.id} className="py-4 sm:py-5 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base md:text-lg font-bold text-gray-900 group-hover:text-[#F26522] transition-colors pr-6">
                    {faq.question}
                  </span>

                  <span className="shrink-0 text-gray-600 group-hover:text-[#F26522] transition-colors flex items-center justify-center w-5 h-5">
                    {isOpen ? (
                      <FaMinus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    ) : (
                      <FaPlus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-2.5 pr-6 sm:pr-10 text-gray-600 text-xs sm:text-sm leading-relaxed font-normal animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
