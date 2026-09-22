import DynamicRegionPage, { generateMetadata as generateDynamicMetadata } from "./[slug]/page";

export async function generateMetadata() {
  return generateDynamicMetadata({ params: Promise.resolve({ slug: "everest" }) });
}

export default function RegionPage() {
  return <DynamicRegionPage params={Promise.resolve({ slug: "everest" })} />;
}
