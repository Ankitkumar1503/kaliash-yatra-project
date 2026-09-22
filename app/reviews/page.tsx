import type { Metadata } from "next";
import Header from "@/component/Header/Header";
import PageBanner from "@/component/PageBanner/PageBanner";
import ReviewsSection from "@/component/Reviews/ReviewsSection";
import NewsletterSubscription from "@/component/NewsletterSubscription/NewsletterSubscription";
import Footer from "@/component/Footer/Footer";

export const metadata: Metadata = {
  title: "Traveler Reviews - Mission Nepal Holiday",
  description:
    "Read real experiences and stories from travelers who explored Nepal, Bhutan, Tibet, India and the Himalayas with Mission Nepal Holiday.",
};

export default function ReviewsPage() {
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
            { label: "REVIEWS" },
          ]}
          title="STORIES FROM JOURNEYS THAT MATTER"
          description="Read real experiences from travelers who explored Nepal, Bhutan, Tibet, India and the Himalayas with Mission Nepal Holiday."
        />

        {/* 3. Main Reviews + Write a Review Section */}
        <ReviewsSection />

        {/* 4. Shared Newsletter Subscription */}
        <NewsletterSubscription />
      </main>

      {/* 5. Shared Footer */}
      <Footer />
    </div>
  );
}
