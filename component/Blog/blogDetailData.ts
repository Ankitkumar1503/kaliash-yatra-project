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
