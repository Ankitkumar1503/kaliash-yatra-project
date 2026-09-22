import React from "react";
import BlogContent from "./BlogContent";
import BlogSidebar from "./BlogSidebar";
import { BlogDetailArticle } from "./blogDetailData";

interface BlogArticleLayoutProps {
  article: BlogDetailArticle;
}

export default function BlogArticleLayout({ article }: BlogArticleLayoutProps) {
  return (
    <section className="w-full bg-white py-10 sm:py-12 md:py-16">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Main Article Content (~70%) */}
          <div className="lg:col-span-8 xl:col-span-8">
            <BlogContent article={article} />
          </div>

          {/* Sidebar (~30%) */}
          <div className="lg:col-span-4 xl:col-span-4 pt-4 lg:pt-0">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
