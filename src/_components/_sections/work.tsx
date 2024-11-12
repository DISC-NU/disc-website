"use client";

import Image from "next/image";
import { ReactNode } from "react";

interface Logo {
  type: "image";
  src: string;
}

interface Company {
  name: string;
  logo: Logo;
  website: string;
}

interface CompanyLogoProps {
  logo: Logo;
  name: string;
  website: string;
}

interface MarqueeProps {
  children: ReactNode;
  direction?: "normal" | "reverse";
}

const companies: Company[] = [
  {
    name: "Salesforce",
    logo: {
      type: "image",
      src: "/salesforce.png",
    },
    website: "https://www.salesforce.com/",
  },
  {
    name: "Group one Trading",
    logo: {
      type: "image",
      src: "/group_one.jpeg",
    },
    website: "https://www.group1.com/",
  },
  {
    name: "Citadel",
    logo: {
      type: "image",
      src: "/citadel.png",
    },
    website: "https://www.citadel.com/",
  },
  {
    name: "Amazon",
    logo: {
      type: "image",
      src: "/amazon.png",
    },
    website: "https://www.amazon.com/",
  },
  {
    name: "Google",
    logo: {
      type: "image",
      src: "/google.png",
    },
    website: "https://www.google.com/",
  },
  {
    name: "Microsoft",
    logo: {
      type: "image",
      src: "/microsoft.png",
    },
    website: "https://www.microsoft.com/",
  },
  {
    name: "Roblox",
    logo: {
      type: "image",
      src: "/roblox.png",
    },
    website: "https://www.roblox.com/",
  },
  {
    name: "Splunk",
    logo: {
      type: "image",
      src: "/splunk.png",
    },
    website: "https://www.splunk.com/",
  },
  {
    name: "rubrik",
    logo: {
      type: "image",
      src: "/rubrik.png",
    },
    website: "https://www.rubrik.com/",
  },
  {
    name: "Boston Consulting Group",
    logo: {
      type: "image",
      src: "/bcg.png",
    },
    website: "https://www.bcg.com/",
  },
];

const firstRow = companies.slice(0, Math.ceil(companies.length / 2));
const secondRow = companies.slice(Math.ceil(companies.length / 2));

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
          src={logo.src}
          alt={`${name} logo`}
          fill
          className="object-contain transition-opacity duration-200 group-hover:opacity-70"
          sizes="(max-width: 128px) 100vw, 128px"
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
    <div className="relative w-full py-12 bg-background">
      <div className="flex flex-col gap-12">
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
