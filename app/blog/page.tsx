import type { Metadata } from "next";
import Header from "@/component/Header/Header";
import PageBanner from "@/component/PageBanner/PageBanner";
import TravelTips, { type BlogPost } from "@/component/TravelTips/TravelTips";
import NewsletterSubscription from "@/component/NewsletterSubscription/NewsletterSubscription";
import Footer from "@/component/Footer/Footer";
import { ApiRequestError } from "@/lib/api/client";
import { getBlogPosts } from "@/lib/api/blogs";

export const metadata: Metadata = {
  title: "Our Travel Blog - Mission Nepal Holiday",
  description:
    "Discover travel tips, destination guides, cultural insights and real stories from the Himalayas and beyond with Mission Nepal Holidays.",
};
export default async function BlogPage() {
  let posts: BlogPost[] = [];
  let loadError: unknown;
  try {
    posts = (await getBlogPosts()).items;
  } catch (error) {
    loadError = error;
    posts = [];
  }
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <Header />
      <main className="flex-grow w-full">
        <PageBanner
          backgroundImage="/images/destinations/mount-kailash.jpg"
          breadcrumbs={[{ label: "HOME", href: "/" }, { label: "BLOG" }]}
          title="OUR TRAVEL BLOG"
          description="Discover travel tips, destination guides, cultural insights and real stories from the Himalayas and beyond."
        />
        {loadError ? (
          <section
            className="site-container py-16 text-center text-gray-600"
            role="alert"
          >
            {loadError instanceof ApiRequestError
              ? loadError.message
              : "Unable to load blog content right now."}
          </section>
        ) : (
          <TravelTips
            eyebrow="Modern & Beautiful"
            title="STAY UPDATE WITH GOTRAVEL TIPS"
            posts={posts}
            showSearchFilter={true}
          />
        )}
        <NewsletterSubscription />
      </main>
      <Footer />
    </div>
  );
}
