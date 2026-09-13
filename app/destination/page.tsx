import type { Metadata } from "next";
import Header from "@/component/Header/Header";
import Banner from "@/component/Banner/Banner";
import BestTour from "@/component/BestTour/BestTour";
import DestinationOverview from "@/component/Destination/DestinationOverview";
import FeaturedDestinationTours from "@/component/Destination/FeaturedDestinationTours";
import DestinationPhotoGallery from "@/component/Destination/DestinationPhotoGallery";
import DestinationSellingPoints from "@/component/Destination/DestinationSellingPoints";
import DestinationCTA from "@/component/Destination/DestinationCTA";
import Footer from "@/component/Footer/Footer";

export const metadata: Metadata = {
  title: "Zermatt & Matterhorn Destination - Mission Nepal Holiday",
  description:
    "Explore Zermatt, the iconic Matterhorn, alpine glacier tours, luxury chalets, and mountaineering holidays in Switzerland.",
};

export default function DestinationPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <Header />
      <main className="flex-grow w-full">
        {/* Hero Banner */}
        <Banner />

        {/* Top Best Seller Tours Carousel */}
        <BestTour />

        {/* Why Choose Zermatt & The Matterhorn */}
        <DestinationOverview />

        {/* Featured Zermatt Tours */}
        <FeaturedDestinationTours />

        {/* Destination Photo Gallery */}
        <DestinationPhotoGallery />

        {/* Selling Points & Popular Hotels */}
        <DestinationSellingPoints />

        {/* Ready for Adventure CTA & Newsletter */}
        <DestinationCTA />
      </main>
      <Footer />
    </div>
  );
}
