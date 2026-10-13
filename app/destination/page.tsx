import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
import { ApiRequestError } from "@/lib/api/client";
import { getDestination, getDestinationCards, getDestinationListCards, getDestinations } from "@/lib/api/destinations";
import { getBlogPosts } from "@/lib/api/blogs";
import type { BlogPost } from "@/component/TravelTips/TravelTips";

export const metadata: Metadata = {
  title: "Explore Our Destinations - Mission Nepal Holiday",
  description: "Discover Nepal, Bhutan, Tibet, India and beyond through breathtaking landscapes, rich cultures and unforgettable journeys.",
};

export default async function DestinationPage({ searchParams }: { searchParams?: Promise<{ country?: string }> }) {
  const resolvedParams = searchParams ? await searchParams : {};
  const countryParam = resolvedParams?.country?.toLowerCase() || "nepal";
  const country = countryParam ? countryParam[0].toUpperCase() + countryParam.slice(1) : "";
  let currentDest;
  let categoryCards;
  let destinationCards;
  let loadError: unknown;
  let travelPosts: BlogPost[] = [];
  let blogError: string | undefined;
  try {
    const [selected, countryList, categories, destinations] = await Promise.all([
      getDestination(countryParam),
      getDestinations({ country, limit: 100 }),
      getDestinationCards(),
      getDestinationListCards(),
    ]);
    currentDest = selected ?? countryList.items.find((item) => item.slug === countryParam) ?? null;
    categoryCards = categories;
    destinationCards = destinations;
  } catch (error) {
    loadError = error;
  }
  if (!loadError && !currentDest) notFound();
  try { travelPosts = (await getBlogPosts(4)).items; } catch (error) { blogError = error instanceof ApiRequestError ? error.message : "Unable to load travel articles right now."; }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <Header />
      <main className="flex-grow w-full">
        {loadError || !currentDest ? (
          <section className="site-container py-16 text-center text-gray-600" role="alert">
            {loadError instanceof ApiRequestError ? loadError.message : "Unable to load destination content right now."}
          </section>
        ) : (
          <>
            <PageBanner backgroundImage={currentDest.heroImage} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Destination", href: "/destination" }, { label: currentDest.name.toUpperCase() }]} title={`EXPLORE ${currentDest.name.toUpperCase()}`} description={currentDest.tagline} />
            <DestinationCategoryCards items={categoryCards ?? []} />
            <FeaturedDestination countryName={currentDest.name.toUpperCase()} headlineLine1="Where mountains" headlineLine2="meet meaning." description1={currentDest.shortDescription} description2={currentDest.description} buttonText={`Explore ${currentDest.name} Tours`} buttonHref={`/destination?country=${currentDest.slug}`} image={currentDest.heroImage} stats={[{ value: `${currentDest.tripsCount}+`, label: "Tours" }, { value: `${currentDest.regions.length}+`, label: "Regions" }, { value: "1000+", label: "Happy Travellers" }]} />
            <OurDestinations items={destinationCards ?? []} />
            <TravelExperiences />
            <TravelTips eyebrow="Modern & Beautiful" title="STAY UPDATE WITH GOTRAVEL TIPS" posts={travelPosts} loadError={blogError} showSearchFilter={true} />
            <TravelGallery />
            <NewsletterSubscription />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}