import { apiGet, type Paginated } from "./client";
export type PublicFAQ = { id: number; tripId: number | null; pageKey: string | null; question: string; answer: string };
export async function getFaqs(params: { trip?: string; pageKey?: string; page?: number; limit?: number } = {}) { return apiGet<Paginated<PublicFAQ>>("faqs", params); }