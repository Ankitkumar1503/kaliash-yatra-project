export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  tagline: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  featuredImage: string;
  badge?: string;
  regions: string[];
  tripsCount: number;
  featuredTrips: string[];
}

export interface Activity {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  iconName: string;
  badge?: string;
  tripsCount: number;
  featuredTrips: string[];
}

export interface RegionPlace {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

export interface RegionStat {
  value: string;
  label: string;
}

export interface RegionExperience {
  id: string;
  title: string;
  description: string;
  image: string;
  badge?: string;
}

export interface Region {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  heroImage: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  stats: RegionStat[];
  popularPlaces: RegionPlace[];
  experiences: RegionExperience[];
  featuredTrips: string[];
}

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  description: string;
  details?: {
    altitude?: string;
    trekkingTime?: string;
    accommodation?: string;
  };
}

export interface TripFAQ {
  question: string;
  answer: string;
}

export interface Trip {
  id: string;
  slug: string;
  title: string;
  country: string;
  region: string;
  activity: string;
  duration: string;
  days: number;
  price: string;
  originalPrice?: string;
  rating: number;
  reviewCount: number;
  difficulty: "Easy" | "Moderate" | "Challenging" | "Strenuous";
  maxAltitude: string;
  groupSize: string;
  badge?: string;
  heroImage: string;
  gallery: string[];
  overview: string[];
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  faqs: TripFAQ[];
}

export interface BlogSection {
  id: string;
  title: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  authorRole: string;
  authorImage: string;
  heroImage: string;
  heroImageAlt: string;
  category: string;
  intro?: string;
  sections?: BlogSection[];
  quote?: string;
}

export interface ReviewItem {
  id: string;
  rating: number;
  message: string;
  name: string;
  location: string;
  avatar: string;
  date?: string;
  title?: string;
  trip?: string;
}

export interface GuideItem {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  category: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}
