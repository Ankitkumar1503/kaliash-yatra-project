import React from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { BlogDetailArticle } from "./blogDetailData";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

interface BlogContentProps {
  article: BlogDetailArticle;
}

export default function BlogContent({ article }: BlogContentProps) {
  return (
    <article className="w-full flex flex-col space-y-7 sm:space-y-8">
      {/* 1. Article Hero Image */}
      <div className="relative w-full aspect-[16/8] sm:aspect-[16/7.5] overflow-hidden bg-gray-100 rounded-2xs shadow-xs">
        <Image
          src={article.heroImage}
          alt={article.heroImageAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 75vw"
          className="object-cover object-center"
        />
      </div>

      {/* 2. Article Title */}
      <h1 className="text-2xl sm:text-3xl md:text-[38px] lg:text-[42px] font-bold text-gray-900 leading-[1.18] tracking-tight">
        {article.title}
      </h1>

      {/* 3. Article Introduction */}
      <p className="text-gray-600 text-sm sm:text-[15px] md:text-[16px] leading-relaxed font-normal">
        {article.intro}
      </p>

      {/* 4. Author Row */}
      <div className="flex items-center space-x-3.5 py-1">
        <div className="relative w-11 h-11 rounded-full overflow-hidden bg-gray-200 shrink-0 border border-gray-100 shadow-2xs">
          <Image
            src={article.author.image}
            alt={article.author.name}
            fill
            sizes="44px"
            className="object-cover object-top"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-900 leading-tight">
            {article.author.name}
          </span>
          <span className="text-xs text-gray-500 mt-0.5">
            {article.author.role}
          </span>
        </div>
      </div>

      {/* 5. Article Sections */}
      <div className="flex flex-col space-y-8 sm:space-y-9 pt-2">
        {article.sections.map((section) => (
          <section key={section.id} className="flex flex-col space-y-3.5 sm:space-y-4">
            {/* Section Title */}
            <h2
              className={`${playfair.className} text-xl sm:text-2xl md:text-[26px] font-bold text-gray-900 tracking-tight`}
            >
              {section.title}
            </h2>

            {/* Paragraphs */}
            {section.paragraphs.map((p, pIdx) => (
              <p
                key={pIdx}
                className="text-gray-600 text-sm sm:text-[15px] md:text-[15.5px] leading-relaxed font-normal"
              >
                {p}
              </p>
            ))}

            {/* Optional Section Image */}
            {section.image && (
              <div className="relative w-full aspect-[16/6.8] overflow-hidden bg-gray-100 rounded-2xs shadow-xs my-2 sm:my-3">
                <Image
                  src={section.image}
                  alt={section.imageAlt || section.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 75vw"
                  className="object-cover object-center"
                />
              </div>
            )}
          </section>
        ))}
      </div>

      {/* 6. Highlighted Quote Block */}
      {article.quote && (
        <div className="w-full bg-[#FFF3EB] border-l-4 border-[#F26522] p-5 sm:p-7 md:p-8 rounded-xs my-3 sm:my-4">
          <p className="text-[#F26522] text-sm sm:text-base md:text-[17px] font-semibold leading-relaxed">
            &ldquo;{article.quote}&rdquo;
          </p>
        </div>
      )}
    </article>
  );
}
