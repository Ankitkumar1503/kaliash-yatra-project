import type { Metadata } from "next";
import Header from "@/component/Header/Header";
import PageBanner from "@/component/PageBanner/PageBanner";
import PopularActivities from "@/component/Activities/PopularActivities";
import FeaturedActivity from "@/component/Activities/FeaturedActivity";
import AdventuresSection from "@/component/AdventuresSection/AdventuresSection";
import OurDestinations from "@/component/Destination/OurDestinations";
import TravelTips from "@/component/TravelTips/TravelTips";
import NewsletterSubscription from "@/component/NewsletterSubscription/NewsletterSubscription";
import Footer from "@/component/Footer/Footer";

export const metadata: Metadata = {
  title: "Explore Our Travel Activities - Mission Nepal Holiday",
  description:
    "From thrilling treks to enriching cultural journeys, find the perfect experience that matches your travel style in Nepal, Bhutan, Tibet, India and beyond.",
};

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      {/* 1. Shared Header */}
      <Header />

      <main className="flex-grow w-full">
        {/* 2. Reusable Inner Page Banner */}
        <PageBanner
          backgroundImage="/images/destinations/everest.jpg"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Activities" },
          ]}
          title="EXPLORE OUR TRAVEL ACTIVITIES"
          description="From thrilling treks to enriching cultural journeys, find the perfect experience that matches your travel style in Nepal, Bhutan, Tibet, India and beyond."
        />

        {/* 3. Popular Activities (5 activity cards with overlapping circular orange icons) */}
        <PopularActivities />

        {/* 4. Featured Activity — Trekking in Nepal (40/60 Split Layout, Shorter Height) */}
        <FeaturedActivity />

        {/* 5. Handpicked Experiences (Reused Tour Cards with Circular Arrow Action) */}
        <AdventuresSection
          eyebrow="TOP ACTIVITIES"
          title="Handpicked Experiences"
          titleFont="playfair"
          headerLayout="split"
          viewAllHref="/tours"
          showCircularArrow={true}
          className="!py-8 sm:!py-10 lg:!py-12"
        />

        {/* 6. Popular Regions in Nepal (5 Reused Destination Cards) */}
        <OurDestinations
          eyebrow="MODERN & BEAUTIFUL"
          title="Popular Regions in Nepal"
          className="!py-8 sm:!py-10 lg:!py-12"
        />

        {/* 7. Travel Tips / Blog Section */}
        <TravelTips
          eyebrow="Modern & Beautiful"
          title="STAY UPDATE WITH GOTRAVEL TIPS"
          className="!py-8 sm:!py-10 lg:!py-12"
        />

        {/* 8. Newsletter Subscription */}
        <NewsletterSubscription />
      </main>

      {/* 9. Shared Footer */}
      <Footer />
    </div>
  );
}
