import type { ReviewItem } from "@/data/types";
import { apiGet, apiPost, type Paginated } from "./client";
type Media = { id: number; url: string; type: string; alt: string } | null;
type ApiReview = { id: number; rating: number; message: string; name: string; location: string; title: string | null; date: string; avatar: Media; trip: { slug: string; title: string } | null };
export function mapReview(api: ApiReview): ReviewItem { return { id: String(api.id), rating: api.rating, message: api.message, name: api.name, location: api.location, avatar: api.avatar?.url ?? "", date: api.date, title: api.title ?? undefined, trip: api.trip?.title }; }
export async function getReviews(params: { trip?: string; page?: number; limit?: number } = {}) { const response=await apiGet<Paginated<ApiReview>>("reviews",params); return { ...response, items: response.items.map(mapReview) }; }

export async function submitReview(data: {
  trip_id?: number | null;
  name: string;
  email?: string | null;
  location?: string;
  title?: string | null;
  message: string;
  rating: number;
}) {
  return apiPost("reviews", data);
}
