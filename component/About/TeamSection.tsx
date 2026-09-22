"use client";

import Image from "next/image";
import Link from "next/link";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

const defaultTeam: TeamMember[] = [
  {
    id: "pasang-sherpa-1",
    name: "Pasang Sherpa",
    role: "Founder & CEO",
    image: "/images/testimonials/avatar-2.jpg",
  },
  {
    id: "sanjana-rai",
    name: "Sanjana Rai",
    role: "Travel Consultant",
    image: "/images/testimonials/avatar-1.jpg",
  },
  {
    id: "kiran-thapa",
    name: "Kiran Thapa",
    role: "Operations Manager",
    image: "/images/testimonials/avatar-3.jpg",
  },
  {
    id: "anita-gurung",
    name: "Anita Gurung",
    role: "Customer Support",
    image: "/images/testimonials/avatar-1.jpg",
  },
  {
    id: "pasang-sherpa-2",
    name: "Pasang Sherpa",
    role: "Founder & CEO",
    image: "/images/testimonials/avatar-2.jpg",
  },
];

export interface TeamSectionProps {
  eyebrow?: string;
  title?: string;
  buttonText?: string;
  buttonHref?: string;
  members?: TeamMember[];
  className?: string;
}

export default function TeamSection({
  eyebrow = "MEET OUR TEAM",
  title = "THE PEOPLE BEHIND",
  buttonText = "Meet Our Team",
  buttonHref = "#team",
  members = defaultTeam,
  className = "",
}: TeamSectionProps) {
  return (
    <section className={`w-full bg-white py-10 sm:py-12 md:py-14 ${className}`}>
      <div className="site-container">
        {/* Section Header: Title on Left, Button on Right */}
        <div className="flex justify-between items-end mb-6 sm:mb-8">
          <div>
            <span className="text-[#F26522] text-xs sm:text-[13px] font-semibold tracking-wider uppercase block mb-1">
              {eyebrow}
            </span>
            <h2
              className={`${anton.className} text-2xl sm:text-3xl lg:text-[34px] uppercase tracking-tight text-black leading-tight`}
            >
              {title}
            </h2>
          </div>

          <Link
            href={buttonHref}
            className="border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-black text-xs sm:text-[13px] font-medium px-3.5 sm:px-4 py-1.5 rounded-md transition-colors flex items-center space-x-1.5 shadow-2xs group cursor-pointer shrink-0"
          >
            <span>{buttonText}</span>
            <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-xs">
              ↗
            </span>
          </Link>
        </div>

        {/* 5-Column Responsive Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Portrait Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100 shadow-2xs group-hover:shadow-md transition-shadow rounded-none">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover object-top group-hover:scale-104 transition-transform duration-500"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-xs sm:text-sm md:text-[14.5px] font-bold text-gray-900 mt-2.5 group-hover:text-[#F26522] transition-colors leading-tight">
                {member.name}
              </h3>
              <p className="text-gray-500 text-[11px] sm:text-xs mt-0.5 font-normal">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
