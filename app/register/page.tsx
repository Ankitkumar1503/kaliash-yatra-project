"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import {
  FaRegEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUser,
  FaPhoneAlt,
  FaCheckCircle,
  FaArrowLeft,
  FaCheck,
} from "react-icons/fa";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    acceptTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="h-screen w-full bg-[#F4F6F9] flex flex-col justify-between overflow-hidden">
      {/* Top Simple Navigation */}
      <header className="w-full bg-white border-b border-gray-100 py-2.5 px-4 sm:px-6 shrink-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-[#F26522] transition-colors group"
          >
            <FaArrowLeft className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Home</span>
          </Link>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-32 sm:w-36 h-8">
              <Image
                src="/logo.png"
                alt="Mission Nepal Holidays"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          <div className="text-xs text-gray-500 hidden sm:block">
            Already registered?{" "}
            <Link
              href="/login"
              className="text-[#F26522] font-semibold hover:underline"
            >
              Sign In
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Card - Fits screen without scroll */}
      <main className="flex-1 flex items-center justify-center p-3 sm:p-4 overflow-hidden">
        <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Visual Showcase (5 Cols) */}
          <div className="relative hidden lg:flex lg:col-span-5 flex-col justify-between p-7 text-white overflow-hidden min-h-[460px]">
            {/* Background Image */}
            <Image
              src="/images/kailash-2.jpg"
              alt="Mount Kailash Golden Sunrise"
              fill
              priority
              className="object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30 pointer-events-none" />

            {/* Top Badge & Headings */}
            <div className="relative z-10">
              <h2
                className={`${playfair.className} text-xl xl:text-2xl font-bold leading-tight mb-2`}
              >
                Passport to Himalayan Expeditions
              </h2>
              <p className="text-white/80 text-xs leading-relaxed mb-4">
                Create a free account to gain early access to restricted Yatra
                permits and custom trip planning.
              </p>

              {/* Perks Checklist */}
              <div className="space-y-2.5 text-xs text-white/90">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#F26522] flex items-center justify-center shrink-0">
                    <FaCheck className="w-2 h-2 text-white" />
                  </div>
                  <span>Guaranteed Kailash Mansarovar Tibet Permits</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#F26522] flex items-center justify-center shrink-0">
                    <FaCheck className="w-2 h-2 text-white" />
                  </div>
                  <span>Personalized High-Altitude Consultations</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#F26522] flex items-center justify-center shrink-0">
                    <FaCheck className="w-2 h-2 text-white" />
                  </div>
                  <span>Flexible Deposit Rollover & Rescheduling</span>
                </div>
              </div>
            </div>

            {/* Bottom Glass Card */}
            <div className="relative z-10 bg-white/15 backdrop-blur-md rounded-lg p-3 border border-white/20 text-xs">
              <p className="font-semibold text-white text-[11px]">
                4.9/5 Rating from 3,500+ Yatris &amp; Trekkers
              </p>
              <p className="text-white/70 text-[10px] mt-0.5">
                Certified by Nepal Tourism Board &amp; Himalayan Rescue Association.
              </p>
            </div>
          </div>

          {/* Right Column: Registration Form (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center">
            {isSuccess ? (
              <div className="text-center py-6 flex flex-col items-center animate-fadeIn">
                <FaCheckCircle className="w-12 h-12 text-emerald-500 mb-3 animate-bounce" />
                <h3
                  className={`${playfair.className} text-xl font-bold text-gray-900 mb-1.5`}
                >
                  Account Created Successfully!
                </h3>
                <p className="text-xs text-gray-600 mb-4 max-w-xs">
                  Welcome to Mission Nepal Holidays,{" "}
                  <span className="font-semibold text-black">
                    {formData.firstName}
                  </span>
                  .
                </p>
                <Link
                  href="/"
                  className="bg-[#F26522] hover:bg-[#d85417] text-white text-xs font-semibold px-5 py-2 rounded-lg transition-colors"
                >
                  Start Exploring Expeditions
                </Link>
              </div>
            ) : (
              <div>
                {/* Form Header */}
                <div className="mb-4">
                  <h1
                    className={`${playfair.className} text-xl sm:text-2xl font-bold text-gray-900`}
                  >
                    Create an Account
                  </h1>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Sign up in seconds and start planning your journey.
                  </p>
                </div>

                {/* Form - No Google/Apple, No Confirm Password */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-700 uppercase mb-0.5">
                        First Name
                      </label>
                      <div className="relative flex items-center">
                        <FaUser className="w-3 h-3 text-gray-400 absolute left-2.5 pointer-events-none" />
                        <input
                          type="text"
                          required
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({ ...formData, firstName: e.target.value })
                          }
                          className="w-full pl-8 pr-2.5 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-gray-700 uppercase mb-0.5">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-full px-2.5 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-700 uppercase mb-0.5">
                        Email Address
                      </label>
                      <div className="relative flex items-center">
                        <FaRegEnvelope className="w-3 h-3 text-gray-400 absolute left-2.5 pointer-events-none" />
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full pl-8 pr-2.5 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-gray-700 uppercase mb-0.5">
                        Phone Number
                      </label>
                      <div className="relative flex items-center">
                        <FaPhoneAlt className="w-2.5 h-2.5 text-gray-400 absolute left-2.5 pointer-events-none" />
                        <input
                          type="tel"
                          required
                          placeholder="+1 555-0199"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full pl-8 pr-2.5 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Password (Single input - Confirm Password removed) */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-700 uppercase mb-0.5">
                      Password
                    </label>
                    <div className="relative flex items-center">
                      <FaLock className="w-3 h-3 text-gray-400 absolute left-2.5 pointer-events-none" />
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="w-full pl-8 pr-8 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-colors"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2.5 text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? (
                          <FaEyeSlash className="w-3.5 h-3.5" />
                        ) : (
                          <FaEye className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Terms & Conditions */}
                  <div className="pt-0.5">
                    <label className="flex items-start gap-1.5 cursor-pointer text-[11px] text-gray-600">
                      <input
                        type="checkbox"
                        required
                        checked={formData.acceptTerms}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            acceptTerms: e.target.checked,
                          })
                        }
                        className="rounded border-gray-300 text-[#F26522] focus:ring-[#F26522] accent-[#F26522] cursor-pointer mt-0.5"
                      />
                      <span>
                        I agree to the{" "}
                        <Link
                          href="/terms"
                          className="text-[#F26522] font-semibold hover:underline"
                        >
                          Terms
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/privacy"
                          className="text-[#F26522] font-semibold hover:underline"
                        >
                          Privacy Policy
                        </Link>
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#F26522] hover:bg-[#d85417] text-white font-bold py-2.5 rounded-lg uppercase tracking-wider text-xs shadow-sm hover:shadow transition-all duration-150 cursor-pointer active:scale-98 flex items-center justify-center gap-2 mt-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Creating Account...</span>
                      </>
                    ) : (
                      <span>Create Account</span>
                    )}
                  </button>
                </form>

                {/* Footer Switch */}
                <div className="mt-3.5 text-center text-xs text-gray-500">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-[#F26522] font-bold hover:underline"
                  >
                    Log In
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Auth Simple Footer */}
      <footer className="w-full py-2 px-4 text-center text-[11px] text-gray-500 border-t border-gray-100 bg-white shrink-0">
        © 2026 Mission Nepal Holidays. All rights reserved. •{" "}
        <Link href="/privacy" className="hover:underline">
          Privacy Policy
        </Link>{" "}
        •{" "}
        <Link href="/terms" className="hover:underline">
          Terms of Service
        </Link>
      </footer>
    </div>
  );
}
