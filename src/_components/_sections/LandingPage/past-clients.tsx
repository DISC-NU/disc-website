import Image from "next/image";
import { ReactNode, memo, useMemo } from "react";
import { clients } from "@/utils/constants";
import SubheadingWithHighlight from "@/_components/ui/subheading-with-highlight";

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

const useImagePath = (src: string) => {
  return useMemo(() => {
    return process.env.NODE_ENV === "production" ? src : src;
  }, [src]);
};

const ClientLogo = memo(({ logo, name, website }: Client) => {
  const imagePath = useImagePath(logo.src);

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
          priority={false}
          unoptimized
        />
      </div>
    </a>
  );
});

ClientLogo.displayName = "ClientLogo";

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

  const repeatedChildren = useMemo(() => {
    return [1, 2, 3].map((key) => (
      <div
        key={key}
        className="flex shrink-0 items-center gap-4 animate-marquee"
        // @ts-expect-error idk
        style={directionStyle}
      >
        {children}
      </div>
    ));
  }, [children, directionStyle]);

  return (
    <div
      className="flex w-full overflow-hidden [--gap:1rem] [--duration:40s]"
      style={maskStyle}
    >
      {repeatedChildren}
    </div>
  );
});

Marquee.displayName = "Marquee";

const useClientItems = () => {
  return useMemo(() => {
    return clients.map((client, idx) => (
      <ClientLogo key={`${client.name}-${idx}`} {...client} />
    ));
  }, []);
};

export default function ClientMarquee() {
  const clientItems = useClientItems();

  return (
    <div className="relative w-full py-24 bg-white">
      <SubheadingWithHighlight highlight={true} className="py-12 mb-12">
        DISC Client Portfolio
      </SubheadingWithHighlight>
      <div className="flex flex-col max-w-7xl items-center justify-center mx-auto gap-12">
        <Marquee>{clientItems}</Marquee>
      </div>
    </div>
  );
}
