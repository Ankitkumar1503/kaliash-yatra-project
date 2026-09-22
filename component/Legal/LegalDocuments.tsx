"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface LegalDocumentItem {
  id: string;
  title: string;
  authority?: string;
  image: string;
  alt: string;
}

export const legalDocuments: LegalDocumentItem[] = [
  {
    id: "company-registration",
    title: "Certificate of Incorporation of Company",
    authority: "Government of Nepal, Ministry of Industry, Office of the Company Registrar",
    image: "/images/legal/company-registration.jpg",
    alt: "Certificate of Incorporation of Company - Mission Nepal Holidays Pvt. Ltd.",
  },
  {
    id: "pan-certificate",
    title: "Permanent Account Number (PAN) Registration Certificate",
    authority: "Government of Nepal, Ministry of Finance, Inland Revenue Department",
    image: "/images/legal/pan-certificate.jpg",
    alt: "Permanent Account Number (PAN) Certificate - Mission Nepal Holidays Pvt. Ltd.",
  },
  {
    id: "tourism-license",
    title: "Tourism Industry Division Licence",
    authority: "Government of Nepal, Ministry of Culture, Tourism & Civil Aviation",
    image: "/images/legal/tourism-license.jpg",
    alt: "Tourism Industry Division Licence - Mission Nepal Holidays Pvt. Ltd.",
  },
];

export default function LegalDocuments() {
  const [selectedDoc, setSelectedDoc] = useState<LegalDocumentItem | null>(null);

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="site-container">
        {/* Document Grid: 3 columns on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
          {legalDocuments.map((doc) => (
            <div
              key={doc.id}
              onClick={() => setSelectedDoc(doc)}
              className="group relative bg-[#f9fafb] border border-gray-200/90 rounded-xs p-3.5 sm:p-4 md:p-5 flex flex-col justify-between items-center transition-all duration-300 hover:shadow-md hover:border-gray-300 cursor-pointer"
            >
              {/* Document Image Container */}
              <div className="relative w-full aspect-[1/1.38] overflow-hidden bg-white shadow-2xs border border-gray-100 flex items-center justify-center">
                <Image
                  src={doc.image}
                  alt={doc.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-1 group-hover:scale-[1.015] transition-transform duration-300"
                  priority
                />
              </div>

              {/* View Fullscreen Overlay Indicator on Hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-200 pointer-events-none flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/95 text-gray-800 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                  Click to View Full Size
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Full View */}
      {selectedDoc && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedDoc(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-md shadow-2xl p-4 sm:p-6 flex flex-col items-center overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="w-full flex items-center justify-between pb-3 border-b border-gray-200 mb-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  {selectedDoc.title}
                </h3>
                {selectedDoc.authority && (
                  <p className="text-xs text-gray-500 mt-0.5">
                    {selectedDoc.authority}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setSelectedDoc(null)}
                className="text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Document Image */}
            <div className="relative w-full h-[70vh] flex items-center justify-center bg-gray-50 rounded-xs p-2">
              <Image
                src={selectedDoc.image}
                alt={selectedDoc.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 90vw, 1000px"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
