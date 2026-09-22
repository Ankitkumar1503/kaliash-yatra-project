import { ReviewItem } from "@/data/types";
import { initialReviewsData } from "@/data/reviews";

const REVIEWS_KEY = "mission-nepal-reviews";
const NEWSLETTER_KEY = "mission-nepal-newsletter";
const BOOKINGS_KEY = "mission-nepal-bookings";

/**
 * Safely check if window / localStorage is available in browser environment
 */
function isClient(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

/**
 * Retrieve all reviews (merging initial local mock reviews with user-submitted reviews from localStorage)
 */
export function getStoredReviews(): ReviewItem[] {
  if (!isClient()) {
    return initialReviewsData;
  }

  try {
    const raw = window.localStorage.getItem(REVIEWS_KEY);
    if (!raw) {
      return initialReviewsData;
    }
    const userReviews: ReviewItem[] = JSON.parse(raw);
    // User submitted reviews first, then initial reviews
    return [...userReviews, ...initialReviewsData];
  } catch (err) {
    console.warn("Error reading reviews from localStorage", err);
    return initialReviewsData;
  }
}

/**
 * Save a new user review to localStorage
 */
export function saveStoredReview(newReview: ReviewItem): boolean {
  if (!isClient()) return false;

  try {
    const raw = window.localStorage.getItem(REVIEWS_KEY);
    const existing: ReviewItem[] = raw ? JSON.parse(raw) : [];
    const updated = [newReview, ...existing];
    window.localStorage.setItem(REVIEWS_KEY, JSON.stringify(updated));
    return true;
  } catch (err) {
    console.warn("Error saving review to localStorage", err);
    return false;
  }
}

/**
 * Store subscribed newsletter email
 */
export function saveNewsletterEmail(email: string): boolean {
  if (!isClient()) return false;

  try {
    const raw = window.localStorage.getItem(NEWSLETTER_KEY);
    const existing: Array<{ email: string; date: string }> = raw ? JSON.parse(raw) : [];
    existing.unshift({ email, date: new Date().toISOString() });
    window.localStorage.setItem(NEWSLETTER_KEY, JSON.stringify(existing));
    return true;
  } catch (err) {
    console.warn("Error saving newsletter email to localStorage", err);
    return false;
  }
}

/**
 * Store trip booking / inquiry
 */
export function saveBookingInquiry(inquiry: {
  tripSlug: string;
  name?: string;
  email?: string;
  phone?: string;
  travelDate?: string;
  travelers?: number;
}): boolean {
  if (!isClient()) return false;

  try {
    const raw = window.localStorage.getItem(BOOKINGS_KEY);
    const existing: any[] = raw ? JSON.parse(raw) : [];
    existing.unshift({ ...inquiry, date: new Date().toISOString() });
    window.localStorage.setItem(BOOKINGS_KEY, JSON.stringify(existing));
    return true;
  } catch (err) {
    console.warn("Error saving booking inquiry to localStorage", err);
    return false;
  }
}
