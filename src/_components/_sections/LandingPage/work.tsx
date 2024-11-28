import Image from "next/image";
import { ReactNode, useMemo, memo } from "react";
import { companies } from "@/utils/constants";
import { HeaderWithHighlight } from "@/_components/ui/header-with-highlight";
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

const useCompanyRows = () => {
  return useMemo(() => {
    const midPoint = Math.ceil(companies.length / 2);
    return {
      firstRow: companies.slice(0, midPoint),
      secondRow: companies.slice(midPoint),
    };
  }, []);
};

const getImagePath = (src: string) => {
  const isProduction = process.env.NODE_ENV === "production";
  return isProduction ? `/disc-website${src}` : src;
};

const CompanyLogo = memo(({ logo, name, website }: CompanyLogoProps) => {
  const imagePath = useMemo(() => getImagePath(logo.src), [logo.src]);

  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-8 group flex items-center justify-center"
    >
      <div className="transform transition-all duration-200 hover:scale-110 w-32 h-16 relative">
        <Image
          src={imagePath}
          alt={`${name} logo`}
          fill
          className="object-contain transition-opacity duration-200 group-hover:opacity-70"
          sizes="(max-width: 128px) 100vw, 128px"
          loading="lazy"
          unoptimized
          priority={false}
        />
      </div>
    </a>
  );
});

CompanyLogo.displayName = "CompanyLogo";

const Marquee = memo(({ children, direction = "normal" }: MarqueeProps) => {
  const maskStyle = useMemo(
    () => ({
      maskImage:
        "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
      WebkitMaskImage:
        "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
    }),
    []
  );

  const directionStyle = useMemo(
    () => ({
      direction: direction === "reverse" ? "rtl" : "ltr",
    }),
    [direction]
  );

  return (
    <div
      className="flex w-full overflow-hidden [--gap:1rem] [--duration:40s]"
      style={maskStyle}
    >
      {[1, 2, 3].map((key) => (
        <div
          key={key}
          className="flex shrink-0 items-center gap-4 animate-marquee"
          // @ts-expect-error idk
          style={directionStyle}
        >
          {children}
        </div>
      ))}
    </div>
  );
});

Marquee.displayName = "Marquee";

export default function CompanyMarquee() {
  const { firstRow, secondRow } = useCompanyRows();

  return (
    <div className="relative w-full py-32">
      <div className="w-lg flex flex-col items-center mb-12 py-24">
        <HeaderWithHighlight highlight={true}>
          Where our Members Work
        </HeaderWithHighlight>
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
