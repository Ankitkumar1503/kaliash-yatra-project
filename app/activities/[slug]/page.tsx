import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/component/Header/Header";
import PageBanner from "@/component/PageBanner/PageBanner";
import FeaturedActivity from "@/component/Activities/FeaturedActivity";
import BestTour, { type Tour } from "@/component/BestTour/BestTour";
import NewsletterSubscription from "@/component/NewsletterSubscription/NewsletterSubscription";
import Footer from "@/component/Footer/Footer";
import { ApiRequestError } from "@/lib/api/client";
import { getActivity } from "@/lib/api/activities";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const activity = await getActivity(slug);
    if (!activity) notFound();
    return { title: `${activity.title} - Mission Nepal Holiday`, description: activity.shortDescription };
  } catch (error) {
    if (error instanceof Error && "status" in error && error.status === 404) notFound();
    return { title: `${slug} - Mission Nepal Holiday`, description: "Explore travel activities with Mission Nepal Holiday." };
  }
}

export default async function ActivityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let activity;
  let loadError: unknown;
  try { activity = await getActivity(slug); } catch (error) { loadError = error; }
  if (!loadError && !activity) notFound();

  const featuredTours: Tour[] = (activity?.featuredTripDetails ?? []).map((trip) => ({
    id: trip.id,
    slug: trip.slug,
    image: trip.heroImage,
    badge: trip.badge,
    title: trip.title,
    location: trip.region || trip.displayArea || trip.country,
    rating: trip.rating,
    reviewCount: trip.reviewCount,
    price: trip.price,
  }));

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <Header />
      <main className="flex-grow w-full">
        {loadError || !activity ? (
          <section className="site-container py-16 text-center text-gray-600" role="alert">
            {loadError instanceof ApiRequestError ? loadError.message : "Unable to load activity content right now."}
          </section>
        ) : <>
          <PageBanner
            backgroundImage={activity.heroImage || "/images/destinations/everest.jpg"}
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "Activities", href: "/activities" }, { label: activity.title }]}
            title={activity.title}
          />
          <FeaturedActivity
            eyebrow="TRAVEL ACTIVITY"
            heading={activity.title}
            description={activity.description || activity.shortDescription}
            image={activity.heroImage || "/images/destinations/everest.jpg"}
            ctaText="Back to activities"
            ctaHref="/activities"
          />
          {featuredTours.length > 0 && <BestTour tours={featuredTours} title="Featured Trips" />}
          <NewsletterSubscription />
        </>}
      </main>
      <Footer />
    </div>
  );
}