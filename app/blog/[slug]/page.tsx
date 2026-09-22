import type { Metadata } from "next";
import Header from "@/component/Header/Header";
import PageBanner from "@/component/PageBanner/PageBanner";
import BlogArticleLayout from "@/component/Blog/BlogArticleLayout";
import TravelTips from "@/component/TravelTips/TravelTips";
import { allBlogPosts } from "@/component/Blog/blogData";
import { defaultBlogArticle } from "@/component/Blog/blogDetailData";
import NewsletterSubscription from "@/component/NewsletterSubscription/NewsletterSubscription";
import Footer from "@/component/Footer/Footer";

type Props = {
  params: Promise<{ slug: string }> | { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams?.slug || "";

  return {
    title: `${defaultBlogArticle.title} - Mission Nepal Holiday`,
    description: defaultBlogArticle.bannerDescription,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams?.slug;

  // Uses default Everest Base Camp article or matching article data
  const article = defaultBlogArticle;

  // 4 related travel tips cards as shown in reference
  const relatedPosts = allBlogPosts.slice(0, 4);

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
          posts={relatedPosts}
        />

        {/* 5. Shared Newsletter Subscription */}
        <NewsletterSubscription />
      </main>

      {/* 6. Shared Footer */}
      <Footer />
    </div>
  );
}
