import type { Metadata } from "next";
import Header from "@/component/Header/Header";
import PageBanner from "@/component/PageBanner/PageBanner";
import TravelTips from "@/component/TravelTips/TravelTips";
import { allBlogPosts } from "@/component/Blog/blogData";
import NewsletterSubscription from "@/component/NewsletterSubscription/NewsletterSubscription";
import Footer from "@/component/Footer/Footer";

export const metadata: Metadata = {
  title: "Our Travel Blog - Mission Nepal Holiday",
  description:
    "Discover travel tips, destination guides, cultural insights and real stories from the Himalayas and beyond with Mission Nepal Holidays.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      {/* 1. Shared Header */}
      <Header />

      <main className="flex-grow w-full">
        {/* 2. Reusable Secondary Page Banner */}
        <PageBanner
          backgroundImage="/images/destinations/mount-kailash.jpg"
          breadcrumbs={[
            { label: "HOME", href: "/" },
            { label: "BLOG" },
          ]}
          title="OUR TRAVEL BLOG"
          description="Discover travel tips, destination guides, cultural insights and real stories from the Himalayas and beyond."
        />

        {/* 3. Main Blog Listing Section (4 columns across 5 rows) with interactive search & filter */}
        <TravelTips
          eyebrow="Modern & Beautiful"
          title="STAY UPDATE WITH GOTRAVEL TIPS"
          posts={allBlogPosts}
          showSearchFilter={true}
        />

        {/* 4. Shared Newsletter Subscription */}
        <NewsletterSubscription />
      </main>

      {/* 5. Shared Footer */}
      <Footer />
    </div>
  );
}
