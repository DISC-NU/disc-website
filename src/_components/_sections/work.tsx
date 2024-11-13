"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { companies } from "@/utils/constants";
import { Logo } from "@/types";

interface CompanyLogoProps {
  logo: Logo;
  name: string;
  website: string;
}

interface MarqueeProps {
  children: ReactNode;
  direction?: "normal" | "reverse";
}

const firstRow = companies.slice(0, Math.ceil(companies.length / 2));
const secondRow = companies.slice(Math.ceil(companies.length / 2));

const getImagePath = (src: string) => {
  return process.env.NODE_ENV === "production" ? `/disc-website${src}` : src;
};

const CompanyLogo = ({ logo, name, website }: CompanyLogoProps) => {
  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-8 group flex items-center justify-center"
    >
      <div className="transform transition-all duration-200 hover:scale-110 w-32 h-16 relative">
        <Image
          src={getImagePath(logo.src)}
          alt={`${name} logo`}
          fill
          className="object-contain transition-opacity duration-200 group-hover:opacity-70"
          sizes="(max-width: 128px) 100vw, 128px"
          unoptimized
        />
      </div>
    </a>
  );
};

const Marquee = ({ children, direction = "normal" }: MarqueeProps) => {
  return (
    <div
      className="flex w-full overflow-hidden [--gap:1rem] [--duration:40s]"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
      }}
    >
      <div
        className="flex shrink-0 items-center gap-4 animate-marquee"
        style={{
          direction: direction === "reverse" ? "rtl" : "ltr",
        }}
      >
        {children}
      </div>
      <div
        className="flex shrink-0 items-center gap-4 animate-marquee"
        style={{
          direction: direction === "reverse" ? "rtl" : "ltr",
        }}
      >
        {children}
      </div>
      <div
        className="flex shrink-0 items-center gap-4 animate-marquee"
        style={{
          direction: direction === "reverse" ? "rtl" : "ltr",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default function CompanyMarquee() {
  return (
    <div className="relative w-full py-32 bg-background">
      <div className=" w-lg flex flex-col items-center mb-12">
        <h2 className="text-4xl font-bold">
          <span className="relative">
            <span className="relative z-10">Where Our Members Work</span>
            <span
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: "1.4375rem",
                background: "rgba(20, 189, 149, 0.20)",
              }}
            ></span>
          </span>
        </h2>
      </div>
      <div className="flex flex-col gap-12 max-w-7xl items-center justify-center mx-auto">
        <Marquee>
          {firstRow.map((company, idx) => (
            <CompanyLogo
              key={`${company.name}-${idx}`}
              logo={company.logo}
              name={company.name}
              website={company.website}
            />
          ))}
        </Marquee>
        <Marquee direction="reverse">
          {secondRow.map((company, idx) => (
            <CompanyLogo
              key={`${company.name}-${idx}`}
              logo={company.logo}
              name={company.name}
              website={company.website}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
