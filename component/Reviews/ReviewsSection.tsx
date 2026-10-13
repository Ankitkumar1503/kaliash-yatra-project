"use client";

import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import WriteReviewForm from "./WriteReviewForm";
import type { ReviewItem } from "@/data/types";
import { getStoredReviews, saveStoredReview } from "@/lib/storage";

export default function ReviewsSection({ approvedReviews, loadError }: { approvedReviews: ReviewItem[]; loadError?: string }) {
  const [reviews, setReviews] = useState<ReviewItem[]>(approvedReviews);
  useEffect(() => {
    // Read browser-only localStorage after hydration to avoid mismatching server HTML.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReviews(getStoredReviews(approvedReviews));
  }, [approvedReviews]);
  const handleAddReview = (newReview: ReviewItem) => { saveStoredReview(newReview); setReviews((prev) => [newReview, ...prev]); };
  return (
    <section className="w-full bg-white py-10 sm:py-14 md:py-16">
      <div className="site-container">
        {loadError && <p className="text-gray-600 text-sm mb-5" role="alert">{loadError}</p>}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-8 flex flex-col space-y-4 sm:space-y-5">
            {reviews.length ? reviews.map((review) => <ReviewCard key={review.id} review={review} />) : <div className="p-8 sm:p-10 bg-slate-50 border border-slate-200/80 rounded-2xl text-center">
              <p className="text-base font-bold text-slate-800 mb-1">No reviews published yet</p>
              <p className="text-xs text-slate-500">Be the first to share your thoughts using the form on the right.</p>
            </div>}
          </div>
          <div className="lg:col-span-4 sticky top-24"><WriteReviewForm onAddReview={handleAddReview} /></div>
        </div>
      </div>
    </section>
  );
}
