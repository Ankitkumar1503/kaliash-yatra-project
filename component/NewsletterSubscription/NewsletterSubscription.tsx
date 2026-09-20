"use client";

import { useState } from "react";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

export default function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("success");
    setMessage("Thanks for subscribing!");
    setTimeout(() => {
      setEmail("");
      setStatus("idle");
      setMessage("");
    }, 4000);
  };

  return (
    <section
      aria-label="Newsletter Subscription"
      className="w-full bg-[#FA4D09] py-10 sm:py-12 md:py-14"
    >
      <div className="max-w-[1470px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 xl:gap-12">
          {/* Left Side: Icon + Text Group */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-7 text-center sm:text-left">
            {/* White Outlined Travel/Mail Illustration Icon */}
            <div className="shrink-0 flex items-center justify-center">
              <svg
                className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 text-white"
                viewBox="0 0 80 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Left Radiating Rays */}
                <line
                  x1="12"
                  y1="18"
                  x2="6"
                  y2="15"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <line
                  x1="15"
                  y1="12"
                  x2="11"
                  y2="6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <line
                  x1="22"
                  y1="8"
                  x2="21"
                  y2="2"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Right Radiating Rays */}
                <line
                  x1="58"
                  y1="8"
                  x2="59"
                  y2="2"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <line
                  x1="65"
                  y1="12"
                  x2="69"
                  y2="6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <line
                  x1="68"
                  y1="18"
                  x2="74"
                  y2="15"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Emerging Letter / Document */}
                <rect
                  x="22"
                  y="10"
                  width="36"
                  height="34"
                  rx="1.5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                />

                {/* Stamp / Photo on Letter */}
                <rect
                  x="28"
                  y="16"
                  width="10"
                  height="8"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                {/* Lines of text on letter */}
                <line
                  x1="43"
                  y1="17"
                  x2="52"
                  y2="17"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <line
                  x1="43"
                  y1="21"
                  x2="50"
                  y2="21"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <line
                  x1="28"
                  y1="29"
                  x2="52"
                  y2="29"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <line
                  x1="28"
                  y1="35"
                  x2="48"
                  y2="35"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                {/* Envelope Body */}
                <path
                  d="M10 28H70V60C70 61.1046 69.1046 62 68 62H12C10.8954 62 10 61.1046 10 60V28Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                />

                {/* Envelope Front Flap V-lines */}
                <path
                  d="M11 29L40 48L69 29"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 61L33 43"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M69 61L47 43"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Heading & Subtitle */}
            <div className="flex flex-col">
              <h2
                className={`${anton.className} text-xl sm:text-2xl md:text-[23px] lg:text-[25px] uppercase tracking-wide text-white leading-tight`}
              >
                YOUR TRAVEL JOURNEY STARTS HERE
              </h2>
              <p className="text-white text-[14.5px] sm:text-[15.5px] font-normal leading-normal mt-1.5 opacity-95">
                Sign up and we&apos;ll send the best deals to you
              </p>
            </div>
          </div>

          {/* Right Side: Subscription Form */}
          <div className="w-full lg:w-auto relative">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 xl:gap-6 w-full"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Enter your email
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
                placeholder="Enter your email..."
                className="w-full sm:w-[380px] md:w-[480px] lg:w-[500px] xl:w-[580px] h-[54px] sm:h-[58px] md:h-[60px] bg-white text-gray-900 placeholder:text-gray-400 px-5 sm:px-6 rounded-none text-[15px] sm:text-[16px] focus:outline-none focus:ring-2 focus:ring-white/50 border-0"
              />
              <button
                type="submit"
                className="w-full sm:w-[170px] lg:w-[180px] h-[54px] sm:h-[58px] md:h-[60px] bg-white text-[#FA4D09] hover:bg-gray-50 active:bg-gray-100 font-bold uppercase text-[15px] sm:text-[16px] tracking-wider rounded-none shrink-0 transition-colors cursor-pointer border-0"
              >
                SUBSCRIBE
              </button>
            </form>

            {/* Subtle Inline Validation / Feedback Message */}
            {status !== "idle" && (
              <p
                role="status"
                className={`text-xs sm:text-sm font-medium mt-2 text-center sm:text-left ${
                  status === "error" ? "text-amber-200" : "text-white"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
