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
  FaStar,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
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
            Need help?{" "}
            <a
              href="mailto:support@gotravel.com.vn"
              className="text-[#F26522] font-semibold hover:underline"
            >
              Contact Support
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Card - Fits screen without scroll */}
      <main className="flex-1 flex items-center justify-center p-3 sm:p-4 overflow-hidden">
        <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Visual Showcase (5 Cols) */}
          <div className="relative hidden lg:flex lg:col-span-5 flex-col justify-between p-7 text-white overflow-hidden min-h-[440px]">
            {/* Background Image */}
            <Image
              src="/images/hero-mountains.jpg"
              alt="Himalayan Sunset Peaks"
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
                Begin Your Sacred Journey
              </h2>
              <p className="text-white/80 text-xs leading-relaxed">
                Log in to manage your Kailash Yatra bookings, check high-altitude
                permits, and access your itineraries.
              </p>
            </div>

            {/* Bottom Glassmorphism Testimonial Card */}
            <div className="relative z-10 bg-white/15 backdrop-blur-md rounded-lg p-3 border border-white/20">
              <div className="flex items-center space-x-1 text-[#F26522] mb-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-3 h-3 fill-[#F26522]" />
                ))}
              </div>
              <p className="text-white text-[11px] italic leading-relaxed">
                &ldquo;Mission Nepal Holidays made our Kailash Mansarovar parikrama
                seamless, comfortable, and spiritually uplifting.&rdquo;
              </p>
              <span className="text-white/90 text-[11px] font-semibold mt-1 block">
                — Rajesh M., Kailash Yatri
              </span>
            </div>
          </div>

          {/* Right Column: Form (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center">
            {isSuccess ? (
              <div className="text-center py-6 flex flex-col items-center animate-fadeIn">
                <FaCheckCircle className="w-12 h-12 text-emerald-500 mb-3 animate-bounce" />
                <h3
                  className={`${playfair.className} text-xl font-bold text-gray-900 mb-1.5`}
                >
                  Welcome Back!
                </h3>
                <p className="text-xs text-gray-600 mb-4 max-w-xs">
                  You have successfully logged in to Mission Nepal Holidays.
                </p>
                <Link
                  href="/"
                  className="bg-[#F26522] hover:bg-[#d85417] text-white text-xs font-semibold px-5 py-2 rounded-lg transition-colors"
                >
                  Go to Home Page
                </Link>
              </div>
            ) : (
              <div>
                {/* Form Header */}
                <div className="mb-4 sm:mb-5">
                  <h1
                    className={`${playfair.className} text-xl sm:text-2xl font-bold text-gray-900`}
                  >
                    Welcome Back
                  </h1>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Please sign in to access your bookings and travel wishlist.
                  </p>
                </div>

                {/* Form Inputs (No Google/Apple buttons) */}
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Email Input */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-700 uppercase mb-1">
                      Email Address
                    </label>
                    <div className="relative flex items-center">
                      <FaRegEnvelope className="w-3.5 h-3.5 text-gray-400 absolute left-3 pointer-events-none" />
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-700 uppercase mb-1">
                      Password
                    </label>
                    <div className="relative flex items-center">
                      <FaLock className="w-3.5 h-3.5 text-gray-400 absolute left-3 pointer-events-none" />
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-9 pr-9 py-2 text-xs sm:text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-colors"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
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

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between text-xs pt-0.5">
                    <label className="flex items-center gap-1.5 cursor-pointer text-gray-600">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="rounded border-gray-300 text-[#F26522] focus:ring-[#F26522] accent-[#F26522] cursor-pointer"
                      />
                      <span className="text-[11px]">Remember for 30 days</span>
                    </label>

                    <Link
                      href="/forgot-password"
                      className="text-[#F26522] text-[11px] font-semibold hover:underline"
                    >
                      Forgot password?
                    </Link>
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
                        <span>Signing In...</span>
                      </>
                    ) : (
                      <span>Sign In to Account</span>
                    )}
                  </button>
                </form>

                {/* Footer Switch */}
                <div className="mt-4 text-center text-xs text-gray-500">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/register"
                    className="text-[#F26522] font-bold hover:underline"
                  >
                    Create an account
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
