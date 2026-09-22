import { Activity } from "./types";

export const activitiesData: Activity[] = [
  {
    id: "trekking",
    slug: "trekking",
    title: "Trekking & Mountaineering",
    shortDescription: "High-altitude mountain passes, base camp expeditions, and alpine trails.",
    description:
      "Trek along legendary Himalayan trails with certified Sherpa guides, stay in cozy teahouses, and gaze upon the highest peaks on planet Earth.",
    heroImage: "/images/destinations/everest.jpg",
    iconName: "hiking",
    badge: "POPULAR",
    tripsCount: 28,
    featuredTrips: ["everest-base-camp-trek", "annapurna-circuit-trek"],
  },
  {
    id: "cultural-tours",
    slug: "cultural-tours",
    title: "Cultural & Heritage Tours",
    shortDescription: "Centuries-old UNESCO temples, sacred stupas, monasteries, and living crafts.",
    description:
      "Immerse yourself in authentic rituals, living festivals, ancient palace squares, and historic Buddhist Dzongs across Nepal, Bhutan, Tibet, and India.",
    heroImage: "/images/destinations/kathmandu.jpg",
    iconName: "temple",
    badge: "HERITAGE",
    tripsCount: 19,
    featuredTrips: ["bhutan-cultural-odyssey", "kathmandu-valley-heritage"],
  },
  {
    id: "spiritual-journeys",
    slug: "spiritual-journeys",
    title: "Spiritual & Pilgrimage Yatra",
    shortDescription: "Sacred Mount Kailash, holy Lake Mansarovar, Muktinath, and Buddhist circuits.",
    description:
      "Deeply transformative pilgrimages to sacred mountain peaks, ancient meditation caves, and blessed waters of the Himalayas.",
    heroImage: "/images/destinations/mount-kailash.jpg",
    iconName: "spiritual",
    badge: "SACRED",
    tripsCount: 14,
    featuredTrips: ["kailash-mansarovar-yatra", "lhasa-central-tibet-explorer"],
  },
  {
    id: "adventure-sports",
    slug: "adventure-sports",
    title: "Himalayan Adventure & Rafting",
    shortDescription: "Whitewater rapids, paragliding over mountain lakes, and jungle safaris.",
    description:
      "Experience adrenaline-fueled whitewater expeditions, scenic mountain flights, ultralight adventures, and deep canyoning.",
    heroImage: "/images/adventures/adv-3.jpg",
    iconName: "rafting",
    badge: "ADVENTURE",
    tripsCount: 11,
    featuredTrips: ["annapurna-circuit-trek"],
  },
  {
    id: "wildlife-nature",
    slug: "wildlife-nature",
    title: "Wildlife Safaris & Nature",
    shortDescription: "Chitwan National Park, one-horned rhinos, Bengal tigers, and bird sanctuaries.",
    description:
      "Encounter rare one-horned rhinoceroses, Royal Bengal tigers, wild elephants, and exotic Himalayan flora in pristine national parks.",
    heroImage: "/images/gallery/gallery-4.jpg",
    iconName: "safari",
    badge: "WILDLIFE",
    tripsCount: 8,
    featuredTrips: ["kathmandu-valley-heritage"],
  },
];
