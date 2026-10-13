import type { Trip, ItineraryDay, TripFAQ } from "@/data/types";
import { apiGet, type Paginated } from "./client";

type Media =
  | { id: number; url: string; type: string; alt: string }
  | string
  | null;
type ApiReview = {
  id: number;
  name: string;
  location: string;
  message: string;
  rating: number;
  avatar: Media;
};
export type ApiTrip = {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  days: number;
  duration: number;
  nights: number | null;
  price: number | string;
  originalPrice: number | string | null;
  currency: string;
  difficulty: string;
  maxAltitude: string | null;
  minGroupSize: number | null;
  maxGroupSize: number | null;
  groupSize: string | null;
  groupPricing?: Array<{ minPax: number; maxPax: number; pricePerPax: number }>;
  elevationProfileUrl?: string | null;
  routeMapUrl?: string | null;
  videoUrl?: string | null;
  departures?: Array<{
    id?: string;
    startDate: string;
    endDate: string;
    totalSeats?: number;
    bookedSeats?: number;
    price?: number;
    status?: string;
  }>;
  badge?: string | null;
  featured: boolean;
  destination: { name: string; country: string; slug: string };
  country: string;
  region: string | null;
  displayArea?: string | null;
  regionInfo: { title: string } | null;
  activity: string | null;
  category: string | null;
  heroImage: Media;
  gallery?: (Media | { image?: Media })[];
  overview?: string[];
  highlights?: string[];
  itinerary?: Array<
    ItineraryDay & {
      altitude?: string;
      trekkingTime?: string;
      accommodation?: string;
    }
  >;
  inclusions?: string[];
  exclusions?: string[];
  faqs?: TripFAQ[];
  reviews?: ApiReview[];
  rating: number;
  reviewCount: number;
};

export type UiTrip = Trip & {
  numericId?: number;
  groupPricing?: Array<{ minPax: number; maxPax: number; pricePerPax: number }>;
  currencyCode: string;
  displayArea?: string | null;
  category?: string | null;
  elevationProfileUrl?: string | null;
  routeMapUrl?: string | null;
  videoUrl?: string | null;
  departures?: Array<{
    id?: string;
    startDate: string;
    endDate: string;
    totalSeats?: number;
    bookedSeats?: number;
    price?: number | string;
    status?: string;
  }>;
  reviews: Array<{
    id: string;
    avatar: string;
    name: string;
    location: string;
    quote: string;
    rating: number;
  }>;
};
export const resolveMediaUrl = (media: Media | string | undefined | null): string => {
  if (!media) return "";
  const rawUrl = typeof media === "string" ? media : (media as any)?.url || "";
  if (!rawUrl || typeof rawUrl !== "string") return "";
  const trimmed = rawUrl.trim();
  
  // If it's an absolute localhost:5000/uploads URL, normalize to relative /uploads so Next.js handles it locally
  const localMatch = trimmed.match(/^https?:\/\/(?:localhost|127\.0\.0\.1):5000(\/(?:uploads|images)\/.*)$/);
  if (localMatch) {
    return localMatch[1];
  }

  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }
  
  const cleanPath = trimmed.replace(/^\/+/, "");
  return `/${cleanPath}`;
};

const mediaUrl = resolveMediaUrl;
const formatPrice = (value: number | string | null | undefined) =>
  value == null
    ? "0"
    : new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(
        Number(value),
      );

export function mapTrip(api: ApiTrip): UiTrip {
  const overview =
    api.overview?.flatMap((text) => text.split(/\n\s*\n/).filter(Boolean)) ??
    api.fullDescription.split(/\n\s*\n/).filter(Boolean);
  return {
    numericId: api.id,
    id: api.slug,
    slug: api.slug,
    title: api.title,
    country:
      api.country || api.destination?.country || api.destination?.name || "",
    region: api.region || api.displayArea || "",
    displayArea: api.displayArea,
    activity: api.activity || "",
    duration: `${api.days} Days`,
    days: api.days,
    price: `${api.currency === "USD" ? "$" : ""}${formatPrice(api.price)}`,
    originalPrice:
      api.originalPrice == null
        ? undefined
        : `${api.currency === "USD" ? "$" : ""}${formatPrice(api.originalPrice)}`,
    rating: api.rating,
    reviewCount: api.reviewCount,
    difficulty: (api.difficulty.charAt(0).toUpperCase() +
      api.difficulty.slice(1)) as Trip["difficulty"],
    maxAltitude: api.maxAltitude ?? "",
    groupSize:
      api.groupSize ??
      [api.minGroupSize, api.maxGroupSize].filter((x) => x != null).join(" – "),
    badge: api.badge ?? undefined,
    groupPricing: api.groupPricing || [],
    heroImage: mediaUrl(api.heroImage),
    elevationProfileUrl: resolveMediaUrl(api.elevationProfileUrl) || null,
    routeMapUrl: resolveMediaUrl(api.routeMapUrl) || null,
    videoUrl: api.videoUrl || null,
    departures: Array.isArray(api.departures) ? api.departures : [],
    gallery: (api.gallery ?? [])
      .map((item) => {
        const mediaItem: Media =
          item && typeof item === "object" && "image" in item
            ? ((item as { image?: Media }).image ?? null)
            : (item as Media);
        return mediaUrl(mediaItem);
      })
      .filter(Boolean),
    overview,
    category: api.category,
    highlights: api.highlights ?? [],
    itinerary: (api.itinerary ?? []).map((day: any) => ({
      dayNumber: day.dayNumber,
      title: day.title,
      description: day.description,
      image: resolveMediaUrl(day.image || day.imageUrl) || undefined,
      image2: resolveMediaUrl(day.image2 || day.imageUrl2) || undefined,
      details: {
        altitude: day.altitude,
        trekkingTime: day.trekkingTime,
        accommodation: day.accommodation,
      },
    })),
    inclusions: api.inclusions ?? [],
    exclusions: api.exclusions ?? [],
    faqs: api.faqs ?? [],
    currencyCode: api.currency,
    reviews: (api.reviews ?? []).map((review) => ({
      id: String(review.id),
      avatar: mediaUrl(review.avatar),
      name: review.name,
      location: review.location,
      quote: review.message,
      rating: review.rating,
    })),
  };
}

export type TripFilters = {
  destination?: string;
  region?: string;
  activity?: string;
  category?: string;
  difficulty?: string;
  featured?: boolean;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  limit?: number;
  sort?: "published" | "price" | "duration" | "title";
};
export async function getTrips(filters: TripFilters = {}) {
  const response = await apiGet<Paginated<ApiTrip>>("trips", filters);
  return { ...response, items: response.items.map(mapTrip) };
}
export async function getTrip(slug: string) {
  try {
    return mapTrip(await apiGet<ApiTrip>(`trips/${encodeURIComponent(slug)}`));
  } catch (error) {
    if (error instanceof Error && "status" in error && error.status === 404)
      return null;
    throw error;
  }
}
