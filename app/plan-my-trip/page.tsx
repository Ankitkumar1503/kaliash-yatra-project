import type { Metadata } from "next";
import Header from "@/component/Header/Header";
import PageBanner from "@/component/PageBanner/PageBanner";
import PlanMyTripWizard from "@/component/PlanMyTrip/PlanMyTripWizard";
import NewsletterSubscription from "@/component/NewsletterSubscription/NewsletterSubscription";
import Footer from "@/component/Footer/Footer";
import { getTrips } from "@/lib/api/trips";
import type { UiTrip } from "@/lib/api/trips";

export const metadata: Metadata = {
  title: "Plan My Trip - Custom Himalayan Itinerary | Mission Nepal Holidays",
  description:
    "Design and personalize your dream Himalayan pilgrimage, trekking adventure, or cultural tour to Kailash Mansarovar, Nepal, Tibet, Bhutan, and India.",
};

export default async function PlanMyTripPage() {
  let trips: UiTrip[] = [];
  try {
    const res = await getTrips({ limit: 100 });
    trips = res.items || [];
  } catch {
    // If backend trips endpoint fails, the wizard automatically uses its built-in catalog
    trips = [];
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <Header />
      <main className="flex-grow w-full">
        <PageBanner
          backgroundImage="/images/destinations/everest.jpg"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Plan My Trip" },
          ]}
          title="Plan My Trip"
          description="Tailor-make your holy pilgrimage or adventure across the Himalayas with our certified travel specialists."
        />
        <PlanMyTripWizard initialTrips={trips} />
        <NewsletterSubscription />
      </main>
      <Footer />
    </div>
  );
}
