import type { Metadata } from "next";
import Header from "@/component/Header/Header";
import PageBanner from "@/component/PageBanner/PageBanner";
import GalleryIntro from "@/component/Gallery/GalleryIntro";
import TravelGalleryGrid from "@/component/Gallery/TravelGalleryGrid";
import NewsletterSubscription from "@/component/NewsletterSubscription/NewsletterSubscription";
import Footer from "@/component/Footer/Footer";

export const metadata: Metadata = {
  title: "Travel Gallery - Mission Nepal Holiday",
  description:
    "Explore stunning photos from past tours and expeditions highlighting the beauty, culture and experiences of our holiday journeys across Nepal, Bhutan, Tibet, and India.",
};

export default function GalleryPage() {
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
            { label: "GALLERY" },
          ]}
          title="CAPTURED MOMENTS, LASTING MEMORIES"
          description="Explore the beauty of Nepal, Bhutan, Tibet, India and beyond through our collection of unforgettable travel moments."
        />

        {/* 3. Centered Gallery Introduction */}
        <GalleryIntro />

        {/* 4. Travel Gallery Grid with Lightbox */}
        <TravelGalleryGrid />

        {/* 5. Shared Newsletter Subscription */}
        <NewsletterSubscription />
      </main>

      {/* 6. Shared Footer */}
      <Footer />
    </div>
  );
}
