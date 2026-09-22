export interface BlogDetailSection {
  id: string;
  title: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
}

export interface PopularArticle {
  id: string;
  title: string;
  date: string;
  image: string;
  slug: string;
}

export interface BlogDetailArticle {
  slug: string;
  bannerTitle: string;
  bannerDescription: string;
  breadcrumbLabel: string;
  title: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  sections: BlogDetailSection[];
  quote: string;
}

export const defaultBlogArticle: BlogDetailArticle = {
  slug: "everest-base-camp-a-journey-that-changes-you",
  bannerTitle: "EVEREST BASE CAMP",
  bannerDescription:
    "From breathtaking views to unforgettable life lessons, discover why Everest Base Camp is more than just a trek — it's a transformative experience.",
  breadcrumbLabel: "EVEREST BASE CAMP: A JOURNEY THAT CHANGES YOU",
  title: "Everest Base Camp: A Journey That Changes You",
  heroImage: "/images/destinations/mount-kailash.jpg",
  heroImageAlt: "Himalayan mountain landscape with prayer flags overlooking Mount Everest",
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  author: {
    name: "Sarah Mitchell",
    role: "Travel Enthusiast & Writer",
    image: "/images/testimonials/avatar-1.jpg",
  },
  sections: [
    {
      id: "dream-begins",
      title: "1. The Dream Begins",
      paragraphs: [
        "For many, Everest Base Camp (EBC) is more than a destination — it's a dream. A journey to the foot of the world's highest peak represents adventure, personal growth and a connection with nature that few experiences can match.",
        "The trek begins in the vibrant city of Kathmandu, where ancient temples, bustling streets and warm smiles set the tone for the adventure ahead.",
      ],
      image: "/images/blogs/blog-gotravel-3.jpg",
      imageAlt: "Hiker standing on cliff edge overlooking turquoise mountain lake and snow covered peaks",
    },
    {
      id: "trails-villages",
      title: "2. Trails, Villages & Warm Smiles",
      paragraphs: [
        "As you make your way through charming Sherpa villages like Namche Bazaar, Tengboche and Dingboche, you'll be surrounded by incredible landscape, prayer flags fluttering in the wind and the rich culture of the people.",
        "Daily life on the trail offers a humbling reminder of resilience and simple contentment.",
      ],
    },
    {
      id: "the-reward",
      title: "3. The Reward: Everest Base Camp",
      paragraphs: [
        "Reaching Everest Base Camp at 5,364 meters is a monumental moment.",
        "Standing at the base of the world's tallest peak surrounded by ancient glaciers, you'll feel a profound sense of accomplishment and awe. The vistas across the Khumbu Icefall and towering peaks are a reward that stays with you forever.",
      ],
    },
    {
      id: "more-than-trek",
      title: "4. More Than Just a Trek",
      paragraphs: [
        "The lessons of the trail stay with you long after the trek is over — from learning to pace yourself to appreciating the warmth of a shared meal in a mountain teahouse.",
        "It's a journey that transforms your perspective on what's possible.",
      ],
    },
  ],
  quote:
    "The mountains teach us that it's not about how fast you reach the top, but about the courage to keep going.",
};

export const popularArticles: PopularArticle[] = [
  {
    id: "p1",
    title: "Top 10 Places to Visit in Bhutan",
    date: "5 Mar 2026",
    image: "/images/destinations/mount-kailash.jpg",
    slug: "top-10-places-to-visit-in-bhutan",
  },
  {
    id: "p2",
    title: "Top 10 Places to Visit in Bhutan",
    date: "5 Mar 2026",
    image: "/images/destinations/everest.jpg",
    slug: "top-10-places-to-visit-in-bhutan-2",
  },
  {
    id: "p3",
    title: "Top 10 Places to Visit in Bhutan",
    date: "5 Mar 2026",
    image: "/images/destinations/mount-kailash.jpg",
    slug: "top-10-places-to-visit-in-bhutan-3",
  },
  {
    id: "p4",
    title: "Top 10 Places to Visit in Bhutan",
    date: "5 Mar 2026",
    image: "/images/destinations/kathmandu.jpg",
    slug: "top-10-places-to-visit-in-bhutan-4",
  },
  {
    id: "p5",
    title: "Top 10 Places to Visit in Bhutan",
    date: "5 Mar 2026",
    image: "/images/destinations/pokhara.jpg",
    slug: "top-10-places-to-visit-in-bhutan-5",
  },
  {
    id: "p6",
    title: "Top 10 Places to Visit in Bhutan",
    date: "5 Mar 2026",
    image: "/images/destinations/mount-kailash.jpg",
    slug: "top-10-places-to-visit-in-bhutan-6",
  },
];
