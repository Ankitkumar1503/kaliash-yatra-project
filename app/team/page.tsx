import type { Metadata } from "next";
import Header from "@/component/Header/Header";
import PageBanner from "@/component/PageBanner/PageBanner";
import LeadershipTeam from "@/component/Team/LeadershipTeam";
import TeamAtAGlance from "@/component/Team/TeamAtAGlance";
import TeamDifference from "@/component/Team/TeamDifference";
import NewsletterSubscription from "@/component/NewsletterSubscription/NewsletterSubscription";
import Footer from "@/component/Footer/Footer";

export const metadata: Metadata = {
  title: "Our Team - Mission Nepal Holiday",
  description:
    "Meet the people behind your journey. Our team is dedicated to making your Himalayan travel experience safe, seamless and unforgettable.",
};

export default function TeamPage() {
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
            { label: "OUR TEAM" },
          ]}
          title="MEET THE PEOPLE BEHIND YOUR JOURNEY"
          description="Our team is a blend of travel experts, local guides and support staff who are dedicated to making your journey safe, seamless and unforgettable."
        />

        {/* 3. Leadership Team Section (5-column, 2 rows) */}
        <LeadershipTeam />

        {/* 4. Team At A Glance (Full-width gray section with 5 stats) */}
        <TeamAtAGlance />

        {/* 5. More Than a Travel Company (50/50 split with feature list) */}
        <TeamDifference />

        {/* 6. Newsletter Subscription */}
        <NewsletterSubscription />
      </main>

      {/* 7. Shared Footer */}
      <Footer />
    </div>
  );
}
