import type { Metadata } from "next";
import Header from "@/component/Header/Header";
import PageBanner from "@/component/PageBanner/PageBanner";
import PopularActivities from "@/component/Activities/PopularActivities";
import FeaturedActivity from "@/component/Activities/FeaturedActivity";
import AdventuresSection from "@/component/AdventuresSection/AdventuresSection";
import OurDestinations from "@/component/Destination/OurDestinations";
import TravelTips from "@/component/TravelTips/TravelTips";
import NewsletterSubscription from "@/component/NewsletterSubscription/NewsletterSubscription";
import Footer from "@/component/Footer/Footer";
import { ApiRequestError } from "@/lib/api/client";
import { getActivities } from "@/lib/api/activities";
import { getBlogPosts } from "@/lib/api/blogs";
import type { BlogPost } from "@/component/TravelTips/TravelTips";

export const metadata: Metadata = {
  title: "Explore Our Travel Activities - Mission Nepal Holiday",
  description: "From thrilling treks to enriching cultural journeys, find the perfect experience that matches your travel style in Nepal, Bhutan, Tibet, India and beyond.",
};

export default async function ActivitiesPage() {
  let activities = [] as Awaited<ReturnType<typeof getActivities>>["items"];
  let loadError: unknown;
  let travelPosts: BlogPost[] = [];
  let blogError: string | undefined;
  try { activities = (await getActivities({ limit: 100 })).items; } catch (error) { loadError = error; }
  try { travelPosts = (await getBlogPosts(4)).items; } catch (error) { blogError = error instanceof ApiRequestError ? error.message : "Unable to load travel articles right now."; }
  const featured = activities.find((activity) => activity.slug === "trekking");
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <Header />
      <main className="flex-grow w-full">
        <PageBanner backgroundImage={featured?.heroImage || "/images/destinations/everest.jpg"} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Activities" }]} title="EXPLORE OUR TRAVEL ACTIVITIES" description="From thrilling treks to enriching cultural journeys, find the perfect experience that matches your travel style in Nepal, Bhutan, Tibet, India and beyond." />
        {loadError ? <section className="site-container py-16 text-center text-gray-600" role="alert">{loadError instanceof ApiRequestError ? loadError.message : "Unable to load activities right now."}</section> : <>
          <PopularActivities activities={activities} />
          {featured ? <FeaturedActivity heading={featured.title} description={featured.shortDescription} image={featured.heroImage} ctaHref="/tours" /> : <p className="site-container py-8 text-gray-600">No featured activity is available right now.</p>}
          <AdventuresSection eyebrow="TOP ACTIVITIES" title="Handpicked Experiences" titleFont="playfair" headerLayout="split" viewAllHref="/tours" showCircularArrow={true} className="!py-8 sm:!py-10 lg:!py-12" />
          <OurDestinations eyebrow="MODERN & BEAUTIFUL" title="Popular Regions in Nepal" className="!py-8 sm:!py-10 lg:!py-12" />
          <TravelTips eyebrow="Modern & Beautiful" title="STAY UPDATE WITH GOTRAVEL TIPS" posts={travelPosts} loadError={blogError} className="!py-8 sm:!py-10 lg:!py-12" />
          <NewsletterSubscription />
        </>}
      </main>
      <Footer />
    </div>
  );
}