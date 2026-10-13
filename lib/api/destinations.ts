import type { Destination } from "@/data/types";
import { apiGet, type Paginated } from "./client";

type ApiMedia = { id: number; url: string; type: string; alt: string } | null;
type ApiDestination = {
  id: number; slug: string; name: string; country: string; tagline: string;
  shortDescription: string; description: string; badge?: string | null;
  heroImage: ApiMedia; featuredImage: ApiMedia; tripsCount: number;
  featuredTrips: string[]; regions: string[]; regionDetails?: Array<{ slug: string; title: string }>;
};

export type DestinationCard = { id: string; name: string; subtitle: string; image: string; href: string };
export type DestinationListCard = { id: string; name: string; description: string; image: string; href: string };

export function mapDestination(api: ApiDestination): Destination {
  return {
    id: api.slug,
    slug: api.slug,
    name: api.name,
    country: api.country,
    tagline: api.tagline,
    shortDescription: api.shortDescription,
    description: api.description,
    heroImage: api.heroImage?.url ?? "",
    featuredImage: api.featuredImage?.url ?? "",
    badge: api.badge ?? undefined,
    regions: api.regionDetails?.map((region) => region.title) ?? api.regions,
    tripsCount: api.tripsCount,
    featuredTrips: api.featuredTrips,
  };
}

export function mapDestinationCategory(api: ApiDestination): DestinationCard {
  return { id: api.slug, name: api.name, subtitle: api.tagline, image: api.heroImage?.url ?? "", href: `/destination?country=${api.slug}` };
}

export function mapDestinationListCard(api: ApiDestination): DestinationListCard {
  return { id: api.slug, name: api.name, description: api.shortDescription, image: api.heroImage?.url ?? "", href: `/destination?country=${api.slug}` };
}

export async function getDestinations(params: { country?: string; page?: number; limit?: number } = {}) {
  const response = await apiGet<Paginated<ApiDestination>>("destinations", params);
  return { ...response, items: response.items.map(mapDestination) };
}

export async function getDestination(slug: string) {
  try { return mapDestination(await apiGet<ApiDestination>(`destinations/${encodeURIComponent(slug)}`)); }
  catch (error) { if (error instanceof Error && "status" in error && error.status === 404) return null; throw error; }
}

export async function getDestinationCards() {
  const response = await apiGet<Paginated<ApiDestination>>("destinations", { limit: 100, sort: "name" });
  return response.items.map(mapDestinationCategory);
}

export async function getDestinationListCards() {
  const response = await apiGet<Paginated<ApiDestination>>("destinations", { limit: 100, sort: "name" });
  return response.items.map(mapDestinationListCard);
}