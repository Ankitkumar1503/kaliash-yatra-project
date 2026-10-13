import Header from "@/component/Header/Header";
import Banner from "@/component/Banner/Banner";
import PopularDestinations from "@/component/PopularDestinations/PopularDestinations";
import DestinationsWeLove from "@/component/DestinationsWeLove/DestinationsWeLove";
import BestTour from "@/component/BestTour/BestTour";
import ConceptSection from "@/component/ConceptSection/ConceptSection";
import AdventuresSection from "@/component/AdventuresSection/AdventuresSection";
import TravelTips from "@/component/TravelTips/TravelTips";
import TravelGallery from "@/component/TravelGallery/TravelGallery";
import Testimonials from "@/component/Testimonials/Testimonials";
import FAQSection from "@/component/FAQSection/FAQSection";
import NewsletterSubscription from "@/component/NewsletterSubscription/NewsletterSubscription";
import Footer from "@/component/Footer/Footer";
import { getReviews } from "@/lib/api/reviews";
import { getBlogPosts } from "@/lib/api/blogs";
import type { BlogPost } from "@/component/TravelTips/TravelTips";
import { getTrips } from "@/lib/api/trips";
import type { Tour } from "@/component/BestTour/BestTour";
import type { Adventure } from "@/component/AdventuresSection/AdventuresSection";
import { getDestinations } from "@/lib/api/destinations";
import { getRegions } from "@/lib/api/regions";
import type { Destination as DestinationCard } from "@/component/PopularDestinations/PopularDestinations";
import { getGallery } from "@/lib/api/gallery";
import { getFaqs } from "@/lib/api/faqs";
import type { GalleryItem } from "@/component/TravelGallery/TravelGallery";
import { ApiRequestError } from "@/lib/api/client";

const readableError = (error: unknown, fallback: string) =>
  error instanceof ApiRequestError ? error.message : fallback;

export default async function Home() {
  let testimonials: import("@/component/Testimonials/Testimonials").Testimonial[] =
    [];
  let reviewsError: string | undefined;
  let blogPosts: BlogPost[] = [];
  let blogError: string | undefined;
  let tours: Tour[] = [];
  let toursError: string | undefined;
  let adventures: Adventure[] = [];
  let destinations: DestinationCard[] = [];
  let destinationsError: string | undefined;
  let galleryItems: GalleryItem[] = [];
  let galleryError: string | undefined;
  try {
    const trips = (await getTrips({ featured: true, limit: 100 })).items;
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
    adventures = trips.map((trip) => ({
      id: trip.slug,
      slug: trip.slug,
      image: trip.heroImage,
      badge: trip.badge,
      title: trip.title,
      subtitle: [trip.duration, trip.region || trip.country]
        .filter(Boolean)
        .join(" · "),
      rating: trip.rating,
      reviewCount: trip.reviewCount,
      price: trip.price,
    }));
  } catch (error) {
    toursError = readableError(error, "Unable to load trips right now.");
  }
  try {
    const [destinationsResponse, regionsResponse] = await Promise.all([
      getDestinations({ limit: 100 }),
      getRegions({ limit: 100 }),
    ]);
    const destinationBySlug = new Map(
      destinationsResponse.items.map((item) => [item.slug, item]),
    );
    const regionBySlug = new Map(
      regionsResponse.items.map((item) => [item.slug, item]),
    );
    destinations = ["nepal", "bhutan", "tibet", "india"].flatMap((slug) => {
      const item = destinationBySlug.get(slug);
      return item
        ? [
            {
              id: item.slug,
              name: item.name,
              description: item.tagline,
              image: item.heroImage,
              href: `/destination?country=${item.slug}`,
            },
          ]
        : [];
    });
    const everest = regionBySlug.get("everest");
    if (everest)
      destinations.push({
        id: everest.slug,
        name: everest.title,
        description: everest.tagline,
        image: everest.heroImage,
        href: `/region/${everest.slug}`,
      });
  } catch (error) {
    destinationsError = readableError(
      error,
      "Unable to load destinations right now.",
    );
  }
  try {
    const items = (await getGallery({ limit: 5 })).items;
    const heights = [
      "md:h-[260px]",
      "md:h-[190px]",
      "md:h-[300px]",
      "md:h-[190px]",
      "md:h-[260px]",
    ];
    galleryItems = items.map((item, index) => ({
      id: item.id,
      image: item.src,
      alt: item.alt,
      heightClass: heights[index] ?? "md:h-[260px]",
    }));
  } catch (error) {
    galleryError = readableError(
      error,
      "Unable to load gallery images right now.",
    );
  }
  try {
    testimonials = (await getReviews({ limit: 100 })).items.map((review) => ({
      id: review.id,
      avatar: review.avatar,
      name: review.name,
      location: review.location,
      quote: review.message,
      rating: review.rating,
    }));
  } catch (error) {
    reviewsError = readableError(
      error,
      "Unable to load approved reviews right now.",
    );
  }
  try {
    blogPosts = (await getBlogPosts(4)).items;
  } catch (error) {
    blogError = readableError(
      error,
      "Unable to load travel articles right now.",
    );
  }
  let faqs: import("@/component/FAQSection/FAQSection").FAQItem[] = [];
  try {
    const faqsResponse = await getFaqs({ limit: 12 });
    faqs = (faqsResponse.items || []).map((faq) => ({
      id: String(faq.id),
      question: faq.question,
      answer: faq.answer,
    }));
  } catch (error) {
    // Gracefully fall back to default questions if API is unavailable
  }
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <Header />
      <main className="flex-grow w-full">
        <Banner />
        <BestTour tours={tours} loadError={toursError} />
        <ConceptSection />
        <PopularDestinations
          destinations={destinations}
          loadError={destinationsError}
        />
        <DestinationsWeLove />
        <AdventuresSection adventures={adventures} loadError={toursError} />
        <TravelTips posts={blogPosts} loadError={blogError} />
        <Testimonials testimonials={testimonials} loadError={reviewsError} />
        <TravelGallery items={galleryItems} loadError={galleryError} />
        <FAQSection items={faqs.length > 0 ? faqs : undefined} />
        <NewsletterSubscription />
      </main>
      <Footer />
    </div>
  );
}
