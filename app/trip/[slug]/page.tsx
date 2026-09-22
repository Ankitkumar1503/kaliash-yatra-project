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
import { tripsData } from "@/data/trips";

type Props = {
  params: Promise<{ slug: string }> | { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams?.slug || "";
  const trip = tripsData[slug] || tripsData["everest-base-camp-trek"];

  return {
    title: `${trip.title} - Mission Nepal Holiday`,
    description: trip.overview[0] || "Explore the Himalayas with Mission Nepal Holiday.",
  };
}

const tripTestimonials: Testimonial[] = [
  {
    id: "1",
    avatar: "/images/testimonials/avatar-1.jpg",
    name: "Sunil Mittal",
    location: "Trekker from India",
    quote:
      "The trek was flawlessly organized by Mission Nepal Holidays. Our guide was incredibly knowledgeable, attentive, and made our journey seamless and deeply memorable.",
    rating: 5,
  },
  {
    id: "2",
    avatar: "/images/testimonials/avatar-2.jpg",
    name: "David Miller",
    location: "Trekker from United Kingdom",
    quote:
      "A lifelong dream accomplished! The team took outstanding care of acclimatization, lodging, and safety every single day. Truly an unforgettable adventure!",
    rating: 5,
  },
  {
    id: "3",
    avatar: "/images/testimonials/avatar-3.jpg",
    name: "Elena Rostova",
    location: "Trekker from Germany",
    quote:
      "From the mountain flights to golden sunrises over high alpine ridges, everything exceeded my expectations. Outstanding communication and hospitality.",
    rating: 5,
  },
];

export default async function DynamicTripPage({ params }: Props) {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams?.slug || "";
  const trip = tripsData[slug] || tripsData["everest-base-camp-trek"];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      {/* 1. Shared Header */}
      <Header />

      <main className="flex-grow w-full">
        {/* 2. Reusable PageBanner */}
        <PageBanner
          backgroundImage={trip.heroImage}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: trip.country, href: `/destination?country=${trip.country.toLowerCase()}` },
            { label: trip.title },
          ]}
          title={trip.title.toUpperCase()}
          description={trip.overview[0]}
        />

        {/* 3. Trip Hero / Booking Summary (60/40 Split) */}
        <TripHeroBooking
          image={trip.heroImage}
          price={trip.price.replace("$", "")}
          currency="USD"
          priceSuffix="Per Person"
          duration={trip.duration}
          difficulty={`${trip.difficulty} Difficulty`}
          region={trip.region}
          maxAltitude={trip.maxAltitude}
          checkAvailabilityHref="#itinerary"
          downloadItineraryHref="#inclusions"
          planTripHref="/reviews"
        />

        {/* 4. Trip Navigation Tabs */}
        <TripNavTabs />

        {/* 5, 6, 7. About the Trip, Experience Highlights & Trip Highlights */}
        <TripAboutAndHighlights
          paragraphs={trip.overview}
          highlights={trip.highlights}
        />

        {/* 8. Day-by-Day Itinerary Accordion & Timeline */}
        <TripItinerary days={trip.itinerary} />

        {/* 9. Inclusions & Exclusions */}
        <TripInclusionsExclusions
          inclusions={trip.inclusions}
          exclusions={trip.exclusions}
        />

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
          eyebrow={`POPULAR IN ${trip.region.toUpperCase()}`}
          title="Featured Tours"
          titleFont="playfair"
          headerLayout="split"
          viewAllHref="/destination"
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
