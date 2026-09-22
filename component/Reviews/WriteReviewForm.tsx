"use client";

import React, { useState } from "react";
import { Playfair_Display } from "next/font/google";
import { FaStar, FaRegStar } from "react-icons/fa";
import { ReviewItem } from "./reviewsData";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

interface WriteReviewFormProps {
  onAddReview?: (review: ReviewItem) => void;
}

export default function WriteReviewForm({ onAddReview }: WriteReviewFormProps) {
  const [photo, setPhoto] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [trip, setTrip] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setPhoto(url);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim() || !email.trim() || !country.trim() || !trip || !message.trim()) {
      setErrorMessage("Please fill in all required fields marked with *.");
      return;
    }

    const newReview: ReviewItem = {
      id: "r_" + Date.now(),
      rating,
      message,
      name,
      location: country,
      avatar: photo || "/images/testimonials/avatar-1.jpg",
      title: title.trim() || undefined,
      trip,
    };

    if (onAddReview) {
      onAddReview(newReview);
    }

    setSubmitted(true);
    // Reset form fields
    setName("");
    setEmail("");
    setCountry("");
    setTrip("");
    setTitle("");
    setMessage("");
    setRating(5);
    setPhoto(null);
  };

  return (
    <div className="w-full bg-[#FFF5ED] rounded-xs p-6 sm:p-7 md:p-8 flex flex-col justify-start">
      {/* 1. Header */}
      <h3
        className={`${playfair.className} text-2xl sm:text-[26px] font-bold text-gray-900 mb-2 leading-tight`}
      >
        Write a review
      </h3>
      <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed mb-5 sm:mb-6 font-normal">
        We value your feedback! Please take a few minutes to share your thoughts
        on your recent travel experience with us. Your input is crucial in
        helping us enhance our services. Thank you for choosing us!
      </p>

      {/* Success Banner */}
      {submitted && (
        <div className="mb-5 p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm rounded-xs flex items-center justify-between">
          <span>Thank you! Your review has been submitted successfully.</span>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-emerald-700 font-bold ml-2 hover:underline"
          >
            ✕
          </button>
        </div>
      )}

      {/* Error Banner */}
      {errorMessage && (
        <div className="mb-5 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xs">
          {errorMessage}
        </div>
      )}

      {/* 2. Review Form */}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3.5 sm:space-y-4">
        {/* Field 1: Your Photo */}
        <div className="flex flex-col space-y-1">
          <label className="text-xs text-gray-700 font-medium">Your Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="w-full bg-white text-xs text-gray-500 file:mr-3 file:py-2 file:px-3.5 file:rounded-none file:border-0 file:text-xs file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 p-1.5 cursor-pointer shadow-2xs"
          />
        </div>

        {/* Field 2: Your Name * */}
        <div className="flex flex-col space-y-1">
          <label className="text-xs text-gray-700 font-medium">Your Name *</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name *"
            className="w-full bg-white border-0 px-3.5 py-2.5 text-xs sm:text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#F26522] shadow-2xs transition-shadow"
          />
        </div>

        {/* Field 3: Your E-mail * */}
        <div className="flex flex-col space-y-1">
          <label className="text-xs text-gray-700 font-medium">Your E-mail *</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your E-mail *"
            className="w-full bg-white border-0 px-3.5 py-2.5 text-xs sm:text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#F26522] shadow-2xs transition-shadow"
          />
        </div>

        {/* Field 4: Country You Are From * */}
        <div className="flex flex-col space-y-1">
          <label className="text-xs text-gray-700 font-medium">Country You Are From *</label>
          <input
            type="text"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Enter Country You Are From *"
            className="w-full bg-white border-0 px-3.5 py-2.5 text-xs sm:text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#F26522] shadow-2xs transition-shadow"
          />
        </div>

        {/* Field 5: Trip * */}
        <div className="flex flex-col space-y-1">
          <label className="text-xs text-gray-700 font-medium">Trip *</label>
          <select
            required
            value={trip}
            onChange={(e) => setTrip(e.target.value)}
            className="w-full bg-white border-0 px-3.5 py-2.5 text-xs sm:text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#F26522] shadow-2xs cursor-pointer"
          >
            <option value="">Select Trip</option>
            <option value="Mount Kailash Pilgrimage Tour">Mount Kailash Pilgrimage Tour</option>
            <option value="Everest Base Camp Trek">Everest Base Camp Trek</option>
            <option value="Annapurna Circuit Trek">Annapurna Circuit Trek</option>
            <option value="Bhutan Cultural Odyssey">Bhutan Cultural Odyssey</option>
            <option value="Lhasa & Central Tibet Explorer">Lhasa & Central Tibet Explorer</option>
            <option value="Golden Triangle & Himalayas (India)">Golden Triangle & Himalayas (India)</option>
          </select>
        </div>

        {/* Field 6: Short Title To Your Review */}
        <div className="flex flex-col space-y-1">
          <label className="text-xs text-gray-700 font-medium">Short Title To Your Review</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full bg-white border-0 px-3.5 py-2.5 text-xs sm:text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#F26522] shadow-2xs transition-shadow"
          />
        </div>

        {/* Field 7: Message * */}
        <div className="flex flex-col space-y-1">
          <label className="text-xs text-gray-700 font-medium">Message *</label>
          <textarea
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            className="w-full bg-white border-0 px-3.5 py-2.5 text-xs sm:text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#F26522] shadow-2xs transition-shadow resize-y"
          />
        </div>

        {/* Field 8: Rate us */}
        <div className="flex flex-col space-y-1 pt-1">
          <label className="text-xs text-gray-700 font-medium">Rate us</label>
          <div className="flex items-center space-x-1.5 py-1">
            {[1, 2, 3, 4, 5].map((star) => {
              const active = (hoverRating !== null ? hoverRating : rating) >= star;
              return (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(null)}
                  className="p-1 cursor-pointer transition-transform hover:scale-110 focus:outline-none"
                  aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                >
                  {active ? (
                    <FaStar className="w-4 h-4 text-[#EAB308] fill-[#EAB308]" />
                  ) : (
                    <FaRegStar className="w-4 h-4 text-gray-300" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Field 9: Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-[#F26522] hover:bg-[#d95316] text-white text-xs sm:text-[13.5px] font-semibold py-3 px-6 rounded-xs transition-colors flex items-center justify-center space-x-1.5 cursor-pointer shadow-xs"
          >
            <span>Send</span>
            <span>→</span>
          </button>
        </div>
      </form>
    </div>
  );
}
