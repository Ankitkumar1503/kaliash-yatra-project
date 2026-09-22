"use client";

import Image from "next/image";
import Link from "next/link";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageBannerProps {
  backgroundImage: string;
  breadcrumbs: BreadcrumbItem[];
  title: string;
  description?: string;
  overlayOpacity?: number;
  className?: string;
}

export default function PageBanner({
  backgroundImage,
  breadcrumbs,
  title,
  description,
  overlayOpacity = 0.42,
  className = "",
}: PageBannerProps) {
  return (
    <section
      className={`relative w-full overflow-hidden flex items-center min-h-[230px] sm:min-h-[260px] md:min-h-[290px] lg:h-[315px] ${className}`}
    >
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center w-full h-full select-none pointer-events-none"
      />

      {/* Dark / Blue Thematic Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: `rgba(12, 48, 78, ${overlayOpacity})`,
        }}
      />

      {/* Content Container aligned with site-container */}
      <div className="site-container relative z-10 w-full max-w-[1360px] mx-auto py-6 sm:py-8 md:py-10 flex flex-col justify-center items-start text-left">
        {/* Dynamic Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-2 sm:mb-2.5">
            <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-[16px] font-medium text-white/90 uppercase tracking-wider">
              {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <li key={index} className="flex items-center">
                    {index > 0 && (
                      <span className="mx-2 text-white/70 select-none text-xs sm:text-sm">
                        →
                      </span>
                    )}
                    {item.href && !isLast ? (
                      <Link
                        href={item.href}
                        className="hover:text-white transition-colors underline-offset-4 hover:underline"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-white font-semibold">
                        {item.label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        {/* Page Title */}
        <h1
          className={`${anton.className} text-white uppercase text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[66px] leading-[1.05] tracking-tight mb-2 sm:mb-2.5 font-normal drop-shadow-xs`}
        >
          {title}
        </h1>

        {/* Subtitle / Description */}
        {description && (
          <p className="text-white/95 text-xs sm:text-sm md:text-[15.5px] lg:text-[17px] font-normal leading-relaxed max-w-[920px] drop-shadow-2xs">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
