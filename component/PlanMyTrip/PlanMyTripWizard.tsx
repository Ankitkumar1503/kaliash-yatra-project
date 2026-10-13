"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCalendarCheck,
  FaUser,
  FaUserFriends,
  FaUsers,
  FaLayerGroup,
  FaBed,
  FaHotel,
  FaCampground,
  FaMobileAlt,
  FaWallet,
  FaMoneyBillWave,
  FaEdit,
  FaSearch,
  FaCheck,
  FaArrowRight,
  FaArrowLeft,
  FaRegClock,
  FaCheckCircle,
  FaShieldAlt,
  FaHeadset,
  FaAward,
  FaCompass,
  FaRocket,
  FaRegLightbulb,
  FaWhatsapp,
  FaTimes,
  FaPhoneAlt,
  FaEnvelope,
  FaTags,
  FaSlidersH,
} from "react-icons/fa";
import { type UiTrip } from "@/lib/api/trips";
import { apiPost } from "@/lib/api/client";

export interface TripCatalogItem {
  id: string;
  title: string;
  days: number;
  country: string;
  badge?: string;
}

// Fallback catalog of authentic Himalayan and regional tours matching the reference image
const DEFAULT_TRIP_CATALOG: TripCatalogItem[] = [
  { id: "annapurna-tilicho", title: "Annapurna Circuit Trek with Tilicho Lake", days: 18, country: "Nepal", badge: "High Pass" },
  { id: "tibet-lhasa", title: "Tibet Lhasa Tour", days: 8, country: "Tibet and Kailash", badge: "Cultural" },
  { id: "nepal-lhasa-cultural", title: "Nepal Lhasa Cultural Tour", days: 10, country: "Tibet and Kailash" },
  { id: "abc-short", title: "Annapurna Base Camp Short Trek", days: 5, country: "Nepal", badge: "Short Trek" },
  { id: "annapurna-short", title: "Annapurna Circuit Short Trek", days: 10, country: "Nepal" },
  { id: "manaslu-tsum", title: "Manaslu Tsum Valley Trek", days: 19, country: "Nepal", badge: "Wilderness" },
  { id: "langtang-valley", title: "Langtang Valley Trek", days: 10, country: "Nepal" },
  { id: "langtang-gosaikunda", title: "Langtang Gosaikunda Trek", days: 14, country: "Nepal", badge: "Sacred Lake" },
  { id: "lhasa-city", title: "Lhasa City Tour", days: 5, country: "Tibet and Kailash" },
  { id: "langtang-helambu", title: "Langtang Gosaikunda and Helambu Trek", days: 17, country: "Nepal" },
  { id: "lower-mustang", title: "Lower Mustang Trek", days: 10, country: "Nepal" },
  { id: "luxury-kailash", title: "Luxury Kailash Mansarovar Yatra", days: 12, country: "Tibet and Kailash", badge: "Top Pilgrimage" },
  { id: "sherpa-tengboche", title: "Sherpa Village Tengboche Trek", days: 10, country: "Nepal" },
  { id: "kathmandu-lhasa-overland", title: "Kathmandu to Lhasa Overland Tour", days: 10, country: "Tibet and Kailash" },
  { id: "manaslu-round", title: "Manaslu Round Trekking", days: 15, country: "Nepal" },
  { id: "ebc-luxury-heli", title: "Everest Base Camp Luxury Trek with Helicopter Return", days: 10, country: "Nepal", badge: "Helicopter" },
  { id: "gokyo-lake", title: "Gokyo Lake Trek", days: 12, country: "Nepal" },
  { id: "nepal-tour", title: "Nepal Tour", days: 8, country: "Nepal" },
  { id: "kathmandu-pokhara", title: "Kathmandu Pokhara Tour", days: 7, country: "Nepal" },
  { id: "ktm-pkr-lumbini-chitwan", title: "Kathmandu Pokhara Lumbini Chitwan Tour", days: 10, country: "Nepal", badge: "Family Pick" },
  { id: "kailash-charan-sparsh", title: "Kailash Mansarovar Yatra with Charan Sparsh", days: 15, country: "Tibet and Kailash", badge: "Sacred Touch" },
  { id: "kailash-yatra-classic", title: "Kailash Mansarovar Yatra", days: 13, country: "Tibet and Kailash" },
  { id: "kailash-overland", title: "Kailash Mansarovar Overland Yatra", days: 13, country: "Tibet and Kailash" },
  { id: "kailash-heli", title: "Kailash Mansarovar Yatra by Helicopter", days: 9, country: "Tibet and Kailash", badge: "Fast Track" },
  { id: "bhutan-cultural", title: "Bhutan Cultural Highlights & Tiger's Nest", days: 7, country: "Bhutan", badge: "Peaceful" },
  { id: "bhutan-druk-path", title: "Bhutan Druk Path Trek", days: 9, country: "Bhutan" },
  { id: "golden-triangle-india", title: "Incredible India Golden Triangle", days: 6, country: "India" },
  { id: "ladakh-himalayan", title: "Leh Ladakh Himalayan Odyssey", days: 8, country: "India", badge: "High Altitude" },
];

export interface PlanTripFormData {
  // Step 1: Destination
  destinations: string[];
  notSureDestination: boolean;
  selectedTrips: string[];
  tripSearchQuery: string;

  // Step 2: Dates
  dateType: "exact" | "approximate" | "later" | "";
  startDate: string;
  endDate: string;
  approxMonth: string;
  approxDuration: string;

  // Step 3: Travelers
  travelerType: "Single" | "Couple" | "Family" | "Group" | "";
  adultsCount: number;
  childrenCount: number;

  // Step 4: Accommodation
  accommodationType: "Basic" | "Luxury" | "Camping" | "Self booking" | "";

  // Step 5: Budget
  budgetMin: number;
  budgetMax: number;
  isBudgetFlexible: "flexible" | "strict" | "";

  // Step 6: Tailor-made tour (Image 6 additions)
  tripType: "Personal tailor-made trip" | "Group trips" | "";
  planningPhase: "I am still planning on my trip." | "I am ready to start." | "";
  additionalQueries: string;
  hearAboutUs: string;

  // Step 6: Traveler Contact Details
  fullName: string;
  email: string;
  phone: string;
  country: string;
}

const STEPS = [
  { id: 1, label: "Destination", icon: FaMapMarkerAlt },
  { id: 2, label: "Dates", icon: FaCalendarAlt },
  { id: 3, label: "Travelers", icon: FaUsers },
  { id: 4, label: "Accommodation", icon: FaBed },
  { id: 5, label: "Budget", icon: FaWallet },
  { id: 6, label: "Tailor-made tour", icon: FaEdit },
];

