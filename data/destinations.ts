import { Destination } from "./types";

export const destinationsData: Destination[] = [
  {
    id: "nepal",
    slug: "nepal",
    name: "Nepal",
    country: "Nepal",
    tagline: "The Land of Himalayas & Sacred Living Traditions",
    shortDescription:
      "Home to eight of the world's fourteen highest peaks including Mount Everest, birthplace of Lord Buddha, and ancient UNESCO medieval cities.",
    description:
      "From the towering heights of the Annapurna and Everest ranges to the spiritual sanctuaries of Lumbini and Kathmandu Valley, Nepal offers an unmatched combination of thrilling trekking, diverse wildlife, and living cultural heritage.",
    heroImage: "/images/destinations/everest.jpg",
    featuredImage: "/images/destinations/kathmandu.jpg",
    badge: "TOP DESTINATION",
    regions: ["Everest Region", "Annapurna Region", "Langtang Region", "Mustang"],
    tripsCount: 24,
    featuredTrips: [
      "everest-base-camp-trek",
      "annapurna-circuit-trek",
      "kathmandu-valley-heritage",
    ],
  },
  {
    id: "bhutan",
    slug: "bhutan",
    name: "Bhutan",
    country: "Bhutan",
    tagline: "The Kingdom of Thunder Dragon & Gross National Happiness",
    shortDescription:
      "A serene Himalayan kingdom where Buddhist traditions, cliffside monasteries, and untouched alpine valleys merge seamlessly.",
    description:
      "Bhutan remains one of the world's most exclusive destinations. Discover ancient Dzongs (fortresses), hike to the cliff-hanging Tiger's Nest Monastery, and experience a culture that measures progress through happiness and environmental harmony.",
    heroImage: "/images/gallery/gallery-2.jpg",
    featuredImage: "/images/blogs/blog-2.jpg",
    badge: "EXCLUSIVE",
    regions: ["Paro Valley", "Thimphu", "Punakha", "Bumthang"],
    tripsCount: 12,
    featuredTrips: ["bhutan-cultural-odyssey"],
  },
  {
    id: "tibet",
    slug: "tibet",
    name: "Tibet",
    country: "Tibet",
    tagline: "The Sacred Roof of the World & Holy Mount Kailash",
    shortDescription:
      "Spiritual epicenter of Tibetan Buddhism, sacred high-altitude lakes, ancient monastic libraries, and the holy Mount Kailash circuit.",
    description:
      "Traverse the windswept Tibetan plateau, explore the grand Potala Palace in Lhasa, marvel at holy Lake Mansarovar, and undertake the transformative Kailash Kora pilgrim circuit revered by Buddhists, Hindus, and Jains worldwide.",
    heroImage: "/images/destinations/mount-kailash.jpg",
    featuredImage: "/images/kailash-1.jpg",
    badge: "SPIRITUAL",
    regions: ["Lhasa & Central Tibet", "Ngari (Kailash)", "Shigatse", "Gyangtse"],
    tripsCount: 16,
    featuredTrips: [
      "kailash-mansarovar-yatra",
      "lhasa-central-tibet-explorer",
    ],
  },
  {
    id: "india",
    slug: "india",
    name: "India",
    country: "India",
    tagline: "Timeless Heritage, Royal Palaces & Himalayan Frontiers",
    shortDescription:
      "From the royal heritage of Rajasthan and Taj Mahal to spiritual Rishikesh and the high-altitude deserts of Ladakh and Sikkim.",
    description:
      "India is an endlessly vibrant tapestry of sacred rivers, golden fortresses, spiritual ghats, and Himalayan sanctuaries. Journey across the Golden Triangle, explore sacred Buddhist pilgrimage sites, or trek into Ladakh's moonscapes.",
    heroImage: "/images/hero-mountains.jpg",
    featuredImage: "/images/adventures/adv-2.jpg",
    badge: "CULTURAL",
    regions: ["Ladakh", "Sikkim & Darjeeling", "Golden Triangle", "Himachal Pradesh"],
    tripsCount: 18,
    featuredTrips: ["golden-triangle-india"],
  },
];
