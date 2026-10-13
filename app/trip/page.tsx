import type { Metadata } from "next";
import Header from "@/component/Header/Header";
import PageBanner from "@/component/PageBanner/PageBanner";
import BestTour, { type Tour } from "@/component/BestTour/BestTour";
import NewsletterSubscription from "@/component/NewsletterSubscription/NewsletterSubscription";
import Footer from "@/component/Footer/Footer";
import { ApiRequestError } from "@/lib/api/client";
import { getTrips } from "@/lib/api/trips";

export const metadata: Metadata = {
  title: "Our Trips - Mission Nepal Holiday",
  description: "Explore available journeys across Nepal, Bhutan, Tibet and India.",
};

export default async function TripsPage() {
  let tours: Tour[] = [];
  let loadError: string | undefined;
  try {
    const trips = (await getTrips({ limit: 100 })).items;
    tours = trips.map((trip) => ({
      id: trip.slug,
      slug: trip.slug,
      image: trip.heroImage,
      badge: trip.badge,
      title: trip.title,
      location: [trip.region, trip.country].filter(Boolean).join(", "),
      rating: trip.rating,
      reviewCount: trip.reviewCount,
      price: trip.price,
    }));
  } catch (error) {
    loadError = error instanceof ApiRequestError ? error.message : "Unable to load trips right now.";
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <Header />
      <main className="flex-grow w-full">
        <PageBanner
          backgroundImage="/images/destinations/everest.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Trips" }]}
          title="EXPLORE OUR TRIPS"
          description="Extraordinary journeys across Nepal, Bhutan, Tibet & India. Discover the best experiences, local culture and unforgettable Himalayan adventures."
        />
        <BestTour tours={tours} loadError={loadError} />
        <NewsletterSubscription />
      </main>
      <Footer />
    </div>
  );
}
