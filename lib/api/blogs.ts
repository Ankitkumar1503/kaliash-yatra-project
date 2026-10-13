import type { BlogPostItem, BlogSection } from "@/data/types";
import type { BlogPost } from "@/component/TravelTips/TravelTips";
import type { BlogDetailArticle, PopularArticle } from "@/component/Blog/blogDetailData";
import { apiGet, type Paginated } from "./client";
import { resolveMediaUrl } from "./trips";

type Media = { id: number; url: string; type: string; alt: string } | null;
type ApiBlog = {
  id: number;
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  authorRole: string;
  heroImage: Media;
  authorImage: Media;
  heroImageAlt: string;
  category: string;
  intro: string | null;
  quote: string | null;
  sections?: Array<{ id: number; title: string; image: Media; imageAlt: string; paragraphs: string[] }>;
};

const DEFAULT_BLOG_IMAGE = "/images/blogs/blog-1.jpg";
const DEFAULT_AUTHOR_IMAGE = "/images/testimonials/avatar-1.jpg";

export function getBlogFallbackCover(slug?: string, category?: string): string {
  const s = String(slug || "").toLowerCase();
  const c = String(category || "").toLowerCase();
  if (s.includes("kailash") || s.includes("mansarovar") || c.includes("cultural") || c.includes("pilgrimage")) {
    return "/images/destinations/mount-kailash.jpg";
  }
  if (s.includes("everest") || s.includes("camp") || c.includes("trekking")) {
    return "/images/destinations/everest.jpg";
  }
  return DEFAULT_BLOG_IMAGE;
}

function formatDate(value: string) {
  const d = new Date(value);
  if (isNaN(d.getTime())) return "Recent";
  return `${String(d.getUTCDate()).padStart(2, "0")}/${String(d.getUTCMonth() + 1).padStart(2, "0")}/${d.getUTCFullYear()}`;
}

export function mapBlog(api: ApiBlog): BlogPostItem {
  const fallbackCover = getBlogFallbackCover(api.slug, api.category);
  const resolvedHero = resolveMediaUrl(api.heroImage?.url, fallbackCover);
  const resolvedAuthor = resolveMediaUrl(api.authorImage?.url, DEFAULT_AUTHOR_IMAGE);

  return {
    id: String(api.id),
    slug: api.slug,
    title: api.title,
    description: api.description || "",
    date: formatDate(api.date),
    author: api.author || "Editorial Team",
    authorRole: api.authorRole || "Travel Guide & Writer",
    authorImage: resolvedAuthor,
    heroImage: resolvedHero,
    heroImageAlt: api.heroImageAlt || api.title,
    category: api.category || "Travel Guides",
    intro: api.intro ?? undefined,
    quote: api.quote ?? undefined,
    sections: api.sections?.map((section) => ({
      id: String(section.id),
      title: section.title,
      paragraphs: section.paragraphs,
      image: section.image?.url ? resolveMediaUrl(section.image.url) : undefined,
      imageAlt: section.imageAlt,
    })),
  };
}

export function mapBlogPost(api: ApiBlog): BlogPost {
  const blog = mapBlog(api);
  return {
    id: blog.id,
    image: blog.heroImage,
    title: blog.title,
    dateAuthor: `${blog.date} - ${blog.author}`,
    href: `/blog/${blog.slug}`,
    category: blog.category,
  };
}

export function mapPopularArticle(api: ApiBlog): PopularArticle {
  const blog = mapBlog(api);
  return {
    id: blog.id,
    title: blog.title,
    date: blog.date,
    image: blog.heroImage,
    slug: blog.slug,
  };
}

export function mapBlogArticle(api: ApiBlog): BlogDetailArticle {
  const blog = mapBlog(api);
  return {
    slug: blog.slug,
    bannerTitle: (blog.category || "CULTURAL TOURS").toUpperCase(),
    bannerDescription: blog.description,
    breadcrumbLabel: blog.title.toUpperCase(),
    title: blog.title,
    heroImage: blog.heroImage,
    heroImageAlt: blog.heroImageAlt,
    intro: blog.intro ?? blog.description,
    author: {
      name: blog.author,
      role: blog.authorRole,
      image: blog.authorImage,
    },
    sections: (blog.sections ?? []) as BlogSection[],
    quote: blog.quote ?? "",
  };
}

export async function getBlogs(params: {
  search?: string;
  category?: string;
  sort?: "published" | "title";
  page?: number;
  limit?: number;
} = {}) {
  const response = await apiGet<Paginated<ApiBlog>>("blogs", params);
  return { ...response, items: response.items.map(mapBlog) };
}

export async function getBlog(slug: string) {
  try {
    return mapBlogArticle(await apiGet<ApiBlog>(`blogs/${encodeURIComponent(slug)}`));
  } catch (error) {
    if (error instanceof Error && "status" in error && (error as any).status === 404) return null;
    throw error;
  }
}

export async function getBlogPosts(limit = 100) {
  const response = await apiGet<Paginated<ApiBlog>>("blogs", { limit });
  return {
    ...response,
    items: response.items.map(mapBlogPost),
    related: response.items.map(mapPopularArticle),
  };
}
