import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { ReviewItem } from "./reviewsData";

interface ReviewCardProps {
  review: ReviewItem;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="w-full bg-[#F8F9FA] rounded-2xs p-5 sm:p-6 md:p-7 flex flex-col justify-between space-y-4 sm:space-y-5 transition-shadow duration-200 hover:shadow-2xs">
      {/* 1. Top Stars */}
      <div className="flex items-center space-x-1">
        {[...Array(review.rating)].map((_, i) => (
          <FaStar
            key={i}
            className="w-3.5 h-3.5 text-[#EAB308] fill-[#EAB308]"
          />
        ))}
      </div>

      {/* 2. Review Message */}
      <p className="text-gray-600 text-xs sm:text-[13.5px] md:text-[14px] leading-relaxed font-normal">
        &ldquo;{review.message}&rdquo;
      </p>

      {/* 3. Reviewer Author Info */}
      <div className="flex items-center space-x-3 pt-1">
        <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden bg-gray-200 shrink-0">
          <Image
            src={review.avatar}
            alt={review.name}
            fill
            sizes="36px"
            className="object-cover object-top"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xs sm:text-[13px] font-bold text-gray-900 leading-tight">
            {review.name}
          </span>
          <span className="text-[11px] sm:text-xs text-gray-400 font-normal mt-0.5">
            {review.location}
          </span>
        </div>
      </div>
    </div>
  );
}