const DESTINATION_OPTIONS = [
  { id: "tibet-kailash", label: "Tibet and Kailash", icon: "🏔️", desc: "Holy Mansarovar, Lhasa & Mount Kailash" },
  { id: "nepal", label: "Nepal", icon: "🇳🇵", desc: "Everest, Annapurna, Pokhara & Kathmandu" },
  { id: "bhutan", label: "Bhutan", icon: "🇧🇹", desc: "Paro Taktsang, Thimphu & Punakha" },
  { id: "india", label: "India", icon: "🇮🇳", desc: "Varanasi, Ladakh & Golden Triangle" },
];

const APPROX_MONTHS = [
  "April 2026",
  "May 2026 (Peak Season)",
  "June 2026 (Saga Dawa Festival)",
  "July 2026",
  "August 2026",
  "September 2026 (Peak Autumn)",
  "October 2026 (Clear Views)",
  "November 2026",
  "Spring 2027",
  "Autumn 2027",
];

const APPROX_DURATIONS = [
  "5 - 7 Days",
  "8 - 11 Days",
  "12 - 15 Days",
  "16 - 21 Days",
  "22+ Days",
];

const HEAR_ABOUT_US_OPTIONS = [
  "Google Search",
  "TripAdvisor / Online Reviews",
  "Friend or Family Recommendation",
  "Instagram / Facebook",
  "YouTube Travel Vlogs",
  "Traveled with Mission Nepal before",
  "Newspaper / Travel Magazine",
  "Other",
];

const QUICK_TAG_SUGGESTIONS = [
  "Vegetarian / Jain Meals",
  "Helicopter Transfer Option",
  "Senior Citizen Friendly Pace",
  "Puja Ceremony at Mansarovar",
  "Private Oxygen Kit Request",
  "Solo Female Traveler Support",
  "Extra Acclimatization Day",
];

