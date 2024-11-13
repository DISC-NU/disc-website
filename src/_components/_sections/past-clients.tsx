"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { clients } from "@/utils/constants";

interface Client {
  name: string;
  logo: {
    type: string;
    src: string;
  };
  website: string;
}

interface MarqueeProps {
  children: ReactNode;
  direction?: "normal" | "reverse";
}

const getImagePath = (src: string) => {
  return process.env.NODE_ENV === "production" ? `/disc-website${src}` : src;
};

const ClientLogo = ({ logo, name, website }: Client) => {
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

export default function ClientMarquee() {
  return (
    <div className="relative w-full p-36 bg-white">
      <div className="flex flex-col max-w-7xl items-center justify-center mx-auto">
        <Marquee>
          {clients.map((client, idx) => (
            <ClientLogo key={`${client.name}-${idx}`} {...client} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
