import Header from "@/component/Header/Header";
import Banner from "@/component/Banner/Banner";
import PopularDestinations from "@/component/PopularDestinations/PopularDestinations";
import DestinationsWeLove from "@/component/DestinationsWeLove/DestinationsWeLove";
import BestTour from "@/component/BestTour/BestTour";
import ConceptSection from "@/component/ConceptSection/ConceptSection";
import AdventuresSection from "@/component/AdventuresSection/AdventuresSection";
import TravelTips from "@/component/TravelTips/TravelTips";
import TravelGallery from "@/component/TravelGallery/TravelGallery";
import UpcomingTrips from "@/component/UpcomingTrips/UpcomingTrips";
import Testimonials from "@/component/Testimonials/Testimonials";
import FAQSection from "@/component/FAQSection/FAQSection";
import NewsletterSubscription from "@/component/NewsletterSubscription/NewsletterSubscription";
import Footer from "@/component/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <Header />
      <main className="flex-grow w-full">
        <Banner />
        <BestTour />
        <ConceptSection />
        <PopularDestinations />
        <DestinationsWeLove />
        <AdventuresSection />
        <TravelTips />
        {/* <UpcomingTrips /> */}
        <Testimonials />
        <TravelGallery />
        <FAQSection />
        <NewsletterSubscription />
      </main>
      <Footer />
    </div>
  );
}
