import type { Metadata } from "next";
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
import { regionsData } from "@/data/regions";

type Props = {
  params: Promise<{ slug: string }> | { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams?.slug || "everest";
  const region = regionsData[slug] || regionsData["everest"];

  return {
    title: `${region.title} - Mission Nepal Holiday`,
    description: region.tagline,
  };
}

export default async function DynamicRegionPage({ params }: Props) {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams?.slug || "everest";
  const region = regionsData[slug] || regionsData["everest"];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      {/* 1. Shared Header */}
      <Header />

      <main className="flex-grow w-full">
        {/* 2. Reusable PageBanner */}
        <PageBanner
          backgroundImage={region.heroImage}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Region", href: "/destination" },
            { label: region.title },
          ]}
          title={region.title}
          description={region.tagline}
        />

        {/* 3. About the Region (40/60 Split Layout) */}
        <AboutRegion
          heading={region.aboutTitle}
          paragraphs={region.aboutParagraphs}
          image={region.heroImage}
          ctaHref={`/trip/${region.featuredTrips[0] || "everest-base-camp-trek"}`}
        />

        {/* 4. Region Stats Strip (4-column gray stats) */}
        <RegionStats />

        {/* 5. Popular Places in Region */}
        <OurDestinations
          eyebrow="DESTINATIONS"
          title={`Popular Places in ${region.title.replace(" REGION", "")}`}
          items={region.popularPlaces}
          className="!py-8 sm:!py-10 lg:!py-12"
        />

        {/* 6. Featured Tours in this Region */}
        <AdventuresSection
          eyebrow={`POPULAR TREKS IN ${region.title}`}
          title="Featured Tours"
          titleFont="playfair"
          headerLayout="split"
          viewAllHref="/destination"
          rightLinkVariant="button"
          rightLinkText="View all Tours"
          className="!py-8 sm:!py-10 lg:!py-12"
        />

        {/* 7. Region At A Glance (5 Key Highlights) */}
        <RegionAtAGlance />

        {/* 8. Unforgettable Experiences */}
        <UnforgettableExperiences experiences={region.experiences} />

        {/* 9. Newsletter Subscription */}
        <NewsletterSubscription />
      </main>

      {/* 10. Shared Footer */}
      <Footer />
    </div>
  );
}
