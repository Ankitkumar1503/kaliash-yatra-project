import type { Metadata } from "next";
import Header from "@/component/Header/Header";
import PageBanner from "@/component/PageBanner/PageBanner";
import FeaturedGuide from "@/component/Guide/FeaturedGuide";
import GuideBenefits from "@/component/Guide/GuideBenefits";
import PopularGuides from "@/component/Guide/PopularGuides";
import OurDestinations, {
  DestinationCardItem,
} from "@/component/Destination/OurDestinations";
import TravelTips from "@/component/TravelTips/TravelTips";
import FAQSection from "@/component/FAQSection/FAQSection";
import NewsletterSubscription from "@/component/NewsletterSubscription/NewsletterSubscription";
import Footer from "@/component/Footer/Footer";

export const metadata: Metadata = {
  title: "Travel Guide - Mission Nepal Holiday",
  description:
    "Useful information, expert advice and travel tips to help you plan a smooth and unforgettable journey across Nepal, Bhutan, Tibet and India.",
};

const destinationGuidesList: DestinationCardItem[] = [
  {
    id: "nepal-guide",
    name: "Nepal Guide",
    description: "Travel tips, places and more.",
    image: "/images/gallery/gallery-3.jpg",
    href: "/destination?country=nepal",
  },
  {
    id: "bhutan-guide",
    name: "Bhutan Guide",
    description: "Plan your journey to the Land of Happiness.",
    image: "/images/gallery/gallery-4.jpg",
    href: "/destination?country=bhutan",
  },
  {
    id: "tibet-guide",
    name: "Tibet Guide",
    description: "High-altitude travel information.",
    image: "/images/concept/concept-bottom-right.jpg",
    href: "/destination?country=tibet",
  },
  {
    id: "india-guide",
    name: "India Guide",
    description: "Explore culture, heritage and sacred sites.",
    image: "/images/tours/tour-4.jpg",
    href: "/destination?country=india",
  },
  {
    id: "international-guide",
    name: "International Guide",
    description: "Discover destinations beyond the Himalayas.",
    image: "/images/tours/tour-5.jpg",
    href: "/destination",
  },
];

export default function GuidePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      {/* 1. Shared Header */}
      <Header />

      <main className="flex-grow w-full">
        {/* 2. Reusable Secondary Page Banner */}
        <PageBanner
          backgroundImage="/images/destinations/mount-kailash.jpg"
          breadcrumbs={[
            { label: "HOME", href: "/" },
            { label: "TRAVEL GUIDE" },
          ]}
          title="YOUR JOURNEY STARTS WITH KNOWLEDGE"
          description="Useful information, expert advice and travel tips to help you plan a smooth and unforgettable journey across Nepal, Bhutan, Tibet and India."
        />

        {/* 3. Featured Guide / Main Guide Introduction */}
        <FeaturedGuide
          eyebrow="NEPAL TRAVEL GUIDE"
          titleLine1="A Complete Guide to"
          titleLine2="Travelling in Nepal"
          description="Everything you need to know before you go — from the best time to visit and entry requirements to local culture, food, transportation and practical travel tips."
          ctaText="Read Full Guide"
          ctaHref="/guide/nepal"
          image="/images/destinations/mount-kailash.jpg"
        />

        {/* 4. Guide Feature Benefits (4 Pill Cards) */}
        <GuideBenefits />

        {/* 5. Popular Guides (5 Cards Row) */}
        <PopularGuides
          title="Popular Guides"
          viewAllText="View All Articles"
          viewAllHref="/guide"
        />

        {/* 6. Destination Guides (Reused Destination Component) */}
        <OurDestinations
          eyebrow="DESTINATION"
          title="Destination Guides"
          items={destinationGuidesList}
          rightLinkVariant="button"
          rightLinkText="View All Destinations"
          rightLinkHref="/destination"
          className="!py-8 sm:!py-10 lg:!py-12"
        />

        {/* 7. Travel Tips (Reused Travel Tips Component) */}
        <TravelTips
          eyebrow="Modern & Beautiful"
          title="STAY UPDATE WITH GOTRAVEL TIPS"
          className="!py-8 sm:!py-10 lg:!py-12"
        />

        {/* 8. FAQ (Reused Accordion FAQ Component) */}
        <FAQSection />

        {/* 9. Newsletter Subscription (Reused Newsletter Component) */}
        <NewsletterSubscription />
      </main>

      {/* 10. Shared Footer */}
      <Footer />
    </div>
  );
}
