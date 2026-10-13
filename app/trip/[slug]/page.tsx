import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/component/Header/Header";
import PageBanner from "@/component/PageBanner/PageBanner";
import TripHeroBooking from "@/component/Trip/TripHeroBooking";
import TripNavTabs from "@/component/Trip/TripNavTabs";
import TripAboutAndHighlights from "@/component/Trip/TripAboutAndHighlights";
import TripItinerary from "@/component/Trip/TripItinerary";
import TripElevationProfile from "@/component/Trip/TripElevationProfile";
import TripRouteMap from "@/component/Trip/TripRouteMap";
import TripDepartures from "@/component/Trip/TripDepartures";
import TripVideoSection from "@/component/Trip/TripVideoSection";
import TripInclusionsExclusions from "@/component/Trip/TripInclusionsExclusions";
import Testimonials, {
  type Testimonial,
} from "@/component/Testimonials/Testimonials";
import AdventuresSection from "@/component/AdventuresSection/AdventuresSection";
import FAQSection from "@/component/FAQSection/FAQSection";
import TravelGallery from "@/component/TravelGallery/TravelGallery";
import NewsletterSubscription from "@/component/NewsletterSubscription/NewsletterSubscription";
import Footer from "@/component/Footer/Footer";
import { ApiRequestError } from "@/lib/api/client";
import { getTrip } from "@/lib/api/trips";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const trip = await getTrip(slug);
    console.log("trip:", trip);
    if (!trip) notFound();
    return {
      title: `${trip.title} - Mission Nepal Holiday`,
      description:
        trip.overview[0] || "Explore the Himalayas with Mission Nepal Holiday.",
    };
  } catch (error) {
    if (error instanceof Error && "status" in error && error.status === 404)
      notFound();
    return {
      title: `${slug} - Mission Nepal Holiday`,
      description: "Explore journeys with Mission Nepal Holiday.",
    };
  }
}

export default async function DynamicTripPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let trip;
  let loadError: unknown;
  try {
    trip = await getTrip(slug);
  } catch (error) {
    loadError = error;
  }
  if (!loadError && !trip) notFound();
  const testimonials: Testimonial[] = (trip?.reviews ?? []).map((review) => ({
    ...review,
  }));
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <Header />
      <main className="flex-grow w-full">
        {loadError || !trip ? (
          <section
            className="site-container py-16 text-center text-gray-600"
            role="alert"
          >
            {loadError instanceof ApiRequestError
              ? loadError.message
              : "Unable to load trip content right now."}
          </section>
        ) : (
          <>
            <PageBanner
              backgroundImage={
                trip.heroImage || "/images/destinations/everest.jpg"
              }
              breadcrumbs={[
                { label: "Home", href: "/" },
                {
                  label: trip.country,
                  href: `/destination?country=${trip.country.toLowerCase()}`,
                },
                { label: trip.title },
              ]}
              title={trip.title.toUpperCase()}
              description={trip.overview[0] ?? trip.title}
            />
            <TripHeroBooking
              imageAlt={trip.title}
              image={trip.heroImage || "/images/destinations/everest.jpg"}
              gallery={trip.gallery}
              price={trip.price.replace("$", "")}
              originalPrice={
                trip.originalPrice
                  ? trip.originalPrice.replace("$", "")
                  : undefined
              }
              groupPricing={trip.groupPricing}
              currency={trip.currencyCode}
              priceSuffix="Per Person"
              duration={trip.duration}
              difficulty={`${trip.difficulty} Difficulty`}
              region={trip.region}
              maxAltitude={trip.maxAltitude}
              checkAvailabilityHref="#itinerary"
              downloadItineraryHref="#inclusions"
              planTripHref="/plan-my-trip"
            />
            <TripNavTabs />
            <TripAboutAndHighlights
              paragraphs={trip.overview}
              highlights={trip.highlights}
            />
            <TripItinerary
              days={trip.itinerary}
              image={trip.heroImage || trip.gallery?.[0] || undefined}
            />
            <TripElevationProfile
              title={`${trip.title} Elevation Profile`}
              imageUrl={trip.elevationProfileUrl}
              itineraryDays={trip.itinerary}
            />
            <TripRouteMap
              title="Route Map"
              mapImageUrl={trip.routeMapUrl}
              itineraryDays={trip.itinerary}
            />
            <TripInclusionsExclusions
              inclusions={trip.inclusions}
              exclusions={trip.exclusions}
            />
            {/* <TripDepartures
              departures={trip.departures}
              currency={trip.currencyCode}
              tripPrice={trip.price.replace("$", "")}
            /> */}

            <TripVideoSection
              title={`Experience ${trip.title}`}
              videoUrl={trip.videoUrl}
              thumbnailUrl={
                trip.heroImage ||
                trip.gallery?.[0] ||
                "/images/destinations/everest.jpg"
              }
            />
            <div id="reviews">
              <Testimonials
                eyebrow="TRAVELERS LOVE US"
                title="WHAT OUR TRAVELERS SAY"
                testimonials={testimonials}
                tripId={trip.numericId}
                tripTitle={trip.title}
                className="!py-8 sm:!py-10 lg:!py-12"
              />
            </div>
            <AdventuresSection
              eyebrow={`POPULAR IN ${trip.region.toUpperCase()}`}
              title="Featured Tours"
              titleFont="playfair"
              headerLayout="split"
              viewAllHref="/destination"
              rightLinkVariant="button"
              rightLinkText="View all Tour"
              className="!py-8 sm:!py-10 lg:!py-12"
            />
            <TravelGallery
              items={
                trip.gallery && trip.gallery.length > 0
                  ? [
                      ...(trip.heroImage ? [trip.heroImage] : []),
                      ...trip.gallery,
                    ]
                      .filter((val, idx, self) => self.indexOf(val) === idx)
                      .map((imgUrl, idx) => ({
                        id: String(idx + 1),
                        image: imgUrl,
                        alt: `${trip.title} photo ${idx + 1}`,
                        heightClass: [
                          "md:h-[260px]",
                          "md:h-[190px]",
                          "md:h-[300px]",
                          "md:h-[190px]",
                          "md:h-[260px]",
                        ][idx % 5],
                      }))
                  : undefined
              }
            />
            <div id="faqs">
              <FAQSection
                id="faqs"
                eyebrow="TRIP INFORMATION"
                title="FREQUENTLY ASKED QUESTIONS"
                description={`Find essential answers and practical tips for ${trip.title}.`}
                items={
                  trip.faqs && trip.faqs.length > 0
                    ? trip.faqs.map((f, i) => ({
                        id: String(i + 1),
                        question: f.question,
                        answer: f.answer,
                      }))
                    : undefined
                }
              />
            </div>
            <NewsletterSubscription />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
