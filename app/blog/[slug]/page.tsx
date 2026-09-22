import type { Metadata } from "next";
import Header from "@/component/Header/Header";
import PageBanner from "@/component/PageBanner/PageBanner";
import BlogArticleLayout from "@/component/Blog/BlogArticleLayout";
import TravelTips, { BlogPost } from "@/component/TravelTips/TravelTips";
import { blogsData } from "@/data/blogs";
import { defaultBlogArticle, BlogDetailArticle } from "@/component/Blog/blogDetailData";
import NewsletterSubscription from "@/component/NewsletterSubscription/NewsletterSubscription";
import Footer from "@/component/Footer/Footer";

type Props = {
  params: Promise<{ slug: string }> | { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams?.slug || "";
  const found = blogsData.find((b) => b.slug === slug);
  const title = found ? found.title : defaultBlogArticle.title;
  const description = found ? found.description : defaultBlogArticle.bannerDescription;

  return {
    title: `${title} - Mission Nepal Holiday`,
    description,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams?.slug || "";

  // Find article from blogsData or fallback to default
  const found = blogsData.find((b) => b.slug === slug);
  const article: BlogDetailArticle = found
    ? {
        slug: found.slug,
        bannerTitle: found.category.toUpperCase(),
        bannerDescription: found.description,
        breadcrumbLabel: found.title.toUpperCase(),
        title: found.title,
        heroImage: found.heroImage,
        heroImageAlt: found.heroImageAlt,
        intro: found.intro || found.description,
        author: {
          name: found.author,
          role: found.authorRole,
          image: found.authorImage,
        },
        sections: found.sections || defaultBlogArticle.sections,
        quote: found.quote || defaultBlogArticle.quote,
      }
    : defaultBlogArticle;

  // 4 related travel tips cards excluding active article
  const otherBlogs = blogsData.filter((b) => b.slug !== slug);
  const relatedPosts: BlogPost[] = otherBlogs.map((b) => ({
    id: b.id,
    image: b.heroImage,
    title: b.title,
    dateAuthor: `${b.date} - ${b.author}`,
    href: `/blog/${b.slug}`,
  }));

  // Fallback if fewer than 4 related
  while (relatedPosts.length < 4) {
    relatedPosts.push({
      id: "rel-" + relatedPosts.length,
      image: "/images/blogs/blog-gotravel-1.jpg",
      title: "Where can I go? 5 amazing countries that are open right now",
      dateAuthor: "22/09/2022 - Admin",
      href: "/blog/countries-open-right-now",
    });
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      {/* 1. Shared Header */}
      <Header />

      <main className="flex-grow w-full">
        {/* 2. Reusable Secondary Page Banner */}
        <PageBanner
          backgroundImage="/images/destinations/mount-kailash.jpg"
          breadcrumbs={[
            { label: "HOME", href: "/" },
            { label: "BLOG", href: "/blog" },
            { label: article.breadcrumbLabel },
          ]}
          title={article.bannerTitle}
          description={article.bannerDescription}
        />

        {/* 3. Main Article Content & Sidebar (Two Columns) */}
        <BlogArticleLayout article={article} />

        {/* 4. Related / Travel Tips Section (4 cards in one row) */}
        <TravelTips
          eyebrow="Modern & Beautiful"
          title="STAY UPDATE WITH GOTRAVEL TIPS"
          posts={relatedPosts.slice(0, 4)}
        />

        {/* 5. Shared Newsletter Subscription */}
        <NewsletterSubscription />
      </main>

      {/* 6. Shared Footer */}
      <Footer />
    </div>
  );
}
