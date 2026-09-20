import type { Metadata } from "next";
import Header from "@/component/Header/Header";
import PageBanner from "@/component/PageBanner/PageBanner";
import AboutRegion from "@/component/Region/AboutRegion";
import RegionStats from "@/component/Region/RegionStats";
import OurDestinations, {
  DestinationCardItem,
} from "@/component/Destination/OurDestinations";
import AdventuresSection from "@/component/AdventuresSection/AdventuresSection";
import RegionAtAGlance from "@/component/Region/RegionAtAGlance";
import UnforgettableExperiences from "@/component/Region/UnforgettableExperiences";
import NewsletterSubscription from "@/component/NewsletterSubscription/NewsletterSubscription";
import Footer from "@/component/Footer/Footer";

export const metadata: Metadata = {
  title: "Everest Region - Mission Nepal Holiday",
  description:
    "Home to the world's highest peak, the Everest region offers breathtaking landscapes, Sherpa culture and once-in-a-lifetime experiences.",
};

const everestPopularPlaces: DestinationCardItem[] = [
  {
    id: "namche-bazaar",
    name: "Namche Bazaar",
    description: "Gateway to Everest",
    image: "/images/gallery/gallery-3.jpg",
    href: "/destination?place=namche-bazaar",
  },
  {
    id: "tengboche",
    name: "Tengboche",
    description: "Famous Monastery",
    image: "/images/gallery/gallery-4.jpg",
    href: "/destination?place=tengboche",
  },
  {
    id: "gokyo-lakes",
    name: "Gokyo Lakes",
    description: "Stunning Glacial Lakes",
    image: "/images/concept/concept-bottom-right.jpg",
    href: "/destination?place=gokyo-lakes",
  },
  {
    id: "kala-patthar",
    name: "Kala Patthar",
    description: "Best Everest Views",
    image: "/images/tours/tour-4.jpg",
    href: "/destination?place=kala-patthar",
  },
  {
    id: "everest-base-camp",
    name: "Everest Base Camp",
    description: "Iconic Trekking Destination",
    image: "/images/tours/tour-5.jpg",
    href: "/destination?place=everest-base-camp",
  },
];

export default function RegionPage() {
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
            { label: "Everest Region" },
          ]}
          title="EVEREST REGION"
          description="Home to the world's highest peak, the Everest region offers breathtaking landscapes, Sherpa culture and once-in-a-lifetime experiences."
        />

        {/* 3. About the Region (The Land of Giants) */}
        <AboutRegion
          eyebrow="ABOUT THE REGION"
          heading="The Land of Giants"
          paragraphs={[
            "The Everest region, also known as the Khumbu region, is one of the world's most iconic mountain destinations. It is home to Mount Everest (8,848.86 m), traditional Sherpa villages, ancient monasteries and spectacular Himalayan landscapes.",
            "Whether you are here for trekking, cultural exploration or simply to witness the world's highest peaks, the Everest region offers an unforgettable journey.",
          ]}
          ctaText="Explore Tours"
          ctaHref="/tours"
          image="/images/destinations/everest.jpg"
          className="!py-8 sm:!py-10 lg:!py-12"
        />

        {/* 4. Region Statistics (8+ Treks, 20+ Destinations, 5,000+ Travellers, 4.8 Rating) */}
        <RegionStats className="!pb-8 sm:!pb-10 lg:!pb-12" />

        {/* 5. Explore Popular Places (Reused Destination Cards with Button Action) */}
        <OurDestinations
          eyebrow="TOP DESTINATIONS IN EVEREST REGION"
          title="Explore Popular Places"
          items={everestPopularPlaces}
          rightLinkVariant="button"
          rightLinkText="View all Tour"
          rightLinkHref="/tours"
          className="!py-8 sm:!py-10 lg:!py-12"
        />

        {/* 6. Featured Tours (Reused Adventure Cards with Button Action) */}
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

        {/* 7. Everest Region at a Glance (5 Fact Items with Light-Gray Background) */}
        <RegionAtAGlance
          eyebrow="AT A GLANCE"
          title="Everest Region at a Glance"
          className="!py-10 sm:!py-12 md:!py-14"
        />

        {/* 8. Unforgettable Experiences (40/60 Split with 2x2 Highlight Grid) */}
        <UnforgettableExperiences
          eyebrow="WHY VISIT EVEREST REGION"
          heading="Unforgettable Experiences"
          image="/images/destinations/everest.jpg"
          className="!py-8 sm:!py-10 lg:!py-12"
        />

        {/* 9. Newsletter Subscription */}
        <NewsletterSubscription />
      </main>

      {/* 10. Shared Footer */}
      <Footer />
    </div>
  );
}
