"use client";

import { useState } from "react";
import Link from "next/link";
import { Anton } from "next/font/google";
import { FaPaperPlane, FaCheck } from "react-icons/fa";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

export default function DestinationCTA() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3500);
    }
  };

  return (
    <section className="w-full">
      {/* 1. Light Gray Adventure CTA Banner */}
      <div className="w-full bg-[#EDF0F5] py-10 md:py-14 px-4 md:px-6 lg:px-8">
        <div className="max-w-[1360px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Left Title */}
          <div>
            <h2
              className={`${anton.className} text-2xl sm:text-3xl md:text-4xl text-black uppercase tracking-tight leading-none`}
            >
              READY FOR YOUR ZERMATT ADVENTURE?
            </h2>
          </div>

          {/* Right Text & Action Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5">
            <Link
              href="/tours"
              className="bg-[#F26522] hover:bg-[#d85417] text-white font-semibold text-xs sm:text-sm px-6 py-3 uppercase tracking-wider rounded-none shadow-2xs hover:shadow-xs transition-colors text-center"
            >
              VIEW ALL ZERMATT TOURS
            </Link>

            <Link
              href="/contact"
              className="bg-[#F26522] hover:bg-[#d85417] text-white font-semibold text-xs sm:text-sm px-6 py-3 uppercase tracking-wider rounded-none shadow-2xs hover:shadow-xs transition-colors text-center"
            >
              BOOK YOUR CUSTOM TRIP NOW
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Orange Newsletter Subscription Strip */}
      <div className="w-full bg-[#F26522] py-7 sm:py-8 px-4 md:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Left Text & Icon */}
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <FaPaperPlane className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg tracking-wide uppercase">
                STAY IN THE KNOW
              </h3>
              <p className="text-white/90 text-xs sm:text-sm font-normal">
                Get special offers and travel inspiration sent directly to your inbox.
              </p>
            </div>
          </div>

          {/* Right Input Form */}
          {subscribed ? (
            <div className="flex items-center gap-2 bg-white/20 px-5 py-2.5 rounded text-sm font-semibold">
              <FaCheck className="w-4 h-4 text-white" />
              <span>Thank you for subscribing!</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex items-center w-full md:w-auto shadow-xs"
            >
              <input
                type="email"
                required
                placeholder="Your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-gray-800 placeholder-gray-400 text-xs sm:text-sm px-4 py-3 w-full md:w-72 lg:w-80 rounded-none focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-[#F26522] hover:bg-gray-100 font-bold uppercase text-xs sm:text-sm px-6 py-3 tracking-wider transition-colors cursor-pointer border-l border-gray-100 whitespace-nowrap"
              >
                SIGN UP
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
