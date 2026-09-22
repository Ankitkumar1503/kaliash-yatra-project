"use client";

import Image from "next/image";
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

export const defaultLeadershipTeam: TeamMember[] = [
  // Row 1
  {
    id: "pasang-sherpa-1",
    name: "Pasang Sherpa",
    role: "Founder & CEO",
    image: "/images/testimonials/avatar-2.jpg",
  },
  {
    id: "sanjana-rai-1",
    name: "Sanjana Rai",
    role: "Travel Consultant",
    image: "/images/testimonials/avatar-1.jpg",
  },
  {
    id: "kiran-thapa-1",
    name: "Kiran Thapa",
    role: "Operations Manager",
    image: "/images/testimonials/avatar-3.jpg",
  },
  {
    id: "anita-gurung-1",
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
  // Row 2 (repeated as shown in the reference design)
  {
    id: "pasang-sherpa-3",
    name: "Pasang Sherpa",
    role: "Founder & CEO",
    image: "/images/testimonials/avatar-2.jpg",
  },
  {
    id: "sanjana-rai-2",
    name: "Sanjana Rai",
    role: "Travel Consultant",
    image: "/images/testimonials/avatar-1.jpg",
  },
  {
    id: "kiran-thapa-2",
    name: "Kiran Thapa",
    role: "Operations Manager",
    image: "/images/testimonials/avatar-3.jpg",
  },
  {
    id: "anita-gurung-2",
    name: "Anita Gurung",
    role: "Customer Support",
    image: "/images/testimonials/avatar-1.jpg",
  },
  {
    id: "pasang-sherpa-4",
    name: "Pasang Sherpa",
    role: "Founder & CEO",
    image: "/images/testimonials/avatar-2.jpg",
  },
];

export interface LeadershipTeamProps {
  eyebrow?: string;
  title?: string;
  members?: TeamMember[];
  className?: string;
}

export default function LeadershipTeam({
  eyebrow = "LEADERSHIP TEAM",
  title = "GUIDED BY PURPOSE, DRIVEN BY PEOPLE.",
  members = defaultLeadershipTeam,
  className = "",
}: LeadershipTeamProps) {
  return (
    <section className={`w-full bg-white py-10 sm:py-12 md:py-14 ${className}`}>
      <div className="site-container">
        {/* Centered Heading Block */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <span className="text-[#F26522] text-xs sm:text-[13px] font-semibold tracking-wider uppercase block mb-1.5">
            {eyebrow}
          </span>
          <h2
            className={`${anton.className} text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] uppercase tracking-tight text-black leading-tight`}
          >
            {title}
          </h2>
        </div>

        {/* 5-Column Responsive Team Grid (2 Rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-6 xl:gap-7">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Portrait Image with clean ratio */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100 shadow-2xs group-hover:shadow-md transition-shadow rounded-none">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover object-top group-hover:scale-104 transition-transform duration-500"
                />
              </div>

              {/* Centered Name */}
              <h3 className="text-xs sm:text-sm md:text-[14.5px] font-bold text-gray-900 mt-2.5 group-hover:text-[#F26522] transition-colors leading-tight">
                {member.name}
              </h3>

              {/* Centered Role */}
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
