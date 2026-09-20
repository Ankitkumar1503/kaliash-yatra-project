import type { Metadata } from "next";
import Header from "@/component/Header/Header";
import PageBanner from "@/component/PageBanner/PageBanner";
import TripHeroBooking from "@/component/Trip/TripHeroBooking";
import TripNavTabs from "@/component/Trip/TripNavTabs";
import TripAboutAndHighlights from "@/component/Trip/TripAboutAndHighlights";
import TripItinerary from "@/component/Trip/TripItinerary";
import TripInclusionsExclusions from "@/component/Trip/TripInclusionsExclusions";
import Testimonials, { Testimonial } from "@/component/Testimonials/Testimonials";
import AdventuresSection from "@/component/AdventuresSection/AdventuresSection";
import TravelGallery from "@/component/TravelGallery/TravelGallery";
import NewsletterSubscription from "@/component/NewsletterSubscription/NewsletterSubscription";
import Footer from "@/component/Footer/Footer";

export const metadata: Metadata = {
  title: "Everest Base Camp Trek - Mission Nepal Holiday",
  description:
    "Journey to the foot of the world's highest mountain and experience stunning landscapes, Sherpa culture and a once-in-a-lifetime adventure.",
};

const tripTestimonials: Testimonial[] = [
  {
    id: "1",
    avatar: "/images/testimonials/avatar-1.jpg",
    name: "Sunil Mittal",
    location: "Trekker from India",
    quote:
      "The trek was flawlessly organized by Mission Nepal Holidays. Our guide was incredibly knowledgeable, attentive, and made our journey to Everest Base Camp seamless and deeply memorable.",
    rating: 5,
  },
  {
    id: "2",
    avatar: "/images/testimonials/avatar-2.jpg",
    name: "David Miller",
    location: "Trekker from United Kingdom",
    quote:
      "Reaching Everest Base Camp was a lifelong dream. The team took outstanding care of acclimatization, lodging, and safety every single day. Truly an unforgettable adventure!",
    rating: 5,
  },
  {
    id: "3",
    avatar: "/images/testimonials/avatar-3.jpg",
    name: "Elena Rostova",
    location: "Trekker from Germany",
    quote:
      "From the flight into Lukla to watching sunrise over Kala Patthar, everything exceeded my expectations. Outstanding communication and genuine Sherpa hospitality throughout.",
    rating: 5,
  },
  {
    id: "4",
    avatar: "/images/testimonials/avatar-1.jpg",
    name: "Marcus Chen",
    location: "Trekker from Australia",
    quote:
      "Super professional crew, wonderful lodge recommendations, and top-tier mountain guiding. If you are planning an Everest trek, Mission Nepal Holidays is simply the best.",
    rating: 5,
  },
];

export default function TripDetailsPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      {/* 1. Shared Header */}
      <Header />

      <main className="flex-grow w-full">
        {/* 2. Reusable PageBanner */}
        <PageBanner
          backgroundImage="/images/destinations/everest.jpg"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Nepal", href: "/destination?country=nepal" },
            { label: "Trip Details" },
          ]}
          title="EVEREST BASE CAMP TREK"
          description="Journey to the foot of the world's highest mountain and experience stunning landscapes, Sherpa culture and a once-in-a-lifetime adventure."
        />

        {/* 3. Trip Hero / Booking Summary (60/40 Split) */}
        <TripHeroBooking
          image="/images/destinations/everest.jpg"
          price="1,350"
          currency="USD"
          priceSuffix="Per Person"
          duration="9 Days"
          difficulty="Moderate Difficulty"
          region="Everest Region"
          maxAltitude="5,545 m"
          checkAvailabilityHref="#itinerary"
          downloadItineraryHref="#"
          planTripHref="/contact"
        />

        {/* 4. Trip Navigation Tabs (Pill style with smooth scrolling) */}
        <TripNavTabs />

        {/* 5, 6, 7. About the Trip, Experience Highlights & Trip Highlights */}
        <TripAboutAndHighlights />

        {/* 8. Day-by-Day Itinerary Accordion & Timeline */}
        <TripItinerary />

        {/* 9. Inclusions & Exclusions */}
        <TripInclusionsExclusions />

        {/* 10. Traveler Testimonials */}
        <div id="reviews">
          <Testimonials
            eyebrow="TRAVELERS LOVE US"
            title="WHAT OUR TRAVELERS SAY"
            testimonials={tripTestimonials}
            className="!py-8 sm:!py-10 lg:!py-12"
          />
        </div>

        {/* 11. Related / Featured Tours */}
        <AdventuresSection
          eyebrow="POPULAR TREKS IN EVEREST REGION"
          title="Featured Tours"
          titleFont="playfair"
          headerLayout="split"
          viewAllHref="/tours"
          rightLinkVariant="button"
          rightLinkText="View all Tour"
          className="!py-8 sm:!py-10 lg:!py-12"
        />

        {/* 12. Travel Gallery */}
        <TravelGallery />

        {/* 13. Newsletter Subscription */}
        <NewsletterSubscription />
      </main>

      {/* 14. Shared Footer */}
      <Footer />
    </div>
  );
}