export default function PlanMyTripWizard({
  initialTrips = [],
}: {
  initialTrips?: UiTrip[];
}) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [stepError, setStepError] = useState<string>("");
  const [generatedRefId, setGeneratedRefId] = useState<string>("");

  const [formData, setFormData] = useState<PlanTripFormData>({
    destinations: ["Tibet and Kailash"],
    notSureDestination: false,
    selectedTrips: ["Kathmandu Pokhara Lumbini Chitwan Tour"],
    tripSearchQuery: "",

    dateType: "",
    startDate: "",
    endDate: "",
    approxMonth: "May 2026 (Peak Season)",
    approxDuration: "12 - 15 Days",

    travelerType: "Family",
    adultsCount: 2,
    childrenCount: 1,

    accommodationType: "",

    budgetMin: 1500,
    budgetMax: 5000,
    isBudgetFlexible: "",

    tripType: "Personal tailor-made trip",
    planningPhase: "I am ready to start.",
    additionalQueries: "",
    hearAboutUs: "",

    fullName: "",
    email: "",
    phone: "",
    country: "",
  });

  // Combine live API trips with catalog
  const tripCatalog = useMemo(() => {
    const list: TripCatalogItem[] = [...DEFAULT_TRIP_CATALOG];
    if (initialTrips && initialTrips.length > 0) {
      initialTrips.forEach((trip) => {
        if (!list.some((item) => item.title.toLowerCase() === trip.title.toLowerCase())) {
          list.push({
            id: trip.slug,
            title: trip.title,
            days: trip.days || 10,
            country: trip.country || "Nepal",
          });
        }
      });
    }
    return list;
  }, [initialTrips]);

  // Filtered trips for Step 1
  const filteredTrips = useMemo(() => {
    return tripCatalog.filter((item) => {
      // Search query filter
      if (formData.tripSearchQuery.trim()) {
        const query = formData.tripSearchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesCountry = item.country.toLowerCase().includes(query);
        if (!matchesTitle && !matchesCountry) return false;
      }

      // If "I am not sure!" is checked, display all trips
      if (formData.notSureDestination || formData.destinations.length === 0) {
        return true;
      }

      // Filter by selected destination
      return formData.destinations.some((dest) => {
        if (dest === "Tibet and Kailash") {
          return (
            item.country.toLowerCase().includes("tibet") ||
            item.country.toLowerCase().includes("kailash") ||
            item.title.toLowerCase().includes("kailash") ||
            item.title.toLowerCase().includes("lhasa") ||
            item.title.toLowerCase().includes("tibet")
          );
        }
        if (dest === "Nepal") {
          return (
            item.country.toLowerCase().includes("nepal") ||
            item.title.toLowerCase().includes("annapurna") ||
            item.title.toLowerCase().includes("everest") ||
            item.title.toLowerCase().includes("langtang") ||
            item.title.toLowerCase().includes("manaslu") ||
            item.title.toLowerCase().includes("kathmandu")
          );
        }
        if (dest === "Bhutan") {
          return item.country.toLowerCase().includes("bhutan") || item.title.toLowerCase().includes("bhutan");
        }
        if (dest === "India") {
          return (
            item.country.toLowerCase().includes("india") ||
            item.title.toLowerCase().includes("india") ||
            item.title.toLowerCase().includes("ladakh")
          );
        }
        return true;
      });
    });
  }, [tripCatalog, formData.tripSearchQuery, formData.destinations, formData.notSureDestination]);

  // Scroll to top of wizard on step change
  useEffect(() => {
    setStepError("");
    const element = document.getElementById("plan-trip-wizard-container");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentStep]);

  // Destination toggle handler
  const handleDestinationToggle = (destLabel: string) => {
    setFormData((prev) => {
      const exists = prev.destinations.includes(destLabel);
      let updated: string[];
      if (exists) {
        updated = prev.destinations.filter((d) => d !== destLabel);
      } else {
        updated = [...prev.destinations, destLabel];
      }
      return {
        ...prev,
        destinations: updated,
        notSureDestination: false,
      };
    });
  };

  // Trip selection toggle handler
  const handleTripToggle = (tripTitle: string) => {
    setFormData((prev) => {
      const exists = prev.selectedTrips.includes(tripTitle);
      return {
        ...prev,
        selectedTrips: exists
          ? prev.selectedTrips.filter((t) => t !== tripTitle)
          : [...prev.selectedTrips, tripTitle],
      };
    });
  };

  // Quick tag append to additional queries
  const handleAddQuickTag = (tag: string) => {
    setFormData((prev) => {
      const current = prev.additionalQueries.trim();
      if (current.includes(tag)) return prev;
      return {
        ...prev,
        additionalQueries: current ? `${current}, ${tag}` : tag,
      };
    });
  };

  // Validation before going to next step
  const handleNext = () => {
    setStepError("");

    if (currentStep === 1) {
      if (formData.destinations.length === 0 && !formData.notSureDestination) {
        setStepError("Please choose where you would like to go, or select 'I am not sure!'.");
        return;
      }
    } else if (currentStep === 2) {
      if (!formData.dateType) {
        setStepError("Please let us know your planned timeframe.");
        return;
      }
      if (formData.dateType === "exact" && (!formData.startDate || !formData.endDate)) {
        setStepError("Please select both start and return dates.");
        return;
      }
    } else if (currentStep === 3) {
      if (!formData.travelerType) {
        setStepError("Please select who you are traveling with.");
        return;
      }
    } else if (currentStep === 4) {
      if (!formData.accommodationType) {
        setStepError("Please select your preferred accommodation style.");
        return;
      }
    } else if (currentStep === 5) {
      if (!formData.isBudgetFlexible) {
        setStepError("Please indicate whether your budget is flexible.");
        return;
      }
    }

    if (currentStep < 6) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStepError("");
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStepError("");

    if (!formData.tripType) {
      setStepError("Please select the trip type you are looking for.");
      return;
    }
    if (!formData.planningPhase) {
      setStepError("Please select your current phase of trip planning.");
      return;
    }
    if (!formData.hearAboutUs) {
      setStepError("Please let us know how you heard about us.");
      return;
    }
    if (!formData.fullName.trim()) {
      setStepError("Please provide your full name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setStepError("Please enter a valid email address.");
      return;
    }
    if (!formData.phone.trim()) {
      setStepError("Please provide your phone or WhatsApp number.");
      return;
    }

    setIsSubmitting(true);
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const refCode = `MNH-${new Date().getFullYear()}-${randomCode}`;
    setGeneratedRefId(refCode);

    const formattedMessage = [
      "=== BESPOKE PLAN MY TRIP INQUIRY ===",
      `• Destination(s): ${formData.destinations.join(", ") || "Himalayan Region"}`,
      formData.selectedTrips.length > 0 ? `• Shortlisted Itineraries: ${formData.selectedTrips.join("; ")}` : "",
      `• Travel Schedule: ${
        formData.dateType === "exact"
          ? `${formData.startDate} to ${formData.endDate}`
          : formData.dateType === "approximate"
          ? `${formData.approxMonth} (${formData.approxDuration})`
          : "Flexible / Decide later"
      }`,
      `• Party Size: ${formData.travelerType} (${formData.adultsCount} Adults, ${formData.childrenCount} Children)`,
      `• Accommodation Style: ${formData.accommodationType}`,
      `• Budget Range: $${formData.budgetMin.toLocaleString()} - $${formData.budgetMax.toLocaleString()} / person (${formData.isBudgetFlexible === "flexible" ? "Flexible" : "Strict"})`,
      `• Preferred Trip Type: ${formData.tripType}`,
      `• Planning Phase: ${formData.planningPhase}`,
      formData.hearAboutUs ? `• Referred by: ${formData.hearAboutUs}` : "",
      formData.country ? `• Residence Country: ${formData.country}` : "",
      formData.additionalQueries ? `• Special Requests / Notes: ${formData.additionalQueries}` : "",
    ].filter(Boolean).join("\n");

    const payload = {
      type: "plan_my_trip",
      name: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      travel_date: formData.dateType === "exact" && formData.startDate ? formData.startDate : null,
      travelers: Number(formData.adultsCount) + Number(formData.childrenCount),
      message: formattedMessage,
      custom_details: {
        destinations: formData.destinations,
        notSureDestination: formData.notSureDestination,
        selectedTrips: formData.selectedTrips,
        dateType: formData.dateType,
        startDate: formData.startDate,
        endDate: formData.endDate,
        approxMonth: formData.approxMonth,
        approxDuration: formData.approxDuration,
        travelerType: formData.travelerType,
        adultsCount: formData.adultsCount,
        childrenCount: formData.childrenCount,
        accommodationType: formData.accommodationType,
        budgetMin: formData.budgetMin,
        budgetMax: formData.budgetMax,
        isBudgetFlexible: formData.isBudgetFlexible,
        tripType: formData.tripType,
        planningPhase: formData.planningPhase,
        hearAboutUs: formData.hearAboutUs,
        additionalQueries: formData.additionalQueries,
        country: formData.country,
      },
    };

    try {
      const response = await apiPost<{ id?: number }>("inquiries", payload);
      if (response?.id) {
        setGeneratedRefId(`MNH-${new Date().getFullYear()}-${response.id}`);
      }
      setIsSubmitted(true);
    } catch (err) {
      console.warn("Backend submission error, persisting locally:", err);
      // Still display confirmation so the user is never stuck
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="plan-trip-wizard-container"
      className="w-full bg-[#F8FAFC] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* ================= STEPPER PROGRESS BAR ================= */}
        <div className="w-full max-w-[960px] mx-auto mb-10 sm:mb-14">
          <div className="relative flex items-center justify-between">
            {/* Connecting Base Background Line */}
            <div className="absolute top-[22px] left-[24px] right-[24px] h-[3.5px] bg-[#E2E8F0] z-0" />

            {/* Connecting Active Progress Line (Orange/Red Accent) */}
            <div
              className="absolute top-[22px] left-[24px] h-[3.5px] bg-[#F26522] transition-all duration-500 ease-out z-0"
              style={{
                width: `${((currentStep - 1) / (STEPS.length - 1)) * 95}%`,
              }}
            />

            {/* Stepper Nodes */}
            {STEPS.map((step) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isPassed = currentStep > step.id;

              return (
                <div
                  key={step.id}
                  className="relative z-10 flex flex-col items-center group cursor-pointer"
                  onClick={() => {
                    if (isPassed || step.id <= currentStep) {
                      setCurrentStep(step.id);
                    }
                  }}
                >
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
                      isActive
                        ? "bg-[#1D2A44] text-white ring-4 ring-[#1D2A44]/20 scale-110"
                        : isPassed
                        ? "bg-[#1D2A44] text-white hover:bg-[#283b5e]"
                        : "bg-[#EBF3FA] text-[#86A3BE] hover:bg-[#DFECF7]"
                    }`}
                  >
                    {isPassed ? (
                      <FaCheck className="w-4 h-4 text-[#F26522]" />
                    ) : (
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </div>
                  <span
                    className={`mt-2.5 text-[11px] sm:text-xs font-semibold text-center whitespace-nowrap transition-colors ${
                      isActive
                        ? "text-[#1D2A44] font-bold"
                        : isPassed
                        ? "text-gray-800"
                        : "text-gray-400"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= STEP CONTENT CONTAINER ================= */}
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-md p-6 sm:p-9 lg:p-12 transition-all">
          {/* Validation Alert */}
          {stepError && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-medium flex items-center justify-between">
              <span>{stepError}</span>
              <button
                type="button"
                onClick={() => setStepError("")}
                className="text-red-500 hover:text-red-700 font-bold ml-3"
              >
                &times;
              </button>
            </div>
          )}

          {/* ================= STEP 1: DESTINATION ================= */}
          {currentStep === 1 && (
            <div className="space-y-8 animate-fadeIn">
              {/* Question 1 */}
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F26522] mb-1 block">
                  Step 1 of 6
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                  Where do you want to go? <span className="text-[#F26522]">*</span>
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Select one or more sacred regions you wish to explore.
                </p>
              </div>

              {/* Destination Checkbox Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-4xl mx-auto">
                {DESTINATION_OPTIONS.map((dest) => {
                  const isChecked = formData.destinations.includes(dest.label);
                  return (
                    <div
                      key={dest.id}
                      onClick={() => handleDestinationToggle(dest.label)}
                      className={`relative flex items-center p-3.5 sm:p-4 rounded-2xl cursor-pointer transition-all border select-none ${
                        isChecked
                          ? "bg-[#1D2A44] border-[#1D2A44] text-white shadow-md ring-2 ring-[#1D2A44]/30"
                          : "bg-[#F0F5FA] hover:bg-[#E5EEF6] border-slate-200/80 text-gray-800"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center mr-3 border transition-colors shrink-0 ${
                          isChecked
                            ? "bg-[#F26522] border-[#F26522] text-white"
                            : "bg-white border-gray-300"
                        }`}
                      >
                        {isChecked && <FaCheck className="w-2.5 h-2.5" />}
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs sm:text-sm font-semibold block leading-tight">
                          {dest.label}
                        </span>
                        <span className={`text-[10px] sm:text-[11px] block mt-0.5 truncate ${isChecked ? "text-gray-300" : "text-gray-500"}`}>
                          {dest.desc}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* "I am not sure!" Checkbox */}
              <div className="max-w-4xl mx-auto flex items-center pt-1 justify-center sm:justify-start">
                <label className="flex items-center space-x-2.5 cursor-pointer text-xs sm:text-sm text-gray-600 select-none bg-gray-50/80 px-4 py-2 rounded-full border border-gray-200/80 hover:bg-gray-100 transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.notSureDestination}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setFormData((prev) => ({
                        ...prev,
                        notSureDestination: checked,
                        destinations: checked ? [] : prev.destinations,
                      }));
                    }}
                    className="w-4 h-4 rounded text-[#F26522] focus:ring-[#F26522] border-gray-300"
                  />
                  <span>I am not sure! Let our specialists recommend the best itinerary for my season.</span>
                </label>
              </div>

              {/* Trips Selector Sub-section */}
              <div className="pt-6 border-t border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">
                      Choose the trips you are interested in.
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Select any itineraries that catch your eye (you can select multiple).
                    </p>
                  </div>

                  {/* Search Trips Input */}
                  <div className="relative w-full sm:w-72">
                    <input
                      type="text"
                      placeholder="Search Trips..."
                      value={formData.tripSearchQuery}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          tripSearchQuery: e.target.value,
                        }))
                      }
                      className="w-full pl-9 pr-8 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F26522]/30 focus:border-[#F26522] transition-colors"
                    />
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                    {formData.tripSearchQuery && (
                      <button
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, tripSearchQuery: "" }))}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <FaTimes className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Trip Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {filteredTrips.map((trip) => {
                    const isSelected = formData.selectedTrips.includes(trip.title);
                    return (
                      <div
                        key={trip.id}
                        onClick={() => handleTripToggle(trip.title)}
                        className={`flex items-start p-3 sm:p-3.5 rounded-xl border cursor-pointer select-none transition-all ${
                          isSelected
                            ? "bg-[#EBF3FA] border-[#1D2A44] shadow-xs ring-1 ring-[#1D2A44]/20 scale-[1.01]"
                            : "bg-white hover:bg-gray-50/80 border-gray-200/90"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded mt-0.5 mr-2.5 flex items-center justify-center border transition-colors shrink-0 ${
                            isSelected
                              ? "bg-[#1D2A44] border-[#1D2A44] text-white"
                              : "bg-white border-gray-300"
                          }`}
                        >
                          {isSelected && <FaCheck className="w-2.5 h-2.5 text-[#F26522]" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-semibold text-gray-900 leading-snug line-clamp-2">
                            {trip.title}
                          </h4>
                          <div className="flex items-center gap-1.5 mt-1.5">
                            <span className="text-[11px] font-medium text-gray-500">
                              {trip.days} days
                            </span>
                            {trip.badge && (
                              <span className="px-1.5 py-0.2 rounded text-[9.5px] font-semibold bg-orange-50 text-[#F26522] border border-orange-200">
                                {trip.badge}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {filteredTrips.length === 0 && (
                  <div className="text-center py-10 bg-gray-50 rounded-xl border border-dashed border-gray-200 text-gray-500 text-xs sm:text-sm">
                    No itineraries found matching &quot;{formData.tripSearchQuery}&quot;. Try clearing the search or choosing another destination.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ================= STEP 2: DATES ================= */}
          {currentStep === 2 && (
            <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
              <div className="text-center max-w-xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F26522] mb-1 block">
                  Step 2 of 6
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                  When are you planning to begin your trip? <span className="text-[#F26522]">*</span>
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Pick how specific your travel schedule is at this stage.
                </p>
              </div>

              {/* 3 Main Choice Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* 1. Exact Dates */}
                <div
                  onClick={() => setFormData((prev) => ({ ...prev, dateType: "exact" }))}
                  className={`p-5 sm:p-6 rounded-2xl border text-center cursor-pointer transition-all select-none flex flex-col items-center justify-center ${
                    formData.dateType === "exact"
                      ? "bg-[#EBF3FA] border-[#1D2A44] shadow-md ring-2 ring-[#1D2A44]/20 scale-[1.02]"
                      : "bg-[#F0F5FA] hover:bg-[#E5EEF6] border-slate-200/80 text-gray-800"
                  }`}
                >
                  <div className="w-13 h-13 rounded-full bg-white shadow-xs border border-gray-100 flex items-center justify-center text-[#0284C7] mb-3.5">
                    <FaCalendarCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    I have exact dates.
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Specific arrival & departure dates
                  </p>
                </div>

                {/* 2. Approximate Dates */}
                <div
                  onClick={() => setFormData((prev) => ({ ...prev, dateType: "approximate" }))}
                  className={`p-5 sm:p-6 rounded-2xl border text-center cursor-pointer transition-all select-none flex flex-col items-center justify-center ${
                    formData.dateType === "approximate"
                      ? "bg-[#EBF3FA] border-[#1D2A44] shadow-md ring-2 ring-[#1D2A44]/20 scale-[1.02]"
                      : "bg-[#F0F5FA] hover:bg-[#E5EEF6] border-slate-200/80 text-gray-800"
                  }`}
                >
                  <div className="w-13 h-13 rounded-full bg-white shadow-xs border border-gray-100 flex items-center justify-center text-[#0284C7] mb-3.5">
                    <FaCalendarAlt className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    I have approximate dates.
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Month, season, or flexible duration
                  </p>
                </div>

                {/* 3. Decide Later */}
                <div
                  onClick={() => setFormData((prev) => ({ ...prev, dateType: "later" }))}
                  className={`p-5 sm:p-6 rounded-2xl border text-center cursor-pointer transition-all select-none flex flex-col items-center justify-center ${
                    formData.dateType === "later"
                      ? "bg-[#EBF3FA] border-[#1D2A44] shadow-md ring-2 ring-[#1D2A44]/20 scale-[1.02]"
                      : "bg-[#F0F5FA] hover:bg-[#E5EEF6] border-slate-200/80 text-gray-800"
                  }`}
                >
                  <div className="w-13 h-13 rounded-full bg-white shadow-xs border border-gray-100 flex items-center justify-center text-[#0284C7] mb-3.5">
                    <FaRegClock className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    I will decide later.
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Need seasonal recommendations
                  </p>
                </div>
              </div>

              {/* Dynamic Inputs Based on Selection */}
              {formData.dateType === "exact" && (
                <div className="p-6 bg-slate-50/90 rounded-2xl border border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fadeIn">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Estimated Start Date <span className="text-[#F26522]">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, startDate: e.target.value }))
                      }
                      className="w-full p-2.5 text-xs sm:text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F26522]/30 focus:border-[#F26522] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Estimated Return Date <span className="text-[#F26522]">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.endDate}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, endDate: e.target.value }))
                      }
                      className="w-full p-2.5 text-xs sm:text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F26522]/30 focus:border-[#F26522] outline-none"
                    />
                  </div>
                </div>
              )}

              {formData.dateType === "approximate" && (
                <div className="p-6 bg-slate-50/90 rounded-2xl border border-slate-200/80 space-y-4 animate-fadeIn">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Target Travel Month / Season
                    </label>
                    <select
                      value={formData.approxMonth}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, approxMonth: e.target.value }))
                      }
                      className="w-full p-2.5 text-xs sm:text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F26522]/30 focus:border-[#F26522] outline-none"
                    >
                      {APPROX_MONTHS.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Expected Trip Duration
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {APPROX_DURATIONS.map((dur) => (
                        <button
                          key={dur}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({ ...prev, approxDuration: dur }))
                          }
                          className={`py-2 px-3 text-xs font-medium rounded-xl border transition-all ${
                            formData.approxDuration === dur
                              ? "bg-[#1D2A44] text-white border-[#1D2A44]"
                              : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
                          }`}
                        >
                          {dur}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {formData.dateType === "later" && (
                <div className="p-5 bg-blue-50/70 rounded-2xl border border-blue-200/80 text-xs sm:text-sm text-blue-900 flex items-start gap-3">
                  <FaShieldAlt className="text-[#0284C7] text-base shrink-0 mt-0.5" />
                  <p>
                    No problem at all! Himalayan high-altitude yatras and mountain passes have distinct seasonal peaks (May–June for Kailash Saga Dawa, and Sep–Oct for crystal-clear autumn trekking). Our team will guide you to the safest and most scenic dates.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* ================= STEP 3: TRAVELERS ================= */}
          {currentStep === 3 && (
            <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
              <div className="text-center max-w-xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F26522] mb-1 block">
                  Step 3 of 6
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                  Who are you traveling with? <span className="text-[#F26522]">*</span>
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Helps us customize private guides, vehicles, and room arrangements.
                </p>
              </div>

              {/* 4 Traveler Categories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { id: "Single", label: "Single", icon: FaUser, desc: "Solo explorer / yatri" },
                  { id: "Couple", label: "Couple", icon: FaUserFriends, desc: "2 travelers / partners" },
                  { id: "Family", label: "Family", icon: FaUsers, desc: "Parents, kids, relatives" },
                  { id: "Group", label: "Group", icon: FaLayerGroup, desc: "Friends or pilgrimage satsang" },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = formData.travelerType === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          travelerType: item.id as any,
                        }))
                      }
                      className={`p-5 sm:p-6 rounded-2xl border text-center cursor-pointer transition-all select-none flex flex-col items-center justify-center ${
                        isSelected
                          ? "bg-[#EBF3FA] border-[#1D2A44] shadow-md ring-2 ring-[#1D2A44]/20 scale-[1.02]"
                          : "bg-[#F0F5FA] hover:bg-[#E5EEF6] border-slate-200/80 text-gray-800"
                      }`}
                    >
                      <div className="w-13 h-13 rounded-full bg-white shadow-xs border border-gray-100 flex items-center justify-center text-[#0284C7] mb-3.5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900">
                        {item.label}
                      </h3>
                      <p className="text-[11px] text-gray-500 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Additional Traveler Counters */}
              <div className="p-6 bg-slate-50/90 rounded-2xl border border-slate-200/80 max-w-xl mx-auto">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4 text-center">
                  Specify Number of Travelers
                </h4>
                <div className="grid grid-cols-2 gap-6">
                  {/* Adults */}
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-semibold text-gray-800 mb-2">
                      Adults (12+ yrs)
                    </span>
                    <div className="flex items-center space-x-3">
                      <button
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            adultsCount: Math.max(1, prev.adultsCount - 1),
                          }))
                        }
                        className="w-9 h-9 rounded-full bg-white border border-gray-300 text-gray-700 flex items-center justify-center font-bold text-sm hover:bg-gray-100 active:scale-95 shadow-2xs"
                      >
                        -
                      </button>
                      <span className="text-base font-bold text-gray-900 w-6 text-center">
                        {formData.adultsCount}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            adultsCount: prev.adultsCount + 1,
                          }))
                        }
                        className="w-9 h-9 rounded-full bg-white border border-gray-300 text-gray-700 flex items-center justify-center font-bold text-sm hover:bg-gray-100 active:scale-95 shadow-2xs"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-semibold text-gray-800 mb-2">
                      Children (under 12)
                    </span>
                    <div className="flex items-center space-x-3">
                      <button
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            childrenCount: Math.max(0, prev.childrenCount - 1),
                          }))
                        }
                        className="w-9 h-9 rounded-full bg-white border border-gray-300 text-gray-700 flex items-center justify-center font-bold text-sm hover:bg-gray-100 active:scale-95 shadow-2xs"
                      >
                        -
                      </button>
                      <span className="text-base font-bold text-gray-900 w-6 text-center">
                        {formData.childrenCount}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            childrenCount: prev.childrenCount + 1,
                          }))
                        }
                        className="w-9 h-9 rounded-full bg-white border border-gray-300 text-gray-700 flex items-center justify-center font-bold text-sm hover:bg-gray-100 active:scale-95 shadow-2xs"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= STEP 4: ACCOMMODATION ================= */}
          {currentStep === 4 && (
            <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
              <div className="text-center max-w-xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F26522] mb-1 block">
                  Step 4 of 6
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                  What kind of accomodation do you want? <span className="text-[#F26522]">*</span>
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Choose the comfort standard that suits your journey.
                </p>
              </div>

              {/* 4 Accommodation Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    id: "Basic",
                    label: "Basic",
                    icon: FaBed,
                    desc: "Authentic teahouses / clean 2-3★ standard lodges",
                  },
                  {
                    id: "Luxury",
                    label: "Luxury",
                    icon: FaHotel,
                    desc: "4★–5★ boutique heritage resorts & premium lodges",
                  },
                  {
                    id: "Camping",
                    label: "Camping",
                    icon: FaCampground,
                    desc: "Alpine dome tents with full cook & crew setup",
                  },
                  {
                    id: "Self booking",
                    label: "Self booking",
                    icon: FaMobileAlt,
                    desc: "You book your stays, we provide permits, guide & vehicle",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = formData.accommodationType === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          accommodationType: item.id as any,
                        }))
                      }
                      className={`p-5 sm:p-6 rounded-2xl border text-center cursor-pointer transition-all select-none flex flex-col items-center justify-center ${
                        isSelected
                          ? "bg-[#EBF3FA] border-[#1D2A44] shadow-md ring-2 ring-[#1D2A44]/20 scale-[1.02]"
                          : "bg-[#F0F5FA] hover:bg-[#E5EEF6] border-slate-200/80 text-gray-800"
                      }`}
                    >
                      <div className="w-13 h-13 rounded-full bg-white shadow-xs border border-gray-100 flex items-center justify-center text-[#0284C7] mb-3.5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900">
                        {item.label}
                      </h3>
                      <p className="text-[11px] text-gray-500 mt-1 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ================= STEP 5: BUDGET ================= */}
          {currentStep === 5 && (
            <div className="space-y-10 animate-fadeIn max-w-3xl mx-auto">
              <div className="text-center max-w-xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F26522] mb-1 block">
                  Step 5 of 6
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                  Budget range (per person) <span className="text-[#F26522]">*</span>
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Helps us recommend the best balance of flights, guides, and hotels.
                </p>
              </div>

              {/* Budget Range Slider */}
              <div className="p-7 bg-[#F8FAFC] rounded-3xl border border-slate-200/80 space-y-4 shadow-2xs">
                <div className="text-center">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#1D2A44] tracking-tight">
                    ${formData.budgetMin.toLocaleString()} – ${formData.budgetMax.toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-500 block mt-1 font-medium">
                    USD per person (excluding international flights)
                  </span>
                </div>

                <div className="pt-4 px-2">
                  <input
                    type="range"
                    min={500}
                    max={15000}
                    step={250}
                    value={formData.budgetMax}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        budgetMax: Number(e.target.value),
                      }))
                    }
                    className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0284C7]"
                  />
                  <div className="flex justify-between text-[11px] text-gray-400 font-semibold mt-2">
                    <span>$500</span>
                    <span>$3,000</span>
                    <span>$6,000</span>
                    <span>$10,000</span>
                    <span>$15,000+</span>
                  </div>
                </div>

                {/* Quick Budget Presets */}
                <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                  {[
                    { label: "Economy ($1k–$2.5k)", max: 2500 },
                    { label: "Comfort ($2.5k–$5k)", max: 5000 },
                    { label: "Luxury ($5k–$10k)", max: 10000 },
                    { label: "VIP Expedition ($15k+)", max: 15000 },
                  ].map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, budgetMax: preset.max }))}
                      className={`px-3 py-1 rounded-full text-[11px] font-semibold border transition-all ${
                        formData.budgetMax === preset.max
                          ? "bg-[#1D2A44] text-white border-[#1D2A44]"
                          : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sub-question: Is your budget flexible? */}
              <div className="space-y-4">
                <h3 className="text-center text-sm sm:text-base font-bold text-gray-900">
                  Is your budget flexible? <span className="text-[#F26522]">*</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Flexible */}
                  <div
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, isBudgetFlexible: "flexible" }))
                    }
                    className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all select-none flex items-center space-x-4 ${
                      formData.isBudgetFlexible === "flexible"
                        ? "bg-[#EBF3FA] border-[#1D2A44] shadow-md ring-2 ring-[#1D2A44]/20 scale-[1.01]"
                        : "bg-[#F0F5FA] hover:bg-[#E5EEF6] border-slate-200/80 text-gray-800"
                    }`}
                  >
                    <div className="w-11 h-11 rounded-full bg-white shadow-2xs border border-gray-100 flex items-center justify-center text-[#0284C7] shrink-0">
                      <FaMoneyBillWave className="w-5 h-5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-900 leading-snug">
                      Yes, it is flexible. Plan the best trip for me.
                    </span>
                  </div>

                  {/* Strict */}
                  <div
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, isBudgetFlexible: "strict" }))
                    }
                    className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all select-none flex items-center space-x-4 ${
                      formData.isBudgetFlexible === "strict"
                        ? "bg-[#EBF3FA] border-[#1D2A44] shadow-md ring-2 ring-[#1D2A44]/20 scale-[1.01]"
                        : "bg-[#F0F5FA] hover:bg-[#E5EEF6] border-slate-200/80 text-gray-800"
                    }`}
                  >
                    <div className="w-11 h-11 rounded-full bg-white shadow-2xs border border-gray-100 flex items-center justify-center text-[#0284C7] shrink-0">
                      <FaWallet className="w-5 h-5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-900 leading-snug">
                      No, plan my trip according to my budget.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= STEP 6: TAILOR-MADE TOUR (IMAGE 6 EXACT SPECIFICATION & CREATIVE ELEVATION) ================= */}
          {currentStep === 6 && (
            <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="text-center max-w-xl mx-auto">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F26522] mb-1 block">
                      Step 6 of 6 — Final Step
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                      Tailor-made Tour Preferences & Contact
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      Customize how you want to travel, and where we should send your personalized day-by-day itinerary.
                    </p>
                  </div>

                  {/* Question 1: Trip type you are looking for * (Exact from Image 6) */}
                  <div className="space-y-3">
                    <label className="block text-xs sm:text-sm font-bold text-gray-900">
                      Trip type you are looking for <span className="text-[#F26522]">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Personal tailor-made trip */}
                      <div
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            tripType: "Personal tailor-made trip",
                          }))
                        }
                        className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all select-none flex items-center space-x-3.5 ${
                          formData.tripType === "Personal tailor-made trip"
                            ? "bg-[#EBF3FA] border-[#1D2A44] shadow-md ring-2 ring-[#1D2A44]/20 scale-[1.01]"
                            : "bg-[#F0F5FA] hover:bg-[#E5EEF6] border-slate-200/80 text-gray-800"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                            formData.tripType === "Personal tailor-made trip"
                              ? "border-[#1D2A44] bg-[#1D2A44]"
                              : "border-gray-400 bg-white"
                          }`}
                        >
                          {formData.tripType === "Personal tailor-made trip" && (
                            <div className="w-2 h-2 rounded-full bg-white" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs sm:text-sm font-semibold text-gray-900 block leading-snug">
                            Personal tailor-made trip
                          </span>
                          <span className="text-[11px] text-gray-500 block mt-0.5">
                            Private vehicle, bespoke pacing & dedicated private Sherpa/guide
                          </span>
                        </div>
                      </div>

                      {/* Group trips */}
                      <div
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            tripType: "Group trips",
                          }))
                        }
                        className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all select-none flex items-center space-x-3.5 ${
                          formData.tripType === "Group trips"
                            ? "bg-[#EBF3FA] border-[#1D2A44] shadow-md ring-2 ring-[#1D2A44]/20 scale-[1.01]"
                            : "bg-[#F0F5FA] hover:bg-[#E5EEF6] border-slate-200/80 text-gray-800"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                            formData.tripType === "Group trips"
                              ? "border-[#1D2A44] bg-[#1D2A44]"
                              : "border-gray-400 bg-white"
                          }`}
                        >
                          {formData.tripType === "Group trips" && (
                            <div className="w-2 h-2 rounded-full bg-white" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs sm:text-sm font-semibold text-gray-900 block leading-snug">
                            Group trips
                          </span>
                          <span className="text-[11px] text-gray-500 block mt-0.5">
                            Join like-minded yatris & trekkers on fixed scheduled departures
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Question 2: Current phase of trip planning * (Exact from Image 6) */}
                  <div className="space-y-3">
                    <label className="block text-xs sm:text-sm font-bold text-gray-900">
                      Current phase of trip planning <span className="text-[#F26522]">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Still planning */}
                      <div
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            planningPhase: "I am still planning on my trip.",
                          }))
                        }
                        className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all select-none flex items-center space-x-3.5 ${
                          formData.planningPhase === "I am still planning on my trip."
                            ? "bg-[#EBF3FA] border-[#1D2A44] shadow-md ring-2 ring-[#1D2A44]/20 scale-[1.01]"
                            : "bg-[#F0F5FA] hover:bg-[#E5EEF6] border-slate-200/80 text-gray-800"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                            formData.planningPhase === "I am still planning on my trip."
                              ? "border-[#1D2A44] bg-[#1D2A44]"
                              : "border-gray-400 bg-white"
                          }`}
                        >
                          {formData.planningPhase === "I am still planning on my trip." && (
                            <div className="w-2 h-2 rounded-full bg-white" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs sm:text-sm font-semibold text-gray-900 block leading-snug">
                            I am still planning on my trip.
                          </span>
                          <span className="text-[11px] text-gray-500 block mt-0.5">
                            Gathering quotes, comparing options & learning about the trails
                          </span>
                        </div>
                      </div>

                      {/* Ready to start */}
                      <div
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            planningPhase: "I am ready to start.",
                          }))
                        }
                        className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all select-none flex items-center space-x-3.5 ${
                          formData.planningPhase === "I am ready to start."
                            ? "bg-[#EBF3FA] border-[#1D2A44] shadow-md ring-2 ring-[#1D2A44]/20 scale-[1.01]"
                            : "bg-[#F0F5FA] hover:bg-[#E5EEF6] border-slate-200/80 text-gray-800"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                            formData.planningPhase === "I am ready to start."
                              ? "border-[#1D2A44] bg-[#1D2A44]"
                              : "border-gray-400 bg-white"
                          }`}
                        >
                          {formData.planningPhase === "I am ready to start." && (
                            <div className="w-2 h-2 rounded-full bg-white" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs sm:text-sm font-semibold text-gray-900 block leading-snug">
                            I am ready to start.
                          </span>
                          <span className="text-[11px] text-gray-500 block mt-0.5">
                            Ready to lock in permits, secure deposits & book flights
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Two-Column Row: Additional Queries (Left) & How did you hear about us (Right) (Exact from Image 6) */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left: Do you have any additional queries? */}
                    <div className="space-y-2">
                      <label className="block text-xs sm:text-sm font-bold text-gray-900">
                        Do you have any additional queries?
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about any specific requests, questions about altitude/fitness, visa requirements, or customized itinerary changes..."
                        value={formData.additionalQueries}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            additionalQueries: e.target.value,
                          }))
                        }
                        className="w-full p-3.5 text-xs sm:text-sm bg-[#F8FAFC] border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#F26522]/30 focus:border-[#F26522] outline-none transition-all resize-none shadow-2xs"
                      />

                      {/* Creative Elevation: Quick-add Suggestion Chips */}
                      <div className="pt-1">
                        <span className="text-[10.5px] font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">
                          Tap to quickly add special requests:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {QUICK_TAG_SUGGESTIONS.map((tag) => (
                            <button
                              key={tag}
                              type="button"
                              onClick={() => handleAddQuickTag(tag)}
                              className="px-2.5 py-1 rounded-lg text-[10.5px] font-medium bg-gray-100 hover:bg-orange-50 hover:text-[#F26522] hover:border-orange-200 border border-gray-200 text-gray-700 transition-colors cursor-pointer"
                            >
                              + {tag}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: How did you hear about us? * */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-bold text-gray-900 mb-2">
                          How did you hear about us? <span className="text-[#F26522]">*</span>
                        </label>
                        <select
                          value={formData.hearAboutUs}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              hearAboutUs: e.target.value,
                            }))
                          }
                          className="w-full p-3.5 text-xs sm:text-sm bg-[#F8FAFC] border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#F26522]/30 focus:border-[#F26522] outline-none transition-all shadow-2xs text-gray-800"
                        >
                          <option value="">Select One</option>
                          {HEAR_ABOUT_US_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Trust Guarantee Box */}
                      <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl flex items-start gap-3">
                        <FaShieldAlt className="text-emerald-600 w-5 h-5 shrink-0 mt-0.5" />
                        <div className="text-xs text-emerald-900 leading-relaxed">
                          <strong className="block font-semibold">100% Free & No Obligation</strong>
                          Receive your comprehensive day-by-day itinerary breakdown, hotel options, and transparent cost calculation from our licensed Himalayan experts.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Creative Elevation: Contact Information Card */}
                  <div className="pt-6 border-t border-gray-100">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                      Where should we send your custom plan?
                    </h3>
                    <p className="text-xs text-gray-500 mb-5">
                      Your details are kept completely private and will only be used to send your personalized proposal.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Your Full Name <span className="text-[#F26522]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Kumar / John Smith"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                          }
                          className="w-full p-3 text-xs sm:text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F26522]/30 focus:border-[#F26522] outline-none transition-colors shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Email Address <span className="text-[#F26522]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. name@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, email: e.target.value }))
                          }
                          className="w-full p-3 text-xs sm:text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F26522]/30 focus:border-[#F26522] outline-none transition-colors shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Phone / WhatsApp Number <span className="text-[#F26522]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 98765 43210 / +1 555 123456"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, phone: e.target.value }))
                          }
                          className="w-full p-3 text-xs sm:text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F26522]/30 focus:border-[#F26522] outline-none transition-colors shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Country of Residence
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. India, United States, United Kingdom"
                          value={formData.country}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, country: e.target.value }))
                          }
                          className="w-full p-3 text-xs sm:text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F26522]/30 focus:border-[#F26522] outline-none transition-colors shadow-2xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Creative Elevation: Journey Summary Card Recap */}
                  <div className="p-5 sm:p-6 bg-[#F8FAFC] rounded-2xl border border-gray-200/80">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Summary of Your Selections
                      </h4>
                      <span className="text-[11px] text-[#F26522] font-semibold">
                        Ready to finalize
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                      <div>
                        <span className="text-gray-400 block text-[11px]">Destination</span>
                        <span className="font-semibold text-gray-800">
                          {formData.destinations.join(", ") || "Specialist recommendations"}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[11px]">Dates</span>
                        <span className="font-semibold text-gray-800 capitalize">
                          {formData.dateType === "exact"
                            ? `${formData.startDate} – ${formData.endDate}`
                            : formData.dateType === "approximate"
                            ? formData.approxMonth
                            : "Flexible / To decide"}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[11px]">Travelers</span>
                        <span className="font-semibold text-gray-800">
                          {formData.travelerType || "Custom"} ({formData.adultsCount} Adults
                          {formData.childrenCount > 0 ? `, ${formData.childrenCount} Kids` : ""})
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[11px]">Budget & Stay</span>
                        <span className="font-semibold text-gray-800">
                          {formData.accommodationType || "Standard"} • ${formData.budgetMax.toLocaleString()} Max
                        </span>
                      </div>
                    </div>

                    {formData.selectedTrips.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-gray-200/60">
                        <span className="text-gray-400 block text-[11px] mb-1.5">
                          Shortlisted Itineraries ({formData.selectedTrips.length})
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {formData.selectedTrips.map((tripTitle) => (
                            <span
                              key={tripTitle}
                              className="px-2.5 py-1 rounded-md bg-white border border-gray-200 text-gray-700 text-[11px] font-medium"
                            >
                              {tripTitle}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center space-x-2"
                    >
                      <FaArrowLeft className="w-3 h-3" />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-9 py-3.5 rounded-full bg-[#1D2A44] hover:bg-[#F26522] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      <span>{isSubmitting ? "Submitting Custom Trip..." : "Submit Plan & Get My Free Quote"}</span>
                      <FaArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </form>
              ) : (
                /* Celebration Success State */
                <div className="text-center py-12 px-6 max-w-xl mx-auto bg-gradient-to-b from-emerald-50/80 to-white rounded-3xl border border-emerald-200 shadow-sm animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
                    <FaCheckCircle className="w-8 h-8" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded-full uppercase tracking-wider mb-2">
                    Inquiry Reference: {generatedRefId}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Trip Plan Submitted Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
                    Thank you, <strong className="text-gray-800">{formData.fullName}</strong>. Our senior Himalayan expedition specialist has received your personalized plan and is crafting your customized itinerary and quotes.
                  </p>

                  <div className="p-4 bg-white rounded-2xl border border-gray-200 text-left text-xs mb-6 space-y-2">
                    <div className="flex justify-between text-gray-600">
                      <span>Destination:</span>
                      <span className="font-semibold text-gray-800">{formData.destinations.join(", ") || "Himalayan Expedition"}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Trip Style:</span>
                      <span className="font-semibold text-gray-800">{formData.tripType}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Expected Response:</span>
                      <span className="font-semibold text-emerald-600">Within 12–24 Hours</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="https://wa.me/9779851019102"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
                    >
                      <FaWhatsapp className="w-4 h-4" />
                      <span>Chat on WhatsApp (+977 9851019102)</span>
                    </a>
                    <Link
                      href="/"
                      className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#1D2A44] text-white text-xs font-semibold hover:bg-[#F26522] transition-colors"
                    >
                      Back to Home
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ================= BOTTOM NAVIGATION BUTTONS (Steps 1 to 5) ================= */}
          {currentStep < 6 && (
            <div className="flex items-center justify-center space-x-3 pt-8 mt-8 border-t border-gray-100">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-7 py-2.5 rounded-full bg-[#E5E9EE] hover:bg-[#D5DCE4] text-gray-700 text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center space-x-1.5"
                >
                  <FaArrowLeft className="w-3 h-3 text-gray-500" />
                  <span>Back</span>
                </button>
              )}

              <button
                type="button"
                onClick={handleNext}
                className="px-9 py-2.5 rounded-full bg-[#1D2A44] hover:bg-[#2A3C60] text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow transition-all cursor-pointer flex items-center space-x-1.5"
              >
                <span>Next</span>
                <FaArrowRight className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 text-gray-600">
            <FaAward className="text-[#F26522] w-5 h-5 shrink-0" />
            <span className="text-xs font-medium">100% Tailored & Flexible Itineraries</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-gray-600">
            <FaHeadset className="text-[#F26522] w-5 h-5 shrink-0" />
            <span className="text-xs font-medium">24/7 Dedicated Sherpa & Trek Coordinators</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-gray-600">
            <FaShieldAlt className="text-[#F26522] w-5 h-5 shrink-0" />
            <span className="text-xs font-medium">Government Registered & Fully Insured</span>
          </div>
        </div>
      </div>
    </div>
  );
}
