import type { Metadata } from "next";
import Header from "@/component/Header/Header";
import PageBanner from "@/component/PageBanner/PageBanner";
import DestinationCategoryCards from "@/component/Destination/DestinationCategoryCards";
import FeaturedDestination from "@/component/Destination/FeaturedDestination";
import OurDestinations from "@/component/Destination/OurDestinations";
import TravelExperiences from "@/component/Destination/TravelExperiences";
import TravelTips from "@/component/TravelTips/TravelTips";
import TravelGallery from "@/component/TravelGallery/TravelGallery";
import NewsletterSubscription from "@/component/NewsletterSubscription/NewsletterSubscription";
import Footer from "@/component/Footer/Footer";

export const metadata: Metadata = {
  title: "Explore Our Destinations - Mission Nepal Holiday",
  description:
    "Discover Nepal, Bhutan, Tibet, India and beyond through breathtaking landscapes, rich cultures and unforgettable journeys.",
};

export default function DestinationPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <Header />
      <main className="flex-grow w-full">
        {/* 1. Existing Reusable Inner Page Hero Banner */}
        <PageBanner
          backgroundImage="/images/destinations/everest.jpg"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Destination" },
          ]}
          title="EXPLORE OUR DESTINATIONS"
          description="Discover Nepal, Bhutan, Tibet, India and beyond through breathtaking landscapes, rich cultures and unforgettable journeys."
        />

        {/* 2. Destination Category Mini Cards (Nepal, Bhutan, Tibet, India) */}
        <DestinationCategoryCards />

        {/* 3. Featured Destination — Nepal */}
        <FeaturedDestination />

        {/* 4. Our Destinations (5 Cards with Arrow Navigation) */}
        <OurDestinations />

        {/* 5. Choose Your Travel Experience (5 Activity Icons) */}
        <TravelExperiences />

        {/* 6. Travel Tips / Blog */}
        <TravelTips
          eyebrow="Modern & Beautiful"
          title="STAY UPDATE WITH GOTRAVEL TIPS"
        />

        {/* 7. Travel Gallery */}
        <TravelGallery />

        {/* 8. Newsletter Subscription */}
        <NewsletterSubscription />
      </main>
      <Footer />
    </div>
  );
}
