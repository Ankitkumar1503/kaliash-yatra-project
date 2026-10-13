import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/component/Header/Header";
import PageBanner from "@/component/PageBanner/PageBanner";
import AboutRegion from "@/component/Region/AboutRegion";
import RegionStats from "@/component/Region/RegionStats";
import OurDestinations from "@/component/Destination/OurDestinations";
import AdventuresSection from "@/component/AdventuresSection/AdventuresSection";
import RegionAtAGlance from "@/component/Region/RegionAtAGlance";
import UnforgettableExperiences from "@/component/Region/UnforgettableExperiences";
import NewsletterSubscription from "@/component/NewsletterSubscription/NewsletterSubscription";
import Footer from "@/component/Footer/Footer";
import { ApiRequestError } from "@/lib/api/client";
import { getRegion } from "@/lib/api/regions";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try { const region = await getRegion(slug); if (!region) notFound(); return { title: `${region.title} - Mission Nepal Holiday`, description: region.tagline }; }
  catch (error) { if (error instanceof Error && "status" in error && error.status === 404) notFound(); return { title: `${slug} - Mission Nepal Holiday`, description: "Explore this region with Mission Nepal Holiday." }; }
}

export default async function DynamicRegionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let region; let loadError: unknown;
  try { region = await getRegion(slug); } catch (error) { loadError = error; }
  if (!loadError && !region) notFound();
  const featuredTrip = region?.featuredTrips[0];
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <Header />
      <main className="flex-grow w-full">
        {loadError || !region ? <section className="site-container py-16 text-center text-gray-600" role="alert">{loadError instanceof ApiRequestError ? loadError.message : "Unable to load region content right now."}</section> : <>
          <PageBanner backgroundImage={region.heroImage} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Region", href: "/region" }, { label: region.title }]} title={region.title} description={region.tagline} />
          <AboutRegion heading={region.aboutTitle} paragraphs={region.aboutParagraphs} image={region.heroImage} ctaHref={featuredTrip ? `/trip/${featuredTrip}` : "/trip"} />
          <RegionStats />
          <OurDestinations eyebrow="DESTINATIONS" title={`Popular Places in ${region.title.replace(" REGION", "")}`} items={region.popularPlaces.map((place) => ({ id: place.id, name: place.name, description: place.description, image: place.image, href: place.href }))} className="!py-8 sm:!py-10 lg:!py-12" />
          <AdventuresSection eyebrow={`POPULAR TREKS IN ${region.title}`} title="Featured Tours" titleFont="playfair" headerLayout="split" viewAllHref="/trip" rightLinkVariant="button" rightLinkText="View all Tours" className="!py-8 sm:!py-10 lg:!py-12" />
          <RegionAtAGlance />
          <UnforgettableExperiences experiences={region.experiences} image={region.heroImage} />
          <NewsletterSubscription />
        </>}
      </main>
      <Footer />
    </div>
  );
}