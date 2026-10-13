import { apiGet, type Paginated } from "./client";
import type { GalleryPhoto } from "@/component/Gallery/TravelGalleryGrid";
import { galleryLayouts } from "./gallery-layout";
import { resolveMediaUrl } from "./trips";

type ApiGallery = {
  id: number;
  title: string;
  location: string | null;
  altText: string;
  sortOrder: number;
  media?: { id: number; url: string; type: string; alt: string } | null;
  mediaUrl?: string;
  url?: string;
};

export async function getGallery(params: { trip?: string; search?: string; page?: number; limit?: number } = {}) {
  const response = await apiGet<Paginated<ApiGallery>>("gallery", params);
  const items: GalleryPhoto[] = (response.items || []).map((item) => ({
    id: String(item.id),
    src: resolveMediaUrl(item.media?.url || item.mediaUrl || item.url || ""),
    alt: item.altText || item.media?.alt || item.title || "Gallery image",
    title: item.title,
    location: item.location ?? undefined,
    sortOrder: item.sortOrder,
  }));
  return { ...response, items };
}

export function galleryLayout(sortOrder: number) {
  return galleryLayouts[sortOrder] ?? { spanClass: "col-span-1", aspectClass: "aspect-square" };
}
