import type { Region, RegionPlace, RegionExperience } from "@/data/types";
import { apiGet, type Paginated } from "./client";

type Media = { id: number; url: string; type: string; alt: string } | null;
type ApiRegion = {
  id: number; slug: string; title: string; subtitle: string; tagline: string; aboutTitle: string; aboutParagraphs: string[];
  heroImage: Media; destination: { id: number; slug: string; name: string; country: string };
  tripsCount: number; featuredTrips: string[];
  popularPlaces?: Array<{ id: string; name: string; description: string; image: string | null; href?: string | null }>;
  experiences?: Array<{ id: string; title: string; description: string; image: string | null; badge?: string | null }>;
};
function mapRegion(api: ApiRegion): Region {
  const popularPlaces: RegionPlace[] = (api.popularPlaces ?? []).map((place) => ({ id: place.id, name: place.name, description: place.description, image: place.image ?? "", href: place.href ?? "/destination" }));
  const experiences: RegionExperience[] = (api.experiences ?? []).map((item) => ({ id: item.id, title: item.title, description: item.description, image: item.image ?? "", badge: item.badge ?? undefined }));
  return { id: api.slug, slug: api.slug, title: api.title, subtitle: api.subtitle, tagline: api.tagline, heroImage: api.heroImage?.url ?? "", aboutTitle: api.aboutTitle, aboutParagraphs: api.aboutParagraphs, stats: [], popularPlaces, experiences, featuredTrips: api.featuredTrips };
}
export async function getRegions(params: { destination?: string; page?: number; limit?: number } = {}) {
  const response = await apiGet<Paginated<ApiRegion>>("regions", params);
  return { ...response, items: response.items.map(mapRegion) };
}
export async function getRegion(slug: string) {
  try { return mapRegion(await apiGet<ApiRegion>(`regions/${encodeURIComponent(slug)}`)); }
  catch (error) { if (error instanceof Error && "status" in error && error.status === 404) return null; throw error; }
}