import type { Metadata } from "next";
import Header from "@/component/Header/Header";
import PageBanner from "@/component/PageBanner/PageBanner";
import LegalDocuments from "@/component/Legal/LegalDocuments";
import NewsletterSubscription from "@/component/NewsletterSubscription/NewsletterSubscription";
import Footer from "@/component/Footer/Footer";

export const metadata: Metadata = {
  title: "Legal Documents - Mission Nepal Holiday",
  description:
    "Clear policies for a safe, transparent and hassle-free travel experience. Explore our government licenses, company registration, and tax credentials.",
};

export default function LegalDocumentsPage() {
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
            { label: "LEGAL DOCUMENTS" },
          ]}
          title="TRAVEL WITH CONFIDENCE"
          description="Clear policies for a safe, transparent and hassle-free travel experience."
        />

        {/* 3. Legal Documents Gallery Section */}
        <LegalDocuments />

        {/* 4. Shared Newsletter Subscription */}
        <NewsletterSubscription />
      </main>

      {/* 5. Shared Footer */}
      <Footer />
    </div>
  );
}
