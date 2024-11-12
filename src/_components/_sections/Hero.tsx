"use client";

import React, { useRef, useState, useEffect } from "react";
import HeroTreeMap from "@/_components/HeroTreeMap";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-w-full h-screen flex">
      <div className="w-1/2 h-full p-8 flex flex-col justify-center items-center">
        <div className="max-w-lg text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black">
            WELCOME TO
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#40B4B4]">
            DISC NU
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8">
            A Northwestern University community dedicated to Designing &
            Innovating for Social Change
          </p>
          <Button
            className="bg-[#40B4B4] hover:bg-[#369999] text-white font-semibold"
            onClick={() =>
              window.open("https://discord.gg/mqRQ7s9CyS", "_blank")
            }
          >
            Join today
          </Button>
        </div>
      </div>

      <div ref={containerRef} className="w-1/2 h-full">
        <HeroTreeMap width={dimensions.width} height={dimensions.height} />
      </div>
    </div>
  );
}
