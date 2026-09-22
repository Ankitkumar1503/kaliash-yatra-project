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
import { destinationsData } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Explore Our Destinations - Mission Nepal Holiday",
  description:
    "Discover Nepal, Bhutan, Tibet, India and beyond through breathtaking landscapes, rich cultures and unforgettable journeys.",
};

export default async function DestinationPage({
  searchParams,
}: {
  searchParams?: Promise<{ country?: string }>;
}) {
  const resolvedParams = searchParams ? await Promise.resolve(searchParams) : {};
  const countryParam = resolvedParams?.country?.toLowerCase() || "nepal";
  const currentDest =
    destinationsData.find((d) => d.slug === countryParam) || destinationsData[0];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <Header />
      <main className="flex-grow w-full">
        {/* 1. Existing Reusable Inner Page Hero Banner */}
        <PageBanner
          backgroundImage={currentDest.heroImage}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Destination", href: "/destination" },
            { label: currentDest.name.toUpperCase() },
          ]}
          title={`EXPLORE ${currentDest.name.toUpperCase()}`}
          description={currentDest.tagline}
        />

        {/* 2. Destination Category Mini Cards (Nepal, Bhutan, Tibet, India) */}
        <DestinationCategoryCards />

        {/* 3. Featured Destination — Dynamically matching active country */}
        <FeaturedDestination
          countryName={currentDest.name.toUpperCase()}
          headlineLine1="Where mountains"
          headlineLine2="meet meaning."
          description1={currentDest.shortDescription}
          description2={currentDest.description}
          buttonText={`Explore ${currentDest.name} Tours`}
          buttonHref={`/destination?country=${currentDest.slug}`}
          image={currentDest.heroImage}
          stats={[
            { value: `${currentDest.tripsCount}+`, label: "Tours" },
            { value: `${currentDest.regions.length}+`, label: "Regions" },
            { value: "1000+", label: "Happy Travellers" },
          ]}
        />

        {/* 4. Our Destinations (5 Cards with Arrow Navigation) */}
        <OurDestinations />

        {/* 5. Choose Your Travel Experience (5 Activity Icons) */}
        <TravelExperiences />

        {/* 6. Travel Tips / Blog */}
        <TravelTips
          eyebrow="Modern & Beautiful"
          title="STAY UPDATE WITH GOTRAVEL TIPS"
          showSearchFilter={true}
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
