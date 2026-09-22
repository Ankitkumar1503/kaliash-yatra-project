import type { Metadata } from "next";
import Header from "@/component/Header/Header";
import PageBanner from "@/component/PageBanner/PageBanner";
import AboutStory from "@/component/About/AboutStory";
import MissionVision from "@/component/About/MissionVision";
import WhyChooseUs from "@/component/About/WhyChooseUs";
import CoreValues from "@/component/About/CoreValues";
import TeamSection from "@/component/About/TeamSection";
import Testimonials, { Testimonial } from "@/component/Testimonials/Testimonials";
import FAQSection from "@/component/FAQSection/FAQSection";
import NewsletterSubscription from "@/component/NewsletterSubscription/NewsletterSubscription";
import Footer from "@/component/Footer/Footer";

export const metadata: Metadata = {
  title: "About Us - Mission Nepal Holiday",
  description:
    "More than travel, we create meaningful journeys that connect people, cultures and the Himalayas.",
};

const aboutTestimonials: Testimonial[] = [
  {
    id: "about-1",
    avatar: "/images/testimonials/avatar-1.jpg",
    name: "Sarah Jenkins",
    location: "United Kingdom",
    quote:
      "The amazing experience from start to finish! The guides were professional, supportive and truly made our Everest trek forever memorable.",
    rating: 5,
  },
  {
    id: "about-2",
    avatar: "/images/testimonials/avatar-2.jpg",
    name: "Sarah Jenkins",
    location: "United Kingdom",
    quote:
      "The amazing experience from start to finish! The guides were professional, supportive and truly made our Everest trek forever memorable.",
    rating: 5,
  },
  {
    id: "about-3",
    avatar: "/images/testimonials/avatar-3.jpg",
    name: "Sarah Jenkins",
    location: "United Kingdom",
    quote:
      "The amazing experience from start to finish! The guides were professional, supportive and truly made our Everest trek forever memorable.",
    rating: 5,
  },
  {
    id: "about-4",
    avatar: "/images/testimonials/avatar-1.jpg",
    name: "Sarah Jenkins",
    location: "United Kingdom",
    quote:
      "The amazing experience from start to finish! The guides were professional, supportive and truly made our Everest trek forever memorable.",
    rating: 5,
  },
];

export default function AboutUsPage() {
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
            { label: "ABOUT US" },
          ]}
          title="ABOUT US"
          description="More than travel, we create meaningful journeys that connect people, cultures and the Himalayas."
        />

        {/* 3. Our Story / Introduction */}
        <AboutStory />

        {/* 4. Mission + Vision Cards */}
        <MissionVision />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. Core Values */}
        <CoreValues />

        {/* 7. Our Team */}
        <TeamSection />

        {/* 8. Testimonials (Reused Testimonials Component) */}
        <Testimonials
          eyebrow="TRAVELERS LOVE US"
          title="WHAT OUR TRAVELERS SAY"
          testimonials={aboutTestimonials}
        />

        {/* 9. FAQ (Reused Accordion FAQ Component) */}
        <FAQSection />

        {/* 10. Newsletter Subscription (Reused Newsletter Component) */}
        <NewsletterSubscription />
      </main>

      {/* 11. Shared Footer */}
      <Footer />
    </div>
  );
}
