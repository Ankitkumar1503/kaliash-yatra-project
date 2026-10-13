import type { Metadata } from "next";
import Header from "@/component/Header/Header";
import PageBanner from "@/component/PageBanner/PageBanner";
import GalleryIntro from "@/component/Gallery/GalleryIntro";
import TravelGalleryGrid from "@/component/Gallery/TravelGalleryGrid";
import NewsletterSubscription from "@/component/NewsletterSubscription/NewsletterSubscription";
import Footer from "@/component/Footer/Footer";
import { ApiRequestError } from "@/lib/api/client";
import { getGallery } from "@/lib/api/gallery";

export const metadata: Metadata = { title: "Travel Gallery - Mission Nepal Holiday", description: "Explore stunning photos from past tours and expeditions highlighting the beauty, culture and experiences of our holiday journeys across Nepal, Bhutan, Tibet, and India." };
export default async function GalleryPage() {
  let gallery: Awaited<ReturnType<typeof getGallery>>["items"]=[]; let loadError:unknown;
  try { gallery=(await getGallery({limit:100})).items; } catch(error) { loadError=error; }
  return <div className="min-h-screen flex flex-col justify-between bg-white"><Header/><main className="flex-grow w-full"><PageBanner backgroundImage="/images/destinations/mount-kailash.jpg" breadcrumbs={[{label:"HOME",href:"/"},{label:"GALLERY"}]} title="CAPTURED MOMENTS, LASTING MEMORIES" description="Explore the beauty of Nepal, Bhutan, Tibet, India and beyond through our collection of unforgettable travel moments."/><GalleryIntro/>{loadError?<section className="site-container py-16 text-center text-gray-600" role="alert">{loadError instanceof ApiRequestError?loadError.message:"Unable to load gallery content right now."}</section>:gallery.length?<TravelGalleryGrid photos={gallery}/>:<p className="site-container py-12 text-center text-gray-600">No gallery images are available right now.</p>}<NewsletterSubscription/></main><Footer/></div>;
}