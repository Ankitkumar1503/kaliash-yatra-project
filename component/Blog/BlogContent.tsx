"use client";

import React, { useState } from "react";
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
  const defaultCover = "/images/destinations/mount-kailash.jpg";
  const defaultAvatar = "/images/testimonials/avatar-1.jpg";

  const [heroSrc, setHeroSrc] = useState(article.heroImage || defaultCover);
  const [authorSrc, setAuthorSrc] = useState(article.author.image || defaultAvatar);

  return (
    <article className="w-full flex flex-col space-y-7 sm:space-y-8">
      {/* 1. Article Hero Image */}
      <div className="relative w-full aspect-[16/8] sm:aspect-[16/7.5] overflow-hidden bg-gray-100 rounded-2xs shadow-xs">
        <Image
          src={heroSrc}
          alt={article.heroImageAlt || article.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 75vw"
          className="object-cover object-center"
          onError={() => setHeroSrc(defaultCover)}
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
            src={authorSrc}
            alt={article.author.name || "Author"}
            fill
            sizes="44px"
            className="object-cover object-top"
            onError={() => setAuthorSrc(defaultAvatar)}
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
          <SectionBlock key={section.id} section={section} />
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

function SectionBlock({ section }: { section: BlogDetailArticle["sections"][number] }) {
  const [imgSrc, setImgSrc] = useState(section.image || "");
  const [imgError, setImgError] = useState(false);

  return (
    <section className="flex flex-col space-y-3.5 sm:space-y-4">
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
      {imgSrc && !imgError && (
        <div className="relative w-full aspect-[16/6.8] overflow-hidden bg-gray-100 rounded-2xs shadow-xs my-2 sm:my-3">
          <Image
            src={imgSrc}
            alt={section.imageAlt || section.title}
            fill
            sizes="(max-width: 1024px) 100vw, 75vw"
            className="object-cover object-center"
            onError={() => setImgError(true)}
          />
        </div>
      )}
    </section>
  );
}
