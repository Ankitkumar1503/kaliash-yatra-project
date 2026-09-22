"use client";

import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import WriteReviewForm from "./WriteReviewForm";
import { initialReviews, ReviewItem } from "./reviewsData";
import { getStoredReviews, saveStoredReview } from "@/lib/storage";

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<ReviewItem[]>(initialReviews);

  useEffect(() => {
    // Read from client storage on mount to safely merge with any previous client reviews
    const stored = getStoredReviews();
    if (stored && stored.length > 0) {
      setReviews(stored);
    }
  }, []);

  const handleAddReview = (newReview: ReviewItem) => {
    saveStoredReview(newReview);
    setReviews((prev) => [newReview, ...prev]);
  };

  return (
    <section className="w-full bg-white py-10 sm:py-14 md:py-16">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8 lg:gap-10 items-start">
          {/* Left Column: Reviews List (~67%) */}
          <div className="lg:col-span-8 flex flex-col space-y-4 sm:space-y-5">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* Right Column: Write a Review Form (~33%) */}
          <div className="lg:col-span-4 sticky top-24">
            <WriteReviewForm onAddReview={handleAddReview} />
          </div>
        </div>
      </div>
    </section>
  );
}
