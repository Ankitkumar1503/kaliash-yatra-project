import type { Metadata } from "next";
import Header from "@/component/Header/Header";
import PageBanner from "@/component/PageBanner/PageBanner";
import ReviewsSection from "@/component/Reviews/ReviewsSection";
import NewsletterSubscription from "@/component/NewsletterSubscription/NewsletterSubscription";
import Footer from "@/component/Footer/Footer";
import { ApiRequestError } from "@/lib/api/client";
import { getReviews } from "@/lib/api/reviews";
import type { ReviewItem } from "@/data/types";

export const metadata: Metadata = { title: "Traveler Reviews - Mission Nepal Holiday", description: "Read real experiences and stories from travelers who explored Nepal, Bhutan, Tibet, India and the Himalayas with Mission Nepal Holiday." };
export default async function ReviewsPage() {
  let approvedReviews: ReviewItem[] = []; let loadError: string | undefined;
  try { approvedReviews = (await getReviews({ limit: 100 })).items; }
  catch (error) { loadError = error instanceof ApiRequestError ? error.message : "Unable to load approved reviews right now."; }
  return <div className="min-h-screen flex flex-col justify-between bg-white"><Header/><main className="flex-grow w-full"><PageBanner backgroundImage="/images/destinations/mount-kailash.jpg" breadcrumbs={[{label:"HOME",href:"/"},{label:"REVIEWS"}]} title="STORIES FROM JOURNEYS THAT MATTER" description="Read real experiences from travelers who explored Nepal, Bhutan, Tibet, India and the Himalayas with Mission Nepal Holiday."/><ReviewsSection approvedReviews={approvedReviews} loadError={loadError}/><NewsletterSubscription/></main><Footer/></div>;
}
