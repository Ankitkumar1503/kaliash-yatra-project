import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/component/Header/Header";
import PageBanner from "@/component/PageBanner/PageBanner";
import BlogArticleLayout from "@/component/Blog/BlogArticleLayout";
import TravelTips, { type BlogPost } from "@/component/TravelTips/TravelTips";
import type { PopularArticle } from "@/component/Blog/blogDetailData";
import NewsletterSubscription from "@/component/NewsletterSubscription/NewsletterSubscription";
import Footer from "@/component/Footer/Footer";
import { ApiRequestError } from "@/lib/api/client";
import { getBlog, getBlogPosts } from "@/lib/api/blogs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const article = await getBlog(slug);
    if (!article) notFound();
    return {
      title: `${article.title} - Mission Nepal Holiday`,
      description: article.bannerDescription,
    };
  } catch (error) {
    if (error instanceof Error && "status" in error && error.status === 404)
      notFound();
    return {
      title: `${slug} - Mission Nepal Holiday`,
      description: "Read travel stories from Mission Nepal Holiday.",
    };
  }
}
export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let article: Awaited<ReturnType<typeof getBlog>> = null;
  let loadError: unknown;
  let related: BlogPost[] = [];
  let popular: PopularArticle[] = [];
  try {
    const result = await Promise.all([getBlog(slug), getBlogPosts()]);
    article = result[0];
    related = result[1].items
      .filter((post) => post.href !== `/blog/${slug}`)
      .slice(0, 4);
    popular = result[1].related
      .filter((post) => post.slug !== slug)
      .slice(0, 5);
  } catch (error) {
    loadError = error;
  }
  if (!loadError && !article) notFound();
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <Header />
      <main className="flex-grow w-full">
        {loadError || !article ? (
          <section
            className="site-container py-16 text-center text-gray-600"
            role="alert"
          >
            {loadError instanceof ApiRequestError
              ? loadError.message
              : "Unable to load this article right now."}
          </section>
        ) : (
          <>
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
            <BlogArticleLayout article={article} popular={popular} />
            <TravelTips
              eyebrow="Modern & Beautiful"
              title="STAY UPDATE WITH GOTRAVEL TIPS"
              posts={related}
            />
          </>
        )}
        <NewsletterSubscription />
      </main>
      <Footer />
    </div>
  );
}
