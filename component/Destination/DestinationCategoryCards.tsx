"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export interface DestinationCategory {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  href: string;
}

export default function DestinationCategoryCards({
  items,
}: {
  items: DestinationCategory[];
}) {
  return (
    <section className="w-full bg-white py-6 sm:py-8 md:py-10">
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="relative aspect-[16/9.5] sm:aspect-[16/10] overflow-hidden group cursor-pointer shadow-xs hover:shadow-md transition-all duration-300 block"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 flex items-end justify-between z-10">
                <div className="pr-3">
                  <h3 className="text-white font-bold text-base sm:text-lg leading-tight uppercase tracking-wide">
                    {item.name}
                  </h3>
                  <p className="text-white/85 text-xs sm:text-[13px] font-normal leading-snug line-clamp-1 mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-black flex items-center justify-center shrink-0 shadow-md group-hover:bg-[#F26522] group-hover:text-white transition-all duration-200 transform group-hover:scale-105">
                  <FaArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
