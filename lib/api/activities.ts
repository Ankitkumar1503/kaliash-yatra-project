import type { Activity } from "@/data/types";
import { mapTrip, type ApiTrip, type UiTrip } from "./trips";
import { apiGet, type Paginated } from "./client";

type ApiMedia = { 
  id: number; 
  url: string; 
  type: string; 
  alt: string 
} | null;


type ApiActivity = {
  id: number; 
  slug: string; 
  title: string; 
  shortDescription: string; 
  description: string;
  iconName: string; 
  badge?: string | null; 
  heroImage: ApiMedia; 
  tripsCount: number; 
  featuredTrips: string[];
  featuredTripDetails?: ApiTrip[];
};

export type ActivityDetail = Activity & { featuredTripDetails: UiTrip[] };

export function mapActivity(api: ApiActivity): ActivityDetail {
  return { id: api.slug, slug: api.slug, title: api.title, shortDescription: api.shortDescription, description: api.description,
    heroImage: api.heroImage?.url ?? "", iconName: api.iconName, badge: api.badge ?? undefined,
    tripsCount: api.tripsCount, featuredTrips: api.featuredTrips,
    featuredTripDetails: (api.featuredTripDetails ?? []).map(mapTrip) };
}

export async function getActivities(params: { search?: string; page?: number; limit?: number } = {}) {
  const response = await apiGet<Paginated<ApiActivity>>("activities", params);
  return { ...response, items: response.items.map(mapActivity) };
}

export async function getActivity(slug: string) {
  try { return mapActivity(await apiGet<ApiActivity>(`activities/${encodeURIComponent(slug)}`)); }
  catch (error) { if (error instanceof Error && "status" in error && error.status === 404) return null; throw error; }
}
