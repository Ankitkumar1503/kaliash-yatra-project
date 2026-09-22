import DynamicTripPage, { generateMetadata as generateDynamicMetadata } from "./[slug]/page";

export async function generateMetadata() {
  return generateDynamicMetadata({
    params: Promise.resolve({ slug: "everest-base-camp-trek" }),
  });
}

export default function TripPage() {
  return (
    <DynamicTripPage
      params={Promise.resolve({ slug: "everest-base-camp-trek" })}
    />
  );
}
